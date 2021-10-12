import React,{useState} from 'react';
import styled from "@emotion/styled"
const Contenedor = styled.div`
  display:flex;
  align-items:center;
  padding-top:5rem;
  flex-direction:column;
`;
const Boton =styled.button` 
  background: -webkit-linear-gradient(top left,#007d35 0%,#007d35 40%,#0f574e 100%);
  background-size:300px;
  font-family:Arial,Helvetica,sans-serif;
  color:#fff;
  margin-top:3rem;
  padding:1 rem 3rem;
  font-size:2rem;
  border: 2px solid black
`;
function App() {
  const [frase, guardarFrase] = useState([''])
  const [vacio, setvacio] = useState(true)
  const consultarAPI = async()=>{
    const api = await fetch('https://breaking-bad-quotes.herokuapp.com/v1/quotes')
    const frase = await api.json()
    guardarFrase(frase[0])
    setvacio(false)
  }
  
  const quitarFrase = e =>{
    setvacio(true)
  }

  return (
    <Contenedor >
      {vacio?null:
      <div>
      <h2 className="frase">Autor: {frase.author}</h2>
      <h2 className="frase">Frase: {frase.quote}</h2>
      </div>
      }
      
    

      <Boton onClick={consultarAPI}>Obtener frase</Boton>
      <Boton onClick={quitarFrase}>quitar frase</Boton>
    </Contenedor>
  );
}

export default App;
