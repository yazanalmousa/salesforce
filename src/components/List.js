import React from "react";
import "../styles/list.css";
import { RadioHandle, CheckboxHandle } from "../Helper/Context";

function List() {
  const { radio, setRadio } = React.useContext(RadioHandle);
  const { checkbox, setCheckbox } = React.useContext(CheckboxHandle);
  const handleRadioChange = (event) => {
    setRadio(event.target.value);
    console.log(radio, "radio");
  };

  const handleCheckboxChange = (event) => {
    const checkboxValue = event.target.value;

    // If the checkbox is checked, add its value to the array
    // If unchecked, remove its value from the array
    setCheckbox((prevCheckbox) => {
      if (!Array.isArray(prevCheckbox)) {
        // If prevCheckbox is not an array (initial state), initialize it as an array
        return [checkboxValue];
      }

      if (prevCheckbox.includes(checkboxValue)) {
        // If already present, remove it
        return prevCheckbox.filter((value) => value !== checkboxValue);
      } else {
        // If not present, add it
        return [...prevCheckbox, checkboxValue];
      }
    });

    console.log(checkbox, "checkbox");
  };

  return (
    <div className="list-container">
      <h2>
        Filters
        <span>
          <i class="fa-solid fa-filter"></i>
        </span>
      </h2>
      <p>Recently posted</p>
      <ul className="filters-list">
        <li className="filter-item">
          <input
            type="radio"
            id="all"
            name="filters"
            value="All"
            checked={radio === "All"}
            onChange={handleRadioChange}
          />
          <label htmlFor="all">All</label>
        </li>

        <li className="filter-item">
          <input
            type="radio"
            id="past-24"
            name="filters"
            value="2024"
            checked={radio === "2024"}
            onChange={handleRadioChange}
          />
          <label htmlFor="past-24">2024</label>
        </li>

        <li className="filter-item">
          <input
            type="radio"
            id="past-week"
            name="filters"
            value="2023"
            checked={radio === "2023"}
            onChange={handleRadioChange}
          />
          <label htmlFor="past-week">2023</label>
        </li>

        <li className="filter-item">
          <input
            type="radio"
            id="past-month-2022"
            name="filters"
            value="2022"
            checked={radio === "2022"}
            onChange={handleRadioChange}
          />
          <label htmlFor="past-month-2022">2022</label>
        </li>

        <li className="filter-item">
          <input
            type="radio"
            id="past-month-2021"
            name="filters"
            value="2021"
            checked={radio === "2021"}
            onChange={handleRadioChange}
          />
          <label htmlFor="past-month-2021">2021</label>
        </li>

        <li className="filter-item">
          <input
            type="radio"
            id="past-month-2020"
            name="filters"
            value="2020"
            checked={radio === "2020"}
            onChange={handleRadioChange}
          />
          <label htmlFor="past-month-2020">2020</label>
        </li>
      </ul>

      {/* second list */}
      <p>Author</p>
      <ul className="filters-list1">
        <li className="filter-item">
          <input
            type="checkbox"
            id="past-24"
            name="filters1"
            value="All"
            onClick={handleCheckboxChange}
          />
          <label htmlFor="past-24">All</label>
        </li>

        <li className="filter-item">
          <input
            type="checkbox"
            id="past-24"
            name="filters1"
            value="Tariq"
            onClick={handleCheckboxChange}
          />
          <label htmlFor="past-24">Tariq</label>
        </li>

        <li className="filter-item">
          <input
            type="checkbox"
            id="past-week"
            name="filters1"
            value="Omar"
            onClick={handleCheckboxChange}
          />
          <label htmlFor="past-week">Omar</label>
        </li>

        <li className="filter-item">
          <input
            type="checkbox"
            id="past-month"
            name="filters1"
            value="PwC"
            onClick={handleCheckboxChange}
          />
          <label htmlFor="past-month">PwC</label>
        </li>
      </ul>
    </div>
  );
}

export default List;
