import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { primaryMain, primaryLight } from "../../consts";

import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

import SearchIcon from '@material-ui/icons/Search';

const useStyles = makeStyles(() => ({
    searchContainer: {
        backgroundImage: "url('Assets/shutterstock_42474535.jpg')",
        backgroundSize: "cover",
        width: "100%",
        height: "250px",
        color: "white",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center"
    },
    searchHeader: {
        textAlign: "center"
    },
    searchSubcontainer: {
        width: "50vw",
        minWidth: "550px",
        maxWidth: "800px"
    },
    searchBox: {
        display: "flex",
        alignContent: "center"
    },
    searchField: {
        backgroundColor: "white",
        borderRadius: "15px",
        marginRight: "15px",
        flexGrow: 1
    },
    searchButton: {
        backgroundColor: primaryLight,
        color: "white",
        width: "175px"
    }
}))

export default function Body() {
    const classes = useStyles();
    const [searchText, setSearchText] = useState("")

    return (
        <div style={{ backgroundColor: "lightgray", height: "100%" }}>
            <div className={classes.searchContainer}>
                <div className={classes.searchSubcontainer}>
                    <Typography
                        className={classes.searchHeader}
                        variant="h5">
                        Providing independent research, analysis, and resources to facilitate informed poilicy decisions and administration of services
                    </Typography>
                    <form className={classes.searchBox}>
                        <TextField
                            className={classes.searchField}
                            color="secondary"
                            variant="filled"
                            onChange={({ target }) => setSearchText(target.value)}
                            value={searchText}>

                        </TextField>
                        <Button
                            className={classes.searchButton} variant="contained">
                            Search
                            <SearchIcon />
                        </Button>
                    </form>
                </div>
            </div>
        </div>
    )
}