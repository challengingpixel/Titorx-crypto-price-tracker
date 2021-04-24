import React from 'react'
import { AppBar, Box, TextField, Toolbar, Typography } from '@material-ui/core';
import {styles} from '../styles/NavStyle'
import FormatClearIcon from '@material-ui/icons/FormatClear';

export default function Nav({search, setSearch}) {
    const classes = styles()
    const handleChange = (e) => {
        setSearch(e.target.value)
    }
    return (
        <>
            <AppBar 
                className={classes.navBar} 
                elevation={0}
                position="fixed">
                <Toolbar className="navBar__toolBar">
                    <Box component="div"
                         display="flex"
                         alignItems="center">
                        <Box className={classes.navBarLogo}>
                            <FormatClearIcon/>
                        </Box>
                        <Typography variant="h5" className={classes.navBarTitle}>Titorx Crypto</Typography>
                    </Box>
                    <TextField
                        className="navBar__inputField"
                        onChange={handleChange}
                        variant="outlined"
                        name="search"
                        label="Search a Coin"
                        type="text"
                        size="small"
                        InputProps={{style:{color: 'white'}}}
                        InputLabelProps={{style:{color: 'white'}}}
                    />
                </Toolbar>
            </AppBar>
            <Toolbar className={classes.toolBar} />
        </>
    )
}
