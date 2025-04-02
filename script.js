// قاعدة بيانات الكلمات الموسعة مع جميع التصنيفات
const wordDatabase = [
       // 1. الأدوات (Articles)
       {
        word: "a",
        entries: [
            {
                type: "article",
                subtype: "indefinite",
                grammar: {
                    usage: ["general reference", "first mention"],
                    nounType: ["singular countable"]
                },
                definitions: [
                    {
                        source: "Oxford",
                        text: "Used before nouns to refer to nonspecific things or people"
                    }
                ]
            }
        ]
    },
    {
        word: "an",
        entries: [
            {
                type: "article",
                subtype: "indefinite",
                grammar: {
                    usage: ["general reference", "first mention", "before vowel sounds"],
                    nounType: ["singular countable"]
                },
                definitions: [
                    {
                        source: "Oxford",
                        text: "Used before vowel sounds to refer to nonspecific things or people"
                    }
                ]
            }
        ]
    },
    {
        word: "the",
        entries: [
            {
                type: "article",
                subtype: "definite",
                grammar: {
                    usage: ["specific reference", "unique items", "superlatives"]
                },
                definitions: [
                    {
                        source: "Oxford",
                        text: "Denoting one or more people or things already mentioned or assumed to be common knowledge"
                    }
                ]
            }
        ]
    },

    // 1. Simple Prepositions (الجر البسيط)
    {
        word: "in",
        entries: [
            {
                type: "preposition",
                subtype: ["simple", "time", "place"],
                grammar: {
                    usage: ["location", "inclusion", "time period"],
                    position: ["pre-noun", "pre-pronoun"]
                },
                definitions: [
                    {
                        source: "Oxford",
                        text: "Expressing enclosure or surrounding"
                    },
                    {
                        source: "Cambridge",
                        text: "During part or all of a period of time"
                    }
                ]
            }
        ]
    },
    {
        word: "on",
        entries: [
            {
                type: "preposition",
                subtype: ["simple", "time", "place"],
                grammar: {
                    usage: ["surface contact", "specific days", "top position"],
                    position: ["pre-noun", "pre-pronoun"]
                },
                definitions: [
                    {
                        source: "Oxford",
                        text: "In contact with and supported by a surface"
                    }
                ]
            }
        ]
    },
    {
        word: "at",
        entries: [
            {
                type: "preposition",
                subtype: ["simple", "time", "place"],
                grammar: {
                    usage: ["specific points", "exact times", "locations"],
                    position: ["pre-noun", "pre-pronoun"]
                },
                definitions: [
                    {
                        source: "Cambridge",
                        text: "Used to show an exact position or particular place"
                    }
                ]
            }
        ]
    },
    {
        word: "by",
        entries: [
            {
                type: "preposition",
                subtype: ["simple", "time", "place", "agent"],
                grammar: {
                    usage: ["nearness", "means", "not later than", "doer of action"],
                    position: ["pre-noun", "pre-pronoun"]
                },
                definitions: [
                    {
                        source: "Oxford",
                        text: "Identifying the agent performing an action"
                    }
                ]
            }
        ]
    },
    {
        word: "to",
        entries: [
            {
                type: "preposition",
                subtype: ["simple", "place", "direction"],
                grammar: {
                    usage: ["movement", "recipient", "infinitive marker"],
                    position: ["pre-noun", "pre-pronoun"]
                },
                definitions: [
                    {
                        source: "Cambridge",
                        text: "Expressing motion in the direction of"
                    }
                ]
            }
        ]
    },
    {
        word: "for",
        entries: [
            {
                type: "preposition",
                subtype: ["simple", "time", "purpose"],
                grammar: {
                    usage: ["duration", "beneficiary", "reason"],
                    position: ["pre-noun", "pre-pronoun"]
                },
                definitions: [
                    {
                        source: "Oxford",
                        text: "Having the purpose of"
                    }
                ]
            }
        ]
    },
    {
        word: "of",
        entries: [
            {
                type: "preposition",
                subtype: ["simple", "possession"],
                grammar: {
                    usage: ["relationship", "origin", "material"],
                    position: ["post-noun"]
                },
                definitions: [
                    {
                        source: "Cambridge",
                        text: "Expressing the relationship between part and whole"
                    }
                ]
            }
        ]
    },
    {
        word: "with",
        entries: [
            {
                type: "preposition",
                subtype: ["simple", "accompaniment"],
                grammar: {
                    usage: ["together", "instrument", "manner"],
                    position: ["pre-noun", "pre-pronoun"]
                },
                definitions: [
                    {
                        source: "Oxford",
                        text: "Having or possessing something"
                    }
                ]
            }
        ]
    },
    {
        word: "from",
        entries: [
            {
                type: "preposition",
                subtype: ["simple", "origin"],
                grammar: {
                    usage: ["source", "starting point", "separation"],
                    position: ["pre-noun", "pre-pronoun"]
                },
                definitions: [
                    {
                        source: "Cambridge",
                        text: "Indicating the point in space at which a journey starts"
                    }
                ]
            }
        ]
    },
    {
        word: "about",
        entries: [
            {
                type: "preposition",
                subtype: ["simple", "topic"],
                grammar: {
                    usage: ["subject", "approximation", "around"],
                    position: ["pre-noun", "pre-pronoun"]
                },
                definitions: [
                    {
                        source: "Oxford",
                        text: "On the subject of; concerning"
                    }
                ]
            },
            {
                type: "adverb",
                subtype: ["approximation"],
                grammar: {
                    usage: ["approximately"],
                    position: ["pre-adjective", "end"]
                },
                definitions: [
                    {
                        source: "Cambridge",
                        text: "Approximately"
                    }
                ]
            },
            {
                type: "adjective",
                subtype: ["state"],
                grammar: {
                    usage: ["active"],
                    position: ["predicative"]
                },
                definitions: [
                    {
                        source: "Longman",
                        text: "Active or awake"
                    }
                ]
            },
        ]
    },
    {
        word: "over",
        entries: [
            {
                type: "preposition",
                subtype: ["simple", "place", "quantity"],
                grammar: {
                    usage: ["above position", "covering", "more than"],
                    position: ["pre-noun", "pre-pronoun"]
                },
                definitions: [
                    {
                        source: "Cambridge",
                        text: "Extending directly upward from"
                    }
                ]
            },
            {
                type: "adverb",
                subtype: ["position"],
                grammar: {
                    usage: ["movement", "completion"],
                    position: ["post-verb", "end"]
                },
                definitions: [
                    {
                        source: "Cambridge",
                        text: "Above and to the other side"
                    }
                ]
            },
            {
                type: "adjective",
                subtype: ["state"],
                grammar: {
                    usage: ["finished"],
                    position: ["predicative"]
                },
                definitions: [
                    {
                        source: "Longman",
                        text: "Finished or ended"
                    }
                ]
            },
            {
                type: "noun",
                subtype: ["cricket"],
                grammar: {
                    countability: "countable"
                },
                definitions: [
                    {
                        source: "Merriam-Webster",
                        text: "Series of balls in cricket"
                    }
                ]
            },
            {
                type: "prefix",
                subtype: ["excess"],
                grammar: {
                    usage: ["word formation"],
                    position: ["pre-word"]
                },
                definitions: [
                    {
                        source: "Collins",
                        text: "Excessive or excessively"
                    }
                ]
            },
        ]
    },
    {
        word: "after",
        entries: [
            {
                type: "preposition",
                subtype: ["simple", "time", "sequence"],
                grammar: {
                    usage: ["later time", "behind", "following"],
                    position: ["pre-noun", "pre-pronoun"]
                },
                definitions: [
                    {
                        source: "Oxford",
                        text: "In the time following an event"
                    }
                ]
            },
            {
                type: "adverb",
                subtype: ["time"],
                grammar: {
                    usage: ["later time"],
                    position: ["end"]
                },
                definitions: [
                    {
                        source: "Longman",
                        text: "At a later time"
                    }
                ]
            },
            {
                type: "adjective",
                subtype: ["descriptive"],
                grammar: {
                    usage: ["following"],
                    position: ["attributive"]
                },
                definitions: [
                    {
                        source: "Merriam-Webster",
                        text: "Later in time"
                    }
                ]
            },
        ]
    },
    {
        word: "before",
        entries: [
            {
                type: "preposition",
                subtype: ["simple", "time", "place"],
                grammar: {
                    usage: ["earlier time", "in front of", "preceding"],
                    position: ["pre-noun", "pre-pronoun"]
                },
                definitions: [
                    {
                        source: "Cambridge",
                        text: "During the period preceding"
                    }
                ]
            },
            {
                            type: "adverb",
                subtype: ["time"],
                grammar: {
                    usage: ["earlier time"],
                    position: ["end"]
                },
                definitions: [
                    {
                        source: "Longman",
                        text: "At an earlier time"
                    }
                ]
            }
        ]
    },
    {
        word: "between",
        entries: [
            {
                type: "preposition",
                subtype: ["simple", "place", "relationship"],
                grammar: {
                    usage: ["two items", "intermediate position", "shared"],
                    position: ["pre-noun", "pre-pronoun"]
                },
                definitions: [
                    {
                        source: "Oxford",
                        text: "At, into, or across the space separating"
                    }
                ]
            }
        ]
    },
    {
        word: "through",
        entries: [
            {
                type: "preposition",
                subtype: ["simple", "place", "time"],
                grammar: {
                    usage: ["movement in/out", "completion", "means"],
                    position: ["pre-noun", "pre-pronoun"]
                },
                definitions: [
                    {
                        source: "Cambridge",
                        text: "Moving in one side and out the other"
                    }
                ]
            },
            {
                type: "adverb",
                subtype: ["completion"],
                grammar: {
                    usage: ["finished"],
                    position: ["end"]
                },
                definitions: [
                    {
                        source: "Cambridge",
                        text: "Completely finished"
                    }
                ]
            },
            {
                type: "adjective",
                subtype: ["transport"],
                grammar: {
                    usage: ["direct"],
                    position: ["attributive"]
                },
                definitions: [
                    {
                        source: "Longman",
                        text: "Going directly to destination"
                    }
                ]
            },
        ]
    },
    {
        word: "under",
        entries: [
            {
                type: "preposition",
                subtype: ["position"],
                grammar: {
                    usage: ["beneath"],
                    position: ["pre-noun"]
                },
                definitions: [
                    {
                        source: "Oxford",
                        text: "Extending or directly below"
                    }
                ]
            },
            {
                type: "adverb",
                subtype: ["position"],
                grammar: {
                    usage: ["below surface"],
                    position: ["end"]
                },
                definitions: [
                    {
                        source: "Cambridge",
                        text: "In or into a position below"
                    }
                ]
            },
            {
                type: "adjective",
                subtype: ["state"],
                grammar: {
                    usage: ["lower"],
                    position: ["predicative"]
                },
                definitions: [
                    {
                        source: "Longman",
                        text: "Lower in amount, level or standard"
                    }
                ]
            }
        ]
    },
    {
        word: "among",
        entries: [
            {
                type: "preposition",
                subtype: ["simple", "place", "distribution"],
                grammar: {
                    usage: ["group inclusion", "distribution", "shared by"],
                    position: ["pre-noun", "pre-pronoun"]
                },
                definitions: [
                    {
                        source: "Cambridge",
                        text: "Situated within a group"
                    }
                ]
            }
        ]
    },
    {
        word: "against",
        entries: [
            {
                type: "preposition",
                subtype: ["simple", "opposition", "contact"],
                grammar: {
                    usage: ["opposing", "touching", "contrast"],
                    position: ["pre-noun", "pre-pronoun"]
                },
                definitions: [
                    {
                        source: "Oxford",
                        text: "In opposition to"
                    }
                ]
            }
        ]
    },
    {
            word: "off",
            entries: [
                {
                    type: "adverb",
                    subtype: ["distance"],
                    grammar: {
                        usage: ["separation"],
                        position: ["post-verb", "end"]
                    },
                    definitions: [
                        {
                            source: "Oxford",
                            text: "Away from a place"
                        }
                    ]
                },
                {
                    type: "preposition",
                    subtype: ["separation"],
                    grammar: {
                        usage: ["distance from"],
                        position: ["pre-noun"]
                    },
                    definitions: [
                        {
                            source: "Cambridge",
                            text: "Away from a surface"
                        }
                    ]
                },
                {
                    type: "adjective",
                    subtype: ["state"],
                    grammar: {
                        usage: ["condition"],
                        position: ["predicative"]
                    },
                    definitions: [
                        {
                            source: "Longman",
                            text: "Not operating or functioning"
                        }
                    ]
                },
                {
                    type: "verb",
                    subtype: ["action"],
                    grammar: {
                        tense: ["present", "past", "participle"],
                        forms: ["off", "offed", "offing"]
                    },
                    definitions: [
                        {
                            source: "Merriam-Webster",
                            text: "To kill someone (slang)"
                        }
                    ]
                },
                {
                    type: "noun",
                    subtype: ["start"],
                    grammar: {
                        countability: "singular"
                    },
                    definitions: [
                        {
                            source: "Collins",
                            text: "The start of a race"
                        }
                    ]
                }
            ]
    },
    {
        word: "up",
        entries: [
            {
                type: "preposition",
                subtype: ["simple", "place", "direction"],
                grammar: {
                    usage: ["higher position", "along", "toward source"],
                    position: ["pre-noun", "pre-pronoun"]
                },
                definitions: [
                    {
                        source: "Oxford",
                        text: "From lower to higher point"
                    }
                ]
            }
        ]
    },
    {
        word: "down",
        entries: [
            {
                type: "preposition",
                subtype: ["simple", "place", "direction"],
                grammar: {
                    usage: ["lower position", "along", "away from center"],
                    position: ["pre-noun", "pre-pronoun"]
                },
                definitions: [
                    {
                        source: "Cambridge",
                        text: "From higher to lower point"
                    }
                ]
            },
            {
                type: "adverb",
                subtype: ["direction"],
                grammar: {
                    usage: ["movement", "position"],
                    position: ["post-verb", "end"]
                },
                definitions: [
                    {
                        source: "Oxford",
                        text: "From higher to lower position"
                    }
                ]
            },
            {
                type: "adjective",
                subtype: ["state"],
                grammar: {
                    usage: ["condition"],
                    position: ["predicative"]
                },
                definitions: [
                    {
                        source: "Longman",
                        text: "In a lower position or state"
                    }
                ]
            },
            {
                type: "verb",
                subtype: ["action"],
                grammar: {
                    tense: ["present", "past", "participle"],
                    forms: ["down", "downed", "downing"]
                },
                definitions: [
                    {
                        source: "Merriam-Webster",
                        text: "To drink quickly"
                    }
                ]
            },
            {
                type: "noun",
                subtype: ["feeling"],
                grammar: {
                    countability: "uncountable"
                },
                definitions: [
                    {
                        source: "Collins",
                        text: "A period of unhappiness"
                    }
                ]
            }
        ]
    },
    {
        word: "past",
        entries: [
            {
                type: "preposition",
                subtype: ["simple", "place", "time"],
                grammar: {
                    usage: ["beyond position", "after time", "by"],
                    position: ["pre-noun", "pre-pronoun"]
                },
                definitions: [
                    {
                        source: "Oxford",
                        text: "To or on the further side of"
                    }
                ]
            },
            {
                type: "adjective",
                subtype: ["time"],
                grammar: {
                    usage: ["completed"],
                    position: ["attributive", "predicative"]
                },
                definitions: [
                    {
                        source: "Cambridge",
                        text: "Gone by in time"
                    }
                ]
            },
            {
                type: "noun",
                subtype: ["time"],
                grammar: {
                    countability: "singular"
                },
                definitions: [
                    {
                        source: "Longman",
                        text: "Time before the present"
                    }
                ]
            },
            {
                type: "adverb",
                subtype: ["movement"],
                grammar: {
                    usage: ["by movement"],
                    position: ["post-verb"]
                },
                definitions: [
                    {
                        source: "Merriam-Webster",
                        text: "So as to pass by"
                    }
                ]
            },
        ]
    },
    {
        word: "since",
        entries: [
            {
                type: "preposition",
                subtype: ["simple", "time"],
                grammar: {
                    usage: ["starting point", "continuation until now"],
                    position: ["pre-noun", "pre-pronoun"]
                },
                definitions: [
                    {
                        source: "Cambridge",
                        text: "From a particular time until now"
                    }
                ]
            },
            {
                type: "adverb",
                subtype: ["time"],
                grammar: {
                    usage: ["past reference"],
                    position: ["end"]
                },
                definitions: [
                    {
                        source: "Longman",
                        text: "From then until now"
                    }
                ]
            },
        ]
    },
    {
        word: "until",
        entries: [
            {
                type: "preposition",
                subtype: ["simple", "time"],
                grammar: {
                    usage: ["up to point in time"],
                    position: ["pre-noun", "pre-pronoun"]
                },
                definitions: [
                    {
                        source: "Oxford",
                        text: "Up to the point in time mentioned"
                    }
                ]
            }
        ]
    },
    {
        word: "during",
        entries: [
            {
                type: "preposition",
                subtype: ["simple", "time"],
                grammar: {
                    usage: ["concurrent time period"],
                    position: ["pre-noun", "pre-pronoun"]
                },
                definitions: [
                    {
                        source: "Cambridge",
                        text: "Throughout the course or duration"
                    }
                ]
            }
        ]
    },
    {
        word: "beyond",
        entries: [
            {
                type: "preposition",
                subtype: ["position", "limit"],
                grammar: {
                    usage: ["farther than", "outside limits"],
                    position: ["pre-noun"]
                },
                definitions: [
                    {
                        source: "Oxford",
                        text: "At or to the further side of"
                    }
                ]
            },
            {
                type: "adverb",
                subtype: ["position"],
                grammar: {
                    usage: ["further away"],
                    position: ["end"]
                },
                definitions: [
                    {
                        source: "Cambridge",
                        text: "At or to the further side"
                    }
                ]
            },
            {
                type: "noun",
                subtype: ["afterlife"],
                grammar: {
                    countability: "singular"
                },
                definitions: [
                    {
                        source: "Longman",
                        text: "The life after death"
                    }
                ]
            }
        ]
    },
    {
        word: "above",
        entries: [
            {
                type: "preposition",
                subtype: ["simple", "place", "quantity"],
                grammar: {
                    usage: ["higher position", "not touching", "more than"],
                    position: ["pre-noun", "pre-pronoun"]
                },
                definitions: [
                    {
                        source: "Cambridge",
                        text: "In extended space over and not touching"
                    }
                ]
            },
            {
                type: "adverb",
                subtype: ["position"],
                grammar: {
                    usage: ["higher position"],
                    position: ["post-verb", "end"]
                },
                definitions: [
                    {
                        source: "Cambridge",
                        text: "At a higher level"
                    }
                ]
            },
            {
                type: "adjective",
                subtype: ["mentioned"],
                grammar: {
                    usage: ["previously mentioned"],
                    position: ["attributive"]
                },
                definitions: [
                    {
                        source: "Longman",
                        text: "Previously mentioned"
                    }
                ]
            },
            {
                type: "noun",
                subtype: ["heaven"],
                grammar: {
                    countability: "singular"
                },
                definitions: [
                    {
                        source: "Merriam-Webster",
                        text: "Heaven or the sky"
                    }
                ]
            },
        ]
    },
    {
        word: "below",
        entries: [
            {
                type: "preposition",
                subtype: ["simple", "place", "quantity"],
                grammar: {
                    usage: ["lower position", "not touching", "less than"],
                    position: ["pre-noun", "pre-pronoun"]
                },
                definitions: [
                    {
                        source: "Oxford",
                        text: "At a lower level or layer than"
                    }
                ]
            },
            {
                type: "adverb",
                subtype: ["position"],
                grammar: {
                    usage: ["lower position"],
                    position: ["post-verb", "end"]
                },
                definitions: [
                    {
                        source: "Cambridge",
                        text: "At a lower level"
                    }
                ]
            },
            {
                type: "adjective",
                subtype: ["mentioned"],
                grammar: {
                    usage: ["following"],
                    position: ["attributive"]
                },
                definitions: [
                    {
                        source: "Longman",
                        text: "Written or mentioned later"
                    }
                ]
            },
        ]
    },
    {
        word: "behind",
        entries: [
            {
                type: "preposition",
                subtype: ["position"],
                grammar: {
                    usage: ["at the back of"],
                    position: ["pre-noun"]
                },
                definitions: [
                    {
                        source: "Oxford",
                        text: "At or to the far side of"
                    }
                ]
            },
            {
                type: "adverb",
                subtype: ["position"],
                grammar: {
                    usage: ["remaining after"],
                    position: ["end"]
                },
                definitions: [
                    {
                        source: "Cambridge",
                        text: "In a place or condition remaining after"
                    }
                ]
            },
            {
                type: "noun",
                subtype: ["anatomy"],
                grammar: {
                    countability: "countable"
                },
                definitions: [
                    {
                        source: "Longman",
                        text: "The buttocks (informal)"
                    }
                ]
            }
        ]
    },
    {
        word: "beside",
        entries: [
            {
                type: "preposition",
                subtype: ["position"],
                grammar: {
                    usage: ["next to"],
                    position: ["pre-noun"]
                },
                definitions: [
                    {
                        source: "Oxford",
                        text: "At the side of; next to"
                    }
                ]
            },
            {
                type: "adverb",
                subtype: ["position"],
                grammar: {
                    usage: ["comparison"],
                    position: ["end"]
                },
                definitions: [
                    {
                        source: "Cambridge",
                        text: "In comparison with"
                    }
                ]
            }
        ]
    },
    {
        word: "near",
        entries: [
            {
                type: "preposition",
                subtype: ["simple", "place", "time"],
                grammar: {
                    usage: ["short distance", "close to", "almost"],
                    position: ["pre-noun", "pre-pronoun"]
                },
                definitions: [
                    {
                        source: "Cambridge",
                        text: "At or to a short distance away from"
                    }
                ]
            }
        ]
    },
    {
        word: "opposite",
        entries: [
            {
                type: "preposition",
                subtype: ["simple", "place"],
                grammar: {
                    usage: ["facing", "contrary position", "across from"],
                    position: ["pre-noun", "pre-pronoun"]
                },
                definitions: [
                    {
                        source: "Oxford",
                        text: "Situated on the other or further side"
                    }
                ]
            }
        ]
    },
    {
        word: "inside",
        entries: [
            {
                type: "preposition",
                subtype: ["position"],
                grammar: {
                    usage: ["within"],
                    position: ["pre-noun"]
                },
                definitions: [
                    {
                        source: "Oxford",
                        text: "Situated within the confines of"
                    }
                ]
            },
            {
                type: "adverb",
                subtype: ["position"],
                grammar: {
                    usage: ["within"],
                    position: ["end"]
                },
                definitions: [
                    {
                        source: "Cambridge",
                        text: "Within the confines of a place"
                    }
                ]
            },
            {
                type: "adjective",
                subtype: ["position"],
                grammar: {
                    usage: ["inner"],
                    position: ["attributive"]
                },
                definitions: [
                    {
                        source: "Longman",
                        text: "Relating to the inner side"
                    }
                ]
            },
            {
                type: "noun",
                subtype: ["interior"],
                grammar: {
                    countability: "countable"
                },
                definitions: [
                    {
                        source: "Merriam-Webster",
                        text: "The inner side or surface"
                    }
                ]
            }
        ]
    },
    {
        word: "outside",
        entries: [
            {
                type: "preposition",
                subtype: ["position"],
                grammar: {
                    usage: ["on the exterior of"],
                    position: ["pre-noun"]
                },
                definitions: [
                    {
                        source: "Oxford",
                        text: "Situated on or near the exterior"
                    }
                ]
            },
            {
                type: "adverb",
                subtype: ["position"],
                grammar: {
                    usage: ["outdoors"],
                    position: ["end"]
                },
                definitions: [
                    {
                        source: "Cambridge",
                        text: "In or to the open air"
                    }
                ]
            },
            {
                type: "adjective",
                subtype: ["position"],
                grammar: {
                    usage: ["external"],
                    position: ["attributive"]
                },
                definitions: [
                    {
                        source: "Longman",
                        text: "Relating to the exterior"
                    }
                ]
            },
            {
                type: "noun",
                subtype: ["exterior"],
                grammar: {
                    countability: "countable"
                },
                definitions: [
                    {
                        source: "Merriam-Webster",
                        text: "The external side or surface"
                    }
                ]
            }
        ]
    },
    {
        word: "across",
        entries: [
            {
                type: "preposition",
                subtype: ["direction"],
                grammar: {
                    usage: ["from one side to another"],
                    position: ["pre-noun"]
                },
                definitions: [
                    {
                        source: "Oxford",
                        text: "From one side to the other of"
                    }
                ]
            },
            {
                type: "adverb",
                subtype: ["position"],
                grammar: {
                    usage: ["on the opposite side"],
                    position: ["end"]
                },
                definitions: [
                    {
                        source: "Cambridge",
                        text: "On the opposite side"
                    }
                ]
            }
        ]
    },

    // 2. Along - على طول
    {
        word: "along",
        entries: [
            {
                type: "preposition",
                subtype: ["direction"],
                grammar: {
                    usage: ["moving in constant direction"],
                    position: ["pre-noun"]
                },
                definitions: [
                    {
                        source: "Oxford",
                        text: "Moving in a constant direction on"
                    }
                ]
            },
            {
                type: "adverb",
                subtype: ["progress"],
                grammar: {
                    usage: ["forward movement"],
                    position: ["end"]
                },
                definitions: [
                    {
                        source: "Cambridge",
                        text: "Moving forward"
                    }
                ]
            }
        ]
    },
    {
        word: "around",
        entries: [
            {
                type: "preposition",
                subtype: ["simple", "place", "approximation"],
                grammar: {
                    usage: ["encircling", "approximately", "in various places"],
                    position: ["pre-noun", "pre-pronoun"]
                },
                definitions: [
                    {
                        source: "Cambridge",
                        text: "On every side of; surrounding"
                    }
                ]
            },
            {
                type: "adverb",
                subtype: ["position"],
                grammar: {
                    usage: ["in various directions"],
                    position: ["post-verb", "end"]
                },
                definitions: [
                    {
                        source: "Cambridge",
                        text: "In various places"
                    }
                ]
            },
            {
                type: "adjective",
                subtype: ["active"],
                grammar: {
                    usage: ["present"],
                    position: ["predicative"]
                },
                definitions: [
                    {
                        source: "Longman",
                        text: "Present in a place"
                    }
                ]
            },
        ]
    },
    {
        word: "toward",
        entries: [
            {
                type: "preposition",
                subtype: ["direction"],
                grammar: {
                    usage: ["in the direction of"],
                    position: ["pre-noun"]
                },
                definitions: [
                    {
                        source: "Oxford",
                        text: "In the direction of"
                    }
                ]
            },
            {
                type: "adjective",
                subtype: ["progress"],
                grammar: {
                    usage: ["approaching"],
                    position: ["attributive"]
                },
                definitions: [
                    {
                        source: "Cambridge",
                        text: "Going on; in progress"
                    }
                ]
            }
        ]
    },
    {
        word: "without",
        entries: [
            {
                type: "preposition",
                subtype: ["simple", "absence"],
                grammar: {
                    usage: ["not having", "lack", "outside"],
                    position: ["pre-noun", "pre-pronoun"]
                },
                definitions: [
                    {
                        source: "Cambridge",
                        text: "In the absence of"
                    }
                ]
            },
                        {
                type: "adverb",
                subtype: ["absence"],
                grammar: {
                    usage: ["externally"],
                    position: ["end"]
                },
                definitions: [
                    {
                        source: "Cambridge",
                        text: "On the outside"
                    }
                ]
            },
            {
                type: "conjunction",
                subtype: ["archaic"],
                grammar: {
                    usage: ["unless"],
                    position: ["beginning"]
                },
                definitions: [
                    {
                        source: "Merriam-Webster",
                        text: "Unless (archaic)"
                    }
                ]
            }
        ]
    },
    {
        word: "within",
        entries: [
            {
                type: "preposition",
                subtype: ["simple", "place", "time"],
                grammar: {
                    usage: ["inside limits", "not exceeding", "during"],
                    position: ["pre-noun", "pre-pronoun"]
                },
                definitions: [
                    {
                        source: "Oxford",
                        text: "Inside the range of an area or limits"
                    }
                ]
            },
            {
                type: "adverb",
                subtype: ["position"],
                grammar: {
                    usage: ["inside"],
                    position: ["end"]
                },
                definitions: [
                    {
                        source: "Cambridge",
                        text: "Inside something"
                    }
                ]
            }
        ]
    },
    {
        word: "except",
        entries: [
            {
                type: "preposition",
                subtype: ["simple", "exclusion"],
                grammar: {
                    usage: ["not including", "other than", "excluding"],
                    position: ["pre-noun", "pre-pronoun"]
                },
                definitions: [
                    {
                        source: "Cambridge",
                        text: "Not including; other than"
                    }
                ]
            }
        ]
    },
    {
        word: "like",
        entries: [
            {
                type: "preposition",
                subtype: ["simple", "comparison"],
                grammar: {
                    usage: ["similar to", "characteristic of", "for example"],
                    position: ["pre-noun", "pre-pronoun"]
                },
                definitions: [
                    {
                        source: "Oxford",
                        text: "Having the same characteristics or qualities as"
                    }
                ]
            },
            {
            type: "verb",
            subtype: ["action"],
            grammar: {
                tense: ["present", "past", "participle"],
                forms: ["like", "liked", "liking"]
            },
            definitions: [
                {
                    source: "Cambridge",
                    text: "To enjoy or approve of something"
                }
            ]
        },
        {
            type: "conjunction",
            subtype: ["informal"],
            grammar: {
                usage: ["comparison"],
                position: ["beginning"]
            },
            definitions: [
                {
                    source: "Merriam-Webster",
                    text: "In the same way that"
                }
            ]
        },
        {
            type: "noun",
            subtype: ["preference"],
            grammar: {
                countability: "countable",
                forms: ["like", "likes"]
            },
            definitions: [
                {
                    source: "Longman",
                    text: "Something that one enjoys"
                }
            ]
        },
        {
            type: "adjective",
            subtype: ["similar"],
            grammar: {
                usage: ["comparison"],
                position: ["attributive", "predicative"]
            },
            definitions: [
                {
                    source: "Oxford",
                    text: "Similar to"
                }
            ]
        },
        ]
    },
    {
        word: "unlike",
        entries: [
            {
                type: "preposition",
                subtype: ["simple", "comparison"],
                grammar: {
                    usage: ["different from", "in contrast to"],
                    position: ["pre-noun", "pre-pronoun"]
                },
                definitions: [
                    {
                        source: "Cambridge",
                        text: "Different from; not like"
                    }
                ]
            }
        ]
    },
    {
        word: "plus",
        entries: [
            {
                type: "preposition",
                subtype: ["simple", "addition"],
                grammar: {
                    usage: ["with the addition of", "and also", "positive"],
                    position: ["pre-noun", "pre-pronoun"]
                },
                definitions: [
                    {
                        source: "Oxford",
                        text: "With the addition of"
                    }
                ]
            }
        ]
    },
    {
        word: "minus",
        entries: [
            {
                type: "preposition",
                subtype: ["simple", "subtraction"],
                grammar: {
                    usage: ["with subtraction of", "lacking", "negative"],
                    position: ["pre-noun", "pre-pronoun"]
                },
                definitions: [
                    {
                        source: "Cambridge",
                        text: "With the subtraction of"
                    }
                ]
            }
        ]
    },
    {
        word: "per",
        entries: [
            {
                type: "preposition",
                subtype: ["simple", "rate"],
                grammar: {
                    usage: ["for each", "according to", "by means of"],
                    position: ["pre-noun", "pre-pronoun"]
                },
                definitions: [
                    {
                        source: "Oxford",
                        text: "For each; by means of"
                    }
                ]
            }
        ]
    },
    {
        word: "via",
        entries: [
            {
                type: "preposition",
                subtype: ["simple", "route"],
                grammar: {
                    usage: ["through", "by way of", "by means of"],
                    position: ["pre-noun", "pre-pronoun"]
                },
                definitions: [
                    {
                        source: "Cambridge",
                        text: "Travelling through a place en route to a destination"
                    }
                ]
            }
        ]
    },
    {
        word: "amid",
        entries: [
            {
                type: "preposition",
                subtype: ["simple", "place"],
                grammar: {
                    usage: ["surrounded by", "during", "in middle of"],
                    position: ["pre-noun", "pre-pronoun"]
                },
                definitions: [
                    {
                        source: "Oxford",
                        text: "Surrounded by; in the middle of"
                    }
                ]
            }
        ]
    },
    {
        word: "amidst",
        entries: [
            {
                type: "preposition",
                subtype: ["simple", "place"],
                grammar: {
                    usage: ["surrounded by", "during", "in middle of"],
                    position: ["pre-noun", "pre-pronoun"]
                },
                definitions: [
                    {
                        source: "Cambridge",
                        text: "Surrounded by; in the middle of (variant of amid)"
                    }
                ]
            }
        ]
    },
    {
        word: "amongst",
        entries: [
            {
                type: "preposition",
                subtype: ["simple", "place", "distribution"],
                grammar: {
                    usage: ["group inclusion", "distribution", "shared by"],
                    position: ["pre-noun", "pre-pronoun"]
                },
                definitions: [
                    {
                        source: "Oxford",
                        text: "Situated within a group (variant of among)"
                    }
                ]
            }
        ]
    },
    {
        word: "concerning",
        entries: [
            {
                type: "preposition",
                subtype: ["simple", "topic"],
                grammar: {
                    usage: ["about", "regarding", "on subject of"],
                    position: ["pre-noun", "pre-pronoun"]
                },
                definitions: [
                    {
                        source: "Cambridge",
                        text: "About; regarding"
                    }
                ]
            }
        ]
    },
    {
        word: "considering",
        entries: [
            {
                type: "preposition",
                subtype: ["simple", "reason"],
                grammar: {
                    usage: ["taking into account", "in view of"],
                    position: ["pre-noun", "pre-pronoun"]
                },
                definitions: [
                    {
                        source: "Oxford",
                        text: "Taking into account"
                    }
                ]
            }
        ]
    },
    {
        word: "despite",
        entries: [
            {
                type: "preposition",
                subtype: ["simple", "contrast"],
                grammar: {
                    usage: ["in spite of", "notwithstanding"],
                    position: ["pre-noun", "pre-pronoun"]
                },
                definitions: [
                    {
                        source: "Cambridge",
                        text: "Without being affected by"
                    }
                ]
            }
        ]
    },
    {
        word: "excepting",
        entries: [
            {
                type: "preposition",
                subtype: ["simple", "exclusion"],
                grammar: {
                    usage: ["not including", "except for"],
                    position: ["pre-noun", "pre-pronoun"]
                },
                definitions: [
                    {
                        source: "Oxford",
                        text: "Not including; except for"
                    }
                ]
            }
        ]
    },
    {
        word: "following",
        entries: [
            {
                type: "preposition",
                subtype: ["simple", "time", "sequence"],
                grammar: {
                    usage: ["after", "as result of", "next in order"],
                    position: ["pre-noun", "pre-pronoun"]
                },
                definitions: [
                    {
                        source: "Cambridge",
                        text: "Coming after or as a result of"
                    }
                ]
            }
        ]
    },
    {
        word: "including",
        entries: [
            {
                type: "preposition",
                subtype: ["simple", "inclusion"],
                grammar: {
                    usage: ["containing as part", "not excluding"],
                    position: ["pre-noun", "pre-pronoun"]
                },
                definitions: [
                    {
                        source: "Oxford",
                        text: "Containing as part of the whole"
                    }
                ]
            }
        ]
    },
    {
        word: "notwithstanding",
        entries: [
            {
                type: "preposition",
                subtype: ["simple", "contrast"],
                grammar: {
                    usage: ["in spite of", "despite"],
                    position: ["pre-noun", "pre-pronoun"]
                },
                definitions: [
                    {
                        source: "Cambridge",
                        text: "Without being affected by"
                    }
                ]
            }
        ]
    },
    {
        word: "regarding",
        entries: [
            {
                type: "preposition",
                subtype: ["simple", "topic"],
                grammar: {
                    usage: ["about", "concerning", "with respect to"],
                    position: ["pre-noun", "pre-pronoun"]
                },
                definitions: [
                    {
                        source: "Oxford",
                        text: "About; concerning"
                    }
                ]
            }
        ]
    },
    {
        word: "respecting",
        entries: [
            {
                type: "preposition",
                subtype: ["simple", "topic"],
                grammar: {
                    usage: ["about", "concerning", "with regard to"],
                    position: ["pre-noun", "pre-pronoun"]
                },
                definitions: [
                    {
                        source: "Cambridge",
                        text: "About; concerning"
                    }
                ]
            }
        ]
    },
    {
        word: "save",
        entries: [
            {
                type: "preposition",
                subtype: ["simple", "exclusion"],
                grammar: {
                    usage: ["except", "not including"],
                    position: ["pre-noun", "pre-pronoun"]
                },
                definitions: [
                    {
                        source: "Oxford",
                        text: "Except; other than"
                    }
                ]
            }
        ]
    },
    {
        word: "than",
        entries: [
            {
                type: "preposition",
                subtype: ["simple", "comparison"],
                grammar: {
                    usage: ["introducing second element in comparison"],
                    position: ["post-adjective", "post-adverb"]
                },
                definitions: [
                    {
                        source: "Cambridge",
                        text: "Used to introduce the second element in a comparison"
                    }
                ]
            }
        ]
    },
    {
        word: "upon",
        entries: [
            {
                type: "preposition",
                subtype: ["simple", "place", "time"],
                grammar: {
                    usage: ["on", "at the time of", "immediately after"],
                    position: ["pre-noun", "pre-pronoun"]
                },
                definitions: [
                    {
                        source: "Oxford",
                        text: "More formal term for 'on'"
                    }
                ]
            }
        ]
    },
    {
        word: "worth",
        entries: [
            {
                type: "preposition",
                subtype: ["simple", "value"],
                grammar: {
                    usage: ["equivalent in value to", "deserving"],
                    position: ["post-noun"]
                },
                definitions: [
                    {
                        source: "Cambridge",
                        text: "Equivalent in value to the sum or item specified"
                    }
                ]
            },
            {
                type: "noun",
                subtype: ["value"],
                grammar: {
                    countability: "uncountable"
                },
                definitions: [
                    {
                        source: "Cambridge",
                        text: "The value equivalent to that of something"
                    }
                ]
            },
            {
                type: "adjective",
                subtype: ["value"],
                grammar: {
                    usage: ["deserving"],
                    position: ["predicative"]
                },
                definitions: [
                    {
                        source: "Longman",
                        text: "Good or important enough to justify"
                    }
                ]
            }
        ]
    },

    // 2. Compound Prepositions (الجر المركب)
    {
        word: "according to",
        entries: [
            {
                type: "preposition",
                subtype: ["compound", "reference"],
                grammar: {
                    usage: ["as stated by", "in agreement with"],
                    position: ["pre-noun", "pre-pronoun"]
                },
                definitions: [
                    {
                        source: "Oxford",
                        text: "As stated by or in"
                    }
                ]
            }
        ]
    },
    {
        word: "ahead of",
        entries: [
            {
                type: "preposition",
                subtype: ["compound", "place", "time"],
                grammar: {
                    usage: ["in front of", "before in time", "superior to"],
                    position: ["pre-noun", "pre-pronoun"]
                },
                definitions: [
                    {
                        source: "Cambridge",
                        text: "In front of; before"
                    }
                ]
            }
        ]
    },
    {
        word: "apart from",
        entries: [
            {
                type: "preposition",
                subtype: ["compound", "exclusion"],
                grammar: {
                    usage: ["except for", "not considering"],
                    position: ["pre-noun", "pre-pronoun"]
                },
                definitions: [
                    {
                        source: "Oxford",
                        text: "Except for; not considering"
                    }
                ]
            }
        ]
    },
    {
        word: "as for",
        entries: [
            {
                type: "preposition",
                subtype: ["compound", "topic"],
                grammar: {
                    usage: ["concerning", "with regard to"],
                    position: ["pre-noun", "pre-pronoun"]
                },
                definitions: [
                    {
                        source: "Cambridge",
                        text: "With regard to; concerning"
                    }
                ]
            }
        ]
    },
    {
        word: "as to",
        entries: [
            {
                type: "preposition",
                subtype: ["compound", "topic"],
                grammar: {
                    usage: ["concerning", "with regard to"],
                    position: ["pre-noun", "pre-pronoun"]
                },
                definitions: [
                    {
                        source: "Oxford",
                        text: "With regard to; concerning"
                    }
                ]
            }
        ]
    },
    {
        word: "because of",
        entries: [
            {
                type: "preposition",
                subtype: ["compound", "reason"],
                grammar: {
                    usage: ["on account of", "by reason of"],
                    position: ["pre-noun", "pre-pronoun"]
                },
                definitions: [
                    {
                        source: "Cambridge",
                        text: "On account of; by reason of"
                    }
                ]
            }
        ]
    },
    {
        word: "close to",
        entries: [
            {
                type: "preposition",
                subtype: ["compound", "place", "quantity"],
                grammar: {
                    usage: ["near", "almost", "approximate"],
                    position: ["pre-noun", "pre-pronoun"]
                },
                definitions: [
                    {
                        source: "Oxford",
                        text: "Near in space or time"
                    }
                ]
            }
        ]
    },
    {
        word: "due to",
        entries: [
            {
                type: "preposition",
                subtype: ["compound", "reason"],
                grammar: {
                    usage: ["because of", "caused by"],
                    position: ["pre-noun", "pre-pronoun"]
                },
                definitions: [
                    {
                        source: "Cambridge",
                        text: "Because of; caused by"
                    }
                ]
            }
        ]
    },
    {
        word: "except for",
        entries: [
            {
                type: "preposition",
                subtype: ["compound", "exclusion"],
                grammar: {
                    usage: ["not including", "other than"],
                    position: ["pre-noun", "pre-pronoun"]
                },
                definitions: [
                    {
                        source: "Oxford",
                        text: "Not including; other than"
                    }
                ]
            }
        ]
    },
    {
        word: "far from",
        entries: [
            {
                type: "preposition",
                subtype: ["compound", "place", "negation"],
                grammar: {
                    usage: ["distant position", "not at all"],
                    position: ["pre-noun", "pre-pronoun"]
                },
                definitions: [
                    {
                        source: "Cambridge",
                        text: "At or to a considerable distance"
                    }
                ]
            }
        ]
    },
    {
        word: "inside of",
        entries: [
            {
                type: "preposition",
                subtype: ["compound", "place", "time"],
                grammar: {
                    usage: ["within", "in less than (time)"],
                    position: ["pre-noun", "pre-pronoun"]
                },
                definitions: [
                    {
                        source: "Oxford",
                        text: "Within the interior of"
                    }
                ]
            }
        ]
    },
    {
        word: "instead of",
        entries: [
            {
                type: "preposition",
                subtype: ["compound", "substitution"],
                grammar: {
                    usage: ["as alternative to", "in place of"],
                    position: ["pre-noun", "pre-pronoun"]
                },
                definitions: [
                    {
                        source: "Cambridge",
                        text: "As an alternative or substitute for"
                    }
                ]
            }
        ]
    },
    {
        word: "near to",
        entries: [
            {
                type: "preposition",
                subtype: ["compound", "place"],
                grammar: {
                    usage: ["close to", "almost"],
                    position: ["pre-noun", "pre-pronoun"]
                },
                definitions: [
                    {
                        source: "Oxford",
                        text: "At or to a short distance from"
                    }
                ]
            }
        ]
    },
    {
        word: "next to",
        entries: [
            {
                type: "preposition",
                subtype: ["compound", "place"],
                grammar: {
                    usage: ["adjacent to", "beside", "almost"],
                    position: ["pre-noun", "pre-pronoun"]
                },
                definitions: [
                    {
                        source: "Cambridge",
                        text: "Adjacent to; beside"
                    }
                ]
            }
        ]
    },
    {
        word: "opposite to",
        entries: [
            {
                type: "preposition",
                subtype: ["compound", "place"],
                grammar: {
                    usage: ["facing", "contrary to"],
                    position: ["pre-noun", "pre-pronoun"]
                },
                definitions: [
                    {
                        source: "Oxford",
                        text: "Facing; on the other side"
                    }
                ]
            }
        ]
    },
    {
        word: "out of",
        entries: [
            {
                type: "preposition",
                subtype: ["compound", "place", "origin"],
                grammar: {
                    usage: ["from inside", "made from", "because of"],
                    position: ["pre-noun", "pre-pronoun"]
                },
                definitions: [
                    {
                        source: "Cambridge",
                        text: "Moving from inside to outside"
                    }
                ]
            }
        ]
    },
    {
        word: "outside of",
        entries: [
            {
                type: "preposition",
                subtype: ["compound", "place", "exclusion"],
                grammar: {
                    usage: ["beyond limits", "except for"],
                    position: ["pre-noun", "pre-pronoun"]
                },
                definitions: [
                    {
                        source: "Oxford",
                        text: "Beyond the limits of; except for"
                    }
                ]
            }
        ]
    },
    {
        word: "owing to",
        entries: [
            {
                type: "preposition",
                subtype: ["compound", "reason"],
                grammar: {
                    usage: ["because of", "on account of"],
                    position: ["pre-noun", "pre-pronoun"]
                },
                definitions: [
                    {
                        source: "Cambridge",
                        text: "Because of; on account of"
                    }
                ]
            }
        ]
    },
    {
        word: "prior to",
        entries: [
            {
                type: "preposition",
                subtype: ["compound", "time"],
                grammar: {
                    usage: ["before", "earlier than"],
                    position: ["pre-noun", "pre-pronoun"]
                },
                definitions: [
                    {
                        source: "Oxford",
                        text: "Before; earlier than"
                    }
                ]
            }
        ]
    },
    {
        word: "subsequent to",
        entries: [
            {
                type: "preposition",
                subtype: ["compound", "time"],
                grammar: {
                    usage: ["after", "following"],
                    position: ["pre-noun", "pre-pronoun"]
                },
                definitions: [
                    {
                        source: "Cambridge",
                        text: "After; following"
                    }
                ]
            }
        ]
    },
    {
        word: "thanks to",
        entries: [
            {
                type: "preposition",
                subtype: ["compound", "reason"],
                grammar: {
                    usage: ["because of", "owing to"],
                    position: ["pre-noun", "pre-pronoun"]
                },
                definitions: [
                    {
                        source: "Oxford",
                        text: "As a result of; owing to"
                    }
                ]
            }
        ]
    },
    {
        word: "up",
        entries: [
            {
                type: "adverb",
                subtype: ["direction"],
                grammar: {
                    usage: ["movement", "position"],
                    position: ["post-verb", "end"]
                },
                definitions: [
                    {
                        source: "Oxford",
                        text: "Towards a higher position"
                    }
                ]
            },
            {
                type: "preposition",
                subtype: ["direction"],
                grammar: {
                    usage: ["movement along"],
                    position: ["pre-noun"]
                },
                definitions: [
                    {
                        source: "Cambridge",
                        text: "From lower to higher point"
                    }
                ]
            },
            {
                type: "adjective",
                subtype: ["state"],
                grammar: {
                    usage: ["condition"],
                    position: ["predicative"]
                },
                definitions: [
                    {
                        source: "Longman",
                        text: "In an increased state"
                    }
                ]
            },
            {
                type: "verb",
                subtype: ["action"],
                grammar: {
                    tense: ["present", "past", "participle"],
                    forms: ["up", "upped", "upping"]
                },
                definitions: [
                    {
                        source: "Merriam-Webster",
                        text: "To increase something"
                    }
                ]
            }
        ]
    },
    {
        word: "up to",
        entries: [
            {
                type: "preposition",
                subtype: ["compound", "place", "quantity"],
                grammar: {
                    usage: ["as far as", "until", "maximum"],
                    position: ["pre-noun", "pre-pronoun"]
                },
                definitions: [
                    {
                        source: "Cambridge",
                        text: "As far as; until"
                    }
                ]
            }
        ]
    },

    // 3. Complex Prepositions (الجر المعقد)
    {
        word: "as well as",
        entries: [
            {
                type: "preposition",
                subtype: ["complex", "addition"],
                grammar: {
                    usage: ["in addition to", "and also"],
                    position: ["pre-noun", "pre-pronoun"]
                },
                definitions: [
                    {
                        source: "Oxford",
                        text: "In addition to; and in addition"
                    }
                ]
            }
        ]
    },
    {
        word: "by means of",
        entries: [
            {
                type: "preposition",
                subtype: ["complex", "instrument"],
                grammar: {
                    usage: ["using", "with the help of"],
                    position: ["pre-noun", "pre-pronoun"]
                },
                definitions: [
                    {
                        source: "Cambridge",
                        text: "Using; with the help of"
                    }
                ]
            }
        ]
    },
    {
        word: "in accordance with",
        entries: [
            {
                type: "preposition",
                subtype: ["complex", "agreement"],
                grammar: {
                    usage: ["conforming to", "in agreement with"],
                    position: ["pre-noun", "pre-pronoun"]
                },
                definitions: [
                    {
                        source: "Oxford",
                        text: "In conformity with; in agreement with"
                    }
                ]
            }
        ]
    },
    {
        word: "in addition to",
        entries: [
            {
                type: "preposition",
                subtype: ["complex", "addition"],
                grammar: {
                    usage: ["as well as", "besides"],
                    position: ["pre-noun", "pre-pronoun"]
                },
                definitions: [
                    {
                        source: "Cambridge",
                        text: "As well as; besides"
                    }
                ]
            }
        ]
    },
    {
        word: "in case of",
        entries: [
            {
                type: "preposition",
                subtype: ["complex", "condition"],
                grammar: {
                    usage: ["if there is", "in the event of"],
                    position: ["pre-noun", "pre-pronoun"]
                },
                definitions: [
                    {
                        source: "Oxford",
                        text: "If the specified thing should happen"
                    }
                ]
            }
        ]
    },
    {
        word: "in favor of",
        entries: [
            {
                type: "preposition",
                subtype: ["complex", "preference"],
                grammar: {
                    usage: ["supporting", "to benefit"],
                    position: ["pre-noun", "pre-pronoun"]
                },
                definitions: [
                    {
                        source: "Cambridge",
                        text: "In support of; to the advantage of"
                    }
                ]
            }
        ]
    },
    {
        word: "in front of",
        entries: [
            {
                type: "preposition",
                subtype: ["complex", "place"],
                grammar: {
                    usage: ["ahead of", "facing"],
                    position: ["pre-noun", "pre-pronoun"]
                },
                definitions: [
                    {
                        source: "Oxford",
                        text: "In a position just ahead of"
                    }
                ]
            }
        ]
    },
    {
        word: "in line with",
        entries: [
            {
                type: "preposition",
                subtype: ["complex", "agreement"],
                grammar: {
                    usage: ["consistent with", "similar to"],
                    position: ["pre-noun", "pre-pronoun"]
                },
                definitions: [
                    {
                        source: "Cambridge",
                        text: "In alignment or accordance with"
                    }
                ]
            }
        ]
    },
    {
        word: "in place of",
        entries: [
            {
                type: "preposition",
                subtype: ["complex", "substitution"],
                grammar: {
                    usage: ["instead of", "as substitute for"],
                    position: ["pre-noun", "pre-pronoun"]
                },
                definitions: [
                    {
                        source: "Oxford",
                        text: "Instead of; as a substitute for"
                    }
                ]
            }
        ]
    },
    {
        word: "in relation to",
        entries: [
            {
                type: "preposition",
                subtype: ["complex", "reference"],
                grammar: {
                    usage: ["concerning", "with reference to"],
                    position: ["pre-noun", "pre-pronoun"]
                },
                definitions: [
                    {
                        source: "Cambridge",
                        text: "Concerning; with reference to"
                    }
                ]
            }
        ]
    },
    {
        word: "in spite of",
        entries: [
            {
                type: "preposition",
                subtype: ["complex", "contrast"],
                grammar: {
                    usage: ["despite", "notwithstanding"],
                    position: ["pre-noun", "pre-pronoun"]
                },
                definitions: [
                    {
                        source: "Oxford",
                        text: "Without being affected by"
                    }
                ]
            }
        ]
    },
    {
        word: "in terms of",
        entries: [
            {
                type: "preposition",
                subtype: ["complex", "reference"],
                grammar: {
                    usage: ["with regard to", "expressed as"],
                    position: ["pre-noun", "pre-pronoun"]
                },
                definitions: [
                    {
                        source: "Cambridge",
                        text: "With regard to the particular aspect"
                    }
                ]
            }
        ]
    },
    {
        word: "on account of",
        entries: [
            {
                type: "preposition",
                subtype: ["complex", "reason"],
                grammar: {
                    usage: ["because of", "owing to"],
                    position: ["pre-noun", "pre-pronoun"]
                },
                definitions: [
                    {
                        source: "Oxford",
                        text: "Because of; owing to"
                    }
                ]
            }
        ]
    },
    {
        word: "on behalf of",
        entries: [
            {
                type: "preposition",
                subtype: ["complex", "representation"],
                grammar: {
                    usage: ["representing", "for benefit of"],
                    position: ["pre-noun", "pre-pronoun"]
                },
                definitions: [
                    {
                        source: "Cambridge",
                        text: "As a representative of; in the interest of"
                    }
                ]
            }
        ]
    },
    {
        word: "on top of",
        entries: [
            {
                type: "preposition",
                subtype: ["complex", "place"],
                grammar: {
                    usage: ["above and touching", "in control of"],
                    position: ["pre-noun", "pre-pronoun"]
                },
                definitions: [
                    {
                        source: "Oxford",
                        text: "Resting on the upper surface of"
                    }
                ]
            }
        ]
    },
    {
        word: "with regard to",
        entries: [
            {
                type: "preposition",
                subtype: ["complex", "reference"],
                grammar: {
                    usage: ["concerning", "in respect of"],
                    position: ["pre-noun", "pre-pronoun"]
                },
                definitions: [
                    {
                        source: "Cambridge",
                        text: "Concerning; in respect of"
                    }
                ]
            }
        ]
    },
    {
        word: "with respect to",
        entries: [
            {
                type: "preposition",
                subtype: ["complex", "reference"],
                grammar: {
                    usage: ["concerning", "in relation to"],
                    position: ["pre-noun", "pre-pronoun"]
                },
                definitions: [
                    {
                        source: "Oxford",
                        text: "With reference to; concerning"
                    }
                ]
            }
        ]
    },
    {
        word: "with the exception of",
        entries: [
            {
                type: "preposition",
                subtype: ["complex", "exclusion"],
                grammar: {
                    usage: ["except for", "not including"],
                    position: ["pre-noun", "pre-pronoun"]
                },
                definitions: [
                    {
                        source: "Cambridge",
                        text: "Except for; not including"
                    }
                ]
            }
        ]
    },

    // 2. المحددات الكمية (Quantifiers)
    {
        word: "many",
        entries: [
            {
                type: "quantifier",
                subtype: "large quantity",
                grammar: {
                    usage: ["countable nouns", "questions", "negative sentences"],
                    position: ["pre-noun"]
                },
                definitions: [
                    {
                        source: "Cambridge",
                        text: "A large number of"
                    }
                ]
            }
        ]
    },
    {
        word: "much",
        entries: [
            {
                type: "quantifier",
                subtype: "large quantity",
                grammar: {
                    usage: ["uncountable nouns", "questions", "negative sentences"],
                    position: ["pre-noun"]
                },
                definitions: [
                    {
                        source: "Cambridge",
                        text: "A large amount of"
                    }
                ]
            }
        ]
    },
    {
        word: "some",
        entries: [
            {
                type: "quantifier",
                subtype: "partial",
                grammar: {
                    usage: ["affirmative sentences", "offers", "requests"],
                    nounType: ["countable plural", "uncountable"]
                },
                definitions: [
                    {
                        source: "Cambridge",
                        text: "An unspecified amount or number of"
                    }
                ]
            }
        ]
    },
    {
        word: "a little",
        entries: [
            {
                type: "quantifier",
                subtype: "small quantity",
                grammar: {
                    usage: ["uncountable nouns", "positive meaning"],
                    position: ["pre-noun"]
                },
                definitions: [
                    {
                        source: "Oxford",
                        text: "A small amount of something"
                    }
                ]
            }
        ]
    },
    {
        word: "little",
        entries: [
            {
                type: "quantifier",
                subtype: "small quantity",
                grammar: {
                    usage: ["uncountable nouns", "negative meaning"],
                    position: ["pre-noun"]
                },
                definitions: [
                    {
                        source: "Oxford",
                        text: "Not much (with negative connotation)"
                    }
                ]
            },
            {
                type: "adjective",
                subtype: "size",
                forms: {
                    comparative: "littler",
                    superlative: "littlest"
                },
                definitions: [
                    {
                        source: "Cambridge",
                        text: "Small in size"
                    }
                ]
            }
        ]
    },
    {
        word: "a few",
        entries: [
            {
                type: "quantifier",
                subtype: "small quantity",
                grammar: {
                    usage: ["countable nouns", "positive meaning"],
                    position: ["pre-noun"]
                },
                definitions: [
                    {
                        source: "Oxford",
                        text: "A small number of"
                    }
                ]
            }
        ]
    },
    {
        word: "few",
        entries: [
            {
                type: "quantifier",
                subtype: "small quantity",
                grammar: {
                    usage: ["countable nouns", "negative meaning"],
                    position: ["pre-noun"]
                },
                definitions: [
                    {
                        source: "Oxford",
                        text: "Not many (with negative connotation)"
                    }
                ]
            }
        ]
    },
    {
        word: "whole",
        entries: [
            {
                type: "quantifier",
                subtype: "total",
                grammar: {
                    usage: ["countable singular nouns"],
                    position: ["pre-noun"]
                },
                definitions: [
                    {
                        source: "Cambridge",
                        text: "All of; entire"
                    }
                ]
            },
            {
                type: "adjective",
                subtype: "descriptive",
                grammar: {
                    position: ["attributive", "predicative"]
                },
                definitions: [
                    {
                        source: "Oxford",
                        text: "Complete; not divided or broken up"
                    }
                ]
            }
        ]
    },
    {
        word: "all",
        entries: [
            {
                type: "quantifier",
                subtype: "total",
                grammar: {
                    usage: ["countable and uncountable nouns", "universal statements"],
                    position: ["pre-noun", "pre-determiner"]
                },
                definitions: [
                    {
                        source: "Cambridge",
                        text: "The whole quantity or extent of"
                    }
                ]
            },
            {
                type: "pronoun",
                subtype: "indefinite",
                grammar: {
                    usage: ["referring to a whole group"]
                },
                definitions: [
                    {
                        source: "Oxford",
                        text: "Used to refer to the whole quantity or extent of a particular group or thing"
                    }
                ]
            }
        ]
    },
    {
        word: "no",
        entries: [
            {
                type: "quantifier",
                subtype: "zero",
                grammar: {
                    usage: ["negative sentences", "countable and uncountable nouns"],
                    position: ["pre-noun"]
                },
                definitions: [
                    {
                        source: "Cambridge",
                        text: "Not any; not one; not a"
                    }
                ]
            },
            {
                type: "determiner",
                subtype: "negative",
                grammar: {
                    usage: ["negation"]
                },
                definitions: [
                    {
                        source: "Oxford",
                        text: "Used to give a negative response"
                    }
                ]
            }
        ]
    },
    {
        word: "not",
        entries: [
            {
                type: "adverb",
                subtype: "negation",
                grammar: {
                    usage: ["negating verbs", "adjectives", "adverbs"],
                    position: ["before the word negated"]
                },
                definitions: [
                    {
                        source: "Oxford",
                        text: "Used to express negation, denial, refusal, or prohibition"
                    }
                ]
            }
        ]
    },
    {
        word: "none",
        entries: [
            {
                type: "quantifier",
                subtype: "zero",
                grammar: {
                    usage: ["negative sentences", "countable and uncountable nouns"],
                    position: ["standing alone"]
                },
                definitions: [
                    {
                        source: "Cambridge",
                        text: "Not any; no amount or part of something"
                    }
                ]
            },
            {
                type: "pronoun",
                subtype: "indefinite",
                grammar: {
                    usage: ["negative reference"]
                },
                definitions: [
                    {
                        source: "Oxford",
                        text: "Not any of a group or number"
                    }
                ]
            }
        ]
    },
    {
        word: "every",
        entries: [
            {
                type: "quantifier",
                subtype: "distributive",
                grammar: {
                    usage: ["singular countable nouns", "referring to all members of a group"],
                    position: ["pre-noun"]
                },
                definitions: [
                    {
                        source: "Oxford",
                        text: "Used to refer to all the individual members of a set without exception"
                    }
                ]
            }
        ]
    },
    {
        word: "another",
        entries: [
            {
                type: "quantifier",
                subtype: "additional",
                grammar: {
                    usage: ["singular countable nouns"],
                    position: ["pre-noun"]
                },
                definitions: [
                    {
                        source: "Cambridge",
                        text: "One more person or thing of the same type"
                    }
                ]
            },
            {
                type: "pronoun",
                subtype: "indefinite",
                grammar: {
                    usage: ["singular reference"]
                },
                definitions: [
                    {
                        source: "Oxford",
                        text: "An additional person or thing of the same type"
                    }
                ]
            }
        ]
    },
    {
        word: "other",
        entries: [
            {
                type: "quantifier",
                subtype: "additional",
                grammar: {
                    usage: ["plural countable nouns"],
                    position: ["pre-noun"]
                },
                definitions: [
                    {
                        source: "Cambridge",
                        text: "Used to refer to additional people or things of the same type"
                    }
                ]
            },
            {
                type: "pronoun",
                subtype: "indefinite",
                grammar: {
                    usage: ["plural reference"]
                },
                definitions: [
                    {
                        source: "Oxford",
                        text: "Additional people or things of the same type"
                    }
                ]
            }
        ]
    },
    {
        word: "each",
        entries: [
            {
                type: "quantifier",
                subtype: "distributive",
                grammar: {
                    usage: ["singular countable nouns"],
                    position: ["pre-noun"]
                },
                definitions: [
                    {
                        source: "Cambridge",
                        text: "Used to refer to every one of two or more things or people"
                    }
                ]
            },
            {
                type: "pronoun",
                subtype: "indefinite",
                grammar: {
                    usage: ["singular reference"]
                },
                definitions: [
                    {
                        source: "Oxford",
                        text: "Every one of two or more things or people"
                    }
                ]
            }
        ]
    },
    {
        word: "both",
        entries: [
            {
                type: "quantifier",
                subtype: "dual",
                grammar: {
                    usage: ["two items"],
                    position: ["pre-noun"]
                },
                definitions: [
                    {
                        source: "Cambridge",
                        text: "Used to refer to two people or things together"
                    }
                ]
            },
            {
                type: "pronoun",
                subtype: "indefinite",
                grammar: {
                    usage: ["dual reference"]
                },
                definitions: [
                    {
                        source: "Oxford",
                        text: "Used to refer to two people or things together"
                    }
                ]
            }
        ]
    },
    {
        word: "most",
        entries: [
            {
                type: "quantifier",
                subtype: "majority",
                grammar: {
                    usage: ["countable and uncountable nouns"],
                    position: ["pre-noun"]
                },
                definitions: [
                    {
                        source: "Cambridge",
                        text: "The majority or greater part of"
                    }
                ]
            },
            {
                type: "pronoun",
                subtype: "indefinite",
                grammar: {
                    usage: ["majority reference"]
                },
                definitions: [
                    {
                        source: "Oxford",
                        text: "The majority or greater part"
                    }
                ]
            },
            {
                type: "adverb",
                subtype: "degree",
                grammar: {
                    usage: ["forming superlatives"],
                    position: ["before adjectives"]
                },
                definitions: [
                    {
                        source: "Oxford",
                        text: "Used to form the superlative of adjectives and adverbs"
                    }
                ]
            }
        ]
    },
    {
        word: "several",
        entries: [
            {
                type: "quantifier",
                subtype: "indefinite number",
                grammar: {
                    usage: ["countable plural nouns"],
                    position: ["pre-noun"]
                },
                definitions: [
                    {
                        source: "Cambridge",
                        text: "More than two but not many"
                    }
                ]
            },
            {
                type: "pronoun",
                subtype: "indefinite",
                grammar: {
                    usage: ["plural reference"]
                },
                definitions: [
                    {
                        source: "Oxford",
                        text: "More than two but not many"
                    }
                ]
            }
        ]
    },
    {
        word: "numerous",
        entries: [
            {
                type: "quantifier",
                subtype: "large number",
                grammar: {
                    usage: ["countable plural nouns"],
                    position: ["pre-noun"]
                },
                definitions: [
                    {
                        source: "Cambridge",
                        text: "Great in number; many"
                    }
                ]
            },
            {
                type: "adjective",
                subtype: "descriptive",
                grammar: {
                    position: ["attributive", "predicative"]
                },
                definitions: [
                    {
                        source: "Oxford",
                        text: "Existing in large numbers"
                    }
                ]
            }
        ]
    },
    {
        word: "either",
        entries: [
            {
                type: "quantifier",
                subtype: "dual",
                grammar: {
                    usage: ["two options"],
                    position: ["pre-noun"]
                },
                definitions: [
                    {
                        source: "Cambridge",
                        text: "One or the other of two"
                    }
                ]
            },
            {
                type: "pronoun",
                subtype: "indefinite",
                grammar: {
                    usage: ["dual reference"]
                },
                definitions: [
                    {
                        source: "Oxford",
                        text: "One or the other of two people or things"
                    }
                ]
            },
            {
                type: "adverb",
                subtype: "addition",
                grammar: {
                    usage: ["negative agreement"],
                    position: ["end position"]
                },
                definitions: [
                    {
                        source: "Oxford",
                        text: "Used after negative phrases to state that a feeling or situation is similar to one already mentioned"
                    }
                ]
            }
        ]
    },
    {
        word: "neither",
        entries: [
            {
                type: "quantifier",
                subtype: "negative dual",
                grammar: {
                    usage: ["two negative options"],
                    position: ["pre-noun"]
                },
                definitions: [
                    {
                        source: "Cambridge",
                        text: "Not one nor the other of two"
                    }
                ]
            },
            {
                type: "pronoun",
                subtype: "indefinite",
                grammar: {
                    usage: ["negative dual reference"]
                },
                definitions: [
                    {
                        source: "Oxford",
                        text: "Not one nor the other of two people or things"
                    }
                ]
            },
            {
                type: "adverb",
                subtype: "negative addition",
                grammar: {
                    usage: ["negative agreement"],
                    position: ["beginning position"]
                },
                definitions: [
                    {
                        source: "Oxford",
                        text: "Used before the first of two negative alternatives"
                    }
                ]
            }
        ]
    },
    {
        word: "lot",
        entries: [
            {
                type: "quantifier",
                subtype: "large quantity",
                grammar: {
                    usage: ["countable and uncountable nouns"],
                    position: ["pre-noun in 'a lot of'"]
                },
                definitions: [
                    {
                        source: "Cambridge",
                        text: "A large number or amount"
                    }
                ]
            },
            {
                type: "noun",
                subtype: ["common", "countable"],
                forms: {
                    singular: "lot",
                    plural: "lots"
                },
                definitions: [
                    {
                        source: "Oxford",
                        text: "A particular group or set of people or things"
                    }
                ]
            }
        ]
    },
    {
        word: "lots",
        entries: [
            {
                type: "quantifier",
                subtype: "large quantity",
                grammar: {
                    usage: ["countable and uncountable nouns"],
                    position: ["pre-noun in 'lots of'"]
                },
                definitions: [
                    {
                        source: "Cambridge",
                        text: "A large number or amount"
                    }
                ]
            }
        ]
    },
    {
        word: "any",
        entries: [
            {
                type: "quantifier",
                subtype: "indefinite",
                grammar: {
                    usage: ["questions", "negative sentences", "conditional clauses"],
                    nounType: ["countable plural", "uncountable"]
                },
                definitions: [
                    {
                        source: "Cambridge",
                        text: "Used to refer to one or some of a thing or number of things, no matter how much or how many"
                    }
                ]
            },
            {
                type: "determiner",
                subtype: "indefinite",
                grammar: {
                    usage: ["questions", "negative sentences", "conditional clauses"]
                },
                definitions: [
                    {
                        source: "Oxford",
                        text: "Used to refer to one or some of a thing or number of things, no matter how much or how many"
                    }
                ]
            }
        ]
    },

    // 3. الضمائر الشخصية (Personal Pronouns)
    {
        word: "I",
        entries: [
            {
                type: "pronoun",
                subtype: ["subject", "personal"],
                grammar: {
                    person: "first",
                    number: "singular",
                    gender: "neutral",
                    case: "subjective"
                },
                definitions: [
                    {
                        source: "Oxford",
                        text: "Used by a speaker to refer to himself or herself"
                    }
                ]
            }
        ]
    },
    {
        word: "you",
        entries: [
            {
                type: "pronoun",
                subtype: ["subject/object", "personal"],
                grammar: {
                    person: "second",
                    number: ["singular", "plural"],
                    gender: "neutral",
                    case: ["subjective", "objective"]
                },
                definitions: [
                    {
                        source: "Oxford",
                        text: "Used to refer to the person or people that the speaker is addressing"
                    }
                ]
            }
        ]
    },
    {
        word: "he",
        entries: [
            {
                type: "pronoun",
                subtype: ["subject", "personal"],
                grammar: {
                    person: "third",
                    number: "singular",
                    gender: "masculine",
                    case: "subjective"
                },
                definitions: [
                    {
                        source: "Oxford",
                        text: "Used to refer to a man, boy, or male animal previously mentioned"
                    }
                ]
            }
        ]
    },
    {
        word: "she",
        entries: [
            {
                type: "pronoun",
                subtype: ["subject", "personal"],
                grammar: {
                    person: "third",
                    number: "singular",
                    gender: "feminine",
                    case: "subjective"
                },
                definitions: [
                    {
                        source: "Oxford",
                        text: "Used to refer to a woman, girl, or female animal previously mentioned"
                    }
                ]
            }
        ]
    },
    {
        word: "it",
        entries: [
            {
                type: "pronoun",
                subtype: ["subject/object", "personal"],
                grammar: {
                    person: "third",
                    number: "singular",
                    gender: "neutral",
                    case: ["subjective", "objective"]
                },
                definitions: [
                    {
                        source: "Oxford",
                        text: "Used to refer to a thing previously mentioned or easily identified"
                    }
                ]
            }
        ]
    },
    {
        word: "we",
        entries: [
            {
                type: "pronoun",
                subtype: ["subject", "personal"],
                grammar: {
                    person: "first",
                    number: "plural",
                    gender: "neutral",
                    case: "subjective"
                },
                definitions: [
                    {
                        source: "Oxford",
                        text: "Used by a speaker to refer to himself or herself and one or more other people"
                    }
                ]
            }
        ]
    },
    {
        word: "they",
        entries: [
            {
                type: "pronoun",
                subtype: ["subject", "personal"],
                grammar: {
                    person: "third",
                    number: "plural",
                    gender: "neutral",
                    case: "subjective"
                },
                definitions: [
                    {
                        source: "Oxford",
                        text: "Used to refer to two or more people or things previously mentioned"
                    }
                ]
            }
        ]
    },
    {
        word: "me",
        entries: [
            {
                type: "pronoun",
                subtype: ["object", "personal"],
                grammar: {
                    person: "first",
                    number: "singular",
                    gender: "neutral",
                    case: "objective"
                },
                definitions: [
                    {
                        source: "Oxford",
                        text: "Used by a speaker to refer to himself or herself as the object of a verb or preposition"
                    }
                ]
            }
        ]
    },
    {
        word: "him",
        entries: [
            {
                type: "pronoun",
                subtype: ["object", "personal"],
                grammar: {
                    person: "third",
                    number: "singular",
                    gender: "masculine",
                    case: "objective"
                },
                definitions: [
                    {
                        source: "Oxford",
                        text: "Used to refer to a man, boy, or male animal previously mentioned as the object of a verb or preposition"
                    }
                ]
            }
        ]
    },
    {
        word: "her",
        entries: [
            {
                type: "pronoun",
                subtype: ["object", "personal"],
                grammar: {
                    person: "third",
                    number: "singular",
                    gender: "feminine",
                    case: "objective"
                },
                definitions: [
                    {
                        source: "Oxford",
                        text: "Used to refer to a woman, girl, or female animal previously mentioned as the object of a verb or preposition"
                    }
                ]
            },
            {
                type: "determiner",
                subtype: "possessive",
                grammar: {
                    usage: ["possessive adjective"],
                    nounType: ["any"]
                },
                definitions: [
                    {
                        source: "Cambridge",
                        text: "Belonging to or associated with a female person or animal previously mentioned"
                    }
                ]
            }
        ]
    },
    {
        word: "us",
        entries: [
            {
                type: "pronoun",
                subtype: ["object", "personal"],
                grammar: {
                    person: "first",
                    number: "plural",
                    gender: "neutral",
                    case: "objective"
                },
                definitions: [
                    {
                        source: "Oxford",
                        text: "Used by a speaker to refer to himself or herself and one or more other people as the object of a verb or preposition"
                    }
                ]
            }
        ]
    },
    {
        word: "them",
        entries: [
            {
                type: "pronoun",
                subtype: ["object", "personal"],
                grammar: {
                    person: "third",
                    number: "plural",
                    gender: "neutral",
                    case: "objective"
                },
                definitions: [
                    {
                        source: "Oxford",
                        text: "Used to refer to two or more people or things previously mentioned as the object of a verb or preposition"
                    }
                ]
            }
        ]
    },

    // 4. الضمائر الملكية (Possessive Pronouns)
    {
        word: "mine",
        entries: [
            {
                type: "pronoun",
                subtype: "possessive",
                grammar: {
                    person: "first",
                    number: "singular",
                    gender: "neutral",
                    usage: ["standing alone"]
                },
                definitions: [
                    {
                        source: "Oxford",
                        text: "Used to refer to something belonging to or associated with the speaker"
                    }
                ]
            }
        ]
    },
    {
        word: "yours",
        entries: [
            {
                type: "pronoun",
                subtype: "possessive",
                grammar: {
                    person: "second",
                    number: ["singular", "plural"],
                    gender: "neutral",
                    usage: ["standing alone"]
                },
                definitions: [
                    {
                        source: "Oxford",
                        text: "Used to refer to something belonging to or associated with the person or people that the speaker is addressing"
                    }
                ]
            }
        ]
    },
    {
        word: "his",
        entries: [
            {
                type: "pronoun",
                subtype: "possessive",
                grammar: {
                    person: "third",
                    number: "singular",
                    gender: "masculine",
                    usage: ["standing alone"]
                },
                definitions: [
                    {
                        source: "Oxford",
                        text: "Used to refer to something belonging to or associated with a man, boy, or male animal previously mentioned"
                    }
                ]
            },
            {
                type: "determiner",
                subtype: "possessive",
                grammar: {
                    usage: ["possessive adjective"],
                    nounType: ["any"]
                },
                definitions: [
                    {
                        source: "Cambridge",
                        text: "Belonging to or associated with a male person or animal previously mentioned"
                    }
                ]
            }
        ]
    },
    {
        word: "hers",
        entries: [
            {
                type: "pronoun",
                subtype: "possessive",
                grammar: {
                    person: "third",
                    number: "singular",
                    gender: "feminine",
                    usage: ["standing alone"]
                },
                definitions: [
                    {
                        source: "Oxford",
                        text: "Used to refer to something belonging to or associated with a woman, girl, or female animal previously mentioned"
                    }
                ]
            }
        ]
    },
    {
        word: "its",
        entries: [
            {
                type: "determiner",
                subtype: "possessive",
                grammar: {
                    person: "third",
                    number: "singular",
                    gender: "neutral",
                    usage: ["possessive adjective"],
                    nounType: ["any"]
                },
                definitions: [
                    {
                        source: "Oxford",
                        text: "Belonging to or associated with a thing or animal previously mentioned"
                    }
                ]
            }
        ]
    },
    {
        word: "ours",
        entries: [
            {
                type: "pronoun",
                subtype: "possessive",
                grammar: {
                    person: "first",
                    number: "plural",
                    gender: "neutral",
                    usage: ["standing alone"]
                },
                definitions: [
                    {
                        source: "Oxford",
                        text: "Used to refer to something belonging to or associated with the speaker and one or more other people"
                    }
                ]
            }
        ]
    },
    {
        word: "theirs",
        entries: [
            {
                type: "pronoun",
                subtype: "possessive",
                grammar: {
                    person: "third",
                    number: "plural",
                    gender: "neutral",
                    usage: ["standing alone"]
                },
                definitions: [
                    {
                        source: "Oxford",
                        text: "Used to refer to something belonging to or associated with two or more people or things previously mentioned"
                    }
                ]
            }
        ]
    },

    // 5. الضمائر الانعكاسية (Reflexive Pronouns)
    {
        word: "myself",
        entries: [
            {
                type: "pronoun",
                subtype: "reflexive",
                grammar: {
                    person: "first",
                    number: "singular",
                    gender: "neutral",
                    usage: ["reflexive", "emphatic"]
                },
                definitions: [
                    {
                        source: "Oxford",
                        text: "Used by a speaker to refer to himself or herself as the object of a verb or preposition when he or she is the subject of the clause"
                    }
                ]
            }
        ]
    },
    {
        word: "yourself",
        entries: [
            {
                type: "pronoun",
                subtype: "reflexive",
                grammar: {
                    person: "second",
                    number: "singular",
                    gender: "neutral",
                    usage: ["reflexive", "emphatic"]
                },
                definitions: [
                    {
                        source: "Oxford",
                        text: "Used to refer to the person being addressed as the object of a verb or preposition when that person is the subject of the clause"
                    }
                ]
            }
        ]
    },
    {
        word: "himself",
        entries: [
            {
                type: "pronoun",
                subtype: "reflexive",
                grammar: {
                    person: "third",
                    number: "singular",
                    gender: "masculine",
                    usage: ["reflexive", "emphatic"]
                },
                definitions: [
                    {
                        source: "Oxford",
                        text: "Used to refer to a man, boy, or male animal previously mentioned as the object of a verb or preposition when he is the subject of the clause"
                    }
                ]
            }
        ]
    },
    {
        word: "herself",
        entries: [
            {
                type: "pronoun",
                subtype: "reflexive",
                grammar: {
                    person: "third",
                    number: "singular",
                    gender: "feminine",
                    usage: ["reflexive", "emphatic"]
                },
                definitions: [
                    {
                        source: "Oxford",
                        text: "Used to refer to a woman, girl, or female animal previously mentioned as the object of a verb or preposition when she is the subject of the clause"
                    }
                ]
            }
        ]
    },
    {
        word: "itself",
        entries: [
            {
                type: "pronoun",
                subtype: "reflexive",
                grammar: {
                    person: "third",
                    number: "singular",
                    gender: "neutral",
                    usage: ["reflexive", "emphatic"]
                },
                definitions: [
                    {
                        source: "Oxford",
                        text: "Used to refer to a thing or animal previously mentioned as the object of a verb or preposition when it is the subject of the clause"
                    }
                ]
            }
        ]
    },
    {
        word: "ourselves",
        entries: [
            {
                type: "pronoun",
                subtype: "reflexive",
                grammar: {
                    person: "first",
                    number: "plural",
                    gender: "neutral",
                    usage: ["reflexive", "emphatic"]
                },
                definitions: [
                    {
                        source: "Oxford",
                        text: "Used by a speaker to refer to himself or herself and one or more other people as the object of a verb or preposition when they are the subject of the clause"
                    }
                ]
            }
        ]
    },
    {
        word: "yourselves",
        entries: [
            {
                type: "pronoun",
                subtype: "reflexive",
                grammar: {
                    person: "second",
                    number: "plural",
                    gender: "neutral",
                    usage: ["reflexive", "emphatic"]
                },
                definitions: [
                    {
                        source: "Oxford",
                        text: "Used to refer to the people being addressed as the object of a verb or preposition when they are the subject of the clause"
                    }
                ]
            }
        ]
    },
    {
        word: "themselves",
        entries: [
            {
                type: "pronoun",
                subtype: "reflexive",
                grammar: {
                    person: "third",
                    number: "plural",
                    gender: "neutral",
                    usage: ["reflexive", "emphatic"]
                },
                definitions: [
                    {
                        source: "Oxford",
                        text: "Used to refer to two or more people or things previously mentioned as the object of a verb or preposition when they are the subject of the clause"
                    }
                ]
            }
        ]
    },

    // 6. الضمائر المتبادلة (Reciprocal Pronouns)
    {
        word: "each other",
        entries: [
            {
                type: "pronoun",
                subtype: "reciprocal",
                grammar: {
                    usage: ["two entities"],
                    position: ["object position"]
                },
                definitions: [
                    {
                        source: "Cambridge",
                        text: "Used to show that each person in a group does something to or for the other people in the group"
                    }
                ]
            }
        ]
    },
    {
        word: "one another",
        entries: [
            {
                type: "pronoun",
                subtype: "reciprocal",
                grammar: {
                    usage: ["more than two entities"],
                    position: ["object position"]
                },
                definitions: [
                    {
                        source: "Cambridge",
                        text: "Used to show that each person in a group does something to or for the other people in the group"
                    }
                ]
            }
        ]
    },

    // 7. الضمائر النسبية (Relative Pronouns)
    {
        word: "who",
        entries: [
            {
                type: "pronoun",
                subtype: "relative",
                grammar: {
                    usage: ["subject", "people"],
                    position: ["introducing relative clauses"]
                },
                definitions: [
                    {
                        source: "Oxford",
                        text: "Used to introduce a clause giving further information about a person or people previously mentioned"
                    }
                ]
            },
            {
                type: "pronoun",
                subtype: "interrogative",
                grammar: {
                    usage: ["questions about people"],
                    position: ["subject or object"]
                },
                definitions: [
                    {
                        source: "Cambridge",
                        text: "Used to ask which person or people"
                    }
                ]
            }
        ]
    },
    {
        word: "whom",
        entries: [
            {
                type: "pronoun",
                subtype: "relative",
                grammar: {
                    usage: ["object", "people", "formal"],
                    position: ["introducing relative clauses"]
                },
                definitions: [
                    {
                        source: "Oxford",
                        text: "Used to introduce a clause giving further information about a person or people previously mentioned (object case)"
                    }
                ]
            },
            {
                type: "pronoun",
                subtype: "interrogative",
                grammar: {
                    usage: ["questions about people", "formal"],
                    position: ["object"]
                },
                definitions: [
                    {
                        source: "Cambridge",
                        text: "Used to ask which person or people (object case)"
                    }
                ]
            }
        ]
    },
    {
        word: "whose",
        entries: [
            {
                type: "pronoun",
                subtype: "relative",
                grammar: {
                    usage: ["possessive", "people or things"],
                    position: ["introducing relative clauses"]
                },
                definitions: [
                    {
                        source: "Oxford",
                        text: "Used to introduce a clause indicating possession by the person or thing previously mentioned"
                    }
                ]
            },
            {
                type: "pronoun",
                subtype: "interrogative",
                grammar: {
                    usage: ["questions about possession"],
                    position: ["possessive"]
                },
                definitions: [
                    {
                        source: "Cambridge",
                        text: "Used to ask which person or thing something belongs to"
                    }
                ]
            }
        ]
    },
    {
        word: "which",
        entries: [
            {
                type: "pronoun",
                subtype: "relative",
                grammar: {
                    usage: ["subject/object", "things or animals"],
                    position: ["introducing relative clauses"]
                },
                definitions: [
                    {
                        source: "Oxford",
                        text: "Used to introduce a clause giving further information about a thing or things previously mentioned"
                    }
                ]
            },
            {
                type: "pronoun",
                subtype: "interrogative",
                grammar: {
                    usage: ["questions about things or animals"],
                    position: ["subject or object"]
                },
                definitions: [
                    {
                        source: "Cambridge",
                        text: "Used to ask for specific information about one or more things or animals from a limited set"
                    }
                ]
            }
        ]
    },
    {
        word: "that",
        entries: [
            {
                type: "pronoun",
                subtype: "relative",
                grammar: {
                    usage: ["subject/object", "people, things or animals"],
                    position: ["introducing restrictive relative clauses"]
                },
                definitions: [
                    {
                        source: "Oxford",
                        text: "Used to introduce a restrictive clause giving essential information about a person, thing, or animal previously mentioned"
                    }
                ]
            },
            {
                type: "pronoun",
                subtype: "demonstrative",
                grammar: {
                    usage: ["singular", "specific reference"],
                    position: ["subject or object"]
                },
                definitions: [
                    {
                        source: "Cambridge",
                        text: "Used to refer to a specific thing, person, or animal that has been mentioned or is understood"
                    }
                ]
            },
            {
                type: "determiner",
                subtype: "demonstrative",
                grammar: {
                    usage: ["singular", "specific reference"],
                    position: ["pre-noun"]
                },
                definitions: [
                    {
                        source: "Oxford",
                        text: "Used to identify a specific person or thing observed or heard by the speaker"
                    }
                ]
            },
            {
                type: "conjunction",
                subtype: "subordinating",
                grammar: {
                    usage: ["introducing noun clauses", "reporting clauses"]
                },
                definitions: [
                    {
                        source: "Cambridge",
                        text: "Used to introduce a subordinate clause"
                    }
                ]
            }
        ]
    },

    // 8. الضمائر الاستفهامية (Interrogative Pronouns)
    {
        word: "what",
        entries: [
            {
                type: "pronoun",
                subtype: "interrogative",
                grammar: {
                    usage: ["questions about things"],
                    position: ["subject or object"]
                },
                definitions: [
                    {
                        source: "Oxford",
                        text: "Used to ask for information about something"
                    }
                ]
            },
            {
                type: "determiner",
                subtype: "interrogative",
                grammar: {
                    usage: ["questions about things"],
                    position: ["pre-noun"]
                },
                definitions: [
                    {
                        source: "Cambridge",
                        text: "Asking for information specifying something"
                    }
                ]
            },
            {
                type: "adjective",
                subtype: ["emphatic"],
                grammar: {
                    usage: ["exclamations"],
                    position: ["pre-noun"]
                },
                definitions: [
                    {
                        source: "Merriam-Webster",
                        text: "Used to emphasize something"
                    }
                ]
            },
            {
                type: "interjection",
                subtype: ["exclamation"],
                grammar: {
                    usage: ["surprise"],
                    position: ["standalone"]
                },
                definitions: [
                    {
                        source: "Longman",
                        text: "Expressing surprise"
                    }
                ]
            }
        ]
    },

    // 9. الضمائر الإشارة (Demonstrative Pronouns)
    {
        word: "this",
        entries: [
            {
                type: "pronoun",
                subtype: "demonstrative",
                grammar: {
                    usage: ["singular", "near reference"],
                    position: ["subject or object"]
                },
                definitions: [
                    {
                        source: "Oxford",
                        text: "Used to identify a specific person or thing close at hand or being indicated or experienced"
                    }
                ]
            },
            {
                type: "determiner",
                subtype: "demonstrative",
                grammar: {
                    usage: ["singular", "near reference"],
                    position: ["pre-noun"]
                },
                definitions: [
                    {
                        source: "Cambridge",
                        text: "Used to identify a specific person or thing close at hand"
                    }
                ]
            }
        ]
    },
    {
        word: "that",
        entries: [
            {
                type: "pronoun",
                subtype: "demonstrative",
                grammar: {
                    usage: ["singular", "distant reference"],
                    position: ["subject or object"]
                },
                definitions: [
                    {
                        source: "Oxford",
                        text: "Used to identify a specific person or thing observed or heard by the speaker"
                    }
                ]
            },
            {
                type: "determiner",
                subtype: "demonstrative",
                grammar: {
                    usage: ["singular", "distant reference"],
                    position: ["pre-noun"]
                },
                definitions: [
                    {
                        source: "Cambridge",
                        text: "Used to identify a specific person or thing at a distance"
                    }
                ]
            }
        ]
    },
    {
        word: "these",
        entries: [
            {
                type: "pronoun",
                subtype: "demonstrative",
                grammar: {
                    usage: ["plural", "near reference"],
                    position: ["subject or object"]
                },
                definitions: [
                    {
                        source: "Oxford",
                        text: "Used to identify specific people or things close at hand or being indicated or experienced"
                    }
                ]
            },
            {
                type: "determiner",
                subtype: "demonstrative",
                grammar: {
                    usage: ["plural", "near reference"],
                    position: ["pre-noun"]
                },
                definitions: [
                    {
                        source: "Cambridge",
                        text: "Used to identify specific people or things close at hand"
                    }
                ]
            }
        ]
    },
    {
        word: "those",
        entries: [
            {
                type: "pronoun",
                subtype: "demonstrative",
                grammar: {
                    usage: ["plural", "distant reference"],
                    position: ["subject or object"]
                },
                definitions: [
                    {
                        source: "Oxford",
                        text: "Used to identify specific people or things observed or heard by the speaker"
                    }
                ]
            },
            {
                type: "determiner",
                subtype: "demonstrative",
                grammar: {
                    usage: ["plural", "distant reference"],
                    position: ["pre-noun"]
                },
                definitions: [
                    {
                        source: "Cambridge",
                        text: "Used to identify specific people or things at a distance"
                    }
                ]
            }
        ]
    },

    // 10. الضمائر غير المحددة (Indefinite Pronouns)
    {
        word: "all",
        entries: [
            {
                type: "pronoun",
                subtype: "indefinite",
                grammar: {
                    usage: ["universal reference"],
                    position: ["standing alone"]
                },
                definitions: [
                    {
                        source: "Oxford",
                        text: "The whole quantity or extent of a particular group or thing"
                    }
                ]
            }
        ]
    },
    {
        word: "another",
        entries: [
            {
                type: "pronoun",
                subtype: "indefinite",
                grammar: {
                    usage: ["singular reference"],
                    position: ["standing alone"]
                },
                definitions: [
                    {
                        source: "Oxford",
                        text: "An additional person or thing of the same type"
                    }
                ]
            }
        ]
    },
    {
        word: "any",
        entries: [
            {
                type: "pronoun",
                subtype: "indefinite",
                grammar: {
                    usage: ["questions", "negative sentences", "conditional clauses"],
                    position: ["standing alone"]
                },
                definitions: [
                    {
                        source: "Oxford",
                        text: "Used to refer to one or some of a thing or number of things, no matter how much or how many"
                    }
                ]
            }
        ]
    },
    {
        word: "anybody",
        entries: [
            {
                type: "pronoun",
                subtype: "indefinite",
                grammar: {
                    usage: ["singular", "people", "questions and negatives"],
                    position: ["subject or object"]
                },
                definitions: [
                    {
                        source: "Oxford",
                        text: "Used to refer to any person, when it does not matter which"
                    }
                ]
            }
        ]
    },
    {
        word: "anyone",
        entries: [
            {
                type: "pronoun",
                subtype: "indefinite",
                grammar: {
                    usage: ["singular", "people", "questions and negatives"],
                    position: ["subject or object"]
                },
                definitions: [
                    {
                        source: "Oxford",
                        text: "Used to refer to any person, when it does not matter which"
                    }
                ]
            }
        ]
    },
    {
        word: "anything",
        entries: [
            {
                type: "pronoun",
                subtype: "indefinite",
                grammar: {
                    usage: ["singular", "things", "questions and negatives"],
                    position: ["subject or object"]
                },
                definitions: [
                    {
                        source: "Oxford",
                        text: "Used to refer to any thing, when it does not matter which"
                    }
                ]
            }
        ]
    },
    {
        word: "both",
        entries: [
            {
                type: "pronoun",
                subtype: "indefinite",
                grammar: {
                    usage: ["dual reference"],
                    position: ["standing alone"]
                },
                definitions: [
                    {
                        source: "Oxford",
                        text: "Used to refer to two people or things together"
                    }
                ]
            }
        ]
    },
    {
        word: "each",
        entries: [
            {
                type: "pronoun",
                subtype: "indefinite",
                grammar: {
                    usage: ["singular reference"],
                    position: ["standing alone"]
                },
                definitions: [
                    {
                        source: "Oxford",
                        text: "Every one of two or more things or people"
                    }
                ]
            }
        ]
    },
    {
        word: "either",
        entries: [
            {
                type: "pronoun",
                subtype: "indefinite",
                grammar: {
                    usage: ["dual reference"],
                    position: ["standing alone"]
                },
                definitions: [
                    {
                        source: "Oxford",
                        text: "One or the other of two people or things"
                    }
                ]
            }
        ]
    },
    {
        word: "everybody",
        entries: [
            {
                type: "pronoun",
                subtype: "indefinite",
                grammar: {
                    usage: ["singular", "people", "universal"],
                    position: ["subject or object"]
                },
                definitions: [
                    {
                        source: "Oxford",
                        text: "Used to refer to all people"
                    }
                ]
            }
        ]
    },
    {
        word: "everyone",
        entries: [
            {
                type: "pronoun",
                subtype: "indefinite",
                grammar: {
                    usage: ["singular", "people", "universal"],
                    position: ["subject or object"]
                },
                definitions: [
                    {
                        source: "Oxford",
                        text: "Used to refer to all people"
                    }
                ]
            }
        ]
    },
    {
        word: "everything",
        entries: [
            {
                type: "pronoun",
                subtype: "indefinite",
                grammar: {
                    usage: ["singular", "things", "universal"],
                    position: ["subject or object"]
                },
                definitions: [
                    {
                        source: "Oxford",
                        text: "Used to refer to all things"
                    }
                ]
            }
        ]
    },
    {
        word: "few",
        entries: [
            {
                type: "pronoun",
                subtype: "indefinite",
                grammar: {
                    usage: ["plural reference", "negative meaning"],
                    position: ["standing alone"]
                },
                definitions: [
                    {
                        source: "Oxford",
                        text: "A small number of people or things"
                    }
                ]
            }
        ]
    },
    {
        word: "many",
        entries: [
            {
                type: "pronoun",
                subtype: "indefinite",
                grammar: {
                    usage: ["plural reference"],
                    position: ["standing alone"]
                },
                definitions: [
                    {
                        source: "Oxford",
                        text: "A large number of people or things"
                    }
                ]
            }
        ]
    },
    {
        word: "most",
        entries: [
            {
                type: "pronoun",
                subtype: "indefinite",
                grammar: {
                    usage: ["majority reference"],
                    position: ["standing alone"]
                },
                definitions: [
                    {
                        source: "Oxford",
                        text: "The majority or greater part"
                    }
                ]
            }
        ]
    },
    {
        word: "neither",
        entries: [
            {
                type: "pronoun",
                subtype: "indefinite",
                grammar: {
                    usage: ["negative dual reference"],
                    position: ["standing alone"]
                },
                definitions: [
                    {
                        source: "Oxford",
                        text: "Not one nor the other of two people or things"
                    }
                ]
            }
        ]
    },
    {
        word: "nobody",
        entries: [
            {
                type: "pronoun",
                subtype: "indefinite",
                grammar: {
                    usage: ["singular", "people", "negative"],
                    position: ["subject or object"]
                },
                definitions: [
                    {
                        source: "Oxford",
                        text: "Used to refer to no person; no one"
                    }
                ]
            }
        ]
    },
    {
        word: "none",
        entries: [
            {
                type: "pronoun",
                subtype: "indefinite",
                grammar: {
                    usage: ["negative reference"],
                    position: ["standing alone"]
                },
                definitions: [
                    {
                        source: "Oxford",
                        text: "Not any of a group or number"
                    }
                ]
            }
        ]
    },
    {
        word: "no one",
        entries: [
            {
                type: "pronoun",
                subtype: "indefinite",
                grammar: {
                    usage: ["singular", "people", "negative"],
                    position: ["subject or object"]
                },
                definitions: [
                    {
                        source: "Oxford",
                        text: "Used to refer to no person; nobody"
                    }
                ]
            }
        ]
    },
    {
        word: "nothing",
        entries: [
            {
                type: "pronoun",
                subtype: "indefinite",
                grammar: {
                    usage: ["singular", "things", "negative"],
                    position: ["subject or object"]
                },
                definitions: [
                    {
                        source: "Oxford",
                        text: "Used to refer to no thing; not anything"
                    }
                ]
            }
        ]
    },
    {
        word: "one",
        entries: [
            {
                type: "pronoun",
                subtype: "indefinite",
                grammar: {
                    usage: ["singular reference"],
                    position: ["standing alone"]
                },
                definitions: [
                    {
                        source: "Oxford",
                        text: "Used to refer to a person or thing in a general way"
                    }
                ]
            }
        ]
    },
    {
        word: "other",
        entries: [
            {
                type: "pronoun",
                subtype: "indefinite",
                grammar: {
                    usage: ["plural reference"],
                    position: ["standing alone"]
                },
                definitions: [
                    {
                        source: "Oxford",
                        text: "Additional people or things of the same type"
                    }
                ]
            }
        ]
    },
    {
        word: "others",
        entries: [
            {
                type: "pronoun",
                subtype: "indefinite",
                grammar: {
                    usage: ["plural reference"],
                    position: ["standing alone"]
                },
                definitions: [
                    {
                        source: "Oxford",
                        text: "Additional people or things of the same type"
                    }
                ]
            }
        ]
    },
    {
        word: "several",
        entries: [
            {
                type: "pronoun",
                subtype: "indefinite",
                grammar: {
                    usage: ["plural reference"],
                    position: ["standing alone"]
                },
                definitions: [
                    {
                        source: "Oxford",
                        text: "More than two but not many"
                    }
                ]
            }
        ]
    },
    {
        word: "some",
        entries: [
            {
                type: "pronoun",
                subtype: "indefinite",
                grammar: {
                    usage: ["plural reference"],
                    position: ["standing alone"]
                },
                definitions: [
                    {
                        source: "Oxford",
                        text: "An unspecified number or amount of people or things"
                    }
                ]
            }
        ]
    },
    {
        word: "somebody",
        entries: [
            {
                type: "pronoun",
                subtype: "indefinite",
                grammar: {
                    usage: ["singular", "people", "affirmative"],
                    position: ["subject or object"]
                },
                definitions: [
                    {
                        source: "Oxford",
                        text: "Used to refer to some person, when you do not know or do not say who the person is"
                    }
                ]
            }
        ]
    },
    {
        word: "someone",
        entries: [
            {
                type: "pronoun",
                subtype: "indefinite",
                grammar: {
                    usage: ["singular", "people", "affirmative"],
                    position: ["subject or object"]
                },
                definitions: [
                    {
                        source: "Oxford",
                        text: "Used to refer to some person, when you do not know or do not say who the person is"
                    }
                ]
            }
        ]
    },
    {
        word: "something",
        entries: [
            {
                type: "pronoun",
                subtype: "indefinite",
                grammar: {
                    usage: ["singular", "things", "affirmative"],
                    position: ["subject or object"]
                },
                definitions: [
                    {
                        source: "Oxford",
                        text: "Used to refer to some thing, when you do not know or do not say what the thing is"
                    }
                ]
            }
        ]
    },
    {
        word: "such",
        entries: [
            {
                type: "pronoun",
                subtype: "indefinite",
                grammar: {
                    usage: ["reference to type or kind"],
                    position: ["standing alone"]
                },
                definitions: [
                    {
                        source: "Oxford",
                        text: "Used to refer to something of the type mentioned"
                    }
                ]
            }
        ]
    },

        // 1. Coordinating Conjunctions
        {
            word: "for",
            entries: [
                {
                    type: "conjunction",
                    subtype: ["coordinating"],
                    grammar: {
                        function: "reason",
                        position: ["between clauses"],
                        punctuation: "preceded by comma"
                    },
                    definitions: [
                        {
                            source: "Oxford English Dictionary",
                            text: "Indicates the reason or cause for something"
                        }
                    ]
                }
            ]
        },
        {
            word: "and",
            entries: [
                {
                    type: "conjunction",
                    subtype: ["coordinating"],
                    grammar: {
                        function: "addition",
                        position: ["between words/phrases/clauses"],
                        punctuation: "comma optional"
                    },
                    definitions: [
                        {
                            source: "Cambridge Grammar of English",
                            text: "Connects words, phrases, or clauses of equal importance"
                        }
                    ]
                }
            ]
        },
        {
            word: "nor",
            entries: [
                {
                    type: "conjunction",
                    subtype: ["coordinating"],
                    grammar: {
                        function: "negative addition",
                        position: ["after negative clause"],
                        punctuation: "preceded by comma",
                        note: "Requires inversion of subject and verb"
                    },
                    definitions: [
                        {
                            source: "Oxford English Dictionary",
                            text: "Used to introduce a further negative statement"
                        }
                    ]
                }
            ]
        },
        {
            word: "but",
            entries: [
                {
                    type: "conjunction",
                    subtype: ["coordinating"],
                    grammar: {
                        function: "contrast",
                        position: ["between clauses"],
                        punctuation: "preceded by comma"
                    },
                    definitions: [
                        {
                            source: "Cambridge Grammar of English",
                            text: "Introduces a contrast or exception"
                        }
                    ]
                },
                {
                    type: "preposition",
                    subtype: ["exception"],
                    grammar: {
                        usage: ["excluding"],
                        position: ["pre-noun"]
                    },
                    definitions: [
                        {
                            source: "Cambridge",
                            text: "Except; apart from"
                        }
                    ]
                },
                {
                    type: "adverb",
                    subtype: ["degree"],
                    grammar: {
                        usage: ["emphasis"],
                        position: ["before adjective"]
                    },
                    definitions: [
                        {
                            source: "Merriam-Webster",
                            text: "Only; merely"
                        }
                    ]
                },
                {
                    type: "noun",
                    subtype: ["objection"],
                    grammar: {
                        countability: "countable",
                        forms: ["but", "buts"]
                    },
                    definitions: [
                        {
                            source: "Longman",
                            text: "An objection or argument against"
                        }
                    ]
                },
            ]
        },
        {
            word: "or",
            entries: [
                {
                    type: "conjunction",
                    subtype: ["coordinating"],
                    grammar: {
                        function: "alternative",
                        position: ["between words/phrases/clauses"],
                        punctuation: "comma optional"
                    },
                    definitions: [
                        {
                            source: "Oxford English Dictionary",
                            text: "Presents alternatives or choices"
                        }
                    ]
                }
            ]
        },
        {
            word: "yet",
            entries: [
                {
                    type: "conjunction",
                    subtype: ["coordinating"],
                    grammar: {
                        function: "contrast",
                        position: ["between clauses"],
                        punctuation: "preceded by comma"
                    },
                    definitions: [
                        {
                            source: "Cambridge Grammar of English",
                            text: "Introduces a contrasting idea that follows logically"
                        }
                    ]
                }
            ]
        },
        {
            word: "so",
            entries: [
                {
                    type: "conjunction",
                    subtype: ["coordinating"],
                    grammar: {
                        function: "result",
                        position: ["between clauses"],
                        punctuation: "preceded by comma"
                    },
                    definitions: [
                        {
                            source: "Oxford English Dictionary",
                            text: "Indicates consequence or result"
                        }
                    ]
                }
            ]
        },
    
        // 2. Subordinating Conjunctions
        // a) Time
        {
            word: "after",
            entries: [
                {
                    type: "conjunction",
                    subtype: ["subordinating", "time"],
                    grammar: {
                        function: "time sequence",
                        position: ["beginning or middle of sentence"]
                    },
                    definitions: [
                        {
                            source: "Longman Grammar of Spoken and Written English",
                            text: "Indicates subsequent time"
                        }
                    ]
                }
            ]
        },
        {
            word: "as",
            entries: [
                {
                    type: "conjunction",
                    subtype: ["subordinating", "time", "cause", "comparison"],
                    grammar: {
                        function: "multiple",
                        position: ["beginning or middle of sentence"]
                    },
                    definitions: [
                        {
                            source: "Oxford English Dictionary",
                            text: "Has multiple functions depending on context"
                        }
                    ]
                }
            ]
        },
        {
            word: "as soon as",
            entries: [
                {
                    type: "conjunction",
                    subtype: ["subordinating", "time"],
                    grammar: {
                        function: "immediate sequence",
                        position: ["beginning or middle of sentence"]
                    },
                    definitions: [
                        {
                            source: "Longman Grammar of Spoken and Written English",
                            text: "Indicates immediate temporal relationship"
                        }
                    ]
                }
            ]
        },
        {
            word: "before",
            entries: [
                {
                    type: "conjunction",
                    subtype: ["subordinating", "time"],
                    grammar: {
                        function: "prior time",
                        position: ["beginning or middle of sentence"]
                    },
                    definitions: [
                        {
                            source: "Oxford English Dictionary",
                            text: "Indicates anterior time"
                        }
                    ]
                }
            ]
        },
        {
            word: "once",
            entries: [
                {
                    type: "conjunction",
                    subtype: ["subordinating", "time", "condition"],
                    grammar: {
                        function: "time/condition",
                        position: ["beginning or middle of sentence"]
                    },
                    definitions: [
                        {
                            source: "Cambridge Grammar of English",
                            text: "Indicates a temporal or conditional relationship"
                        }
                    ]
                }
            ]
        },
        {
            word: "since",
            entries: [
                {
                    type: "conjunction",
                    subtype: ["subordinating", "time", "cause"],
                    grammar: {
                        function: "time/reason",
                        position: ["beginning or middle of sentence"]
                    },
                    definitions: [
                        {
                            source: "Oxford English Dictionary",
                            text: "Indicates time from past to present or gives reason"
                        }
                    ]
                }
            ]
        },
        {
            word: "till",
            entries: [
                {
                    type: "conjunction",
                    subtype: ["subordinating", "time"],
                    grammar: {
                        function: "time limit",
                        position: ["beginning or middle of sentence"]
                    },
                    definitions: [
                        {
                            source: "Longman Grammar of Spoken and Written English",
                            text: "Indicates the time when something ends"
                        }
                    ]
                }
            ]
        },
        {
            word: "until",
            entries: [
                {
                    type: "conjunction",
                    subtype: ["subordinating", "time"],
                    grammar: {
                        function: "time limit",
                        position: ["beginning or middle of sentence"]
                    },
                    definitions: [
                        {
                            source: "Oxford English Dictionary",
                            text: "Indicates the time when something ends"
                        }
                    ]
                }
            ]
        },
        {
            word: "when",
            entries: [
                {
                    type: "conjunction",
                    subtype: ["subordinating", "time"],
                    grammar: {
                        function: "time reference",
                        position: ["beginning or middle of sentence"]
                    },
                    definitions: [
                        {
                            source: "Cambridge Grammar of English",
                            text: "Indicates a specific time or period"
                        }
                    ]
                },
                {
                    type: "adverb",
                    subtype: ["interrogative", "relative"],
                    grammar: {
                        usage: ["question time", "relative clauses"],
                        position: ["beginning", "middle"]
                    },
                    definitions: [
                        {
                            source: "Oxford",
                            text: "At what time"
                        },
                        {
                            source: "Cambridge",
                            text: "Used to ask about time"
                        }
                    ]
                },
                {
                    type: "pronoun",
                    subtype: ["relative"],
                    grammar: {
                        usage: ["referring to time"],
                        position: ["after noun"]
                    },
                    definitions: [
                        {
                            source: "Merriam-Webster",
                            text: "The time at which"
                        }
                    ]
                }
            ]
        },
        {
            word: "where",
            entries: [
                {
                    type: "adverb",
                    subtype: ["interrogative", "relative"],
                    grammar: {
                        usage: ["question place", "relative clauses"],
                        position: ["beginning", "middle"]
                    },
                    definitions: [
                        {
                            source: "Oxford",
                            text: "In or to what place"
                        }
                    ]
                },
                {
                    type: "conjunction",
                    subtype: ["subordinating"],
                    grammar: {
                        usage: ["introducing clauses"],
                        position: ["beginning"]
                    },
                    definitions: [
                        {
                            source: "Cambridge",
                            text: "In the place that"
                        }
                    ]
                },
                {
                    type: "pronoun",
                    subtype: ["relative"],
                    grammar: {
                        usage: ["referring to place"],
                        position: ["after noun"]
                    },
                    definitions: [
                        {
                            source: "Longman",
                            text: "The place in which"
                        }
                    ]
                }
            ]
        },
        {
            word: "whenever",
            entries: [
                {
                    type: "conjunction",
                    subtype: ["subordinating", "time"],
                    grammar: {
                        function: "indefinite time",
                        position: ["beginning or middle of sentence"]
                    },
                    definitions: [
                        {
                            source: "Oxford English Dictionary",
                            text: "Indicates any or every time that"
                        }
                    ]
                }
            ]
        },
        {
            word: "while",
            entries: [
                {
                    type: "conjunction",
                    subtype: ["subordinating", "time", "contrast"],
                    grammar: {
                        function: "time/contrast",
                        position: ["beginning or middle of sentence"]
                    },
                    definitions: [
                        {
                            source: "Longman Grammar of Spoken and Written English",
                            text: "Indicates simultaneous time or contrast"
                        }
                    ]
                }
            ]
        },
    
        // b) Cause & Reason
        {
            word: "because",
            entries: [
                {
                    type: "conjunction",
                    subtype: ["subordinating", "cause"],
                    grammar: {
                        function: "reason",
                        position: ["beginning or middle of sentence"]
                    },
                    definitions: [
                        {
                            source: "Oxford English Dictionary",
                            text: "Indicates the reason for something"
                        }
                    ]
                }
            ]
        },
        {
            word: "inasmuch as",
            entries: [
                {
                    type: "conjunction",
                    subtype: ["subordinating", "cause"],
                    grammar: {
                        function: "reason",
                        position: ["beginning or middle of sentence"]
                    },
                    definitions: [
                        {
                            source: "Cambridge Grammar of English",
                            text: "Indicates to the extent that or since"
                        }
                    ]
                }
            ]
        },
        {
            word: "now that",
            entries: [
                {
                    type: "conjunction",
                    subtype: ["subordinating", "cause"],
                    grammar: {
                        function: "reason",
                        position: ["beginning or middle of sentence"]
                    },
                    definitions: [
                        {
                            source: "Longman Grammar of Spoken and Written English",
                            text: "Indicates a present reason based on changed circumstances"
                        }
                    ]
                }
            ]
        },
        {
            word: "so that",
            entries: [
                {
                    type: "conjunction",
                    subtype: ["subordinating", "purpose", "result"],
                    grammar: {
                        function: "purpose/result",
                        position: ["beginning or middle of sentence"]
                    },
                    definitions: [
                        {
                            source: "Oxford English Dictionary",
                            text: "Indicates purpose or result"
                        }
                    ]
                }
            ]
        },
    
        // c) Condition
        {
            word: "as long as",
            entries: [
                {
                    type: "conjunction",
                    subtype: ["subordinating", "condition"],
                    grammar: {
                        function: "conditional",
                        position: ["beginning or middle of sentence"]
                    },
                    definitions: [
                        {
                            source: "Cambridge Grammar of English",
                            text: "Indicates a necessary condition"
                        }
                    ]
                }
            ]
        },
        {
            word: "even if",
            entries: [
                {
                    type: "conjunction",
                    subtype: ["subordinating", "condition"],
                    grammar: {
                        function: "conditional",
                        position: ["beginning or middle of sentence"]
                    },
                    definitions: [
                        {
                            source: "Oxford English Dictionary",
                            text: "Indicates a hypothetical condition"
                        }
                    ]
                }
            ]
        },
        {
            word: "if",
            entries: [
                {
                    type: "conjunction",
                    subtype: ["subordinating", "condition"],
                    grammar: {
                        function: "conditional",
                        position: ["beginning or middle of sentence"]
                    },
                    definitions: [
                        {
                            source: "Longman Grammar of Spoken and Written English",
                            text: "Introduces a conditional clause"
                        }
                    ]
                }
            ]
        },
        {
            word: "in case",
            entries: [
                {
                    type: "conjunction",
                    subtype: ["subordinating", "condition"],
                    grammar: {
                        function: "precautionary condition",
                        position: ["beginning or middle of sentence"]
                    },
                    definitions: [
                        {
                            source: "Cambridge Grammar of English",
                            text: "Indicates a precautionary condition"
                        }
                    ]
                }
            ]
        },
        {
            word: "provided that",
            entries: [
                {
                    type: "conjunction",
                    subtype: ["subordinating", "condition"],
                    grammar: {
                        function: "conditional",
                        position: ["beginning or middle of sentence"]
                    },
                    definitions: [
                        {
                            source: "Oxford English Dictionary",
                            text: "Indicates a stipulating condition"
                        }
                    ]
                }
            ]
        },
        {
            word: "unless",
            entries: [
                {
                    type: "conjunction",
                    subtype: ["subordinating", "condition"],
                    grammar: {
                        function: "negative condition",
                        position: ["beginning or middle of sentence"]
                    },
                    definitions: [
                        {
                            source: "Longman Grammar of Spoken and Written English",
                            text: "Indicates an exception to a possible situation"
                        }
                    ]
                }
            ]
        },
        {
            word: "whether or not",
            entries: [
                {
                    type: "conjunction",
                    subtype: ["subordinating", "condition"],
                    grammar: {
                        function: "alternative conditions",
                        position: ["beginning or middle of sentence"]
                    },
                    definitions: [
                        {
                            source: "Cambridge Grammar of English",
                            text: "Indicates alternative possibilities"
                        }
                    ]
                }
            ]
        },
    
        // d) Contrast & Concession
        {
            word: "although",
            entries: [
                {
                    type: "conjunction",
                    subtype: ["subordinating", "contrast"],
                    grammar: {
                        function: "concession",
                        position: ["beginning or middle of sentence"]
                    },
                    definitions: [
                        {
                            source: "Oxford English Dictionary",
                            text: "Introduces a contrasting idea"
                        }
                    ]
                }
            ]
        },
        {
            word: "as much as",
            entries: [
                {
                    type: "conjunction",
                    subtype: ["subordinating", "contrast"],
                    grammar: {
                        function: "concession",
                        position: ["beginning or middle of sentence"]
                    },
                    definitions: [
                        {
                            source: "Longman Grammar of Spoken and Written English",
                            text: "Indicates concession or contrast"
                        }
                    ]
                }
            ]
        },
        {
            word: "even though",
            entries: [
                {
                    type: "conjunction",
                    subtype: ["subordinating", "contrast"],
                    grammar: {
                        function: "strong concession",
                        position: ["beginning or middle of sentence"]
                    },
                    definitions: [
                        {
                            source: "Cambridge Grammar of English",
                            text: "Introduces a strong contrasting idea"
                        }
                    ]
                }
            ]
        },
        {
            word: "though",
            entries: [
                {
                    type: "conjunction",
                    subtype: ["subordinating", "contrast"],
                    grammar: {
                        function: "concession",
                        position: ["beginning or middle of sentence"]
                    },
                    definitions: [
                        {
                            source: "Oxford English Dictionary",
                            text: "Introduces a contrasting idea (less formal than although)"
                        }
                    ]
                }
            ]
        },
        {
            word: "whereas",
            entries: [
                {
                    type: "conjunction",
                    subtype: ["subordinating", "contrast"],
                    grammar: {
                        function: "contrast",
                        position: ["beginning or middle of sentence"]
                    },
                    definitions: [
                        {
                            source: "Longman Grammar of Spoken and Written English",
                            text: "Indicates a contrast between two facts"
                        }
                    ]
                }
            ]
        },
    
        // e) Purpose
        {
            word: "in order that",
            entries: [
                {
                    type: "conjunction",
                    subtype: ["subordinating", "purpose"],
                    grammar: {
                        function: "purpose",
                        position: ["beginning or middle of sentence"]
                    },
                    definitions: [
                        {
                            source: "Cambridge Grammar of English",
                            text: "Indicates the purpose of an action"
                        }
                    ]
                }
            ]
        },
        {
            word: "for the purpose of",
            entries: [
                {
                    type: "conjunction",
                    subtype: ["subordinating", "purpose"],
                    grammar: {
                        function: "purpose",
                        position: ["beginning or middle of sentence"]
                    },
                    definitions: [
                        {
                            source: "Oxford English Dictionary",
                            text: "Indicates the specific purpose of something"
                        }
                    ]
                }
            ]
        },
    
        // f) Comparison
        {
            word: "just as",
            entries: [
                {
                    type: "conjunction",
                    subtype: ["subordinating", "comparison"],
                    grammar: {
                        function: "comparison",
                        position: ["beginning or middle of sentence"]
                    },
                    definitions: [
                        {
                            source: "Longman Grammar of Spoken and Written English",
                            text: "Indicates similarity between situations"
                        }
                    ]
                }
            ]
        },
        {
            word: "than",
            entries: [
                {
                    type: "conjunction",
                    subtype: ["subordinating", "comparison"],
                    grammar: {
                        function: "comparison",
                        position: ["after comparative adjective/adverb"]
                    },
                    definitions: [
                        {
                            source: "Oxford English Dictionary",
                            text: "Used to introduce the second element in a comparison"
                        }
                    ]
                }
            ]
        },
        {
            word: "rather than",
            entries: [
                {
                    type: "conjunction",
                    subtype: ["subordinating", "comparison"],
                    grammar: {
                        function: "preference",
                        position: ["beginning or middle of sentence"]
                    },
                    definitions: [
                        {
                            source: "Cambridge Grammar of English",
                            text: "Indicates preference for one thing over another"
                        }
                    ]
                }
            ]
        },
    
        // 3. Correlative Conjunctions
        {
            word: "both...and",
            entries: [
                {
                    type: "conjunction",
                    subtype: ["correlative"],
                    grammar: {
                        function: "addition",
                        position: ["before parallel elements"],
                        note: "Connects two grammatically equal elements"
                    },
                    definitions: [
                        {
                            source: "Oxford English Dictionary",
                            text: "Used to emphasize that two things are true"
                        }
                    ]
                }
            ]
        },
        {
            word: "either...or",
            entries: [
                {
                    type: "conjunction",
                    subtype: ["correlative"],
                    grammar: {
                        function: "alternative",
                        position: ["before parallel elements"],
                        note: "Presents two alternatives"
                    },
                    definitions: [
                        {
                            source: "Longman Grammar of Spoken and Written English",
                            text: "Indicates a choice between two possibilities"
                        }
                    ]
                }
            ]
        },
        {
            word: "neither...nor",
            entries: [
                {
                    type: "conjunction",
                    subtype: ["correlative"],
                    grammar: {
                        function: "negative alternative",
                        position: ["before parallel elements"],
                        note: "Connects two negative alternatives"
                    },
                    definitions: [
                        {
                            source: "Cambridge Grammar of English",
                            text: "Indicates that neither of two possibilities is true"
                        }
                    ]
                }
            ]
        },
        {
            word: "not only...but also",
            entries: [
                {
                    type: "conjunction",
                    subtype: ["correlative"],
                    grammar: {
                        function: "addition",
                        position: ["before parallel elements"],
                        note: "Emphasizes the addition of something"
                    },
                    definitions: [
                        {
                            source: "Oxford English Dictionary",
                            text: "Used to emphasize that something else is also true"
                        }
                    ]
                }
            ]
        },
        {
            word: "whether...or",
            entries: [
                {
                    type: "conjunction",
                    subtype: ["correlative"],
                    grammar: {
                        function: "alternative conditions",
                        position: ["before parallel elements"],
                        note: "Presents two alternative possibilities"
                    },
                    definitions: [
                        {
                            source: "Longman Grammar of Spoken and Written English",
                            text: "Indicates two possibilities or alternatives"
                        }
                    ]
                }
            ]
        },
        {
            word: "just as...so",
            entries: [
                {
                    type: "conjunction",
                    subtype: ["correlative"],
                    grammar: {
                        function: "comparison",
                        position: ["before parallel elements"],
                        note: "Indicates a parallel or proportional relationship"
                    },
                    definitions: [
                        {
                            source: "Cambridge Grammar of English",
                            text: "Indicates that two situations are similar"
                        }
                    ]
                }
            ]
        },
    
        // 4. Conjunctive Adverbs
        // a) Addition
        {
            word: "additionally",
            entries: [
                {
                    type: "conjunctive adverb",
                    subtype: ["addition"],
                    grammar: {
                        function: "add information",
                        position: ["beginning/middle/end of sentence"],
                        punctuation: "semicolon before, comma after when beginning"
                    },
                    definitions: [
                        {
                            source: "Oxford English Dictionary",
                            text: "Used to add more information"
                        }
                    ]
                }
            ]
        },
        {
            word: "besides",
            entries: [
                {
                    type: "conjunctive adverb",
                    subtype: ["addition"],
                    grammar: {
                        function: "add information",
                        position: ["beginning/middle/end of sentence"],
                        punctuation: "semicolon before, comma after when beginning"
                    },
                    definitions: [
                        {
                            source: "Longman Grammar of Spoken and Written English",
                            text: "Adds another point or reason"
                        }
                    ]
                }
            ]
        },
        {
            word: "furthermore",
            entries: [
                {
                    type: "conjunctive adverb",
                    subtype: ["addition"],
                    grammar: {
                        function: "add information",
                        position: ["beginning/middle/end of sentence"],
                        punctuation: "semicolon before, comma after when beginning"
                    },
                    definitions: [
                        {
                            source: "Cambridge Grammar of English",
                            text: "Adds information that strengthens the point"
                        }
                    ]
                }
            ]
        },
        {
            word: "moreover",
            entries: [
                {
                    type: "conjunctive adverb",
                    subtype: ["addition"],
                    grammar: {
                        function: "add information",
                        position: ["beginning/middle/end of sentence"],
                        punctuation: "semicolon before, comma after when beginning"
                    },
                    definitions: [
                        {
                            source: "Oxford English Dictionary",
                            text: "Adds information that is even more important"
                        }
                    ]
                }
            ]
        },
        {
            word: "also",
            entries: [
                {
                    type: "conjunctive adverb",
                    subtype: ["addition"],
                    grammar: {
                        function: "add information",
                        position: ["middle/end of sentence"],
                        punctuation: "comma optional"
                    },
                    definitions: [
                        {
                            source: "Longman Grammar of Spoken and Written English",
                            text: "Adds another point or item"
                        }
                    ]
                }
            ]
        },
    
        // b) Contrast
        {
            word: "however",
            entries: [
                {
                    type: "conjunctive adverb",
                    subtype: ["contrast"],
                    grammar: {
                        function: "contrast",
                        position: ["beginning/middle/end of sentence"],
                        punctuation: "semicolon before, comma after when beginning"
                    },
                    definitions: [
                        {
                            source: "Cambridge Grammar of English",
                            text: "Introduces a contrasting idea"
                        }
                    ]
                }
            ]
        },
        {
            word: "nevertheless",
            entries: [
                {
                    type: "conjunctive adverb",
                    subtype: ["contrast"],
                    grammar: {
                        function: "concession",
                        position: ["beginning/middle/end of sentence"],
                        punctuation: "semicolon before, comma after when beginning"
                    },
                    definitions: [
                        {
                            source: "Oxford English Dictionary",
                            text: "Indicates contrast despite what was just said"
                        }
                    ]
                }
            ]
        },
        {
            word: "nonetheless",
            entries: [
                {
                    type: "conjunctive adverb",
                    subtype: ["contrast"],
                    grammar: {
                        function: "concession",
                        position: ["beginning/middle/end of sentence"],
                        punctuation: "semicolon before, comma after when beginning"
                    },
                    definitions: [
                        {
                            source: "Longman Grammar of Spoken and Written English",
                            text: "Indicates contrast despite preceding statement"
                        }
                    ]
                }
            ]
        },
        {
            word: "on the contrary",
            entries: [
                {
                    type: "conjunctive adverb",
                    subtype: ["contrast"],
                    grammar: {
                        function: "strong contrast",
                        position: ["beginning/middle of sentence"],
                        punctuation: "semicolon before, comma after"
                    },
                    definitions: [
                        {
                            source: "Cambridge Grammar of English",
                            text: "Introduces a statement that contradicts the previous one"
                        }
                    ]
                }
            ]
        },
        {
            word: "on the other hand",
            entries: [
                {
                    type: "conjunctive adverb",
                    subtype: ["contrast"],
                    grammar: {
                        function: "alternative view",
                        position: ["beginning/middle of sentence"],
                        punctuation: "semicolon before, comma after"
                    },
                    definitions: [
                        {
                            source: "Oxford English Dictionary",
                            text: "Introduces an alternative or opposing idea"
                        }
                    ]
                }
            ]
        },
        {
            word: "conversely",
            entries: [
                {
                    type: "conjunctive adverb",
                    subtype: ["contrast"],
                    grammar: {
                        function: "opposite view",
                        position: ["beginning/middle of sentence"],
                        punctuation: "semicolon before, comma after"
                    },
                    definitions: [
                        {
                            source: "Longman Grammar of Spoken and Written English",
                            text: "Indicates an opposite or reversed relationship"
                        }
                    ]
                }
            ]
        },
    
        // c) Cause & Effect
        {
            word: "accordingly",
            entries: [
                {
                    type: "conjunctive adverb",
                    subtype: ["cause-effect"],
                    grammar: {
                        function: "result",
                        position: ["beginning/middle/end of sentence"],
                        punctuation: "semicolon before, comma after when beginning"
                    },
                    definitions: [
                        {
                            source: "Cambridge Grammar of English",
                            text: "Indicates a logical consequence"
                        }
                    ]
                }
            ]
        },
        {
            word: "as a result",
            entries: [
                {
                    type: "conjunctive adverb",
                    subtype: ["cause-effect"],
                    grammar: {
                        function: "result",
                        position: ["beginning/middle of sentence"],
                        punctuation: "semicolon before, comma after"
                    },
                    definitions: [
                        {
                            source: "Oxford English Dictionary",
                            text: "Indicates the consequence of something"
                        }
                    ]
                }
            ]
        },
        {
            word: "consequently",
            entries: [
                {
                    type: "conjunctive adverb",
                    subtype: ["cause-effect"],
                    grammar: {
                        function: "result",
                        position: ["beginning/middle/end of sentence"],
                        punctuation: "semicolon before, comma after when beginning"
                    },
                    definitions: [
                        {
                            source: "Longman Grammar of Spoken and Written English",
                            text: "Indicates a logical conclusion or result"
                        }
                    ]
                }
            ]
        },
        {
            word: "hence",
            entries: [
                {
                    type: "conjunctive adverb",
                    subtype: ["cause-effect"],
                    grammar: {
                        function: "result",
                        position: ["beginning/middle of sentence"],
                        punctuation: "semicolon before, comma after when beginning"
                    },
                    definitions: [
                        {
                            source: "Cambridge Grammar of English",
                            text: "Indicates a consequence or inference"
                        }
                    ]
                }
            ]
        },
        {
            word: "therefore",
            entries: [
                {
                    type: "conjunctive adverb",
                    subtype: ["cause-effect"],
                    grammar: {
                        function: "conclusion",
                        position: ["beginning/middle/end of sentence"],
                        punctuation: "semicolon before, comma after when beginning"
                    },
                    definitions: [
                        {
                            source: "Oxford English Dictionary",
                            text: "Indicates a logical conclusion"
                        }
                    ]
                }
            ]
        },
        {
            word: "thus",
            entries: [
                {
                    type: "conjunctive adverb",
                    subtype: ["cause-effect"],
                    grammar: {
                        function: "result",
                        position: ["beginning/middle/end of sentence"],
                        punctuation: "semicolon before, comma after when beginning"
                    },
                    definitions: [
                        {
                            source: "Longman Grammar of Spoken and Written English",
                            text: "Indicates a consequence or manner"
                        }
                    ]
                }
            ]
        },
    
        // d) Clarification & Emphasis
        {
            word: "indeed",
            entries: [
                {
                    type: "conjunctive adverb",
                    subtype: ["clarification"],
                    grammar: {
                        function: "emphasis",
                        position: ["middle/end of sentence"],
                        punctuation: "commas optional"
                    },
                    definitions: [
                        {
                            source: "Cambridge Grammar of English",
                            text: "Adds emphasis or confirms a statement"
                        }
                    ]
                }
            ]
        },
        {
            word: "in fact",
            entries: [
                {
                    type: "conjunctive adverb",
                    subtype: ["clarification"],
                    grammar: {
                        function: "emphasis",
                        position: ["beginning/middle of sentence"],
                        punctuation: "comma after when beginning"
                    },
                    definitions: [
                        {
                            source: "Oxford English Dictionary",
                            text: "Introduces a statement that emphasizes or contradicts"
                        }
                    ]
                }
            ]
        },
        {
            word: "namely",
            entries: [
                {
                    type: "conjunctive adverb",
                    subtype: ["clarification"],
                    grammar: {
                        function: "specification",
                        position: ["middle of sentence"],
                        punctuation: "comma before"
                    },
                    definitions: [
                        {
                            source: "Longman Grammar of Spoken and Written English",
                            text: "Introduces specific information"
                        }
                    ]
                }
            ]
        },
        {
            word: "that is",
            entries: [
                {
                    type: "conjunctive adverb",
                    subtype: ["clarification"],
                    grammar: {
                        function: "explanation",
                        position: ["middle of sentence"],
                        punctuation: "comma before and after"
                    },
                    definitions: [
                        {
                            source: "Cambridge Grammar of English",
                            text: "Introduces an explanation or clarification"
                        }
                    ]
                }
            ]
        },
        {
            word: "specifically",
            entries: [
                {
                    type: "conjunctive adverb",
                    subtype: ["clarification"],
                    grammar: {
                        function: "precision",
                        position: ["beginning/middle of sentence"],
                        punctuation: "comma after when beginning"
                    },
                    definitions: [
                        {
                            source: "Oxford English Dictionary",
                            text: "Indicates exactness or particularization"
                        }
                    ]
                }
            ]
        },
    
        // e) Sequence & Time
        {
            word: "afterward",
            entries: [
                {
                    type: "conjunctive adverb",
                    subtype: ["sequence"],
                    grammar: {
                        function: "time sequence",
                        position: ["beginning/middle/end of sentence"],
                        punctuation: "comma after when beginning"
                    },
                    definitions: [
                        {
                            source: "Longman Grammar of Spoken and Written English",
                            text: "Indicates subsequent time"
                        }
                    ]
                }
            ]
        },
        {
            word: "meanwhile",
            entries: [
                {
                    type: "conjunctive adverb",
                    subtype: ["sequence"],
                    grammar: {
                        function: "simultaneous time",
                        position: ["beginning/middle of sentence"],
                        punctuation: "comma after when beginning"
                    },
                    definitions: [
                        {
                            source: "Cambridge Grammar of English",
                            text: "Indicates events happening at the same time"
                        }
                    ]
                }
            ]
        },
        {
            word: "subsequently",
            entries: [
                {
                    type: "conjunctive adverb",
                    subtype: ["sequence"],
                    grammar: {
                        function: "later time",
                        position: ["beginning/middle/end of sentence"],
                        punctuation: "comma after when beginning"
                    },
                    definitions: [
                        {
                            source: "Oxford English Dictionary",
                            text: "Indicates something happening afterward"
                        }
                    ]
                }
            ]
        },
        {
            word: "thereafter",
            entries: [
                {
                    type: "conjunctive adverb",
                    subtype: ["sequence"],
                    grammar: {
                        function: "subsequent time",
                        position: ["beginning/middle/end of sentence"],
                        punctuation: "comma after when beginning"
                    },
                    definitions: [
                        {
                            source: "Longman Grammar of Spoken and Written English",
                            text: "Indicates time following a particular event"
                        }
                    ]
                }
            ]
        },
    
        // f) Comparison
        {
            word: "likewise",
            entries: [
                {
                    type: "conjunctive adverb",
                    subtype: ["comparison"],
                    grammar: {
                        function: "similarity",
                        position: ["beginning/middle/end of sentence"],
                        punctuation: "comma after when beginning"
                    },
                    definitions: [
                        {
                            source: "Cambridge Grammar of English",
                            text: "Indicates similarity or agreement"
                        }
                    ]
                }
            ]
        },
        {
            word: "similarly",
            entries: [
                {
                    type: "conjunctive adverb",
                    subtype: ["comparison"],
                    grammar: {
                        function: "comparison",
                        position: ["beginning/middle of sentence"],
                        punctuation: "comma after when beginning"
                    },
                    definitions: [
                        {
                            source: "Oxford English Dictionary",
                            text: "Indicates a comparable situation"
                        }
                    ]
                }
            ]
        },
    
];

