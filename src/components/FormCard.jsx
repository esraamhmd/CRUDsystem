import { useState } from 'react'
import Lottie from './Lottie'

const EMPTY = { title:'', price:'', taxes:'', ads:'', discount:'', count:'1', category:'' }

function buildInitial(editData) {
  if (!editData) return EMPTY
  return { ...editData, count: editData.count || '1' }
}


function PriceInput({ placeholder, value, onChange, dark, inpCls }) {
  return (
    <div className="relative flex items-center">
      <span
        className="absolute left-3 font-bold pointer-events-none select-none"
        style={{ color: dark ? '#5ba3bf' : '#1D546D', fontSize: '1rem' }}
      >
        $
      </span>
      <input
        type="number"
        className={inpCls}
        style={{ paddingLeft: '1.6rem' }}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </div>
  )
}

function InnerForm({ dark, cardBg, editIdx, initialData, onAdd, onUpdate, onCancelEdit }) {
  const [form, setForm] = useState(() => buildInitial(initialData))

  const set = (k, v) => setForm(f => ({ ...f, [k]: v }))

  const total = (form.price !== '' && form.taxes !== '' && form.ads !== '')
    ? (+form.price + +form.taxes + +form.ads) - +form.discount
    : null

  const handleSubmit = () => {
    const { title, price, taxes, ads, discount, count, category } = form
    if (!title || !price || !taxes || !ads || !discount || !category || +count >= 100) return
    const pro = {
      title: title.toLowerCase(), price, taxes, ads, discount,
      total: total ?? '', category: category.toLowerCase()
    }
    if (editIdx !== null) onUpdate(editIdx, pro)
    else onAdd(pro, +count)
    setForm(EMPTY)
  }

  const inp = `inp${dark ? '' : ' inp-light'}`

  return (
    <div
      className="btn-sh relative overflow-hidden rounded-2xl border p-6 mb-5 animate-fu-1 transition-[background,border-color,box-shadow] duration-400 shadow-card hover:shadow-cardh"
      style={{ background: cardBg, borderColor: '#1D546D' }}
    >
      <div
        className="flex items-center gap-3 text-xs font-extrabold tracking-widest uppercase mb-4"
        style={{ color: dark ? '#1D546D' : '#0d3a50' }}
      >
        <Lottie src="/plus.lottie" className="lottie-icon w-14 h-14 shrink-0" />
        Create Product
      </div>

      <div className="flex flex-col gap-3">
        <input className={inp} placeholder="Product Title"
               value={form.title} onChange={e => set('title', e.target.value)} />

        <div className="grid gap-2 items-center" style={{ gridTemplateColumns: 'repeat(4,1fr) auto' }}>
          {[
            { id:'price',    label:'Price'    },
            { id:'taxes',    label:'Taxes'    },
            { id:'ads',      label:'Ads'      },
            { id:'discount', label:'Discount' },
          ].map(({ id, label }) => (
            <PriceInput
              key={id}
              id={id}
              placeholder={label}
              value={form[id]}
              onChange={e => set(id, e.target.value)}
              dark={dark}
              inpCls={inp}
            />
          ))}
          <small
            className="px-4 py-2 rounded-xl text-xs font-extrabold min-w-24 text-center whitespace-nowrap text-white transition-all duration-400"
            style={{
              background: total !== null ? '#1a7a4a' : '#c0392b',
              boxShadow:  total !== null ? '0 4px 22px rgba(26,122,74,.5)' : '0 4px 22px rgba(192,57,43,.55)'
            }}
          >
            {total !== null ? `$ ${total}` : 'Total: 0'}
          </small>
        </div>

        <div className="grid gap-3" style={{ gridTemplateColumns: editIdx !== null ? '1fr' : '1fr 2fr' }}>
          {editIdx === null && (
            <input type="number" className={inp} placeholder="Count"
                   value={form.count} onChange={e => set('count', e.target.value)} />
          )}
          <input className={inp} placeholder="Category"
                 value={form.category} onChange={e => set('category', e.target.value)} />
        </div>

        <div className="flex gap-3">
          <button
            onClick={handleSubmit}
            className="btn-sh relative overflow-hidden flex-1 h-13 rounded-full font-bold text-sm text-white flex items-center justify-center gap-2 cursor-pointer bg-bp-grad shadow-bp transition-all duration-250 hover:bg-bp-gradh hover:shadow-bph hover:-translate-y-0.5 hover:scale-102 active:scale-95"
          >
            <Lottie src="/Create!.lottie" className="lottie-btn w-10 h-10 shrink-0 pointer-events-none" />
            <span>{editIdx !== null ? 'Update Product' : 'Create Product'}</span>
          </button>
          {editIdx !== null && (
            <button
              onClick={onCancelEdit}
              className="btn-sh relative overflow-hidden px-6 h-13 rounded-full font-bold text-sm text-white flex items-center justify-center cursor-pointer bg-br-grad shadow-br-btn transition-all duration-250 hover:bg-br-gradh hover:shadow-brh hover:-translate-y-0.5 active:scale-95"
            >
              Cancel
            </button>
          )}
        </div>
      </div>
    </div>
  )
}

export default function FormCard(props) {
  const { editIdx, editData } = props
  return <InnerForm key={editIdx ?? 'create'} {...props} initialData={editData} />
}