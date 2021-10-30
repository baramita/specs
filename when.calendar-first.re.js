;
~
{ re:
    { id:  "when.calendar-first.re@ionify.net"
    , as: ["when", "specification"]
    , by: ["mike.lee", "team"]
    , on:  -5.20020705
    , to:  -7.202110300233
    , at:  -0.017
    , in:
        [ "forest-hills.ny.us.earth"
        ,     "san-jose.ca.us.earth"
        ,           "tokyo.jp.earth"
        ],
      it:
        [ "specifies an ordinal calendar-first calendar date & time format:"

        + "  [+-]year[month[day[hour[minute[second[milli[micro[nano[pico[femto[atto[zepto[yocto]]]]]]]]]]]"
        + "     .timezoneOffsetHour[timezoneOffsetMinute[calendarIdVersion]]"

               - 2016111706422199.1 <= /UTC-08:00 2016.11.17 06.42.21 means 2016, November 17th @ 6:42:21 am UTC-08:00/
               + 201811172157.11245 <= /UTC+12:45 2018.11.17 21.57.00 means 2018, November 17th @ 9:57:59 pm UTC+12:45/

        , "can be represented as an IEEE 754 double-precision 64-bit binary format"
        + " number, like ecmascript's, but it'll be subject to the standard's"
        + " roundTiesToEven arithmetic rounding mode & will only have precision up to"
        + " ~17 decimal places (digits). that provides when@ precision ranging from a"
        + " signed  9-digit date & time + 8-digit calendar id & timezone offset to a"
        + " signed 16-digit date & time + 1-digit calendar id (version-0) remainder:"

             - 202110260.00101245 <= /2021.10.26 00     gregorian timezone offset -12.45/
             - 202110260022.11245 <= /2021.10.26 00:22  gregorian timezone offset -12.45/
            +- 2021102713075899.1 <= /2021.10.27 13:07:58.99 greg timezone offset   0hrs/
        ],
      we:
        [ "like [+-]YEARDATETIME.CVER[TZOF] +-YYYYMMDDHHMM.CCCV[HHMM] where:"

        + "     C:  CCC: C:digit: 0-999     Calendar Id #: hebrew, gregorian..."
        + "   VER:    V: V:digit: 0-9       Calendar Version"
        + "  TZOF: HHMM: H:Hour,  M:Minute: Timezone Offset"

        + "  CVERTZOF precision of:"
        
        + "    1 digit  = C       :   0-9   id 0   version calendar base timezone"
        + "    2 digits = CV      :   0-9   id 0-9 version calendar base timezone"
        + "    3 digits = CCV     :  00-99  id 0-9 version calendar base timezone"
        + "    4 digits = CCCV    : 000-999 id 0-9 version calendar base timezone"
        + "    5 digits = CTZOF   :   0-9   id 0   version calendar HHMM timezone"
        + "    6 digits = CVTZOF  :   0-9   id 0-9 version calendar HHMM timezone"
        + "    7 digits = CVETZOF :  00-99  id 0-9 version calendar HHMM timezone"
        + "    8 digits = CVERTZOF: 000-999 id 0-9 version calendar HHMM timezone"
        ]
    },

  when:
    { format: "[+-]year-date-time.calendar[timezone]"
    , detail:
            [ "observer's perception of when an instant occurs"
            , " + prefix means after  calendar's base timezone"
            , " - prefix means before calendar's base timezone"
            ],
      values:
        { minimum: -99999999999999999999999999999999999999.99999999
        , maximum: +99999999999999999999999999999999999999.99999999
        }
    },

 "year-date-time":
    { values:
        { minimum: 0
        }
    },

  date:
    { values:
        { minimum: 0
        }
    },
  
  year:
    { values:
        { minimum: 0
        }
    }
}
;