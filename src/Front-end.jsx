import "./front-end.css"
export default function Frontend(){
    return(
        <div id="front">
        <div className="titulo inicial">
            <h2>Front-end</h2>
            <p>Introducao</p>
        </div>
      <div className="card-shadow1" style={{backgroundColor:"#edede9"}}>
  <p style={{fontSize:"150%"}}>       
    
            O frontend é uma das áreas fundamentais no desenvolvimento de aplicações web. Ele se concentra na criação e
            no design das interfaces com as quais os usuários interagem diretamente. Através do frontend, os desenvolvedores
            podem projetar experiências visuais atraentes e funcionais, além de garantir uma navegação intuitiva e uma
            interação eficiente.
            Dentro do frontend existe varias tecnologias sendo as principais HTML, CSS e JavaScript
  </p>

        </div>
    {/* <div id="carrosoul">
      <ul id="lista">
        <li>
          <img src="/download (1).png" alt="" />
        </li>
        <li>
          <img src="/Untitled-54.png" alt="" />
        </li>
      </ul>
      </div>*/}
      <div className="con">
      <img src="https://cdn-icons-png.flaticon.com/512/6943/6943958.png" id="P"className="htmlfotos" alt="" />
      </div>
      </div>
    )
}