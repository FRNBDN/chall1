import React from 'react';
import css from "./css/NavBarSimple.module.css";

class NavBarSimple extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            greeting:'hello',
            buttonText: 'login',

        };
    }

    handleClick(){
        this.setState((prevState, prevProps) => {
            console.log('Prev props:', prevProps)
            console.log('Prev state:', prevState)
            return{
                greeting: prevState.greeting === 'hello'?'welcome back':'hello',
                buttonText: prevState.buttonText === 'login'?'logout':'login'
            }
        }         
        );

    }

    render(){
        return (
            <div className = {css.NavBar}>
                <h1>My Gallery</h1>
                <div>
                    <span>{this.state.greeting}</span>
                    <button onClick={()=> this.handleClick()}>{this.state.buttonText}</button>
                </div>
                
            </div>
        );
    }
}
export default NavBarSimple;