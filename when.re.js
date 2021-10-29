;
~
{ re:
    { id:  "when.re@ionify.net"
    , as: ["calendar", "date", "time", "specification"]
    , by: ["mike.lee", "team"]
    , on:  -5.20020705
    , to:  -7.202110291615
    , at:  -0.018
    , in:
        [ "forest-hills.ny.us.earth"
        ,     "san-jose.ca.us.earth"
        ,           "tokyo.jp.earth"
        ],
      it:
        [ "specifies an ordinal calendar date & time format:"

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
        [ "will ionize EPOCHCAL explicit date & time epoch implicit calendar"
        + " specification"
        
        , "will apply ecmascript.bigint to epochcalendar & maybe for timezone-first:"
        + " https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/BigInt"

              +- 20211029032857999999999999999999999999n
              +-/2021 10.29 03.28.57 999ms 999mcs 999ns 999ps 999fs 999as 999zs 999ys/

        , "want when@ implementations to keep their [+-] signed direction then"
        + " convert to +when@ so each sub-attribute, e.g. minute, month & calendar-id"
        + " will be +positive when parsed, with direction later applied where needed"

        , "will implement an ecmascript getter for attribute.values.current that'll"
        + " lookup|calculate & provide the attribute's current [local] host"
        + " environment value"

        , "like {format:'some(thing)[else]'} where () = required & [] = optional"

        , "like that ~re.at should not change for documentation-only changes already"
        + " tracked by ~re.to:when. ion documentor can be sensitive to those changes."
        + " that'll help ~re.at versions more accurately track behavior & data ion's"
        + " actual content change."

        , "know that when@ well represents numeric date-time versus ecmascript.Date"
        + " : more date & time details in same number of digits; i.e. timezone offset"
        + " : discernable natural language numeric date-time format"
        + " : near precise milliseconds: to hundreds & tens vs hundreds, tens & ones"
        + " : can specify calendar type, timezone offset & date when time is unneeded"
        + " : enables simpler & more accurate mathematical date & time comparison"
        + " : can represent earth-star moments up to ones-place billions of years"
        + " : can represent existence moments up to tens-place trillions of years"
        
        , "like renaming when@ 'instant' if any future naming conflicts|needs occur"
        
        , "like that moments can be defined with custom epochs, year-size & more e.g:"
        + "  Hebrew    moments as date-time since God created us & our world"
        + "  Igbo      moments as 4-day, 7-week & 13-month cycles"
        + "  Japanese  moments as year(s) of a given emperor"
        + "  Gregorian moments as date-time BC & AD"
        + "  Mayan     moments as varying multi & intra-year cycles"
        + "  Stardate  moments as star trek's imaginary stardates"
        + "  Big-Bang  moments as date-time observance of light's existence"
        
        , "like how a single-digit year-prefix can represent pre & post-epoch moments"
        + "  e.g. -8.120181125 is 2018.11.25 @ UTC-08:00 post-epoch (post year-0)"
        + "  e.g. -8.020181125 is 2018.11.25 @ UTC-08:00 pre -epoch (pre  year-0)"
        
        , "like [+-]TZOFCVER.YEARDATETIME +-HHMMCCCV.YYYYMMDDHHMM where:"
        
        + "  [+-]: without TZOF + means post-epoch     & - means pre-epoch"
        + "      : with    TZOF + means post-base time & - means pre-base time"
        
        + "  TZOF: HHMM: H:Hour,  M:Minute: Timezone Offset"
        + "     C:  CCC: C:digit: 0-999     Calendar Id #: hebrew, gregorian..."
        + "   VER:    V: V:digit: 0-9       Calendar Version"
        ]
    },

  when:
    { format: null
    , detail:
            [ "observer's perception of when an instant occurs"
            ]
    ,   type: "number"
    , signed:  true
    , digits:  46 || 8+17+3*7
    , values:
        { minimum: null
        , current: null || "live value in [local] host environment"
        , maximum: null
        }
    },

  timezone:
    { format: null
    , detail: "relative to calendar's base timezone; e.g. gregorian utc 00:00"
    ,   type: "number"
    , signed:  true
    , digits:  4
    , values:
        { minimum: null
        , current: null || "live value in [local] host environment"
        , maximum: null
        }
    },

 "offset-hour":
    { detail:
        [ "timezone's offset in hours; earth: 0..14, max earth hour is 23"
        , "must be 1 digit if less than 10 to ensure interpreted as a decimal number"
        ]
    ,   type: "number"
    , digits:  2
    , values:
        { minimum:  0
        , current: null || "live value in [local] host environment"
        , maximum: 99
        }
    },

 "offset-minute":
    { detail: "timezone's offset in minutes, optional if 00; earth: 00, 15, 30, 45"
    ,   type: "number"
    ,   sign: "+"
    , digits:  2
    , values:
        { minimum: 00
        , current: null || "live value in [local] host environment"
        , maximum: 99
        }
    },

  calendar:
    { format: "calendar-id(calendar-version)"
    , detail: "identifies a specific & unique [revised] calendar among all known"
    ,   type: "number"
    , digits:  4
    , values:
        { minimum: 0000
        , current: null || "live value in [local] host environment"
        , maximum: 9999
        }
    },

 "calendar-id":
    { detail: "unique # for 1 of all known calendar types, e.g. hebrew, gregorian, etc."
    ,   type: "number"
    , digits:  3
    , values:
        { minimum: 000
        , current: null || "live value in [local] host environment"
        , maximum: 999
        }
    },

 "calendar-version":
    { detail: "unique revision of 1 specific type of calendar, e.g. hebrew version 2"
    ,   type: "number"
    , digits:  1
    , values:
        { minimum: 0
        , current: null || "live value in [local] host environment"
        , maximum: 9
        }
    },

 "year-date-time":
    { format: "date[time]"
    , detail:
            [ "observer's perception of when, within a cosmic configuration cycle"
            , " e.g. earth: year, month, day, hour, minute, second, sub-second"
            ]
    ,   type: "number"
    , digits:  38 || 17+3*7
    , values:
        { minimum: null
        , current: null || "live value in [local] host environment"
        , maximum: 99999999999999999999999999999999999999
        }
    },

  date:
    { format: "year[month[day]]"
    ,   type: "number"
    , digits:  8 || 4+2+2
    , values:
        { minimum: null
        , current: null || "live value in [local] host environment"
        , maximum: 99999999
        }
    },
  
  year:
    {   type: "number"
    , digits:  4
    , values:
        { minimum: null
        , current: null || "live value in [local] host environment"
        , maximum: 9999
        }
    },

  month:
    { detail: "earth: 01..12"
    ,   type: "number"
    , digits:  2
    , values:
        { minimum: 00
        , current: null || "live value in [local] host environment"
        , maximum: 99
        }
    },

  day:
    { detail: "earth: 01..31"
    ,   type: "number"
    , digits:  2
    , values:
        { minimum: 00
        , current: null || "live value in [local] host environment"
        , maximum: 99
        }
    },

  time:
    { format: "hour[minute[second[sub-second]]]"
    ,   type: "number"
    , digits:  30
    , values:
        { minimum: 00
        , current: null || "live value in [local] host environment"
        , maximum: 999999999999999999999999999999
        }
    },

  hour:
    { detail: "earth: 00..23"
    ,   type: "number"
    , digits:  2
    , values:
        { minimum: 00
        , current: null || "live value in [local] host environment"
        , maximum: 99
        }
    },

  minute:
    { detail: "earth: 00..59"
    ,   type: "number"
    , digits:  2
    , values:
        { minimum: 00
        , current: null || "live value in [local] host environment"
        , maximum: 99
        }
    },

  second:
    { detail: "earth: 00..59"
    ,   type: "number"
    , digits:  2
    , values:
        { minimum: 00
        , current: null || "live value in [local] host environment"
        , maximum: 99
        }
    },

 "sub-second":
    { format: "ms[mcs[ns[ps[fs[as[zs[ys]]]]]]]"
    , detail: "milli[micro[nano[pico[femto[atto[zepto[yocto]]]]]]"
    ,   type: "number"
    , digits:  24
    , values:
        { minimum: 00
        , current: null || "live value in [local] host environment"
        , maximum: 999999999999999999999999
        }
    },

  ms:
    { detail: "millisecond"
    ,   type: "number"
    , digits:  3
    , values:
        { minimum: 000
        , current: null || "live value in [local] host environment"
        , maximum: 999
        }
    },

  mcs:
    { detail: "microsecond"
    ,   type: "number"
    , digits:  3
    , values:
        { minimum: 000
        , current: null || "live value in [local] host environment"
        , maximum: 999
        }
    },

  ns:
    { detail: "nanosecond"
    ,   type: "number"
    , digits:  3
    , values:
        { minimum: 000
        , current: null || "live value in [local] host environment"
        , maximum: 999
        }
    },

  ps:
    { detail: "picosecond"
    ,   type: "number"
    , digits:  3
    , values:
        { minimum: 000
        , current: null || "live value in [local] host environment"
        , maximum: 999
        }
    },

  fs:
    { detail: "femtosecond"
    ,   type: "number"
    , digits:  3
    , values:
        { minimum: 000
        , current: null || "live value in [local] host environment"
        , maximum: 999
        }
    },

  as:
    { detail: "attosecond"
    ,   type: "number"
    , digits:  3
    , values:
        { minimum: 000
        , current: null || "live value in [local] host environment"
        , maximum: 999
        }
    },

  zs:
    { detail: "zeptosecond"
    ,   type: "number"
    , digits:  3
    , values:
        { minimum: 000
        , current: null || "live value in [local] host environment"
        , maximum: 999
        }
    },

  ys:
    { detail: "yoctosecond"
    ,   type: "number"
    , digits:  3
    , values:
        { minimum: 000
        , current: null || "live value in [local] host environment"
        , maximum: 999
        }
    }
}
;