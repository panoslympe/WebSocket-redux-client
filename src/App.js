// import logo from './logo.svg';
import './App.sass';
import { Provider } from 'react-redux';
import Messages from './components/Messages';
import Form from './components/Form';
import store from "./store/store";



function App() {


  return (
    <Provider store={store}>
      <div className="App">
        <Messages />
        <Form />
      </div>
    </Provider>
  );
}

export default App;
