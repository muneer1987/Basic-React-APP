var React = require('react');
var ReactBootstrap = require('react-bootstrap')
import {Carousel,CarouselItem,CarouselCaption,Modal,ModalBody} from 'react-bootstrap';

module.exports = React.createClass({

getDefaultProps:function(){
	return {video_data:{},PlayableVideo:{}}
},
getInitialState:function(){
	return {index:0,direction:'next',data:{},showModal: false}
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
openModalBox:function(data,e){
	debugger;
	var session_data = JSON.parse(sessionStorage.getItem('video_data'));
		session_data.map(function(row){

			if(data.id == row.id)
				row.view = true;
			return row;
		});

	sessionStorage.setItem('video_data',JSON.stringify(session_data));
	this.setState({ showModal: true,PlayableVideo:data});
},
closeModalBox:function() {
    this.setState({ showModal: false,PlayableVideo:{} });
  },
render:function(){
		var data = this.props.data;
		return (
				

				<div>
					{(this.state.showModal) ?
							<Modal show={this.state.showModal} onRequestHide={this.closeModalBox} bsSize='large'>
						         <div className='modal-body'>
						            <h4>Text in a modal</h4>
						            <video width={this.state.PlayableVideo.contents[0].width} height={this.state.PlayableVideo.contents[0].height} controls poster={this.state.PlayableVideo.images[0].src}>
									  <source src={this.state.PlayableVideo.contents[0].url} type="video/mp4" />
									  Your browser does not support HTML5 video.
									</video>
						          </div> 
						     </Modal>
						     : null
				 	}
				<Carousel activeIndex={this.state.index} direction={this.state.direction} onSelect={this.handleSelect}>
			        {data.map(function(row,key){
							 console.log("asdasdsad ",row.id)       
									
									return (<CarouselItem >
														<img onClick={this.openModalBox.bind(this,row)} width={row.images[0].width} height={row.images[0].height} alt="150x150" src={row.images[0].url}/>
														<div className="carousel-caption">
															<p>{row.title}</p>
														</div>
													</CarouselItem>) 
											
							        
							}.bind(this))
			        }
			    </Carousel>
			    </div>
			);


	}

});