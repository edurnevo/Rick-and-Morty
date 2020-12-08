import React from "react";
import "../stylesheet/Filters.scss";


const Filters = (props) => {
  const handleChange = (ev) =>  {
    props.handleFilter({
      value: ev.target.value,
      key: 'name'
    });
  }
  return (
    <section >
      <form className="section_input" handleFilter={props.handleFilter} >
        <label className="label_search" htmlFor="name">Who do you want to search for?</label>
        <input className="input" type="text" name="name" id="name" onChange={handleChange}/>
      </form>
    </section>
  );
};

export default Filters;
