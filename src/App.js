// import React, { useState } from "react";



// function App() {


//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");


//   const requestData = {
//     email: email,
//     password: password
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();






//   };

//   const myHeaders = new Headers();

//   myHeaders.append("Content-Type", "application/json");
//   myHeaders.append("Accept", "application/json");
//   // myHeaders.append("Cookie", "XSRF-TOKEN=eyJpdiI6ImRZc0xySXhkT3Z4VmpMdnhtb2VXK3c9PSIsInZhbHVlIjoiZ3RDejA3Mkkzc1JPNDBJckZrTDlmM2JYSDJzYWVXaU1ITEdTT1RWT0VDblJvVTIzR2laOWhENEhibmYvSWtqL0VyYUVwdTRLS1RmcHh2WlphMzRSTEYwWkl2V29Ba1gvTGNLOTlpZDltWERoVVdKUEp2NXlLS0xOcnlxRWN2bzMiLCJtYWMiOiI4NzBiY2I1NjRhZDU5YjI5OGU2ZmFkZmE4ZTBiZWQ5ZWZmNDFjN2VlYzJlOTE4ZmYyYzdmM2Q2YzNkOThlMTIzIiwidGFnIjoiIn0%3D; laravel_session=eyJpdiI6ImJ3cjJZdUdyRXFHVVpxSEt2Y3FiVGc9PSIsInZhbHVlIjoiRXJWZmdlMGtqNVF6aVZDalRsN21GM2ZWeVkvcUVxM3pod1hDalNJbzllZmNQNnJnZUwxS0xQbFdzSmhVL1Z6cSs3V3Z1enFPZTVMWDU3bGlyR3Fmc21OTENMVVNqWFlJMVh3RXFkQWJ4Z0ZEMUlXaDBENlhTNHFJWStXL3hmOFEiLCJtYWMiOiJlMThhNTFkMjZiMDkzMTYwMTM4MGE5MGRkNTg0MjI2YzQ4MTRlYjM4MTc5YzIyOTY1ODE0ZjQ0NGY1ZGVjZmYyIiwidGFnIjoiIn0%3D");

//   const raw = JSON.stringify({
//     "email": requestData.email,
//     "password": requestData.password
//   });

//   const requestOptions = {
//     method: "POST",
//     headers: myHeaders,
//     body: raw,
//     redirect: "follow"
//   };

//   fetch("https://jsonplaceholder.typicode.com/posts", requestOptions)
//     .then((response) => response.text(requestData))
//     .then((result) => console.log(result))
//     .catch((error) => console.error(error));



//   return (
//     <div>
//       <form onSubmit={handleSubmit}>
//         <label htmlFor="email">Email</label>
//         <br />
//         <input
//           id="email"
//           type="email"
//           placeholder="email"
//           value={email}
//           onChange={(event) => setEmail(event.target.value)}
//           required
//         />
//         <br /><br />

//         <label htmlFor="password">Password</label>
//         <br />
//         <input
//           id="password"
//           type="password"
//           placeholder="password"
//           value={password}
//           onChange={(event) => setPassword(event.target.value)}
//           required
//         />
//         <br /><br />

//         <button type="submit">Save</button>
//       </form>
//     </div>
//   );
// }

// export default App;

//Api end

//Button start

import React, { useState } from "react";
import Login from "./components/Login";
// import { Button } from "./components/button";


function App() {



  return (
    <div>

      <Login />


    </div>
  );
}

export default App;