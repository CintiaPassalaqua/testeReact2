import React, { useEffect, useState } from 'react';
import * as S from './styled';
import { useHistory } from 'react-router-dom';

export default function Pokemon() {
	const [ pokemon, setPokemon ] = useState([]);
	const [ nome, setNome ] = useState('');
	const [ imagem, setImagem ] = useState('');
	useEffect(() => {
		const history = useHistory();
		let pokemonData = JSON.parse(localStorage.getItem('pokemon'));
		if (pokemonData !=  null) {
			setNome(pokemonData.species.name);
			setImagem(pokemonData.sprites.front_default);
			setPokemon([1, 2, 3]);
			console.log(pokemonData);
			localStorage.clear();
		} else {
			history.push('/');
		}
	},[]);
	return (
	<S.Container>
		<S.Title>{ nome }</S.Title>
		<S.ImagemPerfil src={imagem} />
		<S.List>
		{ pokemon.map(habilidade => {
			return (
				<S.ListItem key={habilidade}>oi</S.ListItem>
			)
		}) }
		</S.List>		
		<S.LinkHome to="/">Voltar</S.LinkHome>
	</S.Container>
	)
}