import React, {useContext} from "react"
import { InputDataContext } from "../inputDataContext"
import { changeStyle, changeStyleInactive } from '../redux/actions'
import { useDispatch } from 'react-redux'

function Select(props) {
  const dispatch = useDispatch()
  const {changeExpirationMonth, changeExpirationYear} = useContext(InputDataContext)

  let monthOptions = []
  for (let i=1; i<=12; i++) {
    if (i<10) {
      i = '0' + i
    }
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
        <select onChange={changeExpirationMonth} onFocus={() => dispatch(changeStyle())}
          onBlur={() => dispatch(changeStyleInactive())}>
          <option>Month</option>
          {monthOptions.map(option => (
              <option key={option}>{option}</option>
            )
          )}
        </select>
        <select onChange={changeExpirationYear} onFocus={() => dispatch(changeStyle())}
          onBlur={() => dispatch(changeStyleInactive())}>
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
