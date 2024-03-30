// import React, { useState } from 'react'
// import './Projectnav.css'
// import { NavLink } from 'react-router-dom'
// const Projectnav = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const toggleMenu = () => {
//     setIsMenuOpen(!isMenuOpen);
//   };
//   return (
//     <>
//     <div className="projectnavbox">
//       <div className={`nav-elements ${isMenuOpen ? 'active' : ''}`}>
//         <ul>
//           <li>
//             <NavLink className="compl" to="/completed" onClick={toggleMenu}><h1>Completed</h1></NavLink>
//           </li>
//           <li>
//             <NavLink className="compl" to="/ongoing" onClick={toggleMenu}><h1>Ongoing</h1></NavLink>
//           </li>
//         </ul>
//       </div>
// </div>
//     </>
//   )
// }

// export default Projectnav