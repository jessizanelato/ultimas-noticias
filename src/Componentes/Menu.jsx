import React from 'react';
import {Link} from 'react-router-dom';

function Menu(props) {
	return (
		<div className="nav-scroller py-1 mb-2">
            <nav className="nav d-flex justify-content-between">
            {props.categorias.map((categoria, i) => {
            return(
                <Link className={props.categoriaAtiva === categoria.url ? 'nav-link active p-2 text-muted' : 'nav-link p-2 text-muted'} 
                to={'/categoria/'+categoria.url} key={i}>{categoria.nome}</Link>
            );})}
            </nav>
        </div>
	);
}

export default Menu;

