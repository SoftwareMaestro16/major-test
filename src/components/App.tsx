import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Main from './Main';
import Games from './Games';
import Tasks from './Tasks';
import Invite from './Invite';
import Wall from './Wall';

function App() {
  
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Main />} />
                <Route path="/games" element={<Games />} /> 
                <Route path="/tasks" element={<Tasks />} />
                <Route path="/invite" element={<Invite />} />
                <Route path="/wall" element={<Wall />} />
            </Routes>
        </Router>
        
    );
}

export default App;


// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Main from './Main';
// import Games from './Games';
// import { useEffect, useState } from 'react';
// import WebAppSDK from '@twa-dev/sdk';

// declare global {
//   interface Window {
//       Telegram?: any;
//   }
// }

// function App() {
//   const [isTg, setIsTg] = useState<boolean>(false);  

//   useEffect(() => {
//     const isTgCheck = Boolean(window.Telegram?.WebApp?.initData);

//     if (isTgCheck) {
//         WebAppSDK.ready();
//         WebAppSDK.enableClosingConfirmation();
//         WebAppSDK.expand();
//         WebAppSDK.headerColor = "#210f24";
//         setIsTg(true);
//     }
//   }, []);
  
//     return (
//       <>
//       {!isTg ? (
//           <div className="denied-container">
//               Access denied. Please open this app in Telegram.
//           </div>
//         ) : (
//             <div className="app-container">
//                 <Router>
//                   <Routes>
//                       <Route path="/" element={<Main />} />
//                       <Route path="/games" element={<Games />} />
//                   </Routes>
//               </Router>
//             </div>
//         )}
//       </>
        
//     );
// }

// export default App;