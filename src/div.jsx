import { useState, useEffect } from "react";
import Diabo from "./diabo";
import "./navbar.css"
export default  function Div(){
    const [check, setCheck] = useState(false);

    const handleCheck = () => {
      const checkbox = document.getElementById("burger");
      if (checkbox.checked) {
        setCheck(true);
      } else {
        setCheck(false);
      }
    };
  
    useEffect(() => {
      console.log(check);
    }, [check]);
  
    return(
        <>
<nav class="navbar navbar-light bg-light">
<ul style={{ display: "flex", listStyleType: "none", padding: 0 }}>
            <li>
  <a class="navbar-brand" href="#">
  <label className="burger">
                <input onClick={handleCheck} type="checkbox" id="burger" />
                <span></span>
                <span></span>
                <span></span>
              </label>
        </a>
         </li>
          </ul>
          <a href="https://www.instagram.com/2eeteclg">
          <img src="87390.png" style={{width:"50px", height:"50px", marginRight:"50px"}} alt="" />
          </a>
      </nav>
      {check && <Diabo/>}
    </>
)
}