(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('assert'), require('worker_threads')) :
    typeof define === 'function' && define.amd ? define(['assert', 'worker_threads'], factory) :
    (global = global || self, global.dashboard = factory(global.assert, global.worker_threads));
}(this, function (assert, worker_threads) { 'use strict';

    var Data = {
        DATA : [
            {
                title: "News",
                category: "news",
                total: "45",
                newscategories: [
                    {
                        label: "Press releases",
                        total: 125
                    },
                    {
                        label: "Regional news",
                        total: 78
                    },
                    {
                        label: "Success stories",
                        total: 12
                    }
                ]
            },
            {
                title: "Events",
                category: "events",
                total: "45",
                newscategories: [
                    {
                        label: "Press releases",
                        total: 125
                    },
                    {
                        label: "Regional news",
                        total: 78
                    },
                    {
                        label: "Success stories",
                        total: 12
                    },
                    {
                        label: "Success stories",
                        total: 12
                    },
                    {
                        label: "Success stories",
                        total: 12
                    },
                    {
                        label: "Success stories",
                        total: 12
                    },
                    {
                        label: "Success stories",
                        total: 12
                    },
                    {
                        label: "Success stories",
                        total: 12
                    },
                    {
                        label: "Success stories",
                        total: 12
                    },
                    {
                        label: "Success stories",
                        total: 12
                    },
                    {
                        label: "Success stories",
                        total: 12
                    },
                    {
                        label: "Success stories",
                        total: 12
                    },
                    {
                        label: "Success stories",
                        total: 12
                    },
                    {
                        label: "Success stories",
                        total: 12
                    },
                    {
                        label: "Success stories",
                        total: 12
                    },
                    {
                        label: "Success stories",
                        total: 12
                    },
                    {
                        label: "Success stories",
                        total: 12
                    }
                ]
            },
            {
                title: "Lang usage",
                category: "lang-usage",
                total: "",
                charttype: "barChart2",
                body: "Card Body",
                itemdata: [
                    {
                        label: "FR",
                        total: 14
                    },
                    {
                        label: "EN",
                        total: 154
                    },
                    {
                        label: "ES",
                        total: 104
                    },
                    {
                        label: "DU",
                        total: 54
                    },
                    {
                        label: "BU",
                        total: 15
                    }
                ]
            },
            {
                title: "Content types",
                category: "lang-usage",
                size: "full",
                total: "",
                charttype: "donutChart",
                body: "Card Body",
                itemdata: [
                    {
                        label: "News",
                        total: 14
                    },
                    {
                        label: "Events",
                        total: 154
                    },
                    {
                        label: "Opinions",
                        total: 104
                    },
                    {
                        label: "Studies",
                        total: 54
                    },
                    {
                        label: "Brochures",
                        total: 15
                    }
                ]
            },
            {
                title: "Events",
                size: "full",
                category: "events",
                cardtype: "languageOverview",
                chart: "bar-chart",
                total: "45",
                body: "Card Body",
                languages: [
                    {
                        label:"BG",
                        total: 50
                    },
                    {
                        label:"CS",
                        total: 2
                    },
                    {
                        label:"DA",
                        total: 7
                    },
                    {
                        label:"DE",
                        total: 87
                    },
                    {
                        label:"EL",
                        total: 24
                    },
                    {
                        label:"EN",
                        total: 6
                    },
                    {
                        label:"ES",
                        total: 78
                    },
                    {
                        label:"ET",
                        total: 0
                    },
                    {
                        label:"FI",
                        total: 5
                    },
                    {
                        label:"FR",
                        total: 3
                    },
                    {
                        label:"GA",
                        total: 0
                    },
                    {
                        label:"HR",
                        total: 14
                    },
                    {
                        label:"HU",
                        total: 3
                    },
                    {
                        label:"IT",
                        total: 47
                    },
                    {
                        label:"LT",
                        total: 75
                    },
                    {
                        label:"LV",
                        total: 26
                    },
                    {
                        label:"MT",
                        total: 65
                    },
                    {
                        label:"NL",
                        total: 37
                    },
                    {
                        label:"PL",
                        total: 0
                    },
                    {
                        label:"PT",
                        total: 21
                    },
                    {
                        label:"RO",
                        total: 48
                    },
                    {
                        label:"SK",
                        total: 23
                    },
                    {
                        label:"SL",
                        total: 16
                    },
                    {
                        label:"SV",
                        total: 9
                    }
                ]
            },
            {
                title: "Multilinguism",
                size: "full",
                cardtype: "multilinguismOverview",
                multilingualContent: [
                    {
                        contenttype: "News",
                        translations: [
                            {
                                label:"BG",
                                total: 5
                            },
                            {
                                label:"CS",
                                total: 2
                            },
                            {
                                label:"DA",
                                total: 7
                            },
                            {
                                label:"DE",
                                total: 87
                            },
                            {
                                label:"EL",
                                total: 24
                            },
                            {
                                label:"EN",
                                total: 78
                            },
                            {
                                label:"ES",
                                total: 78
                            },
                            {
                                label:"ET",
                                total: 0
                            },
                            {
                                label:"FI",
                                total: 5
                            },
                            {
                                label:"FR",
                                total: 3
                            },
                            {
                                label:"GA",
                                total: 0
                            },
                            {
                                label:"HR",
                                total: 14
                            },
                            {
                                label:"HU",
                                total: 3
                            },
                            {
                                label:"IT",
                                total: 47
                            },
                            {
                                label:"LT",
                                total: 75
                            },
                            {
                                label:"LV",
                                total: 26
                            },
                            {
                                label:"MT",
                                total: 65
                            },
                            {
                                label:"NL",
                                total: 37
                            },
                            {
                                label:"PL",
                                total: 0
                            },
                            {
                                label:"PT",
                                total: 21
                            },
                            {
                                label:"RO",
                                total: 48
                            },
                            {
                                label:"SK",
                                total: 23
                            },
                            {
                                label:"SL",
                                total: 16
                            },
                            {
                                label:"SV",
                                total: 9
                            }
                        ]
                    },
                    {
                        contenttype: "Events",
                        translations: [
                            {
                                label:"BG",
                                total: 50
                            },
                            {
                                label:"CS",
                                total: 2
                            },
                            {
                                label:"DA",
                                total: 7
                            },
                            {
                                label:"DE",
                                total: 87
                            },
                            {
                                label:"EL",
                                total: 24
                            },
                            {
                                label:"EN",
                                total: 6
                            },
                            {
                                label:"ES",
                                total: 78
                            },
                            {
                                label:"ET",
                                total: 0
                            },
                            {
                                label:"FI",
                                total: 5
                            },
                            {
                                label:"FR",
                                total: 3
                            },
                            {
                                label:"GA",
                                total: 0
                            },
                            {
                                label:"HR",
                                total: 14
                            },
                            {
                                label:"HU",
                                total: 3
                            },
                            {
                                label:"IT",
                                total: 47
                            },
                            {
                                label:"LT",
                                total: 75
                            },
                            {
                                label:"LV",
                                total: 26
                            },
                            {
                                label:"MT",
                                total: 65
                            },
                            {
                                label:"NL",
                                total: 37
                            },
                            {
                                label:"PL",
                                total: 0
                            },
                            {
                                label:"PT",
                                total: 21
                            },
                            {
                                label:"RO",
                                total: 48
                            },
                            {
                                label:"SK",
                                total: 23
                            },
                            {
                                label:"SL",
                                total: 16
                            },
                            {
                                label:"SV",
                                total: 9
                            }
                        ]
                    },
                    {
                        contenttype: "Opinions",
                        translations: [
                            {
                                label:"BG",
                                total: 50
                            },
                            {
                                label:"CS",
                                total: 2
                            },
                            {
                                label:"DA",
                                total: 7
                            },
                            {
                                label:"DE",
                                total: 87
                            },
                            {
                                label:"EL",
                                total: 24
                            },
                            {
                                label:"EN",
                                total: 6
                            },
                            {
                                label:"ES",
                                total: 78
                            },
                            {
                                label:"ET",
                                total: 0
                            },
                            {
                                label:"FI",
                                total: 5
                            },
                            {
                                label:"FR",
                                total: 3
                            },
                            {
                                label:"GA",
                                total: 0
                            },
                            {
                                label:"HR",
                                total: 14
                            },
                            {
                                label:"HU",
                                total: 3
                            },
                            {
                                label:"IT",
                                total: 47
                            },
                            {
                                label:"LT",
                                total: 75
                            },
                            {
                                label:"LV",
                                total: 26
                            },
                            {
                                label:"MT",
                                total: 65
                            },
                            {
                                label:"NL",
                                total: 37
                            },
                            {
                                label:"PL",
                                total: 0
                            },
                            {
                                label:"PT",
                                total: 21
                            },
                            {
                                label:"RO",
                                total: 48
                            },
                            {
                                label:"SK",
                                total: 23
                            },
                            {
                                label:"SL",
                                total: 16
                            },
                            {
                                label:"SV",
                                total: 9
                            }
                        ]
                    },
                    {
                        contenttype: "Publications",
                        translations: [
                            {
                                label:"BG",
                                total: 50
                            },
                            {
                                label:"CS",
                                total: 2
                            },
                            {
                                label:"DA",
                                total: 7
                            },
                            {
                                label:"DE",
                                total: 87
                            },
                            {
                                label:"EL",
                                total: 24
                            },
                            {
                                label:"EN",
                                total: 6
                            },
                            {
                                label:"ES",
                                total: 78
                            },
                            {
                                label:"ET",
                                total: 0
                            },
                            {
                                label:"FI",
                                total: 5
                            },
                            {
                                label:"FR",
                                total: 3
                            },
                            {
                                label:"GA",
                                total: 0
                            },
                            {
                                label:"HR",
                                total: 14
                            },
                            {
                                label:"HU",
                                total: 3
                            },
                            {
                                label:"IT",
                                total: 47
                            },
                            {
                                label:"LT",
                                total: 75
                            },
                            {
                                label:"LV",
                                total: 26
                            },
                            {
                                label:"MT",
                                total: 65
                            },
                            {
                                label:"NL",
                                total: 37
                            },
                            {
                                label:"PL",
                                total: 0
                            },
                            {
                                label:"PT",
                                total: 21
                            },
                            {
                                label:"RO",
                                total: 48
                            },
                            {
                                label:"SK",
                                total: 23
                            },
                            {
                                label:"SL",
                                total: 16
                            },
                            {
                                label:"SV",
                                total: 9
                            }
                        ]
                    },
                    {
                        contenttype: "Studies",
                        translations: [
                            {
                                label:"BG",
                                total: 50
                            },
                            {
                                label:"CS",
                                total: 2
                            },
                            {
                                label:"DA",
                                total: 7
                            },
                            {
                                label:"DE",
                                total: 87
                            },
                            {
                                label:"EL",
                                total: 24
                            },
                            {
                                label:"EN",
                                total: 6
                            },
                            {
                                label:"ES",
                                total: 78
                            },
                            {
                                label:"ET",
                                total: 0
                            },
                            {
                                label:"FI",
                                total: 5
                            },
                            {
                                label:"FR",
                                total: 3
                            },
                            {
                                label:"GA",
                                total: 0
                            },
                            {
                                label:"HR",
                                total: 14
                            },
                            {
                                label:"HU",
                                total: 3
                            },
                            {
                                label:"IT",
                                total: 47
                            },
                            {
                                label:"LT",
                                total: 75
                            },
                            {
                                label:"LV",
                                total: 26
                            },
                            {
                                label:"MT",
                                total: 65
                            },
                            {
                                label:"NL",
                                total: 37
                            },
                            {
                                label:"PL",
                                total: 0
                            },
                            {
                                label:"PT",
                                total: 21
                            },
                            {
                                label:"RO",
                                total: 48
                            },
                            {
                                label:"SK",
                                total: 23
                            },
                            {
                                label:"SL",
                                total: 16
                            },
                            {
                                label:"SV",
                                total: 9
                            }
                        ]
                    }
                ]
            }
        
        ],
        ITEMS: [
            {
                contenttype: "News",
                category: "news",
                title: "Commission report refers to REGHUB initiative and indicates stepping up the collaboration with the Committee of the Regions to contribute to Commission’s policy making  ",
                date: "10/12/2018",
                theme: "Subsidiarity and proportionality",
                label: "Press release",
                picture: "http://placeimg.com/640/480/any",
                intro: "In its recent stock taking report about better regulation which was published on April 15th the European Commission took note of the recent actions the European Committee of the Regions has taken to implement the recommendations made by the Task Force on Subsidiarity of last year.",
                languages: [
                    {
                        label:"BG",
                        status: "translated"
                    },
                    {
                        label:"CS",
                        status: "draft"
                    },
                    {
                        label:"DA",
                        status: "draft"
                    },
                    {
                        label:"DE",
                        status: "draft"
                    },
                    {
                        label:"EL",
                        status: "translated"
                    },
                    {
                        label:"EN",
                        status: "translated"
                    },
                    {
                        label:"ES",
                        status: "draft"
                    },
                    {
                        label:"ET",
                        status: "draft"
                    },
                    {
                        label:"FI",
                        status: ""
                    },
                    {
                        label:"FR",
                        status: ""
                    },
                    {
                        label:"GA",
                        status: "draft"
                    },
                    {
                        label:"HR",
                        status: "draft"
                    },
                    {
                        label:"HU",
                        status: "translated"
                    },
                    {
                        label:"IT",
                        status: "draft"
                    },
                    {
                        label:"LT",
                        status: ""
                    },
                    {
                        label:"LV",
                        status: "draft"
                    },
                    {
                        label:"MT",
                        status: "draft"
                    },
                    {
                        label:"NL",
                        status: "draft"
                    },
                    {
                        label:"PL",
                        status: ""
                    },
                    {
                        label:"PT",
                        status: "translated"
                    },
                    {
                        label:"RO",
                        status: "draft"
                    },
                    {
                        label:"SK",
                        status: ""
                    },
                    {
                        label:"SL",
                        status: "draft"
                    },
                    {
                        label:"SV",
                        status: ""
                    }
                ]
            },
            {
                contenttype: "News",
                category: "news",
                title: "Take part in our survey on socio-economic transformation and energy transition in EU regions and cities!  ",
                date: "10/12/2018",
                theme: "Energy efficiency, market and technology; Energy Union and infrastructure",
                label: "",
                picture: "",
                intro: "​In response to the Paris Agreement the EU has committed to reduce annual greenhouse gas emissions by 40% by the year 2030 when compared to 1990 levels and by at least 80% by 2050. Energy transformation is a key element in fighting climate change and requires a fast and broad transition across all sectors to a sustainable, low-emission energy system. ",
                languages: [
                    {
                        label:"BG",
                        status: "translated"
                    },
                    {
                        label:"CS",
                        status: "draft"
                    },
                    {
                        label:"DA",
                        status: "draft"
                    },
                    {
                        label:"DE",
                        status: "draft"
                    },
                    {
                        label:"EL",
                        status: "translated"
                    },
                    {
                        label:"EN",
                        status: "translated"
                    },
                    {
                        label:"ES",
                        status: "draft"
                    },
                    {
                        label:"ET",
                        status: "draft"
                    },
                    {
                        label:"FI",
                        status: ""
                    },
                    {
                        label:"FR",
                        status: ""
                    },
                    {
                        label:"GA",
                        status: "draft"
                    },
                    {
                        label:"HR",
                        status: "draft"
                    },
                    {
                        label:"HU",
                        status: "translated"
                    },
                    {
                        label:"IT",
                        status: "draft"
                    },
                    {
                        label:"LT",
                        status: ""
                    },
                    {
                        label:"LV",
                        status: "draft"
                    },
                    {
                        label:"MT",
                        status: "draft"
                    },
                    {
                        label:"NL",
                        status: "draft"
                    },
                    {
                        label:"PL",
                        status: ""
                    },
                    {
                        label:"PT",
                        status: "translated"
                    },
                    {
                        label:"RO",
                        status: "draft"
                    },
                    {
                        label:"SK",
                        status: ""
                    },
                    {
                        label:"SL",
                        status: "draft"
                    },
                    {
                        label:"SV",
                        status: ""
                    }
                ]
            },{
                contenttype: "News",
                category: "news",
                title: "Countering Disinformation on Local and Regional Level  ",
                date: "10/12/2018",
                theme: "",
                label: "Success story",
                picture: "http://placeimg.com/640/480/any",
                intro: "Disinformation and the ways to counter is a topic of great importance for the EU at all levels – from local to international. Access to accurate information from a variety of points of view is essential for good functioning of democratic political systems.",
                languages: [
                    {
                        label:"BG",
                        status: "translated"
                    },
                    {
                        label:"CS",
                        status: "draft"
                    },
                    {
                        label:"DA",
                        status: "draft"
                    },
                    {
                        label:"DE",
                        status: "draft"
                    },
                    {
                        label:"EL",
                        status: "translated"
                    },
                    {
                        label:"EN",
                        status: "translated"
                    },
                    {
                        label:"ES",
                        status: "draft"
                    },
                    {
                        label:"ET",
                        status: "draft"
                    },
                    {
                        label:"FI",
                        status: ""
                    },
                    {
                        label:"FR",
                        status: ""
                    },
                    {
                        label:"GA",
                        status: "draft"
                    },
                    {
                        label:"HR",
                        status: "draft"
                    },
                    {
                        label:"HU",
                        status: "translated"
                    },
                    {
                        label:"IT",
                        status: "draft"
                    },
                    {
                        label:"LT",
                        status: ""
                    },
                    {
                        label:"LV",
                        status: "draft"
                    },
                    {
                        label:"MT",
                        status: "draft"
                    },
                    {
                        label:"NL",
                        status: "draft"
                    },
                    {
                        label:"PL",
                        status: ""
                    },
                    {
                        label:"PT",
                        status: "translated"
                    },
                    {
                        label:"RO",
                        status: "draft"
                    },
                    {
                        label:"SK",
                        status: ""
                    },
                    {
                        label:"SL",
                        status: "draft"
                    },
                    {
                        label:"SV",
                        status: ""
                    }
                ]
            },
            {
                contenttype: "Events",
                category: "events",
                title: "The European Committee of the Regions welcomes the vote by the European Parliament's Agriculture Committee in favour of new agricultural market surveillance and regulation tools  ",
                date: "10/12/2018",
                theme: "Agriculture; Rural development",
                label: "Regional news",
                picture: "http://placeimg.com/640/480/any",
                intro: "The towns and regions welcome the adoption of the report on the Common Organisation of the Markets by the Agriculture and Rural Development Committee of the European Parliament and call on the Member States to take these propositions on board. The report proposes new agricultural market surveillance and regulation tools that are vital to maintaining agriculture across the EU and keeping rural areas alive, as called for by the local and regional authorities.",
                languages: [
                    {
                        label:"BG",
                        status: "translated"
                    },
                    {
                        label:"CS",
                        status: "draft"
                    },
                    {
                        label:"DA",
                        status: "draft"
                    },
                    {
                        label:"DE",
                        status: "draft"
                    },
                    {
                        label:"EL",
                        status: "translated"
                    },
                    {
                        label:"EN",
                        status: "translated"
                    },
                    {
                        label:"ES",
                        status: "draft"
                    },
                    {
                        label:"ET",
                        status: "draft"
                    },
                    {
                        label:"FI",
                        status: ""
                    },
                    {
                        label:"FR",
                        status: ""
                    },
                    {
                        label:"GA",
                        status: "draft"
                    },
                    {
                        label:"HR",
                        status: "draft"
                    },
                    {
                        label:"HU",
                        status: "translated"
                    },
                    {
                        label:"IT",
                        status: "draft"
                    },
                    {
                        label:"LT",
                        status: ""
                    },
                    {
                        label:"LV",
                        status: "draft"
                    },
                    {
                        label:"MT",
                        status: "draft"
                    },
                    {
                        label:"NL",
                        status: "draft"
                    },
                    {
                        label:"PL",
                        status: ""
                    },
                    {
                        label:"PT",
                        status: "translated"
                    },
                    {
                        label:"RO",
                        status: "draft"
                    },
                    {
                        label:"SK",
                        status: ""
                    },
                    {
                        label:"SL",
                        status: "draft"
                    },
                    {
                        label:"SV",
                        status: ""
                    }
                ]
            },
            {
                contenttype: "Events",
                category: "events",
                title: "The European Committee of the Regions welcomes the vote by the European Parliament's Agriculture Committee in favour of new agricultural market surveillance and regulation tools  ",
                date: "10/12/2018",
                theme: "Agriculture; Rural development",
                label: "International cooperation",
                picture: "http://placeimg.com/640/480/any",
                intro: "The towns and regions welcome the adoption of the report on the Common Organisation of the Markets by the Agriculture and Rural Development Committee of the European Parliament and call on the Member States to take these propositions on board. The report proposes new agricultural market surveillance and regulation tools that are vital to maintaining agriculture across the EU and keeping rural areas alive, as called for by the local and regional authorities.",
                languages: [
                    {
                        label:"BG",
                        status: "translated"
                    },
                    {
                        label:"CS",
                        status: "draft"
                    },
                    {
                        label:"DA",
                        status: "draft"
                    },
                    {
                        label:"DE",
                        status: "draft"
                    },
                    {
                        label:"EL",
                        status: "translated"
                    },
                    {
                        label:"EN",
                        status: "translated"
                    },
                    {
                        label:"ES",
                        status: "draft"
                    },
                    {
                        label:"ET",
                        status: "draft"
                    },
                    {
                        label:"FI",
                        status: ""
                    },
                    {
                        label:"FR",
                        status: ""
                    },
                    {
                        label:"GA",
                        status: "draft"
                    },
                    {
                        label:"HR",
                        status: "draft"
                    },
                    {
                        label:"HU",
                        status: "translated"
                    },
                    {
                        label:"IT",
                        status: "draft"
                    },
                    {
                        label:"LT",
                        status: ""
                    },
                    {
                        label:"LV",
                        status: "draft"
                    },
                    {
                        label:"MT",
                        status: "draft"
                    },
                    {
                        label:"NL",
                        status: "draft"
                    },
                    {
                        label:"PL",
                        status: ""
                    },
                    {
                        label:"PT",
                        status: "translated"
                    },
                    {
                        label:"RO",
                        status: "draft"
                    },
                    {
                        label:"SK",
                        status: ""
                    },
                    {
                        label:"SL",
                        status: "draft"
                    },
                    {
                        label:"SV",
                        status: ""
                    }
                ]
            }
        ]
    };

    /*
        The base Component class. All our custom elements extend this class
        wich provides:
        1. A Shadow DOM for CSS scoping and DOM encapsulation.
        2. A reference to the app's root element.
        3. A method to dispatch a custom event.
        Global app state from @bdc
    */

    class Component extends HTMLElement {
        constructor() {
            super();
            // this.attachShadow({ mode: 'open' }); */
            this.root = document.body.querySelector('cor-dashboard');
            this.globalData = Data;
        }

        dispatchUpdate(detail) {
            const event = new CustomEvent("state-update", {
                detail,
                bubbles: true,
                composed: true
            });

            this.dispatchEvent(event);
        }
    }

    var Template = {
        render(data) {
            return `${this.css()}
        ${this.html(data)}`;
        },

        html(data) {
            return `
        
        ${data.map( filter => `
            <div class="cor-dashboard-filter expandable">
                <h2 class="cor-dashboard-filter__title">
                    <button class="cor-dashboard-filter__list__item__link cor-dashboard-filter__list__item__link--${filter.icon}" data-toggle="collapse" data-expandtarget="${filter.filterName}" aria-expanded="${filter.expanded ? "true" : "false"}" aria-controls="collapseExample">
                        ${filter.name}
                    </button>
                </h2>
                <div id="${filter.filterName}" class="cor-dashboard-filter__list-container">
                    <ul class="cor-dashboard-filter__list cor-dashboard-filter__list--${filter.filterName}">
                        ${filter.items.map( item => `
                            <li class="cor-dashboard-filter__list__item">
                                
                                ${item.name === "Personalised" ? `
                                    <div class="form-group">
                                        <label for="start">Start date:</label>

                                        <input class="form-control" type="date" id="start" name="date-start"
                                        value="2018-07-22"
                                        >
                                    </div>
                                    <div class="form-group">
                                        <label for="start">End date:</label>

                                        <input class="form-control" type="date" id="end" name="date-end"
                                            value="2018-07-22"
                                            >
                                    </div>
                                ` : `
                                    <div class="checkbox checkbox-indent" style="display:inline-block;">
                                        <label>News<input type="checkbox" name="item_type" class="box-2" id="item_type-1329" value="1329" checked="Checked"><span class="badge"></span></label>
                                    </div>

                                    <a class="cor-dashboard-filter__list__item__link ${item.subitems ? "cor-dashboard-filter__list__item__link--parent" : "" }" href="#" data-filter="${item.target}" href="#/">
                                        <input type="checkbox" id="${item.name}" name="${item.name}">
                                        <label for="${item.name}">${item.name}</label>
                                        
                                        ${item.type !== "date" ? `
                                            <span>${item.number ? item.number : 0}</span>
                                        ` : ``}
                                    </a>
                                `}
                                
                                ${item.subitems ? 
                                `
                                <ul>
                                    ${item.subitems.map(
                                        item => `
                                        <li><a class="cor-dashboard-filter__list__item__sublink" href="#/" data-filter="${item.target}">
                                            <input type="checkbox" id="scales" name="scales">
                                            <label for="scales">${item.name}</label> <span>${item.number ? item.number : 0}</span></a></li>
                                    `
                                    ).join('')} 
                                </ul>` : 
                                ``
                                }
                            </li>
                        `).join('')}
                    </ul>
                    <div class="cor-dahsboard-btncontainer">
                        <button class="cor_button btn cor_button--after cor-dashboard-filtersbtn">Apply selection</button>
                    </div>
                </div>
            </div>                     
        `).join('')}
        

        `
        },

        css() {
            return `

        `
        }
    };

    const data = [
        {
            name: "Content Types",
            filterName: "contenttypes",
            icon: "contenttypes",
            expanded: true,
            items: [
                {
                    name: "News",
                    target: "news",
                    number: 55,
                    subitems: [
                        {
                        name: "Regional news",
                        number: 5
                        },
                        {
                        name: "Press release",
                        number: 0
                        },
                        {
                        name: "Success story",
                        number: 15
                        }
                    ]
                },
                {
                name: "Events",
                target: "events",
                number: 25
                },
                {
                name: "Opinions",
                target: "opinions",
                number: 2
                },
                {
                name: "Studies",
                target: "studies",
                number: 9
                },
                {
                name: "Brochures",
                target: "brochures",
                number: 7
                }
            ]
        },
        {
            name: "Themes",
            filterName: "themes",
            icon: "themes",
            number: 125,
            items: [
                {
                    name: "no theme",
                    target: ""
                },
                {
                    name: "Agriculture and Fisheries",
                    target: ""
                },
                {
                    name: "Citizenship, Governance and Institutional Affairs",
                    target: ""
                },
                {
                    name: "Cohesion Policy, Structural funds and EU Budget",
                    target: ""
                },
                {
                    name: "Consumer Policy, Health and Tourism",
                    target: ""
                },
                {
                    name: "Economic and monetary policy",
                    target: ""
                },
                {
                    name: "Environment, Climate Change and Energy",
                    target: ""
                },
                {
                    name: "Migration and External relations",
                    target: ""
                },
                {
                    name: "Research, Innovation and Digital Single Market",
                    target: ""
                },
                {
                    name: "Social Policy, Education, Employment and Culture",
                    target: ""
                },
                {
                    name: "Transport",
                    target: ""
                }

            ]
        },
        {
            name: "Date",
            filterName: "date",
            icon: "date",
            items: [
                {
                    name: "Today",
                    target: "today",
                    type: "date"
                },
                {
                    name: "This week",
                    target: "thisweek",
                    type: "date"
                },
                {
                    name: "This month",
                    target: "thismonth",
                    type: "date"
                },
                {
                    name: "This year",
                    target: "thisyear",
                    type: "date"
                },
                {
                    name: "Personalised",
                    target: "custom",
                    type: "date"
                }          
            ]
        },
        {
            name: "Language",
            filterName: "languages",
            icon: "languages",
            items: [
                {
                    name: "BG",
                    target: ""
                },
                {
                    name: "CS",
                    target: ""
                },
                {
                    name: "DA",
                    target: ""
                },
                {
                    name: "DE",
                    target: ""
                },
                {
                    name: "EL",
                    target: ""
                },
                {
                    name: "EN",
                    target: ""
                },
                {
                    name: "ES",
                    target: ""
                },
                {
                    name: "ET",
                    target: ""
                },
                {
                    name: "FI",
                    target: ""
                },
                {
                    name: "FR",
                    target: ""
                },
                {
                    name: "GA",
                    target: ""
                },
                {
                    name: "HR",
                    target: ""
                },
                {
                    name: "HU",
                    target: ""
                },
                {
                    name: "IT",
                    target: ""
                },
                {
                    name: "LT",
                    target: ""
                },
                {
                    name: "LV",
                    target: ""
                },
                {
                    name: "MT",
                    target: ""
                },
                {
                    name: "NL",
                    target: ""
                },
                {
                    name: "PL",
                    target: ""
                },
                {
                    name: "PT",
                    target: ""
                },
                {
                    name: "RO",
                    target: ""
                },
                {
                    name: "SK",
                    target: ""
                },
                {
                    name: "SL",
                    target: ""
                },
                {
                    name: "SV",
                    target: ""
                },   
            ]
        }
    ];

    class CorDashboardFilter extends Component {
        constructor() {
            super();
        }

        connectedCallback() {
            this.innerHTML = Template.render(data);
            
            // already expanded elements
            const collapsedElements = this.querySelectorAll('[aria-expanded=false]');
            collapsedElements.forEach(
                collapsedElement => {
                    this.ExpandCollapse(collapsedElement.dataset.expandtarget);
                }
            );

            // filters events
            this._triggers = this.querySelectorAll('[data-filter]');
            this._triggers.forEach(
                trigger => trigger.addEventListener('click', e => this.onClick(e))
            );

            // open close events
            this._expandTriggers = this.querySelectorAll('[data-expandtarget]');
            this._expandTriggers.forEach(
                trigger => trigger.addEventListener('click', e => this.ExpandCollapse(event.target.dataset.expandtarget))
            );

            // dates events
            this._dateTriggers = this.querySelectorAll('.cor-dashboard-filter__list cor-dashboard-filter__list--date [data-filter]');
            this._dateTriggers.forEach(
                trigger => trigger.addEventListener('click', e => this.dateUpdate(e))
            );
        }

        onClick(event) {
           
            if(event.target.parentNode.parentNode.classList.contains('cor-dashboard-filter__list--date')) {
                this.dateUpdate(event.target);
            } else {
                this.updateActiveState(event.target);
            }
        }

        updateActiveState(target) {
            const text = target.dataset.filter;

            if (target.classList.contains('active')) {
                const type = "remove-filter";
                console.log(target, "list", target.classList.contains('active'));
                target.classList.remove('active');
                this.dispatchUpdate({type, text});
            } else {
                const type = "filter";
                target.classList.add('active');
                
                if (target.nextElementSibling) {
                    const children = target.nextElementSibling.querySelectorAll('.cor-dashboard-filter__list__item__sublink');
                    children.forEach(
                        child =>  child.classList.add('active')
                    );
                }
                
                this.dispatchUpdate({type, text});
            }    }

        ExpandCollapse(target) {
            const expandCollapseTarget = document.querySelector(`#${target}`);
            const parent = expandCollapseTarget.parentNode;


            if(!parent.classList.contains("js-collapsed")) {
                this.collapse(expandCollapseTarget);
                parent.classList.add('js-collapsed');
            } else {
                this.expand(expandCollapseTarget);
                parent.classList.remove('js-collapsed');
            }
        }

        expand(target) {
            target.style.height = "";
            this._collapsed = false;
        }

        collapse(target) {
            target.style.height = 0;
            this._collapsed = true;
        }

        dateUpdate(event) {

            const currentDate = new Date;
            const currentYear = currentDate.getFullYear();
            const currentMonth = ('0' + (currentDate.getMonth() + 1) ).slice(-2);
            let startDate = '';
            let endDate = '';
            

            switch (event.dataset.filter) {
                
                
                case "today":
                    startDate = currentDate.toISOString().substr(0, 10);
                    endDate = currentDate.toISOString().substr(0, 10);
                    break;
                case "thisweek":   
                    let firstDayOfTheWeek = (currentDate.getDate() -  currentDate.getDay() ) + 1;
                    let lastDayOfTheWeek = firstDayOfTheWeek + 4;

                    startDate = `${currentYear}-${currentMonth}-${('0' + firstDayOfTheWeek).slice(-2)}`;
                    endDate = `${currentYear}-${currentMonth}-${('0' + lastDayOfTheWeek).slice(-2)}`;
                    break;
                case "thismonth":
                    const lastDayOfTheMonth = new Date(currentYear, currentMonth, 0);
                    
                    startDate = `${currentYear}-${currentMonth}-01`;
                    endDate = `${currentYear}-${currentMonth}-${lastDayOfTheMonth.getDate()}`;
                    break;
                case "thisyear":
                    
                    startDate = `${currentYear}-01-01`;
                    endDate = `${currentYear}-12-31`;
                    break;
                case "custom":

                    break;
                default:
                    break;
            }

            const startDateInput = document.querySelector('input#start');
            const endDateInput = document.querySelector('input#end');
            startDateInput.value = startDate;
            endDateInput.value = endDate;
        }

    }

    if (!customElements.get('cor-dashboard-filter')) {
        customElements.define('cor-dashboard-filter', CorDashboardFilter);
    }

    const navitems = {
      top:  [
        {
        name: "Dashboard2",
        icon: "home",
        target: ""
      }],
      bottom:  [
        {
          name: "eShop / Newsletter",
          icon: "newsletter",
          target: ""
        },
        {
          name: "Quick start",
          icon: "home",
          target: "book"
        }
      ]
    };


    var Template$1 = {
      render() {
        return `${this.css()}
    ${this.html()}`;
      },

      html() {
        return `

    <!-- Menu -->
    <ul class="cor-dashboard__nav">
        ${navitems.top.map(navitem => `
          <li class="cor-dashboard__nav__item">
            <a class="cor-dashboard__nav-link cor-dashboard__nav-link--${navitem.icon}" href="#" data-target="${navitem.target}">${navitem.name}</a>
            
            <!-- Sub menu -->
            ${ navitem.subitems ? `
              <ul>${navitem.subitems.map(subitem => `
                <li>
                  <a class="cor-dashboard__nav-link">${subitem.name}</a>
                </li>`).join('')}
              </ul>` : ``}
            <!-- /Sub menu -->

          </li>
        `).join('')}
    </ul>
    <!-- /Menu -->
      
    <!-- Filtres -->
    <cor-dashboard-filter></cor-dashboard-filter>
    <!-- /Filtres -->

    <!-- Menu -->
    <ul class="cor-dashboard__nav">
        ${navitems.bottom.map(navitem => `
          <li class="cor-dashboard__nav__item">
            <a class="cor-dashboard__nav-link cor-dashboard__nav-link--${navitem.icon}" href="#" data-target="${navitem.target}">${navitem.name}</a>
            
            <!-- Sub menu -->
            ${ navitem.subitems ? `
              <ul>${navitem.subitems.map(subitem => `
                <li>
                  <a class="cor-dashboard__nav-link">${subitem.name}</a>
                </li>`).join('')}
              </ul>` : ``}
            <!-- /Sub menu -->

          </li>
        `).join('')}
    </ul>
    <!-- /Menu -->
    `
      },

      css() {
        return `

    `
      }
    };

    class CorDashboardNav extends Component {
      constructor() {
        super();
        // this.attachShadow({ mode: 'open' });
      }

      connectedCallback() {
        this.innerHTML = Template$1.render();
        this._resetTrigger = this.querySelector('.cor-dashboard__nav-link--home');
        this._resetTrigger.addEventListener("click", e => this.rootResetAttributes(e));

        document.querySelector('.cor-dashboard-slidebtn').addEventListener('click', event => this.clickOnButton());
      }

      clickOnButton() {
        document.querySelector('body').classList.toggle('is-collapsed');
      }

      rootResetAttributes() {
        const type = "reset";
        const text = "";
        this.dispatchUpdate({type, text});
      }
      
    }

    if (!customElements.get('cor-dashboard-nav')) {
      customElements.define('cor-dashboard-nav', CorDashboardNav);
    }

    var Template$2 = {
        render() {
            return `${this.css()}
        ${this.html()}`;
        },

        html() {
            return `
        `
        },

        css() {
            return `

        `
        }
    };

    class CorDashboardCard extends Component {
        constructor() {
            super();
            // this.attachShadow({ mode: 'open' });
        }

        connectedCallback() {
            this.innerHTML = Template$2.render();

            if(this.querySelector("#donut-chart")) {
                this.chart();
            }
        }

    }

    if (!customElements.get('cor-dashboard-card')) {
        customElements.define('cor-dashboard-card', CorDashboardCard);
    }

    var Template$3 = {
        render() {
            return `${this.css()}
        ${this.html()}`;
        },

        html() {
            return `
            <svg id="#donut-chart"></svg>
        `
        },

        css() {
            return `
        
        `
        },
    };

    const seedData = [{
        "label": "News",
        "color": "rgb(32,142,183)",
        "value": 80,
        "link": "https://facebook.github.io/react/"
      }, {
        "label": "Events",
        "color": "rgb(99,239,133)",
        "value": 100,
        "link": "https://redux.js.org/"
      }, {
        "label": "Opinions",
        "color": "rgb(194,13,166)",
        "value": 25,
        "link": "https://vuejs.org/"
      }, {
        "label": "Studies",
        "color": "rgb(16,237,220)",
        "value": 15,
        "link": "https://angularjs.org/"
      }, {
        "label": "Brochures",
        "value": 5,
        "color": "rgb(66,51,166)",
        "link": "https://meteorhacks.com/meteor-js-web-framework-for-everyone"
      }];


    class CorDashboardDonutChart extends Component {
        constructor() {
            super();
        }

        connectedCallback() {
          this.innerHTML = Template$3.render();
          this.chart(seedData);
        }

        addTooltip() {
          const tooltip = document.createElement("div");
          document.querySelector("body").appendChild(tooltip).classList.add("toolTip");
        }



        chart(chartData) {
            this.addTooltip();

            chartData.sort( (a, b) => (a.value < b.value) ? 1 : -1 );

            // Define size & radius of donut pie chart
            const width = 200;
            const height = 200;
            const radius = Math.min(width, height) / 2;

            const updateChart = event => {
              this.parentNode.setAttribute('view', event.data.label);
              tooltip.style.display = "none";
            };   

            // Define arc ranges
            const arcText = d3.scaleOrdinal()
            .range([0, width]);

            // Determine size of arcs
            const arc = d3.arc()
            .innerRadius(radius - 50)
            .outerRadius(radius - 10);

            // Create the donut pie chart layout
            const pie = d3.pie()
            .value( d => d["value"])
            .sort(null);

            const tooltip = document.querySelector('.toolTip');

            // Append SVG attributes and append g to the SVG
            const svg = d3.select(this.querySelector("svg"))
            .attr("width", width)
            .attr("height", height)
            .append("g")
            .attr("transform", "translate(" + radius + "," + radius + ")");

            // Define inner circle
            svg.append("circle")
            .attr("cx", 0)
            .attr("cy", 0)
            .attr("r", 100)
            .attr("fill", "#fff") ;

           
            
            // Calculate SVG paths and fill in the colours
            const g = svg.selectAll(".arc")
            .data(pie(chartData))
            .enter().append("g")
            .attr("class", "arc")
                
            // Make each arc clickable 
            .on("click", updateChart);


            // Append the path to each g
            g.append("path").transition()
            .attr("d", arc)
            .attr("fill", d => d.data.color);

          function handleMouseOver(d, i) { 
            
            const el = d3.select(this).select("path");
            el.attr('opacity', '0.75');
            
            
            tooltip.style.left = d3.event.pageX+10+"px";
            tooltip.style.top = d3.event.pageY-25+"px";
            tooltip.style.display = "inline-block";
            tooltip.innerHTML = (d.data.label)+"<br>"+(d.data.value);
          }
          function handleMouseOut(d, i) { 
            const el = d3.select(this).select("path");
            el.attr('opacity', '1');
            tooltip.style.display = "none";
          }
          g.on("mousemove", handleMouseOver);
          g.on("mouseout", handleMouseOut);





          d3.select(this)
            .append('ol').classed('js-cor-dashboard-donut-chart__list', true)
            .selectAll(null)  
            .data(chartData)
            /* .sort(function(a,b) { return +a.value - +b.value }) */
            .enter()
            .append('li')
            .append('a')
            .attr('href', d => `#${d.label}`)
            .html(d => `<span>${d.label}:</span> <strong>${d.value}</strong>`)
            .on("click", updateChart)
            .append('span')
            .style("background-color", d => d.color);

          

        }

    }

    if (!customElements.get('cor-dashboard-donut-chart')) {
        customElements.define('cor-dashboard-donut-chart', CorDashboardDonutChart);
    }

    var Template$4 = {
        render() {
            return `
            ${this.css()}
            ${this.html()}
        `
        },

        html() {
            return `
            <div class="chart"></svg>
        `
        },

        css() {
            return `

        `
        }
    };

    class CorDashboardBarChart extends Component {
        constructor() {
            super();
        }

        connectedCallback() {
            this.innerHTML = Template$4.render();
            const data = this.parentNode.getAttribute("data-data");
            if (data) {
                this.chart(JSON.parse(data), this);
            }
            
            this.classList.add('visible');
        }

        chart(data, target) {

            // Sort Data
            if(data) {
                data.sort( (a, b) => (a.total < b.total) ? 1 : -1 );
            }

            var height = 200;

            var yScale = d3.scaleLinear()
                .domain([0, d3.max(data, d => {
                    return d.total;
                })])
                .range([0, height]);

            // Transitions
            var t = d3.transition()
                .duration(750)
                .ease(d3.easeBackInOut);
        
                // Creation of the chart
            d3.select(target.querySelector(".chart"))
                .attr('height', height)
                .selectAll('div').data(data)
                .enter().append('div').append('div').transition(t)
                .style('height', d => yScale(d.total) + "px");

            // Creation of the list
            d3.select(this)
                .append('ol')
                .classed('js-cor-dashboard-barchart__list', true)
                .selectAll(null)  
                .data(data)
                .enter()
                .append('li')
                .append('a')
                .attr('href', d => `#${d.label}`)
                .html(d => `<span>${d.label}</span> <strong>${d.total}</strong>`)
                .append('span');
            
        }

    }

    if(!customElements.get('cor-dashboard-bar-chart')) {
        customElements.define('cor-dashboard-bar-chart', CorDashboardBarChart);
    }

    var Template$5 = {
        render(chart, view) {
            return `
            ${this.css()}
            ${this.html(chart, view)}
        `
        },

        html(chart, view) {
            switch (chart) {
                case "barChart2":
                    return `
                    <cor-dashboard-bar-chart class="cor-dashboard-bar-chart"></cor-dashboard-bar-chart>
                `;
                    break;
                case "barChart":
                    return `
                <div class="cor-dashboard-bar-chart__header">
                    <h3>${view}</h3>
                    <a class="cor-dashboard-chart__backbtn cor_button--before cor_button btn" id="cor-dashboard-chart__backbtn">Back</a>
                </div>
                <cor-dashboard-chart class="cor-dashboard-chart" data-charttype="barChart2"  data-data="[{
                  &quot;label&quot;: &quot;BG&quot;,
                  &quot;total&quot;: 50},{
                  &quot;label&quot;: &quot;CS&quot;,
                  &quot;total&quot;: 2},{
                  &quot;label&quot;: &quot;DA&quot;,
                  &quot;total&quot;: 7},{
                  &quot;label&quot;: &quot;DE&quot;,
                  &quot;total&quot;: 87},{
                  &quot;label&quot;: &quot;EL&quot;,
                  &quot;total&quot;: 24},{
                  &quot;label&quot;: &quot;EN&quot;,
                  &quot;total&quot;: 6},{
                  &quot;label&quot;: &quot;ES&quot;,
                  &quot;total&quot;: 78},{
                  &quot;label&quot;: &quot;ET&quot;,
                  &quot;total&quot;: 0},{
                  &quot;label&quot;: &quot;FI&quot;,
                  &quot;total&quot;: 5},{
                  &quot;label&quot;: &quot;FR&quot;,
                  &quot;total&quot;: 3},{
                  &quot;label&quot;: &quot;GA&quot;,
                  &quot;total&quot;: 0},{
                  &quot;label&quot;: &quot;HR&quot;,
                  &quot;total&quot;: 14},{
                  &quot;label&quot;: &quot;HU&quot;,
                  &quot;total&quot;: 3},{
                  &quot;label&quot;: &quot;IT&quot;,
                  &quot;total&quot;: 47},{
                  &quot;label&quot;: &quot;LT&quot;,
                  &quot;total&quot;: 75},{
                  &quot;label&quot;: &quot;LV&quot;,
                  &quot;total&quot;: 26},{
                  &quot;label&quot;: &quot;MT&quot;,
                  &quot;total&quot;: 65},{
                  &quot;label&quot;: &quot;NL&quot;,
                  &quot;total&quot;: 37},{
                  &quot;label&quot;: &quot;PL&quot;,
                  &quot;total&quot;: 0},{
                  &quot;label&quot;: &quot;PT&quot;,
                  &quot;total&quot;: 21},{
                  &quot;label&quot;: &quot;RO&quot;,
                  &quot;total&quot;: 48},{
                  &quot;label&quot;: &quot;SK&quot;,
                  &quot;total&quot;: 23},{
                  &quot;label&quot;: &quot;SL&quot;,
                  &quot;total&quot;: 16},{
                  &quot;label&quot;: &quot;SV&quot;,
                  &quot;total&quot;: 9}]">
              
      
          
              
                </cor-dashboard-chart>
           
                `;
                    break;
                default:
                    return `
                    <cor-dashboard-donut-chart class="cor-dashboard-donut-chart"></cor-dashboard-donut-chart>    
                `    
            }
        },

        css() {
            return `

        `
        }
    };

    class CorDashboardChart extends Component {
        constructor() {
            super();
        }

        resetState(ev) {
            this.innerHTML = "";
            this.innerHTML = Template$5.render(ev.target);
        }

        backBtn() {
            const btn = this.querySelector("#cor-dashboard-chart__backbtn");
            btn.addEventListener('click', ev => this.resetState(ev));
        }

        connectedCallback() {
            // Get the type of chart
            const typeOfChart = this.dataset.charttype;

            this.innerHTML = Template$5.render(typeOfChart);
            
            const view = "view";
            const update = () => {
                const views = this.getAttribute(view);
                this.innerHTML = Template$5.render("barChart",[views]);
                this.backBtn();
            };

            new MutationObserver(update).observe(this, {
                attributes: true,
                attributeFilter: [view]
            });
        }
    }

    if (!customElements.get('cor-dashboard-chart')) {
        customElements.define('cor-dashboard-chart', CorDashboardChart);
    }

    const createDataAttribute = data => {
        const languagesLenght = data.length;
        let formatedData = '';
        data.map( (language, i) => {
            if (languagesLenght === i+1 ) {
                // last one
                formatedData += `{
                "label": "${language.label}",
                "total": ${language.total}}`;
            } else {
                // not last one
                formatedData += `{
                "label": "${language.label}",
                "total": ${language.total}},`;
            }
            
        });
        return formatedData;
    };

    var Template$6 = {
        render(data) {
            return  `${this.css()}
        ${this.html(data)}`;
        },

        html(data) {
            return `
            ${data.map( card => `
                <!-- Card item -->
                <div class="cor-dashboard-card" category="${card.category}" size="${card.size}">
                    
                    <!-- Title of the card -->
                    <h2 class="cor-dashboard-card__title">
                        <span>${card.title}</span>
                        
                        ${card.total ? `
                            <span class="cor-dashboard-card__title__total">
                                <span>${card.total}</span>
                            </span>
                        `:``}
                        
                    </h2>
                    <!-- /Title of the card -->
                    
                    <!-- Content of the card -->
                    <div class="cor-dashboard-card__body">

                        <!-- Cards with chart -->
                        ${ (card.itemdata) ?                     
                            `
                            
        
                            <cor-dashboard-chart class="cor-dashboard-chart" 
                                data-charttype="${card.charttype}" 
                                
                                data-data=
                            '[${createDataAttribute(card.itemdata)}]'>
                            </cor-dashboard-chart>
        
                            
                            ` 
                            : `` }
                        <!-- /Cards with chart -->

                        <!-- Cards displaying categories -->
                        ${ (card.newscategories) ? 
                            `
                                ${(card.newscategories).map( el => `
                                <p class="cor-dashboard-card__listing-item">${el.label} <strong>${el.total}</strong></p>
                                ` ).join('')}
                            ` 
                            : `` }
                        <!-- /Cards displaying categories -->


                        <!-- Cards displaying all the languages -->
                        ${ ((card.cardtype) === 'languageOverview') ? `
                        
                            
                            <cor-dashboard-bar-chart class="cor-dashboard-bar-chart" data-data='[${createDataAttribute(card.languages)}]'></cor-dashboard-bar-chart>
                            
                            ` : ``}
                        <!-- /Cards displaying all the languages -->


                        <!-- Multilinguism card -->
                        ${ ((card.cardtype) === 'multilinguismOverview') ? `
                            <div class="cor-dashboard-multilinguismTable">
                                
                                
                                <div>
                                    <h2>Languages</h2>  
                                    <ol>
                                        ${card.multilingualContent[0].translations.map(
                                            translation => translation.label === "EN" ? `<li class="cor-dashboard__multilinguismTable__en"><a href="#">${translation.label}</a></li>` : `<li><a href="#">${translation.label}</a></li>` 
                                        ).join('')}
                                    </ol>
                                </div>
                      
                                ${card.multilingualContent.map(
                                    multilingualContent => `
                                        <div>
                                            <h2>${multilingualContent.contenttype} </h2>

                                            <ol>
                                                ${multilingualContent.translations.map(
                                                    translation => translation.label === "EN" ? `<li class="cor-dashboard__multilinguismTable__en"><a href="#">${translation.total}</a></li>` : `<li><a href="#">${translation.total}</a></li>`
                                                ).join('')}
                                            </ol>
                                        </div>
                                    `
                                ).join('')}
                            
                            
                            </div>
                            ` : ``}
                        <!-- /Multilinguism card -->

                        
                    </div>
                    <!-- /Content of the card -->
                
                </div>
                <!-- /Card item -->
        `).join('')}
            
            `
        },

        css() {
            return `
        `
        }
    };

    /*
        This component observes the state changes. Whenever a specific attribute
        is updated, it changes the displays
    */



    class CorDashboardOverview extends Component {
        constructor() {
            super();
            // this.attachShadow({ mode: 'open' });
        }

        show(filter) {
            if (filter[0] === "") {  /* If empty */
                this.innerHTML = Template$6.render(this.globalData.DATA);
            } else {
                this.innerHTML = Template$6.render(this.globalData.DATA.filter( el => filter.includes(el.category)));
            }
        }

        connectedCallback() {
            this.innerHTML = Template$6.render(this.globalData.DATA);
            
            const {root} = this.root;

            /* Filter update */
            const filter = "filter";
            const update = () => {
                this.show(root.getAttribute(filter).split(' '));
            };

            new MutationObserver(update).observe(root, {
                attributes: true,
                attributeFilter: [filter]
            });

            this.multiliguismTable();
        }

        multiliguismTable() {
            const lists = document.querySelectorAll(".cor-dashboard-multilinguismTable ol + ol");
            const cells = document.querySelectorAll(".cor-dashboard-multilinguismTable li");
            const values = [...cells].map( cell => cell.textContent);
            
            console.log(values);
            /*
            const values = for (const cell of cells) {
                cell => cell.texContent
            };
            const maxValue = Math.max(values);
            
            cells.map( cell => cell.dataset.percentage = (cell.textContent * 100) / maxValue);
            */

        }

    }

    if (!customElements.get('cor-dashboard-overview')) {
        customElements.define('cor-dashboard-overview', CorDashboardOverview);
    }

    var Template$7 = {
        render() {
            return `
            ${this.css()}
            ${this.html()}
        `
        },

        html() {
           return ``
        },

        css() {
            return `

        `
        }
    };

    /*
     * language overview used in the detailed card 
     */

    class CorDashboardLanguagesOverview extends Component {
        constructor() {
            super();
        }
        
        connectedCallback() {
            this.innerHTML = Template$7.render();
        }   
    }

    if(!customElements.get('cor-dashboard-languages-overview')) {
        customElements.define('cor-dashboard-languages-overview', CorDashboardLanguagesOverview);
    }

    var Template$8 = {
        render() {
            return `
            ${this.css()}
            ${this.html()}
        `
        },

        html() {
            return `
            <article>
                <p><slot name="contenttype">News</slot></p>
                <h1 class="cor-dashboard-article__title">
                    <slot name="title">Title of the news</slot>
                </h1>
                <p class="cor-dashboard-article__details">
                    <slot name="date"></slot> 
                    | 
                    <slot name="theme"></slot> 
                    <slot name="label" class="cor-dashboard-article__details__label"></slot>
                </p>
                <p class="cor-dashboard-detailed-item__intro-container">
                    <slot name="picture"></slot>
                    <slot name="intro"></slot>
                </p>
                
                <ul class="cor-dashboard-detailed-item__languages-list" slot="languages">
                    <slot class="cor-dashboard-detailed-item__languages-list__item" name="language">
                        <li class="cor-dashboard-detailed-item__languages-list__item">
                            <cor-dashboard-languages-overview>
                                <span slot="language-label">lang</slot>
                            <cor-dashboard-languages-overview>
                        </li>
                    </slot>
                </ul>

            </article>    
        `
        },

        css() {
            return `

        `
        }

    };

    class CorDashboardDetailedItem extends Component {
        constructor() {
            super();
        }

        connectedCallback() {
            this.innerHTML = Template$8.render();
        }
    }

    if(!customElements.get('cor-dashboard-detailed-item')) {
        customElements.define('cor-dashboard-detailed-item', CorDashboardDetailedItem);
    }

    var Template$9 = {
        render(numberOfPages, currentPage) {
            return `
            ${this.html(numberOfPages, currentPage)}
        `
        },

        html(numberOfPages, currentPage) {
            return `
        <nav aria-label="Page navigation example">
            <ul class="pagination">
                <li class="page-item"><a class="page-link" href="#" data-target="first">First</a></li>
                <li class="page-item"><a class="page-link" href="#" data-target="-1">Previous</a></li>
                ${Array(numberOfPages).fill().map((item, index) => `
                <li class="page-item">
                    <a class="page-link
                    ${index + 1 === currentPage ? `active` : ``}
                    " href="#" data-page="${index + 1}">${index + 1}</a></li>
                `).join('')}
                <li class="page-item"><a class="page-link" href="#" data-target="+1">Next</a></li>
                <li class="page-item"><a class="page-link" href="#" data-target="last">Last</a></li>
            </ul>
        </nav>
        `
        }
    };

    class CorDashboardPagination extends Component {
        constructor() {
            super();
        }

        connectedCallback() {
            this.articles = document.querySelectorAll('.cor-dashboard-detailed-item');
            this.currentPage = 1;
            this.totalItems = [...this.articles].length;
            this.itemsPerPage = 2;
            this.totalOfPages = Math.round(this.totalItems / this.itemsPerPage);

            this.createPagination(this.totalItems, this.itemsPerPage, this.currentPage, this.totalOfPages);
            this.addEventListener('click', this._onClick);
        }

        reset() {
            [...this.articles].map((article, index) => {
                article.hidden = "hidden";
            });

        }

        _selectArticles(newPage) {
            this.reset();
            this.currentPage = newPage;

            const startBatch = this.itemsPerPage * (newPage - 1);
            const endBatch = (this.itemsPerPage * (newPage - 1)) + this.itemsPerPage;

            [...this.articles].slice(startBatch, endBatch).map((article, index) => {
                article.hidden = false;
            });

            this.updatePagination(newPage);
        }

        _onClick(event) {

            if (event.target.dataset.page) this._selectArticles(parseInt(event.target.dataset.page, 10));
            // Previous page
            if (event.target.dataset.target === "-1" && this.currentPage > 1) this._selectArticles(this.currentPage - 1);
            // Next page
            if (event.target.dataset.target === "+1" && this.currentPage < this.totalOfPages) this._selectArticles(this.currentPage + 1);
            // First page
            if (event.target.dataset.target === "first") this._selectArticles(1);
            // Last page
            if (event.target.dataset.target === "last") this._selectArticles(this.totalOfPages);
        }

        createPagination(totalItems, itemsPerPage, currentPage, totalOfPages) {

            [...this.articles].map((article, index) => {
                if (index >= itemsPerPage) article.hidden = "hidden";
            });

            this.innerHTML = Template$9.render(totalOfPages, currentPage);
        }

        updatePagination(currentPage) {
            document.querySelector('.active').classList.remove('active');
            document.querySelector(`[data-page="${currentPage}"]`).classList.add('active');
        }
    }

    if (!customElements.get('cor-dashboard-pagination')) {
        customElements.define('cor-dashboard-pagination', CorDashboardPagination);
    }

    var Template$a = {
        render(data) {
            return `
            ${ this.html(data) }
            ${ this.css() }
        `
        },

        html(data) {
            return `
            <p class="cor-dashboard-card__title cor-dashboard-detailed__title">
            ${data.length} News
                <select>
                    <option value="">Sort by</option>
                    <option value="date">Date</option>
                </select>
            </p>

            ${data.map( item => `

            <article class="cor-dashboard-detailed-item" category="${item.category}">

                <p class="cor-dashboard-detailed-item__contenttype">${item.contenttype}</p>
                
                <img src="${item.picture}" />
                
                <div class="cor-dashboard-detailed-item__container"> 

                    <!-- EN -->
                    <div class="cor-dashboard-detailed-item__content" data-lang="EN">
                        <h1 class="cor-dashboard-article__title">${item.title}</h1>
                        <p class="cor-dashboard-article__details">
                            ${item.label ? `<span class="cor-dashboard-article__label ${item.label === "Press release" ? "cor-dashboard-article__label--pressrelease" : ""} ${item.label === "Regional news" ? "cor-dashboard-article__label--regionalnews" : ""} ${item.label === "Success story" ? "cor-dashboard-article__label--successstory" : ""} ${item.label === "International cooperation" ? "cor-dashboard-article__label--internationalcoop" : ""}">${item.label}</span>`: ``}
                            <span>${item.date}</span>
                            ${item.theme ? `&nbsp;|&nbsp;<span>${item.theme}</span>`: ``}
                        </p>
                        <p class="cor-dashboard-article__extradetails">
                            <span><strong>Lorem:</strong> ipsum</span>
                            <span><strong>Lorem:</strong> ipsum</span>
                            <span><strong>Lorem:</strong> ipsum</span>
                            <span><strong>Lorem:</strong> ipsum</span>
                            <span><strong>Lorem:</strong> ipsum</span>
                        </p>
                        <p class="cor-dashboard-detailed-item__intro-container">
                            <span >${item.intro}</span>
                        </p>
                    </div>
                    <!-- /EN -->
                    
                    <!-- FR -->
                    <div class="cor-dashboard-detailed-item__content" data-lang="FR">
                        <h1 class="cor-dashboard-article__title">FR ${item.title}</h1>
                        <p class="cor-dashboard-article__details">
                            ${item.label ? `<span class="cor-dashboard-article__label ${item.label === "Press release" ? "cor-dashboard-article__label--pressrelease" : ""} ${item.label === "Regional news" ? "cor-dashboard-article__label--regionalnews" : ""} ${item.label === "Success story" ? "cor-dashboard-article__label--successstory" : ""} ${item.label === "International cooperation" ? "cor-dashboard-article__label--internationalcoop" : ""}">${item.label}</span>`: ``}
                            <span>${item.date}</span>
                            ${item.theme ? `&nbsp;|&nbsp;<span>${item.theme}</span>`: ``}
                        </p>
                        <p class="cor-dashboard-article__extradetails">
                            <span><strong>Lorem:</strong> ipsum</span>
                            <span><strong>Lorem:</strong> ipsum</span>
                            <span><strong>Lorem:</strong> ipsum</span>
                            <span><strong>Lorem:</strong> ipsum</span>
                            <span><strong>Lorem:</strong> ipsum</span>
                        </p>
                        <p class="cor-dashboard-detailed-item__intro-container">
                            <span >${item.intro}</span>
                        </p>
                    </div>
                    <!-- /FR -->
                    
                    <!-- DE -->
                    <div class="cor-dashboard-detailed-item__content" data-lang="DE">
                        <h1 class="cor-dashboard-article__title">DE ${item.title}</h1>
                        <p class="cor-dashboard-article__details">
                            ${item.label ? `<span class="cor-dashboard-article__label ${item.label === "Press release" ? "cor-dashboard-article__label--pressrelease" : ""} ${item.label === "Regional news" ? "cor-dashboard-article__label--regionalnews" : ""} ${item.label === "Success story" ? "cor-dashboard-article__label--successstory" : ""} ${item.label === "International cooperation" ? "cor-dashboard-article__label--internationalcoop" : ""}">${item.label}</span>`: ``}
                            <span>${item.date}</span>
                            ${item.theme ? `&nbsp;|&nbsp;<span>${item.theme}</span>`: ``}
                        </p>
                        <p class="cor-dashboard-article__extradetails">
                            <span><strong>Lorem:</strong> ipsum</span>
                            <span><strong>Lorem:</strong> ipsum</span>
                            <span><strong>Lorem:</strong> ipsum</span>
                            <span><strong>Lorem:</strong> ipsum</span>
                            <span><strong>Lorem:</strong> ipsum</span>
                        </p>
                        <p class="cor-dashboard-detailed-item__intro-container">
                            <span >${item.intro}</span>
                        </p>
                    </div>
                    <!-- /DE -->
                </div>

                <ul class="cor-dashboard-detailed-item__languages-list">
                    
                        ${item.languages.map( language => `
                            <li class="cor-dashboard-detailed-item__languages-list__item">
                                <a href="#">
                                    <div class="cor-dashboard-languages-overview" data-status="${language.status}">
                                        <span title="language" data-lang="${language.label}">${language.label}</span>
                                    </div>
                                </a>
                            </li>
                        `).join('')}
                        
                    </ul>

            </article>
              
            
            
              ` ).join('')}

            <cor-dashboard-pagination class="cor-dashboard-pagination"></cor-dashboard-pagination>
            
        `
        },

        css() {
            return `
            
        `
        }
    };

    function corDashboardLazyLoading() {

        const imageObserver = new IntersectionObserver((entries, imgObserver) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('cor-dashboard-lazy-load--visible');
                }
            });
        });

        const articles = document.querySelectorAll('.cor-dashboard-detailed-item');
        [...articles].map( article => {
            article.classList.add('cor-dashboard-lazy-load__element');
            imageObserver.observe(article);
        });
        
    }

    class CorDashboardDetailed extends Component {
        constructor() {
            super();
        }

        connectedCallback() {
            this.innerHTML = Template$a.render(this.globalData.ITEMS);
            corDashboardLazyLoading();

            const languagesLinks = document.querySelectorAll('.cor-dashboard-detailed-item__languages-list__item > a');
            [...languagesLinks].map( languageLink => {
                languageLink.addEventListener('click', evt => this.onClick(evt.target));
            });   
        }

        onClick(el) {
            this.switchContent(el.closest('.cor-dashboard-detailed-item'),el.dataset.lang);
        }

        switchContent(content,newLang) {
            
            const flippedEl = content.querySelector('.flip');
            if (flippedEl) flippedEl.classList.remove('flip');

            [...content.querySelectorAll('.cor-dashboard-detailed-item__content')].map( translation => {

                if (translation.dataset.lang === newLang) {
                    console.log(translation.dataset.lang , newLang);
                    translation.classList.add('flip');
                }
            });
            event.preventDefault;
        }
    }

    if(!customElements.get('cor-dashboard-detailed')) {
        customElements.define('cor-dashboard-detailed', CorDashboardDetailed);
    }

    var Template$b = {
        render () { 
            return `
        ${this.css()}
        ${this.html()}
        `
        },

        html () {
            return `
            <nav id="cor-dashboard-topnav">
                <a data-view="overview" class="active" href="#">Overview</a>
                <a data-view="detailed" href="#">Detailed</a>
                <a class="cor-icon" href="#">
                    <svg width="20" height="20" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="book-open" class="svg-inline--fa fa-book-open fa-w-18" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="#c6c6c6" d="M542.22 32.05c-54.8 3.11-163.72 14.43-230.96 55.59-4.64 2.84-7.27 7.89-7.27 13.17v363.87c0 11.55 12.63 18.85 23.28 13.49 69.18-34.82 169.23-44.32 218.7-46.92 16.89-.89 30.02-14.43 30.02-30.66V62.75c.01-17.71-15.35-31.74-33.77-30.7zM264.73 87.64C197.5 46.48 88.58 35.17 33.78 32.05 15.36 31.01 0 45.04 0 62.75V400.6c0 16.24 13.13 29.78 30.02 30.66 49.49 2.6 149.59 12.11 218.77 46.95 10.62 5.35 23.21-1.94 23.21-13.46V100.63c0-5.29-2.62-10.14-7.27-12.99z"></path></svg>
    Manual</a>
            </nav>
            
        `
        },

        css () {
            return `

        `
        }
    };

    class CorDashboardTopnav extends Component {
        constructor () {
            super();
        }

        connectedCallback() {
            this.innerHTML = Template$b.render();
            this._triggers = this.querySelectorAll('[data-view]');
            this._triggers.forEach(
                trigger => trigger.addEventListener('click', e => this.onClick(e))
            );
        }

        onClick(event) {
            document.querySelector('[data-view].active').classList.remove('active');
            event.target.classList.add('active');
            const type = "view";
            const text = event.target.dataset.view;
            this.dispatchUpdate({ type, text});
        }

    }

    if(!customElements.get('cor-dashboard-topnav')) {
        customElements.define('cor-dashboard-topnav', CorDashboardTopnav);
    }

    var Template$c = {
        render(stroke, radius, circumference, normalizedRadius) {
            return `
            ${this.html(stroke, radius, circumference, normalizedRadius)}
        `
        },

        html(stroke, radius, circumference, normalizedRadius) {
            return `
            <div class="cor-dashboard-spinning-loader"></div>
        `
        }
    };

    class CorDashboardSpinner extends Component {
        constructor() {
            super();
        }

        connectedCallback() {
            const stroke = this.getAttribute('stroke');
            const radius = this.getAttribute('radius');
            const normalizedRadius = radius - stroke * 2;
            this._circumference = normalizedRadius * 2 * Math.PI;

            this.innerHTML = Template$c.render(stroke, radius, this._circumference, normalizedRadius);
        }

    }

    if (!customElements.get('cor-dashboard-spinner')) {
        customElements.define('cor-dashboard-spinner', CorDashboardSpinner);
    }

    var Template$d = {
        render(view) {
            return `
            ${this.css()}
            ${this.html(view)}
        `
        },

        html(view) {
            
            switch(view) {
                case "detailed":
                    return `
                    <div class="cor-dashboard-main">
                        <cor-dashboard-detailed class="cor-dashboard-detailed"></cor-dashboard-detailed>
                    </div>
                `;
                    break;
                case "overview":
                    return `
                <div class="cor-dashboard-main">
                    <cor-dashboard-overview class="cor-dashboard-overview"></cor-dashboard-overview>
                </div>
                `;
                    break;
                default:
                   return `
                    <div class="cor-dashboard-main">
                        <cor-dashboard-spinner class="cor-dashboard-spinner"></cor-dashboard-spinner>
                    </div>
                `
            }
        },

        css() {
            return `
        `
        }
    };

    class CorDashboardMain extends Component {
       constructor() {
           super();
       }

       show(view, target) {
            this.innerHTML = Template$d.render(view, target);  
        }

        connectedCallback() {
            this.innerHTML = Template$d.render();
            this.classList.add('one');

            const {root} = this.root;

            /* Filter update */
            const filter = "filter";
            const view = "view";
            const update = () => {
                this.show(root.getAttribute(view),root.getAttribute(filter));
            };

            new MutationObserver(update).observe(root, {
                attributes: true,
                attributeFilter: [view]
            });

            /* Remove spinner */
            /*
            setTimeout(function(){
                this.innerHTML = Template.render("overview");
            }, 1000);
            */


            setTimeout(() => {
                this.innerHTML = Template$d.render("overview");
            }, 1000);

        }
    }

    if(!customElements.get('cor-dashboard-main')) {
       customElements.define('cor-dashboard-main', CorDashboardMain);
    }

    var Template$e = {
        render(filters) {
            return `
            ${this.html(filters)}
        `
        },

        html(filters) { 
            return `
            Selected filters: <ul>
                ${filters ? (filters.map(filter => {
                    if(filter !== "") {
                        return `
                            <li data-selectedFilter="${filter}">
                                ${filter} <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1.12556 0L12.381 11.8182L11.2554 13L1.98083e-05 1.18182L1.12556 0Z" fill="#C4C4C4"/>
                                <path d="M12.381 1.18182L1.12554 13L0 11.8182L11.2554 1.72588e-06L12.381 1.18182Z" fill="#C4C4C4"/>
                                </svg>
                            </li>`
                    }                }).join('')) : ``}
            </ul>
        `
        }
    };

    class CorDashboardSelectedFilters extends Component {
        constructor() {
            super();
        }

        updateRoot(element) {
            
            const text = element.parentNode.dataset.selectedfilter;
            const type = "remove-filter";
            
            this.dispatchUpdate({type, text});
            
        }

        connectedCallback() {
            const {root} = this.root;
            const filter = "filter";
            const update = () => {
                
                const filters = root.getAttribute("filter");
                if (filters !== "") {
                    this.innerHTML = Template$e.render(filters.split(' '));
                } else {
                    this.innerHTML = "";
                }
                const filterBtns = document.querySelectorAll('.cor-dashboard-selected-filters svg');
                [...filterBtns].map( filterBtn => filterBtn.addEventListener('click', event => this.updateRoot(event.target)));
            };

            new MutationObserver(update).observe(root, {
                attributes: true,
                attributeFilter: [filter]
            });
        }

    }

    if (!customElements.get('cor-dashboard-selected-filters')) {
        customElements.define('cor-dashboard-selected-filters', CorDashboardSelectedFilters);
    }

    var Template$f = {
        render() {
            return `
            ${this.html()}
        `;
        },

        html() {
            return `
        <ul class="cor-dashboard-filter__list cor-dashboard-filter__list--date">
        <li class="cor-dashboard-filter__list__item">
          <a
            class="cor-dashboard-filter__list__item__link "
            href="#"
            data-filter="today"
          >
            Today
          </a>
        </li>
      
        <li class="cor-dashboard-filter__list__item">
          <a
            class="cor-dashboard-filter__list__item__link "
            href="#"
            data-filter="thisweek"
          >
            This week
          </a>
        </li>
      
        <li class="cor-dashboard-filter__list__item">
          <a
            class="cor-dashboard-filter__list__item__link "
            href="#"
            data-filter="thismonth"
          >
            This month
          </a>
        </li>
      
        <li class="cor-dashboard-filter__list__item">
          <a
            class="cor-dashboard-filter__list__item__link "
            href="#"
            data-filter="thisyear"
          >
            This year
          </a>
        </li>
      
        <li class="cor-dashboard-filter__list__item">
          <div class="form-group">
            <label for="start">Start date:</label>
      
            <input
              class="form-control"
              type="date"
              id="start"
              name="date-start"
              value="2018-07-22"
            />
          </div>
          <div class="form-group">
            <label for="start">End date:</label>
      
            <input
              class="form-control"
              type="date"
              id="end"
              name="date-end"
              value="2018-07-22"
            />
          </div>
        </li>
      </ul>
      <button class="cor_button btn cor_button--after cor-dashboard-filtersbtn">Apply selection</button>
        `;
        }
    };

    class CorDashboardDateFilter extends Component {
        constructor() {
            super();
        }

        connectedCallback() {
            this.innerHTML = Template$f.render();
        }
    }

    if(!customElements.get('cor-dashboard-date-filter')) {
        customElements.define('cor-dashboard-date-filter', CorDashboardDateFilter);
    }

    var Template$g = {
        render() {
            return `${this.html()}`;
        },

        html() {
            return `
            <div class="js-menu cor-dashboard-menu">
                <div class="js-menu-contents cor-dashboard-menu__contents">
                    <button class="js-menu-toggle">
                        <div class="js-menu-title cor_button btn  cor-dashboard-filtersbtn">
                            <span>This month: Sep</span>
                            <svg width="14" aria-hidden="true" focusable="false" data-prefix="far" data-icon="calendar-alt" class="svg-inline--fa fa-calendar-alt fa-w-14" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M148 288h-40c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12zm108-12v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm96 0v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm-96 96v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm-96 0v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm192 0v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm96-260v352c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V112c0-26.5 21.5-48 48-48h48V12c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v52h128V12c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v52h48c26.5 0 48 21.5 48 48zm-48 346V160H48v298c0 3.3 2.7 6 6 6h340c3.3 0 6-2.7 6-6z"></path></svg>
                        </div>
                    </button>
                    <div class="cor-dashboard-menu-items">
                        <cor-dashboard-date-filter class="cor-dashboard-date-filter"></cor-dashboard-date-filter>
                    </div>
                </div>
            </div>
        `;
        }
    };

    class CorDashboardDateBtn extends Component {
        constructor() {
            super();
        }

        connectedCallback() {
            this.innerHTML = Template$g.render();

            this._menu = document.querySelector('.js-menu');        
            this._menuContents = this._menu.querySelector('.js-menu-contents');
            
            this._menuToggleButton = this._menu.querySelector('.js-menu-toggle');
            this._menuTitle = this._menu.querySelector('.js-menu-title');

            this._expanded = true;
            this._animate = false;
            this._duration = 200;
            this._frameTime = 1000/60;
            this._nFrames = Math.round(this._duration / this._frameTime);
            this._collapsed;

            this.expand = this.expand.bind(this);
            this.collapse = this.collapse.bind(this);
            this.toggle = this.toggle.bind(this);

            this._calculateScales();
            this._createEaseAnimation();
            this._addEventListeners();

            this.collapse();
            this.activate();
            
        }

        activate() {
            this._menu.classList.add('menu--active');
            this._animate = true;
        }

        collapse() {
            if (!this._expanded) return;
            this._expanded = false;

            const {x, y} = this._collapsed;
            const invX = 1 / x;
            const invY = 1 / y;
            this._menu.style.transform = `scale(${x}, ${y})`;
            this._menuContents.style.transform = `scale(${invX}, ${invY})`;

            if (!this._animate) return;

            this._applyAnimation({expand: false});
        }

        expand() {
            if (this._expanded) return;
            this._expanded = true;
            this._menu.style.transform = `scale(1, 1)`;
            this._menuContents.style.transform = `scale(1, 1)`;

            if (!this._animate) return;

            this._applyAnimation({expand: true});
        }

        toggle() {
            if (this._expanded) {
                this.collapse();
                return;
            }

            this.expand();
        }

        _addEventListeners() {
            this._menuToggleButton.addEventListener('click', this.toggle);
        }

        _applyAnimation({expand}=opts) {
            this._menu.classList.remove('menu--expanded');
            this._menu.classList.remove('menu--collapsed');
            this._menuContents.classList.remove('menu__contents--expanded');
            this._menuContents.classList.remove('menu__contents--collapsed');

            // Force a recalc styles here so the classes take hold.
            window.getComputedStyle(this._menu).transform;

            if (expand) {
                this._menu.classList.add('menu--expanded');
                this._menuContents.classList.add('menu__contents--expanded');
                return;
            }

            this._menu.classList.add('menu--collapsed');
            this._menuContents.classList.add('menu__contents--collapsed');
        }

        _calculateScales() {
            const collapsed = this._menuTitle.getBoundingClientRect();
            const expanded = this._menu.getBoundingClientRect();

            this._collapsed = {
                x: collapsed.width / expanded.width,
                y: collapsed.height / expanded.height
            };
        }

        _createEaseAnimation() {
            let menuEase = document.querySelector('.menu-ease');
            if(menuEase) return menuEase;

            menuEase = document.createElement('style');
            menuEase.classList.add('menu-ease');

            const menuExpandAnimation = [];
            const menuExpandContentsAnimation = [];
            const menuCollapseAnimation = [];
            const menuCollapseContentsAnimation = [];

            const percentIncrement = 100 / this._nFrames;

            for (let i = 0; i <= this._nFrames; i++) {
                const step = this._ease(i / this._nFrames).toFixed(5);
                const percentage = (i * percentIncrement).toFixed(5);
                const startX = this._collapsed.x;
                const startY = this._collapsed.y;
                const endX = 1;
                const endY = 1;

                // Expand animation
                this._append({
                    percentage,
                    step,
                    startX,
                    startY,
                    endX,
                    endY,
                    outerAnimation : menuExpandAnimation,
                    innerAnimation : menuExpandContentsAnimation
                });

                // Collapse animation
                this._append({
                    percentage,
                    step,
                    startX: 1,
                    startY: 1,
                    endX: this._collapsed.x,
                    endY: this._collapsed.y,
                    outerAnimation : menuCollapseAnimation,
                    innerAnimation : menuCollapseContentsAnimation
                });
            }

            menuEase.textContent = `
            @keyframes menuExpandAnimation {
                ${menuExpandAnimation.join('')}
            }

            @keyframes menuExpandContentsAnimation {
                ${menuExpandContentsAnimation.join('')}
            }

            @keyframes menuCollapseAnimation {
                ${menuCollapseAnimation.join('')}
            }
          
            @keyframes menuCollapseContentsAnimation {
                ${menuCollapseContentsAnimation.join('')}
            }`;

                document.head.appendChild(menuEase);
                return menuEase;
        }

        _append ({
            percentage,
            step,
            startX,
            startY,
            endX,
            endY,
            outerAnimation,
            innerAnimation} = opts) {

            const xScale = (startX + (endX - startX) * step).toFixed(5);
            const yScale = (startY + (endY - startY) * step).toFixed(5);

            const invScaleX = (1 / xScale).toFixed(5);
            const invScaleY = (1 / yScale).toFixed(5);

            outerAnimation.push(`
            ${percentage}% {
                transform: scale(${xScale}, ${yScale});
        }`);

            innerAnimation.push(`
            ${percentage}% {
                transform: scale(${invScaleX}, ${invScaleY});
        }`);
        }

        _clamp (value, min, max) {
            return Math.max(min, Math.min(max, value));
        }

        _ease (v, pow = 4) {
            v = this._clamp(v, 0, 1);

            return 1 - Math.pow(1 - v, pow);
        }

        
    }

    if (!customElements.get('cor-dashboard-date-btn')) {
        customElements.define('cor-dashboard-date-btn', CorDashboardDateBtn);
    }

    var Template$h = {
      render(globalData) {
        return `${this.css()}
    ${this.html(globalData)}`;
      },

      html(globalData) {
        return `
    <div class="cor-dashboard">
        <!-- Sidebar -->
        <aside class="sidebar cor-dashboard__sidebar">
          <cor-dashboard-nav class="cor-dashboard-nav"></cor-dashboard-nav>
          
          <button class="cor-dashboard-slidebtn">
            <span></span>
            <span></span>
            <span></span>
          </button>

        </aside>
        <!-- /Sidebar -->

        <!-- Main -->
        <main role="main">
          
          <header class="cor-dashboard-header">
            <div class="cor-dashboard-header-img-container">
              <img src="public/images/CoRlogo.png" />
            </div>
            <h1>Dashboard 3</h1>
            
            <cor-dashboard-topnav class="cor-dashboard-topnav"></cor-dashboard-topnav>
          </header>

          <div class="cor-dashboard-top-tools">
            <cor-dashboard-selected-filters class="cor-dashboard-selected-filters"></cor-dashboard-selected-filters>
            
            <button class="cor_button btn">
              <svg width="20px" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="grip-horizontal" class="svg-inline--fa fa-grip-horizontal fa-w-14" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M96 288H32c-17.67 0-32 14.33-32 32v64c0 17.67 14.33 32 32 32h64c17.67 0 32-14.33 32-32v-64c0-17.67-14.33-32-32-32zm160 0h-64c-17.67 0-32 14.33-32 32v64c0 17.67 14.33 32 32 32h64c17.67 0 32-14.33 32-32v-64c0-17.67-14.33-32-32-32zm160 0h-64c-17.67 0-32 14.33-32 32v64c0 17.67 14.33 32 32 32h64c17.67 0 32-14.33 32-32v-64c0-17.67-14.33-32-32-32zM96 96H32c-17.67 0-32 14.33-32 32v64c0 17.67 14.33 32 32 32h64c17.67 0 32-14.33 32-32v-64c0-17.67-14.33-32-32-32zm160 0h-64c-17.67 0-32 14.33-32 32v64c0 17.67 14.33 32 32 32h64c17.67 0 32-14.33 32-32v-64c0-17.67-14.33-32-32-32zm160 0h-64c-17.67 0-32 14.33-32 32v64c0 17.67 14.33 32 32 32h64c17.67 0 32-14.33 32-32v-64c0-17.67-14.33-32-32-32z"></path></svg>
            </button>

            <button class="cor_button btn">
              <svg width="20px" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="grip-lines" class="svg-inline--fa fa-grip-lines fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M496 288H16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h480c8.8 0 16-7.2 16-16v-32c0-8.8-7.2-16-16-16zm0-128H16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h480c8.8 0 16-7.2 16-16v-32c0-8.8-7.2-16-16-16z"></path></svg>
            </button>

            <cor-dashboard-date-btn class="cor-dashboard-date-btn"></cor-dashboard-date-btn>

            
          </div>
        
          <cor-dashboard-main class="cor-dashboard-main"></cor-dashboard-main>

        </main>
        <!-- /Main -->
      
    </div>
    `
      },

      css() {
        return `
    `
      }
    };

    /*
      The root component listens to dispatched actions and updates its
      properties based on action types. The objects, arrays, etc. assigned
      to these properties are the single source of truth and represent
      the global app state. The element's attributes are also updated so
      that components observing them can react to specific state changes.
      Global app state from @bdc
    */


    class CorDashboard extends Component {
      constructor() {
        super();
      }

      connectedCallback() {
        // this.attachShadow({ mode: 'open' });
        this.innerHTML = Template$h.render(this.globalData.DATA);
        this.addEventListener("state-update", this.store);

        // Resize event
        window.onresize = this.ifResize();
      }

      ifResize() {
          if (window.innerWidth < 830) {
            document.querySelector('body').classList.toggle('is-collapsed');
          }  }

      store({detail}) {
        switch (detail.type) {
          case "change-name":
            this.update("user-name", detail.text);
            break;
          case "filter":
              this.updateFilter("filter", detail.text);
              break;
          case "remove-filter":
                this.remove("filter", detail.text);
                break;
          case "view":
              this.updateView("view", detail.text);
              break;
          case "reset":
            this.setAttribute("view", "");
            this.setAttribute("filter", "");
        }
      }

      updateView(key, value) {
        if(this[key]){
          this[key] = value;
        } else {
          this.setAttribute(key, value);
        }
      }

      updateFilter(key, value) {
        // Check if attribute exists
        let valuesOfAttribute = this.getAttribute(key);
        
        
        if(valuesOfAttribute) {
          // Get an array of values
          valuesOfAttribute = valuesOfAttribute.split(' ');

          // Add the new value if it doesn't exist
          if(!valuesOfAttribute.includes(value)) {
            const newListOfVAlues = valuesOfAttribute.join(' ') + ' ' + value;
            this.setAttribute(key, newListOfVAlues);
          }
        } else {
          this.setAttribute(key, value);
        }

      }

      remove(key, value) {
        this[key] = value;
        let valuesOfAttribute = this.getAttribute(key);
        
        valuesOfAttribute = valuesOfAttribute.split(' ');

        valuesOfAttribute = valuesOfAttribute.filter(el => el !== value);

        this.setAttribute(key, valuesOfAttribute.join(' '));
        
        // remove active state on filters in left nav
        if (key & value) {
          document.querySelector(`[data-${key}=${value}]`).classList.remove('active');
        }
        
      }

      

    }

    if (!customElements.get('cor-dashboard')) {
      customElements.define('cor-dashboard', CorDashboard);
    }

    return CorDashboard;

}));
//# sourceMappingURL=cor-dashboard.js.map
