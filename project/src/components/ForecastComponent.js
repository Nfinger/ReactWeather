import React from 'react';
import { kelToFar,kelToCel, getDate } from "../utils/conversionHelpers"
import c3 from "c3";


class C3Chart extends React.Component {
    constructor(props) {
        super(props);
    }
    componentDidMount(){
    	var day1 = kelToFar(this.props.data[0]["temp"]["day"])
    	var day2 = kelToFar(this.props.data[1]["temp"]["day"])
    	var day3 = kelToFar(this.props.data[2]["temp"]["day"])
    	var day4 = kelToFar(this.props.data[3]["temp"]["day"])
    	var day5 = kelToFar(this.props.data[4]["temp"]["day"])
    	
       c3.generate({
        bindto: '#chart',
        data: {
          columns: [
            ['Temperature',day1,day2,day3,day4,day5],
          ]
        },

        axis: {
	    	x: {
		        label: { // ADD
		          text: 'Days',
		          position: 'middle',
		        }
		      },
	      y: {
	        label: { // ADD
	          text: 'Temperature (˚F)',
	          position: 'outer-middle'
	        }
	      }
	  	 }
        }) 
    }

    render(){

        return <div id="chart"></div>
    }
    
}

function FullDataList(props){
	var pressure = props.items["pressure"]
	var humidity = props.items["humidity"]
	return(
		<ul>
			<li>Humidity: {humidity}</li>
			<li>Pressure: {pressure} hPa</li>

		</ul>
	)
}

function WholeList(props){
	var high = kelToFar(props.items["temp"]["max"])
	var low = kelToFar(props.items["temp"]["min"])
	return(
		<ul className='activator'>
			<li>High: {high}˚F</li>
			<li>Low: {low}˚F</li>
			<li>Today we expect {props.items["weather"][0]["description"]}</li>
		</ul>
	)
}

function Image(props){
	var url = "http://openweathermap.org/img/w/"+props.items["weather"][0]["icon"]+".png"
	return <img className="activator" src={url} />
}

function Date(props){
	var day = getDate(props.items['dt'])
	day = day.split(':',1)
	return props.action === true ?
	<span className="card-title black-text">{day}<i className="material-icons right">close</i></span>
	:
	<span className="card-title black-text activator">{day}</span>
}



class ForecastComponent extends React.Component {
    constructor(props) {
        super(props);
        this.displayName = 'ForecastComponent';
        this.state={
        	img:''
        }
    }
    render() {
        return this.props.data.length === 0 ?
        <div>
        	<h1>Loading</h1>
        </div>
        :<div>
        	<div className="row card-row">
		        <div className="col s12 m10">
		          <div className="card">
		            <div className="card-image">
		              <Image items={this.props.data[this.props.number % 5]}/>
		              <Date items={this.props.data[this.props.number % 5]} />
		            </div>
		            <div className="card-content ">
		              <WholeList key={this.props.data.id} items={this.props.data[this.props.number % 5]} />
		            </div>
		            <div className="card-reveal">
					  <Date items={this.props.data[this.props.number % 5]} action= {true}/>
				      <FullDataList key={this.props.data.id} items={this.props.data[this.props.number % 5]} />
				    </div>
		          </div>
		        </div>
		      </div>
		      <C3Chart data={this.props.data} /> 	
        </div>
    }
}
		              // <img src="http://openweathermap.org/img/w/"+{this.props.data[0]['weather'][0]["icon"]}+"jpg" />

export default ForecastComponent;
