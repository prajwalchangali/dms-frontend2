import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from "axios";
import AppUser from './models/AppUser';

const Login = () => {

    // const history = useHistory();

    const [appUser, setAppUser] = useState(new AppUser());
    const [credentials, setCredentials] = useState('');

    const handleAppUser = (event) => {
        console.log(event.target.name);
        console.log(event.target.value);
        setAppUser({
            ...appUser,
            [event.target.name]: event.target.value
        });
    };

    const submitAppUser = (event) => {
        //

        axios.post(`/login`, appUser)
            .then((response) => {
                console.log(response.data);
                sessionStorage.setItem('user',response.data.userType);
                sessionStorage.setItem('isUserLoggedIn', true);
                alert('Success');
                window.location.assign('/home');
                // history.push('/home');
            }).catch((error) => {
                sessionStorage.setItem('isUserLoggedIn', false);
                sessionStorage.clear();
                console.log(error.response);
                setCredentials("Enter proper credentials.");
            });
        event.preventDefault();
    }
    return (
        <div className="container">
            <div className="col-4 mt-3" >
                <h1 className="display-4 text-primary">Login</h1>
                <form className="form form-group form-dark " onSubmit={submitAppUser}>
                    <div>
                        <input
                            type="text"
                            className="form-control"
                            name="userName"
                            id="userName"
                            className="form-control mb-3"
                            placeholder="Enter username"
                            value={appUser.userName}
                            onChange={handleAppUser}
                            autoFocus
                            required
                        />
                        <input
                            type="password"
                            className="form-control"
                            name="password"
                            id="password"
                            className="form-control mb-3"
                            placeholder="Enter password"
                            value={appUser.password}
                            onChange={handleAppUser}
                            required
                        />
                        <div class="form-group">
                            <select class="form-control mb-3" name="role" id="role" onChange={handleAppUser}>
                            <option value="ADMIN" >ADMIN</option>
                                <option value="FARMER">FARMER</option>
                                <option value="DEALER">DEALER</option>
                                <option value="CUSTOMER">CUSTOMER</option>
                            </select>
                        </div>
                        <input
                            type="submit"
                            id="submit"
                            name="submit"
                            className="form-control btn btn-primary mb-3"
                            value="Login"
                            onClick={submitAppUser}
                        />
                    </div>
                </form>
                <p className="text-danger">{credentials}</p>
                <Link to="/register" className="btn btn-primary col-12">Not yet registered? Register</Link>
            </div>
        </div >
    )
}
export default Login;

// import React from "react";
// import { Link,/*useHistory */} from "react-router-dom";
// import { useState,/*useEffect */} from "react";
// import axios from "axios";
// import UserLogin from "./models/UserLogin";

// const Login = () => {

//     // const history = useHistory();

//     const [userLogin, setUserLogin] = useState(new UserLogin());
//     const [credentials, setCredentials] = useState('');

//     const handleUserLogin = (event) => {
//         console.log(event.target.name);
//         console.log(event.target.value);
//         setUserLogin({
//             ...userLogin,
//             [event.target.name]: event.target.value
//         });
//     };

//     const submitUserLogin = (event) => {

//         axios.post(`/login`, userLogin)
//             .then((response) => {
//                 console.log(response.data);
//                 sessionStorage.setItem('user',response.data.userType);
//                 sessionStorage.setItem('isUserLoggedIn', true);
//                 alert('Success');
//                 window.location.assign('/home');
//                 // history.push('/home');
//             }).catch((error) => {
//                 sessionStorage.setItem('isUserLoggedIn', false);
//                 sessionStorage.clear();
//                 console.log(error.response);
//                 setCredentials("Enter proper credentials.");
//             });
//         event.preventDefault();
//     }
//     return (
//         <div className="container">
//             <div className="col-4 mt-3" >
//                 <h1 className="display-4 text-primary">Login</h1>
//                 <form className="form form-group form-dark " onSubmit={submitUserLogin}>
//                     <div>
//                         <input
//                             type="text"
//                             className="form-control"
//                             name="userName"
//                             id="userName"
//                             className="form-control mb-3"
//                             placeholder="Enter username"
//                             value={userLogin.userName}
//                             onChange={handleUserLogin}
//                             autoFocus
//                             required
//                         />
//                         <input
//                             type="password"
//                             className="form-control"
//                             name="password"
//                             id="password"
//                             className="form-control mb-3"
//                             placeholder="Enter password"
//                             value={userLogin.password}
//                             onChange={handleUserLogin}
//                             required
//                         />
//                         <div class="form-group">
//                             <select type={userLogin.userType} class="form-control mb-3" name="userType" id="userType" onChange={handleUserLogin}>
//                             <option value="User">Select a role</option>
//                                 <option value="ADMIN" >ADMIN</option>
//                                 <option value="FARMER">FARMER</option>
//                                 <option value="DEALER">DEALER</option>
//                                 <option value="CUSTOMER">CUSTOMER</option>
//                             </select>
//                         </div>
//                         <input
//                             type="submit"
//                             id="submit"
//                             name="submit"
//                             className="form-control btn btn-primary mb-3"
//                             value="Login"
//                             onClick={submitUserLogin}
//                         />
//                     </div>
//                 </form>
//                 <p className="text-danger">{credentials}</p>
//                 <Link to="/register" className="btn btn-primary col-12">Don't Have Account? Register</Link>
//             </div>
//         </div >
//     )
// }
// export default Login;