import React, { useEffect, useMemo, useRef, useState } from 'react'
import { Twitter, Linkedin } from '@/components/icons'
import { SEO, WorkHeroSection, StatsSection, Testimonials } from '@/components/shared'
import { useRouter } from 'next/router'
import { getPlayWorks, getPlayWorkDetails } from '@/utils/graphql'
import { formatPlayPosts } from '@/utils/formate'
import { CommercialSection } from '@/components/pages/work'

const ArticleSingle = ({ article }) => {
  const blogRef = useRef()
  const router = useRouter()
  const workJsonObj = JSON.parse(article?.workDetails?.workJson || "{}");
  const stats = workJsonObj?.stats_data || []
  const articleUrl = `https://www.makerrs.com${router.asPath}`
  const logo = useMemo(() => {
    return {
      src: article?.workDetails?.logo?.sourceUrl,
      // width: 150,
      // height: 'auto'
    }
  }, [])
  const tags = useMemo(() => {
    return article?.categories?.nodes?.map(cat => cat.name) || [];
  }, []);
  const banner = useMemo(() => {
    return {
      src: article?.workDetails?.banner?.sourceUrl,
      width: 150,
      height: 70,
    }
  }, [])
  const tocTrigger = () => {
    settoc((state) => !state)
  }

  const socials = [
    {
      key: 0,
      href: `https://twitter.com/intent/tweet?text=${articleUrl}`,
      color: '#000',
      icon: <Twitter />,
    },

    {
      key: 1,
      href: `https://www.linkedin.com/shareArticle?mini=true&url=${articleUrl}`,
      color: '#006699',
      icon: <Linkedin />,
      type: 'linkedin',
    },
  ]



  useEffect(() => {
    const headings = [...blogRef.current?.querySelectorAll('h2[id]')]
    const figcaption = [...blogRef.current?.querySelectorAll('figcaption')]
    const sub_headings = [...blogRef.current?.querySelectorAll('h2, h3')]
    const sub_heading_h4 = [...blogRef.current?.querySelectorAll('h4')]
    const img_center = [...blogRef.current?.querySelectorAll('.wp-image-1064')]
    const tableFigures = [...blogRef.current?.querySelectorAll('.wp-block-table')];
    const paragraph = [...blogRef.current?.querySelectorAll('p')]
    const ol_tag = [...blogRef.current?.querySelectorAll('ol')]
    const li_tag = [...blogRef.current?.querySelectorAll('li')]
    const images = [...blogRef.current?.querySelectorAll('.wp-block-image img')];

    images.forEach((img) => {
      img.style.setProperty('width', '78.8rem', 'important');
      img.style.setProperty('max-width', '78.8rem', 'important');
    });
    ol_tag.forEach((ol) => {
      ol.classList.add('list-decimal', 'ml-5', 'space-y-4', 'mb-[30px]')
    })

    li_tag.forEach((li) => {
      li.classList.add('font-opensans', 'text-[20px]', 'text-rb-black/80', 'leading-[28px]', 'max-md:text-[16px]', 'max-md:leading-[150%]', 'max-md:tracking-[-0.5px]', '!mb-7.5', 'pl-2')
    })

    paragraph.forEach((para) => {
      para.style.marginBottom = "30px";
    });

    sub_heading_h4.forEach((heading_four) => {
      heading_four.classList.add('mb-4', 'md:mb-6', 'md:!text-[32px]', '!text-black', 'md:!leading-10', '!tracking-normal', '!text-xl')
    })

    sub_headings.forEach((sub_heading) => {
      sub_heading.style.paddingTop = '28px';
      sub_heading.style.paddingBottom = '10px';

      // add required classes
      sub_heading.classList.add('uppercase', 'text-rb-black', '!text-sm', 'md:!text-xl', '!font-semibold',
        'flex', 'items-center', '!font-opensans');

      // prevent duplicate span
      if (!sub_heading.querySelector('.heading-line')) {
        const line = document.createElement('span');
        line.className = 'heading-line h-px w-7.5 md:w-headingLine block mr-3 bg-rb-black';
        sub_heading.prepend(line);
      }
    });

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
  const seoUrl = `https://www.makerrs.com${router.asPath}`


  return (
    <>
      <SEO
        title={article?.workDetails?.seoTitle}
        description={article?.workDetails?.seoDesc}
        image={article?.featuredImage?.src ?? 'https://www.makerrs.com/img/makerrs-og.jpg'}
        url={seoUrl}
      />
      <WorkHeroSection
        title={article?.title}
        logo={logo}
        socials={socials}
        tags={tags}
        image={banner}
        specifyWidth={workJsonObj?.logo_width}
      />
      <section className={`bg-white overflow-hidden pb-[60px] ${workJsonObj && workJsonObj?.testimonials?.length > 0 ? 'md:!pb-[120px]': 'md:!pb-[56px] !pb-[24px]'}`}>
        <div className="container">
          <div className="cs-content max-w-[914px]">
            <div
              ref={blogRef}
              className="work-content-main max-w-[914px]"
              dangerouslySetInnerHTML={{ __html: article?.content }}
            ></div>
          </div>
        </div>
        {stats?.length > 0 && (
          <StatsSection
            tag={workJsonObj?.stats_title}
            className="mt-6 md:mt-20"
            data={stats}
          />
        )}
        <div className='md:mt-20'>
          <CommercialSection
            sources={workJsonObj.sources}
            type={workJsonObj.commercials_type}
          />
        </div>
        {
          workJsonObj?.testimonials && workJsonObj?.testimonials?.length > 0 && (
            <Testimonials
              title={workJsonObj?.testimonial_title}
              className="md:pt-[48px] pt-[36px]"
              testimonialData={workJsonObj?.testimonials}
            />
          )
        }
      </section>
    </>
  )
}
export const getStaticPaths = async () => {
  const { data } = await getPlayWorks()

  const works = formatPlayPosts(data?.works?.nodes || [])
  const paths = (works || []).map(({ case_study_title, workDetails }) => {
    const tag = workDetails?.url || 'featured'
    return {
      params: { create: tag, slug: case_study_title },
    }
  })

  return {
    paths,
    fallback: 'blocking',
  }
}


export async function getStaticProps({ params }) {
  const { slug, create } = params
  const { data, status } = await getPlayWorkDetails(slug)

  if (!data?.work) {
    return { notFound: true }
  }


  let workJson = {}

  try {
    workJson = JSON.parse(data?.work?.workDetails?.workJson || "{}")
  } catch {
    workJson = {}
  }


  const actualTag = workJson?.url || "featured"

  if (actualTag.toLowerCase() !== create.toLowerCase()) {
    return { notFound: true }
  }

  if (status !== "success") {
    return {
      redirect: {
        destination: `/${create}`,
        permanent: false,
      },
    }
  }

  return {
    props: {
      article: data.work,
    },
  }
}


export default ArticleSingle

