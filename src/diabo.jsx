const Diabo = ()=>{
    const handleIntroducao = ()=>{
        document.getElementById("tela-1").scrollIntoView();
    }
    const OqueFrontend = ()=>{
        document.getElementById("front").scrollIntoView();
    }
    const Html = ()=>{
        document.getElementById("tela-2").scrollIntoView();
    }
    const Css = ()=>{
        document.getElementById("tela-3").scrollIntoView();
    }
    const JS = ()=>{
        document.getElementById("tela-4").scrollIntoView();
    }
    const desafio = ()=>{
        document.getElementById("teste").scrollIntoView();
    }
    const Outrastec = ()=>{
        document.getElementById("telainicial").scrollIntoView();
    }
    const boot = ()=>{
        document.getElementById("telainicial1").scrollIntoView();
    }
    return(
    <div id="diabo" style={{width:"400px",backgroundColor:"#d5bdaf",margin:"0px", position:"absolute", zIndex:"10000"}}> 
    <ul id="peido"> <li><h4 onClick={handleIntroducao}>Introducao</h4></li><li><h4 onClick={OqueFrontend}>O que e Frontend</h4></li><li><h4 onClick={Html}>Principais tecnologias</h4></li><li onClick={Html}> Html<br/></li><li onClick={Css}>Css</li><li onClick={JS}>JS</li><li onClick={desafio}>Desafio</li><li onClick={Outrastec}>Outras tecnologias</li><li onClick={Outrastec}>React</li><li onClick={boot}>Bootstrap</li></ul></div>
    )
}
export default Diabo