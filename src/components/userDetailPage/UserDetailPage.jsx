import { useParams } from "react-router";

export default function UserDetailPage() {
  const { uid } = useParams(); // Hook
  return (
    <>
      <h1>Detailed info for User: {uid} </h1>
    </>
  );
}
