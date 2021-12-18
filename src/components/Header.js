import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";

const Header = () => {

    let [loginStatus, setLoginStatus] = useState(false);
    let [user, setUser] = useState(true);

    useEffect(() => {
        setLoginStatus(sessionStorage.getItem('isUserLoggedIn'));
        setUser(sessionStorage.getItem('user'))
    }, []);

    if (loginStatus ) {
        if (user === 'FARMER') {
            return (
                <header class="header sticky-top">
                    <nav class="navbar navbar-fixed-top navbar-expand-lg navbar-dark bg-dark">
                        <div class="container">
                            <Link className="navbar-brand" to="/">
                                <img src="https://www.capgemini.com/wp-content/themes/capgemini-komposite/assets/images/logo.svg"
                                    height="24px" alt="Capgemini" />
                            </Link>
                            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive">
                                <span class="navbar-toggler-icon"></span>
                            </button>
                            <div class="collapse navbar-collapse" id="navbarResponsive">
                                <ul class="navbar-nav ml-auto">
                                    {/* <li className="nav-item">
                                        <Link className="nav-link" to="/home" >Home</Link>
                                    </li> */}
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/addFarmer" >Register</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/updateFarmer" >Update</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/viewFarmer" >Details</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/allCompanies" >Companies</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/logout" >Logout</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                </header>
            );
        } else if (user === 'ADMIN') {
            return (
                <header class="header sticky-top">
                    <h1> </h1>
                    <nav class="navbar navbar-fixed-top navbar-expand-lg navbar-dark bg-dark">
                        <div class="container">
                            <Link className="navbar-brand" to="/">
                                <img src="https://www.capgemini.com/wp-content/themes/capgemini-komposite/assets/images/logo.svg"
                                    height="24px" alt="Capgemini" />
                            </Link>
                            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive">
                                <span class="navbar-toggler-icon"></span>
                            </button>
                            <div class="collapse navbar-collapse" id="navbarResponsive">
                                <ul class="navbar-nav ml-auto">
                                    <li className="nav-item">
                                        <Link className="nav-link" to="//home" >Home</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/addFarmer" >AddFarmer</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/deleteFarmer" >RemoveFarmer</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/viewAllFarmer" >ViewAllFarmers</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/viewFarmer" >viewFarmer</Link>
                                    </li>
                                           {/* space for dealers */}
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/logout" >Logout</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>

                </header>
            );
        } else if (user === 'DEALER') {
            return (
                <header class="header sticky-top">
                    <h1> This is dealer section</h1>
                    <nav class="navbar navbar-fixed-top navbar-expand-lg navbar-dark bg-dark">
                        <div class="container">
                            <Link className="navbar-brand" to="/">
                                <img src="https://www.capgemini.com/wp-content/themes/capgemini-komposite/assets/images/logo.svg"
                                    height="24px" alt="Capgemini" />
                            </Link>
                            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive">
                                <span class="navbar-toggler-icon"></span>
                            </button>
                            <div class="collapse navbar-collapse" id="navbarResponsive">
                                <ul class="navbar-nav ml-auto">
                                    <li className="nav-item">
                                        <Link className="nav-link" to="//home" >Home</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/addDealer" >Register</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/viewAllCompanies" >ViewAllCompanies</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/viewCompany" >ViewCompany</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/addCustomer" >AddCustomer</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/viewCustomer" >viewCustomer</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/viewAllCustomer" >viewAllCustomers</Link>
                                    </li>
                                           {/* space for dealers */}
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/logout" >Logout</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>


                </header>
            );
        }else if (user === 'CUSTOMER') {
            return (
                <header class="header sticky-top">
                    <h1> This is dealer section</h1>
                    <nav class="navbar navbar-fixed-top navbar-expand-lg navbar-dark bg-dark">
                        <div class="container">
                            <Link className="navbar-brand" to="/">
                                <img src="https://www.capgemini.com/wp-content/themes/capgemini-komposite/assets/images/logo.svg"
                                    height="24px" alt="Capgemini" />
                            </Link>
                            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive">
                                <span class="navbar-toggler-icon"></span>
                            </button>
                            <div class="collapse navbar-collapse" id="navbarResponsive">
                                <ul class="navbar-nav ml-auto">
                                    <li className="nav-item">
                                        <Link className="nav-link" to="//home" >Home</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/addCustomer" >Register</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/updateCustomer" >updateDetails</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/viewDealer" >ViewDealer</Link>
                                    </li>

                                    <li className="nav-item">
                                        <Link className="nav-link" to="/viewCustomer" >viewCustomer</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/logout" >Logout</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>


                </header>
            );
        }
    } else {
        return (
            <header class="header sticky-top">
                <nav class="navbar navbar-fixed-top navbar-expand-lg navbar-dark bg-dark">
                    <div class="container">
                        <Link className="navbar-brand" to="/">
                            <img src="https://www.capgemini.com/wp-content/themes/capgemini-komposite/assets/images/logo.svg"
                                height="24px" alt="Capgemini" />
                        </Link>
                        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarResponsive">
                            <ul class="navbar-nav ml-auto">
                                <li className="nav-item">
                                    <Link className="nav-link" to="/register" >Register</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/login" >Login</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>
        );
    }

}

