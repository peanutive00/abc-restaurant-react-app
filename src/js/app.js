/**
 * app.js
 */

 import React from 'react';
 import ReactDOM from 'react-dom';
 import '../css/style.css'
 import {Routes} from './Routes'
 import {NavBar} from './component/NavBar/NavBar'

 class App extends React.Component {
   render() {
     return (
       <div class="container">
        <NavBar/>
        <Routes/>
       </div>
     )
   }
 }

 ReactDOM.render(
   <App/>,
   document.getElementById('app-root')
 );
