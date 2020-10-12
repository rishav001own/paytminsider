import React from 'react';

import './App.scss';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import Loader from './components/Spinner/Loader'

import moment from "react-moment";

import {getTopStories,getComments} from './api/api';
class App extends React.Component {
  state={
    posts:[
      {
        user:null,
        id:null,
        date:null,
        title:null,
        type:null,
        url:null,
        points:null,
        comments:null
      }
    ],
    comments:[
      {
        user:null,
        id:null,
        parent:null,
        text:null,
        time:null
      }
    ],
    
  }
  render(){
  return (
    <div className="App">
      <h1>fvsnpm audi</h1>
      <Loader/>
    </div>
  );
}
}

export default App;