export default Header;




// import { Link } from "react-router-dom";
// import React, { useEffect, useState } from 'react';

// const Header = () => {

//     let [loginStatus, setLoginStatus] = useState(false);

//     useEffect(() => {
//         setLoginStatus(sessionStorage.getItem('isUserLoggedIn'));
//     }, []);

//     if (loginStatus) {
//         return (
//             <header class="header sticky-top">
//                 <nav class="navbar navbar-fixed-top navbar-expand-lg navbar-dark bg-dark">
//                     <div class="container">
//                         <Link className="navbar-brand" to="/">
//                             <img src="https://www.capgemini.com/wp-content/themes/capgemini-komposite/assets/images/logo.svg"
//                                 height="24px" alt="Capgemini" />
//                         </Link>
//                         <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive">
//                             <span class="navbar-toggler-icon"></span>
//                         </button>
//                         <div class="collapse navbar-collapse" id="navbarResponsive">
//                             <ul class="navbar-nav ml-auto">
//                                 <li className="nav-item">
//                                     <Link className="nav-link" to="/hello" >Hello</Link>
//                                 </li>
//                                 <li className="nav-item">
//                                     <Link className="nav-link" to="/FarmerData" >Farmer</Link>
//                                 </li>
//                                 <li className="nav-item">
//                                     <Link className="nav-link" to="/spring" >Spring</Link>
//                                 </li>
//                                 <li className="nav-item">
//                                     <Link className="nav-link" to="/logout" >Logout</Link>
//                                 </li>
//                             </ul>
//                         </div>
//                     </div>
//                 </nav>
//             </header>
//         );
//     }
//     else {
//         return (
//             <header class="header sticky-top">
//                 <nav class="navbar navbar-fixed-top navbar-expand-lg navbar-dark bg-dark">
//                     <div class="container">
//                         <Link className="navbar-brand" to="/">
//                             <img src="https://www.capgemini.com/wp-content/themes/capgemini-komposite/assets/images/logo.svg"
//                                 height="24px" alt="Capgemini" />
//                         </Link>
//                         <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive">
//                             <span class="navbar-toggler-icon"></span>
//                         </button>
//                         <div class="collapse navbar-collapse" id="navbarResponsive">
//                             <ul class="navbar-nav ml-auto">

//                                 <li className="nav-item">
//                                     <Link className="nav-link" to="/register" >Register</Link>
//                                 </li>
//                                 <li className="nav-item">
//                                     <Link className="nav-link" to="/login" >Login</Link>
//                                 </li>
//                             </ul>
//                         </div>
//                     </div>
//                 </nav>
//             </header>
//         );
//     }

// }

// export default Header;



