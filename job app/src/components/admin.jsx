import { Link } from "react-router-dom";

export const Admin = () => {
  return (
    <>
      <h1>Admin Dashboard</h1>
      <button>
        <Link to="/admin/addjob">Add Job</Link>
      </button>
    </>
  );
};
