import { useState } from "react";

export default function Player({children, ...props}){
    const [isEditing, setIsEditing] = useState(false);
    const [name, setName] = useState(props.name);
    const [symbol, setSymbol] = useState(props.symbol);


    const handleEditClick = () => {    
        console.log("Clicked");
        setIsEditing(!isEditing);
    }

    const handleChange = (event) => {
        const value = event.target.value;
        console.log(`Saving value [ ${value} ]`);
        setName(value);
    }

    return (
        <li className={props.isActive ? 'active' : undefined}>
          <span className="player">
            {!isEditing ? 
            <span className="player-name">{name}</span>
                :
            <input type="text" required value={name} onChange={handleChange}/>
            }
            <span className="player-symbol">{symbol}</span>
            <button onClick={handleEditClick}>{isEditing ? "Save" : "Edit"}</button>
          </span>
        </li>
    );
}