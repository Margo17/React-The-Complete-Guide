import React, { Component } from 'react';

import './App.css';
import Modal from './components/Modal/Modal';
import Backdrop from './components/Backdrop/Backdrop';
import List from './components/List/List';

class App extends Component {
	state = {
		modalIsOpening: null,
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
				{this.state.showBlock && (
					<div
						style={{
							backgroundColor: 'red',
							width: 100,
							height: 100,
							margin: 'auto',
						}}
					></div>
				)}
				<Modal show={this.state.modalIsOpening} closed={this.closeModal} />
				<Backdrop show={this.state.modalIsOpening} />
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
