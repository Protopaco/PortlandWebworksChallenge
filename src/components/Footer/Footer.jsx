import React from 'react';
import { makeStyles } from "@material-ui/core/styles"
import { primaryMain } from '../../consts';

import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
    root: {
        width: "100%",
        height: "250px",
        backgroundColor: primaryMain,
        color: "white",
        display: "flex",
        justifyContent: "space-around",
        paddingTop: "15px",
        position: "absolute",
        bottom: 0,
    },
    leftAlign: {
        fontWeight: "700",
        height: "100%"
    },
    titleText: {
        fontWeight: "700",

    },
    crestImage: {
        height: "100px"
    },
    centerAlign: {
        color: "white",
        height: "100%",
    },
    uList: {
        listStyle: "none",
        padding: "0 0 15px 15px "
    },
    locationName: {
        color: "#93A4BD",
        fontSize: ".8em",
    },
    address: {
        fontSize: ".8em"
    },
    rightAlign: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-around"
    }

}));

export default function Footer() {
    const classes = useStyles();


    return (
        <div className={classes.root}>
            <div className={classes.leftAlign}>
                <Typography className={classes.titleText}>
                    South Carolina
                </Typography>
                <Typography className={classes.titleText}>
                    Revenue and Fiscal Affairs Office
                </Typography>
                <img src="Assets/Group 262.png" alt={"South Carolina Crest"} className={classes.crestImage} />
            </div>
            <div classname={classes.centerAlign}>
                <ul className={classes.uList}>
                    <li>
                        <Typography variant="subtitle">
                            Privacy Statement
                        </Typography>
                    </li>
                    <li>
                        <Typography>
                            FOIA
                        </Typography>
                    </li>
                    <li>
                        <Typography>
                            Disclosures and Reporting
                        </Typography>
                    </li>
                    <li>
                        <Typography>
                            Report Fraud
                        </Typography>
                    </li>
                    <li>
                        <Typography>
                            Accessibility
                        </Typography>
                    </li>
                    <li>
                        <Typography>
                            Contact Us
                        </Typography>
                    </li>
                </ul>
            </div >
            <div className={classes.rightAlign} >
                <div>
                    <Typography variant="button" className={classes.locationName}>
                        Main Office
                    </Typography>
                    <Typography className={classes.address}>
                        1000 Assembly St. Rembert Dennis Building, Suite 421
                    </Typography>
                    <Typography className={classes.address}>
                        Columbia, SC, 29201
                    </Typography>
                </div>
                <div>
                    <Typography variant="button" className={classes.locationName}>
                        GEODETIC SURVEY SECTION
                    </Typography>
                    <Typography className={classes.address}>
                        5 Geology Rd
                    </Typography>
                    <Typography className={classes.address}>
                        Columbia, SC, 29212
                    </Typography>
                </div>                <div>
                    <Typography variant="button" className={classes.locationName}>
                        HEALTH AND DEMOGRAPHICS DIVISION
                    </Typography>
                    <Typography className={classes.address}>
                        1000 Assembly St. Rembert Dennis Building, Suite 240
                    </Typography>
                    <Typography className={classes.address}>
                        Columbia, SC, 29201
                    </Typography>
                </div>
            </div>

        </div >
    )
}