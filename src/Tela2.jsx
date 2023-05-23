import "./Tela2.css"
export default function Tela2(){
    return(
    <div id="tela-2"> 
        <div className="titulo inicial">
            <h2>HTML</h2>
            <p>HyperText Markup Language</p>
        </div>
      <div className="card-shadow1">
  <p>
  <p style={{fontSize:"150%"}}>HTML é a espinha dorsal do frontend. É uma linguagem de marcação que permite estruturar o conteúdo do site, definindo elementos como cabeçalhos, parágrafos, imagens, links e formulários. Com o HTML, os desenvolvedores podem organizar e hierarquizar o conteúdo, facilitando a formatação e a acessibilidade.</p><br/>
  <p style={{fontSize:"150%"}}>Alguns dos elementos mais famosos do HTML são o button, input e p. O elemento button é usado para criar um botão interativo na página. Ele simula um botão físico que os usuários podem clicar para executar uma ação específica atraves do atributo onclick.O elemento input é uma das formas mais comuns de entrada de dados em uma página da web. Ele permite que os usuários insiram informações, como texto, números, seleções de opções e muito mais .O elemento p é usado para criar parágrafos de texto em uma página da web. </p>
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
      <img src="https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582748_1280.png" className="htmlfotos" id="gamer" alt="" />

      <div id="subcon">
      <img src="/fotos/Screenshot_4.png" id="exemplo" alt="" /><br/>
      exemplo do uso do elemento button no html
        </div>
      </div>
      </div>
    )
}