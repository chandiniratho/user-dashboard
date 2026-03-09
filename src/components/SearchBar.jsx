const SearchBar = ({ users, setDisplayUsers }) => {
  const handleSearch = (e) => {
    const value = e.target.value.toLowerCase();

    const filtered = users.filter((user) =>
      user.name.toLowerCase().includes(value)
    );

    setDisplayUsers(filtered);
  };

  return (
    <input
      type="text"
      placeholder="Search users"
      onChange={handleSearch}
    />
  );
};

export default SearchBar;