import axios from 'axios';
import React, { Component } from 'react'
import { Link, NavLink } from 'react-router-dom';

export class Stud_login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            errormessage: ''
        };
    }
    
    submithandler =  event => {  
        event.preventDefault()
      const data2 = {
          "Email" : this.state.email,  
          "Password" : this.state.password 
      }
      // alert('hi');
    //    alert(JSON.stringify(data2))
      
       axios.post(`https://dashboard.heroku.com/apps/online-objective-system/studentModel/login`,data2).then(res => {
      //  alert(JSON.stringify(res.data) )   
      // console.log();
          console.log(res.data);
          if(res.data.message ==="Invalid Email or Password!")
          {
              alert(res.data.message)
          }
          else{
              alert("logged in sucessfully")
              this.props.history.push({
                  pathname: '/TestSelection'
                  
                })
          }
          
      })
      
  }
    myChangeHandler = (event) => {
        let nam = event.target.name;
        let val = event.target.value;
        let err = '';


        if (nam === "email") {
            if (val == "") {
                err = '*Cannot proceed without email!';
            }
        }

        this.setState({ errormessage: err });
        this.setState({ [nam]: val });
    }
    render() {
        return (
            <div class="container-fluid" >
                <div class="container">
                    <div class="row mb-3">
                        <div class="center">
                            <div class="card">
                                <div class="card-header" style={{ backgroundColor: '' }}>
                                    <h1 class="text-center" style={{paddingTop:'',textDecoration:''}}>Student Login</h1>
                                 
                                </div>
                                <div class="card-body">
                           
                                    <div class="row">
                                        <div class="col-md-7">
                                            <form onSubmit={this.submithandler}>
                                                <div class="mb-3 row" style={{padding:'3px'}}>
                                                    <div class="col-md-4">
                                                        <label for="email">Enter student mail</label>
                                                    </div>
                                                    <div class="col-md-8">
                                                        <input type="email" name="email" class="form-control" placeholder="Enter student email here..." onChange={this.myChangeHandler} required/>
                                                        {this.state.errormessage}
                                                    </div>
                                                </div>

                                                <div class="mb-3 row" style={{padding:'3px'}}>
                                                    <div class="col-md-4">
                                                        <label for="password">Password</label>
                                                    </div>
                                                    <div class="col-md-8">
                                                        <input onChange={this.myChangeHandler} type="password" name="password" class="form-control" placeholder="Enter student password" required />

                                                    </div>
                                                </div>

                                                <div class="mb-3 row" style={{padding:'3px'}}>
                                                    <div class="col-md-4">
                                                    </div>
                                                    <div class="col-md-8">
                                                    <button className="btn btn-primary" type="submit" >login</button>
                                                    </div>
                                                </div>

                                                <div class="mb-3 row" style={{padding:'3px'}}>
                                                    <div class="col-md-4">
                                                    </div>
                                                    <div class="col-md-8">
                                                        <p style={{fontSize:"15px"}}>Dont have an account. Create here.</p> 
                                                        <Link to='/student-register' >Register Here</Link>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Stud_login
