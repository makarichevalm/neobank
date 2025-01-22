import { ReactNode } from 'react'
import HomePage from '@pages/HomePage'
import CardPage from '@pages/CardPage'
import NotFoundPage from '@pages/NotFoundPage'
import ScoringPage from '@/pages/ScoringPage'
import DocumentPage from '@/pages/DocumentPage'
import SignPage from '@/pages/SignPage'
import CodePage from '@/pages/CodePage'

enum RouteNames {
  HOME = '/',
  CARD = '/loan',
  PRODUCT = '/product',
  ACCOUNT = '/account',
  RESOURCES = '/resources',
  SCORING = CARD + '/:id',
  DOCUMENT = SCORING + '/document',
  SIGN = DOCUMENT + '/sign',
  CODE = SCORING + '/code',
}

type TRoutes = {
  path: string
  component: ReactNode
  exact: boolean
}

export const routes: Array<TRoutes> = [
  { path: RouteNames.HOME, component: <HomePage />, exact: true },
  { path: RouteNames.CARD, component: <CardPage />, exact: true },
  { path: RouteNames.PRODUCT, component: <NotFoundPage />, exact: true },
  { path: RouteNames.ACCOUNT, component: <NotFoundPage />, exact: true },
  { path: RouteNames.RESOURCES, component: <NotFoundPage />, exact: true },
  { path: RouteNames.SCORING, component: <ScoringPage />, exact: true },
  { path: RouteNames.DOCUMENT, component: <DocumentPage />, exact: true },
  { path: RouteNames.SIGN, component: <SignPage />, exact: true },
  { path: RouteNames.CODE, component: <CodePage />, exact: true },
]
