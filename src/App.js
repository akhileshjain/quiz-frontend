import './App.css';
import  Header from './components/Header/Header';
import { ApiForm } from './container/ApiForm/ApiForm';
import  SignUp from './container/SignUp/SignUp';
import SignIn from './container/SignIn/SignIn';
import {BrowserRouter, Route} from 'react-router-dom';
import QuesSubmit from './container/QuestionSubmit/QuestionSubmit';

function App() {
  return (
    <BrowserRouter>    
      <div className="App">
        <Header></Header>
        <Route path="/" exact component={ApiForm} />
        <Route path="/login" component={SignIn} />
        <Route path="/addques" component={QuesSubmit} />
        <Route path="/signup" component={SignUp} />
      </div>
    </BrowserRouter>
  );
}

export default App;
