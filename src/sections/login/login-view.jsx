import { useState } from 'react';

import axiosInstance from 'src/utils/axiosInstance'; 
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import LoadingButton from '@mui/lab/LoadingButton';
import { alpha, useTheme } from '@mui/material/styles';
import InputAdornment from '@mui/material/InputAdornment';

import { useRouter } from 'src/routes/hooks';
import { RouterLink } from 'src/routes/components';

import { bgGradient } from 'src/theme/css';

import Logo from 'src/components/logo';
import Iconify from 'src/components/iconify';

export default function LoginView() {
  const theme = useTheme();
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent the default form submission behavior
    try {
      // Send a POST request to your backend API endpoint using Axios
      const response = await axiosInstance.post('/auth/signin', formData);

      // Check if the response is successful (status code 2xx)
      if (response.status === 200) {
        // Redirect to dashboard page after successful login
        router.push('/dashboard');
      } else {
        // Handle errors
        console.error('Login failed:', response.data.error);
        // Display error message to the user
        // You can update state to show an error message on the form
      }
    } catch (error) {
      console.error('Error during login:', error);
      // Handle network errors
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleForgotPassword = () => {
    router.push('/forgotpwd');
  };

  const renderForm = (
    <>
      <Stack spacing={3}>
        <TextField name="email" label="Email address" onChange={handleChange} />

        <TextField
          name="password"
          label="Password"
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

      <LoadingButton
        fullWidth
        size="large"
        className='mt-3'
        type="submit"
        variant="contained"
        color="inherit"
        onClick={handleSubmit} 
      >
        Login
      </LoadingButton>

      <Typography variant="body2" sx={{ mt: 1, textAlign: 'center' }}>
        <RouterLink to="/forgotpwd" underline="hover" onClick={handleForgotPassword}>
          Forgot password?
        </RouterLink>
      </Typography>
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

          <div className="logo text-center mb-5">
          <img src="/public/assets/Logo.png" alt="" width='120px' />
          </div>
          <Typography variant="h4">Sign in to Innoconnect</Typography>

          <Typography variant="body2" sx={{ mt: 2, mb: 5, display: 'flex', alignItems: 'center' }}>
            Don’t have an account?
            <RouterLink className="ml-2" to="/signup" underline="hover" sx={{ ml: 3 }}>
              <Typography variant="subtitle2">Get started</Typography>
            </RouterLink>
          </Typography>

          {renderForm}
        </Card>
      </Stack>
    </Box>
  );
}
