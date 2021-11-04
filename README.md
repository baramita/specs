# 💠 specs

## [when](when.re.js)

a numeric presentation of date & time using a `+` or `-` sign & a number's digits

### [timezone-focused](when.timezoned.re.js)

```js
  -7.202110271615
=    2021.11.02         @ 16:15    UTC-07:00 gregorian calendar
=    November 2nd, 2021 @  4:15 pm UTC-07:00 gregorian calendar
```

### [calendar-focused](when.calendared.re.js)

```js
  -202110271615.10700
=  2021.11.02         @ 16:15    UTC-07:00 gregorian calendar
=  November 2nd, 2021 @  4:15 pm UTC-07:00 gregorian calendar
```

### [epoch-focused](when.epoched.re.js)

```js
  +202110271615007000010
=  2021.11.02         @ 16:15    UTC-07:00 gregorian calendar
=  November 2nd, 2021 @  4:15 pm UTC-07:00 gregorian calendar

👇🏾 and the equidistant, pre-epoch (year-0), instant 👇🏾

  -202110271615007000010
=  2021.11.02         @ 16:15    UTC-07:00 gregorian calendar
=  November 2nd, 2021 @  4:15 pm UTC-07:00 gregorian calendar
```
