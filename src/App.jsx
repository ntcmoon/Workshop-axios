import "./App.css";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <nav className="bg-black text-white">
        <ul className="flex m-5">
          <li><a href='/'>Home</a></li>
          <li>
            <a href="/counter" className="m-5">
              Counter
            </a>
          </li>
          <li>
            <a href="/calculator">Calculator</a>
          </li>
        </ul>
      </nav>
      <Outlet></Outlet>
    </>
  );
}

export default App;
