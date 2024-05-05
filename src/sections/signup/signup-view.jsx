import { useState } from 'react';

import axiosInstance from 'src/utils/axiosInstance'; // Adjust the path as needed
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import { alpha, useTheme } from '@mui/material/styles';
import InputAdornment from '@mui/material/InputAdornment';

import { useRouter } from 'src/routes/hooks';
import { RouterLink } from 'src/routes/components';

import { bgGradient } from 'src/theme/css';

import Logo from 'src/components/logo';
import Iconify from 'src/components/iconify';


export default function SignUpView() {
  const theme = useTheme();
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    username: '',
    email: '',
    password: ''
  });

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent the default form submission behavior
    try {
      // Send a POST request to your backend API endpoint using Axios
      const response = await axiosInstance.post('/auth/signup', formData);

      // Check if the response is successful (status code 2xx)
      if (response.status === 200) {
        // Redirect to login page after successful sign-up
        router.push('/login');
      } else {
        // Handle errors
        console.error('Sign-up failed:', response.data.error);
        // Display error message to the user
        // You can update state to show an error message on the form
      }
    } catch (error) {
      console.error('Error during sign-up:', error);
      // Handle network errors
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const renderForm = (
    <>
      <Stack spacing={3}>
        <TextField name="firstName" label="First Name" onChange={handleChange} />
        <TextField name="lastName" label="Last Name" onChange={handleChange} />
        <TextField name="username" label="Username" onChange={handleChange} />
        <TextField name="email" label="Email Address" onChange={handleChange} />
        <TextField
          name="password"
          label="Password"
           className='mb-3'
          type={showPassword ? 'text' : 'password'}
          onChange={handleChange}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton onClick={() => setShowPassword(!showPassword)} edge="end">
                  <Iconify icon={showPassword ? 'eva:eye-fill' : 'eva:eye-off-fill'} />
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
      </Stack>
      <Button
        fullWidth
        size="large"
        type="submit"
        variant="contained"
        color="primary"
        onClick={handleSubmit} 
      >
        Sign Up
      </Button>
    </>
  );

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
           <div className="logo text-center mb-3">
          <img src="/public/assets/Logo.png" alt="" width='120px' />
          </div>
          <Typography variant="h4" className='mb-3'>Sign up for an account</Typography>
         
          {renderForm}
          <Typography variant="body2" sx={{ mt: 2, mb: 5, display: 'flex', alignItems: 'center' }}>
            Already have an account?
            <RouterLink to="/login" className='ml-2' underline="hover" sx={{ ml: 1 }}> 
              <Typography  variant="subtitle2">Sign In</Typography>
            </RouterLink>
          </Typography>
        </Card>
      </Stack>
    </Box>
  );
}
