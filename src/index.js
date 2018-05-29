import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {
  faFacebook,
  faGithub,
  faInstagram,
  faTwitter,
  faYoutube
} from "@fortawesome/fontawesome-free-brands/shakable.es";

import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

const SOCIAL_MEDIA = [
  {
    url: 'https://www.instagram.com/fairviewrobotics/',
    icon: faInstagram
  },
  {
    url: 'https://twitter.com/FHSKnights2036',
    icon: faTwitter
  },
  {
    url: 'https://www.facebook.com/fairviewrobotics/',
    icon: faFacebook
  },
  {
    url: 'https://www.youtube.com/channel/UCOnmH96g1hb3YBGNHLY3C_A',
    icon: faYoutube
  },
  {
    url: 'https://github.com/fairviewrobotics',
    icon: faGithub
  },
];

ReactDOM.render(<App socialMedia={SOCIAL_MEDIA} />, document.getElementById('root'));
registerServiceWorker();
