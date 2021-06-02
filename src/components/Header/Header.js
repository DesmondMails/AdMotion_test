import {MenuHeader, MenuItem} from "semantic-ui-react";
import {makeStyles} from "@material-ui/styles";
import ethereumLogo from '../../images/Ethereum_logo.svg'

const useStyles = makeStyles({
    header: {
        minHeight: '60px',
        zIndex: '1',
        display: 'flex',
        justifyContent: 'space-between',
        width: '100%',
        backgroundColor: 'black',
        position: 'fixed',
        padding: '0 15px'
    },
    headerItem: {
        alignSelf: 'center',
        color: 'white',
        textTransform: 'uppercase',
        fontSize: '24px'
    },
    headerLogo: {
        alignSelf: 'center'
    }
})


const Header = () => {
    const classes = useStyles()
    return (
        <MenuHeader className={classes.header}>
            <MenuItem className={classes.headerLogo}>
                <img src={ethereumLogo} alt="Ethereum logo"/>
            </MenuItem>
            <MenuItem className={classes.headerItem}>
                Admotion test
            </MenuItem>
        </MenuHeader>
    );
};

export default Header;