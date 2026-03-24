import { Outlet, Navigate } from "react-router";

const ifAuth = Math.random() > 0.5;
export default function ProtectedRoute() {
  return ifAuth ? <Outlet /> : <Navigate to="/login"/>
}
