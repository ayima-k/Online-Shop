import React from 'react'
import { useForm } from 'react-hook-form'
import { BsCheck } from 'react-icons/bs'
import Loader from '../../../components/Loader';
import './Register.scss'
import { getRegister } from '../../../api/api';
import { AuthContext } from '../../../Providers/AuthProvider';

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { isValid, errors },
  } = useForm({
    mode: 'onBlur',
  });

  const { users, loading } = React.useContext(AuthContext)

  const onSubmit = (data) => {
    getRegister(data)
    .then(r => console.log(r.data))
  };

  return (
    <>
      {loading ? <Loader /> : ''}
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
                })}
              />
              <p>
                {errors?.date && errors.date.message}
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
                {errors?.title && errors.title.message}
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
                {errors?.content && errors.content.message}
              </p>
            </div>
            {isValid && (
              <p style={{ color: 'green', textAlign: 'center' }}>
                Success <BsCheck />
              </p>
            )}
            <div className="btn">
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