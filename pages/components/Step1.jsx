import React from 'react'
import { TextField, Typography, CardContent, Grid, Button } from '@mui/material'

function Step1() {
    return (
        <>
            <CardContent>
                <Typography variant="h4" align='center'>Step 1 (Account Information)</Typography>
                <Grid container spacing={2}>
                    <Grid item xs={4}>
                        <Typography sx={{marginTop : '1em'}}>Email</Typography>
                    </Grid>
                    <Grid item xs={8}>
                        <TextField id="outlined-basic" label="Email" variant="outlined" sx={{width : '100%'}}/>
                    </Grid>
                    <Grid item xs={4}>
                        <Typography sx={{marginTop : '1em'}}>Username</Typography>
                    </Grid>
                    <Grid item xs={8}>
                        <TextField id="outlined-basic" label="Username" variant="outlined" sx={{width : '100%'}}/>
                    </Grid>
                    <Grid item xs={4}>
                        <Typography sx={{marginTop : '1em'}}>Password</Typography>
                    </Grid>
                    <Grid item xs={8}>
                        <TextField id="outlined-basic" type="password" label="Password" variant="outlined" sx={{width : '100%'}}/>
                    </Grid>
                    <Grid item xs={4}>
                        <Typography sx={{marginTop : '1em'}}>Re-Password</Typography>
                    </Grid>
                    <Grid item xs={8}>
                        <TextField id="outlined-basic" type="password" label="Re-Password" variant="outlined" sx={{width : '100%'}}/>
                    </Grid>
                </Grid>
            </CardContent>
        </>
    )
}

export default Step1