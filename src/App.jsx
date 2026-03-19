import { useState, useCallback } from 'react'
import TopBar from './components/TopBar'
import FormCard from './components/FormCard'
import SearchCard from './components/SearchCard'
import ProductTable from './components/ProductTable'

const LS_KEY = 'product'
const load = () => { try { return JSON.parse(localStorage.getItem(LS_KEY)) || [] } catch { return [] } }
const save = d => localStorage.setItem(LS_KEY, JSON.stringify(d))

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
    <div style={{ background: bg, color, minHeight: '100vh', fontFamily: "'Nunito', system-ui, sans-serif", transition: 'background .45s, color .45s' }}>
      <div className="relative z-10 max-w-265 mx-auto px-5 pb-16">
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
      </div>
    </div>
  )
}