
import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HOME from "./components/Home"
import User from './components/user/User';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
      <Route path="/" element={<HOME />}></Route>
          <Route path="/users/:id" element={<User />}></Route>
          </Routes>
          </BrowserRouter>
    </div>
  );
}

export default App;
