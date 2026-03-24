import { BrowserRouter, Routes, Route } from "react-router";
import Welcome from "./components/welcome/Welcome";
import BookPage from "./components/bookPage/BookPage";
import UserPage from "./components/userPage/UserPage";
import UserDetailPage from './components/userDetailPage/UserDetailPage';
import BookDetailPage from './components/bookDetailPage/BookDetailPage';

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/users" element={<UserPage />} />
        <Route path="/users/:uid" element={<UserDetailPage />} />
        <Route path="/books" element={<BookPage />} />
        <Route path="/books/:bid" element={<BookDetailPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
