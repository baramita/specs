# intuitive 💠 specs

## version

numeric representation of a thing’s changes via a number’s digits & prefixed `+` or `-` sign.

### form

`[+-][0]publication.[0]decision[revision]`

+ **`[+-]`**
  + `+` means full compatibility with previous publication
  + `-` means  incompatibilities with previous publication
  + blank  is full compatibility with previous publication
  + optional  `+-` compatibility sign at 0 pre-publication

+ **publication**
  + `0` prefix number means the initial &  undecided publication
  + any other  number means change(s) since previous publication

+ **decision | edition**
  + `0` prefix number means no   decision    about the stated publication
  + any other  number means some decision(s) about the stated publication

+ **revision**
  + `0` prefix  means no              change(s) since stated   decision
  + any other # means some compatible change(s) since previous revision

```js
  0.00            0               .0            0
=   compatible pre-publication undecided &   unrevised

👇🏾
+ 0.00   👇🏾       0               .0            0
=   compatible pre-publication undecided &   unrevised

👇🏾
- 0.00   👇🏾       0               .0            0
= incompatible pre-publication undecided &   unrevised

👇🏾
- 0.01   👇🏾       0               .0            01
= incompatible pre-publication undecided & 1st revised
```

```js
👇🏾
- 0.10   👇🏾       0                .1            0
= incompatible pre-publication 1st decided &   unrevised

👇🏾
+ 0.10   👇🏾       0                .1            0
=   compatible pre-publication 1st decided &   unrevised

👇🏾
  0.10   👇🏾       0                .1            0
=   compatible pre-publication 1st decided &   unrevised
```

```js
+ 1.0               1                         .0
= the  1st,   decided &   unrevised, publication

👇🏾
+ 1.1               1     👇🏾                  .1
= the  1st    decided &   compatible    revision

👇🏾
  1.02              1     👇🏾
= the  1st    decided &   compatible publication
& its  2nd  undecided                   revision
                   .0                          2
👇🏾
+ 1.010             1     👇🏾
= the  1st    decided &   compatible publication
& its 10th  undecided                   revision
                   .0                         10
```

```js
👇🏾
+ 02.0             02     👇🏾
= the  2nd  undecided &   compatible publication

👇🏾
- 02.0             02   👇🏾
= the  2nd  undecided & incompatible publication

👇🏾
+ 2.0               2     👇🏾
= the  2nd    decided &   compatible publication

👇🏾
- 2.0               2   👇🏾
= the  2nd    decided & incompatible publication

👇🏾
+ 2.01              2     👇🏾
= the  2nd    decided &   compatible publication
& its  1st  undecided                   revision
                   .0                          1
```

```js
👇🏾
- 3.013             3   👇🏾
= the  3rd,   decided & incompatible publication
& its 13th  undecided                   revision
                   .0                         13
👇🏾
  4.0               2     👇🏾
= the  4th    decided &   compatible publication

```

🙇🏾‍♂️ through * [**יהוה**](LICENSE.txt#L1) * impossible -is- nothing ||
[🇬🇾👨🏾‍💻🇺🇸](https://en.wikipedia.org/wiki/Guyana)
[**mike lee**](https://github.com/iskitz) &
[**team**](https://github.com/orgs/baramita/people)
🤲🏾
