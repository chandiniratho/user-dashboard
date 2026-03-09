import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchUsers } from "../services/api";

const UserDetails = () => {

  const { id } = useParams();
  const navigate = useNavigate();
  const [user,setUser] = useState(null);

  useEffect(() => {

    const getUser = async () => {
      const users = await fetchUsers();
      const selectedUser = users.find((u)=>u.id === Number(id));
      setUser(selectedUser);
    };

    getUser();

  },[id]);

  if(!user) return <p className="loader">Loading...</p>;

  return (

    <div className="container">

      <button className="back-btn" onClick={()=>navigate("/")}>
        ← Back
      </button>

      <div className="details-card">

        <h2>{user.name}</h2>

        <p><strong>Email:</strong> {user.email}</p>
        <p><strong>Phone:</strong> {user.phone}</p>
        <p><strong>Website:</strong> {user.website}</p>

        <div className="details-section">
          <h3>Address</h3>
          <p>{user.address.street}</p>
          <p>{user.address.city}</p>
          <p>{user.address.zipcode}</p>
        </div>

        <div className="details-section">
          <h3>Company</h3>
          <p>{user.company.name}</p>
          <p>{user.company.catchPhrase}</p>
        </div>

      </div>

    </div>
  );
};

export default UserDetails;