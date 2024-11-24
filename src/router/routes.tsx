import { ReactNode } from 'react'
import HomePage from '../pages/HomePage'
import CardPage from '../pages/CardPage'

enum RouteNames {
  HOME = '/',
  CARD = '/card',
}

type TRoutes = {
  path: string
  component: ReactNode
  exact: boolean
}

export const routes: Array<TRoutes> = [
  { path: RouteNames.HOME, component: <HomePage />, exact: true },
  { path: RouteNames.CARD, component: <CardPage />, exact: true },
]
