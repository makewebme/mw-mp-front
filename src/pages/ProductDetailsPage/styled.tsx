import styled from 'styled-components'

import colors from 'consts/colors'


export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 40px;
`

export const ImagesWrapper = styled.div`
  width: calc(50% - 20px);
  position: relative;
`

export const LikeWrapper = styled.div`
  cursor: pointer;
  width: 40px;
  height: 40px;
  position: absolute;
  top: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;

  svg {
    pointer-events: none;
  }
`

export const Image = styled.img`
  width: calc(50% - 20px);
  margin-bottom: 10px;
  max-height: 40vh;
  height: 100%;
  width: 100%;
  border-radius: 4px;
  object-fit: contain;
`

export const InfoWrapper = styled.div`
  width: calc(50% - 20px);
`

// TODO: Duplicate in blocks/ProductCard/styled.ts
export const PriceWrapper = styled.div`
  display: flex;
  align-items: flex-end;
  margin-bottom: 10px;
`

// TODO: Duplicate in blocks/ProductCard/styled.ts
export const PriceRegular = styled.div`
  font-size: 18px;
  font-weight: 700;
  margin-right: 10px;
  color: ${colors.primary};
`

// TODO: Duplicate in blocks/ProductCard/styled.ts
export const PriceRegularWhenDiscounted = styled.div`
  text-decoration: line-through;
  color: #999;
  font-size: 15px;
`

// TODO: Duplicate in blocks/ProductCard/styled.ts
export const PriceDiscounted = styled.div`
  font-size: 18px;
  font-weight: 700;
  margin-right: 10px;
  color: ${colors.primary};
`
