;
~
{ re:
    { id:  'when.gregorian.re@baramita.net'
    , as: ['when', 'instantiation', 'specification']
    , by: ['🙇🏾‍♂️ יהוה 🤲🏾', 'mike.🇬🇾👨🏾‍💻🇺🇸.lee', 'team✨baramita']
    , on:  -5.20020705
    , to:  -8.20221201125659
    , at:  -0.019
    , in:
        [         'queens.ny.us.earth'
        , 'silicon-valley.ca.us.earth'
        ],
      is:
        [ "an ordinal gregorian calendar date & time format specification"
        , "gregorian calendar, date, time & timezone as a decimal numeral"
        , "can be applied with when@ specs like timezoned, epoched & calendared"
        ],
      we:
        [ "have {format:'some(thing)[else]'} where ...(...) =required [...] =optional"

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
        { maximum: 235959999999999999999999999999
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