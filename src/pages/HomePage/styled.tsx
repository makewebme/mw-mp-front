import styled from 'styled-components'


export const ProductGroup = styled.div`
  margin-top: 20px;

  > *:first-child {
    margin-bottom: 10px;
  }
`

export const ProductGroupContainer = styled.div`
  display: flex;
  flex-wrap: wrap;

  > * {
    width: 16.666666%;
    margin-bottom: 20px;
  }
`
