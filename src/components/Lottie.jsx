import { DotLottieReact } from '@lottiefiles/dotlottie-react'

export default function Lottie({ src, className }) {
  return (
    <DotLottieReact
      src={src}
      autoplay
      loop
      className={className}
      style={{ background: 'transparent', display: 'block' }}
      renderConfig={{ backgroundColor: 'transparent' }}
    />
  )
}