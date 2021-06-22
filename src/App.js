import { Link, Route, Switch } from 'react-router-dom';
import './App.css';
import Users from './pages/Users';
import Posts from './pages/Posts';
import Todos from './pages/Todos';
import OnePost from './pages/OnePost';

function App() {
  return (
    <div className="container mt-5">

      <header>
        <h3> Jsone Plaseholder</h3>
        <Link to={'/users'}> <button className="btn btn-dark m-4">users</button> </Link>
        <Link to={'/posts'}> <button className="btn btn-dark m-4">posts</button> </Link>
        <Link to={'/todos'}> <button className="btn btn-dark m-4">todos</button> </Link>
        <br /> <hr />

        <Switch>
          <Route path={'/users'} component={Users}></Route>
          <Route path={'/posts/:id'} component={OnePost}></Route>
          <Route path={'/posts'} component={Posts}></Route>
          <Route path={'/todos'} component={Todos}></Route>
        </Switch>
      </header>

    </div>
  );
}

export default App;
