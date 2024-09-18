// src/App.js
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Approutes from './AppRoutes/Approutes';


function App() {
  return (
    <Router>
      <div className="flex flex-col h-screen">
        <Header
          customerName=" Kaushal"
          customerAddress=" 592 chh/57 ramnagar,Haryana "
          plantCapacity="10"
        />
        <div className="flex flex-grow">
          <Sidebar />
          <div className="flex-grow p-6 bg-gray-100 sticky">
            <Approutes /> 
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;



// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Header from './components/Header';
// import Sidebar from './components/Sidebar';
// import Dashboard from './components/Dasboard';
// import Monitor from './Monitor/Monitor';
// import Plants from './Plants/Plants';
// import Devices from './Devices/Devices';

// function App() {
//   return (
//     <Router>
//       <div className="flex flex-col h-screen">
//       <Header
//   customerName="Kaushal"
//   customerAddress="592 chh/57 ramnagar , Haryana"
//   plantCapacity="10"
// />


//         <div className="flex flex-grow sticky">
//           <Sidebar />
//           <div className="flex-grow p-6 bg-gray-100 sticky ">
//             <Routes>
//              //
//               <Route path="/" element={<Dashboard/>} />
//               <Route path="/monitor" element={<Monitor/>} />
//               <Route path="/plants" element={<Plants/>} />
//               <Route path="/devices" element={<Devices/>} />
//             </Routes>
//           </div>
//         </div>
//       </div>
//     </Router>
//   );
// }

// export default App;
