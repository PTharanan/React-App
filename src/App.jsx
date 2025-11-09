
import Course from './Course/Course';
import HTML from './assets/img1.avif';
import css from './assets/img2.avif';
import Js from './assets/img3.avif';

function App() {
  return (  
    <>
      <Course name ="HTML" price = {99} img = {HTML} point = {5.6} show = {true}/>
      <Course name ="CSS" price = {199} img = {css} point = {4.6} show = {true}/>
      <Course name ="JavaScript" price = {299} img = {Js} point = {2.1} show = {true}/>
      <Course name ="HTML" price = {99} img = {HTML} point = {5.6} show = {true}/>
      <Course name ="CSS" price = {199} img = {css} point = {4.6} show = {true}/>
      <Course name ="JavaScript" price = {299} img = {Js} point = {2.1} show = {true}/>
      <Course name ="HTML" price = {99} img = {HTML} point = {5.6} show = {true}/>
      <Course name ="CSS" price = {199} img = {css} point = {4.6} show = {true}/>
      <Course name ="JavaScript" price = {299} img = {Js} point = {2.1} show = {true}/>
    </>
  );
}

export default App
