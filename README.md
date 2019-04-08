# Silicon Valley Horoscope

A little library for composing Silicon Valley flavored parody horoscopes.

```
const { Horoscope } = require('sv-horoscope');
// this is just for getting a day-specific seed, so on a given day the user will receive a consistent horoscope.
const seed = (new Date()).toISOString().slice(0, 10);
const horoscope = new Horoscope('engineer', seed).composeHoroscope();
```

The 4 Signs (rather than Scorpio or whatever) are Engineer, Designer, PM, and Executive.

### License: MIT
