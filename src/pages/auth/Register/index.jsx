import React from 'react'
import { useForm } from 'react-hook-form'
import { BsCheck } from 'react-icons/bs'
import Loader from '../../../components/Loader';
import './Register.scss'
import { getCategories, getRegister, getToken } from '../../../api/api';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { isValid, errors },
  } = useForm({
    mode: 'onBlur',
  });

  const navigate = useNavigate()

  const onSubmit = async (data) => {
    await getRegister(data)
    .then(r => {
      localStorage.setItem('user', JSON.stringify(r.data))
      getToken({username: data.username, password: data.password})
      .then(r => {
        if (r) {
          localStorage.setItem('accessToken', r.data.access)
          localStorage.setItem('refreshToken', r.data.refresh)
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
          <h2>Registration</h2>
          <hr />
          <form onSubmit={handleSubmit(onSubmit)}>
            <div>
              <input
                type="text"
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
                {errors?.username && errors.username.message}
              </p>
            </div>
            <div>
              <input
                type="email"
                placeholder="Email *"
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
            <div>
              <input
                type="text"
                placeholder="About *"
                {...register('about', {
                  required: 'Required field!',
                })}
              />
              <p>
                {errors?.about && errors.about.message}
              </p>
            </div>
            <div>
              <input
                type="tel"
                placeholder="Phone number *"
                defaultValue='+996'
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
            <div>
              <input
                type="date"
                placeholder="Birth date *"
                {...register('birth_date', {
                  required: 'Required field!',
                  minLength: {
                    value: 4,
                    message: 'Minimum 4 symbols!',
                  },
                })}
              />
              <p>
                {errors?.birth_date && errors.birth_date.message}
              </p>
            </div>
            {/* <div>
              <input
                type="file"
                placeholder="Photo url *"
                {...register('avatarka', {
                  required: 'Required field!'
                })}
              />
              <p>
                {errors?.avatarka && errors.avatarka.message}
              </p>
            </div> */}
            {isValid && (
              <p style={{ color: 'green', textAlign: 'center' }}>
                Success <BsCheck />
              </p>
            )}
            <div className="btn">
              <button onClick={() => navigate('/auth/login')} className="go">
                Login
              </button>
              <button disabled={!isValid} type="submit" className="btn_primary">
                Register
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default Register