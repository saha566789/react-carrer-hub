import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Hooks/AuthProvider";
import { useLocation } from "react-router-dom";


const Login = () => {

    const {googleSignIn,signIn} = useContext(AuthContext)
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState("")

 const location= useLocation()
 console.log(location)



    const handleGoogle = () =>{
        googleSignIn()
        .then(result =>{
            console.log(result.user)
        })
    }


    const handleLogin = (e) =>{
        e.preventDefault()
      if(email,password){
       signIn(email,password)
       .then(result =>{
        console.log(result.user)
       })
       .catch(error =>setError(error.message))
      }
    }

    
    return (
        <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col">
          <div className="text-center ">
            <h1 className="text-5xl font-bold">Login now!</h1>
           
          </div>
          <p>{error}</p>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleLogin} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                    onChange={(e) => setEmail(e.target.value)}
                type="email" placeholder="email" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input 
                    onChange={(e) => setPassword(e.target.value)}
                type="password" placeholder="password" className="input input-bordered" required />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button type="submit" className="btn btn-primary">Login</button>
              </div> 
              <div className="form-control mt-6">
                <button onClick={handleGoogle} className="btn btn-primary">Google Login</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
};

export default Login;