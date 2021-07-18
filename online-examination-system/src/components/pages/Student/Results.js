import React from 'react'
import './Results.css'

import { NavLink } from 'react-router-dom'

function Results(props) {
    var score = JSON.stringify(props.location.state.total);

    return (
       <div class='view mx-auto'>
           
           <img src="https://img.icons8.com/bubbles/200/000000/trophy.png" alt=""/>
     <h2 class="scoreBoard mx-auto text-primary"> Congratulations!! You Scored {  score } Marks    </h2>
   <div >
   <NavLink to="/TestSelection" className="btn-center btn-sm mx-auto  btn-dark">  Back to another Test </NavLink>

   </div>
  
   
        </div>
    )
}

export default Results

