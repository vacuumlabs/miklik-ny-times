import { transformPopularResponse } from '../app/popular/popularApi'
import { fullResponse } from './apiFixtures'

export const firstArticle = transformPopularResponse(fullResponse)[0]
