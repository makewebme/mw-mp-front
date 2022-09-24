type T_Method = 'GET' | 'POST' | 'PUT' | 'DELETE' | 'UPDATE'

interface I_Options {
  method: T_Method,
  headers: { [k: string]: any },
  signal?: AbortSignal,
  body?: { [k: string]: any } | string,
}


const request = async (
  method: T_Method,
  url: string,
  body?: { [k: string]: any },
) => {
  // const tokenData: I_TokenData = JSON.parse(localStorage.getItem('MW_TOKEN_CABINET')!)

  const options: I_Options = {
    method,
    headers: {
      'Content-Type': 'application/json',
      // 'Authorization': 'Bearer ' + tokenData?.accessToken,
    },
  }

  //
  // Body will be interpret as URL Params and attach to URL, or as FormData
  //

  let convertedParams = ''

  // Send as FormData, ...
  if (body && method !== 'GET') {
    if (body instanceof FormData) {
      delete options.headers['Content-Type']
      options.body = body
    } else {
      options.body = JSON.stringify(body)
    }

  // ... or as URL Params
  } else if (body?.params) {
    const { params } = body

    for (const key in clearEmptyParams(params)) {
      if (params !== '') convertedParams += '&'
      convertedParams += key + '=' + encodeURI(params[key])
    }

    convertedParams = convertedParams.slice(1)

    if (convertedParams) convertedParams = '?' + convertedParams
  }

  // Optional Signal to cancel previous request
  if (body?.signal) options.signal = body.signal

  return fetch(
    process.env.REACT_APP_API_URL + url + convertedParams,
    options as RequestInit
  )
    // .then((res: any) => {
    //   // Logout app if not authorized
    //   if (res.status === 401) {
    //     localStorage.removeItem('MW_TOKEN_CABINET')
    //     window.location.reload()
    //   }

    //   return res
    // })
    .then((res: Response) => res.json())
    .catch((err) => console.error(err))
}


// Remove empty params from URL to avoid things like param1=&param2=123
const clearEmptyParams = (params: { [k: string]: any }) => {
  const cleared: { [k: string]: any } = {}

  Object.keys(params).forEach((key: string) => {
    if (params[key] && key !== 'signal') {
      cleared[key] = params[key]
    }
  })

  return cleared
}


// GET
export const get = (url: string, params?: any) =>
  request('GET', url, {
    params,
    signal: params?.signal,
  })

// POST
export const post = (url: string, body?: any) =>
  request('POST', url, body)

// PUT
export const put = (url: string, body?: any) =>
  request('PUT', url, body)

// DELETE
export const del = (url: string, body?: any) =>
  request('DELETE', url, body)

// UPDATE
export const update = (url: string, body?: any) =>
  request('UPDATE', url, body)


export default request
