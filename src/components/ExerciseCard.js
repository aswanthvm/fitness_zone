import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button, Stack, Typography } from '@mui/material';

const ExerciseCard = ({ exercise }) => {
  const [imgError, setImgError] = useState(0);
  
  // ExerciseDB image URLs - try multiple CDN sources
  const imageUrls = [
    exercise.gifUrl,
    `https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/${exercise.id}/images/0.jpg`,
    `https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/${exercise.id}/0.jpg`,
    `https://via.placeholder.com/400x326/FFA9A9/FFFFFF?text=${encodeURIComponent(exercise.name)}`
  ].filter(Boolean);
  
  const currentImageUrl = imageUrls[imgError] || imageUrls[imageUrls.length - 1];
  
  return (
    <Link className="exercise-card" to={`/exercise/${exercise.id}`}>
      <img 
        src={currentImageUrl}
        alt={exercise.name} 
        loading="lazy"
        onError={() => {
          if (imgError < imageUrls.length - 1) {
            setImgError(imgError + 1);
          }
        }}
      />
    <Stack direction="row">
      <Button sx={{ ml: '21px', color: '#fff', background: '#FFA9A9', fontSize: '14px', borderRadius: '20px', textTransform: 'capitalize' }}>
        {exercise.bodyPart}
      </Button>
      <Button sx={{ ml: '21px', color: '#fff', background: '#FCC757', fontSize: '14px', borderRadius: '20px', textTransform: 'capitalize' }}>
        {exercise.target}
      </Button>
    </Stack>
    <Typography ml="21px" color="#000" fontWeight="bold" sx={{ fontSize: { lg: '24px', xs: '20px' } }} mt="11px" pb="10px" textTransform="capitalize">
      {exercise.name}
    </Typography>
    </Link>
  );
};

export default ExerciseCard;
