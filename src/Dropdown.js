import React from 'react';
import './Status.css'
import './Dropdown.css'

import './Dropdown.css'
import { useState } from 'react';
// import { Link, Navigate, useNavigate } from 'react-router-dom';
// import {useNavigate} from 'react-router-dom';

function Dropdown(props) {
  const [selectedValue, setSelectedValue] = useState(localStorage.getItem('grouping'));
  const [selectedValueorder, setSelectedValueorder] = useState(localStorage.getItem('order'));

  const handleSelectChange = (event) => {
    setSelectedValue(event.target.value);
    
    props.setGroupingValue(`${event.target.value}`);
    localStorage.setItem('grouping', `${event.target.value}`);
    
  };
  function onClickHandler() {
    console.log("hello");
    //set item();
  };
  const handleSelectChangeorder = (event) => {
    setSelectedValueorder(event.target.value);
    console.log(`${event.target.value}`);
    props.setOrderingValue(`${event.target.value}`);
    // setorderBy(event.target.value);
    // localStorage.clear();
    localStorage.setItem('order', `${event.target.value}`);
    
  };

  return (
    <>
      <div className='dropdown'>
        <ul>Grouping <div>
          <select name="grouping"  value={selectedValue} onChange={handleSelectChange} >
            <option value="status"  >Status</option>
            <option value="priority" >Priority</option>
            <option value="user">User</option>
          </select>
        </div>
        </ul>
        <ul>Ordering<div>
            <select name="ordering"  value={selectedValueorder} onChange={handleSelectChangeorder} >
            <option value="Priority">Priority</option>
            <option value="Title">Title</option>
          </select>
        </div>
        </ul>
      </div>
     

    </>

  );
}

export default Dropdown;
