import {Table, TableBody, TableCell, TableHeader, TableHeaderCell, TableRow} from "semantic-ui-react";
import {makeStyles} from "@material-ui/styles";

const useStyles = makeStyles({
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        margin: '2% 0'
    },
    title: {
        textTransform: 'uppercase',
        marginBottom: '1%'
    },
    table: {
        border: '1px solid #999',
        borderCollapse: 'collapse',
        padding: '10px',
        width: '50%',

        borderRadius: '3px'
    },
    firstRow: {
      width: '30%'
    },
    tableHeader: {
        textAlign: 'left',
        backgroundColor: '#DCDCDC'
    },
    tableHeaderEl: {
        border: '1px solid #999',
        padding: '8px',
        textTransform: 'uppercase',
        color: 'black'
    },
    tableCell: {
        border: '1px solid #999',
        padding: '8px'
    }

})

const BalanceTable = ({balances}) => {
    const classes = useStyles()

    return (
        <div className={classes.container}>
            <h1 className={classes.title}>Balance of tokens</h1>
            <Table celled={true} className={classes.table}>
                <TableHeader className={classes.tableHeader}>
                    <TableHeaderCell className={classes.tableHeaderEl + " " + classes.firstRow}>Name</TableHeaderCell>
                    <TableHeaderCell className={classes.tableHeaderEl}>Value</TableHeaderCell>
                </TableHeader>
                <TableBody>
                    {
                        balances.map(token =>
                            <TableRow key={token.name}>
                                <TableCell className={classes.tableCell}>{token.name}</TableCell>
                                <TableCell className={classes.tableCell}>{token.balance}</TableCell>
                            </TableRow>
                        )
                    }
                </TableBody>
            </Table>
        </div>
    );
};

export default BalanceTable;