import { BrowserRouter, Routes, Route } from 'react-router'
import Welcome from './components/welcome/Welcome';
import BookPage from './components/bookPage/BookPage'
import UserPage from './components/userPage/UserPage';
import './App.css'

function App() {
  return (
    <BrowserRouter>

      <Routes>

        <Route path="/" element={<Welcome/>}/>
        <Route path="/users" element={<UserPage/>}/>
        <Route path="/books" element={<BookPage/>}/>

      </Routes>

    </BrowserRouter>
  )
}

export default App
