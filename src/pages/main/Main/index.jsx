import React from 'react'
import { useNavigate } from 'react-router-dom'
import './Main.scss'

const Main = () => {
  const navigate = useNavigate()

  return (
    <div className='main'>
      <div className='bg_img'>
        <h1>
          ONLINE
          <span>SHOPPING</span>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Non alias earum in architecto explicabo ut fugit atque, consectetur voluptatibus ipsum vel quos recusandae animi exercitationem? Iusto tempore sint iure molestias!
          </p>
        </h1>
        <button onClick={() => navigate('/products')}>Learn more</button>
      </div>
      <h2 className='logo'>Why we are?</h2>
      <div className="main_cards">
        <div className='cards'>
          <div className='cards_header'>
            <img src="https://russian7.ru/wp-content/uploads/2017/03/fact_zapah_xleba_01.jpg" alt="" />
          </div>
          <div className='logo'>
            <h3>Freshly backed</h3>
          </div>
          <div className='text'>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab autem corporis dicta, laborum molestias perspiciatis vel. Inventore ipsa minus nisi pariatur repellat. A deserunt id inventore iste magni nihil possimus.
            </p>
          </div>
        </div>
        <div className='cards'>
          <div className='cards_header'>
            <img src="https://img.freepik.com/free-photo/sliced-brown-bread-on-wooden-plate-high-quality-photo_114579-18315.jpg?w=2000" alt="" />
          </div>
          <div className='logo'>
            <h3>High quality</h3>
          </div>
          <div className='text'>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab autem corporis dicta, laborum molestias perspiciatis vel. Inventore ipsa minus nisi pariatur repellat. A deserunt id inventore iste magni nihil possimus.
            </p>
          </div>
        </div>
        <div className='cards'>
          <div className='cards_header'>
            <img src="https://static.mk.ru/upload/entities/2016/09/07/articles/detailPicture/9b/1c/49/9f9646592_8499010.jpg" alt="" />
          </div>
          <div className='logo'>
            <h3>At the best price</h3>
          </div>
          <div className='text'>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab autem corporis dicta, laborum molestias perspiciatis vel. Inventore ipsa minus nisi pariatur repellat. A deserunt id inventore iste magni nihil possimus.
            </p>
          </div>
        </div>
      </div>
      <div className="contact_us">
        <div>
          <h2 className='logo'>Contact us</h2>
          <h2 className='logo2'>Get in touch and let us know how we can help you.</h2>
        </div>
        <div className='div'>
          <input type="text" placeholder='Name...' />
          <input type="email" placeholder='Email...' />
          <button onClick={() => window.alert('Sent!')}>Send</button>
        </div>
      </div>
    </div>
  )
}

export default Main