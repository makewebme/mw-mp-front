import { Suspense } from 'react'
import { useLocation } from 'react-router-dom'

import { paths } from 'routes/helpers'
import Header from 'features/Header'
import PublicRoutes from 'routes/PublicRoutes'
// import PrivateRoutes from 'routes/PrivateRoutes'
import { AppStyles, Footer } from 'App.styled'


export const App = () => {
  const location = useLocation()

  const notIsAuthPage = ![ paths.login, paths.register ].includes(location.pathname)


  return <>
    <AppStyles />

    {notIsAuthPage && <Header />}

    <Suspense fallback={'Loading...'}>
      <PublicRoutes />
      {/* <PrivateRoutes /> */}
    </Suspense>

    {notIsAuthPage && (
      <Footer>
        <div>© Маркетплейс MW</div>
      </Footer>
    )}
  </>
}

export default App
