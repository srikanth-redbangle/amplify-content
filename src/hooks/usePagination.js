import { useEffect, useState } from 'react'

const PAGE_SIZE = 6
const sliceData = (page = 1, data = [], pageSize) =>
  data.slice(0, pageSize * page)

function usePagination(initalData = [], pageSize = PAGE_SIZE) {
  const [page, setPage] = useState(1)
  const loadMore = () => setPage((prev) => prev + 1)
  const resetPagination = () => setPage(1)
  const hasMore = page * pageSize < initalData.length

  useEffect(() => {
    setPage(1)
  }, [initalData])
  return {
    data: sliceData(page, initalData, pageSize),
    hasMore,
    loadMore,
    resetPagination,
  }
}

export default usePagination
