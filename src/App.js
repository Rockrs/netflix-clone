import React, { useState, useRef } from 'react';
import ROW from './components/Row';
import requests from './request';
import Background from './components/Background';
import Carosal from './components/Carosal';
import Navbar from './components/Navbar';

function App() {  
  const [isBackgroundVisible, setBackground] = useState(false);
  const RowsReferenceKeys = {
    'Trending' : useRef(null),
    'Top Rated' : useRef(null),
    'Action' : useRef(null),
    'Comedy': useRef(null),
    'Horror' : useRef(null),
    'Romantic' : useRef(null),
  }

  return (
    <div className="App">
      <Navbar refkeys = {RowsReferenceKeys} />
      <Carosal/>
      <ROW title = "Trending Now" fetchUrl = {requests.fetchTrendingNow} showBackground = {setBackground} ref ={RowsReferenceKeys.Trending}/>
      <ROW title = "Top Rated Movies" fetchUrl = {requests.fetchTopRated} showBackground = {setBackground} ref ={RowsReferenceKeys['Top Rated']}/>
      <ROW title = "Action Movies" fetchUrl = {requests.fetchActionMovies} showBackground = {setBackground} ref ={RowsReferenceKeys.Action}></ROW>
      <ROW title = "Comedy Movies" fetchUrl={requests.fetchComedyMovies} showBackground = {setBackground} ref ={RowsReferenceKeys.Comedy}></ROW>
      <ROW title = "Horror Movies" fetchUrl ={requests.fetchHorrorMovies} showBackground = {setBackground} ref ={RowsReferenceKeys.Horror}></ROW>
      <ROW title = "Romantic Movies" fetchUrl ={requests.fetchRomanceMovies} showBackground = {setBackground} ref ={RowsReferenceKeys.Romantic}></ROW>
      <ROW title = "Documentries" fetchUrl ={requests.fetchDocumentries} showBackground = {setBackground}></ROW>
      
      {/* Conditional Rendering based on makeVisible variable which is reset in Row component */}
      {isBackgroundVisible ? <Background ></Background> : <></> }
    </div>
  );
}

export default App;