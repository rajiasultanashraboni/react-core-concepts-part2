import { useState } from "react"

export default function Team(){
    const teamStyle = {
        border:"2px solid red",
        borderRadius: "10px"
    }

    const[team,setTeam]=useState(11)

    function add (){
        const newTeam = team+1;
        setTeam(newTeam)
    }

    function remove(){
        setTeam(team-1)
    }
    return(
        <div style={teamStyle}>
            <h3>Team:{team} </h3>
            <button onClick={add}>Add</button>
            <button onClick={remove}>Remove</button>
        </div>
    )
}