import React, { useState } from "react";
import Button from "./button";
import { Link } from "react-router-dom";
import {style} from "../buttonStyle/Style.css"


export default function Login() {

    const [username, setUsername] = useState("");
    const [displayname, setDisplayname] = useState("");
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
                <h1 className="mt-5 fw-semibold">Signup</h1> <br/>
                <label htmlFor="username" className="fw-semibold">Username:</label>
                <br />
                <input placeholder="username" id="username" className="rounded" type="text" value={username}
                    onChange={(event) => setUsername(event.target.value)}
                    required /> <br /><br />

<label htmlFor="displayname" className="fw-semibold">Displayname:</label>
                <br />
                <input placeholder="displayname" id="username" className="rounded" type="text" value={displayname}
                    onChange={(event) => setDisplayname(event.target.value)}
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
                    <Button  title={'Signup'} onclick={() => {
                        alert("Signup Successfull")
                    }} />
                    <Link to="../Login" className="loglink " >Login</Link>


                </div>
            </form>

        </div>
    )

}