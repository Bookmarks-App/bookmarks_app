import React from 'react';
// import { useSignUpHook } from './hooks';
import SharedButton from '../../components/shared/SharedButton';
import ReactDOM from 'react-dom';
import { useHistory } from 'react-router-dom';
import { useForm, SubmitHandler } from 'react-hook-form';
import { SIGNUP_ROUTE } from './../../utils/routesConstants';
import './styles.scss';
import logo from './../../assets/images/bookmarks-app-logo.png';

type Inputs = {
  'User Name': string;
  Password: string;
};

const Login = () => {
  // const { signUpRequestHandler } = useSignUpHook();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors }
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    alert(JSON.stringify(data));
  };

  const history = useHistory();

  return (
    <div className="float-container">
      <div className="image">
        <img src={logo} alt="Image Not Available"></img>
      </div>

      <div className="auth">
        <form onSubmit={handleSubmit(onSubmit)}>
          <label>User Name</label>
          <input {...register('User Name')} />
          <label>Password</label>
          <input {...register('Password', { required: true, maxLength: 10 })} />
          {errors.Password && <p>This field is required</p>}
          <input className="submitButton" type="submit" value="continue" />
        </form>
        <hr />
        <button className="signUp" onClick={() => history.push('/signup')}>
          SIGN UP
        </button>
      </div>
    </div>
  );
};

export default Login;

{
  /* 
<div>This is login route</div>
<SharedButton label="Sign In" onClick={signInRequestHandler} /> */
}
