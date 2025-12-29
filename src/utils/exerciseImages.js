export const localExerciseImages = {
  '0001': 'https://fitnessvolt.com/wp-content/uploads/exercises/1080/3-4-sit-up-0001.gif',
  '0002': 'https://liftmanual.com/wp-content/uploads/2023/04/45-side-bend.gif',
  '0003': 'https://homeworkouts.org/wp-content/uploads/anim-air-bike-crunches.gif',
  '0006': 'https://homeworkouts.org/wp-content/uploads/anim-alternate-heel-touches.gif',
};

export const getExerciseImageUrl = (exercise) => {
  const exerciseId = exercise.id;
  
  if (localExerciseImages[exerciseId]) {
    const customUrl = localExerciseImages[exerciseId];
    return customUrl.startsWith('http') ? customUrl : `/exercise-gifs/${customUrl}`;
  }
  
  return `https://exercisedb.io/wp-content/uploads/2023/01/${exerciseId}.gif`;
};
