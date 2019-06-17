/**
 * Returns promise resolved to array of popular articles
 * 
 * @see ItemPropType
 */
export function getPopularArticles() {
  const url = `https://api.nytimes.com/svc/mostpopular/v2/viewed/7.json?api-key=${
    window.__NYMV_API_KEY
  }`
  return fetch(url)
    .then(response => response.json())
    .then(parseBody)
}

function parseBody(body) {
  if (body.status !== 'OK') {
    throw new Error(makeError(body))
  }
  return body.results.map(r => ({
    id: r.id,
    title: r.title,
    abstract: r.abstract,
    authors: r.byline,
    date: r.published_date,
    thumbnail: extractThumb(r.media),
  }))
}

function extractThumb(media = []) {
  const imgs = media.filter(m => m.type === 'image')
  return !!imgs.length ? imgs[0]['media-metadata'][0].url : undefined
}

function makeError(body) {
  let str = undefined
  if (body.fault) {
    str = body.fault.faultstring
  }
  return str || 'Request failed'
}
