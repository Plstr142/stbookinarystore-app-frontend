// import React, { useState, useEffect } from 'react';

// const UserNameInput = () => {
//   const [userName, setUserName] = useState('');

//   const onInputChange = (event) => {
//     setUserName(event.target.value);
//   }


//   return (
//     <div>
//         <label htmlFor="username">Username:</label>
//         <input className='border border-black' type="text" value={userName} onChange={onInputChange} />
//     </div>
//   );
// };

// export default UserNameInput;




// ******************************************************************************


// import React, { useState, useEffect } from 'react';

// const UserNameInput = () => {
//   const [userName, setUserName] = useState('');

//   useEffect(() => {
//     console.log('Component re-rendered. Current userName:', userName);
//   }, [userName]);

//   const handleChange = (e) => setUserName(e.target.value);

//   return (
//     <div>
//       <input
//         type="text"
//         value={userName}
//         onChange={handleChange}
//         placeholder="Enter your username"
//       />
//       <p>Username: {userName}</p>
//     </div>
//   );
// };

// export default UserNameInput;