// خريطة أشكال الكلمات
const wordFormsMap = {};

// تعبئة خريطة أشكال الكلمات
wordDatabase.forEach(item => {
    const wordLower = item.word.toLowerCase();
    
    // إضافة الكلمة الأساسية
    if (!wordFormsMap[wordLower]) {
        wordFormsMap[wordLower] = [];
    }
    
    // إضافة أشكال الكلمات
    item.entries.forEach(entry => {
        if (entry.forms) {
            Object.values(entry.forms).forEach(form => {
                const formLower = form.toLowerCase();
                if (form && formLower !== wordLower && !wordFormsMap[formLower]) {
                    wordFormsMap[formLower] = [wordLower];
                }
            });
        }
    });
});

// عناصر DOM
const searchInput = document.getElementById('searchInput');
const searchButton = document.getElementById('searchButton');
const resultsDiv = document.getElementById('results');

// دالة البحث الرئيسية
function searchWord() {
    const searchTerm = searchInput.value.trim().toLowerCase();
    
    if (!searchTerm) {
        showError("Please enter a word to search");
        return;
    }

    // البحث عن الكلمة الأساسية
    const wordEntries = wordDatabase.filter(item => 
        item.word.toLowerCase() === searchTerm
    );

    // البحث عن أشكال الكلمات
    const formMatches = wordFormsMap[searchTerm] || [];

    if (wordEntries.length > 0) {
        displayResults(wordEntries);
    } else if (formMatches.length > 0) {
        const baseWordEntries = wordDatabase.filter(item => 
            formMatches.includes(item.word.toLowerCase())
        );
        displayFormRedirect(searchTerm, baseWordEntries);
    } else {
        showError(`No results found for "${searchTerm}"`);
    }
}

