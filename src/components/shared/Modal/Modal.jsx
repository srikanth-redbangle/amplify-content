import { useEffect, useRef } from 'react'

function Modal({ open, setOpen, children }) {
  const container = useRef()
  const overlayRef = useRef()
  useEffect(() => {
    const onClick = (e) => {
      if (container.current === e.target || overlayRef.current === e.target) {
        setOpen(false)
      }
    }
    window.addEventListener('click', onClick)
    return () => {
      window.removeEventListener('click', onClick)
    }
  }, [setOpen])
  return (
    <div
      data-state={open ? 'open' : 'closed'}
      className="fixed flex items-center justify-center left-0 top-0 w-full h-full opacity-0 invisible data-[state=open]:opacity-100 data-[state=open]:visible z-[999]"
      ref={container}
    >
      <div className="absolute w-full h-full modal-blur" ref={overlayRef}></div>
      <div className="relative overflow-hidden rounded">
        <button
          aria-label="close modal"
          onClick={() => setOpen(false)}
          className="w-8 h-8 absolute top-4.5 right-4.5 bg-black/10 z-[1] flex items-center justify-center rounded-full"
        >
          <svg
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12.3307 1.66797L1.66406 12.3346"
              stroke="black"
              strokeWidth="1.74545"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M1.66406 1.66797L12.3307 12.3346"
              stroke="black"
              strokeWidth="1.74545"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
        <div
          className="bg-white cursor-auto p-6 md:p-12 max-w-[calc(100vw_-_64px)] md:max-w-[calc(100vw_-_128px)] lg:max-w-[calc(60vw_-_128px)] max-h-[95vh] rb-scrollbar overflow-y-auto"
          data-lenis-prevent
        >
          {children}
        </div>
      </div>
    </div>
  )
}

export default Modal
