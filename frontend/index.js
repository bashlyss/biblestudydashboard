// Root page for all my dom stuff
import axios from 'axios';
import ReactDOM from 'react-dom';
import Routes from './components/Routes';

document.addEventListener('DOMContentLoaded', () => {
  axios.defaults.xsrfHeaderName = 'X-CSRFToken';
  axios.defaults.xsrfCookieName = 'csrftoken';
  axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded; charset=utf-8';
  ReactDOM.render(Routes, document.getElementById('main'));
});
