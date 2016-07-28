import React from 'react';
import { getFiveDayWeather } from "../utils/weatherHelpers";
import ForecastComponent from "../components/ForecastComponent"
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';



class ForecastContainer extends React.Component {
    constructor(props) {
        super(props);
        this.displayName = 'ForecastContainer';
        this.state = {
        	weather : [],
            weatherTemp: [],
            number: 0,
            index:0,
            first: true,
        }
       
    }
    getForecast(){
    	getFiveDayWeather(this.props.params.city)
    		.then(function(data){
    			let forecast = data.data.list
    			let forecastArr = []
    			forecast.map(function(d){
    				forecastArr.push(d)
    			})
    			this.setState({weather:forecastArr})
    		}.bind(this))
    }

    // getDay(){
    //     console.log("GET DAY")
    //     this.setState({weatherTemp:this.state.weather[this.state.index]})
    //     if (this.state.index === 5){
    //         this.setState({index:0})
    //     }
    //     else{
    //         this.setState({index:this.state.index + 1})
    //     }
    // }

    componentDidMount(){
    	this.getForecast()
        this.interval = setInterval(() => {this.setState({number: this.state.number + 1});}, 5000);
    }

    // shouldComponentUpdate(nextProps, nextState){
    //     return this.state.number % 5 === 0;
    // }

    // componentWillUpdate(nextProps, nextState){
    //     this.getDay()
    // }


    componentWillUnmount() {
        clearInterval(this.interval);
    }


    render() {  
        return <div>
        <h1 className="city">{this.props.params.city}</h1>
        <ReactCSSTransitionGroup transitionName="example" transitionEnterTimeout={500} transitionLeaveTimeout={300} transitionAppear={true} transitionAppearTimeout={500}>
          <ForecastComponent data={this.state.weather} number={this.state.number}/>
        </ReactCSSTransitionGroup>
        </div>;
    }
}

export default ForecastContainer;
