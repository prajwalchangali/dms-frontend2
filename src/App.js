

import Routes from "./Routes";
import FarmerData from "./components/controller/FarmerData";
const App = () => {
  return (
    <div className="bg-light">
      {/* <Routes /> */}
      {/* <farm /> */}
      <FarmerData/>

    </ div>
  );
}

export default App;





// const App = () => {
//   console.log('Parent component');
//   const num = 10;
//   const myData = { abc: 15, def: 25 }
//   const myArray = [10, 20, 30];

//   const [dataFromChild, setDataFromChild] = useState(4);

//   useEffect(() => {
//     console.log('parent useEffect');
//     setDataFromChild(5);
//   }, []);

//   const parentFun = (arg) => {
//     console.log('parentFun');
//     setDataFromChild(arg()); // callback
//     console.log(dataFromChild);
//   }


//   return (
//     <div>
//       <Header />
//       <div className="container">
//         <p className="display-4 text-primary" >CG React App</p>
//         <SpringBootData />
//         {/* <Hello /> */}
//         {/* <Login /> */}
//         {/* <Register /> */}
//         {/* <p>Child data in parent component: {dataFromChild} </p> */}
//         {/* This will not work */}
//         {/* <p>{myData} </p> */}
//         {/* This will work  */}
//         {/* <p>{myData.abc} </p>
//         <p>{myData.def} </p>
//         <p>{myArray}</p>
//         <p>{myArray[0]}</p>
//         <p>{num}</p>
//         <EmpData
//           // normalFun={aNormalFunction}
//           callParentFun={parentFun}
//           someData={myData}
//           numToPassToChild={num}
//           anotherData={myData}
//         /> */}
//       </div>
//     </div>
//   );
// }
// export default App;


// import { useState } from "react";
// import { useEffect, useState } from "react";
// import EmpData from "./components/EmpData";
// import Header from "./components/Header";
// import Hello from "./components/Hello";

// const App = () => {
//   console.log('Parent component');
//   const num = 10;
//   const myData = { abc: 15, def: 25 }
//   const myArray = [10, 20, 30];

//   const [dataFromChild, setDataFromChild] = useState(4);
//   const [firstName, setFirstName]=useState('');
//   const [lastName, setLastName]=useState('');

//   useEffect(() => {
//     console.log('parent useEffect');
//     setDataFromChild(5);
//   }, []);

//   useEffect(() => {
//     console.log('parent useEffect');
//     setFirstName('');
//   }, []);

//   useEffect(() => {
//     console.log('parent useEffect');
//     setLastName('');
//   }, []);

//   const parentFun = (arg) => {
//     console.log('parentFun');
//     setDataFromChild(arg()); // callback
//     console.log(dataFromChild);
//   }

//   const firstNameFun = (arg) => {
//     console.log('parentFunForFname');
//     setFirstName(arg()); // callback
//     console.log(firstName);
//   }
//   const lastNameFun = (arg) => {
//     console.log('parentFunForLname');
//     setLastName(arg()); // callback
//     console.log(lastName);
//   }


//   return (
//     <div>
//       <Header />
//       <div className="container">
//         <p className="display-4 text-primary" >CG React App</p>
//         <p>Child data in parent component: {dataFromChild} </p>
//         <Hello />
//         {/* <p>First name in parent component: {firstName} </p>
//         <p>Last name in parent component: {lastName} </p>
//         {/* This will not work */}
//         {/* <p>{myData} </p> */}
//         {/* This will work  */}
//         {/* <p>{myData.abc} </p>
//         <p>{myData.def} </p>
//         <p>{myArray}</p>
//         <p>{myArray[0]}</p>
//         <p>{num}</p>
//         <EmpData
//           // normalFun={aNormalFunction}
//           callParentFun={parentFun}
//           someData={myData}
//           numToPassToChild={num}
//           anotherData={myData}
//           callFirstName={firstNameFun}
//           callLastName={lastNameFun}
//         /> */} 
//       </div>
//     </div>
//   );
// }
// export default App; 



// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>Prajwal
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

