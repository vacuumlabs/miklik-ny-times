import { useState, useEffect } from 'react'
import RequestStatus from '../common/RequestStatus'
import { getPopularArticles } from './popularApi'

/**
 * Returns popular articles.
 *
 * @return {
 *   list: ItemPropType[],
 *   status: RequestStatus,
 *   error: any,
 * }
 */
function usePopular() {
  const [requestState, setRequestState] = useState({
    list: [],
    status: RequestStatus.PENDING,
  })

  useEffect(() => {
    getPopularArticles()
      .then(result => {
        setRequestState({ list: result, status: RequestStatus.OK })
      })
      .catch(error => setRequestState({ status: RequestStatus.ERROR, error, list: [] }))
  }, [])

  return requestState
}

export default usePopular
