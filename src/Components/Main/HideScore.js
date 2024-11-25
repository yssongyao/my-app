import { useState } from "react";

const HideScore = () => {    
    const [isChecked, setIsChecked] = useState(true);
    const checkHandler = () => {
        setIsChecked(!isChecked)
    };
    return (
       <form>
       <label For="checkbox">Hide score
       <input
        type="checkbox"
        name="checkbox"
        className="CheckBox"
        checked={isChecked}
        onChange={checkHandler}
      />
      </label>
      {isChecked  ? (<h3 style={{color:"yellow"}}>Inter Milan vs AC Milan</h3>) 
      : (<h3 style={{color:"lightgreen"}}>Inter Milan vs AC Milan 2:1</h3>)}
      </form>
    )
}

export default HideScore;