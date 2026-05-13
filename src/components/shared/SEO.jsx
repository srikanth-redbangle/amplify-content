import Head from 'next/head'
import { useRouter } from 'next/router'
import Script from 'next/script'

export const SEO = ({
  title = 'Film & Video Production company for TV Ads & more | Makerrs',
  description = 'Makerrs is a global full-service film and video production company. Get TV Ads, Digital Ads, Marketing Videos, Corporate Videos and more with one company.',
  image = 'https://www.makerrs.com/img/makerrs-og.jpg',
  url,
  keywords,
  externalLink = null
}) => {
  const router = useRouter()
  const ogUrl = url || `https://www.makerrs.com${router.asPath}`

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="robots" content="index, follow" />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="language" content="English" />
        <meta name="author" content="Makerrs" />
        <meta name="geo.region" content="IN" />
        <meta name="geo.position" content="13.120320;77.625270" />

        <meta name="description" content={description} />
        {keywords && <meta name="keywords" content={keywords} />}

        {/* Google meta tags */}
        <meta key="gname" itemProp="name" content={title} />
        <meta key="gdescription" itemProp="description" content={description} />
        <meta key="gimage" itemProp="image" content={image} />

        {/* Facebook Meta tags */}
        <meta key="furl" property="og:url" content={ogUrl} />
        <meta key="ftype" property="og:type" content="website" />
        <meta key="ftitle" property="og:title" content={title} />
        <meta key="fdescription" property="og:description" content={description} />
        <meta key="fimage" property="og:image" content={image} />

        {/* Twitter Meta tags */}
        <meta key="tcard" name="twitter:card" content="summary_large_image" />
        <meta key="tsite" name="twitter:site" content="@red_bangle" />
        <meta key="ttitle" name="twitter:title" content={title} />
        <meta key="tdescription" name="twitter:description" content={description} />
        <meta key="timage" name="twitter:image" content={image} />

        <link rel="canonical" href={ogUrl} />
      </Head>

      {/* LinkedIn Script */}
      <Script id="linkedin-init" strategy="afterInteractive">
        {`_linkedin_partner_id = "218955";
        window._linkedin_data_partner_ids = window._linkedin_data_partner_ids || [];
        window._linkedin_data_partner_ids.push(_linkedin_partner_id);`}
      </Script>
      <Script
        id="linkedin-analytics"
        strategy="afterInteractive"
        src="https://snap.licdn.com/li.lms-analytics/insight.min.js"
      />

      <noscript>
        <img
          height="1"
          width="1"
          style={{ display: 'none' }}
          alt=""
          src="https://px.ads.linkedin.com/collect/?pid=218955&fmt=gif"
        />
      </noscript>

      {/* Facebook Pixel */}
      <Script id="fb-pixel" strategy="afterInteractive">
        {`!function(f,b,e,v,n,t,s)
        {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
        n.callMethod.apply(n,arguments):n.queue.push(arguments)};
        if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
        n.queue=[];t=b.createElement(e);t.async=!0;
        t.src=v;s=b.getElementsByTagName(e)[0];
        s.parentNode.insertBefore(t,s)}(window, document,'script',
        'https://connect.facebook.net/en_US/fbevents.js');
        fbq('init', '221850879095599');
        fbq('track', 'PageView');`}
      </Script>

      <noscript>
        <img
          height="1"
          width="1"
          style={{ display: 'none' }}
          alt="facebook-pixel"
          src="https://www.facebook.com/tr?id=221850879095599&ev=PageView&noscript=1"
        />
      </noscript>

      {/* External link if any */}
      {externalLink}
    </>
  )
}
