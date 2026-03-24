import { Link } from "react-router";
export default function UserPage() {
  return (
    <>
      <h1>
        A List of <b>Users</b>!
      </h1>
      <p>User1: <Link to="/users/Emil" >Emil</Link></p>
      <p>User1: <Link to="/users/Sara">Sara</Link></p>
    </>
  );
}
