import { useEffect, useRef } from 'react'

export const VideoModal = ({
  open,
  setOpen,
  children,
  vimeoId,
  youtubeVideo,
  videopath
}) => {
  const container = useRef()
  useEffect(() => {
    const onClick = (e) => {
      if (
        container.current === e.target ||
        container.current.contains(e.target)
      ) {
        setOpen(false)
      }
    }
    window.addEventListener('click', onClick)
    return () => {
      window.removeEventListener('click', onClick)
    }
  }, [setOpen])
  useEffect(() => {
    const video = container.current?.querySelector('video')
    const iframe = container.current?.querySelector('iframe')
    const youtubeIframe = container.current?.querySelector('.youtube-iframe')
    if (video) {
      if (open) {
        video.src = video.src
        video.muted = false
        video.play()
      } else {
        video.muted = true
        video.pause()
      }
    }
    if (iframe) {
      if (open) {
        if(vimeoId){
          iframe.src = `https://player.vimeo.com/video/${vimeoId}?h=214303372e&autoplay=1&title=0&byline=0&portrait=0`
        } 
        if (videopath) {
          iframe.src= videopath
        }

      } else {
        iframe.src = ''
      }
    }
    if (youtubeIframe) {
      if (open) {
        youtubeIframe.src = youtubeVideo
      } else {
        youtubeIframe.src = ''
      }
    }
  }, [open, vimeoId, youtubeVideo])
  return (
    <div
      data-state={open ? 'open' : 'closed'}
      data-rb-cursor
      data-rb-cursor-type="close"
      className="fixed flex items-center justify-center left-0 top-0 z-[9999] cursor-auto bg-black w-full h-full opacity-0 invisible data-[state=open]:opacity-100 data-[state=open]:visible"
      ref={container}
    >
      <button className="absolute right-5 top-5 md:right-12 md:top-12">
        <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
          <path
            d="M1.195 1.193 20.26 20.258m-19.065 0L20.26 1.193"
            stroke="#fff"
            strokeWidth="2.247"
            strokeMiterlimit="10"
          />
        </svg>
      </button>
      {/* <div className="w-full h-3/4 bg-rb-rosa"></div> */}
      {children}
    </div>
  )
}
