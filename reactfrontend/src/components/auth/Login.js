import React from 'react';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate()

  function refreshPage() {
    window.location.reload(false);
  }


  useEffect(() => {
    if (localStorage.getItem('user')) {
      navigate('/');
    }
  })

  const login = async (e) => {
    // let user = { email, password }
    // console.log(user)
    // e.preventdefault();
   await axios.post("http://127.0.0.1:8000/api/login", {email,password})
      .then((res) => {

        console.log(res)

        localStorage.setItem("user", res.data.id);
        if (res.data.role=="admin") {
        navigate("/");
        }else{
          navigate("/r");
        }

      })
  }

  return (
    <>
      <div className="px-4 py-5 px-md-2 text-center text-lg-start " style={{ backgroundColor: "hsl(0, 0%, 96%)" }}>
        <div className="container">
          <div className="row gx-lg-5 justify-content-center align-items-center">


            <div className="col-lg-6 mb-5 mb-lg-0 ">
              <div className="card">
                <div className="card-body py-1 px-md-5">
                  <h1>Login</h1>
                  
                    <div className="mb-3">
                      <label htmlFor="exampleInputEmail1" className="form-label">
                        Email address
                      </label>
                      <input onChange={(e) => setEmail(e.target.value)} type="email" name='email' placeholder="Email Address" className="form-control" required id="email" />

                    </div>
                    <div className="mb-3">
                      <label htmlFor="exampleInputPassword1" className="form-label">
                        Password
                      </label>
                      <input onChange={(e) => setPassword(e.target.value)} type="password" name='password' placeholder="Password" className="form-control" required id="password" />
                    </div>

                    <button onClick={login} className="btn btn-primary btn-block mb-4" >Login</button>
                 
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default Login;