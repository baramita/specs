;
~
{ re:
    { id:  "when.epoched.re@ionify.net"
    , as: ["when", "specification"]
    , by: ["mike.lee", "team"]
    , on:  -5.20020705
    , to:  -7.20211104
    , at:  -0.020
    , in:
        [         "queens.ny.us.earth"
        , "silicon-valley.ca.us.earth"
        ,             "tokyo.jp.earth"
        ],
      it:
        [ "specifies an ordinal epoch-defined date & time format:"

        + "  [+-]year[month[day[hour[minute[second[milli[micro[nano[pico[femto[atto[zepto[yocto]]]]]]]]]]]"
        + "     (0|9)(timezoneOffset)(calendarIdVersion):"

              +  20161117008000010 <= /2016.11.17 0 0800 0010 = 2016, November 17th UTC-08:00/
              +  20181117912450010 <= /2018.11.17 9 1245 0010 = 2018, November 17th UTC+12:45/

        , "can be represented as an IEEE 754 double-precision 64-bit binary format"
        + " number, like ecmascript's, but it'll be subject to the standard's"
        + " roundTiesToEven arithmetic rounding mode & will only have precision up to"
        + " ~17 decimal places (digits). that provides when@ digit-precision of:"
        + " signed 8-digit YEARDATE, 5-digit timezone & 4-digit calendar & version"
        
        , "has millisecond precision up to tens-place if timezone offset is unneeded"
        + " because although ecmascript has numeric precision to 21 places, its"
        + " maximum safe integer value is less than every number needed to represent"
        + " a when@ with precision to milliseconds ones-place or sub-milliseconds:"
                  
        + "  [+-]YYYYMMDDHHMMSSMM"
              +  2021102213035399      <= /2021.10.22.13.03.53.99 = 1:03:53:990 ms pm/
              +  202110221303539991231 <= /2021.10.22.13.03.5:.999.123.1 is 21-places/
              +- 9007199254740991      <= /ecmacript's max safe integer has 16-places/
        ],
      we:
        [ "will define as IEEE 754 & bigint whole numbers that always include"
        + " calendar version & timezone 🥳 via:"

        + " [+-]YEARDATETIME(0|9)(TZOF)(CVER) +-YYYYMMDDHHMM(0|9)(HHMM)(CCCV) where:"

        + "     C:  CCC: C:digit: 000-999   Calendar Id #: hebrew, gregorian..."
        + "   VER:    V: V:digit:   0-9     Calendar Version"
        + "  TZOF: HHMM: H:Hour,  M:Minute: Timezone Offset"

        + "   0TZOF means before calendar's base timezone👏🏾"
        + "   9TZOF means after  calendar's base timezone👏🏾"

        , "will apply ecmascript.bigint to when.epoched & maybe for when.timezoned:"
        + " https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/BigInt"

             +- 20211029032857999999999999999999999999n
             +-/2021 10.29 03.28.57 999ms 999mcs 999ns 999ps 999fs 999as 999zs 999ys/

        , "like bigint enabling ordinal epoch with postfixed calendar id & version &"
        + " timezone & full digit-precision for when@: 👏🏾🥳🎉"

             +    20211030033358997996995994993992991990007000010n
             +    20211030033358997996995994993992991990n      &   0 & 0700  & 0010
             ^/   2021 10.30 03:33:58.997996995994993992991990 utc -   07:00 gregorian/

             +  - 20211030033358997996995994993992991990007000010n
             +  - 20211030033358997996995994993992991990n       & 0 & 0700 &   0010
             ^/   the equidistant, pre-epoch instant per the same timezone & calendar/
        ]
    },

  when:
    { format: "[+-]year-date-time(0|9)(timezone)(calendar)"
    , detail:
            [ "observer's perception of when an instant occurs"
            , " + prefix = after  calendar's epoch"
            , " - prefix = before calendar's epoch"
            , " 0 prefixed timezone = before calendar's base timezone"
            , " 9 prefixed timezone = after  calendar's base timezone"
            ],
      values:
        { minimum: -99999999999999999999999999999999999999099999999
        , maximum: +99999999999999999999999999999999999999999999999
        }
    },

 "year-date-time":
    { values:
        { minimum: -99999999999999999999999999999999999999
        }
    },

  date:
    { values:
        { minimum: 00000000
        }
    },
  
  year:
    { values:
        { minimum: 0000
        }
    }
}
;