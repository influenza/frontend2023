import { useEffect, useState } from "react";
import TabControl from "./tabcontrol";

export default function Teste() {
  const [codigo, setCodigo] = useState(`<button id='Button' onclick="app()">Clique aqui</button>
  <!-- Esse é um botão que tem como atributos uma id e um onclick-->`);
  const [codigoCss, setCodigoCss] = useState("#Button{\n\n}\n// Essa é a id do botão, qualquer linha de código aqui refletirá no botão //");
  const [codigoJs, setCodigoJs] = useState(`function app() {

  }/* Essa é uma função do JavaScript, por ela estar ligada ao evento "onclick" do botão, tudo colocado nessa função será executado no clique do botão */`);
  const [colors, setColors] = useState(["red", "orange", "yellow", "green", "blue", "purple", "pink", "brown", "gray"]);

  const handleCor = () => {
    const randomIndex = Math.floor(Math.random() * colors.length);
    const randomColor = colors[randomIndex];
    setCodigo(`<button id='Button' onclick="app()">Clique aqui</button> <!-- Esse é um botão que tem como atributos uma id e um onclick --> `);
    setCodigoCss(`#Button{\n    background: ${randomColor};\n}/* O código muda o fundo do botão toda vez que clicado para uma cor aleatória */`);
    setCodigoJs(`function app() {

    }/* Essa é uma função do JavaScript, por ela estar ligada ao evento "onclick" do botão, tudo colocado nessa função será executado no clique do botão */`);
  };

  const handleMudanca = (event) => {
    setCodigo(event.target.value);
  };

  const handleMudancaCss = (event) => {
    setCodigoCss(event.target.value);
  };

  const handleMudancaJs = (event) => {
    setCodigoJs(event.target.value);
  };
  useEffect(() => {
    const scriptElement = document.createElement('script');
    scriptElement.innerHTML = codigoJs;
    document.getElementById('script').appendChild(scriptElement);
  }, [codigoJs]);

  const handleFuncoes = (e) => {
    console.log(e)
    if (e.target.value === "Alterar cor do botão") {
      handleCor();
    }
    else if (e.target.value === "caixa de texto") {
      handlecaixadetxt()
    }
    else if (e.target.value === "bola") {
      handlebola()
    }
    else if (e.target.value === "tabuada") {
      handletabuada()
    }
  }
  const handlebola = () => {
    setCodigo(`<div id="bola"></div> <!-- Aqui temos uma div que vai servir como a nossa bola -->`)
    setCodigoCss(`#bola {
  width: 100px; /* Define a largura em 100 "pixels" */
  height: 100px; /* Define a altura em 100 "pixels" */
  border-radius: 50%; /* Define a forma circular */
  background-color: blue; /* Cor de fundo da esfera */
}\n`)
    setCodigoJs(`function app() {

    }/* Essa é uma função do JavaScript, por ela estar ligada ao evento "onclick" do botão, tudo colocado nessa função será executado no clique do botão */`);
  }
  const handlecaixadetxt = () => {
    setCodigo(`    <input type="text" onchange="app()" id="txt"/><br/><p id="lblsaida"></p><!-- Aqui temos uma caixa de texto e um parágrafo vazio --> `)
    setCodigoJs(`function app() {
      const txt = document.getElementById("txt").value;
      document.getElementById("lblsaida").textContent = txt;
    }/* Com esse código, tudo que for escrito na caixa de texto será impresso na tela */`)
    setCodigoCss("#Button{\n\n}\n// Essa é a id do botão, qualquer linha de código aqui refletirá no botão //")
  }
  const  handletabuada =()=>{
    setCodigo(`<p>insira um numero</p>\n<input type="text" onchange="app()" id="txt"/><br/><p id="lblsaida"></p> <!-- aqui temos uma caixa de texto e um paragrafo vazio--> `)
    setCodigoJs(`${function app(){
      
      let conjuntotxt="";
      const txt=document.getElementById("txt").value
      if(isNaN(parseInt(txt))){
        console.log(isNaN(parseInt(txt)))
        document.getElementById("lblsaida").textContent="voce deve inserir um termo valido"
      }
      else{
      for (let index = 1; index < 10; index++) {

          let num = parseInt(txt)*index
          conjuntotxt+="Termo"+index.toString()+"°: "+num.toString()+"\n\n"
      }
      document.getElementById("lblsaida").textContent=conjuntotxt
      }

}  
    }/* O código primeiro define duas variáveis, uma referenciando a um texto vazio e a outra referenciando ao texto da caixa de texto. Primeiramente, ele confere se txt é um número. Se ele não for, ele imprime uma mensagem na página. Se for, o código, utilizando o laço de repetição for, faz o valor da caixa de texto vezes os números de 1 a 10 e armazena tudo no conjunto de texto que, no final, vira o conteúdo do card */
    `)
    setCodigoCss("#Button{\n\n}\n// Essa é a id do botão, qualquer linha de código aqui refletirá no botão //")


  }
  return (
    <>
      <style id="style">{codigoCss}</style>
      <script id="script"/>
      <div id="teste">

        <h2>Desafio</h2>
        <p style={{ marginLeft: "20px" }}> Esse é o momento de praticar suas habilidades em HTML, CSS e JavaScript, e criar algo novo baseado nos seus aprendizados.</p>
        <p style={{ marginLeft: "20px" }}> Abaixo existirão três botões que levarão cada um a uma caixa de texto que representam o HTML, CSS e JavaScript do card ao lado.</p>
        <TabControl />
        <div id="txtfas">
          <textarea name="" id="cod1" className="codigo" cols="30" rows="10" value={codigo} onChange={handleMudanca}></textarea>
          <textarea name="" className="codigo" cols="30" rows="10" value={codigoCss} onChange={handleMudancaCss}></textarea>
          <textarea name="" className="codigo" cols="30" rows="10" value={codigoJs} onChange={handleMudancaJs}></textarea>
        </div>
        <div className="card">
          <div className="tools">
            <div className="circle">
              <span className="red box"></span>
            </div>
            <div className="circle">
              <span className="yellow box"></span>
            </div>
            <div className="circle">
              <span className="green box"></span>
            </div>
          </div>

          <div className="card__content">
            <div dangerouslySetInnerHTML={{ __html: codigo }}></div>
          </div>
        </div>
        <div id="select">
          <p>Aqui haverá algumas opções de códigos prefeitos</p>
          <select className="button" onChange={handleFuncoes}>
            <option value="Alterar cor do botão"> Botão com cor aleatória </option>
            <option value="bola"> Criar esfera azul </option>
            <option value="caixa de texto"> Inserir caixa de texto e texto </option>
            <option value="tabuada">Crie uma tabuada</option>
          </select>
        </div>
      </div>
    </>
  );
}
export const arr = document.getElementsByClassName("codigo");