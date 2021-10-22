import React from "react";
import { Route, Link, Switch } from "react-router-dom";

import TodoHome from "./components/todo/TodoHome";
import About from "./components/About";
import Profiles from './components/profile/Profiles';
import HistorySample from './components/HistorySample';

const App = () => {
  return (
    <div>
      <ul>
        <li>
          <Link to="/">TodoList</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/profiles">프로필</Link>
        </li>
        <li>
          <Link to="/history">History 예제</Link>
        </li>
      </ul>
      
      <Switch>
        <Route path="/" component={TodoHome} exact={true} />
        <Route path="/about" component={About} />
        <Route path="/profiles" component={Profiles} />
        <Route path="/history" component={HistorySample} />
        <Route
          // path를 따로 정의하지 않으면 모든 상황에 렌더링됨
          render={({ location }) => (
            <div>
              <h2>이 페이지는 존재하지 않습니다:</h2>
              <p>{location.pathname}</p>
            </div>
          )}
        />
      </Switch>
    </div>
  );
};

export default App;
