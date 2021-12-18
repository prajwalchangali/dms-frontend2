import axios from 'axios';

// Create services for other components in this way. 

const getCustomerByIdService = (customerId) => {
    console.log(`getCustomerByIdService`);
    return axios.get(`/customer/view/${customerId}`);
}
const getAllCustomerService= () => {
    console.log(`getAllCustomersService`);
    return axios.get(`/customer/all`);
}

const AddCustomerService = (customer) => {
    console.log(`AddCustomerService`);
    return axios.post(`/customer/add`, customer);
}

const updateCustomerService= (customer) => {
    console.log(`UpdateCustomerIdService`);
    return axios.post(`/customer/update`, customer);
}

const deleteCustomerByIdService = (customerId) => {
    console.log(`deleteCustomerByIdService`);
    return axios.post(`/customer/delete/${customerId}`);
}



// export { getCustomerByIdService, getAllCustomerService };
export { getCustomerByIdService, getAllCustomerService ,AddCustomerService,updateCustomerService,deleteCustomerByIdService};




