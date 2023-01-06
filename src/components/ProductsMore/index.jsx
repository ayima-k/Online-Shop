import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai'
import { getSingleProduct, addToFavorites, getProducts, getFavorites, addToBasket, getBasket } from '../../api/api'
import Loader from '../Loader'
import { BiArrowBack } from 'react-icons/bi'
import ProductsCard from '../ProductsCard'
import './ProductsMore.scss'

const ProductsMore = () => {
  const { id } = useParams()
  const [data, setData] = React.useState(null)
  const [base, setBase] = React.useState(null)
  const [isFavorite, setIsFavorite] = React.useState(false)
  const [isCategory, setIsCategory] = React.useState(false)
  const [thisCategory, setThisCategory] = React.useState(null)
  const [isInBasket, setIsInBasket] = React.useState(false)
  const accessToken = localStorage.getItem('accessToken')
  const [updateUseEffect ,setUpdateUseEffect] = React.useState('')

  const navigate = useNavigate()

  React.useEffect(() => {
    getSingleProduct(id, accessToken)
    .then(r => setData(r.data))

    getProducts()
    .then(r => {
      setBase(r.data)
    })

    getFavorites(accessToken)
    .then(res => res.data.map(item => item.product === parseInt(id) ? setIsFavorite(true) : ''))

    getBasket(accessToken)
    .then(r => r.data?.map(item => item.products_data.map(item => item.id === parseInt(id) ? setIsInBasket(true) : '')))

    if (base?.map((obj) => data?.category === obj.category)) {
      setIsCategory(true)
      setThisCategory(base?.filter((obj) => obj.category === data?.category))
    } else {
      setIsCategory(false)
    }

  }, [setIsInBasket, setIsFavorite])

  const handleAddToFavorite = () => {
    setIsFavorite(true)
    addToFavorites({product: parseInt(id), is_active: data?.is_active}, accessToken)
  }

  const handleAddToBasket = () => {
    setIsInBasket(true)
    addToBasket({products: [JSON.stringify(id)], is_active: data?.is_active}, accessToken)
  }

  return data ? (
    <div className='products_more'>
      <div className="go_back" onClick={() => navigate(-1)}>
        <BiArrowBack/>
      </div>
      <div className='products_more_card'>
        <img src={data?.image} alt="" />
        <div className='jcCenter'>
          <h2>{data?.title}</h2>
          <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique natus suscipit debitis eligendi, maxime odio. Nihil, possimus. Aliquam quo quas doloribus recusandae vero consequuntur? Harum alias exercitationem mollitia repellendus hic. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque autem nobis excepturi consectetur, dolores earum nemo animi sit? Quibusdam sed similique hic unde iusto ratione rem eveniet maiores dolorum eos?</h3>
          <p>{data?.price} сом</p>
          <div>
            {
              !isInBasket ? (
                <button 
                  className='btn-cart' 
                  disabled={!accessToken}
                  onClick={handleAddToBasket}
                > 
                  Add to cart
                </button>
              ) : (
                <button 
                  className='btn-cart in' 
                  disabled
                > 
                  Added
                </button>
              )
            }
            {
              !isFavorite ? (
                <button className='favorits_icon' onClick={handleAddToFavorite}  disabled={!accessToken}>
                  <AiOutlineHeart/>
                </button>
              ) : (
                <button 
                  className="favorits_icon" 
                  disabled
                >
                  <AiFillHeart/>
                </button>
              )}
          </div>
        </div>
      </div>
      {
        isCategory && (
          <div className="with_this_category">
            <h1>Also searched with this product</h1>
            <div className="products_with_this_category">
              {
                thisCategory?.map((obj) => obj.id !== parseInt(id) && <ProductsCard key={obj.id} {...obj}/>)
              }
            </div>
          </div>
        )
      }
    </div>
  ) : <div className='dFlex'><Loader/></div>
}

export default ProductsMore