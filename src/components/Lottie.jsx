import { useState, useEffect } from 'react'
import { DotLottieReact } from '@lottiefiles/dotlottie-react'


export default function Lottie({ src, className }) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
   
    const id = requestIdleCallback
      ? requestIdleCallback(() => setMounted(true), { timeout: 1000 })
      : setTimeout(() => setMounted(true), 200)
    return () => {
      if (requestIdleCallback) cancelIdleCallback(id)
      else clearTimeout(id)
    }
  }, [])

  const url = `${window.location.origin}${import.meta.env.BASE_URL}${src.replace(/^\//, '')}`

  
  if (!mounted) return <div className={className} aria-hidden="true" />

  return (
    <DotLottieReact
      src={url}
      autoplay
      loop
      className={className}
      style={{ background: 'transparent', display: 'block' }}
      renderConfig={{ backgroundColor: 'transparent' }}
    />
  )
}