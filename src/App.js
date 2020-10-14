import React from 'react';
import logo from './logo.svg';
import './App.css';
import Title from './components/Title/Title.js';
import Search from './components/Search/Search.js';
import Plot from './components/Plot/Plot.js';

function App() {
    return (
	<div className="AppContainer">
	    <Title />
	    <Search />
	    <Plot />
	</div>
  );
}

export default App;
