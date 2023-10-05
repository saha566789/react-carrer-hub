import { useContext, useState } from "react";
import { AuthContext } from "../../Hooks/AuthProvider";


const Register = () => {
    const { signUp } = useContext(AuthContext)
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState("")

    const handleRegister = (e) => {
        e.preventDefault()
        console.log(email,password)
        if (!/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(password)) {
            setError('Minimum eight characters, at least one letter and one number.')
        }
        else {
            setError('')
            if (email, password) {
                signUp(email, password)
                    .then((result) => console.log(result.user))
            }
        }
    }




    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col">
                <div className="text-center ">
                    <h1 className="text-5xl font-bold">Register now!</h1>

                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleRegister} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input
                                onChange={(e) => setEmail(e.target.value)} type="email" placeholder="email" className="input input-bordered" required />
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
                            <button type="submit" className="btn btn-primary">Register</button>
                        </div>
                        <p>{error}</p>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Google Login</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;