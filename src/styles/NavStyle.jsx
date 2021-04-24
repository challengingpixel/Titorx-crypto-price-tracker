import { makeStyles, createStyles } from '@material-ui/core/styles';

export const styles = makeStyles((theme) => createStyles({
    navBar: {
        '& .navBar__toolBar': {
            display: 'flex',
            justifyContent: 'space-around',
            flexDirection: 'column',
            padding: theme.spacing(2),
            [theme.breakpoints.up('sm')]: {
                flexDirection: 'row',
            },
            '& .navBar__inputField': {
                color: "white",
                marginTop: theme.spacing(2),
                '& .MuiOutlinedInput-notchedOutline': {
                    borderColor: "white"
                }
            }
        }
    },
    navBarLogo: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: theme.spacing(2),
        padding: theme.spacing(0.8),
        boxShadow: '1px 1px 10px 2px #1a1a',
        borderRadius: '50%',
        backgroundColor: theme.palette.primary.main
    },
    navBarTitle: {
        fontWeight: 600,
        letterSpacing: 2
    },
    toolBar: {
        minHeight: theme.spacing(12)
    }
}))