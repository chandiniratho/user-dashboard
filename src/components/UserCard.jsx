import { useNavigate } from "react-router-dom";

const UserCard = ({ user }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/user/${user.id}`);
  };

  return (
    <div className="card" onClick={handleClick}>
      <h3>{user.name}</h3>

      <p>
        <strong>Email:</strong> {user.email}
      </p>

      <p>
        <strong>Company:</strong> {user.company.name}
      </p>

      <p>
        <strong>City:</strong> {user.address.city}
      </p>
    </div>
  );
};

export default UserCard;