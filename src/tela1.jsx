import "./foguete.css"
import "./Tela1.css"
export default function Tela1(){
    return(
      <div id="tela-1">
        <div className="rocket">
    <div className="rocket-body">
      <div className="body"></div>
      <div className="fin fin-left"></div>
      <div className="fin fin-right"></div>
      <div className="window"></div>
    </div>
    <div className="exhaust-flame"></div>
    <ul className="exhaust-fumes">
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
    </ul>
    <ul className="star">
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
    </ul>
  </div> 
  <div className="card-shadow">
  <p style={{fontSize:"250%"}}>
  Semana da informatica 2023
  <p style={{fontSize:"100%"}}>Tema:FrontEnd</p>
  </p>
</div>
</div>
    ) 
}