import React from 'react';
import { Box, Typography, IconButton, Divider } from '@mui/material';
import {
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  Youtube,
} from 'lucide-react';

const Footer = () => {
  return (
    <Box
      sx={{
        backgroundColor: '#2e7d32',
        color: 'white',
        mt: 6,
        pt: 4,
        pb: 2,
        textAlign: 'center',
      }}
    >
      {/* Social Icons */}
      <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, mb: 2 }}>
        <IconButton
          component="a"
          href="https://facebook.com"
          target="_blank"
          sx={{ color: 'white' }}
        >
          <Facebook />
        </IconButton>
        <IconButton
          component="a"
          href="https://twitter.com"
          target="_blank"
          sx={{ color: 'white' }}
        >
          <Twitter />
        </IconButton>
        <IconButton
          component="a"
          href="https://linkedin.com"
          target="_blank"
          sx={{ color: 'white' }}
        >
          <Linkedin />
        </IconButton>
        <IconButton
          component="a"
          href="https://instagram.com"
          target="_blank"
          sx={{ color: 'white' }}
        >
          <Instagram />
        </IconButton>
        <IconButton
          component="a"
          href="https://youtube.com"
          target="_blank"
          sx={{ color: 'white' }}
        >
          <Youtube />
        </IconButton>
      </Box>

      <Divider sx={{ backgroundColor: 'white', mb: 2, mx: 'auto', width: '60%' }} />

      {/* Footer Text */}
      <Typography variant="body2" sx={{ fontSize: '0.95rem' }}>
        © 2025 Fatima Jinnah Women University. All rights reserved.
      </Typography>
    </Box>
  );
};

export default Footer;
