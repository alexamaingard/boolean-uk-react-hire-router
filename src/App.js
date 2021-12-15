import { useState } from "react"
import { Routes, Route, Link } from "react-router-dom"
import Dashboard from "./pages/Dashboard";
import PersonProfile from "./pages/PersonProfile";
import "./styles.css"

const App = () => {
  const [hiredPeople, setHiredPeople] = useState([]);

  return (
    <>
      <header>
        <h1>Hire Your Team</h1>
        <nav>
          <ul>
            <li>
              <Link to="/dashboard">Dashboard</Link>
            </li>
          </ul>
        </nav>
      </header>
      <Routes>
        <Route
          path="/dashboard"
          element={<Dashboard hiredPeople={hiredPeople} setHiredPeople={setHiredPeople} />}
        />
                <Route
          path="/view/:id"
          element={<PersonProfile hiredPeople={hiredPeople} setHiredPeople={setHiredPeople} />}
        />
      </Routes>
    </>
  )
}

export default App