import axios from 'axios';

// Create services for other components in this way. 

const getFarmerByIdService = (fid) => {
    console.log(`getFarmerByIdService`);
    return axios.get(`/farmer/get/${fid}`);
}
const getAllFarmerService = () => {
    console.log(`getAllFarmerService`);
    return axios.get(`/farmer/all`);
}

const addFarmerService = (farmer) => {
    console.log(`addFarmer`);
    return axios.post(`/farmer/add`, farmer);
}

const updateFarmerService = (farmer) => {
    console.log(`updateService`);
    return axios.put(`/farmer/update`, farmer);
}

const deleteFarmerService = (fid) => {
    console.log(`deleteFarmer`);
    return axios.delete(`/farmer/delete/${fid}`);
}

const companyBuysMilkService =(transaction)=>{
    console.log(`companybuysmilk`);
    return axios.post(`/payment/company/buys`, transaction);

}




export { getFarmerByIdService, getAllFarmerService, addFarmerService, updateFarmerService, deleteFarmerService,companyBuysMilkService};