# Adding Exercise GIFs to Your App

## How to Add 3D Muscle Anatomy GIFs

### Step 1: Get Exercise GIFs
You can download exercise GIFs from these sources:

**Free Sources:**
- **MuscleWiki**: https://musclewiki.com (right-click and save GIFs)
- **Fitness Programer**: https://fitnessprogramer.com
- **Inspire USA Foundation**: https://www.inspireusafoundation.org
- **Exercise GIF Collections on GitHub**

**Paid/Premium Sources:**
- **3D Exercise Animations**: https://www.3dexercise.com
- **Professional Fitness Libraries**: Purchase bulk exercise GIF packs

### Step 2: Save GIFs to Your Project
1. Download the exercise GIF (e.g., `3-4-sit-up.gif`)
2. Save it to: `public/exercise-gifs/`
3. Use a clear naming convention (lowercase, hyphens)

### Step 3: Map the GIF to Exercise ID
1. Open: `src/utils/exerciseImages.js`
2. Find the exercise ID from your API (e.g., "0001" for "3/4 sit-up")
3. Add mapping:
   ```javascript
   export const localExerciseImages = {
     '0001': '3-4-sit-up.gif',
     '0002': 'ab-crunch.gif',
     // Add more...
   };
   ```

### Step 4: Test
1. Restart your development server
2. Search for the exercise
3. The local GIF will load instead of the CDN

## Quick Bulk Setup

To add many exercises at once:

### Option A: Download a GIF Pack
1. Search GitHub for "exercise gif database"
2. Clone a repository with exercise GIFs
3. Copy GIFs to `public/exercise-gifs/`
4. Create a script to map IDs to filenames

### Option B: Create a Download Script
```javascript
// download-gifs.js - example script
const exercises = [
  { id: '0001', url: 'https://example.com/3-4-sit-up.gif' },
  // ... more exercises
];

// Use fetch or download library to save GIFs locally
```

## Current Status
- ✅ Directory created: `public/exercise-gifs/`
- ✅ Image utility ready: `src/utils/exerciseImages.js`
- ✅ Components updated to use local GIFs
- 🔲 Add your GIF files
- 🔲 Update the mapping

## File Naming Convention
Use this format: `{exercise-name}.gif`
- ✅ Good: `3-4-sit-up.gif`, `bench-press.gif`
- ❌ Bad: `Exercise 1.gif`, `IMG_001.gif`

## Finding Exercise IDs
Run this in your app console:
```javascript
// In browser console while app is running
console.log(exercises.map(e => ({ id: e.id, name: e.name })));
```

Or check the API response in browser DevTools → Network tab.
