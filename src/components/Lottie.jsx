import { DotLottieReact } from '@lottiefiles/dotlottie-react'

const base = import.meta.env.BASE_URL

export default function Lottie({ src, className }) {

  const url = `${base}${src.replace(/^\//, '')}`
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