var React = require('react');


module.exports = React.createClass({
	
componentDidMount: function () {
	var videoElement = this.refs.videoObject.getDOMNode();
	videoElement.addEventListener('ended', this.props.closeModal);
},
componentWillUnmount: function () {
	var videoElement = this.refs.videoObject.getDOMNode();
	videoElement.removeEventListener('ended', this.props.closeModal);
},	
handleMediaEnd:function(){

	return this.props.closeModal;
},
render:function(){

return(
			<div>
				<h4>{this.props.video_playback_data.title}</h4>
				<video ref="videoObject"
				width={this.props.video_playback_data.contents[0].width} 
				height={this.props.video_playback_data.contents[0].height} controls 
				poster={this.props.video_playback_data.images[0].url}>

				<source src={this.props.video_playback_data.contents[0].url} type="video/mp4" />
				 Your browser does not support HTML5 video.
				</video>
			</div>
									
		)

}

});