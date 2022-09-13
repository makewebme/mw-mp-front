import { Helmet } from 'react-helmet'
import { useSelector } from 'react-redux'

import ProductCard from 'blocks/ProductCard'
import { selectFavorites } from 'features/Favorites/selectors'
import { dummyProducts } from 'pages/dummyProducts'
import { PageWrapper } from 'App.styled'
import {
  ProductGroup,
  ProductGroupContainer,
} from './styled'


const HomePage: React.FC = () => {
  const idsInFavorites = useSelector(selectFavorites)


  return <>
    <Helmet>
      <title>Главная - MW Marketplace</title>
    </Helmet>

    <PageWrapper>
      <ProductGroup>
        <h2>Рекомендуемые товары</h2>

        <ProductGroupContainer>
          {dummyProducts.map((p) => (
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
