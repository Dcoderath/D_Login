
// import React, { useState } from "react";
// import { supabase } from '../../supabase' // make sure this path is correct

// export default function InstagramForm() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [message, setMessage] = useState("");

//   const handleSave = async (e) => {
//     e.preventDefault();
//     setMessage("Saving...");

//     const { data, error } = await supabase
//       .from("Instagram")
//       .insert([{ email, password }]);

//     if (error) {
//       console.error("Insert error:", error);
//       setMessage("❌ Failed to save.");
//     } else {
//       setMessage("✅ Saved to Supabase!");
//       setEmail("");
//       setPassword("");
//     }
//   };

//   return (
//     <div className="max-w-sm mx-auto mt-10 p-4 border rounded">
//       <h2 className="text-2xl font-bold mb-4">Instagram</h2>
//       <form onSubmit={handleSave}>
//         <input
//           type="email"
//           placeholder="Email"
//           required
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           autoComplete="email"
//           className="w-full rounded border border-gray-300 p-2 mb-2"
//         />
//         <input
//           type="password"
//           placeholder="Password"
//           required
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//           autoComplete="current-password"
//           className="w-full rounded border border-gray-300 p-2 mb-4"
//         />
//         <button
//           type="submit"
//           className="w-full bg-blue-500 text-white p-2 rounded"
//         >
//           Log In
//         </button>
//       </form>
//       {message && <p className="mt-2 text-sm">{message}</p>}
//     </div>
//   );
// }