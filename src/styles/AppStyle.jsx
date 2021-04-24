import { makeStyles, createStyles } from '@material-ui/core/styles';

export const styles = makeStyles((theme) => createStyles({
    root: {
        height: '100vh',
        backgroundColor: theme.palette.primary.main,
    }
}))