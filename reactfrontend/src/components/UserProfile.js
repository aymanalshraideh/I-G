import React, { useState } from "react";
import axios from 'axios';
import { useEffect } from "react";
const UserProfile = () => {

    const [data, setData] = useState({});
    const [req, setreq] = useState({});
    const[carModel,setCarModel]= useState('');
    const[carNumber,setCarNumber]= useState('');
    const[country,setCountry]= useState('');
    const[problem,setProblem]= useState('');



    const id = localStorage.getItem('user');
    const fetchProfile = async () => {
        const response = await fetch('http://127.0.0.1:8000/api/user/' + id)
        const myProfile = await response.json();

        setData(myProfile);
        // console.log(myProfile)

    }
    const requeststatus = async () => {
        const response = await fetch('http://127.0.0.1:8000/api/req/' + id)
        const req = await response.json();

        setreq(req);
        console.log(req)

    }



    useEffect(() => {
        fetchProfile();
        requeststatus();
    }
        , []);


const user_id=localStorage.getItem('user');
 const request=async (e)=>{
    await axios.post("http://127.0.0.1:8000/api/request", {user_id,carModel,carNumber,country,problem})
    .then((res) => {

      console.log(res)

     

    })
 }





    return (
        <>
            <section className="bg-light">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 mb-4 mb-sm-5">
                            <div className="card card-style1 border-0">
                                <div className="card-body p-1-9 p-sm-2-3 p-md-6 p-lg-7">
                                    <div className="row align-items-center">
                                        <div className="col-lg-6 mb-4 mb-lg-0">
                                            <img
                                                src="https://bootdey.com/img/Content/avatar/avatar7.png"
                                                alt="..."
                                                width="200px"
                                            />
                                        </div>
                                        <div className="col-lg-6 px-xl-10">
                                            <div className="bg-secondary  py-1-9 px-1-9 px-sm-6 mb-1-9 rounded">


                                            </div>
                                            <ul className="list-unstyled mb-1-9">
                                                <li className="mb-2 mb-xl-3 display-28">
                                                    <span className="display-26 text-secondary me-2 font-weight-600">
                                                        Name:
                                                    </span>{" "}
                                                    {data && data.firstname} {data && data.lastname}
                                                </li>
                                                <li className="mb-2 mb-xl-3 display-28">
                                                    <span className="display-26 text-secondary me-2 font-weight-600">
                                                        Email:
                                                    </span>{" "}
                                                    {data && data.email}
                                                </li>


                                            </ul>
                                            <>
                                                {/* Button trigger modal */}


{(req.status)?<>
<h1>status:{req.status}</h1>
</>:
 <button
                                                    type="button"
                                                    className="btn btn-primary"
                                                    data-bs-toggle="modal"
                                                    data-bs-target="#exampleModal"
                                                >
                                                    Maintenance Request
                                                </button>
}

                                               
                                                {/* Modal */}
                                                <div
                                                    className="modal fade"
                                                    id="exampleModal"
                                                    tabIndex={-1}
                                                    aria-labelledby="exampleModalLabel"
                                                    aria-hidden="true"
                                                >
                                                    <div className="modal-dialog">
                                                        <div className="modal-content">
                                                            <div className="modal-header">
                                                                <h5 className="modal-title" id="exampleModalLabel">
                                                                Maintenance Request
                                                                </h5>
                                                                <button
                                                                    type="button"
                                                                    className="btn-close"
                                                                    data-bs-dismiss="modal"
                                                                    aria-label="Close"
                                                                />
                                                            </div>
                                                            <div className="modal-body">

                                                                
                                                                    <div className="mb-3">
                                                                        <label  className="form-label">
                                                                            Car Model
                                                                        </label>
                                                                        <input
                                                                            type="text"
                                                                            className="form-control"
                                                                            onChange={(e) => setCarModel(e.target.value)}
                                                                        />

                                                                    </div>
                                                                    <div className="mb-3">
                                                                        <label htmlFor="exampleInputEmail1" className="form-label">
                                                                            Car Number
                                                                        </label>
                                                                        <input
                                                                            type="text"
                                                                            className="form-control"
                                                                            onChange={(e) => setCarNumber(e.target.value)}
                                                                        />

                                                                    </div>
                                                                    <div className="mb-3">
                                                                        <label htmlFor="exampleInputPassword1" className="form-label">
                                                                            Country of Manufacture
                                                                        </label>
                                                                        <select className="form-select" onChange={(e) => setCountry(e.target.value)} aria-label="Default select example">
                                                                            <option value={''} >Open this select menu</option>
                                                                            <option value={'Germany'}>Germany</option>
                                                                            <option value={'Korya'}>Korya</option>
                                                                            <option value={'USA'}>USA</option>
                                                                            <option value={'Other'}>Other</option>
                                                                        </select>

                                                                    </div>
                                                                    <div className="mb-3">
                                                                        <label htmlFor="exampleInputEmail1" className="form-label">
                                                                            Explain the problem
                                                                        </label>

                                                                        <textarea
                                                                            className="form-control"
                                                                            placeholder="Explain the problem here"
                                                                            id="floatingTextarea"
                                                                            defaultValue={""}
                                                                            onChange={(e) => setProblem(e.target.value)}
                                                                        />



                                                                    </div>
                                                                 
                                                               

                                                            </div>
                                                            <div className="modal-footer">
                                                                <button
                                                                    type="button"
                                                                    className="btn btn-secondary"
                                                                    data-bs-dismiss="modal"
                                                                >
                                                                    Close
                                                                </button>
                                                                <button onClick={request} className="btn btn-primary">
                                                                    Send The Request
                                                                </button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-12 mb-4 mb-sm-5">

                        </div>





                    </div>
                </div>
            </section>

        </>
    )
}

export default UserProfile;
