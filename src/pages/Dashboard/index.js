import { useState, useEffect } from "react"
import PeopleList from "./components/PeopleList"

const Dashboard = props => {
  const { hiredPeople } = props

  const [people, setPeople] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("https://randomuser.me/api/?results=50");
        const data = await res.json();
        console.log(data.results);
        setPeople(data.results);
      }
      catch(error) {
        console.log(error);
      }
    }
    fetchData();
  }, []);

  return (
    <main className="dashboard-layout">
      <section>
        <h2>People</h2>
        <PeopleList people={people} />
      </section>
      <section>
        <h2>Hired People</h2>
        <PeopleList people={hiredPeople} />
      </section>
    </main>
  )
}

export default Dashboard