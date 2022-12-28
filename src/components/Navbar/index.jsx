import React from 'react'
import { useNavigate } from 'react-router-dom'
import { SlBasket } from 'react-icons/sl'
import { MdFavoriteBorder, MdPersonOutline } from 'react-icons/md'
import { AiOutlineBars } from 'react-icons/ai'
import { RxCross1 } from 'react-icons/rx'
import './Navbar.scss'

const Navbar = () => {
  const [active, setActive] = React.useState(false)
  const [liActive, setLiActive] = React.useState(false)
  const navigate = useNavigate()

  return (
    <div className='navbar'>
      <h2 onClick={() => navigate('/')}>CRYXXEN</h2>
      <ul>
        <li 
          className='bars' 
          onClick={() => setActive(prev => !prev)}
        >
          {!active ? <AiOutlineBars/> : <RxCross1/>}
        </li>
        <ul 
          className={active ? 'active' : 'block'}
        >
          <li 
            className={liActive === 'products' ? 'liActive' : ''} 
            onClick={() => {
              navigate('/products')
              setLiActive('products')
            }}
          >
            Products
          </li>
          <li 
            className={liActive === 'about' ? 'liActive' : ''} 
            onClick={() => {
              navigate('/about')
              setLiActive('about')
            }}
          >
              About us
          </li>
          <li 
            className={liActive === 'profile' ? 'liActive' : ''} 
            onClick={() => {
              navigate('/profile')
              setLiActive('profile')
            }}
          >
            <MdPersonOutline/>
          </li>
          <li 
            className={liActive === 'favorites' ? 'liActive' : ''} 
            onClick={() => {
              navigate('/favorites')
              setLiActive('favorites')
            }}
          >
            <MdFavoriteBorder/>
          </li>
          <li 
            className={liActive === 'basket' ? 'liActive' : ''} 
            onClick={() => {
              navigate('/basket')
              setLiActive('basket')
            }}
          >
            <SlBasket/>
          </li>
        </ul>
      </ul>
    </div>
  )
}

export default Navbar