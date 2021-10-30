;
~
{ re:
    { id:  "when.timezoned.re@ionify.net"
    , as: ["when", "specification"]
    , by: ["mike.lee", "team"]
    , on:  -5.20020705
    , to:  -7.202110300255
    , at:  -0.018
    , in:
        [ "forest-hills.ny.us.earth"
        ,     "san-jose.ca.us.earth"
        ,           "tokyo.jp.earth"
        ],
      it:
        [ "specifies an ordinal timezone-required calendar date & time format:"

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
        ],
      we:
        [ "like [+-]TZOFCVER.YEARDATETIME +-HHMMCCCV.YYYYMMDDHHMM where:"
        
        + "  [+-]: without TZOF + means post-epoch     & - means pre-epoch"
        + "      : with    TZOF + means post-base time & - means pre-base time"
        
        + "  TZOF: HHMM: H:Hour,  M:Minute: Timezone Offset"
        + "     C:  CCC: C:digit: 0-999     Calendar Id #: hebrew, gregorian..."
        + "   VER:    V: V:digit: 0-9       Calendar Version"
        
        + "  TZOFCVER precision:"
        
        + "    1 digit  = T       : H     0-9  hour    no-minute base calendar"
        + "    2 digits = TZ      : HH   10-99 hour    no-minute base calendar"
        + "    3 digits = TOF     : HMM   1-9  hour 00-99 minute base calendar"
        + "    4 digits = TZOF    : HHMM 10-99 hour 00-99 minute base calendar"
        + "    5 digits = TCVER   : HCCCV     1-9  hour    no-minute full-0-prepend-ok calendar"
        + "    6 digits = TZCVER  : HHCCCV   10-99 hour    no-minute full-0-prepend-ok calendar"
        + "    7 digits = TOFCVER : HMMCCCV   1-9  hour 00-99 minute full-0-prepend-ok calendar"
        + "    8 digits = TZOFCVER: HHMMCCCV 10-99 hour 00-99 minute full-0-prepend-ok calendar"
        ]
    },

  when:
    { format: "[+-]timezone[calendar].year-date-time"
    , detail:
            [ "observer's perception of when an instant occurs"
            , " + prefix means after  calendar's base timezone"
            , " - prefix means before calendar's base timezone"
            ],
      values:
        { minimum: -99999999.99999999999999999999999999999999999999
        , maximum: +99999999.99999999999999999999999999999999999999
        }
    },

 "offset-hour":
    { detail:
        [ "timezone's offset in hours; earth: 0..14, max earth hour is 23"
        , "must be 1 digit if less than 10 to ensure interpreted as a decimal number"
        ]
    },

 "year-date-time":
    { format: "date[time]"
    , digits:  38 || 17+3*7
    , values:
        { minimum: 0000
        }
    },

  date:
    { format: "year[month[day]]"
    , values:
        { minimum: 0000
        }
    },
  
  year:
    { values:
        { minimum: 0000
        }
    }
}
;