// عرض النتائج
function displayResults(wordEntries) {
    let html = '';
    
    wordEntries.forEach(wordEntry => {
        wordEntry.entries.forEach(entry => {
            html += `
                <div class="word-entry">
                    <div class="word-header">
                        <h2 class="word-title">${wordEntry.word}</h2>
                        <div class="word-types">
                            <span class="word-type">${entry.type}</span>
                            ${entry.subtype ? displaySubtypes(entry.subtype) : ''}
                        </div>
                    </div>
                    
                    ${entry.forms ? displayForms(entry.forms) : ''}
                    
                    ${entry.grammar ? displayGrammar(entry.grammar) : ''}
                    
                    <div class="definitions">
                        ${displayDefinitions(entry.definitions)}
                    </div>
                </div>
            `;
        });
    });
    
    resultsDiv.innerHTML = html || '<div class="error">No entries found</div>';
}

// عرض التصنيفات الفرعية
function displaySubtypes(subtype) {
    if (Array.isArray(subtype)) {
        return subtype.map(st => `<span class="word-type">${formatText(st)}</span>`).join('');
    }
    return `<span class="word-type">${formatText(subtype)}</span>`;
}

// عرض أشكال الكلمات
function displayForms(forms) {
    let html = '<div class="word-forms"><h3>Word Forms</h3><ul>';
    
    for (const [formName, formValue] of Object.entries(forms)) {
        if (formValue) {
            html += `<li><strong>${formatText(formName)}:</strong> ${formValue}</li>`;
        }
    }
    
    html += '</ul></div>';
    return html;
}

