import React from 'react'
import { BsFillTelephoneFill } from 'react-icons/bs'
import { MdAlternateEmail, MdDateRange } from 'react-icons/md'
import { BiUserPin } from 'react-icons/bi'
import { FaUserAlt } from 'react-icons/fa' 
import { AiFillEdit } from 'react-icons/ai'
import { BsCheckLg } from 'react-icons/bs'
import { VscSignOut } from 'react-icons/vsc'
import { useForm } from 'react-hook-form'
import './Profile.scss'

const Profile = () => {
  const {
    register,
    handleSubmit,
    formState: { isValid, errors },
  } = useForm({
    mode: 'onBlur',
  });

  const [user, setUser] = React.useState(JSON.parse(localStorage.getItem('user')))
  const [dis, setDis] = React.useState(true)

  const onSubmit = (data) => {
    setUser(localStorage.setItem('user', JSON.stringify({...data})))
    setDis(true)
  }

  return (
    <div className='profile_block'>
      <form className="profile_card" onSubmit={handleSubmit(onSubmit)} >
        <img src={user?.avatarka ? user.avatarka : 'https://cdn.icon-icons.com/icons2/1378/PNG/512/avatardefault_92824.png'} alt="" />
        <div className='profile_inputs'>
          <span><FaUserAlt/></span>          
          <input
            type="text" 
            disabled={dis} 
            defaultValue={user?.username}
            {...register('username', {
              required: 'Required field!',
              minLength: {
                value: 4,
                message: 'Minimum 4 symbols!',
              },
            })}
          /> 
          <p>
            {errors?.username && errors.username.message}
          </p>
        </div>
        <div className='profile_inputs'>
          <span><BiUserPin/></span>
          <input 
            type="text" 
            disabled={dis} 
            defaultValue={user?.about}
            {...register('about', {
              required: 'Required field!',
              minLength: {
                value: 4,
                message: 'Minimum 4 symbols!',
              },
            })}
          />
          <p>
            {errors?.about && errors.about.message}
          </p>
        </div>
        <div className='profile_inputs'>
          <span><BsFillTelephoneFill/></span>
          <input 
            type="text" 
            disabled={dis} 
            defaultValue={user?.phone_number}
            {...register('phone_number', {
              required: 'Required field!',
              minLength: {
                value: 4,
                message: 'Minimum 4 symbols!',
              },
            })}
          />
          <p>
            {errors?.phone_number && errors.phone_number.message}
          </p>
        </div>
        <div className='profile_inputs'>
          <span><MdAlternateEmail/></span>
          <input 
            type="email" 
            disabled={dis} 
            defaultValue={user?.email} 
            {...register('email', {
              required: 'Required field!',
              minLength: {
                value: 4,
                message: 'Minimum 4 symbols!',
              },
            })}
          />
          <p>
            {errors?.email && errors.email.message}
          </p>
        </div>
        <div className='profile_inputs'>
          <span><MdDateRange/></span>
          <input 
            type="date" 
            disabled={dis} 
            defaultValue={user?.birth_date} 
            {...register('date', {
              required: 'Required field!',
              minLength: {
                value: 4,
                message: 'Minimum 4 symbols!',
              },
            })}
          />
          <p>
            {errors?.date && errors.date.message}
          </p>
        </div>
        <div className="btn_profile">
          <button className='edit_btn' onClick={() =>setDis(false)} >Edit <AiFillEdit/></button>
          <button className='save_btn' type='submit' disabled={dis}>Save <BsCheckLg/></button>
          <button 
            onClick={() => {
              localStorage.clear()
              window.location.reload()
            }}
            className='del_btn'
          >
            Leave <VscSignOut/>
          </button>
        </div>
      </form>
    </div>
  )
}

export default Profile