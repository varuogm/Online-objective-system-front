import axios from 'axios';
import React, { Component } from 'react'
import { Link, NavLink } from 'react-router-dom';

export class Adm_login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
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
        // alert(JSON.stringify(data2))
         axios.post(`https://online-objective-system.herokuapp.com/adminModel/login`,data2).then(res => {
        //  alert(JSON.stringify(res.data) )   
        // console.log();
            console.log(res.data);
            if(res.data.message ==="Invalid Email or Password!")
            {
                alert(res.data.message)
            }
            else{
                alert(res.data.message)
                this.props.history.push({
                    pathname: '/adminMain/usermgt'
                    
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
                                    <h1 class="text-center" style={{paddingTop:'',textDecoration:''}}>Admin Login</h1>
                                   
                                </div>
                                <div class="card-body center">
                              
                                    <div class="row">
                                        <div class="col-md-7">
                                            <form onSubmit={this.submithandler} >
                                                <div class="mb-3 row" style={{padding:'3px'}}>
                                                    <div class="col-md-4">
                                                        <label for="email">Enter admin email</label>
                                                    </div>
                                                    <div class="col-md-8">
                                                        <input type="email" name="email" class="form-control" placeholder="Enter admin emial" onChange={this.myChangeHandler} required/>
                                                        {this.state.errormessage}
                                                    </div>
                                                </div>

                                                <div class="mb-3 row" style={{padding:'3px'}}>
                                                    <div class="col-md-4">
                                                        <label for="password">admin password</label>
                                                    </div>
                                                    <div class="col-md-8">
                                                        <input type="password"onChange={this.myChangeHandler} name="password" class="form-control" placeholder="enter Password" required/>

                                                    </div>
                                                </div>

                                                <div class="mb-3 row" style={{padding:'3px'}}>
                                                    <div class="col-md-4">
                                                    </div>
                                                    <div class="col-md-8">
                                                       {/* <NavLink to="/AdminMain/usermgt"><button class="btn btn-primary" >Login</button></NavLink>  */}
                                                       <button className="btn btn-primary" type="submit" >login</button>
                                                        
                                                    </div>
                                                </div>

                                                <div class="mb-3 row" style={{padding:'3px'}}>
                                                    <div class="col-md-4">
                                                    </div>
                                                    <div class="col-md-8">
                                                        <p style={{fontSize:"15px"}}>Dont have an account.</p>
                                                        
                                                        <Link to='/admin-register' >Create here</Link>                                   
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
                <div className="d-flex justify-content-center">
        <Link to="/">
          <button className="btn-center btn-sm  btn-light ">
            BAck to home ↩️
          </button>
        </Link>
      </div>
            </div>
        )
    }
}


export default Adm_login
