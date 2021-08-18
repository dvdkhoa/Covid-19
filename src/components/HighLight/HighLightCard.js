import React from 'react'
import { Card, CardContent, Grid, Typography, makeStyles } from '@material-ui/core'

const useStyles = makeStyles({
    wrapper: (props) => {
        if(props.type === 'confirmed') return {borderLeft: '5px solid red'};
        if(props.type === 'death') return {borderLeft: '5px solid #000'};
        return {borderLeft: '5px solid green'}
    },
    title: {
        fontSize: 16,
        marginBottom: 5, 
    },
    count: {
        fontWeight: 'bold',
        fontSize: 18,
    },
});

export default function HighLightCard( { title, count, type } ) {
    const styles = useStyles({type});
    return (
        <Grid item sm={4} xs={12}>
            <Card className={styles.wrapper}>
                <CardContent>
                    <Typography component="p" variant="body2" className={styles.title} >
                        {title}
                    </Typography>
                    <Typography component="span" variant="body2" className={styles.count}>
                        {count}
                    </Typography>
                </CardContent>
            </Card>
        </Grid>
    )
}