// عرض القواعد النحوية
function displayGrammar(grammar) {
    let html = '<div class="grammar-section"><h3>Grammar</h3><ul>';
    
    for (const [key, value] of Object.entries(grammar)) {
        if (value) {
            const displayValue = Array.isArray(value) ? value.join(', ') : value;
            html += `<li><strong>${formatText(key)}:</strong> ${displayValue}</li>`;
        }
    }
    
    html += '</ul></div>';
    return html;
}

// تنسيق النص (تحويل camelCase إلى نص عادي)
function formatText(text) {
    return text
        .replace(/([A-Z])/g, ' $1')
        .replace(/_/g, ' ')
        .replace(/^./, firstChar => firstChar.toUpperCase())
        .trim();
}

// عرض التعريفات
function displayDefinitions(definitions) {
    return definitions.map(def => `
        <div class="definition">
            <div class="definition-title">${def.source}</div>
            <p>${def.text}</p>
        </div>
    `).join('');
}

// عرض إعادة التوجيه لأشكال الكلمات
function displayFormRedirect(form, baseWordEntries) {
    let html = `
        <div class="word-entry">
            <p>The word "<strong>${form}</strong>" is a form of: ${baseWordEntries.map(entry => 
                `<a href="javascript:void(0)" onclick="searchForWord('${entry.word}')">${entry.word}</a>`
            ).join(', ')}</p>
            <p>Showing results for base forms:</p>
        </div>
    `;
    
    baseWordEntries.forEach(wordEntry => {
        wordEntry.entries.forEach(entry => {
            html += `
                <div class="word-entry">
                    <div class="word-header">
                        <h2 class="word-title">${wordEntry.word}</h2>
                        <div class="word-types">
                            <span class="word-type">${entry.type}</span>
                            ${entry.subtype ? displaySubtypes(entry.subtype) : ''}
                        </div>
                    </div>
                    
                    ${entry.forms ? displayForms(entry.forms) : ''}
                    
                    ${entry.grammar ? displayGrammar(entry.grammar) : ''}
                    
                    <div class="definitions">
                        ${displayDefinitions(entry.definitions)}
                    </div>
                </div>
            `;
        });
    });
    
    resultsDiv.innerHTML = html;
}

// البحث بكلمة محددة
function searchForWord(word) {
    searchInput.value = word;
    searchWord();
}

// عرض رسالة الخطأ
function showError(message) {
    resultsDiv.innerHTML = `<div class="error">${message}</div>`;
}

// مستمعو الأحداث
searchButton.addEventListener('click', searchWord);
searchInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') searchWord();
});

// التهيئة الأولية
resultsDiv.innerHTML = `
    <div class="placeholder">
        <p>Search for any English word</p>
        <p>Examples: close, book, beautiful, in, the, quickly, they, some</p>
    </div>
`;