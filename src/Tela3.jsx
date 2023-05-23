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
  <p style={{fontSize:"150%"}}>CSS, sigla para Cascading Style Sheets (Folhas de Estilo em Cascata), é uma linguagem de estilo utilizada para definir a aparência e o design de páginas da web. Ela trabalha em conjunto com o HTML para estruturar e formatar os elementos presentes em uma página, permitindo que os desenvolvedores tenham controle completo sobre a apresentação visual do conteúdo.</p><br/>
  </p>
  <p style={{fontSize:"150%"}}>Podemos utilizar o css atraves do elemento style, de um arquivo css separado ou atraves do atributo style, o css pode ser manipulado atraves de id, class, tipos de elementos e ate atraves dos "filhos"</p>
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
      <img src="https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582747_1280.png"className="htmlfotos" id="fotos" alt="" />
      </div>
      </div>
        </>
    )
}