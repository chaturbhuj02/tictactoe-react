import { useState } from "react";

export default function({name, symbol, isActive}){
    const [inputValue, setInputValue] = useState(name);
    const [isEditing, setIsEditing] = useState(false);

    function editButtonHandler(){
        setIsEditing((editing)=>!editing);
    }

    function inputHandler(event){
        setInputValue(event.target.value);
    }

    return (
        <li className={isActive?"active":undefined}>
        <span className="player">
            {!isEditing && <span className="player-name">{inputValue}</span>}
            {isEditing && <input type="text" required value={inputValue} onChange={inputHandler} />}
            <span className="player-symbol">{symbol}</span>
        </span>
        <button onClick={editButtonHandler}>{isEditing?"Save":"Edit"}</button>
        
        </li>
    )
}