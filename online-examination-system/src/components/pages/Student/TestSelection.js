import React,{ useState,useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import axios from 'axios';

function TestSelection() {
    const [subjects,setSubjects]= useState([])
    const [currSubId,setSubId] = useState("")
    const takeSubId = async(_id)=>{
      //  console.log("subid hi"+_id)
        axios.put("https://online-objective-system.herokuapp.com/id/",{"id":_id})
        setSubId(""+_id)
        // alert(_id)
    }

    useEffect(()=>{
       loadSubjects();
    },[]);

    
    const loadSubjects= async()=>{

        const result=await axios.get('https://online-objective-system.herokuapp.com/postSubjects');
        setSubjects(result.data);
        
    }
    return (
        <div className="container my-4" style={{border:"2px solid black" , background:""}}>
               <h1>here are some tests you can give</h1>
            <div className="row my-4 z ">
            {
               
                   subjects.map((sub,index)=>(
                       
                 <div className="col-md-3 col-sm-6 "style={{paddingBottom:'20px'}}>
                  
                    <div className="card h-100" >
                    
                        <img src="https://media.glassdoor.com/sql/2321380/celebal-technologies-squarelogo-1588749669479.png" className="card-img-top" alt="All The Best" />
                        <div className="card-body">
                            <h2 className="card-title">{sub.Name}</h2>
                            <p className="card-text">{sub.Description}</p>
                           
                            <NavLink onClick={()=>{
                               
                                takeSubId(sub._id)
                                // alert(sub._id)
                                
                            }}
                             to={{pathname:"/ExamPage" ,
                                userProps : {
                                    currSubId:{currSubId}   
                            }
                            }}
                             className="btn btn-primary" >Take Test</NavLink>
                        </div>

                    </div>

                </div> 
                ))
               }
               
               
               
            </div>
        </div>
    )
}

export default TestSelection
