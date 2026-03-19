import { useState, useEffect } from 'react'

export function useTypewriter(text, typingSpeed = 115, deletingSpeed = 65, pauseMs = 1500) {
  const [idx, setIdx] = useState(0)
  const [dir, setDir] = useState(1)

  useEffect(() => {
    let timer
    if (dir === 1) {
      if (idx < text.length) {
        timer = setTimeout(() => setIdx(i => i + 1), typingSpeed)
      } else {
        timer = setTimeout(() => setDir(-1), pauseMs)
      }
    } else {
      if (idx > 0) {
        timer = setTimeout(() => setIdx(i => i - 1), deletingSpeed)
      } else {
        timer = setTimeout(() => setDir(1), 400)
      }
    }
    return () => clearTimeout(timer)
  }, [idx, dir, text, typingSpeed, deletingSpeed, pauseMs])

  return text.slice(0, idx)
}