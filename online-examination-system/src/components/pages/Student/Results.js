import React from 'react'
import './Results.css'

import { NavLink } from 'react-router-dom'

function Results(props) {
    var score = JSON.stringify(props.location.state.total);

    return (
        <div class='view'>
           
           
     <h2 class="scoreBoard mx-auto text-primary"> Congratulations!! You Scored {  score } Marks   <NavLink to="/TestSelection">    Back to Test </NavLink> </h2>
       
            
        </div>
    )
}

export default Results

