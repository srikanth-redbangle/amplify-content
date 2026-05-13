import { LineArrow } from '@/components/icons'
import { LineHeading, NewsletterField, SEO } from '@/components/shared'
import { ContentPostCard } from '@/components/shared/Cards'
import GetUpdates from '@/components/shared/sections/GetUpdatesSection/GetUpdates'
import { ArrowButton, Button } from '@/components/ui'
import React, { useState, useEffect } from 'react'
import { getBlogs } from '@/utils/graphql'
import { formatBlogPosts } from '@/utils/formate'
import { blogSchema } from '@/components/schema/blog-schema'
import Script from 'next/script'
import { Dropdown } from '@/components/dropdown/dropdown'
import { useRouter } from 'next/router'

const PAGE_LIMIT = 70;

const Articles = ({ featuredPost, posts: { edges, pageInfo } }) => {
  const [state, setState] = useState({
    pageInfo: {
      endCursor: pageInfo.endCursor,
      hasNextPage: pageInfo.hasNextPage,
    },
    posts: edges,
  })

  const loadMore = async () => {
   const { data: { posts },} = await getBlogs(state.pageInfo.endCursor, PAGE_LIMIT); 

    setState((prev) => ({
      pageInfo: posts.pageInfo,
      posts: [
        ...prev.posts,
        ...formatBlogPosts(posts?.edges).filter(
          (newPost) => !prev.posts.some((p) => p.slug === newPost.slug)
        ),
      ]
    }));
  };
  useEffect(() => {
    loadMore()
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
    // setTimeout(() => {
    //   setisPopupOpen(true);
    // }, 10000);

  }, [])


  // Separate posts with the 'SEO Blogs' category and without //
  const { techPosts, otherPosts } = state.posts.reduce(
    (result, post) => {
      const { categories } = post;

      if (categories.some((c) => c.name === 'SEO Blogs')) {
        result.techPosts.push(post);
      } else {
        result.otherPosts.push(post);
      }

      return result;
    },
    { techPosts: [], otherPosts: [] }
  );


  // Concatenate the arrays to display 'SEO Blogs' posts last
  const allPosts = otherPosts.concat(techPosts);
  const [visiblePosts, setVisiblePosts] = useState(9); // Initial number of visible posts

  useEffect(() => {
    setVisiblePosts(6)
  }, [])
  const totalPosts = allPosts.length;

 const loadMorePosts = () => {
    const nextVisiblePosts = visiblePosts + 6;
    setVisiblePosts(Math.min(nextVisiblePosts, filteredPosts.length));
  };

  const router = useRouter();
  const { category } = router.query;

  let categoryOptions = allPosts
    .flatMap(item => item.categories)
    .filter((category, index, self) =>
      index === self.findIndex((c) => c.slug === category.slug)
    )



  const initialCategory = categoryOptions && categoryOptions.find(obj => obj.slug === category);
  const [selectedCategory, setSelectedCategory] = useState(initialCategory?.slug);
  //after selecting categories
  const handleCategoryChange = (category) => {
    if (category.slug === 'all-blogs') {
      router.push(`/blog`, undefined, { shallow: true });
      setSelectedCategory(category.slug);
    } else {
      router.push(`/blog?category=${category.slug}`, undefined, {
        shallow: true,
      });
      setSelectedCategory(category.slug);
    }

    setVisiblePosts(6);
    // reset visible count when filtering
  };


  useEffect(() => {
    if (initialCategory) {
      setSelectedCategory(initialCategory?.slug);
    }
  }, [category]);

  const filteredPosts = (category && category !== "all-blogs")
    ? allPosts.filter(post => post.categories.some(cat => cat.slug === selectedCategory))
    : allPosts;

  return (
    <>
      <SEO
        title="The Blog for Borderless Brands | Makerrs"
        description="Explore insights and expert views on branding, design, video content, branded podcast production, marketing campaigns, employer branding campaigns and more."
        keywords="Creative marketing, Knowledge sharing, Innovative technology, Content Strategies, B2B Growth, Content Blog"
        url={category !== undefined ? `https://www.makerrs.com/blog?category=${category}`:`https://www.makerrs.com/blog`}
      />
      <section className="py-23 md:py-23">
        <div className="container">
          <h1 className="font-everett text-[32px] md:text-[64px] xl:text-[120px] font-normal mb-8 md:mb-18 leading-[100%]">
            Read Our Blog
          </h1>

          <div className="flex flex-wrap lg:flex-nowrap gap-8 items-center mb-13 border-b border-b-rb-davy-grey pb-13">
            <p className="flex-1 md:text-[32px] font-semibold tracking-[-1.28px] mb-0">
              Explore how creativity and content can drive growth for your borderless brand.
            </p>

            <NewsletterField />
          </div>

          <div className="grid md:grid-cols-2 gap-6 items-center">
            <div>
              <div className="h-[315px] overflow-hidden relative">
                <a
                  href={`/${featuredPost?.tags[0]?.name || 'blog'}/${featuredPost?.slug}`}
                  target="_blank"
                  className="overflow-hidden group"
                >
                  <img
                    {...featuredPost?.featuredImage}
                    src={featuredPost?.featuredImage.src}
                    className="w-full h-full object-cover group-hover:scale-[1.03] transition-all duration-300"
                    alt=""
                  />

                  <div className="absolute bottom-5 left-5 flex gap-1">
                    {featuredPost?.categories?.map((c) => (
                      <div
                        key={c.slug}
                        className="border border-white bg-black/50 rounded-full py-2 px-4 text-[12px] font-semibold text-white capitalize"
                      >
                        {c.name}
                      </div>
                    ))}
                  </div>
                </a>
              </div>
            </div>

            <div>
              <h3 className="text-[26px] md:text-[32px] leading-[120%] font-semibold mb-4 tracking-[-1.28px]">
                {featuredPost?.title}
              </h3>

              <div
                dangerouslySetInnerHTML={{ __html: featuredPost?.excerpt }}
                className="mb-10"
              ></div>

              <a
                href={`/${featuredPost?.tags[0]?.name || 'blog'}/${featuredPost?.slug}`}
                className="inline-flex gap-2 items-center text-black underline font-semibold hover:text-rb-link-green"
                target="_blank"
              >
                Continue reading
                <LineArrow arrowcolor="#13c33f" className="max-w-[20px] text-rb-link-green hover:text-rb-link-green" />
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="pb-24 pt-0 md:pt-10 md:pb-24">
        <div className="container">
          <LineHeading className="mb-6 md:mb-9">Explore more</LineHeading>
         
          <div className='blogs-dd'>
            <Dropdown
              placeholder={selectedCategory || 'all'}
              options={categoryOptions}
              onChange={handleCategoryChange} // Handle the value change
            />
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-y-16 gap-x-8 pt-8">
            {filteredPosts.slice(0, visiblePosts).map(
              ({ date, author, featuredImage, slug, categories, title, tags }) => (
                <div key={slug}>
                <a href={`/${tags[0]?.name || 'blog'}/${slug}`} target="_blank"
                  className="text-black hover:text-black">
                    <div className="h-[384px] block md:h-[272px] overflow-hidden relative mb-4">
                      <div className="w-full h-full overflow-hidden group">
                        <img
                          alt=""
                          {...featuredImage}
                          src={featuredImage.src}
                          className="w-full h-full object-cover group-hover:scale-105 transition-all duration-300"
                        />
                      </div>
                      <div className="absolute bottom-5 left-5 flex gap-1">
                        {categories.map((c) => (
                          <div
                            key={c.slug}
                            className={`${c.name === 'Uncategorized' ? 'hidden' : ''
                              } capitalize bg-black/50 border border-white rounded-full py-2 px-4 text-[12px] font-semibold text-white`}
                          >
                            {c.name}
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h3 className="text-[22px] md:text-[24px] leading-[120%] font-semibold mb-5.5 md:mb-4 tracking-[-0.96px] line-clamp-2">
                        {title}
                      </h3>

                      <span
                        className="inline-flex gap-2 items-center underline font-semibold hover:text-rb-link-green"
                       
                      >
                        Continue reading
                        <LineArrow arrowcolor="#13c33f" className=" max-w-[20px]" />
                      </span>
                    </div>
                  </a>
                </div>
              )
            )}
          </div>
          <div className={`${filteredPosts.length > 6 ?'pt-15':''} text-center`}>

            {filteredPosts.length > 6 && visiblePosts < filteredPosts.length && (
              <Button
                className="w-full md:w-fit mx-auto mt-[30px] md:mt-12 focus:outline-none"
                onClick={loadMorePosts}
                suffix={<LineArrow hover />}
              >
                SEE MORE
              </Button>
            )}

            {filteredPosts.length > 6 && visiblePosts >= filteredPosts.length && (
              <Button
                className="w-full md:w-fit mx-auto mt-[30px] md:mt-12"
                onClick={() => {
                  setVisiblePosts(6); // or set to 6 if that's your default
                }}
                suffix={<LineArrow hover />}
              >
                SEE LESS
              </Button>
            )}
          </div>


        </div>
      </section>

      <GetUpdates />
      <Script id="schema" type="application/ld+json">
        {JSON.stringify(blogSchema)}
      </Script>
    </>
  )
}

export async function getStaticProps() {
  try {
    const { data } = await getBlogs(null, PAGE_LIMIT)

    // Format blog posts
    const formatedPosts = formatBlogPosts(data.posts?.edges)

    // Separate "SEO Blogs" and other categories
    let seoBlogs = []
    let nonSeoBlogs = []

    formatedPosts.forEach((obj) => {
      if (
        obj.categories.some((cat) => cat.name.toLowerCase() === 'seo blogs')
      ) {
        seoBlogs.push(obj)
      } else {
        nonSeoBlogs.push(obj)
      }
    })

    // Concatenate non-SEO blogs with SEO blogs at the end
    let rearrangedArray = nonSeoBlogs.concat(seoBlogs)

    // Extract the featured post
    const featuredPost = rearrangedArray.shift()

    return {
      props: {
        featuredPost,
        posts:
          {
            ...data.posts,
            edges: rearrangedArray,
          } || null,
      },
    }
  } catch (error) {
    // Handle errors
    console.error('Error fetching blogs:', error)

    return {
      props: {
        featuredPost: null,
        posts: null,
      },
    }
  }
}

Articles.PageLayoutProps = {
  hasContactForm: false,
}

export default Articles
