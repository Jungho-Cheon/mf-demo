import React from 'react';
import ReactDOMClient from 'react-dom/client';
import singleSpaReact from 'single-spa-react';
import App from './App';
import ErrorBoundary from './error-boundary';

import './index.css';

const lifecycles = singleSpaReact({
  React,
  ReactDOMClient,
  rootComponent: App,
  errorBoundary: ErrorBoundary,
});

export const { bootstrap, mount, unmount } = lifecycles;
