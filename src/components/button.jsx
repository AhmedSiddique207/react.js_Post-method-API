import React from "react";

import {style} from "../buttonStyle/Style.css"

export default function Button({ title, onclick }) {
    return (
        <div >
            <button className="btn btn-primary buttonn"   onClick={onclick}>{title}</button>
        </div>
    )

}