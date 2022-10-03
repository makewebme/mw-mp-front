import { useCallback, useMemo } from 'react'
import { Link, useLocation } from 'react-router-dom'

import { useAppDispatch } from 'store'
import Button from 'components/Button'
import { paths } from 'routes/helpers'
import { addToFavorites, removeFromFavorites } from 'features/Favorites/reducer'
import { ReactComponent as HeartEmpty } from 'img/heart-empty.svg'
import { ReactComponent as HeartFilled } from 'img/heart-filled.svg'
import {
  Wrapper,
  LikeWrapper,
  Image,
  PriceWrapper,
  PriceRegular,
  PriceRegularWhenDiscounted,
  PriceDiscounted,
  Title,
  Desc,
  BtnsWrapper,
} from './styled'


interface I_ProductCardProps {
  id: number
  slug?: string
  image: string
  price: number
  priceDiscounted?: number
  title: string
  description: string
  isLiked: boolean
  hideLikes?: boolean
}


const ProductCard: React.FC<I_ProductCardProps> = ({
  id,
  slug,
  image,
  price,
  priceDiscounted,
  title,
  description,
  isLiked,
  hideLikes = false,
}) => {
  const dispatch = useAppDispatch()
  const location = useLocation()

  const handleFavorites = useCallback((e: React.MouseEvent<HTMLElement>) => {
    const { productId } = e.currentTarget.dataset

    dispatch(
      !isLiked
        ? addToFavorites(+productId!)
        : removeFromFavorites(+productId!)
    )
  }, [ dispatch, isLiked ])

  const isFavoritesPage = useMemo(
    () => location.pathname === paths.favorites,
    [ location.pathname ]
  )

  const removeFavorite = useCallback(
    (e: React.MouseEvent<HTMLElement>) => {
      dispatch(
        removeFromFavorites(+e.currentTarget.dataset.productId!)
      )
    }, [ dispatch ]
  )


  return (
    <Wrapper>
      {!hideLikes && (
        <LikeWrapper
          data-product-id={id}
          onClick={handleFavorites}
        >
          {isLiked ? <HeartFilled /> : <HeartEmpty />}
        </LikeWrapper>
      )}

      <Link to={`/product/${slug || id}`}>
        <Image src={`${process.env.REACT_APP_API_URL}/images/products/${image}`} />
      </Link>

      <PriceWrapper>
        {Number.isInteger(priceDiscounted) ? <>
          <PriceDiscounted>{priceDiscounted} ₽</PriceDiscounted>
          <PriceRegularWhenDiscounted>{price} ₽</PriceRegularWhenDiscounted>
        </> : (
          <PriceRegular>{price} ₽</PriceRegular>
        )}
      </PriceWrapper>

      <Title className='h4'>
        <Link to={`/product/${slug || id}`}>
          {title}
        </Link>
      </Title>

      <Desc>{description}</Desc>

      <BtnsWrapper>
        <Button block>
          В корзину
        </Button>

        {isFavoritesPage && (
          <Button
            type='danger'
            block
            onClick={removeFavorite}
            data-product-id={id}
          >
            Удалить
          </Button>
        )}
      </BtnsWrapper>
    </Wrapper>
  )
}

export default ProductCard
