# intuitive 💠 specs

## version

numeric representation of a thing’s changes via a number’s digits & prefixed `+` or `-` sign.

### form

`[+-][0]publication.[0]revision`

+ **`[+-]`**
  + `+` means full compatibility with previous publication
  + `-` means  incompatibilities with previous publication
  + blank  is full compatibility with previous publication
  + no needed `+-` compatibility sign at 0 & 1 publications

+ **publication**
  + `0` prefix number means the initial &  undecided publication
  + any other  number means change(s) since previous publication

+ **revision**
  + `0` prefix  means undecided compatible change(s) since previous revision
  + any other # means   decided compatible change(s) since previous revision

```js
  0.0
= the  1st, undecided &   unrevised, publication

+ 0.0
= the  1st, undecided &   unrevised, publication

- 0.0
= the  1st, undecided &   unrevised, publication

- 0.1
= the  1st  undecided & incompatible    revision

+ 0.1
= the  1st  undecided &   compatible    revision

  0.1
= the  1st  undecided                   revision

+ 1.0
= the  1st,   decided &   unrevised, publication

+ 1.1
= the  1st    decided &   compatible    revision

+ 1.02
= the  1st    decided &   compatible publication
& its  2nd  undecided                   revision

+ 1.010
= the  1st    decided &   compatible publication
& its 10th  undecided                   revision

+ 02.0
= the  2nd  undecided &   compatible publication

- 02.0
= the  2nd  undecided & incompatible publication

+ 2.0
= the  2nd    decided &   compatible publication

- 2.0
= the  2nd    decided & incompatible publication

+ 2.01
= the  2nd    decided &   compatible publication
& its  1st  undecided                   revision

- 3.013
= the  3rd,   decided & incompatible publication
& its 13th  undecided                   revision

  4.0
= the  4th    decided &   compatible publication

```

🙇🏾‍♂️ through * [**יהוה**](LICENSE.txt) * impossible -is- nothing ||
[🇬🇾👨🏾‍💻🇺🇸](https://en.wikipedia.org/wiki/Guyana)
[**mike lee**](https://github.com/iskitz) &
[**team**](https://github.com/orgs/baramita/people)
🤲🏾
