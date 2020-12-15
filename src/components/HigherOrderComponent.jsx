import React, { Component } from 'react';

class HigherOrderComponent extends Component {
    constructor(){
        super();
        this.state = {
            userData: [
                { id: '1', name: 'Joe', user_type: 'Developer', age:31, years:11 },
                { id: '2', name: 'Hill', user_type: 'Designer', age:26, years:4 },
                { id: '3', name: 'John', user_type: 'Teacher', age:24,years: 2},
                { id: '4', name: 'Sam', user_type: 'Entreprenuer', age:58,years:25},
                { id: '5', name: 'Jack', user_type: 'Designer', age:43, years: 18}

            ]
        }
    }
    renderItems = () => {
        const data = this.state.userData;
        const mapRows = data.map((item) => (
            <React.Fragment key={item.id}>
                <li className="list-elements">
                    {/* Passing unique value to 'key' prop, eases process for virtual DOM to remove specific element and update HTML tree  */}
                    <span>Id    : {item.id}</span>&nbsp;&nbsp;&nbsp;&nbsp;
                    <span>Name  : {item.name}</span>&nbsp;&nbsp;&nbsp;&nbsp;
                    <span>User Type: {item.user_type}</span>
               </li>
            </React.Fragment>
        ));
        return mapRows;
    };

    renderusertype (){
        const data = this.state.userData;
        const user_type = data.filter((item) => {
            if(item.user_type=="Designer"){
                return true;
        }
        }).map(item=>{
            return (
                <li key={item.id} className="list-elements">
                <span>ID: {item.id}</span>&nbsp;&nbsp;&nbsp;&nbsp;
                <span>Name: {item.name}</span>&nbsp;&nbsp;&nbsp;&nbsp;
                <span>User Type: {item.user_type}</span>
            </li>
            )
        })    
        
        return user_type;
    }

    renderwithletter (){
        const data = this.state.userData;
        const letter = data.filter((item) => {
            if(item.name[0]==="J"){
                return true;
        }
        }).map(item=>{
            return (
                <li key={item.id} className="list-elements">
                <span>ID: {item.id}</span>&nbsp;&nbsp;&nbsp;&nbsp;
                <span>Name: {item.name}</span>&nbsp;&nbsp;&nbsp;&nbsp;
                <span>User Type: {item.user_type}</span>
            </li>
            )
        })    
        
        return letter;
    }


    renderwithage (){
        const data = this.state.userData;
        const age = data.filter((item) => {
            if(item.age>28 && item.age<=50){
                return true;
        }
        }).map(item=>{
            return (
                <li key={item.id} className="list-elements">
                <span>ID: {item.id}</span>&nbsp;&nbsp;&nbsp;&nbsp;
                <span>Name: {item.name}</span>&nbsp;&nbsp;&nbsp;&nbsp;
                <span>User Type: {item.user_type}</span>
            </li>
            )
        })    
        
        return age;
    }

    rendertotalyears (){
        const data = this.state.userData;
        const total = data.filter((item) => {
            if(item.user_type=="Designer"){
                return true;
        }
        }).reduce((acc,item)=>acc+=item.years,0)
        
        return total;
    }

    render() {

        const mystyle = {
            color: "white",
            backgroundColor: "DodgerBlue",
            padding: "10px",
            fontFamily: "Arial"
          };
          const box={
            color:"blue",
            width:"100%",
            height:"150px",
            border:"2px solid blue",
                        
          };
        return (
           // instead of a parent div tag we can also use React.Fragment
          <React.Fragment>
          <h1 style={mystyle}>Display all items</h1>
          <div style={box} className="display-box">
          <ul>{this.renderItems()} </ul>
          </div>
          <h1 style={mystyle}>Display all items Based on User Type</h1>
          <div style={box} className="display-box">
          <ul>{this.renderusertype()} </ul>
          </div>
          <h1 style={mystyle}>Display all items Start with 'J'</h1>
          <div style={box} className="display-box">
          <ul>{this.renderwithletter()} </ul>
          </div>
          <h1 style={mystyle}>Display items based on age</h1>
          <div style={box} className="display-box">
          <ul>{this.renderwithage()} </ul>
          </div>
          <h1 style={mystyle}>Total experience</h1>
          <div style={box} className="display-box">
          <ul>{this.rendertotalyears()} </ul>
          </div>
          
        </React.Fragment>
        );
    }
}

export default HigherOrderComponent;