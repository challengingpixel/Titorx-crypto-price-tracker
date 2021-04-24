import React, { useState } from 'react';
import Nav from './components/Nav';
import {styles} from './styles/AppStyle'
import CryptoSection from './Views/CryptoSection';

function App() {
    const classes = styles()
    const [search, setSearch] = useState('')
    return (
        <div className={classes.root}>
            <Nav search={search} setSearch={setSearch}/>
            <CryptoSection search={search}/>
        </div>
    );
}

export default App;
