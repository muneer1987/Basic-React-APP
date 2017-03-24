var React = require('react');
var ReactBootstrap = require('react-bootstrap')
import {Carousel,CarouselItem,CarouselCaption} from 'react-bootstrap';

module.exports = React.createClass({

getDefaultProps:function(){
	return {video_data:{}}
},
getInitialState:function(){
	return {index:0,direction:'next',data:{}}
},
handleSelect(selectedIndex, e) {
	    //alert('selected=' + selectedIndex + ', direction=' + e.direction);
	    this.setState({
	      index: selectedIndex,
	      direction: e.direction
	    });
	},

getCraouselItem:function(){
	var data = this.props.data;
	console.log("adasds ",data)	;				
				    										
},
render:function(){
		var data = this.props.data;
		return (

				<Carousel activeIndex={this.state.index} direction={this.state.direction} onSelect={this.handleSelect}>
			        {data.map(function(row,key){
							 console.log("asdasdsad ",row.id)       
									
									return (<CarouselItem>
														<img width="150" height="150" alt="150x150" src={row.thumbnailUrl}/>
														<div className="carousel-caption">
															<p>{row.title}</p>
														</div>
													</CarouselItem>) 
											
							        
							}.bind(this))
			        }
			    </Carousel>

			);


	}

});