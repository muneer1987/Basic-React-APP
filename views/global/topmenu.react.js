
var React = require('react');
var ReactBootstrap = require('react-bootstrap')
    , NavItem = ReactBootstrap.NavItem
    , Navbar = ReactBootstrap.Navbar
    , MenuItem = ReactBootstrap.MenuItem
    , SplitButton = ReactBootstrap.SplitButton
    , DropdownButton = ReactBootstrap.DropdownButton
    , Glyphicon = ReactBootstrap.Glyphicon
    , Nav = ReactBootstrap.Nav;

var TopMenu=React.createClass({
getInitialState:function(){
  return {

    check_active:1

  }
},
handleSelect:function(selectedKey) {
  var active = this.state.check_active;
  if(selectedKey == 1){
    window.location.href = "/#/home";
  }else{
     window.location.href = "/#/history";
  }
  this.setState({check_active:selectedKey});
},
render:function(){

return(
	<Nav bsStyle="pills" className="top_background" activeKey={this.state.check_active} onSelect={this.handleSelect}>
	    <NavItem eventKey={1} className="left_home" href="/home">Home</NavItem>
	    <NavItem eventKey={2} className="right_history" href="/history">history</NavItem>
  	</Nav>
  );

}

});

module.exports = TopMenu;