import {makeStyles} from "@material-ui/styles";
import ethereum from '../../images/ethereum.svg'

const useStyles = makeStyles({
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: '5%',
        borderBottom: '1px solid black',
        '@media (max-width: 768px)': {
            paddingTop: '20%'
        }
    },
    balanceText: {
        fontSize: '20px',
        textTransform: 'uppercase',
        marginTop: '1%'
    },
    valueText: {
        margin: '1% 0'
    }
})

const EthereumValue = ({value}) => {
    const classes = useStyles()
    return (
        <div className={classes.container}>
            <img src={ethereum} alt="Ether"/>
            <p className={classes.balanceText}>balance</p>
            <p className={classes.valueText}>{value}</p>
        </div>
    );
};

export default EthereumValue;