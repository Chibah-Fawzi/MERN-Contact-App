import React from 'react';
import Button from '@material-ui/core/Button';

function Auth() {

    return (

        <div className="container">
            <div className="header">
                <img className="logo" alt="logo" src="https://img.icons8.com/nolan/96/new-contact.png" />
                <h1> Contact App</h1>
                <p>You need an easy way to save your contacts ? We got what you need. <br /><br />
                Sign Up to ContactApp to discover all of the features! </p>

                <p>Already have an account Login!</p>
            </div>
            <div className="auth">
                <Button className="bttn login" variant="outline-primary">login</Button>
                <Button className="bttn signup" variant="outline-primary">SignUp</Button>
            </div>
            <style jsx>{`

                .container {
                    top: 40%;
                    right: 44vw;
                    transform: translate(50%, -50%);
                    position:absolute;   
                }   

                h1 {
                    text-transform: uppercase;
                    font-weight: 200;
                    color: var(--secondary);
                }
                p{
                    color: var(--text);

                }

                .bttn {
                    border-radius: 26px;
                    width: 13vw;
                    height: 8vh;
                    margin-top: 10vh;
                    font-size: 22px;
                    border: none;
                    outline: none;
                    font-family: 'Montserrat';
                    font-weight: 200;
                }


                .login {
                    box-shadow: 0 0 2px 1px #bfbfbf;
                    right: 10px;
                }
                .signup {
                    background: #6063e9;
                    color: white;
                    box-shadow: 0 0 2px 1px #5659f1;
                }
                .signup:hover {
                    background:#0852b6;
                }
                .login:hover {
                    background:#595959;
                    color: white;

                }
            `}</style>
        </div>
    );
}

export default Auth;
