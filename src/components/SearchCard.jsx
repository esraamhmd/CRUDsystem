import Lottie from './Lottie'

export default function SearchCard({ dark, cardBg, searchVal, searchMode, onSearch, onSetMode }) {
  return (
    <div
      className="btn-sh relative overflow-hidden rounded-2xl border p-5 mb-5 animate-fu-2 transition-[background,border-color,box-shadow] duration-400 shadow-card hover:shadow-cardh"
      style={{ background: cardBg, borderColor: '#1D546D' }}
    >
 
      <div
        className="flex items-center gap-3 font-extrabold tracking-widest uppercase mb-4"
        style={{
          fontSize: 'clamp(1rem,2vw,1.2rem)',
          color: dark ? '#ffffff' : '#0d3a50'
        }}
      >
        <Lottie src="/searching.lottie" className="lottie-icon w-14 h-14 shrink-0" />
        Search Products
      </div>

      <div className="flex flex-col gap-3">
        <input
          className={`inp${dark ? '' : ' inp-light'}`}
          placeholder={`Search by ${searchMode}…`}
          value={searchVal}
          onChange={e => onSearch(e.target.value)}
        />
        <div className="flex gap-3">
          {['title', 'category'].map(m => (
            <button
              key={m}
              onClick={() => { onSetMode(m); onSearch('') }}
              className={`btn-sh relative overflow-hidden flex-1 h-11 rounded-full font-bold text-white border cursor-pointer transition-all duration-250 hover:bg-bs-gradh hover:shadow-bsh hover:-translate-y-0.5 hover:scale-102 active:scale-95 ${searchMode === m ? 'bg-bs-gradh' : 'bg-bs-grad'}`}
              style={{ borderColor: '#1D546D', fontSize: '1rem' }}
            >
              By {m.charAt(0).toUpperCase() + m.slice(1)}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}