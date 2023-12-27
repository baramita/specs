# sensible 💠 specifications

## version

numeric representation of a thing’s changes via a number’s digits, optionally
prefixed with a `+` or `-` sign, to enable arithmetic & intuitive, human &
software sensing & interpretation.

### form

+ `[+-]publication[.edition[revision]]`

  + **[]** means all content within the brackets is optional
  + **[[]]** means optional content within optional content

+ **`[+-]`**
  + none means full compatibility with previous publication
  + `+` means full compatibility with previous publication
  + `-` means  incompatibilities with previous publication
  + `+-` are optional compatibility signs at prepublication `0`

+ **publication**
  + may add to, reduce, or change expectations set by a prior publication
  + `0` means it is a prepublication
  + other numbers mean change(s) since the previous publication

+ **edition**
  + is always fully compatible with its publication & preceeding edition
  + may add to but not reduce or change its publication's expectations
  + `0` prefixed edition is a prediction with one or more undecided edit(s)
  + other numbers mean some decided edit(s) to the stated publication

+ **revision**
  + is always fully compatible with its edition's previous revision(s)
  + may **not** add to, nor reduce, nor change its publication's expectations
  + `0` prefixed revision is a prevision; one or more undecided revision(s)
  + all other numbers mean some decided revision(s) to the stated edition

### function

+ **publications, editions** & **revisions**
  + must each range from 1 to 9 or higher
  + may have different ranges

+ **editions** & **revisions**
  + are evaluated as the smallest value with a trailing 0 within their range
  + should be specified with all of their digits
    + for example, given
      + edition range 0 -  9,  version 1.0 is publication 1 edition 0
      + edition range 0 -  9,  version 1.1 is publication 1 edition 1
      + edition range 0 - 99, version 1.10 is publication 1 edition 10
      + edition range 0 - 99, version 1.1 is publication 1 edition 10
      + edition range 0 - 99, version 1.01 is publication 1 edition 1

+ **predictions**
  + are always prefixed by the same number of zeros as the total number of editions
    + for example, given
      + edition range 0 -  9,  version 1.01 is publication 1 prediction 1
      + edition range 0 - 99, version 1.01 is publication 1 edition 1
      + edition range 0 - 99, version 1.001 is publication 1 prediction 1

+ **previsions**
  + are always prefixed by the same number of zeros as the total number of revisions
    + for example, given edition range 0 - 9, and
      + revision range 0 -  9,  version 1.101 is publication 1 edition 1 prevision 1
      + revision range 0 - 99,  version 1.101 is publication 1 edition 1 prevision 10

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
  4.0               4     👇🏾
= the  4th    decided &   compatible publication

```

🙇🏾‍♂️ through * [**יהוה**](LICENSE.txt#L1) * impossible -is- nothing ||
[🇬🇾👨🏾‍💻🇺🇸](https://en.wikipedia.org/wiki/Guyana)
[**mike lee**](https://github.com/iskitz) &
[**team**](https://github.com/orgs/baramita/people)
🤲🏾
