import React, { useEffect, useRef, useState } from 'react'
import { rehype } from 'rehype'
import rehypeSlug from 'rehype-slug'
import rehypeToc from 'rehype-toc'
import { LineArrow, Twitter, Whatsapp, Linkedin } from '@/components/icons'
import GetUpdates from '@/components/shared/sections/GetUpdatesSection/GetUpdates'
import { Button } from '@/components/ui'
import { getAllBlogs, getBlog, getRelatedBlogs } from '@/utils/graphql'
import { formateBlogPostFunc } from '@/utils/formate'
import Link from 'next/link'
import processTree from '@/utils/processTree'
import { SEO } from '@/components/shared'
import { TOC } from '@/components/shared/TOC'
import { useLenis } from '@studio-freight/react-lenis'
import { useRouter } from 'next/router'
import {
  LinkedinShareButton,
  TwitterShareButton,
  WhatsappShareButton,
} from 'react-share'
import Script from 'next/script'
import { Accordion } from '@/components/ui'
import { AIblogFAQ, AnimatedblogFAQ, ExplainerVideos, BestExplainerVideos, ExplainerVideosServices,
  ExplainerVideosCompany, SaasExplainerVideos, B2BExplainerVideos, CustomExplainerVideos, CorporateExplainerVideos,
  AnimatedExplainerFAQ, TechExplainerVideosFAQ, ProductFAQ, DifferentTypesFAQ, HealthcareFAQ,
 ThreeDExplainerFAQ, HowCreateFAQ, WhiteboardFAQ, FunnyExplainerFAQ, BenefitsExplainerFAQ,
ExplainerVideosHelpBusinessesFAQ, HowToMakeExplainerVideosFAQ, StartupExplainerVideosFAQ, CustomerCaseStudyFAQ, BestCaseStudyFAQ, CorporateCaseStudyFAQ, AwardWinningCaseStudyFAQ,
SaasCaseStudyFAQ, MarketingCaseStudyFAQ, CaseStudyVideosFAQ, EmployerBrandingStrategyFAQ,
WhyIsEmployerBrandingImportantFAQ, EmployerBrandingFrameworkFAQ, EmployerBrandingVideoFAQ,
EmployerBrandingExamplesFAQ, EmployerBrandingCompaniesFAQ, EmployerBrandingBestPracticesFAQ, EmployerBrandingFAQ,
ElementsEmployerBrandingFAQ, EmployerBrandingMistakesFAQ, EmployerBrandingChallengesFAQ,
B2BEmployerBrandingFAQ, ImproveEmployerBrandingFAQ, EmployerBrandingContentFAQ, EmployerBrandingStorytellingFAQ } from '@/content/services'

import { StartupExplainerVideosSchema, HowToMakeExplainerVideosSchema, ExplainerVideosHelpBusinessesSchema,
ThreeDExplainerSchema, DifferentTypesSchema, TechExplainerVideosSchema, WhiteboardSchema, HealthcareSchema, BestAnimatedExplainerSchema, 
BestExplainerVideosSchema, WhatAreExplainerVideosSchema, ExplainerVideosServicesSchema, SaasExplainerVideosSchema, 
TopExplainerVideosCompanySchema, B2BExplainerVideosSchema, CustomExplainerVideosSchema, CorporateExplainerVideosSchema,
CaseStudyVideosSchema, MarketingCaseStudySchema, SaasCaseStudySchema, AwardWinningCaseStudySchema, CorporateCaseStudySchema, BestCaseStudyVideosSchema,
CustomerCaseStudySchema, ElementsEmployerBrandingSchema, EmployerBrandingSchema, EmployerBrandingBestPracticesSchema,
EmployerBrandingCompaniesSchema, EmployerBrandingExamplesSchema, EmployerBrandingVideoSchema, EmployerBrandingFrameworkSchema,
WhyIsEmployerBrandingImportantSchema, EmployerBrandingStrategySchema
 } from '@/components/schema/blog-schema'

