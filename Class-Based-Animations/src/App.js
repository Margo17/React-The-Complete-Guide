import React, { Component } from 'react';
import Transition from 'react-transition-group/Transition';

import './App.css';
import Modal from './components/Modal/Modal';
import Backdrop from './components/Backdrop/Backdrop';
import List from './components/List/List';

class App extends Component {
	state = {
		modalIsOpening: false,
		showBlock: false,
	};

	showModal = () => {
		this.setState({ modalIsOpening: true });
	};

	closeModal = () => {
		this.setState({ modalIsOpening: false });
	};

	render() {
		return (
			<div className='App'>
				<h1>React Animations</h1>
				<button
					className='Button'
					onClick={() =>
						this.setState((prevState) => ({ showBlock: !prevState.showBlock }))
					}
				>
					Toggle
				</button>
				<br />
				<Transition
					in={this.state.showBlock}
					timeout={500}
					mountOnEnter
					unmountOnExit
					// additional props for manipulating transitional states
					onEnter={() => console.log('onEnter')}
					onEntering={() => console.log('onEntering')}
					onEntered={() => console.log('onEntered')}
					onExit={() => console.log('onExit')}
					onExiting={() => console.log('onExiting')}
					onExited={() => console.log('onExited')}
				>
					{(state) => (
						<div
							style={{
								backgroundColor: 'red',
								width: 100,
								height: 100,
								margin: 'auto',
								transition: 'opacity 0.5s ease-out',
								opacity:
									state === 'exited'
										? 0
										: state === 'entering'
										? 0
										: state === 'entered'
										? 1
										: 0,
							}}
						/>
					)}
				</Transition>
				<Modal show={this.state.modalIsOpening} closed={this.closeModal} />
				{this.state.modalIsOpening && <Backdrop show />}
				<button className='Button' onClick={this.showModal}>
					Open Modal
				</button>
				<h3>Animating Lists</h3>
				<List />
			</div>
		);
	}
}

export default App;
