import axios from 'axios'

const headers = (accessToken) => {
  return {
    headers: {
      'Authorization': `Bearer ${accessToken}`
    }
  }
}

export const getRegister = (data) => axios.post('users/user/', data)
export const getToken = (data) => axios.post('token/', data)
export const getUser = () => axios.get(`users/user/`)
export const getProducts = () => axios.get('products/product/')
export const getSingleProduct = (id) => axios.get(`products/product/${id}/`)

export const getFavorites = (accessToken) => axios.get('favorites/', headers(accessToken))
export const getSingleFavorite = (id, accessToken) => axios.get(`favorites/${id}/`, headers(accessToken))
export const addToFavorites = (data, accessToken) => axios.post(`favorites/`, data, headers(accessToken))
export const removeFromFavorites = (id, accessToken) => axios.delete(`favorites/${id}/`, headers(accessToken))

export const getBasket = (accessToken) => axios.get('baskets/', headers(accessToken))
export const addToBasket = (data, accessToken) => axios.post(`baskets/`, data, headers(accessToken))
export const getSingleBasket = (id, accessToken) => axios.get(`baskets/${id}/`, headers(accessToken))
export const addCount = (data, accessToken) => axios.post(`basket_detail/`, data, headers(accessToken))
export const removeFromBasket = (id, accessToken) => axios.delete(`baskets/${id}/`, headers(accessToken))

export const getCategories = () => axios.get('categories/category/')