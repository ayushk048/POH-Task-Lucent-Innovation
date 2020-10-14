import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import NavSteps from './Components/NavSteps/NavSteps';
import Step1 from './Components/SelectBox/SelectBox';
import Step2 from './Components/Step2/Step2';
import Step3 from './Components/Step3/Step3';
import Step4 from './Components/Step4/Step4';


function App() {
  return (
    <BrowserRouter>
      <div className="App">


        <main>
          <NavSteps />
          <Switch>
            <Route path="/select-gift" component={Step2} />
            <Route path="/personalize" component={Step3} />
            <Route path="/review" component={Step4} />
            <Route path="/" component={Step1} />
          </Switch>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
