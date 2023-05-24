import "./Tela2.css"
export default function Tela2(){
    return(
    <div id="tela-2"> 
        <div className="titulo inicial">
            <h2>HTML</h2>
            <p className="subs">HyperText Markup Language</p>
        </div>
      <div className="card-shadow1">
  <p>
  <p style={{fontSize:"150%"}}>HTML é a espinha dorsal do front-end. É uma linguagem de marcação que permite estruturar o conteúdo do site, definindo elementos como cabeçalhos, parágrafos, imagens, links e formulários. Com o HTML, os desenvolvedores podem organizar e hierarquizar o conteúdo, facilitando a formatação e a acessibilidade.</p><br/>
<p style={{fontSize:"150%"}}>Alguns dos elementos mais famosos do HTML são o button e o input. O elemento button é usado para criar um botão interativo na página. Ele simula um botão físico que os usuários podem clicar para executar uma ação específica através do atributo onclick. O elemento input é uma das formas mais comuns de entrada de dados em uma página da web. Ele permite que os usuários insiram informações, como texto, números, seleções de opções e muito mais.</p>
<p style={{fontSize:"150%"}}>Os atributos HTML desempenham um papel importante na personalização e modificação dos elementos HTML. O atributo id é usado para identificar exclusivamente um elemento, enquanto o atributo class agrupa elementos relacionados. Além disso, existem os eventos que são ações dentro do código que conectam o HTML com o JavaScript.</p>
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
      <img src="https://linuxhint.com/wp-content/uploads/2022/06/Close-Button-CSS-1.png" id="exemplo" alt="" /><br/>
      Exemplo do codigo basico do html
        </div>
      </div>
      </div>
    )
}