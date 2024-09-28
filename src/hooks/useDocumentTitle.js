import { useLayoutEffect } from 'react'

const useDocumentTitle = (title) => {
  useLayoutEffect(() => {
    if (title) {
      document.title = title
    } else {
      document.title = 'eCommerce React App'
    }
  }, [title])
}

export default useDocumentTitle
