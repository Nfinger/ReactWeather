import React from 'react';
import {Link} from "react-router";

const Links = () =>
	<Link to="/">Weather</Link>


class MainContainer extends React.Component {
    constructor(props) {
        super(props);
        this.displayName = 'MainContainer';
    }
    render() {
        return (
        	<div className="mainContainer">
				<nav>
				  <div className="nav-wrapper">
				    <h1><Links /></h1>
				  </div>
				</nav>
				<div className="container">
				{this.props.children}
				</div>
			</div>
        );
    }
}

export default MainContainer;
