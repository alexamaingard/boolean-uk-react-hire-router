import { useState } from "react"
import { useNavigate } from "react-router-dom";

const HireForm = props => {
  const [wage, setWage] = useState(0)
  
  let navigate = useNavigate();
  
  const handleSubmit = event => {
    event.preventDefault();
    const hiredPerson = {...props.person, wage: wage};
    props.setHiredPeople([...props.hiredPeople , hiredPerson]);
    navigate("/dashboard", { replace: true });
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="wage">Wage Offer</label>
      <input
        type="text"
        id="wage"
        name="wage"
        onChange={e => setWage(e.target.value)}
        value={wage}
      />
      <button type="submit">Hire</button>
    </form>
  )
}

export default HireForm
