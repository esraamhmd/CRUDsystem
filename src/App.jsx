import { useState, useCallback } from 'react'
import TopBar from './components/TopBar'
import FormCard from './components/FormCard'
import SearchCard from './components/SearchCard'
import ProductTable from './components/ProductTable'

const LS_KEY = 'product'
const save = d => localStorage.setItem(LS_KEY, JSON.stringify(d))

const SEED = [
  { title:'wireless headphones',  price:'120', taxes:'17', ads:'6',  discount:'10', total:'133', count:'1', category:'electronics' },
  { title:'running shoes',        price:'85',  taxes:'12', ads:'4',  discount:'5',  total:'96',  count:'1', category:'sports'      },
  { title:'coffee maker',         price:'60',  taxes:'8',  ads:'3',  discount:'0',  total:'71',  count:'1', category:'kitchen'     },
  { title:'office chair',         price:'200', taxes:'28', ads:'10', discount:'20', total:'218', count:'1', category:'furniture'   },
  { title:'mechanical keyboard',  price:'95',  taxes:'13', ads:'5',  discount:'8',  total:'105', count:'1', category:'electronics' },
  { title:'yoga mat',             price:'30',  taxes:'4',  ads:'2',  discount:'0',  total:'36',  count:'1', category:'sports'      },
  { title:'desk lamp',            price:'45',  taxes:'6',  ads:'2',  discount:'3',  total:'50',  count:'1', category:'furniture'   },
  { title:'protein powder',       price:'55',  taxes:'8',  ads:'3',  discount:'5',  total:'61',  count:'1', category:'health'      },
  { title:'backpack',             price:'70',  taxes:'10', ads:'4',  discount:'7',  total:'77',  count:'1', category:'accessories' },
  { title:'smart watch',          price:'150', taxes:'21', ads:'8',  discount:'15', total:'164', count:'1', category:'electronics' },
]

const load = () => {
  try {
    const stored = JSON.parse(localStorage.getItem(LS_KEY))
    if (stored && stored.length > 0) return stored
    save(SEED)
    return SEED
  } catch { return SEED }
}

export default function App() {
  const [dark, setDark]           = useState(true)
  const [data, setData]           = useState(load)
  const [searchVal, setSearchVal] = useState('')
  const [searchMode, setSearchMode] = useState('title')
  const [editIdx, setEditIdx]     = useState(null)

  const bg     = dark ? '#061E29' : '#f0f7fa'
  const color  = dark ? '#d4edf5' : '#0d2a3f'
  const cardBg = dark ? '#0a2e3f' : '#ffffff'

  const toggleMode = () => setDark(d => !d)

  const addProduct = useCallback((pro, count) => {
    setData(prev => {
      const arr = [...prev]
      const n = count > 1 ? count : 1
      for (let i = 0; i < n; i++) arr.push({ ...pro })
      save(arr)
      return arr
    })
  }, [])

  const updateProduct = useCallback((idx, pro) => {
    setData(prev => {
      const arr = [...prev]
      arr[idx] = { ...pro }
      save(arr)
      return arr
    })
    setEditIdx(null)
  }, [])

  const deleteProduct = useCallback(idx => {
    setData(prev => {
      const arr = prev.filter((_, i) => i !== idx)
      save(arr)
      return arr
    })
  }, [])

  const deleteAll = useCallback(() => {
    localStorage.removeItem(LS_KEY)
    setData([])
  }, [])

  const startEdit = useCallback(idx => {
    setEditIdx(idx)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [])

  const filtered = searchVal
    ? data.filter(d => (d[searchMode] || '').toLowerCase().includes(searchVal.toLowerCase()))
    : data

  return (
    <div style={{ background: bg, color, minHeight: '100vh', fontFamily: "'IosevkaCharon', system-ui, sans-serif", transition: 'background .45s, color .45s' }}>
      <main className="relative z-10 max-w-265 mx-auto px-3 sm:px-5 pb-16">
        <TopBar dark={dark} toggleMode={toggleMode} />
        <FormCard
          dark={dark} cardBg={cardBg}
          editIdx={editIdx}
          editData={editIdx !== null ? data[editIdx] : null}
          onAdd={addProduct} onUpdate={updateProduct}
          onCancelEdit={() => setEditIdx(null)}
        />
        <SearchCard
          dark={dark} cardBg={cardBg}
          searchVal={searchVal} searchMode={searchMode}
          onSearch={setSearchVal} onSetMode={setSearchMode}
        />
        <ProductTable
          dark={dark} cardBg={cardBg}
          data={filtered} allCount={data.length}
          onEdit={startEdit} onDelete={deleteProduct} onDeleteAll={deleteAll}
        />
      </main>
    </div>
  )
}