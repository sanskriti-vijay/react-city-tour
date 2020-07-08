import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import Navbar from './components/Navbar';
import TourList from './components/TourList';
//stateless functional component

class App extends React.Component {
  render() {
    return(
      <div>
        <Navbar />
        <TourList />
      </div>
      
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
