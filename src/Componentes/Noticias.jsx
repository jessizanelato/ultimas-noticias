import React, { Component } from 'react';
import axios from 'axios';
import CardNoticia from './CardNoticia';

class Noticias extends Component {
    constructor(){
		super();
		// chave de acesso a API
		this.chaveAcesso = 'e326f723609f4023a0c9182265801b9c';
		// endereço da API
		this.urlAPI = 'https://newsapi.org/v2/top-headlines?country=br&category=';
        this.state = {
            noticias: []
        }
        this.style = {
            corNomeOrigemNoticia: "#8DB5E9"
        }
    }

	// método principal que faz a chamada na API e define o estado das notícias
    definirNoticias(){
        axios.get(this.urlAPI + this.props.categoriaAtiva + '&apiKey=' + this.chaveAcesso)
		.then(response => {
			this.setState({ noticias: response.data.articles });
		})
		.catch(error => {
			console.log(error)
		})
    }	
	// método chamado quando o componente termina de atualizar (clique no link)
    componentDidUpdate(prevProps) {
        if(prevProps.categoriaAtiva !== this.props.categoriaAtiva){
            this.definirNoticias();
        }
	}
	// método chamado no carregamento da página (refresh)
    componentDidMount() {
        this.definirNoticias();
    }
    render() {
        if(this.state.noticias.length){
			return (<div className="row mb-2">
				{this.state.noticias.map((noticia, i) => (
					<CardNoticia key={i} name={noticia.source.name} url={noticia.url} titulo={noticia.title}></CardNoticia>
				))}
				</div>);
        }else{
            return (<div>Carregando...</div>);
        }
    }

}

export default Noticias;