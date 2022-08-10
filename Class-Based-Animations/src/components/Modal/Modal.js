import React from 'react';

import './Modal.css';

const modal = (props) => {
	const cssClasses = [
		`Modal`,
		props.show
			? 'ModalOpening'
			: props.show === false
			? 'ModalClosing'
			: 'ModalClosed',
	];

	return (
		<div className={cssClasses.join(' ')}>
			<h1>A Modal</h1>
			<div></div>
			<button className='Button' onClick={props.closed}>
				Dismiss
			</button>
		</div>
	);
};

export default modal;
