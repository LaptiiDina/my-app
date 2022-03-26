/* eslint-disable testing-library/no-node-access */
/* eslint-disable testing-library/prefer-presence-queries */
/* eslint-disable testing-library/prefer-find-by */
import { render, screen, waitFor } from '@testing-library/react';
import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { store } from './configStore/store';

describe('App', () => {
  it('renders App component', async() => {
    render(<Provider store={store}><BrowserRouter><App /></BrowserRouter></Provider>);
    // eslint-disable-next-line testing-library/no-debugging-utils
    screen.debug();
    expect(screen.queryByText(/season/i)).toBeNull();
    await waitFor(() => screen.queryByText(/season/i));
  })
})







