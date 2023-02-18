import {makeStyles} from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
    mintButtonWrapper: {
        marginTop: theme.spacing(4),
        position: 'relative',
        textAlign: 'center'
    },
    buttonProgress: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        marginTop: '-15px',
        marginLeft: '-15px',
    }
}))

export default useStyles
