import React from 'react'
// npm install --save @material-ui/core
import {Card, CardContent, Typography, Grid} from '@material-ui/core'
import styles from './cards.module.css'
import CountUp from 'react-countup'
import cx from 'classnames'  //to get multiple classes in an element (npm install classnames --save)
const Cards = ({ data: {confirmed, recovered, deaths, lastUpdate} }) =>{
    console.log(confirmed)
    if(!confirmed){
       return 'Loading...'
    }
    return(
        <div className={styles.container}>
            <Grid container spacing={3} justify="center">
               <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.infected)}>
                <CardContent>
                    <Typography color='textSecondary' gutterBottom> INFECTED </Typography>
                    <Typography variant='h5'> 
                     <CountUp
                        start={0}
                        end={confirmed.value}
                        duration={2.5}
                        separator=","
                        />
                     </Typography>
                    <Typography color='textSecondary' > {new Date(lastUpdate).toDateString()} </Typography>
                    <Typography variant='body2'>Number of active cases of COVID-19</Typography>
                </CardContent>
               </Grid>
               <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.recovered)}>
                <CardContent>
                    <Typography color='textSecondary' gutterBottom> RECOVERED </Typography>
                    <Typography variant='h5'> 
                     <CountUp
                        start={0}
                        end={recovered.value}
                        duration={2.5}
                        separator=","
                        />
                     </Typography>
                    <Typography color='textSecondary' >  {new Date(lastUpdate).toDateString()} </Typography>
                    <Typography variant='body2'>Number of recoveries of COVID-19</Typography>
                </CardContent>
               </Grid>
               <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.deaths)}>
                <CardContent>
                    <Typography color='textSecondary' gutterBottom> DEATHS </Typography>
                    <Typography variant='h5'> 
                     <CountUp
                        start={0}
                        end={deaths.value}
                        duration={2.5}
                        separator=","
                        />
                     </Typography>
                    <Typography color='textSecondary' >  {new Date(lastUpdate).toDateString()}  </Typography>
                    <Typography variant='body2'>Number of deaths of COVID-19</Typography>
                </CardContent>
               </Grid>
            </Grid>
        </div>
       
    )
}

export default Cards;