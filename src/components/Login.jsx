import React, { useState } from "react";
import Button from "./button";
import { Link } from "react-router-dom";
import {style} from "../buttonStyle/Style.css"

export default function Login() {

    const [username, setUsername] = useState("");

    const [password, setPassword] = useState("");


    const handleSubmit = (event) => {
        event.preventDefault();
    };



    // console.log(`Username:`,username);
    // console.log(`displayname:`,displayname);
    // console.log(`password:`,password);

    return (

        <div>

            <form onSubmit={handleSubmit} className="text-center">
                <h1 className="mt-5 fw-semibold">Login</h1> <br/>
                <label htmlFor="username" className="fw-semibold ">Username:</label>
                <br />
                <input placeholder="username" id="username" className="rounded" type="text" value={username}
                    onChange={(event) => setUsername(event.target.value)}
                    required /> <br /><br />



                <label htmlFor="password" className="fw-semibold">Password:</label>
                <br />
                <input placeholder="password" className="rounded" id="password" type="password" value={password}
                    onChange={(event) => setPassword(event.target.value)}
                    required />

                <div>
                    <br />
                    {/* <Button onChange={()=>{
   title="Submit"
 }} >{title}</Button> */}
                    <Button  title={'Login'} onclick={() => {
                        alert("Login Successfull")
                    }} />
                    <Link to="/Signup" className="loglink " >Signup</Link>


                </div>
            </form>

            <div>
                
            </div>

        </div>
    )

}