import React from 'react'
import { TextField, Card, Typography, CardContent, CardActions, Button } from '@mui/material'

function Step1() {
    return (
        <>
            <Card>
                <Typography>Step 1</Typography>
                <TextField id="outlined-basic" label="Outlined" variant="outlined" />
            </Card>
        </>
    )
}

export default Step1