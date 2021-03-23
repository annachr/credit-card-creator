import React, {useContext} from "react"
import { InputDataContext } from '../inputDataContext'

function Select(props) {

  const {changeExpirationMonth, changeExpirationYear} = useContext(InputDataContext)

  //   let date = new Date()
  //   let currentYear = date.getFullYear()
  //   // let yearOptions = "<option value='0'>Year</option>"
  //   for (let i = currentYear; i < currentYear + 12; i++) {
  //     yearOptions += "<option value='"+i+"'>"+i+" </option>"
  //   }



  return (
    <div className="select">
      <label>{props.label}</label>
      <div className="selectList">
        <select onChange={changeExpirationMonth}>
          <option>Month</option>
          <option>01</option>
          <option>02</option>
          <option>03</option>
          <option>04</option>
          <option>05</option>
          <option>06</option>
          <option>07</option>
          <option>08</option>
          <option>09</option>
          <option>10</option>
          <option>11</option>
          <option>12</option>
        </select>
        <select onChange={changeExpirationYear} value={props.value}>
          <option>Year</option>
          <option>2021</option>
          <option>2022</option>
          <option>2023</option>
          <option>2024</option>
          <option>2025</option>
          <option>2026</option>
          <option>2027</option>
          <option>2028</option>
          <option>2029</option>
          <option>2030</option>
          <option>2031</option>
          <option>2032</option>
        </select>
      </div>

    </div>
  )
}

export default Select
