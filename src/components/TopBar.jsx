import { useTypewriter } from '../useTypewriter'

export default function TopBar({ dark, toggleMode }) {
  const title = useTypewriter('CRUD App')

  return (
    <div className="flex flex-col sm:flex-row items-center justify-between py-5 gap-3 animate-[fu_0.6s_cubic-bezier(0.22,0.68,0,1.2)_both]">
      <div className="hidden sm:block w-36" />

      <div className="text-center">
        <h2
          className="font-black uppercase tracking-widest min-h-6"
          style={{
            fontSize: 'clamp(1.8rem,6vw,4.5rem)',
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
            fontSize: 'clamp(.75rem,2vw,1.1rem)',
            color: dark ? '#ffffff' : '#1D546D'
          }}
        >
          Product Management System
        </p>
      </div>

      <div className="flex sm:w-36 justify-center sm:justify-end">
        <button
          onClick={toggleMode}
          className="btn-sh relative overflow-hidden inline-flex items-center justify-center w-12 h-12 rounded-full text-white border cursor-pointer transition-all duration-300 bg-bm-grad shadow-btn hover:bg-bm-gradh hover:-translate-y-0.5 hover:scale-105 active:scale-95"
          aria-label={dark ? 'Switch to light mode' : 'Switch to dark mode'}
          style={{ borderColor: '#2e7a9e' }}
        >
                    {dark ? (
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>
          ) : (
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>
          )}
        </button>
      </div>
    </div>
  )
}