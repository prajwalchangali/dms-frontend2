

import Routes from "./Routes";
// import FarmerData from "./components/controller/FarmerData";
import FarmerById from "./components/Farmercontroller/FarmerById";
import UpdateFarmer from "./components/Farmercontroller/UpdateFarmer";
import ViewAllFarmers from "./components/Farmercontroller/ViewAllFarmers";
import AddFarmer from "./components/Farmercontroller/AddFarmer";
import DeleteFarmer from "./components/Farmercontroller/DeleteFarmer";
import FarmerData from "./components/Farmercontroller/FarmerData";
import AddCompany from "./components/compcontroller/AddCompany";
import AddDealer from "./components/DealerController/AddDealer";
import AddCustomer from "./components/CustomerController/AddCustomer";
import DeleteCustomer from "./components/CustomerController/DeleteCustomer";
import DeleteDealer from "./components/DealerController/DeleteDealer";
import GetAllCustomer from "./components/CustomerController/GetAllCustomers";
import GetCustomerById from "./components/CustomerController/GetCustomerById";
import UpdateCustomer from "./components/CustomerController/UpdateCustomer";
import UpdateDealer from "./components/DealerController/UpdateDealer" ;
import GetAllDealer from "./components/DealerController/GetAllDealer";
import GetDealerById from "./components/DealerController/GetDealerById";

const App = () => {
  return (
    <div className="bg-light">
      {/* <Routes /> */}
      {/* <farm /> */}
      {/* <FarmerData/> */}
      {/* <FarmerById /> */}
      {/* <AddFarmer/> */}
      {/* <UpdateFarmer/> */}
      {/* <ViewAllFarmers /> */}
      {/* <DeleteFarmer /> */}
      {/* <AddCompany /> */}
      {/* <AddDealer /> */}
      {/* <AddCustomer /> */}
      {/* <DeleteCustomer /> */}
      {/* <DeleteDealer /> */}
      {/* <GetAllCustomer /> */}
      {/* <GetCustomerById /> */}
      {/* <UpdateCustomer /> */}
      <UpdateDealer /> 
      <GetAllDealer /> 
      <GetDealerById /> 

    </ div>
  );
}

export default App;







