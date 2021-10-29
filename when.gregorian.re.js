;
~
{ re:
    { id:  "when.gregorian.re@ionify.net"
    , as: ["when", "specification"]
    , by: ["mike.lee", "team"]
    , on:  -5.20020705
    , to:  -7.202110291545
    , at:  -0.015
    , in:
        [ "forest-hills.ny.us.earth"
        ,     "san-jose.ca.us.earth"
        ,           "tokyo.jp.earth"
        ],
      it:
        [ "specifies an ordinal gregorian calendar date & time format:"

        + "  [+-]timezoneOffsetHour[timezoneOffsetMinute[calendarIdVersion]]"
        + "     .year[month[day[hour[minute[second[milli[micro[nano[pico[femto[atto[zepto[yocto]]]]]]]]]]]"

               -    8.20161117064221 <= / UTC-08:00 2016.11.17 06.42.21 means 2016, November 17th @ 6:42:21 am UTC-08:00 /
               + 1245.20181117215759 <= / UTC+12:45 2018.11.17 21.57.59 means 2018, November 17th @ 9:57:59 pm UTC+12:45 /

        , "can be represented as an IEEE 754 double-precision 64-bit binary format"
        + " number, like ecmascript's, but it'll be subject to the standard's"
        + " roundTiesToEven arithmetic rounding mode & will only have precision up to"
        + " ~17 decimal places (digits). that provides when@ precision ranging from a"
        + " signed 1-digit timezone offset number & 16-digit date & time remainder to"
        + " signed 8-digit timezone offset & calendar-id number & 9-digit date & time"
        + " remainder:"

              +- 0.2021102713075999 <= /2021.10.27 13:07:59.99 timezone offset   0hrs/
               - 12450009.202110260 <= /2021.10.26 0 gregorian timezone offset -12.45/
        
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
        [ "like that moments can be defined with custom epochs, year-size & more e.g:"
        + "  Hebrew    moments as date-time since God created us & our world"
        + "  Igbo      moments as 4-day, 7-week & 13-month cycles"
        + "  Japanese  moments as year(s) of a given emperor"
        + "  Gregorian moments as date-time BC & AD"
        + "  Mayan     moments as varying multi & intra-year cycles"
        + "  Stardate  moments as star trek's imaginary stardates"
        + "  Big-Bang  moments as date-time observance of light's existence"
        ]
    },

  when:
    { detail:
        [ "observer's relative perception of when an instant occurs:"
        , "  -:    bc: before"
        , "  0: epoch: jesus christ"
        , "  +:    ad: after"
        ]
    },

  timezone:
    { detail: "earth: -1400...1400"
    , values:
        { minimum: -1400
        , maximum: +1400
        }
    },

 "offset-hour":
    { detail: "earth: -14...14"
    , values:
        { minimum: -14
        , maximum: +14
        }
    },

 "offset-minute":
    { values:
        {       0: 00
        ,       1: 15
        ,       2: 30
        ,       3: 45
        , minimum: 00
        , maximum: 45
        }
    },

  month:
    { detail: "earth: 01..12"
    , values:
        { minimum:  1 || "01"
        , maximum: 12
        }
    },

  day:
    { detail: "earth: 01..31"
    , values:
        { minimum:  1 || "01"
        , maximum: 31
        }
    },

  time:
    { values:
        { maximum: 595959999999999999999999999999
        }
    },

  hour:
    { detail: "earth: 00..23"
    , values:
        { maximum: 23
        }
    },

  minute:
    { detail: "earth: 00...59"
    , values:
        { maximum: 59
        }
    },

  second:
    { detail: "earth: 00...59"
    , values:
        { maximum: 59
        }
    }
}
;