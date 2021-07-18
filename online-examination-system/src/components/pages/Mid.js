import React from "react";
import studentpic from "../../imageshome/student.jpg";
import facultypic from "../../imageshome/faculty.jpg";
import adminpic from "../../imageshome/admin.jpg";
import { Link} from "react-router-dom";

const Mid = () => {
  return (
    <>
<div class="container my-5">
  <div class="row">
    <div class="col-lg-6">
      <img class="w-100 shadow" src="https://nintendo-power.com/wp-content/uploads/2021/06/1623480800_Download-2021-State-Examination-and-Control-Activities-Candidates-Sub-Witness-or.jpg" />
    </div>
    <div class="col-lg-6">
      <div class="p-5 mt-4">
          <h1 class="display-4">Give your first Exam now</h1>
          <p class="lead">To make an online objective test system that allows users to take online tests and automatically generates results based on answers marked by users.  . </p>
     
        </div>
    </div>
</div>
<hr/>
  </div>
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
          <Link exact to='/admin-log' className="btn btn-primary  btn-block">login</Link>
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
</>
  );
};
export default Mid;
