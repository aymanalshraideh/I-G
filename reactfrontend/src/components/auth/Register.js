import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
function Register() {
  const [data, setFormValue] = useState({ firstname: '', lastname: '', email: '', password: '', role: '', status: '' });

 
  const navigate = useNavigate();
  window.axios = require("axios");
  const Submit = (event) => {
    event.preventDefault();
    const api = {
      firstname: data.firstname,
      lastname: data.lastname,
      email: data.email,
      password: data.password,
      role: data.role,
      status: 0

    };
    console.log(api);
    axios.post("http://127.0.0.1:8000/api/register", api);
    navigate("/login");
  };

  // get data

  const valueHandler = (event) => {
    setFormValue({ ...data, [event.target.name]: event.target.value });
  };




  return (
    <>

      <div className="px-4 py-5 px-md-2 text-center text-lg-start " style={{ backgroundColor: "hsl(0, 0%, 96%)" }}>
        <div className="container">
          <div className="row gx-lg-5 justify-content-center align-items-center">


            <div className="col-lg-6 mb-5 mb-lg-0 ">
              <div className="card">
                <div className="card-body py-1 px-md-5">
                  <h1>Register</h1>

                  <form className="mt-5" onSubmit={Submit}  >
                    {/* <!-- 2 column grid layout with text inputs for the first and last names --> */}
                    <div className="row">
                      <div className="col-md-6 mb-4">
                        <div className="form-outline">
                          <label>First Name</label>
                          <input type="text" id="form3Example1" className="form-control" name='firstname' placeholder='First name' onChange={valueHandler} />
                          {/* <label className="form-label" for="form3Example1">First name</label> */}
                        </div>
                      </div>
                      <div className="col-md-6 mb-4">
                        <div className="form-outline">
                          <label>Last Name</label>
                          <input type="text" id="form3Example2" className="form-control" name="lastname" placeholder='Last name' onChange={valueHandler} />
                          {/* <label className="form-label" for="form3Example2">Last name</label> */}
                        </div>
                      </div>
                    </div>

                    {/* <!-- Email input --> */}
                    <div className="form-outline mb-4">
                      <label>Email</label>
                      <input type="email" id="form3Example3" className="form-control" name="email" placeholder='Email address' onChange={valueHandler} />
                      {/* <label className="form-label" for="form3Example3">Email address</label> */}
                    </div>

                    {/* <!-- Password input --> */}
                    <div className="form-outline mb-4">
                      <label>Password</label>
                      <input type="password" id="form3Example4" className="form-control" name="password" placeholder='Password' onChange={valueHandler} />
                      {/* <label className="form-label" for="form3Example4">Password</label> */}
                    </div>
                    {/* <!-- select type of user --> */}
                    <div className="form-outline mb-4">
                      <label >Sign up as:</label>
                      <select className="form-select" name='role' onChange={valueHandler} aria-label="Default select example">
                        <option value={''} selected>Open this select menu</option>
                        <option value={'admin'}>Admin</option>
                        <option value={'user'}>User</option>

                      </select>
                    </div>
                    {/* <!-- status --> */}

                    {/* <!-- Submit button --> */}
                    <button type="submit" className="btn btn-primary btn-block mb-4">
                      Register
                    </button>

                    {/* <!-- Register buttons --> */}
                    <div className="text-center">

                      {/* <button type="submit" className="btn btn-primary btn-block mb-4" >
                        Login
                      </button> */}
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* </section> */}
    </>
  )
}

export default Register