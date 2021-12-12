# intuitive 💠 specs

## [when](when.re.js)

numeric representation of date & time via a number's digits & prefixed `+` or `-` sign.

### [gregorian](when.gregorian.re.js)

+ earth-based date, time & timezone ranges
+ can be applied with other formats, like the following

### [timezone-focused](when.timezoned.re.js)

```js
 👇🏾
- 7.202110271615                      👇🏾
=   20211027           @ 16:15    UTC-07:00 gregorian calendar
=   2021.10.27         @ 16:15    UTC-07:00 gregorian calendar
=   October 27th, 2021 @  4:15 pm UTC-07:00 gregorian calendar
```

### [calendar-focused](when.calendared.re.js)

```js
              👇🏾
- 202110271615.10700                         👇🏾
= 20211027           @ 16:15    UTC-07:00 gregorian calendar
= 2021.10.27         @ 16:15    UTC-07:00 gregorian calendar
= October 27th, 2021 @  4:15 pm UTC-07:00 gregorian calendar
```

### [epoch-focused](when.epoched.re.js)

```js
👇🏾
+ 202110271615007000010
= 20211027           @ 16:15    UTC-07:00 gregorian calendar
= 2021.10.27         @ 16:15    UTC-07:00 gregorian calendar
= October 27th, 2021 @  4:15 pm UTC-07:00 gregorian calendar

...and its equidistant, pre-epoch (pre-year-0), instant|moment:

👇🏾
- 202110271615007000010
= 20211027      @ 16:15 UTC-07:00 gregorian calendar
= 2021.10.27    @ 16:15 UTC-07:00 gregorian calendar
= October 27th, @ 16:15 UTC-07:00 gregorian calendar 2021 years pre-epoch
```

🙇🏾‍♂️ through * [**God**](LICENSE.txt) * impossible -is- nothing ||
[🇬🇾👨🏾‍💻🇺🇸](https://en.wikipedia.org/wiki/Guyana)
[**mike lee**](https://github.com/iskitz) &
[**team**](https://github.com/orgs/baramita/people)
🤎
