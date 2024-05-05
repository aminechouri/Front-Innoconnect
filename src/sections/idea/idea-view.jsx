import React, { useState } from 'react';
import throttle from 'lodash/throttle'; // Import throttle from lodash
import axiosInstance from 'src/utils/axiosInstance';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import { alpha, useTheme } from '@mui/material/styles';
import { bgGradient } from 'src/theme/css';
import Logo from 'src/components/logo';

export default function IdeaView() {
  const theme = useTheme();
  const [activeStep, setActiveStep] = useState(0);
  const [formData, setFormData] = useState({
    ideaName: "",
    briefDescription: "",
    problem1: "",
    solution1: "",
    problem2: "",
    solution2: "",
    problem3: "",
    solution3: "",
    valueProposition: "",
    competitiveAdvantage: "",
    customerSegments: "",
    alternativeOffers: "",
    communicationChannels: ""
  });
  const [businessPlan, setBusinessPlan] = useState('');
  const [error, setError] = useState(null);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  // Define throttled function for form submission
  const throttledSubmit = throttle(async () => {
    try {
      // Send form data to backend endpoint using Axios
      const response = await axiosInstance.post("/ai/idea", formData);
      // Handle successful response from backend
      console.log('Business plan generated:', response);
      setBusinessPlan(response.data); // Set the generated business plan in state
      setError(null); // Clear any previous error
    } catch (err) {
      // Handle errors
      console.log('Error generating business plan:', err);
      console.log('responses', err.response.data);
      setError('Error generating business plan. Please try again.'); // Set error message in state
    }
  }, 2000);// Throttle to 2 seconds (2000 milliseconds)

  const handleSubmit = (event) => {
    event.preventDefault();
    throttledSubmit(); // Trigger the throttled form submission
  };

  const handleNext = () => {
    console.log(formData);
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  return (
    <Box
      sx={{
        ...bgGradient({
          color: alpha(theme.palette.background.default, 0.9),
          imgUrl: '/assets/background/overlay_4.jpg',
        }),
        height: 1,
      }}
    >
      <Logo
        sx={{
          position: 'fixed',
          top: { xs: 16, md: 24 },
          left: { xs: 16, md: 24 },
        }}
      />
      <Stack alignItems="center" justifyContent="center" sx={{ height: 1 }}>
        <Card
          sx={{
            p: 5,
            width: 1,
            maxWidth: 420,
          }}
        >
          <Typography variant="h4">Idea Submission Form</Typography>
          <Stepper activeStep={activeStep} alternativeLabel>
            <Step>
              <StepLabel>Introduction</StepLabel>
            </Step>
            <Step>
              <StepLabel>Problems & Solutions</StepLabel>
            </Step>
            <Step>
              <StepLabel>Business Details</StepLabel>
            </Step>
          </Stepper>
          <form onSubmit={handleSubmit}>
            {activeStep === 0 && (
              <Stack spacing={3}>
                <TextField
                  fullWidth
                  label="Idea's name"
                  name="ideaName"
                  value={formData.ideaName}
                  onChange={handleChange}
                  required
                />
                <TextField
                  fullWidth
                  label="Brief Description"
                  name="briefDescription"
                  value={formData.briefDescription}
                  onChange={handleChange}
                  required
                />
                <Button variant="contained" onClick={handleNext}>
                  Next
                </Button>
              </Stack>
            )}
            {activeStep === 1 && (
              <Stack spacing={3}>
                <Typography variant="h6">
                  Describe the main problems your idea addresses and its solutions
                </Typography>
                <TextField
                  fullWidth
                  label="Problem 1"
                  name="problem1"
                  value={formData.problem1}
                  onChange={handleChange}
                  required
                />
                <TextField
                  fullWidth
                  label="Solution 1"
                  name="solution1"
                  value={formData.solution1}
                  onChange={handleChange}
                  required
                />
                <TextField
                  fullWidth
                  label="Problem 2"
                  name="problem2"
                  value={formData.problem2}
                  onChange={handleChange}
                  required
                />
                <TextField
                  fullWidth
                  label="Solution 2"
                  name="solution2"
                  value={formData.solution2}
                  onChange={handleChange}
                  required
                />
                <TextField
                  fullWidth
                  label="Problem 3"
                  name="problem3"
                  value={formData.problem3}
                  onChange={handleChange}
                  required
                />
                <TextField
                  fullWidth
                  label="Solution 3"
                  name="solution3"
                  value={formData.solution3}
                  onChange={handleChange}
                  required
                />
                <Button variant="contained" onClick={handleBack}>
                  Back
                </Button>
                <Button variant="contained" onClick={handleNext}>
                  Next
                </Button>
              </Stack>
            )}
            {activeStep === 2 && (
              <Stack spacing={3}>
                <TextField
                  fullWidth
                  label="Value proposition"
                  name="valueProposition"
                  value={formData.valueProposition}
                  onChange={handleChange}
                  required
                />
                <TextField
                  fullWidth
                  label="Competitive advantage"
                  name="competitiveAdvantage"
                  value={formData.competitiveAdvantage}
                  onChange={handleChange}
                  required
                />
                <TextField
                  fullWidth
                  label="Customer segments"
                  name="customerSegments"
                  value={formData.customerSegments}
                  onChange={handleChange}
                  required
                />
                <TextField
                  fullWidth
                  label="Alternative offers"
                  name="alternativeOffers"
                  value={formData.alternativeOffers}
                  onChange={handleChange}
                  required
                />
                <TextField
                  fullWidth
                  label="Communication channels"
                  name="communicationChannels"
                  value={formData.communicationChannels}
                  onChange={handleChange}
                  required
                />
                <Button variant="contained" onClick={handleBack}>
                  Back
                </Button>
                <Button type="submit" variant="contained">
                  Submit
                </Button>
              </Stack>
            )}
          </form>
          {businessPlan && (
            <Card>
              <Typography variant="h5">Generated Business Plan:</Typography>
              <Typography>{businessPlan.businessPlan}</Typography>{' '}
              {/* Access businessPlan inside the object */}
            </Card>
          )}
          {error && (
            <Typography variant="body1" color="error">
              {error}
            </Typography>
          )}
        </Card>
      </Stack>
    </Box>
  );
}
