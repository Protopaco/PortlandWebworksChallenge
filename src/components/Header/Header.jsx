import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { primaryMain } from "../../consts"

import AppBar from '@material-ui/core/AppBar';
import Button from "@material-ui/core/Button"
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';

import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';

const useStyles = makeStyles((theme) => ({
    appBar: {
        display: "flex",
        backgroundColor: "white",
        boxShadow: "2px 2px gray",
        height: "125px"

    },
    toolBar: {
        display: "flex",
        height: "100%",
        alignItems: "center",
    },
    leftAligned: {
        flexGrow: 1,
        display: "flex",
        height: "100%",
        alignItems: "center",
    },
    menuContainer: {
        backgroundColor: primaryMain,
        width: "70px",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
    },
    menuIcon: {
        fontSize: "2.5em",
        paddingBottom: "0px",
        marginBottom: "0px"

    },
    menuText: {
        fontSize: ".7em",
    },
    crestImage: {
        height: "100px",
        marginLeft: "30px"
    },
    textBox: {
        color: primaryMain,
        display: "flex",
        flexDirection: "column",
        marginLeft: "15px"
    },
    mainText: {
        fontWeight: "700",
    },
    subTitle: {
        fontStyle: "italic",
        fontWeight: "300"
    },
    navBox: {
        display: "flex",
    },
    navButton: {
        margin: "10px",
        color: primaryMain,
    },
    searchIcon: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        border: `1px solid ${primaryMain}`,
        color: "blue",
        height: "40px",
        width: "40px",
        marginRight: "15px"
    }
}));

export default function Header() {
    const classes = useStyles();

    return (
        <div>
            <AppBar position="static" className={classes.appBar}>
                <div className={classes.toolBar}>
                    <div className={classes.leftAligned}>
                        <div className={classes.menuContainer}>
                            <MenuIcon className={classes.menuIcon} />
                            <Typography variant="button" className={classes.menuText}>
                                MENU
                            </Typography>
                        </div>
                        <img src="/Assets/RFA Logo Final.png" alt="RFA Crest" className={classes.crestImage} />
                        <div className={classes.textBox}>
                            <Typography variant="h5" className={classes.mainText}>SOUTH CAROLINA</Typography>
                            <Typography variant="h5" className={classes.mainText}>REVENUE AND FISCAL AFFAIRS OFFICE</Typography>
                            <Typography variant="subtitle1" className={classes.subTitle}>Transforming data into solutions for South Carolina</Typography>
                        </div>
                    </div>
                    <div className={classes.navBox}>
                        <Button className={classes.navButton}>About Us</Button>
                        <Button className={classes.navButton}>Events</Button>
                        <Button className={classes.navButton}>Boards & Committiees</Button>
                        <div className={classes.searchIcon}>
                            <IconButton >
                                <SearchIcon color="primary" />
                            </IconButton>
                        </div>
                    </div>
                </div>

            </AppBar>


        </div >
    )
}