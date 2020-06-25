import React from 'react';

function Topo(props) {
	return (
		<header className="blog-header py-3">
            <div className="row flex-nowrap justify-content-between align-items-center">
                <div className="col-4">
                <img src={props.logo} height="40px" alt="Logo" />
                </div>
                <div className="col-4 text-center">
                    <a className="blog-header-logo text-dark" href="/">{props.titulo}</a>
                </div>
                <div className="col-4"></div>
            </div>
        </header>
	);
}

export default Topo;

