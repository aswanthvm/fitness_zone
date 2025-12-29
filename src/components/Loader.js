import React from 'react';
import { Stack } from '@mui/material';
import { InfinitySpin } from 'react-loader-spinner';

const Loader = () => (
  <Stack direction="row" justifyContent="center" alignItems="center" width="100%" sx={{ minHeight: '200px' }}>
    <InfinitySpin
      width="200"
      color="#FF2625"
    />
  </Stack>
);

export default Loader;
