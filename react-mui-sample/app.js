import React from 'react';
import ReactDOM from 'react-dom';
import {
  AppBar, 
  Paper,
  Card, CardActions, CardHeader, CardMedia, CardTitle, CardText, 
  FlatButton
} from 'material-ui';

import {MuiThemeProvider,getMuiTheme} from 'material-ui/styles';

//http://www.material-ui.com/#/components/app-bar
const AppBarExampleIcon = () => (
  <AppBar
    title="Title"
    iconClassNameRight="muidocs-icon-navigation-expand-more"
  />
);
//http://www.material-ui.com/#/components/paper
const CardExampleWithAvatar = () => (
  <Card>
    <CardHeader
      title="URL Avatar"
      subtitle="Subtitle"
      avatar="http://lorempixel.com/100/100/nature/"
    />
    <CardMedia>
      <img src="http://lorempixel.com/600/337/nature/" />
    </CardMedia>
    <CardTitle title="Card title" subtitle="Card subtitle" />
    <CardText>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
      Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
      Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
    </CardText>
    <CardActions>
      <FlatButton label="Action1" />
      <FlatButton label="Action2" />
    </CardActions>
  </Card>
);
//You make yourself an App: 
const App = () => (
  <MuiThemeProvider muiTheme={getMuiTheme()}>
    <div>
      <AppBarExampleIcon />
      <br/>     
      <Paper style={{width: 600, margin: '0 auto', backgroundColor: "#ddd"}} zDepth={0}>
        <CardExampleWithAvatar />
        <br/>
        <CardExampleWithAvatar />
        <br/>
        <CardExampleWithAvatar />
      </Paper>
    </div>
  </MuiThemeProvider>
);

var RCom = ReactDOM.render(<App />, document.getElementById('app'));