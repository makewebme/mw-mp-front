
//
// App paths
//

export const pathsPublic: { [k: string]: string } = {
  home: '/',
  login: '/login',
  productDetails: '/product/:idOrSlug',
  cart: '/cart',
}

export const pathsPrivate: { [k: string]: string } = {
  accountSettings: '/account-settings',
  favorites: '/favorites',
}

export const paths: { [k: string]: string } = Object.assign({}, pathsPublic, pathsPrivate)



//
// Check if pathname matches to one of given key from paths argument
//

export const checkPathMatch = (
  pathname: string,
  paths: { [k: string]: string },
) => {
  let isMatch = false

  const allPaths = Object.keys(paths).map((k) => paths[k])
  const pathFirstSection = pathname.split('/')[1]

  allPaths.forEach((p) => {
    if (p.slice(1) === pathFirstSection) isMatch = true
  })

  return isMatch
}
