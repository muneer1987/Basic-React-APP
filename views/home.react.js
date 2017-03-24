var React = require('react');
var AJAX = require('reqwest');
module.exports = React.createClass({
	getInitialState:function(){
		return {
			video_data : {},
			loader_image:'loader_image.gif'
		}
	},
	componentDidMount:function(){

		var video_data = this.state.video_data;
		var root = 'http://jsonplaceholder.typicode.com/photos';
		AJAX({
                    url: root
                    , type: 'json'
                    , method:'get'
                    , success: function (resp) {
                       
                       console.log("data is ",resp); 
                       
                    }.bind(this)
                }
            );

	},
	render:function(){
		var image = '../src/img/loader_image.gif'
		return (
					<div style={{'minHeight':'500px'}}>
						<img src={image} className="image_c" />
					</div>
			);

	}

})