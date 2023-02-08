import { useEffect, useState } from 'react'
import { MostraDados } from '../components/MostraDados';
import './style.css';

export const Home = () => {
  const [dadosApi, setDadosApi] = useState([]);
  const [inputCep, setInputCep] = useState('');
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1)
  }

  useEffect(() => {
    fetch(`https://cep.awesomeapi.com.br/json/${inputCep}`)
    .then(Response => Response.json())
    .then(res => setDadosApi(res))
    .catch(e => setDadosApi([]))
    
  }, [count])

  return (
    <div className='container'>
      <h1>Buscar Cep</h1>

      <div className='inputs'>
        <input type="text" onChange={e => setInputCep(e.target.value)} placeholder='digite o seu CEP...'/>
        <button onClick={handleClick}>procurar</button>
      </div>

      {dadosApi.status == 404 ? " " : <MostraDados dadosApi={dadosApi}/>}
    </div>
  )
}

