import React from 'react'
import { useNavigate } from 'react-router-dom'
import { addCount, getBasket, getCount, removeFromBasket } from '../../../api/api'
import { AiOutlineMinusCircle, AiOutlinePlusCircle, AiFillDelete } from 'react-icons/ai'
import Loader from '../../../components/Loader'
import './Cart.scss'

const Cart = () => {
  const [data, setData] = React.useState(null)
  const accessToken = localStorage.getItem('accessToken')
  const [udpateUseEffect, setUpdateUseUffect] = React.useState('')
  const [total, setTotal] = React.useState(data && data?.reduce((prev, curr) => {
    return prev + curr?.total
  }, 0))
  const navigate = useNavigate()

  React.useEffect(() => {
    getBasket(accessToken)
    .then(r => {
      setData(r.data)
    })
    .then(() => setUpdateUseUffect('Got!'))

    setTotal(data && data?.reduce((prev, curr) => {
      return prev + curr?.total
    }, 0))
  }, [udpateUseEffect, setData])

  const increase = (id, amount) => {
    addCount({'product': `${id}`, 'amount': `${amount + 1}`}, accessToken)
    .then(() => setUpdateUseUffect('Inc!'))
	}

	const decrease = (id, amount) => {
		addCount({"product": `${id}`, "amount": `${amount - 1}`}, accessToken)
    .then(() => setUpdateUseUffect('Dec!'))
	}

  const handleDelete = (id) => {
    removeFromBasket(id, accessToken)
    .then(() => setUpdateUseUffect('deleted!'))
  }

  return ( 
    <div className="cart">
      <div className="total_block">
        <h2>Сумма заказа: {total} сом</h2>
      </div>
      {!data && <div className='dFlex'><Loader/></div>}
      <div className='cart_container'>
        { 
          data?.map((item1) => item1?.products_data.map((item) => (
            <div className='productCard' key={item.id}>
              <img onClick={() => navigate(`/products/product/${item.id}`)} src={`https://cryxxen.pythonanywhere.com/${item.image}` } alt="" />
              <div>
                <h1>{item.title}</h1>
                <div className='dFlexForCard'>
                  <p>{item.price * (item.amount)} сом</p>
                  <div className="counter">
                    <button 
                      onClick={() => {
                        decrease(item.id, item.amount)
                      }}
                      disabled={(item.amount) === 1}
                    >
                      <AiOutlineMinusCircle />
                    </button>
                    <span>{item.amount}</span>
                    <button
                      onClick={() => {
                        increase(item.id, item.amount)
                      }}
                    >
                      <AiOutlinePlusCircle/>
                    </button>
                  </div>
                  <div className="del">
                    <AiFillDelete onClick={() => handleDelete(item1.id)}/>
                  </div>
                </div>
              </div>
            </div>
          )))
        }
      </div>
    </div>
  )
}

export default Cart