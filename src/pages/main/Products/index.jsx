import React from 'react'
import { getCategories, getProducts } from '../../../api/api'
import Loader from '../../../components/Loader'
import Pagination from '../../../components/Pagination'
import ProductsCard from '../../../components/ProductsCard'
import Sort from '../../../components/Sort'
import './Products.scss'

const Products = () => {
  const [data, setData] = React.useState(null)
  const [newData, setNewData] = React.useState(data)
  const [valueSort, setValueSort] = React.useState({name: 'time create (DESC)', sortProperty: 'time_created'})
  const [value, setValue] = React.useState('')
  const inputRef = React.useRef(null)
  const size_of_page = 4
	const total_page = Math.ceil(data?.length / size_of_page)
  const [currentPage, setCurrentPage] = React.useState(1)
  const [categories, setCategories] = React.useState('')
  const [isCategory, setIsCategory] = React.useState(false)

  const onClickClear = () => {
    setValue('')
    inputRef.current?.focus()
  }
  const onChangeInput = (e) => {
    setValue(e.target.value)
  }

  React.useEffect(() => {
    getProducts()
    .then(r => {
      const newData = r.data.filter((obj) => isCategory !== false ? obj.category === isCategory && obj.title.toLowerCase().includes(value.toLowerCase()) ? true : false : true)
      if (valueSort.sortProperty === 'price') {
        setNewData(newData.sort((a,b) => {
          if (Math.floor(a.price) < Math.floor(b.price)) return 1
          if (Math.floor(a.price) > Math.floor(b.price)) return -1
          return 0
        }))
      } else if (valueSort.sortProperty === '-price') {
        setNewData(newData.sort((a,b) => {
          if (Math.floor(a.price) < Math.floor(b.price)) return -1
          if (Math.floor(a.price) > Math.floor(b.price)) return 1
          return 0
        }))
      } else if (valueSort.sortProperty === 'title') {
        setNewData(newData.sort((x,y) => {
          if (x.title < y.title) return 1
          if (x.title > y.title) return -1
          return 0;
        }))
      } else if (valueSort.sortProperty === '-title') {
        setNewData(newData.sort((x,y) => {
          if (x.title < y.title) return -1
          if (x.title > y.title) return 1
          return 0;
        }))
      } else if (valueSort.sortProperty === '-time_created') {
        setNewData(newData.reverse())
      }
      setNewData(newData.slice((currentPage - 1) * size_of_page,
			(currentPage - 1) * size_of_page + size_of_page))
      setData(newData)
    })
    getCategories()
    .then(r => setCategories(r.data))
  }, [data])

  return (
    <div className='products'>
      {!data && <div className='dFlex'><Loader/></div>}
      {
        newData && <div className='container1'>
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
          <div className='categories'>
            {
              categories && categories?.map((obj) => {
                return (
                  <div
                    key={obj.id} 
                    onClick={() => {
                      setIsCategory(obj.id)
                    }}
                    className={isCategory === obj.id ? 'categories_block active' : 'categories_block'}
                  >
                    {obj.title}
                  </div>
                )
              })
            }
          </div>
          {data?.length === 0 && <h2>По вашему запросу ничего не найдено😕.</h2>}
          <Sort valueSort={valueSort} setValueSort={setValueSort} />
        </div>
      }
      <div className="container2">
        {
          newData?.map((obj) => <ProductsCard key={obj.id} {...obj} />)
        }
      </div>
      <Pagination total_page={total_page} currentPage={currentPage} setCurrentPage={setCurrentPage} />
    </div>
  )
}

export default Products