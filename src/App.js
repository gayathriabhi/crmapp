import './App.css';
import React from 'react'
import ContentSelectForm from '../src/components/ContentSelectForm'
import FAQContentForm from '../src/components/FAQContentForm'
import HelpArticleContentForm from '../src/components/HelpArticleContentForm'
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import history from '../src/components/history.js';


function App() {
  return (
    <div className="App">
     <Router history={history}>
        <Routes>
          <Route path="/" element={<ContentSelectForm/>} />
          <Route path="/faqcontent" element={<FAQContentForm/>} />
          <Route path="/helparticle" element={<HelpArticleContentForm/>} />
        </Routes>
     </Router>
    </div>
  );
}

export default App;
