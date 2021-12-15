import { useState, useEffect } from "react"
import { useLocation } from "react-router"
import HireForm from "./components/HireForm"

const PersonProfile = props => {
  const [person, setPerson] = useState(null);

  const location = useLocation();

  useEffect(() => {
    if (location.state) {
      const { person } = location.state;
      console.log('personProfile', { person} )
      setPerson(person);
    }
  }, [location]);

  if (!person) return <p>Loading...</p>

  return (
    <article>
      <h2>
        {person.name.first} {person.name.last}
      </h2>
      <img 
        src={person.picture.large} 
        alt={person.name.last}>
      </img>
      <h4>{person.location.city}, {person.location.state}, {person.location.country}</h4>
      <HireForm person={person} hiredPeople={props.hiredPeople} setHiredPeople={props.setHiredPeople}/>
    </article>
  )
}

export default PersonProfile