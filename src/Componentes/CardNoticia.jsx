import React from 'react';

function CardNoticia(props) {
	return (
		<div className="col-md-6">
			<div className="card flex-md-row mb-4 shadow-sm h-md-200">
				<div className="card-body d-flex flex-column align-items-start">
					<strong className="d-inline-block mb-2">{props.name}</strong>
					<h4 className="mb-0">
						<a className="text-dark" href={props.url} target="_new">{props.titulo}</a>
					</h4>
				</div>
			</div>
		</div>
	);
}

export default CardNoticia;

