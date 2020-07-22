import React, {Component} from 'react';
import {Route, BrowserRouter, Switch} from 'react-router-dom';
import NavBar from './Components/layouts/NavBars';
import DashBoard from './Components/DashBoard/dashboard';
import ProjectDetails from './Components/projects/projectsDetails';
import SignIn from './Components/auth/SignIn';
import SignUp from './Components/auth/SignUp';
import CreateProject from './Components/projects/createProject';


class App extends Component {
  
    render() {
      
      return (
        <BrowserRouter>
        <div className='app'>
          <NavBar />
          <Switch>
          <Route exact path='/' component={DashBoard}></Route>
          <Route path='/project/:id' component={ProjectDetails}></Route>
          <Route path='/signin' component={SignIn}></Route>
          <Route path='/signup' component={SignUp}></Route>
          <Route path='/create' component={CreateProject}></Route>
          </Switch>
        </div>
        </BrowserRouter>
      );
       
    };
}

export default App;
