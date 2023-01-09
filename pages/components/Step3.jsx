import React from 'react'
import { TextField, CardContent, Typography, Grid } from '@mui/material'

function Step3() {
    return (
        <>
            <CardContent>
                <Typography variant="h4" align='center'>Step 3 (Address)</Typography>
                <Grid container spacing={2}>
                    <Grid item xs={4}>
                        <Typography sx={{marginTop : '1em'}}>Province</Typography>
                    </Grid>
                    <Grid item xs={8}>
                        <TextField id="outlined-basic" label="Province" variant="outlined" sx={{width : '100%'}}/>
                    </Grid>
                    <Grid item xs={4}>
                        <Typography sx={{marginTop : '1em'}}>City</Typography>
                    </Grid>
                    <Grid item xs={8}>
                        <TextField id="outlined-basic" label="City" variant="outlined" sx={{width : '100%'}}/>
                    </Grid>
                    <Grid item xs={4}>
                        <Typography sx={{marginTop : '1em'}}>Districts</Typography>
                    </Grid>
                    <Grid item xs={8}>
                        <TextField id="outlined-basic" label="Districts" variant="outlined" sx={{width : '100%'}}/>
                    </Grid>
                    <Grid item xs={4}>
                        <Typography sx={{marginTop : '1em'}}>Village</Typography>
                    </Grid>
                    <Grid item xs={8}>
                        <TextField id="outlined-basic" label="Village" variant="outlined" sx={{width : '100%'}}/>
                    </Grid>
                </Grid>
            </CardContent>
        </>
    )
}

export default Step3