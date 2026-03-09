import { useEffect, useState } from "react";
import { fetchUsers } from "../services/api";
import UserCard from "../components/UserCard";
import SearchBar from "../components/SearchBar";
import SortDropdown from "../components/SortDropdown";
import Loader from "../components/Loader";

const Dashboard = () => {
  const [users, setUsers] = useState([]);
  const [displayUsers, setDisplayUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const getUsers = async () => {
      try {
        const data = await fetchUsers();
        setUsers(data);
        setDisplayUsers(data);
      } catch (err) {
        setError("Failed to fetch users");
      } finally {
        setLoading(false);
      }
    };

    getUsers();
  }, []);

  if (loading) return <Loader />;
  if (error) return <p>{error}</p>;

  return (
    <div className="container">
      <h1>User Dashboard</h1>

      <div className="controls">
        <SearchBar users={users} setDisplayUsers={setDisplayUsers} />
        <SortDropdown users={displayUsers} setDisplayUsers={setDisplayUsers} />
      </div>

      <div className="grid">
        {displayUsers.map((user) => (
          <UserCard key={user.id} user={user} />
        ))}
      </div>
    </div>
  );
};

export default Dashboard;