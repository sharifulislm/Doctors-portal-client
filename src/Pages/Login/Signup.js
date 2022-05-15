import React, { useEffect } from 'react';
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle, useUpdateProfile } from 'react-firebase-hooks/auth';
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import UseToken from '../../Hooks/UseToken';

import Loading from '../Shared/Loading';

const Signup = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();


    const [handlesinupwithgoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
    const [updateProfile, updating, Uperror] = useUpdateProfile(auth);



    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth);

      const [token] = UseToken(user || gUser);

    let signInError;
    const navigate = useNavigate();
    const location = useLocation();
    let from = location.state?.from?.pathname || "/";


    useEffect( () =>{
      if (token) {
          navigate(from, { replace: true });
      }
  }, [token,from, navigate])

  if (loading || gLoading ||updating) {
      return <Loading></Loading>
  }

  if(error || gError ||Uperror){
      signInError= <p className='text-red-500'><small>{error?.message || gError?.message }</small></p>
      console.log(error);
  }

    const onSubmit = async data => {

     await createUserWithEmailAndPassword(data.email, data.password)
      await updateProfile({ displayName:data.name });
      console.log('profile is update');
      navigate('/appointment');
    }
    return (
        <div className='flex h-screen justify-center items-center'>
        <div className="card w-96 bg-base-100 shadow-xl">
  <div className="card-body">
    <h2 className="card-title">Sign Up</h2>
    <form onSubmit={handleSubmit(onSubmit)}>

    <div className="form-control w-full max-w-xs">
  <label className="label">
    <span className="label-text">Name</span>

  
  </label>
  <input type="text" placeholder="name"
   className="input input-bordered w-full max-w-xs"
   {...register("name",
    {
       required: {
         value: true,
         message: 'Name is required'
       },
   
  })}


   />
        <label className="label">
        {errors.name?.type === 'required' && <span className="label-text-alt text-red-500">{errors.name.message}</span>}

  
  </label>

</div>
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