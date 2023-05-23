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
    const handleIntroducao = ()=>{
      document.getElementById("tela-1").scrollIntoView();
  }
  const desafio = ()=>{
    document.getElementById("teste").scrollIntoView();
} 
const Outrastec = ()=>{
  document.getElementById("telainicial").scrollIntoView();
}
    useEffect(() => {
      console.log(check);
    }, [check]);
  
    return(
        <>
<nav class="navbar navbar-light bg-light">
<ul style={{ display: "flex", listStyleType: "none", padding: 0, fontSize:"150%"}}>
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
         <li onClick={handleIntroducao}>Inicio</li><br/>
         <li onClick={desafio}>Desafio</li>
         <li onClick={Outrastec}>Outras tecnologias</li>
          </ul>
          <a  href="https://www.instagram.com/2eeteclg">
          <img src="87390.png" style={{width:"50px", height:"50px", marginRight:"50px"}} alt="" />
          </a>
      </nav>
      {check && <Diabo/>}
    </>
)
}