import React from 'react'
import { LineArrow } from '@/components/icons'
import { Button } from '@/components/ui'

const PagenotFound = () => {
  return (
    <section className="min-h-[660px] py-20 flex flex-col items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 w-full h-full m-auto text-center flex items-center justify-center">
        <h4 className="text-[180px] md:text-[300px] xl:text-[500px] font-everett font-bold text-rb-mercury leading-[80%]">
          404
        </h4>
      </div>
      <div className="container relative">
        <div className="text-center mt-10">
          <h1 className="font-everett leading-[120%] text-[24px] md:text-[42px] font-medium mb-4">
            We couldn&apos;t find what you were looking for
          </h1>

          <Button
            href="/"
            className="mx-auto md:max-w-max"
            suffix={<LineArrow />}
          >
            VIEW HOMEPAGE
          </Button>
        </div>
      </div>
    </section>
  )
}

export default PagenotFound
