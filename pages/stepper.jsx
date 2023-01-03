import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import React, { useState } from 'react'
import { Container } from '@mui/material';
import dynamic from 'next/dynamic'
import Step1 from './components/Step1';
import Step2 from './components/Step2';
import Step3 from './components/Step3';

const steps = ['Step 1', 'Step 2', 'Step 3']
// const stepDesc = [
//     <Step1/>,
//     <Step2/>,
//     <Step3/>,
// ]
// const stepDesc = [
//     'Desc 1',
//     'Desc 2',
//     'Desc 3',
// ]
// const Step1 = dynamic(() => import('./components/Step1'), { ssr: false })
const stepDesc = [
    (
        <Step1 />
    ),
    (
        <>
        <Step2 />
        </>
    ),
    (
        <>
        <Step3 />
        </>
    ),
]



const stepper = () => {
    const [activeStep, setActiveStep] = useState(0)
    const [completed, setCompleted] = useState({})
    const stepLength = steps.length
    const completedSteps = Object.keys(completed).length
    const allStepsCompleted = completedSteps === stepLength
    const handleNext = () => {
        const newCompleted = completed
        newCompleted[activeStep] = true
        setCompleted(newCompleted)
        setActiveStep((prevActiveStep) => prevActiveStep + 1)
    }

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1)
    }
    const reset = () => {
        setActiveStep(0)
        setCompleted({})
    }
    return (
        <div>
            <Container>
            <Stepper
                activeStep={activeStep}>
                {steps.map((step, index) => (
                    <Step key={step}
                        completed={completed[index]}>
                        <StepLabel>{step}</StepLabel>
                    </Step>
                ))}
            </Stepper>
            {
                allStepsCompleted ?
                    (
                        <>
                            <Typography>All Step Complete</Typography>
                            <Button varian='outlined'
                            onClick={reset}>
                                Reset
                            </Button>
                        </>
                    ) :
                    (
                        <>

                            {/* <Typography>{stepDesc[activeStep]}</Typography> */}
                            {stepDesc[activeStep]}
                            <Button
                                onClick={handleBack}
                                variant='outlined'>
                                Back
                            </Button>
                            <Button
                                onClick={handleNext}
                                disabled={activeStep === stepLength}
                                variant="contained"
                            >Next</Button>
                        </>
                    )
            }
            </Container>

        </div>
    )
}

export default stepper