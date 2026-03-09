const SortDropdown = ({ users, setDisplayUsers }) => {
  const handleSort = (e) => {
    const value = e.target.value;

    const sorted = [...users];

    if (value === "name") {
      sorted.sort((a, b) => a.name.localeCompare(b.name));
    }

    if (value === "company") {
      sorted.sort((a, b) =>
        a.company.name.localeCompare(b.company.name)
      );
    }

    setDisplayUsers(sorted);
  };

  return (
    <select onChange={handleSort}>
      <option value="">Sort By</option>
      <option value="name">Name</option>
      <option value="company">Company</option>
    </select>
  );
};

export default SortDropdown;