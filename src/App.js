import "./App.css";

import React, {useState } from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";

import {BrowserRouter, Routes, Route,} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'

const App = () => {
  const pageSize = 10
  const country = "us"
  const apiKey = process.env.REACT_APP_NEWS_API
  const [progress, setProgress] = useState(0)

    return (
      <div>
        <BrowserRouter>
          <Navbar />
          <LoadingBar
            height={3}
            color='#f11946'
            progress={progress}
          />
          <Routes>
            <Route exact path='/' element={<News apiKey={apiKey} setProgress={setProgress} key='general' pageSize={pageSize} country={country} category='general' />}/>
            <Route exact path='/business' element={<News apiKey={apiKey} setProgress={setProgress} key='business' pageSize={pageSize} country={country} category='business' />}/>
            <Route exact path='/entertainment' element={<News apiKey={apiKey} setProgress={setProgress} key='entertainment' pageSize={pageSize} country={country} category='entertainment' />}/>
            <Route exact path='/health' element={<News apiKey={apiKey} setProgress={setProgress} key='health' pageSize={pageSize} country={country} category='health' />}/>
            <Route exact path='/science' element={<News apiKey={apiKey} setProgress={setProgress} key='science' pageSize={pageSize} country={country} category='science' />}/>
            <Route exact path='/sports' element={<News apiKey={apiKey} setProgress={setProgress} key='sports' pageSize={pageSize} country={country} category='sports' />}/>
            <Route exact path='/technology' element={<News apiKey={apiKey} setProgress={setProgress} key='technology' pageSize={pageSize} country={country} category='technology' />}/>
          </Routes>
        </BrowserRouter>
      </div>
    );
}

export default App;
