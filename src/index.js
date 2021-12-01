import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { getFirestore } from "firebase/firestore";

ReactDOM.render(

  <App />
  ,
  document.getElementById('root')
);
export const firestore = getFirestore()
