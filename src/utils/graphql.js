const WP_HOST = process.env.NEXT_PUBLIC_WORDPRESS

const AUTHOR_QUERY = `
  node {
    firstName
    lastName
    description
    avatar {
      url
      width
      height
    }
  }
`

const FEATURED_IMAGE_QUERY = `
node {
  sourceUrl        
  srcSet
  altText
}    
`

const WORK_DETAILS_QUERY = `
  workJson
  logo {
    sourceUrl
  }
  banner { 
    sourceUrl
  }
  seoTitle
  seoDesc
`

const TAXANOMY_QUERY = `
    nodes {
        name
        slug
    }
`

const WORK_PLAY_DETAILS = `
title
content
companies {
  ${TAXANOMY_QUERY}
}
tags {
  ${TAXANOMY_QUERY}
}
usage {
  ${TAXANOMY_QUERY}
}
videoDetails {
    width
    height
    aspectRatio
    duration
    fps
    publish
}
categories {
  ${TAXANOMY_QUERY}
}
workDetails {
 ${WORK_DETAILS_QUERY}
}
`
const WORK_POST_QUERY = `
    nodes {
      title
      slug
      featuredImage {
        ${FEATURED_IMAGE_QUERY}
      }
      categories {
        ${TAXANOMY_QUERY}
      }
      tags {
        ${TAXANOMY_QUERY}
      }
      companies {
        ${TAXANOMY_QUERY}
      }   
      workDetails {
        ${WORK_DETAILS_QUERY}
      }   
    }
   
`

const GLOBAL_LP_POST_QUERY = `
    nodes {
      title
      slug
      featuredImage {
        ${FEATURED_IMAGE_QUERY}
      }
      categories {
        ${TAXANOMY_QUERY}
      }
      tags {
        ${TAXANOMY_QUERY}
      }
      companies {
        ${TAXANOMY_QUERY}
      }
      globalLp {
        customTitle
        globalLpVideo
      }
           
    }
`

const POST_QUERY = `
slug
title
excerpt
date
featuredImage {
  ${FEATURED_IMAGE_QUERY}
}
author {  
  ${AUTHOR_QUERY}  
}
categories {
  ${TAXANOMY_QUERY}
}
tags {
  ${TAXANOMY_QUERY}
}
blog_additional_data {
  seoDesc
  seoTitle
}
`

const getWpQuery = async (query, variables) => {
  let options = {}
  if (variables) {
    options.variables = variables
  }
  const resBody = {
    status: 'error',
    data: null,
  }
  try {
    const result = await fetch(WP_HOST, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        query,
        ...options,
      }),
    })
    // console.log(result.status)
    if (result.ok) {
      resBody.status = 'success'
      resBody.data = (await result.json())?.data
    }
  } catch (error) {
    // console.log({
    //   query,
    //   ...options,
    // })

    console.log(`Error at : ${WP_HOST}`, JSON.stringify(error))
    resBody.status = 'error'
    resBody.data = null
  }

  return resBody
}

export const getPlayWorks = (tags) => {
  return getWpQuery(
    tags
      ? `
query MyQuery($tags:[String]) {
  works(first:200, where: {tagSlugIn: $tags,orderby: {field: DATE, order: DESC}}) {
      ${WORK_POST_QUERY}
  }
}
`
      : `
query MyQuery {
    works(first:200, where: {orderby: {field: DATE, order: DESC}}) {
        ${WORK_POST_QUERY}
    }
  }
`,
    tags ? { tags } : null
  )
}

export const getGlobalWorks = (tags) => {
  return getWpQuery(
    tags
      ? `
query MyQuery($tags:[String]) {
  works(first:200, where: {tagSlugIn: $tags,orderby: {field: DATE, order: DESC}}) {
      ${GLOBAL_LP_POST_QUERY}
  }
}
`
      : `
query MyQuery {
    works(first:200, where: {orderby: {field: DATE, order: DESC}}) {
        ${GLOBAL_LP_POST_QUERY}
    }
  }
`,
    tags ? { tags } : null
  )
}

