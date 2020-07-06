import React, { useState } from 'react';
import axios from 'axios';
import * as S from './styled'
import { useHistory } from 'react-router-dom'

function App(props) {
  const history = useHistory();
  const [ usuario, setUsuario ] = useState('ditto')
  const [ erro, setErro] = useState(false)
  function handlePesquisa() { 
	axios.get(`https://pokeapi.co/api/v2/pokemon/${usuario}`).then(resp => {
		console.log(resp);
		const pokemon = resp.data;
		localStorage.setItem('pokemon', JSON.stringify(pokemon));
		setErro(false);
		history.push('/pokemon');		
	})
	.catch(err => {
		setErro(true);		
	});
  }
  return (
    <S.Container>
    <S.Content>
    <S.Input name="usuario" id="usuario" className="usuarioInput" placeholder="Pokemon" value={usuario} onChange={e => setUsuario(e.target.value) } />
	<S.Button type="button" onClick={handlePesquisa}>Pesquisar</S.Button>
    </S.Content>
	{ erro ? <S.ErrorMsg>Ocorreu um erro. Tente novamente.</S.ErrorMsg> : '' }
	</S.Container>
  );
}

export default App;