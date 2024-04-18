import { ChevronUp } from 'lucide-react'
import { AnimatePresence, motion } from 'framer-motion'
import { useCallback, useEffect, useState } from 'react'

export const BackToTop = () => {
  const [show, setShow] = useState(false)

  const scrollToTop = () => {
    const scrollStep = -window.scrollY / 20 // Ajuste a velocidade aqui

    const animateScroll = () => {
      if (window.scrollY > 0) {
        window.scrollBy(0, scrollStep)
        requestAnimationFrame(animateScroll)
      } else {
        window.scrollTo(0, 0)
      }
    }

    animateScroll()
  }

  const handleScroll = useCallback(() => {
    if (!show && window.scrollY > 500) setShow(true)
    if (show && window.scrollY <= 500) setShow(false)
  }, [show])

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [handleScroll])

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="fixed right-4 bottom-4 z-20"
          initial={{ opacity: 0, right: -10 }}
          animate={{ opacity: 1, right: 16 }}
          exit={{ opacity: 0, right: -10 }}
        >
          <button
            onClick={scrollToTop}
            className=" w-[40px] h-[40px] bg-[#CC0D03] rounded-full flex items-center justify-center hover:bg-[#FFD200] text-white hover:text-black"
          >
            <ChevronUp size={20} />
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
