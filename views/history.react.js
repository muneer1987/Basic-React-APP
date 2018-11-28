var React = require('react');

module.exports = React.createClass({
	
	render:function(){
		var get_session_list_data = JSON.parse(sessionStorage.getItem('video_data'));
		return (
					<div style={{'minHeight':'500px'}}>
						{
							get_session_list_data.map(function(row){
								if(row.view){

									return (

													<li>VideoID: {row.id}</li>
											)
								}

							})
						}
					</div>
			);

	}

});