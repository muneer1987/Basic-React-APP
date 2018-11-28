
var React = require('react');
var Router = require('react-router')
    , RouteHandler = Router.RouteHandler
    , DefaultRoute = Router.DefaultRoute
    , NotFoundRoute = Router.NotFoundRoute
    , Route = Router.Route;

var TopMenu         = require('./views/global/topmenu.react');
var Footer          = require('./views/global/footer.react');

var Home          = require('./views/home.react');
var History       = require('./views/history.react');


var top_menu = "";
var bottom_menu = "";
var App = React.createClass({

    render: function() { 
                   
             top_menu = (<TopMenu />);
             bottom_menu  = (<Footer />);
        
        return (
            <div>
                {top_menu}               
                <div className="console_container">
                    <RouteHandler />
                </div>
                {bottom_menu}
            </div>
            );
    }
});

var routes = (
    <Route handler={App} path="/">
        <DefaultRoute handler={Home} />
        <NotFoundRoute handler={Home}/>

        <Route name="home" path="/home" handler={Home} />
        <Route name="history" path="/history" handler={History} />

        </Route>
    );

Router.run(routes, function (Handler) {
    React.render(<Handler/>, document.body);
});


