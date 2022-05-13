import React, { useEffect } from 'react';
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading';

const Signup = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();


    const [handlesinupwithgoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);

    const [
      signInWithEmailAndPassword,
      user,
      loading,
      error,
    ] = useSignInWithEmailAndPassword(auth);

    let signInError;
    const navigate = useNavigate();
    const location = useLocation();
    let from = location.state?.from?.pathname || "/";


    useEffect( () =>{
      if (user || gUser) {
          navigate(from, { replace: true });
      }
  }, [user, gUser, from, navigate])

  if (loading || gLoading) {
      return <Loading></Loading>
  }

  if(error || gError){
      signInError= <p className='text-red-500'><small>{error?.message || gError?.message }</small></p>
  }

    const onSubmit = data => {
      console.log(data)
      signInWithEmailAndPassword(data.email, data.Password)
    }
    return (
        <div className='flex h-screen justify-center items-center'>
        <div className="card w-96 bg-base-100 shadow-xl">
  <div className="card-body">
    <h2 className="card-title">Sign Up</h2>
    <form onSubmit={handleSubmit(onSubmit)}>

    <div class="form-control w-full max-w-xs">
  <label class="label">
    <span class="label-text">Email</span>

  
  </label>
  <input type="email" placeholder="email"
   class="input input-bordered w-full max-w-xs"
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
        <label class="label">
    {errors.email?.type === 'required' &&     <span class="label-text text-red-500">{error.email.message}</span>}
    {errors.email?.type === ' pattern' &&     <span class="label-text text-red-500">{error.email.message}</span>}
  
  </label>

</div>
    <div class="form-control w-full max-w-xs">
  <label class="label">
    <span class="label-text">Password</span>

  
  </label>
  <input type="Password" placeholder="Password"
   class="input input-bordered w-full max-w-xs"
   {...register("Password",
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
        <label class="label">
    {errors.Password?.type === 'required' &&     <span class="label-text text-red-500">{error.Password.message}</span>}
    {errors.Password?.type === ' minLength' &&     <span class="label-text text-red-500">{error.Password.message}</span>}
  
  </label>

</div>
{signInError}
      <input className='btn w-full max-w-xs text-white' type="submit" value="SIGNUP" />
    </form>
    <p><small>Already have an account? <Link className='text-primary' to="/Login">Please Login</Link></small></p>
    <div className="divider">OR</div>

    <button onClick={() => handlesinupwithgoogle()} className="btn btn-outline ">Continue with google</button>

  </div>
</div>
            
        </div>
    );
};

export default Signup;