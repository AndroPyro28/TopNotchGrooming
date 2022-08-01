import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import 'mapbox-gl/dist/mapbox-gl.css';
import {Suspense, startTransition} from "react"

import { BrowserRouter } from "react-router-dom";
import rootReducers from './redux/rootReducers';
import {Provider} from 'react-redux';
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';

const root = ReactDOM.createRoot(document.getElementById('root'));

const store = configureStore({
  reducer: rootReducers,
  middleware: getDefaultMiddleware({
    immutableCheck: false
  }),
  
})

root.render(
  <BrowserRouter>
    <React.StrictMode>
    <Suspense fallback={<h1>loading...</h1>}>
    <Provider store={store}>
      <App />
    </Provider>,
    </Suspense>
    </React.StrictMode>
  </BrowserRouter>
);