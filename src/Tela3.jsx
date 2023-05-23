import "./Css.css"
export default function Tela3(){
    return(
        <>
        <div id="tela3">
              <div className="titulo inicial">
            <h2>CSS</h2>
            <p> Cascading Style Sheets</p>
        </div>
      <div style={{backgroundColor:"#369ad7"}} className="card-shadow1">
  <p>
  <p style={{fontSize:"150%"}}>HTML é a espinha dorsal do frontend. É uma linguagem de marcação que permite estruturar o conteúdo do site, definindo elementos como cabeçalhos, parágrafos, imagens, links e formulários. Com o HTML, os desenvolvedores podem organizar e hierarquizar o conteúdo, facilitando a formatação e a acessibilidade.</p><br/>
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
      <img src="logo-gaa056c9a9_1280.png"className="htmlfotos" id="fotos" alt="" />
      </div>
      </div>
        </>
    )
}