import { Routes, Route, Link } from "react-router-dom";
import styled from "styled-components";
import Admin from "./pages/Admin";
import User from "./pages/User";
import History from "./pages/History";

const Nav = styled.nav`
  background: #282c34;
  padding: 10px 20px;
  a {
    color: white;
    margin-right: 15px;
    text-decoration: none;
    font-weight: bold;
  }
`;

export default function App() {
  return (
    <>
      <Nav>
        <Link to="/admin">Admin</Link>
        <Link to="/user">User</Link>
        <Link to="/history">History</Link>
      </Nav>
      <Routes>
        <Route path="/admin" element={<Admin />} />
        <Route path="/user" element={<User />} />
        <Route path="/history" element={<History />} />
        <Route path="*" element={<User />} />
      </Routes>
    </>
  );
}
