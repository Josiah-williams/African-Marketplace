// import React from "react";
// import { NavLink, useHistory } from "react-router-dom";

// export default function Navbar({ appState, user, logout }) {
//     const history = useHistory();
//     if (!appState) {
//         return (
//           <section className="navbar-container">
//             <nav>
//               <div>
//                 <img src={logo} className="logo" />
//               </div>
    
//               <ul className="right-navbar">
//                 <li>
//                   <NavLink className="nav--link" to="/login" replace>
//                     Log in
//                   </NavLink>
//                 </li>
//                 <li>
//                   <NavLink className="nav--link" exact to="/" replace>
//                     Register
//                   </NavLink>
//                 </li>
//               </ul>
//             </nav>
//           </section>
//         );
//         return