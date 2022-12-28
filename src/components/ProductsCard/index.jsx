import React from 'react'
import { useNavigate } from 'react-router-dom'
import { addToBasket, getBasket } from '../../api/api'
import './ProductsCard.scss'

const ProductsCard = ({id, title, category, image, price, is_active}) => {
  const [isInBasket, setIsInBasket] = React.useState(false)
  const accessToken = localStorage.getItem('accessToken')

  const navigate = useNavigate()

  const handleAddToBasket = () => {
    setIsInBasket(true)
    addToBasket({products: [id], is_active: is_active}, accessToken)
  }

  React.useEffect(() => {
    getBasket(accessToken)
    .then(r => r.data?.map(item => item.products_data.map(item => item.id === id ? setIsInBasket(true) : '')))
  }, [isInBasket])

  return (
    <div className='productCard'>
      <img onClick={() => navigate(`product/${id}`)} src={image} alt="" />
      <div>
        <h1>{title}</h1>
        <div className='dFlexForCard'>
          <p>{Math.floor(price)} сом</p>
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
                onClick={handleAddToBasket}
              > 
                Added
              </button>
            )
          }
        </div>
      </div>
    </div>
  )
}

export default ProductsCard