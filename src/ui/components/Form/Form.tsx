import React from 'react'
import Button from '../Button/Button'

function Form() {
  return (
    <form className="novaTarefa">
      <div className="inputContainer">
        <label htmlFor="task">Add a study</label>
        <input
          type="text"
          name="task"
          id="task"
          placeholder="What do you want to study"
          required
        />
      </div>
      <div className="inputContainer">
        <label htmlFor="time">Time</label>
        <input
          type="time"
          step="1"
          name="time"
          id="time"
          min="00:00:00"
          max="01:30:00"
          required
        />
      </div>
      <Button />
    </form>
  )
}

export default Form
