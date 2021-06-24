How long did you spend on the coding assignment?  
- Approx 3-4 hours, 1 hour or so was spend debugging / setting up a cors middleware server on heroku as the API did not allow proper endpoints.

a. What would you add to your solution if you had more time? 
- I would add tests, improved filtering and improve the UI/UX by spending some time on figma or sketch.

2. What was the most useful feature that was added to the latest version of your chosen
   language? Please include a snippet of code that shows how you&#39;ve used it. 
   - Not the "latest" but I've been using custom hooks quite alot and in the past I've setup custom hooks for api end points and parsing data.

Code example

```
import { useState } from 'react';

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height,
  };
}

function useWindowDimensions() {
  const [windowDimensions] = useState(getWindowDimensions());

  return windowDimensions;
}

export default useWindowDimensions;
```

3. How would you track down a performance issue in production? Have you ever had to do
this? 
I've had to track performance issues quite often coming from a mobile developer where performance and optimizations matter quite often, using the chrome extension react dev tools, it can really show where things are unnecessarily re-rendering.
4. How would you improve the API that you just used? 
The endpoints for getting an individual book is blocked by cors error, the structure of there data is a mess as well and could use refactoring.
5. Please describe yourself using correctly formatted JSON.

```
{
    name: "Nirav",
    hobbies: "Programming mini io games, travel and food",
    favorite_language: "Javascript!!",
    favorite_library: "React (React counts as a library and not a framework weirdly.)
}
```
