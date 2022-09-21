import React, {useState} from "react";



function Toggle() {
  const [isOn, setisOn] = useState(false);

  const color = isOn ? 'red' : 'white';
  
  return <button style={{ background: color }} onClick = {() =>{setisOn((isOn) => !isOn)}}>{isOn ? "ON" : "OFF"}</button>;
}

export default Toggle;
