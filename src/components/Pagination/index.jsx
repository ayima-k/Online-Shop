import React from 'react'
import { AiOutlineArrowRight , AiOutlineArrowLeft } from 'react-icons/ai';
import './Pagination.scss'

const Pagination = ({total_page, currentPage, setCurrentPage}) => {

  const handleNext = () => {
		if(currentPage !== total_page){
			setCurrentPage(currentPage + 1)
		}
	}
	const handlePrev = () => {
		if(currentPage !== 1){
			setCurrentPage(currentPage - 1)
		}
	}

  return total_page > 1 && (
    <div className='pagination'>
      <button
				className='btn'
				onClick={handlePrev}
        disabled={currentPage === 1}
			>
				<AiOutlineArrowLeft/>
			</button>
			<ul className='list'>
				{
					Array.from({length: total_page}).map((item , i) => (
						<li 
              className={currentPage === i + 1 ? 'li active' : 'li'}
							onClick={() => setCurrentPage(i + 1)}
							key={i}
						>
							{i + 1}
						</li>
					))
				}
			</ul>
			<button 
				className='btn'
				onClick={handleNext}
        disabled={currentPage === total_page}
			>
				<AiOutlineArrowRight/>
			</button>
    </div>
  )
}

export default Pagination