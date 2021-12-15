import { Routes, Route, Link } from "react-router-dom"
import PersonProfile from "../../PersonProfile"

const PeopleListItem = props => {
  const { person } = props

  return (
    <>
        <li>
          <h3>
          <Link to={`/view/${person.login.uuid}`} state={{person}}>{person.name.first} {person.name.last}</Link>
          </h3>
          {person.wage && <p>Wage: £{person.wage}</p>}
        </li>
    </>

  )
}

export default PeopleListItem