import { useState, useEffect } from "react"
import { Link, useNavigate } from "react-router-dom";




function Dashboard() {
    const navigate = useNavigate()
    useEffect(() => {
        if (localStorage.getItem('role')=='user') {
          navigate('/');
        }
      })
    const [data, setData] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            getData()
        };
        fetchData();
    }, []);
    async function getData() {
        const api = await fetch("http://127.0.0.1:8000/api/users");
        const allData = await api.json();
        setData(allData);
    }
    const accepteUser = (id) => {
        fetch(`http://127.0.0.1:8000/api/accept/${id}`)

        getData()
        alert("accept  successfully")
    }
    const rejectUser = (id) => {
        fetch(`http://127.0.0.1:8000/api/reject/${id}`)

        getData()
        alert("accept  successfully")
    }
    return (
        <div >
            <div className="container-fluid pt-4 px-4 bg-white">
                <div className="row g-4">
                    <div class="col-sm-12 col-xl-6">

                    </div>

                    <div className="col-12">
                        <div className="  h-100 p-4">
                            {/* <h6 className="mb-4">Responsive Table</h6> */}
                            <div className="table-responsive">
                                <table className="table-light col-12">
                                    <thead>
                                        <tr>
                                            <th scope="col">#</th>
                                            <th scope="col">First Name</th>
                                            <th scope="col">last Name </th>
                                            <th scope="col">Email</th>
                                            <th scope="col">Role</th>

                                            <th scope="col">Status</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {data.map((user) => {
                                            return (
                                                <tr key={user.id}>
                                                    <th scope="row">{user.id}</th>
                                                    <td>{user.firstname}</td>
                                                    <td>{user.lastname}</td>


                                                    <td>{user.email}</td>
                                                    <td>{user.role}</td>
                                                    <td>{user.status}</td>
                                                    {/* <Link  to={`/singlecategory/${user.id}`} className="btn btn-primary mt-auto align-self-start" >Edite</Link>*/}


                                                    

                                                    <>
                                                        <button
                                                            type="button"
                                                            className="btn btn-primary"
                                                            data-bs-toggle="modal"
                                                            data-bs-target="#exampleModal"
                                                        >
                                                            Car Problem
                                                        </button>
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
                                                                            The Car
                                                                        </h5>
                                                                        <button
                                                                            type="button"
                                                                            className="btn-close"
                                                                            data-bs-dismiss="modal"
                                                                            aria-label="Close"
                                                                        />
                                                                    </div>
                                                                    <div className="modal-body">
                                                                        <table className="table">
                                                                            <thead>
                                                                                <tr>
                                                                                    
                                                                                    <th scope="col">Car Model</th>
                                                                                    <th scope="col">Car Number</th>
                                                                                    <th scope="col">Country of Manufacture</th>
                                                                                    <th scope="col">Problem Description</th>
                                                                                </tr>
                                                                            </thead>
                                                                            <tbody>
                                                                                <tr>
                                                                                   
                                                                                    <td>{user.carModel}</td>
                                                                                    <td>{user.carNumber}</td>
                                                                                    <td>{user.counrty}</td>
                                                                                    <td>{user.problem}</td>
                                                                                  
                                                                                </tr>
                                                                                
                                                                            </tbody>
                                                                        </table>

                                                                    </div>
                                                                    <div className="modal-footer">
                                                                        <button
                                                                            type="button"
                                                                            className="btn btn-secondary"
                                                                            data-bs-dismiss="modal"
                                                                        >
                                                                            Close
                                                                        </button>
                                                                        <Link className="btn btn-danger " onClick={() => rejectUser(user.id)} to=''> Reject</Link>
                                                                        <Link className="btn btn-success " onClick={() => accepteUser(user.id)} to=''> Accept</Link>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </>




                                                    {/* <td> <Link to={'http://127.0.0.1:8000/api/deletecategory/'+category.id} className="btn btn-primary mt-auto align-self-start">Delete</Link></td>          */}
                                                </tr>
                                            );
                                        })}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>





                </div>
            </div>
        </div>
    )
}

export default Dashboard;