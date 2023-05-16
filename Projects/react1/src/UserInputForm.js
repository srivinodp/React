import React, {useState} from 'react';

const UserInputComp = ()=>{
    const [inputTxt, setInputTxt] = useState('')
    const handleInputChange = (e) =>{
        setInputTxt(e.target.value)
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`You entered: ${inputTxt}`);
        setInputTxt("");
    };
      
    return (
        <form onSubmit={handleSubmit}>
            <input type = "text" value = {inputTxt} onChange={handleInputChange} placeholder = "Please enter the text"></input>
            <button type="submit">Submit</button>
        </form>
    );
}

export default UserInputComp;