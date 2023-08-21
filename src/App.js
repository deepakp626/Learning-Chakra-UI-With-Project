import "./App.css";
import {
  Container,
  Flex,
} from "@chakra-ui/react";
import YourDetails from "./Components/YourDetails";
import Card from './Components/Card'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import PostPage from "./pages/PostPage";
import CardPage from "./pages/CardPage";
import NavBar from "./Components/Navigation/NavBar.jsx"

function App() {
  return (
        <Router>
           <NavBar />
            <Routes>
                <Route path="/" index element={<Home />} />
                <Route path="/post" element={<PostPage />} />
                <Route path="/card" element={<CardPage /> } />
            </Routes>
        </Router>
  );
}

export default App;
