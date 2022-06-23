# intuitive 💠 specs

## version

numeric representation of a thing’s changes via a number’s digits & prefixed `+` or `-` sign.

### form

`[+-][0]change.[0]revision`

+ **`[+-]`**
   + `+` means full compatibility with previous change
   + `-` means  incompatibilities with previous change
   + blank  is full compatibility with previous change
   + no needed `+-` compatibility sign at 0 & 1 changes

+ **change**
   + `0` prefix means initial undecided publication
   + any other number means api change(s) since previous change

+ **revision**
   + `0` prefix  means undecided compatible change(s) since previous revision
   + any other # means   decided compatible change(s) since previous revision

```js
  0.0
= the  1st, undecided &   unrevised, api

+ 0.0
= the  1st, undecided &   unrevised, api

- 0.0
= the  1st, undecided &   unrevised, api

- 0.1
= the  1st  undecided & incompatible api revision

+ 0.1
= the  1st  undecided &   compatible api revision

  0.1
= the  1st  undecided                api revision

+ 1.0
= the  1st,   decided &   unrevised, api

+ 1.1
= the  1st    decided &   compatible api revision

+ 1.02
= the  1st    decided &   compatible api change
& its  2nd  undecided                api revision 

+ 1.010
= the  1st    decided &   compatible api change
& its 10th  undecided                api revision 

+ 02.0
= the  2nd  undecided &   compatible api change

- 02.0
= the  2nd  undecided & incompatible api change

+ 2.0
= the  2nd    decided &   compatible api change

- 2.0
= the  2nd    decided & incompatible api change

+ 2.01
= the  2nd    decided &   compatible api change
& its  1st  undecided                api revision 

- 3.013
= the  3rd,   decided & incompatible api change
& its 13th  undecided                api revision 

  4.0
= the  4th    decided &   compatible api change

```

🙇🏾‍♂️ through * [**יהוה**](LICENSE.txt) * impossible -is- nothing ||
[🇬🇾👨🏾‍💻🇺🇸](https://en.wikipedia.org/wiki/Guyana)
[**mike lee**](https://github.com/iskitz) &
[**team**](https://github.com/orgs/baramita/people)
🤲🏾
