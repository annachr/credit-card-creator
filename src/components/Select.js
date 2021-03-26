import React, {useContext} from "react"
import { InputDataContext } from "../inputDataContext"

function Select(props) {

  const {changeExpirationMonth, changeExpirationYear} = useContext(InputDataContext)

  let monthOptions = []
  for (let i=1; i<=12; i++) {
    monthOptions.push(i)
  }

  let yearOptions = []
  for (let i=2021; i<=2032; i++) {
    yearOptions.push(i)
  }

  return (
    <div className="select">
      <label>{props.label}</label>
      <div className="selectList">
        <select onChange={changeExpirationMonth}>
          <option>Month</option>
          {monthOptions.map(option => (
              <option key={option}>{option}</option>
            )
          )}
        </select>
        <select onChange={changeExpirationYear} value={props.value}>
          <option>Year</option>
          {yearOptions.map(option => (
            <option key={option}>{option}</option>
            )
          )}
        </select>
      </div>

    </div>
  )
}

export default Select
