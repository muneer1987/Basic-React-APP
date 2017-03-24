var React = require('react');
var AJAX = require('reqwest');
var Videocraousel = require('./component/video_craousel.react');
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
		var check_data_exist = JSON.parse(sessionStorage.getItem('video_data'));
		if(check_data_exist == null){
		AJAX({
                    url: root
                    , type: 'json'
                    , method:'get'
                    , success: function (resp) {
                       sessionStorage.setItem('video_data',JSON.stringify(resp));
                       this.setState({
                       		video_data:resp
                       }) 
                    }.bind(this)
                }
            );
		}else{
			this.setState({video_data:check_data_exist});
		}
	},
	render:function(){
		var image = 'img/loader_image.gif';
		var data = this.state.video_data;
		//console.log("adasdas ",data);
		return (
					<div style={{'minHeight':'500px'}}>
						{(data.length > 0) ?
							<Videocraousel data={data}/>
							:
							<img src={image} className="image_c" />
						}
					</div>
			);

	}

})