import './App.css';
import { Form } from './components/Form';

import { Graph } from './components/Graph';

function App() {
  return (


    <div className="App">
      <div className="container mx-auto max-w-6xl text-center drop-shadow-lg text-gray-800">
        <h1 className="text-4xl py-8 mb-10 bg-slate-800 text-white rounded">where is my money</h1>
        <div className="grid md:grid-cols-2 gap-4">
          <Graph />
          <Form />
        </div>
      </div>
      <footer>
        <p>version: {process.env.REACT_APP_VERSION}</p>
      </footer>
    </div>


  );
}

export default App;
