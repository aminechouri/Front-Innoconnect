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

import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';

import { products } from 'src/_mock/products';

import ProductCard from 'src/sections/products/product-card';


export default function ProfilView() {

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
      
        <Stack alignItems="center" justifyContent="center">
          <Card
            sx={{
              p: 5,
              width: 1,
              maxWidth: '80%',
            }}
          >
            <Typography variant="h4">Details Profil : Chayma Abid</Typography>
          
            <form onSubmit={handleSubmit} className='mb-5'>
                <Stack spacing={3} m={2}>
                  <TextField
                    fullWidth
                    label="full name"
                    name="FullaName"
                    value='chayma abid'
                    onChange={handleChange}
                    required
                  />
                  <TextField
                    fullWidth
                    label="Username"
                    name="username"
                    value="chayma-abid"
                    onChange={handleChange}
                    required
                  />
                    <TextField
                    fullWidth
                    label="E-mail"
                    name="mail"
                    value="chayma.abid@gmail.com"
                    onChange={handleChange}
                    required
                  />
                     <TextField
                    fullWidth
                    label="Role"
                    name="role"
                    value="Enterpreneur"
                    onChange={handleChange}
                    required
                  />
                  <Button variant="contained" onClick={handleNext}>
                    Edit profil
                  </Button>
                  <Button variant="contained" onClick={handleNext}>
                    Delete profil
                  </Button>
                </Stack>
            </form>
            <Typography variant="h4" className='mb-5'>List of saved ideas</Typography>
            <Grid container spacing={3} className="mt-5">
            
        {products.map((product) => (
          <Grid key={product.id} xs={12} sm={6} md={4}>
            <ProductCard product={product} />
          </Grid>
        ))}
      </Grid>
          </Card>
        </Stack>

       


      </Box>
    );
}