const ArticleSingle = ({ article, relatedArticle, tocTree }) => {

  const lenis = useLenis()
  const blogRef = useRef()
  const router = useRouter()

  const [activeToc, setActiveToc] = useState('')
  const [toc, settoc] = useState(false)
  const [faq, setFaqs] = useState([]);
  // console.log(tocTree)
  const tocTrigger = () => {
    settoc((state) => !state)
  }
// dynamic faq content from blog
// useEffect(() => {
//   const wrapper = blogRef.current.querySelector('.schema-faq.wp-block-yoast-faq-block')

//   const faqs = wrapper && [...wrapper?.querySelectorAll('.schema-faq-section')]
//     .map((section, index) => {
//       const question = section.querySelector('.schema-faq-question')?.innerText.trim()
//       const answer = section.querySelector('.schema-faq-answer')?.innerHTML.trim()

//       return question && answer? { key: index + 1, title: question, content: answer}: null
//     })
//   setFaqs(faqs)
//   if(wrapper){
//     wrapper.style.display = 'none'
//   }
  
// }, [])



  useEffect(() => {
    const headings = [...blogRef.current?.querySelectorAll('h2[id]')]
    const figcaption = [...blogRef.current?.querySelectorAll('figcaption')]
    const sub_headings = [...blogRef.current?.querySelectorAll('h3[id]')]
    const img_center = [...blogRef.current?.querySelectorAll('.wp-image-1064')]
    const tableFigures = [...blogRef.current?.querySelectorAll('.wp-block-table')];

    const scroll = () => {
      const windowScrollTop =
        document.body.scrollTop || document.documentElement.scrollTop
      const actives = []
      if (headings.length) {
        actives.push(headings[0].id)
      }

      tableFigures.forEach((tableWrapper) => {
        const table = tableWrapper.querySelector('table');
        if (!table) return;
        table.style.border = '1px solid black';
        table.style.borderCollapse = 'collapse';
        table.style.width = '100%';
        table.style.marginBottom = '24px';
        table.style.tableLayout = 'fixed';
        table.style.wordWrap = 'break-word';
        table.style.overflowWrap = 'break-word';
        const isMobile = window.innerWidth <= 768;
        const fontSize = isMobile ? '13px' : '16px';
        const cellPadding = isMobile ? '3px' : '12px';
        table.querySelectorAll('th').forEach((th) => {
          th.style.border = '1px solid black';
          th.style.padding = cellPadding;
          th.style.fontSize = fontSize;
        });
        table.querySelectorAll('td').forEach((td) => {
          td.style.border = '1px solid black';
          td.style.padding = cellPadding;
          td.style.verticalAlign = 'top';
          td.style.fontSize = fontSize;
        });
      });
      
      figcaption.forEach((figcaption) => {
        figcaption.style.textAlign = 'center'
        figcaption.classList.add('relative', 'bottom-5')
      })

      img_center.forEach((img) => {
        img.classList.add('relative', 'left-[13%]');
      });

      sub_headings.forEach((sub_heading) => {
        sub_heading.style.paddingTop = '28px',
          sub_heading.style.paddingBottom = '10px'
      })

      headings.forEach((h) => {
        h.style.paddingTop = '28px'
        if (
          windowScrollTop + 50 >
          h.getBoundingClientRect().top + windowScrollTop
        ) {
          if (actives.indexOf(h.id) === -1) {
            actives.push(h.id)
          }
        }
      })
      if (actives.length) setActiveToc(actives[actives.length - 1])
    }
    if (headings.length) setActiveToc(headings[0].id)
    window.addEventListener('scroll', scroll)
    return () => {
      window.removeEventListener('scroll', scroll)
    }
  }, [])
const articleUrl = `https://www.makerrs.com${router.asPath}`
const seoUrl = `https://www.makerrs.com${router.asPath}`

  const copyPageUrl = () => {
    navigator.clipboard.writeText(window.location.href)
    const copyPopup = document.querySelector('.copy-link-popup')

    copyPopup.classList.add('show')

    setTimeout(() => {
      copyPopup.classList.remove('show')
    }, 2000)
  }

  const slugToFAQMap = {
  'what-are-explainer-videos': ExplainerVideos,
  'best-explainer-videos': BestExplainerVideos,
  'explainer-video-services': ExplainerVideosServices,
  'top-explainer-video-companies': ExplainerVideosCompany,
  'saas-explainer-videos': SaasExplainerVideos,
  'b2b-explainer-videos': B2BExplainerVideos,
  'custom-b2b-explainer-videos': CustomExplainerVideos,
  'corporate-explainer-videos': CorporateExplainerVideos,
  'ai-explainer-video-tools-trends': AIblogFAQ,
  'animated-explainer-videos': AnimatedblogFAQ,
  'best-animated-explainer': AnimatedExplainerFAQ,
  'tech-explainer-videos': TechExplainerVideosFAQ,
  'product': ProductFAQ,
  'types': DifferentTypesFAQ,
  'healthcare-marketing': HealthcareFAQ,
  '3d-explainer-videos': ThreeDExplainerFAQ,
  'how-to-create': HowCreateFAQ,
  'whiteboard-explainer-videos': WhiteboardFAQ,
  'funny-explainer-videos': FunnyExplainerFAQ,
  'benefits-of-explainer-videos': BenefitsExplainerFAQ,
  'explainer-videos-help-businesses': ExplainerVideosHelpBusinessesFAQ,
  'how-to-make-explainer-videos': HowToMakeExplainerVideosFAQ,
  'startup-explainer-videos': StartupExplainerVideosFAQ,
  'customer-case-study-videos': CustomerCaseStudyFAQ,
  'best-case-study-videos': BestCaseStudyFAQ,
  'corporate-video-case-studies': CorporateCaseStudyFAQ,
  'award-winning-case-study-videos': AwardWinningCaseStudyFAQ,
  'saas-case-study-videos': SaasCaseStudyFAQ,
  'marketing-case-study-videos': MarketingCaseStudyFAQ,
  'case-study-video-strategy': CaseStudyVideosFAQ,
  'employer-branding-strategy': EmployerBrandingStrategyFAQ,
  'why-is-employer-branding-important': WhyIsEmployerBrandingImportantFAQ,
  'employer-branding-framework': EmployerBrandingFrameworkFAQ,
  'employer-branding-video': EmployerBrandingVideoFAQ,
  'employer-branding-campaigns-2026': EmployerBrandingExamplesFAQ,
  'employer-branding-companies': EmployerBrandingCompaniesFAQ,
  'best-practices-to-attract-top-talent': EmployerBrandingBestPracticesFAQ,
  'employer-branding-guide': EmployerBrandingFAQ,
  'elements-of-employer-branding': ElementsEmployerBrandingFAQ,
  'employer-branding-mistakes': EmployerBrandingMistakesFAQ,
  'employer-branding-solutions': EmployerBrandingChallengesFAQ,
  'b2b-employer-branding-campaigns-and-videos': B2BEmployerBrandingFAQ,
  'improve-employer-branding': ImproveEmployerBrandingFAQ,
  'employer-branding-content': EmployerBrandingContentFAQ,
  'storytelling-for-modern-teams': EmployerBrandingStorytellingFAQ
};

const slugToSchema = {
  'startup-explainer-videos': StartupExplainerVideosSchema,
  'how-to-make-explainer-videos': HowToMakeExplainerVideosSchema,
  'explainer-videos-help-businesses': ExplainerVideosHelpBusinessesSchema,
  '3d-explainer-videos': ThreeDExplainerSchema,
  'types': DifferentTypesSchema,
  'tech-explainer-videos': TechExplainerVideosSchema,
  'whiteboard-explainer-videos': WhiteboardSchema,
  'healthcare-marketing': HealthcareSchema,
  'best-animated-explainer': BestAnimatedExplainerSchema,
  'best-explainer-videos': BestExplainerVideosSchema,
  'what-are-explainer-videos': WhatAreExplainerVideosSchema,
  'explainer-video-services': ExplainerVideosServicesSchema,
  'top-explainer-video-companies': TopExplainerVideosCompanySchema,
  'saas-explainer-videos': SaasExplainerVideosSchema,
  'b2b-explainer-videos': B2BExplainerVideosSchema,
  'custom-b2b-explainer-videos': CustomExplainerVideosSchema,
  'corporate-explainer-videos': CorporateExplainerVideosSchema,
  //case-study
  'case-study-video-strategy': CaseStudyVideosSchema,
  'marketing-case-study-videos': MarketingCaseStudySchema,
  'saas-case-study-videos': SaasCaseStudySchema,
  'award-winning-case-study-videos': AwardWinningCaseStudySchema,
  'corporate-video-case-studies': CorporateCaseStudySchema,
  'best-case-study-videos': BestCaseStudyVideosSchema,
  'customer-case-study-videos': CustomerCaseStudySchema,
  //Employer Branding
  'elements-of-employer-branding': ElementsEmployerBrandingSchema,
  'employer-branding-guide': EmployerBrandingSchema,
  'best-practices-to-attract-top-talent': EmployerBrandingBestPracticesSchema,
  'employer-branding-companies': EmployerBrandingCompaniesSchema,
  'employer-branding-campaigns-2026': EmployerBrandingExamplesSchema,
  'employer-branding-video': EmployerBrandingVideoSchema,
  'employer-branding-framework': EmployerBrandingFrameworkSchema,
  'why-is-employer-branding-important': WhyIsEmployerBrandingImportantSchema,
  'employer-branding-strategy': EmployerBrandingStrategySchema,
}

const selectedFAQ = slugToFAQMap[article.slug] || [];
const selectedSchema = slugToSchema[article.slug] || [];

  return (
    <>
      <SEO
        title={article?.seoTitle}
        description={article?.seoDesc}
        image={ article?.featuredImage?.src ?? 'https://www.makerrs.com/img/makerrs-og.jpg'}
        url={seoUrl}
      />
      <article>
        <section className="py-9">
          <div className="container">
            <div className="flex gap-1 flex-wrap items-center pb-3">
              <Link
                href="/blog"
                className="opacity-60 font-semibold text-[12px] md:text-[16px]"
              >
                Blog
              </Link>
              <svg width="15" height="15" viewBox="0 0 15 15" fill="none">
                <path
                  d="M5.625 3.125 10 7.5l-4.375 4.375"
                  stroke="#111010"
                  strokeOpacity=".6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              {article?.categories?.length && (
                <>
                  <Link
                    href={`/blog?category=${article?.categories?.[0]?.slug}`}
                    className="opacity-60 capitalize font-semibold text-[12px] md:text-[16px]"
                  >
                    {article?.categories?.[0]?.name}
                  </Link>
                  <svg width="15" height="15" viewBox="0 0 15 15" fill="none">
                    <path
                      d="M5.625 3.125 10 7.5l-4.375 4.375"
                      stroke="#111010"
                      strokeOpacity=".6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </>
              )}
              <span
                className="font-semibold text-[12px] md:text-[16px]"
              >
                {article?.title}
              </span>
            </div>

            <div className="max-w-[1096px] pb-10">
              {/* <div className="flex flex-wrap gap-4 mb-8">
                {article?.tags?.map((t) => (
                  <div
                    key={t.slug}
                    className="border border-rb-black/70 rounded-full py-2 px-4 text-[12px] font-semibold inline-flex"
                  >
                    {t.name}
                  </div>
                ))}
              </div> */}

              <h1 className="font-everett text-[32px] md:text-[48px] lg:text-[72px] leading-[120%] capitalize font-medium mb-5 tracking-[-1.44px]">
                {article?.title}
              </h1>

              <div
                className="md:text-[24px] text-rb-black/80"
                dangerouslySetInnerHTML={{ __html: article?.excerpt }}
              ></div>
            </div>

            {/* <div className="flex flex-wrap justify-between items-center pt-8 border-t border-t-black/10">
              <div className="flex gap-4 items-center">
                <div className="md:w-16 md:h-16 w-13 h-13 rounded-full overflow-hidden">
                  <img
                    src="/img/blog-thumb.jpg"
                    {...article?.avatar}
                    className="w-full h-full object-cover"
                    alt=""
                  />
                </div>

                <div>
                  <p className="font-semibold">By {article?.author}</p>
                  {article?.authorAbout && (
                    <p className="mt-2 mb-0 opacity-60 font-semibold">
                      {article?.authorAbout}
                    </p>
                  )}
                </div>
              </div>

              <div className="flex gap-3 md:block md:text-right pt-4 pl-[68px] md:p-0">
                <p className="font-semibold">
                  {String(article?.readTime).padStart(2, '0')} min read{' '}
                </p>
                <p className="font-semibold">{article?.date}</p>
              </div>
            </div> */}
          </div>

          <div className="pt-10 md:pt-18">
            <div className="h-[180px] md:h-[556px] overflow-hidden">
              <img
                src="/img/blog-inner-thumb.jpg"
                {...article?.featuredImage}
                className="w-full h-full object-cover"
                alt=""
              />
            </div>
          </div>
        </section>

        <section className="pb-10 pt-3 md:pt-0 md:pb-20">
          <div className="container">
            <div className="flex -mx-4 flex-wrap">
              <div className="w-full md:w-3/4 px-4">
                <div
                  ref={blogRef}
                  className="blog-content-main max-w-[830px]"
                  dangerouslySetInnerHTML={{ __html: article?.content }}
                ></div>
              </div>

              <div className="w-full md:w-1/4 px-4">
                <div
                  className={`  md:opacity-100 md:visible md:sticky md:top-18 md:h-auto fixed inset-0 w-full h-full bg-black/30 md:bg-transparent z-[9999] px-6 md:px-0 duration-300 ease-out ${toc ? 'opacity-1 visible' : 'opacity-0 invisible'
                    }`}
                >
                  {tocTree?.children?.length > 1 && (
                   <div className="md:border md:border-black/20 rounded-lg mb-4 bg-white mt-10 md:mt-0">
                    <div className="py-4 px-5 text-[14px] font-semibold md:border-b md:border-b-black/20 flex justify-between items-center">
                      Table of contents
                      <button
                        onClick={tocTrigger}
                        className="w-6 h-6 inline-flex items-center justify-center md:hidden"
                      >
                        <svg
                          width="10"
                          height="10"
                          viewBox="0 0 10 10"
                          fill="none"
                        >
                          <path
                            d="M9 1L1 9M1 1L9 9"
                            stroke="black"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </button>
                    </div>
                    <div
                      className="py-4 px-5 text-[14px] font-semibold toc-content flex flex-col gap-4 max-h-[60vh] overflow-y-auto rb-scrollbar"
                      data-lenis-prevent
                    >
                       {/* <div>
                      <a href="#!" className="active">
                        Active Listening
                      </a>
                    </div>
                    <div>
                      <a href="#!">Synthesis</a>
                    </div>
                    <div>
                      <a href="#!">Adaptability</a>
                    </div>
                    <div>
                      <a href="#!">Synthesis</a>
                    </div>
                    <div>
                      <a href="#!">Adaptability</a>
                    </div>
                    <div>
                      <a href="#!">Adaptability</a>
                    </div> */}
                      <TOC
                        lenis={lenis}
                        isRoot
                        isActive={(id) => id === activeToc}
                        {...tocTree}
                      />
                    </div>
                  </div>
                  )}

                  <div className="hidden md:block">
                    <h3 className="text-[18px] font-medium font-everett mb-3">
                      Share:
                    </h3>

                    <div className="flex gap-4 relative max-w-fit">
                       <LinkedinShareButton
                          url={articleUrl}
                        >
                          <a
                            target="_blank"
                            rel="noopener noreferrer"
                            href={articleUrl}
                            className="border border-rb-dune rounded-full w-10 h-10 inline-flex justify-center items-center border-rb-dune/80 text-rb-dune/80 transition-all hover:text-[#006699] hover:border-[#006699]"
                          >
                            <Linkedin />
                          </a>
                        </LinkedinShareButton>

                      <TwitterShareButton
                        url={`https://twitter.com/intent/tweet?text=${articleUrl}`}
                        quote={'Twitter'}
                      >
                        <a
                          target="_blank"
                          rel="noopener noreferrer"
                          href={`https://twitter.com/intent/tweet?text=${articleUrl}`}
                          className="border border-rb-dune rounded-full w-10 h-10 inline-flex justify-center items-center border-rb-dune/80 text-rb-dune/80 transition-all hover:text-[#000] hover:border-[#000]"
                        >
                          <Twitter />
                        </a>
                      </TwitterShareButton>

                      <WhatsappShareButton
                        url={`whatsapp://send?text=${articleUrl}`}
                        quote={'Twitter'}
                      >
                        <a
                          href={`whatsapp://send?text=${articleUrl}`}
                          data-action="share/whatsapp/share"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="border border-rb-dune rounded-full w-10 h-10 inline-flex justify-center items-center border-rb-dune/80 text-rb-dune/80 transition-all hover:text-[#00C200] hover:border-[#00C200]"
                        >
                          <Whatsapp />
                        </a>
                      </WhatsappShareButton>

                      <button
                        onClick={copyPageUrl}
                        className="border border-rb-dune rounded-full w-10 h-10 inline-flex justify-center items-center  border-rb-dune/80 text-rb-dune/80 transition-all hover:text-[#000] hover:border-[#000]"
                      >
                        <svg
                          width="20"
                          height="20"
                          viewBox="0 0 20 20"
                          fill="none"
                        >
                          <path
                            d="M4.16797 12.5003H3.33464C2.89261 12.5003 2.46868 12.3247 2.15612 12.0122C1.84356 11.6996 1.66797 11.2757 1.66797 10.8337V3.33366C1.66797 2.89163 1.84356 2.46771 2.15612 2.15515C2.46868 1.84259 2.89261 1.66699 3.33464 1.66699H10.8346C11.2767 1.66699 11.7006 1.84259 12.0131 2.15515C12.3257 2.46771 12.5013 2.89163 12.5013 3.33366V4.16699M9.16667 7.5H16.6667C17.5871 7.5 18.3333 8.24619 18.3333 9.16667V16.6667C18.3333 17.5871 17.5871 18.3333 16.6667 18.3333H9.16667C8.24619 18.3333 7.5 17.5871 7.5 16.6667V9.16667C7.5 8.24619 8.24619 7.5 9.16667 7.5Z"
                            stroke="#5C5C5C"
                            strokeWidth="1.66667"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                        {/* <svg
                          width="19"
                          height="19"
                          viewBox="0 0 19 19"
                          fill="none"
                        >
                          <path
                            d="M7.98047 10.2002C8.30256 10.6308 8.71349 10.9871 9.18538 11.2449C9.65728 11.5027 10.1791 11.656 10.7155 11.6944C11.2518 11.7328 11.7902 11.6554 12.294 11.4675C12.7978 11.2796 13.2553 10.9855 13.6355 10.6052L15.8855 8.35517C16.5686 7.64791 16.9465 6.70065 16.938 5.71741C16.9295 4.73418 16.5351 3.79363 15.8398 3.09835C15.1445 2.40307 14.204 2.00869 13.2207 2.00014C12.2375 1.9916 11.2902 2.36958 10.583 3.05267L9.29297 4.33517M10.9577 8.69914C10.6356 8.26855 10.2247 7.91226 9.75276 7.65444C9.28086 7.39662 8.75904 7.24331 8.22268 7.20489C7.68632 7.16648 7.14798 7.24387 6.64416 7.43181C6.14034 7.61975 5.68283 7.91384 5.30267 8.29414L3.05267 10.5441C2.36958 11.2514 1.9916 12.1987 2.00014 13.1819C2.00869 14.1651 2.40307 15.1057 3.09835 15.801C3.79363 16.4962 4.73418 16.8906 5.71741 16.8992C6.70065 16.9077 7.64791 16.5297 8.35517 15.8466L9.63767 14.5641"
                            stroke="#333333"
                            strokeWidth="2.25"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg> */}
                      </button>
                      <div className="copy-link-popup absolute bg-rb-black p-2 text-white text-xs rounded right-0 -bottom-12">
                        Link copied to clipboard
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="fixed bottom-12 left-0 right-0 flex justify-center md:hidden">
            <Button onClick={tocTrigger}>Table of Contents</Button>
          </div>
        </section>
      </article>

      { selectedFAQ?.length > 0 && (
          <section className="pb-12 md:pb-24 md:pt-12">
            <div className="container">
              <div className="rb-row">
                <div className="w-full md:w-5/12">
                  <div className="static md:sticky top-[100px]">
                    <h3 className="max-w-[400px] mb-8 text-title-md-tight font-everett text-rb-black !text-[26px] md:!text-[52px]">
                      Frequently Asked Questions
                    </h3>
                  </div>
                </div>
                <div className="w-full md:w-7/12">
                  <Accordion
                    data={
                      selectedFAQ.map((c) => ({
                      key: `${c.key}`,
                      heading: c?.title,
                      content: c?.content,
                    }))}
                  />
                </div>
              </div>
            </div>
          </section>
      )}

      <GetUpdates />
      <section className="py-25">
        <div className="container">
          <h2 className="text-title md:text-title-md mb-8 font-everett">
            Recently Added Articles
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-y-16 gap-x-8 pt-8">
            {relatedArticle.map(
              ({ title, date, slug, author, categories, featuredImage, tags }) => (
                <div key={slug}>
                  <Link 
                    href={`/${tags[0]?.name || 'blog'}/${slug}`} 
                    className="h-[384px] block md:h-[272px] overflow-hidden relative mb-4"
                  >
                    <div className="w-full h-full overflow-hidden group">
                      <img 
                        src="/img/blog-thumb.jpg"
                        {...featuredImage}
                        className="w-full h-full object-cover group-hover:scale-105 transition-all duration-300"
                        alt=""
                        
                      />
                      
                    </div>
                    <div className="absolute bottom-5 left-5 flex gap-1">
                      {categories.map((c) => (
                        <div
                          className=" capitalize border border-white rounded-full py-2 px-4 text-[12px] font-semibold text-white"
                          key={c.slug}
                        >
                          {c.name}
                        </div>
                      ))}
                    </div>
                  </Link>

                  <div>
                    {/* <div className="flex gap-2 mb-4">
                      <span className="text-[14px] md:text-[16px]">{date}</span>
                      <span className="text-[14px] md:text-[16px]">|</span>
                      <span className="text-[14px] md:text-[16px]">
                        {author}
                      </span>
                    </div> */}

                    <h3 className="text-[16px] md:text-[24px] leading-[120%] font-semibold mb-8 tracking-[-0.96px]">
                      {title}
                    </h3>

                    <Link 
                     href={`/${tags[0]?.name || 'blog'}/${slug}`} 
                      className="inline-flex gap-2 items-center text-black underline hover:text-rb-link-green font-semibold"
                    >
                      Continue reading
                      <LineArrow className=" max-w-[20px]" />
                    </Link>
                  </div>
                </div>
              )
            )}
          </div>
        </div>
      </section>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(selectedSchema) }}
      ></script>
    </>
  )
}
export const getStaticPaths = async () => {
  const { data } = await getAllBlogs()
  const paths = (data?.posts?.nodes || []).map(({ slug, tags }) => {
    const tag = tags?.nodes?.[0]?.slug || 'blog'
    return {
      params: { tags: tag, slug: slug },
    }
  })

  return {
    paths,
    fallback: 'blocking',
  }
}


