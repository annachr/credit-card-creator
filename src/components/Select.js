import React from "react"

function Select(props) {
  return (
    <div className="select">
      <label>{props.label}</label>
      <div className="selectList">
        <select>
          <option>Month</option>
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
          <option>6</option>
          <option>7</option>
          <option>8</option>
          <option>9</option>
          <option>10</option>
          <option>11</option>
          <option>12</option>
        </select>
        <select>
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
