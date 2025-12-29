import React, { useEffect, useState } from 'react';
import { Box, Button, Stack, TextField, Typography } from '@mui/material';

import { exerciseOptions, fetchData } from '../utils/fetchData';
import HorizontalScrollbar from './HorizontalScrollbar';

const SearchExercises = ({ setExercises, bodyPart, setBodyPart }) => {
  const [search, setSearch] = useState('');
  const [bodyParts, setBodyParts] = useState([]);

  useEffect(() => {
    const fetchExercisesData = async () => {
      try {
        const bodyPartsData = await fetchData('https://exercisedb.p.rapidapi.com/exercises/bodyPartList', exerciseOptions);

        setBodyParts(['all', ...bodyPartsData]);
      } catch (error) {
        // eslint-disable-next-line no-console
        console.error('Error fetching body parts:', error);
        setBodyParts(['all']);
      }
    };

    fetchExercisesData();
  }, []);

  const handleSearch = async () => {
    if (search) {
      try {
        console.log('Searching for:', search);
        const exercisesData = await fetchData('https://exercisedb.p.rapidapi.com/exercises?limit=1000', exerciseOptions);
        console.log('Fetched exercises:', exercisesData?.length || 0);

        const searchedExercises = exercisesData.filter(
          (item) => item.name.toLowerCase().includes(search)
                 || item.target.toLowerCase().includes(search)
                 || item.equipment.toLowerCase().includes(search)
                 || item.bodyPart.toLowerCase().includes(search),
        );

        console.log('Filtered exercises:', searchedExercises.length);
        window.scrollTo({ top: 1800, left: 100, behavior: 'smooth' });

        setSearch('');
        setExercises(searchedExercises);
      } catch (error) {
        // eslint-disable-next-line no-console
        console.error('Error searching exercises:', error);
        alert('Failed to fetch exercises. Please check your API key and try again.');
      }
    }
  };

  return (
    <Stack alignItems="center" mt="37px" justifyContent="center" p="20px">
      <Typography 
        fontWeight={700} 
        sx={{ 
          fontSize: { lg: '44px', xs: '30px' },
          background: 'linear-gradient(135deg, #333 0%, #666 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent'
        }} 
        mb="49px" 
        textAlign="center"
      >
        Awesome Exercises You <br /> Should Know
      </Typography>
      <Box 
        position="relative" 
        mb="72px"
        sx={{
          boxShadow: '0 10px 40px rgba(0, 0, 0, 0.1)',
          borderRadius: '50px',
          transition: 'all 0.3s ease',
          '&:hover': {
            boxShadow: '0 15px 50px rgba(255, 38, 37, 0.15)'
          }
        }}
      >
        <TextField
          height="76px"
          sx={{ 
            input: { 
              fontWeight: '700', 
              border: 'none', 
              borderRadius: '50px',
              padding: '0 20px'
            }, 
            width: { lg: '1170px', xs: '350px' }, 
            backgroundColor: '#fff', 
            borderRadius: '50px',
            '& fieldset': { border: 'none' }
          }}
          value={search}
          onChange={(e) => setSearch(e.target.value.toLowerCase())}
          placeholder="Search Exercises"
          type="text"
        />
        <Button 
          className="search-btn" 
          sx={{ 
            bgcolor: '#FF2625', 
            color: '#fff', 
            textTransform: 'none', 
            width: { lg: '173px', xs: '80px' }, 
            height: '56px', 
            position: 'absolute', 
            right: '0px', 
            fontSize: { lg: '20px', xs: '14px' },
            borderRadius: '50px',
            fontWeight: 'bold'
          }} 
          onClick={handleSearch}
        >
          Search
        </Button>
      </Box>
      <Box sx={{ position: 'relative', width: '100%', p: '20px' }}>
        <HorizontalScrollbar data={bodyParts} bodyParts setBodyPart={setBodyPart} bodyPart={bodyPart} />
      </Box>
    </Stack>
  );
};

export default SearchExercises;
