import {makeStyles} from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
    root: {
        height: 5,
        backgroundColor: '#e9ecef',
        borderRadius: 2.5
    },
    filler: {
        width: 0,
        height: '100%',
        backgroundColor: theme.palette.primary.main,
        borderRadius: 'inherit',
        transition: 'width 1s'
    }
}))

export default useStyles
