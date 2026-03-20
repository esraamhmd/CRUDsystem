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
            fontSize: 'clamp(3rem,6vw,4.5rem)',
            color: dark ? '#ffffff' : '#1D546D',
            textShadow: dark
              ? '0 0 22px rgba(255,255,255,.3),0 0 50px rgba(91,163,191,.4),0 2px 6px rgba(0,0,0,.6)'
              : '0 0 22px rgba(29,84,109,.8),0 0 50px rgba(91,163,191,.3),0 2px 6px rgba(0,0,0,.2)'
          }}
        >
          {title}
          <span
            className="inline-block w-1 h-[.9em] ml-2 align-middle animate-bl"
            style={{
              background: dark ? '#ffffff' : '#1D546D',
              boxShadow: '0 0 12px rgba(29,84,109,.6)'
            }}
          />
        </h2>
        <p
          className="tracking-widest uppercase font-bold mt-2 animate-br transition-colors duration-400"
          style={{
            fontSize: 'clamp(.9rem,2vw,1.1rem)',
            color: dark ? '#ffffff' : '#1D546D'
          }}
        >
          Product Management System
        </p>
      </div>

      <div className="w-36 flex justify-end">
        <button
          onClick={toggleMode}
          className="btn-sh relative overflow-hidden inline-flex items-center justify-center w-12 h-12 rounded-full text-white border cursor-pointer transition-all duration-300 bg-bm-grad shadow-btn hover:bg-bm-gradh hover:-translate-y-0.5 hover:scale-105 active:scale-95"
          style={{ borderColor: '#2e7a9e' }}
        >
          <img
            src={dark ? `${base}brightness.png` : `${base}night-mode.png`}
            alt="mode"
            style={{ width:'26px', height:'26px', objectFit:'contain', filter:'brightness(0) invert(1)' }}
          />
        </button>
      </div>
    </div>
  )
}