export async function getStaticProps({ params }) {
  const { slug, tags } = params
  const { data, status } = await getBlog(slug)
  const actualTag = data?.post?.tags?.nodes?.[0]?.slug || 'blog'

   // Case 1: Post not found → redirect or 404
   if (!data?.post) {
    return { notFound: true }
   }

  //Case 2: Tag in URL doesn't match the post's actual tag → 404
  if (actualTag?.toLowerCase() !== tags?.toLowerCase()) {
   return { notFound: true }
  }

  if (status !== 'success') {
    return {
      redirect: {
        destination: `/${tags}`,
        permanent: false,
      },
    }
  }

  const relatedArticle = await getRelatedBlogs(
    data.post?.slug,
    // data.post?.tags?.nodes?.map((t) => t.slug) || []
  )
  
  let toc = {}
  const content = await rehype()
    .data('settings', { fragment: true })
    .use(rehypeSlug)
    .use(rehypeToc, {
      headings: ['h2', 'h3', 'h4', 'h5', 'h6'],
      customizeTOC: (tree) => {
        toc = tree
        return false
      },
    })
    .process(data.post?.content || '')

  return {
    props: {
      article: {
        ...formateBlogPostFunc(data.post),
        content: String(content),
      },
      tocTree: toc?.children?.length ? processTree(toc.children[0]) : null,
      relatedArticle: relatedArticle.map(formateBlogPostFunc),
    },
  }
}


export default ArticleSingle

