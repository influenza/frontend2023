import { useEffect, useState } from "react";
import TabControl from "./tabcontrol";

export default function Teste() {
  const [codigo, setCodigo] = useState(`<button id='Button' onclick="ppp()" >  clique aqui</button>  `);
  const [codigoCss, setCodigoCss] = useState("#Button{\n\n}");
  const [codigoJs, setCodigoJs] = useState(`function ppp(){
    console.log("Oi") 
  }`);
  const [colors, setColors] = useState(["red", "orange", "yellow", "green", "blue", "purple", "pink", "brown", "gray", "black"]);

  const handleCor = () => {
    const randomIndex = Math.floor(Math.random() * colors.length);
    const randomColor = colors[randomIndex];
    setCodigo(`<button id='Button' onclick="ppp()" >  clique aqui</button>  `);
    setCodigoCss(`#Button{\n    background:${randomColor} ;    \n}`);
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
    if (e.target.value === "Botao-cor") {
      handleCor();
    }
    else if(e.target.value==="caixa de texto"){
      handlecaixadetxt()
    }
    else if(e.target.value ==="bola"){
      handlebola()
    }
    else if(e.target.value === "tabuada"){
      handletabuada()
    }
  }
  const handlebola=()=>{
  setCodigo(`<div id="bola"></div>`)
  setCodigoCss(`#bola{  width: 100px;\n
    height: 100px;\n
    border-radius: 50%; /* Define a forma circular */\n
    background-color: blue; /* Cor de fundo da esfera */}\n`)
  }
  const handlecaixadetxt = ()=>{
    setCodigo(`    <input type="text" onchange="app()" id="txt"/><br/><p id="lblsaida"></p> `)
    setCodigoJs(`function app(){
      const txt=document.getElementById("txt").value
      document.getElementById("lblsaida").textContent=txt
    }`)
  }
  const  handletabuada =()=>{
    setCodigo(`    <input type="text" onchange="app()" id="txt"/><br/><p id="lblsaida"></p> `)
    setCodigoJs(`${function app(){
      let conjuntotxt="";
      const txt=document.getElementById("txt").value
      for (let index = 1; index < 10; index++) {
        let num = parseInt(txt)*index
        console.log(index)
        console.log(num)
        conjuntotxt+="Termo"+index.toString()+"°: "+num.toString()+"\n\n"
      }
      document.getElementById("lblsaida").textContent=conjuntotxt}
    }`)
  }
  return (
    <>      <style id="style">{codigoCss}</style>
    <script id="script"/>
    <div id="teste">
      <div>
        <h2>Desafio</h2>
        <p id=""> Esse e o momento de praticar suas habilidades em html css e javascript, e criar algo novo baseado nos aprendiasados </p>
        <TabControl />
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
      <p>Aqui havera algumas opcoes de codigos prefeitos</p>
      <select className="button" onChange={handleFuncoes}>
        <option value="Alterar cor do botão"> Alterar cor do botão </option>
        <option value="bola"> criar esfera azul </option>
        <option value="caixa de texto"> Inserir caixa de texto e texto </option>
        <option value="tabuada">Crie uma tabuada</option>
      </select>
    </div>
    </>
  );
}
export const arr = document.getElementsByClassName("codigo")
