import { getFarmerByIdService } from "../services/FarmService";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { getAllFarmerService,addFarmerService,updateFarmerService,deleteFarmerService } from "../services/FarmService";
// import { getEmpById, getAllEmps } from '../redux/EmpSlice';
import axios from "axios";

import { getFarmerById,getAllFarmer,deleteFarmerByID } from "../../redux/FarmerSlice";
import Farmer from "../models/Farmer";


const AddFarmer = () => {


    const [newFarmerObj, setNewFarmerObj] = useState(new Farmer());
    const [displayFarmerObj, setDisplayFarmerObj] = useState(new Farmer());
    const handleAddFarmer = (e) => {
        console.log(e.target.value);
        setNewFarmerObj({
            ...newFarmerObj,
            [e.target.name]: e.target.value,
        });
    }

    const submitAddFarmer = (evt) => {
        evt.preventDefault();
        console.log('addFarmers');
        axios.post(`/farmer/add`, newFarmerObj)
            .then((response) => {
                setDisplayFarmerObj(response.data);
                alert('Farmer added successfully.');
                setNewFarmerObj({ firstName:'', lastName:'',mobileNumber:'',email:'',password:''})
            
            })
            .catch(() => {
                alert("Farmer could not be added.");
            });
    }

    return (

        <div className="col-4 border border-light shadow p-3 mb-5 bg-white">
            
        <p>Add New Farmer</p>
        <div id="addNewFarmerDiv">
            <input
                type="text"
                id="firstName"
                name="firstName"
                value={newFarmerObj.firstName}
                onChange={handleAddFarmer}
                placeholder="Enter First Name" />
                <br/>
                <br/>
            <input
                type="text"
                id="lastName"
                name="lastName"
                value={newFarmerObj.lastName}
                onChange={handleAddFarmer}
                placeholder="Enter Last Name" />
                <br/>
                <br/>
            <input
                type="text"
                id="mobileNumber"
                name="mobileNumber"
                value={newFarmerObj.mobileNumber}
                onChange={handleAddFarmer}
                placeholder="Enter Mobile Number" />
                <br/>
                <br/>
             <input
                type="text"
                id="email"
                name="email"
                value={newFarmerObj.email}
                onChange={handleAddFarmer}
                placeholder="Enter Email" />   
                <br/>
                <br/>
             <input
                type="text"
                id="password"
                name="password"
                value={newFarmerObj.password}
                onChange={handleAddFarmer}
                placeholder="Enter password" />  
                <br/>
                <br/>
            <input
                type="submit"
                value="Add Farmer"
                onClick={submitAddFarmer}
            />
        </div>
        <p>New Farmer Data: {displayFarmerObj.farmerId} {displayFarmerObj.firstName} {displayFarmerObj.lastName}{displayFarmerObj.mobileNumber}{displayFarmerObj.email}</p>
    </div>

    );



}

export default AddFarmer;