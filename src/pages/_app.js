import { useEffect, useState } from 'react'
import { Layout, WebsiteLayout } from '@/components/Layout'
import { Open_Sans } from 'next/font/google'
import localFont from 'next/font/local'

import 'swiper/css'
import 'swiper/css/pagination'
import '@/styles/globals.scss'
import { AnimatedCursor } from '../components/shared'
import { AppContext } from '@/context'
import { ReactLenis } from '@studio-freight/react-lenis'
import { useRouter } from 'next/router'
import { allowedParams } from '../hooks'
import Script from 'next/script'
import PopupSubscribeForm from '@/components/Layout/PopupSubscribeForm'

const openSans = Open_Sans({ subsets: ['latin'] })
const everett = localFont({ src: './Everett-Medium.otf' })

export default function App({ Component, pageProps }) {
  const layoutProps = {
    PageLayout: Component?.PageLayout ?? WebsiteLayout,
    className: openSans.className,
    ...(Component?.PageLayoutProps ?? {}),
  }
  const router = useRouter()
  useEffect(() => {
    Object.entries(router.query ?? {})
      .filter(([k]) => allowedParams.indexOf(k) > -1)
      .forEach(([k, v]) => {
        sessionStorage.setItem(k, v)
      })
  }, [router.query])
  const [isPopupOpen, setIsPopupOpen] = useState(false)
  const [isSubscribeFormSubmitted, setIsSubscribeFormSubmitted] = useState(false)
  // console.log('isSubscribeFormSubmitted', isSubscribeFormSubmitted)
  useEffect(() => {
    setIsSubscribeFormSubmitted(sessionStorage.getItem('formSubmitted'))
  }, [])
  const [isClosed, setIsClosed] = useState(false)
  useEffect(() => {
    setIsClosed(sessionStorage.getItem('formClosed'))
  }, [])
  return (
    <>
      {/* <Head>
        
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-WVV0NLBNQL"
        ></script>
        <script>
          {`window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
  
    gtag('config', 'G-WVV0NLBNQL');`}
        </script>

        

        <script>
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
    new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
    j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
    'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
    })(window,document,'script','dataLayer','GTM-PGLSQTH');`}
        </script>

        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=AW-808494106"
        ></script>
        <script>
          {`  window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'AW-808494106');`}
        </script>

        <script type="text/javascript" id="zsiqchat">
          {`var $zoho=$zoho || {};$zoho.salesiq = $zoho.salesiq || {widgetcode: "siqbe34e880e295383583f9fbd27a9527ae0778bb80daad5ac14348ea7fbac67f01f982af5a75fbe222066feb0200bfa63b", values:{},ready:function(){}};var d=document;s=d.createElement("script");s.type="text/javascript";s.id="zsiqscript";s.defer=true;s.src="https://salesiq.zohopublic.com/widget";t=d.getElementsByTagName("script")[0];t.parentNode.insertBefore(s,t);`}
        </script>
      </Head> */}

      {/* Google Analytics */}
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-WVV0NLBNQL"
        strategy="afterInteractive"
      />
      <Script id="gtag-main" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-WVV0NLBNQL');
        `}
      </Script>

      <Script id="gtm" strategy="afterInteractive">
        {`
          (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-PGLSQTH');
        `}
      </Script>

      <Script
        src="https://www.googletagmanager.com/gtag/js?id=AW-808494106"
        strategy="afterInteractive"
      />
      <Script id="gtag-ads" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'AW-808494106');
        `}
      </Script>

      <Script id="zoho-chat" strategy="afterInteractive">
        {`
          var $zoho=$zoho || {};
          $zoho.salesiq = $zoho.salesiq || {
            widgetcode: "siqbe34e880e295383583f9fbd27a9527ae0778bb80daad5ac14348ea7fbac67f01f982af5a75fbe222066feb0200bfa63b",
            values:{},
            ready:function(){}
          };
          var d=document;
          s=d.createElement("script");
          s.type="text/javascript";
          s.id="zsiqscript";
          s.defer=true;
          s.src="https://salesiq.zohopublic.com/widget";
          t=d.getElementsByTagName("script")[0];
          t.parentNode.insertBefore(s,t);
        `}
      </Script>

      <ReactLenis root>
        <AppContext>
          <Layout {...layoutProps}>
            <style jsx global>
              {`
                html {
                  font-family: ${openSans.style.fontFamily};
                  --font-everett: ${everett.style.fontFamily};
                  --font-opensans: ${openSans.style.fontFamily};
                }
                `}
            </style>
            {isPopupOpen && !isSubscribeFormSubmitted && !isClosed &&
              <PopupSubscribeForm setIsPopupOpen={setIsPopupOpen} setIsClosed={setIsClosed} />
            }
            <Component isPopupOpen={isPopupOpen} setisPopupOpen={setIsPopupOpen} setIsClosed={setIsClosed}  {...pageProps} />

          </Layout>
          <AnimatedCursor />
        </AppContext>
      </ReactLenis>
      <Script
        type="text/javascript"
        src="https://crmplus.zoho.com/crm/javascript/zcga.js"
      ></Script>
      <Script
        src="https://www.google.com/recaptcha/api.js?render=6LfsAwApAAAAAJFgAQaO7_xrrt6Y61thOQqmOuD4"
        strategy="afterInteractive"
        async
        defer
      />
    </>
  )
}
