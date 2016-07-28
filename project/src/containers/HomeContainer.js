import React from 'react';
import { Render } from 'react-dom';

class HomeContainer extends React.Component {
    constructor(props) {
        super(props);
        this.displayName = 'HomeContainer';
        this.state= {
        	city:''
        }
        this.update = this.update.bind(this)
        this.sendCity = this.sendCity.bind(this)
    }
    update(e){
    	
    	this.setState({city:e.target.value})
    }
    sendCity(){
    	this.context.router.push({
			pathname: '/forecast/' + this.state.city
		})
    }
    render() {
        return(
        	<div className="row search-container">
			    <form className="col s12">
			      <div className="row search">
			        <div className="input-field col s6">
			          <input onChange={this.update} placeholder="Search by City" type="text" className="validate search" />
			          <label className="search">Location</label>
			        </div>
			       </div>
			       <button onClick={this.sendCity} className="btn waves-effect waves-light" type="submit" name="action">Submit
				     <i className="material-icons right">send</i>
				   </button>
				</form>
			</div>
        );
    }
}

HomeContainer.contextTypes = { router: React.PropTypes.object.isRequired}

export default HomeContainer;
