import React from 'react';

import CSSTransition from 'react-transition-group/CSSTransition';
import './Modal.css';

const animationTiming = {
	enter: 400,
	exit: 300,
};

const modal = (props) => {
	return (
		<CSSTransition
			in={props.show}
			timeout={animationTiming}
			mountOnEnter
			unmountOnExit
			classNames={{
				enter: '',
				enterActive: 'ModalOpening',
				exit: '',
				exitActive: 'ModalClosing',
			}}
		>
			<div className='Modal'>
				<h1>A Modal</h1>
				<div></div>
				<button className='Button' onClick={props.closed}>
					Dismiss
				</button>
			</div>
		</CSSTransition>
	);
};

export default modal;
