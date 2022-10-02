import { useState, useEffect, useCallback, useMemo } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Helmet } from 'react-helmet'
import { useParams } from 'react-router-dom'

import { get } from 'helpers/request'
import { addToFavorites, removeFromFavorites } from 'features/Favorites/reducer'
import { selectFavorites } from 'features/Favorites/selectors'
import { I_ProductDetails } from 'pages/types'
import { I_UniRes } from 'types'
import { ReactComponent as HeartEmpty } from './img/heart-empty.svg'
import { ReactComponent as HeartFilled } from './img/heart-filled.svg'
import {
  Wrapper,
  LikeWrapper,
  ImagesWrapper,
  Image,
  InfoWrapper,
  PriceWrapper,
  PriceRegular,
  PriceRegularWhenDiscounted,
  PriceDiscounted,
} from './styled'
import { PageWrapper } from 'App.styled'


const ProductDetailsPage: React.FC = () => {
  const params = useParams()
  const dispatch = useDispatch()

  const [ productDetails, setProductDetails ] = useState<I_ProductDetails>()

  useEffect(() => {
    get(`/products/${params.idOrSlug}`)
      .then((res: I_UniRes) => setProductDetails(res.data))
  }, [ params.idOrSlug ])

  const idsInFavorites = useSelector(selectFavorites)

  const isLiked = useMemo(
    () => idsInFavorites.includes(productDetails?.id!),
    [ idsInFavorites, productDetails ]
  )

  const handleFavorites = useCallback((e: React.MouseEvent<HTMLElement>) => {
    const { productId } = e.currentTarget.dataset

    dispatch(
      !idsInFavorites.includes(+productId!)
        ? addToFavorites(+productId!)
        : removeFromFavorites(+productId!)
    )
  }, [ dispatch, idsInFavorites ])


  if (!productDetails) return null


  const { id, image, title, description, price, priceDiscounted } = productDetails


  return <>
    <Helmet>
      <title>Главная - KPL Market</title>
    </Helmet>

    <PageWrapper>
      <Wrapper>
        <ImagesWrapper>
          <Image src={`${process.env.REACT_APP_API_URL}/images/products/${image}`} />

          <LikeWrapper
            data-product-id={id}
            onClick={handleFavorites}
          >
            {isLiked ? <HeartFilled /> : <HeartEmpty />}
          </LikeWrapper>
        </ImagesWrapper>

        <InfoWrapper>
          <h1>{title}</h1>

          <PriceWrapper>
            {Number.isInteger(priceDiscounted) ? <>
              <PriceDiscounted>{priceDiscounted} ₽</PriceDiscounted>
              <PriceRegularWhenDiscounted>{price} ₽</PriceRegularWhenDiscounted>
            </> : (
              <PriceRegular>{price} ₽</PriceRegular>
            )}
          </PriceWrapper>

          <p>{description}</p>
        </InfoWrapper>
      </Wrapper>
    </PageWrapper>
  </>
}

export default ProductDetailsPage
