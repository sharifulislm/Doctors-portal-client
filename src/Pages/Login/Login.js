import React, { useEffect, useState, } from 'react';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading';
import useToken from '../../Hooks/useToken';


const Login = () => {
  const { register, formState: { errors }, handleSubmit} = useForm();


    const [handlesinupwithgoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);


    const [
      signInWithEmailAndPassword,
      user,
      loading,
      error,
    ] = useSignInWithEmailAndPassword(auth);

    const [sendPasswordResetEmail, sending, errorrest] = useSendPasswordResetEmail(
      auth
    );
    console.log(sending);
    const [email,setemail]=useState('');
    const [token] = useToken(user || gUser);


    let signInError;
    const navigate = useNavigate();
    const location = useLocation();
    let from = location.state?.from?.pathname || "/";


    useEffect( () =>{
      if (token) {
          navigate(from, { replace: true });
      }
  }, [token,from, navigate])

  if (loading || gLoading) {
      return <Loading></Loading>
  }

  if(error || gError ||errorrest){
      signInError= <p className='text-red-500'><small>{error?.message || gError?.message ||errorrest?.message }</small></p>
  }


    const onSubmit = data => {
      console.log(data)
      setemail(data.email)
      signInWithEmailAndPassword(data.email, data.password)                                  
    }

    return (
        <div className='flex h-screen justify-center items-center'>
        <div className="card w-96 bg-base-100 shadow-xl">
  <div className="card-body">
    <h2 className="card-title">Login</h2>
    <form onSubmit={handleSubmit(onSubmit)}>

    <div className="form-control w-full max-w-xs">
  <label className="label">
    <span className="label-text">Email</span>

  
  </label>
  <input type="email" placeholder="email" 
   className="input input-bordered w-full max-w-xs"
   {...register("email",
    {
       required: {
         value: true,
         message: 'email is required'
       },
    pattern: {
      value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
      message: 'error message' 
    }
  })}


   />
        <label className="label">
        {errors.email?.type === 'required' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
        {errors.email?.type === 'pattern' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
  
  </label>

</div>
    <div className="form-control w-full max-w-xs">
  <label className="label">
    <span className="label-text">Password</span>

  
  </label>
  <input type="Password" placeholder="Password"
   className="input input-bordered w-full max-w-xs"
   {...register("password",
    {
       required: {
         value: true,
         message: 'email is required'
       },
    minLength: {
      value: 6,
      message: 'Must be 6 characters or longer' 
    }
  })}


   />
        <label className="label">
        {errors.password?.type === 'required' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
         {errors.password?.type === 'minLength' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
  
  </label>

</div>
<button
        onClick={async () => {
          await sendPasswordResetEmail(email);
          alert('Sent email');
        }}
      >
        Reset password
      </button>

{signInError}
      <input className='btn w-full max-w-xs text-white' type="submit" value="Login" />
    </form>
    <p><small>New to Doctors Portal <Link className='text-primary' to="/signup">Create New Account</Link></small></p>
    <div className="divider">OR</div>

    <button onClick={() => handlesinupwithgoogle()} className="btn btn-outline ">Continue with google</button>

  </div>
</div>
            
        </div>
    );
};

export default Login;