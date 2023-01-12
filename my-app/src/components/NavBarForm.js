import React from 'react';
import css from "./css/NavBarForm.module.css";

class NavBarSimple extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            isLoggedIn: true,

        };
    }

    handleClick(){
        this.setState((prevState) => {
            console.log(prevState);
            return{
             isLoggedIn: prevState.isLoggedIn ? false : true,
            }
        }         
        );

    }

    render(){
        return (
            <div className = {css.NavBar}>
                <h1>My Gallery</h1>
                <NavBarChild
                isLoggedIn={this.state.isLoggedIn}
                handleClick={this.handleButtonClick}
                />
            </div>
        );
    }
}
export default NavBarSimple;