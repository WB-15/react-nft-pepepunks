import { Box } from '@material-ui/core'
import useStyles from './ProgressBar.styles'

export interface ProgressBarProps {
    completed: number
}

const ProgressBar = (props: ProgressBarProps) => {
    const {completed} = props

    const classes = useStyles()

    const fillerStyles = {
        width: `${completed}%`
    }

    return (
        <Box className={classes.root}>
            <Box className={classes.filler} style={fillerStyles}></Box>
        </Box>
    )
}

export default ProgressBar
