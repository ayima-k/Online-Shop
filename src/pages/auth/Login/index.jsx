import React from 'react'
import { useForm } from 'react-hook-form'
import { BsCheck } from 'react-icons/bs'
import { getRegister, getToken, getUser } from '../../../api/api';
import { useNavigate } from 'react-router-dom'
import Loader from '../../../components/Loader';
import '../Register/Register.scss'

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { isValid, errors },
  } = useForm({
    mode: 'onBlur',
  });

  const navigate = useNavigate()

  const onSubmit = (data) => {
    getUser()
    .then(r => {
      localStorage.setItem('user', JSON.stringify(r.data.find(obj => obj.username === data.username)))
      getToken(data)
      .then(res => {
        if(res){
          localStorage.setItem('accessToken', res.data.access)
          localStorage.setItem('refreshToken', res.data.refresh)
          navigate('/')
        }
      })
    })
    .catch(e => window.alert(e))
  };
  return (
    <>
      <div className="container">
        <div className="card">
          <h2>Login</h2>
          <hr />
          <form onSubmit={handleSubmit(onSubmit)}>
            <div>
              <input
                type="username"
                placeholder="Username *"
                {...register('username', {
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
            <div>
              <input
                type="password"
                placeholder="Password *"
                {...register('password', {
                  required: 'Required field!',
                  minLength: {
                    value: 4,
                    message: 'Minimum 4 symbols!',
                  },
                })}
              />
              <p>
                {errors?.password && errors.password.message}
              </p>
            </div>
            {isValid && (
              <p style={{ color: 'green', textAlign: 'center' }}>
                Success <BsCheck />
              </p>
            )}
            <div className="btn">
              <button onClick={() => navigate('/auth/register')} className="go">
                Register
              </button>
              <button disabled={!isValid} type="submit" className="btn_primary">
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default Login