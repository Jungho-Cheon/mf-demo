import React from 'react';
import ReactDOMClient from 'react-dom/client';
import singleSpaReact from 'single-spa-react';
import App from './App';
import './index.css';

const lifecycles = singleSpaReact({
  React,
  ReactDOMClient,
  rootComponent: App,
  errorBoundary(err: Error, info: React.ErrorInfo) {
    return (
      <div role="alert">
        <p>앱에서 오류가 발생했습니다.</p>
        <pre>{err.message}</pre>
        <pre>{info.componentStack}</pre>
      </div>
    );
  },
});

export const { bootstrap, mount, unmount } = lifecycles;
