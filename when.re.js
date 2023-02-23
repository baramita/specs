;
~
{ re:
    { id:  'when.re@baramita.net'
    , as: ['calendar', 'date', 'time', 'instantiation', 'specification']
    , by: ['🙇🏾‍♂️ יהוה 🤲🏾', 'mike.🇬🇾👨🏾‍💻🇺🇸.lee', 'team✨baramita']
    , on:  -5.20020705
    , to:  -8.20221211
    , at:  -0.022
    , in:
        [         'queens.ny.us.earth'
        , 'silicon-valley.ca.us.earth'
        ],
      is:
        [ "an ordinal calendar date & time format specification"
        , "the base spec for when@ timezoned, epoched, calendared & gregorian specs"
        , "calendar, date, time & timezone within a decimal numeral"
        ],
      we:
        [ "have {format:'some(thing)[else]'} where ...(...) =required [...] =optional"

        , "know that when@ well represents numeric date-time versus ecmascript.Date"
        + " : more date & time details in same number of digits; i.e. timezone offset"
        + " : numeric natural language discernable date-time format"
        + " : near precise milliseconds: to hundreds & tens vs hundreds, tens & ones"
        + " : can specify calendar type, timezone offset & date"
        + " : enables more intuitive & accurate mathematical date & time comparison"
        + " : can represent earth-star moments up to ones-place billions of years"
        + " : can represent existence moments up to tens-place trillions of years"

        , "want when@ implementations to keep their [+-] signed direction then"
        + " convert to +when@ so each sub-attribute, e.g. minute, month & calendar-id"
        + " will be +positive when parsed, with direction later applied where needed"

        , "will implement an ecmascript getter for attribute.values.current that'll"
        + " lookup|calculate & provide the attribute's current [local] host"
        + " environment value"

        , "like renaming when@ 'instant' if any future naming conflicts|needs occur"

        , "like that moments can be defined with custom epochs, year-size & more e.g:"
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
    { format: "offset-hour[offset-minute]"
    , detail: "relative to calendar's base timezone; e.g. gregorian utc 00:00"
    ,   type: "number"
    , signed:  true
    , digits:  4
    , values:
        { minimum: -9999
        , current: null || "live value in [local] host environment"
        , maximum: +9999
        }
    },

 "offset-hour":
    { detail:
        [ "timezone's offset in hours; earth: 0..14, max earth hour is 23"
        , "must be 1 digit if less than 10 to ensure interpreted as a decimal number"
        ]
    ,   type: "number"
    , signed:  true
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
    , signed:  true
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
        , maximum: 99999999999999999999999999999999999999n
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
        , maximum: 999999999999999999999999999999n
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
        , maximum: 999999999999999999999999n
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