export const getAllBlogs = () => {
  return getWpQuery(
    `
    query getAllBlogs{
      posts(first:200){
        nodes{
          slug
        }
      }
    }
  `,
    {}
  )
}

export const getBlogs = (after = null, first = 1) => {
  return getWpQuery(
    `
  query BlogPosts($first: Int!, $after: String) {
    posts(
      first: $first
      after: $after
      where: {orderby: {field: DATE, order: DESC}}
    ) {
      pageInfo {
        hasNextPage
        endCursor
      }
      edges {
        node {
          ${POST_QUERY}
        }
      }
    }
  }
  `,
    { first, after }
  )
}
export const getBlog = (slug) => {
  return getWpQuery(
    `
  query Blog($slug: ID!) {
    post(id: $slug, idType: SLUG) {
        content
        ${POST_QUERY}
    }
  }
  `,
    { slug }
  )
}
export const getPlayWorkDetails = (slug) => {
  return getWpQuery(
    `query PlayWorkDetailQuery($slug: ID!) {
        work(id: $slug, idType: SLUG) {              
            ${WORK_PLAY_DETAILS}
        }
    }`,
    {
      slug,
    }
  )
}

export const getAllTags = () => {
  return getWpQuery(`
    query workTags {
      tags(first:200) {
        nodes {
          name
          slug      
        }
      }
    }
  `)
}
export const getRelatedBlogs = async (slug, tagSlug) => {
  const { data: similarData } = await getWpQuery(
    `
  query getBlogsByTag($tagSlug: [String]) {
    posts(first:4, where: {tagSlugIn: $tagSlug, orderby: {field: DATE, order: DESC}}) {
      nodes{
        ${POST_QUERY}
      }
    }
  }
  `,
    { tagSlug }
  )
  const { data: latestData } = await getWpQuery(`
  query getLatestBlogs($tagSlug: [String]) {
    posts(first:4, where: {orderby: {field: DATE, order: DESC}}) {
      nodes{
        ${POST_QUERY}
      }
    }
  }
  `)
  const relatedBlogs = [
    ...(latestData?.posts?.nodes ?? []),
    ...(similarData?.posts?.nodes ?? []),
  ]
    .filter((blog) => blog.slug != slug)
    .slice(0, 3)

  return relatedBlogs
}

export const getPlaySliderData = () =>
  getWpQuery(
    `
query getWorkPlaySliderData($tags:[String]) {
  works(first:4, where: {tagSlugIn: $tags, orderby: {field: DATE, order: DESC}}) {
    nodes{
      title
      slug
      featuredImage {
        ${FEATURED_IMAGE_QUERY}
      }
      companies {
        ${TAXANOMY_QUERY}
      }
      workDetails {        
        previewLink {
          mediaDetails{
            width
            height
          }
          mediaItemUrl
        }
      }
    }
  }
}
`,
    { tags: ['featured-work'] }
  )
export const getFeaturedPlayWorks = () =>
  getWpQuery(
    `
query getFeaturedPlayWorks($tags:[String]) {
  works(first:8, where: {tagSlugIn: $tags, orderby: {field: DATE, order: DESC}}) {
    nodes{
      title
      slug
      featuredImage {
        ${FEATURED_IMAGE_QUERY}
      }
      companies {
        ${TAXANOMY_QUERY}
      }      
    }
  }
}
`,
    {
      tags: ['featured-work'],
    }
  )

export const getLatestArticle = () =>
  getWpQuery(`
  query getAllBlogs{
    posts(first:3, where: {orderby: {field: DATE, order: DESC}}){
      nodes{
        slug
        title
        date
        excerpt
        author {  
          ${AUTHOR_QUERY}  
        }
        featuredImage {
          ${FEATURED_IMAGE_QUERY}
        }
        tags {
          ${TAXANOMY_QUERY}
        }
      }
    }
  }
  `)
