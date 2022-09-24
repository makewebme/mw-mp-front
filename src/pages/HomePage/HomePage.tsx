import { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet'
import { useSelector } from 'react-redux'

import { get } from 'helpers/request'
import ProductCard from 'blocks/ProductCard'
import { selectFavorites } from 'features/Favorites/selectors'
import { I_UniRes } from 'types'
import { PageWrapper } from 'App.styled'
import {
  ProductGroup,
  ProductGroupContainer,
} from './styled'


const HomePage: React.FC = () => {
  const idsInFavorites = useSelector(selectFavorites)

  const [ products, setProducts ] = useState<any[]>()

  useEffect(() => {
    get('/products')
      .then((res: I_UniRes) => setProducts(res.data))
  }, [])


  if (!products) return <p>Loading</p>


  return <>
    <Helmet>
      <title>Главная - MW Marketplace</title>
    </Helmet>

    <PageWrapper>
      <ProductGroup>
        <h2>Рекомендуемые товары</h2>

        <ProductGroupContainer>
          {products.map((p) => (
            <ProductCard
              {...p}
              key={p.id}
              isLiked={idsInFavorites.includes(p.id)}
            />
          ))}
        </ProductGroupContainer>
      </ProductGroup>
    </PageWrapper>
  </>
}

export default HomePage
