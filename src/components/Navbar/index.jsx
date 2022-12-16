import React from 'react'
import { useNavigate } from 'react-router-dom'
import { SlBasket } from 'react-icons/sl'
import { MdFavoriteBorder, MdPersonOutline } from 'react-icons/md'
import { AiOutlineBars } from 'react-icons/ai'
import { RxCross1 } from 'react-icons/rx'
import './Navbar.scss'

const Navbar = () => {
  const [active, setActive] = React.useState(false)
  const navigate = useNavigate()

  return (
    <div className='navbar'>
      <h2 onClick={() => navigate('/')}>CRYXXEN</h2>
      <ul>
        <li className='bars' onClick={() => setActive(prev => !prev)}>{!active ? <AiOutlineBars/> : <RxCross1/>}</li>
        <ul className={active ? 'active' : 'block'}>
          <li onClick={() => navigate('/products')}>Products</li>
          <li onClick={() => navigate('/about')}>About us</li>
          <li onClick={() => navigate('/profile')}><MdPersonOutline/></li>
          <li onClick={() => navigate('/favorits')}><MdFavoriteBorder/></li>
          <li onClick={() => navigate('/basket')}><SlBasket/></li>
        </ul>
      </ul>
    </div>
  )
}

export default Navbar