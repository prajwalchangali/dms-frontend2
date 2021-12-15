
import { getFarmerByIdService } from "../services/FarmService";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { getAllFarmerService,addFarmerService,updateFarmerService,deleteFarmerService } from "../services/FarmService";
// import { getEmpById, getAllEmps } from '../redux/EmpSlice';

import { getFarmerById,getAllFarmer } from "../../redux/FarmerSlice";

const FarmerData = () => {

    const [fid, setFid] = useState('');
    const dispatch = useDispatch();
    const farmerDataFromStore = useSelector((state) => state.farm.farmState);
    const farmerList = useSelector((state) => state.farm.farmList);

    const handleFarmer = (e) => {
        console.log('handleEmp');
        setFid(e.target.value);
    }

    const submitGetFarmerById = (evt) => {
        evt.preventDefault();
        console.log('submitGetFarmerById');
        getFarmerByIdService(fid)
            .then((response) => { dispatch(getFarmerById(response.data)) })
            .catch(() => {
                alert(`Employee with ${fid} not found.`);
            });
        console.log(Object.keys(farmerList));
        setFid('');
    }

    const submitGetAllFarmer = (evt) => {
        evt.preventDefault();
        console.log('submitGetAllFarmers');
        getAllFarmerService()
            .then((response) => {
                dispatch(getAllFarmer(response.data));
            })
            .catch(() => {
                alert(`Something is wrong!`);
            });
    }

    return (
        <div>
            <h1 className="display-4 text-primary mt-3 mb-3" >Farmer Component</h1>

            <div className="col-4 border border-light shadow p-3 mb-5 bg-white">
                <p>Find farmer by id</p>
                <form className="form form-group form-primary" onSubmit={submitGetFarmerById}>
                    <input className="form-control mt-3" type="number" id="fid" name="fid" value={fid} onChange={handleFarmer} placeholder="Enter farmer id to search" autoFocus required />
                    <input className="form-control mt-3 btn btn-primary" type="submit" value="Search farmer" />
                </form>
                <p>Farmer details: {farmerDataFromStore.farmerId} {farmerDataFromStore.firstName} {farmerDataFromStore.lastName} </p>
            </div>

            <div>
                <div className="col-6 border border-light shadow p-3 mb-5 bg-white">
                    <p>List of all Farmers</p>
                    <div>
                        <form className="form form-group form-primary">
                            <input className="mt-3 btn btn-primary btn-block" type="button" onClick={submitGetAllFarmer} value="Find All Farmers" />
                        </form>
                    </div >
                    <table className="table table-light table-striped ">
                        <thead>
                            <tr>
                                <th>Farmerid</th>
                                <th>Name</th>
                                <th>lastname</th>
                            </tr>
                        </thead>
                        <tbody>
                            {farmerList.map((farm, k) => {
                                return (
                                    <tr k={k}> <td>{farm.farmerId}</td> <td>{farm.firstName}</td><td>{farm.lastName}</td></tr>
                                )
                            })}
                        </tbody>
                    </table>
                </div>
            </div>

            <div className="col-4 border border-light shadow p-3 mb-5 bg-white">
                <p>Some other functionality</p>
            </div>



        </div>
    );
}
export default FarmerData;