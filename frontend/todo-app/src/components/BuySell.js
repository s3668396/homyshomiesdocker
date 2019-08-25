import React from 'react';
import { Link } from 'react-router-dom';
import { Nav, Navbar } from 'react-bootstrap';
import styled from 'styled-components';

getInitialState: function(){
    return {
      initialItems: [
        "IphoneXL",
        "PS4",
        "Tennis racket",
        "Airmax PLus size 13"
      ],
      items: []
    }
 },
 componentWillMount: function(){
   this.setState({items: this.state.initialItems})
 },
 render: function(){
   return (
     <div className="filter-list">
       <input type="text" placeholder="Search" onChange={this.filterList}/>
     <List items={this.state.items}/>
     </div>
   );
 }
});

var List = React.createClass({
 render: function(){
   return (
     <ul>
     {
       this.props.items.map(function(item) {
         return <li key={item}>{item}</li>
       })
      }
     </ul>
   )  
 }
});

React.render(<FilteredList/>