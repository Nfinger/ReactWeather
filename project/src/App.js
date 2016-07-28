import React from "react";
import {Router, IndexRoute, Route, hashHistory} from "react-router";
import MainContainer from "./containers/MainContainer";
import HomeContainer from "./containers/HomeContainer";
import ForecastContainer from "./containers/ForecastContainer";

class App extends React.Component {
    render() {
        return(
        	<Router history={hashHistory}>
        		<Route path='/' component={MainContainer}>
        			<IndexRoute component={HomeContainer}></IndexRoute>
        			<Route path='/forecast/:city' component={ForecastContainer}></Route>
        		</Route>
        	</Router>
        )
    }
}

export default App;
