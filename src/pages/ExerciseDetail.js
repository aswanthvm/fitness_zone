import React from 'react';
import { useParams } from 'react-router-dom';
import { Box } from '@mui/material';

const ExerciseDetail = () => {
  const { id } = useParams();

  return (
    <Box>
      <h1>Exercise Detail</h1>
      <p>Exercise ID: {id}</p>
    </Box>
  );
};

export default ExerciseDetail;
