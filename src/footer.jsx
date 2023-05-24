
export default function Rodape(){
    const footerStyle = {
        backgroundColor: '#d6ccc2',
        textAlign: 'center',
        padding: '10px',
        left: '0',
        bottom: '0',
        width: '100%'
      };
    
      return (
        <footer style={footerStyle}>
          <div>
            <p>Obrigado por assistir nossa apresentação!!</p>
            <p>Informacoes do projeto:</p>
            <p>trabalho para semana da informatica com a finalidade de apresentar a area do front-end e o apresentar tambem o trabalho de desenvolvedor front-end </p>
            <p>tecnologias usadas: React, CSS, HTML e javascript</p>
            <p>dominio:Netlify repositorio git</p>
          </div>
        </footer>
      );
    };