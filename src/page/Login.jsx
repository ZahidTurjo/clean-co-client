import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProviders";
import useAxios from "../hooks/useAxios";







const Login = () => {

    const authInfo = useContext(AuthContext)
    const { loginUser} = authInfo
    const Navigate = useNavigate()
    const axios=useAxios()

    const handleLogin = (e) => {
        e.preventDefault()
        e.preventDefault()
        const email = e.target.email.value;
        const password = e.target.password.value;
      
        console.log(email, password);
       
        
        // login user
        loginUser(email, password)
        .then(result => {
            const loggedInUser = result.user;
            console.log(loggedInUser);
            const user = {email:loggedInUser.email };

            // get access token
            axios.post('/auth/accessToken', user)
                .then(res => {
                    console.log(res.data)
                    Navigate('/')
                  
                })

        })
        .catch(error => console.log(error));

    }
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Login now!</h1>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleLogin} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                        </div>
                    </form>
                    <p>new here ? go to <Link to='/register' className="text-blue-400 font-bold my-7 text-center">Register</Link></p>
                </div>
            </div>
        </div>
    );
};

export default Login;