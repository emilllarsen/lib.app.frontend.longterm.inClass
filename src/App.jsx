import { BrowserRouter, Routes, Route } from "react-router";
import Welcome from "./pages/welcome/Welcome";
import BookPage from "./pages/bookPage/BookPage";
import UserPage from "./pages/userPage/UserPage";
import UserDetailPage from "./pages/userDetailPage/UserDetailPage";
import BookDetailPage from "./pages/bookDetailPage/BookDetailPage";
import Dashboard from "./pages/dashboard/Dashboard";
import MainLayout from "./layouts/mainLayout/MainLayout";
import ProtectedRoute from "./routes/ProtectedRoute";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<h1>Login page</h1>} />
        <Route path="/admin" element={<ProtectedRoute />}>
          <Route path="dashboard" element={<Dashboard />} />
        </Route>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Welcome />} />
          <Route path="/users">
            <Route index element={<UserPage />} />
            <Route path=":uid" element={<UserDetailPage />} />
          </Route>
          <Route path="/books">
            <Route index element={<BookPage />} />
            <Route path=":bid" element={<BookDetailPage />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
