import React from "react";
import studentpic from "../../imageshome/student.jpg";
import facultypic from "../../imageshome/faculty.jpg";
import adminpic from "../../imageshome/admin.jpg";
import { Link} from "react-router-dom";

const Mid = () => {
  return (

    <div className="container align-items-center">
      <div className="card-deck d-flex justify-content-center align-items-end">
        <div className="card">
          <img src= {studentpic} alt="student_image" />
          <div className="card-body">
            <h5 className="card-title">Student</h5>
            <p className="card-text">
              students can take exams from diff teachers.
            </p>
          </div>
          <div className="card-footer">
         
          <Link   to='/student-log' className="btn btn-primary  btn-block"> login</Link>
          </div>
        </div>
        <div className="card">
          <img className="card-img-top" src={facultypic} alt="faculty_image" />
          <div className="card-body">
            <h5 className="card-title">Faculty</h5>
            <p className="card-text">
              this is a faculty side where he/she can genrate exam for students.
            </p>
          </div>
          <div className="card-footer">
          <Link to='/login'className="btn btn-primary  btn-block">login</Link>
          </div>
        </div>
        <div className="card">
          <img className="card-img-top" src={adminpic} alt="admin_image " />
          <div className="card-body">
            <h5 className="card-title">Admin panel</h5>
            <p className="card-text">
              Login as admin and hae full control over permiisons.
            </p>
          </div>
          <div className="card-footer">
            
          <Link    exact to='/admin-log' className="btn btn-primary  btn-block">login</Link>
 
          </div>
        </div>
      </div>
      <br/>
      Dont Know where to start?    
      <Link  to='/contactUs'>    Go to Aboutpage</Link>

    
    </div>  

  );
};
export default Mid;
