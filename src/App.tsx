import React from 'react';
import './App.scss';

import { MuiThemeProvider } from '@material-ui/core/styles';

import Navbar from './components/navbar/navbar';
import theme from './Constants';

function App() {
    return (
        <div className="App">
            <MuiThemeProvider theme={theme}>
                <Navbar></Navbar>
            </MuiThemeProvider>
        </div>
    );
}

export default App;
