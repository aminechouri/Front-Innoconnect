import { useState } from 'react';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import { alpha, useTheme } from '@mui/material/styles';

import { bgGradient } from 'src/theme/css';

import Logo from 'src/components/logo';

export default function ForgotpwdView() {
  const theme = useTheme();
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can handle the submission of the forgot password form
    // For example, you can send a password reset email to the provided email address
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
          <Typography variant="h4">Forgot Password</Typography>

          <Typography variant="body2" sx={{ mt: 2, mb: 5 }}>
                Enter your email address below and we&apos;ll send you a link to reset your password.
            </Typography>


          <form onSubmit={handleSubmit}>
            <Stack spacing={3}>
              <TextField
                fullWidth
                name="email"
                label="Email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />

              <Button fullWidth type="submit" variant="contained" color="primary">
                Reset Password
              </Button>
            </Stack>
          </form>
        </Card>
      </Stack>
    </Box>
  );
}