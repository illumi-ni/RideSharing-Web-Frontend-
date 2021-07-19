import React, { Component } from 'react';
import './customer.css';
import rent from "./rent.jpg"
import axios from 'axios'
import { Redirect } from 'react-router-dom';

class customerlogin extends Component {
    state = {
        otp : "",
        chklogin : false
    }

    submitLogin = (e)=>{
        e.preventDefault();
        axios.post("http://localhost:90/verifyotp", this.state)
        .then((response)=>{
            console.log(response);
            localStorage.setItem('token',response.data.token)
            localStorage.setItem('email',response.data.data)
            this.setState({
                chklogin : true
            })
        })        
        .catch((err)=>{
            console.log(err.response)
        })
    }
    render() {
        if(this.state.chklogin === true){
            //redirect to dashboard
            return <Redirect to ='/' />

        }
        return (
            // <div style={{ backgroundImage: `url(${carrent})`,backgroundRepeat: 'no-repeat'   }}>
            // <div className="Register">
            //     <div className='Register_container'>
            //         <h1>Customer Login</h1>
            //         <form>
            //             <h5> Please enter the OTP that we have send in your mobile number. </h5>
                        
            //             <h5 for="password"><label className="regstyle">OTP</label>
            //                 <input type="text" placeholder="OTP...." value={this.state.otp} 
            //                 onChange={(event) => { this.setState({ otp: event.target.value }) }}
            //                  name="otp" id="otp"required />
            //             </h5>
            //             <button type="submit" className='Login_btn' onClick={this.submitLogin}>Login</button>
            //         </form>

            //     </div>
            // </div>
            // </div>

            <div className="container-fluid">
            <div style={{ backgroundImage: `url(${rent})`,backgroundRepeat: 'no-repeat', width:'100%'  }} className="img-fluid">
                
            <div className="Customer">
                <div className="CusLog">
                <div className=" row">
                  <div className=" col-sm-4"></div>
                  <div className="  col-sm-4">
                      <div className="CusForm">
                      <h1>Customer Login</h1>
                    <form>
                         <h5> Please enter the OTP that we have send in your mobile number. </h5>
                        
                     <h5 for="password"><label className="regstyle">OTP</label>
                             <input type="text" placeholder="OTP...." value={this.state.otp} 
                             onChange={(event) => { this.setState({ otp: event.target.value }) }}
                              name="otp" id="otp"required />
                         </h5>
                         <button type="submit" className='cusLogin_btn' onClick={this.submitLogin}>Login</button>
                     </form>
                      </div>
                  </div>
                  <div className=" col-sm-4"></div>
                </div>
              </div>
            </div>
        </div>
        </div>
        )
    }
}
export default customerlogin
