import { lazy } from 'react'
import { Route, Navigate, Routes, useLocation } from 'react-router-dom'

import { useAppDispatch } from 'store'
import { setIsLogged } from 'features/App/reducer'
import { checkPathMatch, paths } from './helpers'


const LoginPage = lazy(() => import('pages/AuthPages/LoginPage'))
const RegisterPage = lazy(() => import('pages/AuthPages/RegisterPage'))

const HomePage = lazy(() => import('pages/HomePage'))
const ProductDetailsPage = lazy(() => import('pages/ProductDetailsPage'))
const FavoritesPage = lazy(() => import('pages/FavoritesPage'))


const PublicRoutes: React.FC = () => {
  const dispatch = useAppDispatch()
  const location = useLocation()

  const isMatch = checkPathMatch(location.pathname, paths)

  const Logout = () => {
    dispatch(setIsLogged(false))
    return <Navigate to={paths.home} />
  }


  return (
    <Routes>
      <Route path={paths.login} element={<LoginPage />} />
      <Route path={paths.register} element={<RegisterPage />} />
      <Route path={paths.logout} element={<Logout />} />

      <Route path={paths.home} element={<HomePage />} />
      <Route path={paths.productDetails} element={<ProductDetailsPage />} />
      <Route path={paths.favorites} element={<FavoritesPage />} />

      <Route path='*' element={!isMatch ? <Navigate to={paths.home} /> : null} />
    </Routes>
  )
}

export default PublicRoutes
