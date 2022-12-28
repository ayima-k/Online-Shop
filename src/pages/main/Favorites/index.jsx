import React from 'react'
import { AiFillDelete } from 'react-icons/ai'
import { useNavigate } from 'react-router-dom'
import { getCategories, getFavorites, getProducts, removeFromFavorites } from '../../../api/api'
import Loader from '../../../components/Loader'
import Pagination from '../../../components/Pagination'
import './Favorites.scss'

const Favorites = () => {
  const accessToken = localStorage.getItem('accessToken')

  const base = []
  const [data, setData] = React.useState(null)
  const [favorite, setFavorite] = React.useState(null)
  const [update, setUpdate] = React.useState('')
  
  const inputRef = React.useRef(null)
  const [value, setValue] = React.useState('')
  
  const navigate = useNavigate()

  const onChangeInput = (e) => {
    setValue(e.target.value)
  }
  const onClickClear = () => {
    setValue('')
    inputRef.current?.focus()
  }
  const handleDelete = (id) => {
    const favoriteId = favorite?.find(item => item.product == id && item.id)
    removeFromFavorites(favoriteId?.id, accessToken)
    .then(r => setUpdate('deleted!'))
  }

  React.useEffect(() => {
    getFavorites(accessToken)
    .then(res => {
      setFavorite(res.data)
      !res.data && setData(false)
      res.data?.map(item => {
        getProducts()
        .then((r) => {
          r.data.map(value => value.id === item.product ? (value) : '')
            .filter(item => typeof(item) === 'object')
            .map(item => base.push(item))
          const newBase = base?.map(
            item => value !== '' ? item.title.toLowerCase().includes(value.toLowerCase()) ? item
            : null : item
          )
          setData(
            newBase?.length === favorite?.length 
            ? newBase
            : false
          )
          setUpdate('got!')
        })
      })
    })
  }, [update, value, inputRef])

  return (
    <div className='favorites'>
      <div className="favorites_container">
        {data?.length === 0 && <h2>Empty😕.</h2>}
        <div className='root'>
          <svg
            className='icon'
            height="48" 
            viewBox="0 0 48 48" 
            width="48" 
            xmlns="http://www.w3.org/2000/svg">
            <path d="M31 28h-1.59l-.55-.55C30.82 25.18 32 22.23 32 19c0-7.18-5.82-13-13-13S6 11.82 6 19s5.82 13 13 13c3.23 0 6.18-1.18 8.45-3.13l.55.55V31l10 9.98L40.98 38 31 28zm-12 0c-4.97 0-9-4.03-9-9s4.03-9 9-9 9 4.03 9 9-4.03 9-9 9z"/>
            <path d="M0 0h48v48H0z" fill="none"/>
          </svg>
          <input 
            ref={inputRef}
            value={value}
            onChange={onChangeInput} 
            className='input'
            placeholder='Search product ...' 
          />
          {value && <svg onClick={onClickClear} className='clearIcon' viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z"/></svg>}
        </div>
        <div className="favorites_dBlock">
          {
            data?.length >= 1 ? data?.map(item => item !== null ? ( 
              <div className='productCard' key={item?.id}>
                <img onClick={() => navigate(`/products/product/${item?.id}`)} src={item?.image} alt="" />
                <div>
                  <h1>{item?.title}</h1>
                  <div className='dFlexForCard'>
                    <p>{Math.floor(item?.price)} сом</p>
                    <div className="del">
                      <AiFillDelete onClick={() => handleDelete(item?.id)}/>
                    </div>
                  </div>
                </div>
              </div>
            ) : '') : <div className='dFlex'><Loader/></div>
          }
        </div>
      </div>
    </div>
  )
}

export default Favorites