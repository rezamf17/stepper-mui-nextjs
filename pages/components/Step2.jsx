import React from 'react'
import { TextField, CardContent, Typography, Grid } from '@mui/material'

function Step2() {
    return (
        <>
            <CardContent>
                <Typography variant="h4" align='center'>Step 2 (Profile)</Typography>
                <Grid container spacing={2}>
                    <Grid item xs={4}>
                        <Typography sx={{marginTop : '1em'}}>Fullname</Typography>
                    </Grid>
                    <Grid item xs={8}>
                        <TextField id="outlined-basic" label="Fullname" variant="outlined" sx={{width : '100%'}}/>
                    </Grid>
                    <Grid item xs={4}>
                        <Typography sx={{marginTop : '1em'}}>Phone Number</Typography>
                    </Grid>
                    <Grid item xs={8}>
                        <TextField id="outlined-basic" label="Phone Number" variant="outlined" sx={{width : '100%'}}/>
                    </Grid>
                    <Grid item xs={4}>
                        <Typography sx={{marginTop : '1em'}}>Hobby</Typography>
                    </Grid>
                    <Grid item xs={8}>
                        <TextField id="outlined-basic" label="Hobby" variant="outlined" sx={{width : '100%'}}/>
                    </Grid>
                    <Grid item xs={4}>
                        <Typography sx={{marginTop : '1em'}}>Profession</Typography>
                    </Grid>
                    <Grid item xs={8}>
                        <TextField id="outlined-basic" label="Profession" variant="outlined" sx={{width : '100%'}}/>
                    </Grid>
                </Grid>
            </CardContent>
        </>
    )
}

export default Step2