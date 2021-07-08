import React, { Component } from 'react';
import './register.css';
import background from "./background.jpg"

class login extends Component {
    render() {
        return (
            <div style={{ backgroundImage: `url(${background})`,backgroundRepeat: 'no-repeat'   }}>
            <div className="Register">
                <div className='Register_container'>
                    <h1>Login</h1>
                    <form>
                        <h5 for="email"><label className="regstyle">Username</label>
                            <input type="text" placeholder="Username" name="username" id="username" required />
                        </h5>
                        <h5 for="password"><label className="regstyle">Password</label>
                            <input type="text" placeholder="Password" name="password" id="password" required />
                        </h5>
                        <button type="submit" className='Login_btn' onClick={this.sendUserData}>Login</button>
                    </form>

                </div>
            </div>
            </div>
        )
    }
}
export default login