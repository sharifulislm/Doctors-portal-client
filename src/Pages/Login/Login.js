import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';


const Login = () => {

    const [handlesinupwithgoogle, user, loading, error] = useSignInWithGoogle(auth);

    console.log(user,error);

    return (
        <div className='flex h-screen justify-center items-center'>
        <div className="card w-96 bg-base-100 shadow-xl">
  <div className="card-body">
    <h2 className="card-title">Login</h2>
    <div className="divider">OR</div>

    <button onClick={() => handlesinupwithgoogle()} className="btn btn-active">Continue with google</button>

  </div>
</div>
            
        </div>
    );
};

export default Login;