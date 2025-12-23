import React from 'react';
import { Box, Stack, Typography } from '@mui/material';

const Footer = () => {
  return (
    <Box mt="80px" bgcolor="#FFF3F4">
      <Stack gap="40px" alignItems="center" px="40px" pt="24px">
        <Typography variant="h5" pb="40px" mt="20px">
          Fitness Zone © 2025
        </Typography>
      </Stack>
    </Box>
  );
};

export default Footer;
