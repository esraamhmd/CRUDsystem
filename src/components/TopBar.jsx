import { useTypewriter } from '../useTypewriter'

const base = import.meta.env.BASE_URL

export default function TopBar({ dark, toggleMode }) {
  const title = useTypewriter('CRUD App')

  return (
    <div className="flex items-center justify-between py-5 animate-[fu_0.6s_cubic-bezier(0.22,0.68,0,1.2)_both]">
      <div className="w-36" />

      <div className="text-center">
        <h2
          className="font-black uppercase tracking-widest min-h-6"
          style={{
            fontSize: 'clamp(2.4rem,5vw,3.5rem)',
            color: '#1D546D',
            textShadow: '0 0 22px rgba(29,84,109,.8),0 0 50px rgba(91,163,191,.3),0 2px 6px rgba(0,0,0,.5)'
          }}
        >
          {title}
          <span
            className="inline-block w-0.75 h-[.9em] ml-1.25 align-middle animate-bl"
            style={{ background: '#1D546D', boxShadow: '0 0 12px rgba(29,84,109,.6)' }}
          />
        </h2>
        <p
          className="text-xl tracking-widest uppercase font-bold mt-2 animate-br transition-colors duration-400"
          style={{ color: dark ? '#5ba3bf' : '#1D546D' }}
        >
          Product Management System
        </p>
      </div>

      <div className="w-36 flex justify-end">
        <button
          onClick={toggleMode}
          className="btn-sh relative overflow-hidden inline-flex items-center gap-2 px-4 h-10 rounded-full text-xl font-bold text-white border cursor-pointer transition-all duration-300 bg-bm-grad shadow-btn hover:bg-bm-gradh hover:-translate-y-0.5 hover:scale-105 active:scale-95"
          style={{ borderColor: '#2e7a9e' }}
        >
          <img
            src={dark ? `${base}brightness.png` : `${base}night-mode.png`}
            alt="mode"
            style={{ width:'22px', height:'22px', objectFit:'contain', filter:'brightness(0) invert(1)' }}
          />
          <span>{dark ? 'Light' : 'Dark'}</span>
        </button>
      </div>
    </div>
  )
}