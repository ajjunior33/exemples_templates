import React from 'react';
/*CSS */
import './global.css';
import './style.css';

/*Imagens */
import Header from './components/Header/index';
import player from './assets/img/player.svg';
import player_2 from './assets/img/player_2.svg';

import image01 from './assets/icons/user.svg';
import image02 from './assets/icons/location.svg';
import image03 from './assets/icons/Server.svg';

/*Icons */
import {FaCheckCircle} from 'react-icons/fa'


function App() {
  return (
    <div className="App">
      <Header />

      <section className="apresentation">
        <article>
          
        <h1 className="display-1">Want anything to be <br/> easy  with <b>LaslesVPN</b>.</h1>
        <p>Provide a network for all your needs with ease and fun using LaslesVPN discover interesting features from us.</p>
        <button className="btn btn-danger-out" style={{marginTop:35,}}>Get Started</button>

        </article>
        <article>
          <img src={player} className="App-logo" alt="logo" />
        </article>
      </section>

      <section className="list">
        <article>
          <img src={image01} className="App-logo" alt="logo" />
          <div className="descriptionList">
            <strong>90 +</strong>
            <small>Users</small>
          </div>
        </article>
        <article>
          <img src={image02} className="App-logo" alt="logo" />
          <div className="descriptionList">
            <strong>30 +</strong>
            <small>Locations</small>
          </div>
        </article>
        <article>
          <img src={image03} className="App-logo" alt="logo" />
          <div className="descriptionList">
            <strong>50 +</strong>
            <small>Servers</small>
          </div>
        </article>
      </section>

      <section className="features">
        <article>
          <img src={player_2} className="App-logo" alt="logo" />
        </article>
        <article style={{marginLeft:12,}}>
          <p className="display-3">We Provider Many <br/> Features You Can Use</p>
          <p class="text-gray">You can explore the features that we provide with fun and have their own functions each feature.</p>
          <div class="list_features">
            <ul>
            <li> <FaCheckCircle size={15} color="#2fab73"/> Powerfull online protection. </li> 
            <li> <FaCheckCircle size={15} color="#2fab73"/> Internet without borders.</li>
            <li> <FaCheckCircle size={15} color="#2fab73"/> Supercharged VPN</li>
            <li> <FaCheckCircle size={15} color="#2fab73"/> No specific time limits.</li>
            </ul>
          </div>
        </article>
      </section>

      <section className="Plain">
        <div className="titlePlain">
          <p className="display-3">Choose Your Plan</p>
          <p className="text-gray">Let's choose the package that is best for you and explore it happily and <br/> cheerfully.</p>
        </div>

      </section>
    </div>
  );
}

export default App;
