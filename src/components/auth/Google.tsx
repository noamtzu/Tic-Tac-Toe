// import React, { useState } from 'react';
// import { GoogleLogin } from '@react-oauth/google';
//
// export function GoogleAuth() {
//     const [isChecked, setIsChecked] = useState(false);
//
//     const handleCheckboxChange = () => {
//         setIsChecked(!isChecked);
//     };
//
//     const handleGoogleLoginSuccess = (response) => {
//         console.log('Google login successful:', response);
//         // Handle successful login (e.g., set user state, redirect)
//     };
//
//     const handleGoogleLoginFailure = (error) => {
//         console.error('Google login failed:', error);
//         // Handle login failure (e.g., display error message)
//     };
//
//     return (
//         <div className="auth-container">
//             <h2>Sign In</h2>
//             <GoogleLogin
//                 clientId=""
//                 onSuccess={handleGoogleLoginSuccess}
//                 onFailure={handleGoogleLoginFailure}
//                 buttonText="Sign in with Google"
//             />
//             <div className="identification-checkbox">
//                 <label>
//                     <input
//                         type="checkbox"
//                         checked={isChecked}
//                         onChange={handleCheckboxChange}
//                     />
//                     I don't want to identify
//                 </label>
//             </div>
//         </div>
//     );
// }