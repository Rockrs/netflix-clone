import React, { useState } from 'react';
import ROW from './components/Row';
import requests from './request';
import MODAL from './components/Modal';
import Background from './components/Background';
import Carosal from './components/Carosal';

function App() {  
  const [modalParameters, setModalParameters] = useState({
    makeVisible : false,
    movieObject : {},
  })

  return (
    <div className="App">
      <Carosal title = "Trending Now" fetchUrl = {requests.fetchTrendingNow} modalShowNoShow = {setModalParameters}/>
      <ROW title = "Top Rated Movies" fetchUrl = {requests.fetchTopRated} modalShowNoShow = {setModalParameters}/>
      <ROW title = "Action Movies" fetchUrl = {requests.fetchActionMovies} modalShowNoShow = {setModalParameters}></ROW>
      <ROW title = "Comedy Movies" fetchUrl={requests.fetchComedyMovies} modalShowNoShow = {setModalParameters}></ROW>
      <ROW title = "Horror Movies" fetchUrl ={requests.fetchHorrorMovies} modalShowNoShow = {setModalParameters}></ROW>
      <ROW title = "Romantic Movies" fetchUrl ={requests.fetchRomanceMovies} modalShowNoShow = {setModalParameters}></ROW>
      <ROW title = "Documentries" fetchUrl ={requests.fetchDocumentries} modalShowNoShow = {setModalParameters}></ROW>
      
      {/* Conditional Rendering based on makeVisible variable which is reset in Row component */}
      {modalParameters.makeVisible ? <MODAL movieObject = {modalParameters.movieObject}></MODAL> : <></> }
      {modalParameters.makeVisible ? <Background ></Background> : <></> }
    </div>
  );
}

export default App;