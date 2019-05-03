(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
    typeof define === 'function' && define.amd ? define(factory) :
    (global = global || self, global.slider = factory());
}(this, function () { 'use strict';

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
            this.root = document.body.firstElementChild;
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
                    <button class="cor-dashboard-filter__list__item__link cor-dashboard-filter__list__item__link--${filter.icon}" data-toggle="collapse" data-expandtarget="${filter.filterName}" aria-expanded="false" aria-controls="collapseExample">
                        ${filter.name}
                    </button>
                </h2>
                <ul class="cor-dashboard-filter__list" id="${filter.filterName}">
                    ${filter.items.map( item => `
                        <li class="cor-dashboard-filter__list__item">

                            ${item.name === "Personalised" ? `
                                <div>
                                    <label for="start">Start date:</label>

                                    <input type="date" id="start" name="trip-start"
                                    value="2018-07-22"
                                    min="2018-01-01" max="2018-12-31">
                                </div>
                                <div>
                                    <label for="start">End date:</label>

                                    <input type="date" id="start" name="trip-start"
                                        value="2018-07-22"
                                        min="2018-01-01" max="2018-12-31">
                                </div>
                            ` : `
                            <a class="cor-dashboard-filter__list__item__link" href="#" data-filter="${item.target}">
                                ${item.name}
                            </a>
                            `}


                            ${item.subitems ? 
                            `
                            <ul>
                                ${item.subitems.map(
                                    item => `
                                    <li><a class="cor-dashboard-filter__list__item__link" href="#" data-target="${item.target}">${item.name}</a></li>
                                `
                                ).join('')} 
                            </ul>` : 
                            ``
                            }
                        </li>
                    `).join('')}
                </ul>
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
            filterName: "contenttype",
            icon: "contenttypes",
            items: [
                {
                    name: "News",
                    target: "news",
                    subitems: [
                        {
                        name: "Regional news"
                        },
                        {
                        name: "Press release"
                        },
                        {
                        name: "Success story"
                        }
                    ]
                },
                {
                name: "Events",
                target: "events"
                },
                {
                name: "Opinions",
                target: "opinions"
                },
                {
                name: "Studies",
                target: "studies"
                },
                {
                name: "Brochures",
                target: "brochures"
                }
            ]
        },
        {
            name: "Themes",
            filterName: "themes",
            icon: "themes",
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
                    target: ""
                },
                {
                    name: "This week",
                    target: ""
                },
                {
                    name: "This month",
                    target: ""
                },
                {
                    name: "This year",
                    target: ""
                },
                {
                    name: "Personalised",
                    target: ""
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
            this.innerHTML = Template.render(data);
            

                    
        }

        connectedCallback() {
            // filters events
            this._triggers = this.querySelectorAll('[data-filter]');
            this._triggers.forEach(
                trigger => trigger.addEventListener('click', e => this.onClick(e))
            );

            // open close events
            this._expandTriggers = this.querySelectorAll('[data-expandtarget]');
            this._expandTriggers.forEach(
                trigger => trigger.addEventListener('click', e => this.onClickOnExpandCollapse(e))
            );
        }  
        
        onClick(event) {
            // this.show(event.target.dataset.target);
            const text = event.target.dataset.filter;
            

            if (event.target.classList.contains('active')) {
                const type = "remove-filter";
                event.target.classList.remove('active');
                this.dispatchUpdate({type, text});
            } else {
                const type = "filter";
                event.target.classList.add('active');
                this.dispatchUpdate({type, text});
            }    }

        onClickOnExpandCollapse(event) {
            const expandCollapseTarget = document.querySelector(`#${event.target.dataset.expandtarget}`);
            const parent = event.target.parentNode.parentNode;

            console.log(this);
            console.log("is collapsed?",this._collapsed);

            if(!parent.classList.contains("js-collapsed")) {
                this.collapse(expandCollapseTarget);
                parent.classList.add('js-collapsed');
            } else {
                this.expand(expandCollapseTarget);
                parent.classList.remove('js-collapsed');
            }
        }

        expand(target) {
            console.log("expand");

            target.style.height = "";
            this._collapsed = false;
        }

        collapse(target) {
            console.log("collapse");

            target.style.height = 0;
            this._collapsed = true;
        }

    }

    if (!customElements.get('cor-dashboard-filter')) {
        customElements.define('cor-dashboard-filter', CorDashboardFilter);
    }

    const navitems = [

          {
            name: "Dashboard",
            icon: "home",
            target: ""
          }
    ];


    var Template$1 = {
      render() {
        return `${this.css()}
    ${this.html()}`;
      },

      html() {
        return `

    <!-- Menu -->
    <ul class="cor-dashboard__nav">
        ${navitems.map(navitem => `
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
        this.innerHTML = Template$1.render();
      }

      connectedCallback() {
       
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
            this.innerHTML = Template$2.render();
        }

        connectedCallback() {
            
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
        "value": 80,
        "link": "https://facebook.github.io/react/"
      }, {
        "label": "Events",
        "value": 100,
        "link": "https://redux.js.org/"
      }, {
        "label": "Opinions",
        "value": 25,
        "link": "https://vuejs.org/"
      }, {
        "label": "Studies",
        "value": 15,
        "link": "https://angularjs.org/"
      }, {
        "label": "Brochures",
        "value": 5,
        "link": "https://meteorhacks.com/meteor-js-web-framework-for-everyone"
      }];

      

    class CorDashboardDonutChart extends Component {
        constructor() {
            super();
            this.innerHTML = Template$3.render();

        }

        connectedCallback() {
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

            // Define arc colours
            const colour = d3.scaleOrdinal(d3.schemeCategory10);
            

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
            .attr("fill", function(d, i) {
                return colour(i);
            });

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
            .style("background-color", function(d, i) {
                return colour(i);
            });

          

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
            this.innerHTML = Template$4.render();
        }

        connectedCallback() {
            const data = this.parentNode.getAttribute("data-data");
            this.chart(JSON.parse(data), this);
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

            // Creation of the chart
            d3.select(target.querySelector(".chart"))
                .attr('height', height)
                .selectAll('div').data(data)
                .enter().append('div').append('div')
                .style('height', d => yScale(d.total) + "px")
                .append('span').text( d => `${d.label} ${d.total}`);
        
            

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
            console.log(chart, view);
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
                    <a class="cor-dashboard-chart__backbtn cor_button btn" id="cor-dashboard-chart__backbtn">Back</a>
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
            
            // Get the type of chart
            const typeOfChart = this.dataset.charttype;

            this.innerHTML = Template$5.render(typeOfChart);
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
            console.log(data);
            return `
            ${data.map( card => `
                <!-- Card item -->
                <div class="cor-dashboard-card" category="${card.category}" size="${card.size}">
                    
                    <!-- Title of the card -->
                    <h2 class="cor-dashboard-card__title">
                        <span>${card.title}</span>
                        <span class="cor-dashboard-card__title__total">
                            <span>${card.total}</span>
                        </span>
                    </h2>
                    <!-- /Title of the card -->
                    
                    <!-- Content of the card -->
                    <div class="cor-dashboard-card__body">

                        <!-- Cards with chart -->
                        ${ (card.itemdata) ?                     
                            `
                            <div>
        
                                <cor-dashboard-chart class="cor-dashboard-chart" 
                                    data-charttype="${card.charttype}" 
                                    
                                    data-data=
                                '[${createDataAttribute(card.itemdata)}]'>
                                </cor-dashboard-chart>
        
                            </div>
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
            this.innerHTML = Template$6.render(this.globalData.DATA);
        }

        show(filter) {
            console.log("filter:", filter);
            if (filter === "") {
                this.innerHTML = Template$6.render(this.globalData.DATA);
            } else {
                console.log("filtering on:",filter);
                this.innerHTML = Template$6.render(this.globalData.DATA.filter( el => el.category === filter));
            }
        }

        connectedCallback() {
            const {root} = this.root;

            /* Filter update */
            const filter = "filter";
            const update = () => {
                console.log(`Overview filtered on ${filter}`);
                this.show(root[filter]);
            };

            new MutationObserver(update).observe(root, {
                attributes: true,
                attributeFilter: [filter]
            });
        }
      
        chart(data) {
            console.log(data);
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
            this.innerHTML = Template$8.render();
        }
    }

    if(!customElements.get('cor-dashboard-detailed-item')) {
        customElements.define('cor-dashboard-detailed-item', CorDashboardDetailedItem);
    }

    var Template$9 = {
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

            <article class="cor-dashboard-detailed-item">

                <p class="cor-dashboard-detailed-item__contenttype">${item.contenttype}</p>
                
                <img src="${item.picture}" />
                
                <div>
                    
                    <h1 class="cor-dashboard-article__title">${item.title}</h1>
                    <p class="cor-dashboard-article__details">
                        ${item.label ? `<span class="cor-dashboard-article__label ${item.label === "Press release" ? "cor-dashboard-article__label--pressrelease" : ""} ${item.label === "Regional news" ? "cor-dashboard-article__label--regionalnews" : ""} ${item.label === "Success story" ? "cor-dashboard-article__label--successstory" : ""} ${item.label === "International cooperation" ? "cor-dashboard-article__label--internationalcoop" : ""}">${item.label}</span>`: ``}
                        <span>${item.date}</span>
                        ${item.theme ? `&nbsp;|&nbsp;<span>${item.theme}</span>`: ``}
                    </p>
                    <p class="cor-dashboard-detailed-item__intro-container">
                        <span >${item.intro}</span>
                    </p>
                    
                </div>

                <ul class="cor-dashboard-detailed-item__languages-list">
                    
                        ${item.languages.map( language => `
                            <li class="cor-dashboard-detailed-item__languages-list__item">
                            <div class="cor-dashboard-languages-overview" data-status="${language.status}">
                                <span title="language" data-lang="${language.label}">${language.label}</span>
                            </div>
                            </li>
                        `).join('')}
                        
                    </ul>

            </article>
              

            
              ` ).join('')}
            
        `
        },

        css() {
            return `
            <link rel="stylesheet" href="src/components/cor-dashboard-detailed/cor-dashboard-detailed.css" />
            <link rel="stylesheet" href="src/components/cor-dashboard-detailed-item/cor-dashboard-detailed-item.css" />
        `
        }
    };

    class CorDashboardDetailed extends Component {
        constructor() {
            super();
            this.innerHTML = Template$9.render(this.globalData.ITEMS);
        }
    }

    if(!customElements.get('cor-dashboard-detailed')) {
        customElements.define('cor-dashboard-detailed', CorDashboardDetailed);
    }

    var Template$a = {
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
            this.innerHTML = Template$a.render();
        }

        connectedCallback() {
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

    var Template$b = {
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
                    <div class="cor-dashboard-main" style="opacity:0; transform: translateY(-200px);">
                        <cor-dashboard-detailed class="cor-dashboard-detailed"></cor-dashboard-detailed>
                    </div>
                `;
                    break;
                default:
                   return `
                    <div class="cor-dashboard-main" style="opacity:0; transform: translateY(-200px);">
                        <cor-dashboard-overview class="cor-dashboard-overview"></cor-dashboard-overview>
                    </div>
                `
            }
        },

        css() {
            return `
            <link rel="stylesheet" href="src/components/cor-dashboard-main/cor-dashboard-main.css" />
        `
        }
    };

    class CorDashboardMain extends Component {
       constructor() {
           super();
           this.innerHTML = Template$b.render();
           this.classList.add('one');
       }

       show(view, target) {
        console.log("view:",view,"target:",target);

        this.innerHTML = Template$b.render(view, target);  
    }

    connectedCallback() {
        this.classList.add('two');

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

    }
    }

    if(!customElements.get('cor-dashboard-main')) {
       customElements.define('cor-dashboard-main', CorDashboardMain);
    }

    var Template$c = {
        render(filters) {
            return `
            ${this.html(filters)}
        `
        },

        html(filters) {        
            return `
            Selected filters: <ul>
                ${filters ? filters.map(filter => {
                    if(filter !== "") {
                        return `
                            <li>
                                ${filter} <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1.12556 0L12.381 11.8182L11.2554 13L1.98083e-05 1.18182L1.12556 0Z" fill="#C4C4C4"/>
                                <path d="M12.381 1.18182L1.12554 13L0 11.8182L11.2554 1.72588e-06L12.381 1.18182Z" fill="#C4C4C4"/>
                                </svg>
                            </li>`
                    }                }).join(''): ``}
            </ul>
        `
        }
    };

    class CorDashboardSelectedFilters extends Component {
        constructor() {
            super();
            // this.innerHTML = Template.render(filters);
        }

        connectedCallback() {
            const {root} = this.root;

            const filter = "filter";
            const update = () => {
                const filters = root.getAttribute(filter);
                this.innerHTML = Template$c.render([filters]);
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

    var Template$d = {
      render(globalData) {
        return `${this.css()}
    ${this.html(globalData)}`;
      },

      html(globalData) {
        return `
    <div class="cor-dashboard">
      <nav class="cor-dashboard-navbar navbar navbar-dark fixed-top flex-md-nowrap p-0 shadow">
        <a class="navbar-brand col-sm-3 col-md-2 mr-0" href="#">European Committee of the Regions</a>
      </nav>
      
        <div class="row no-gutters">
        <!-- Sidebar -->
        <aside class="col-4 col-md-3 col-xl-2 d-md-block bg-light sidebar cor-dashboard__sidebar">
          <cor-dashboard-nav></cor-dashboard-nav>
        </aside>
        <!-- /Sidebar -->

        <!-- Main -->
        <main role="main" class="col-8 col-md-9 col-xl-10 ml-sm-auto">
          
          <header class="cor-dashboard-header">
            <img src="public/images/CoRlogo.png" />
            <h1>Dashboard</h1>
            
            <cor-dashboard-topnav class="cor-dashboard-topnav"></cor-dashboard-topnav>
          </header>

          <cor-dashboard-selected-filters class="cor-dashboard-selected-filters"></cor-dashboard-selected-filters>
        
          <cor-dashboard-main></cor-dashboard-main>

        </main>
        <!-- /Main -->
      </div>
      
    </div>
    `
      },

      css() {
        return `
      <link rel="stylesheet" href="src/components/cor-dashboard/cor-dashboard.css"/>
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
        // this.attachShadow({ mode: 'open' });
        this.innerHTML = Template$d.render(this.globalData.DATA);
        this.addEventListener("state-update", this.store);
      }

      store({detail}) {
        console.log("in store");
        switch (detail.type) {
          case "change-name":
            console.log("in change name");
            this.update("user-name", detail.text);
            break;
          case "filter":
            console.log("in filter");
              this.update("filter", detail.text);
              break;
          case "remove-filter":
            console.log("in remove filter");
                this.remove("filter", detail.text);
                break;
          case "view":
            console.log("in view");
              this.update("view", detail.text);
              break;
        }
      }

      update(key, value) {
        console.log("in update", key, value);
        if(this[key]){
          this[key] = value;
        } else {
          this.setAttribute(key, value);
        }

        let valuesOfAttribute = this.getAttribute(key);
        
        if(valuesOfAttribute) {
          valuesOfAttribute = valuesOfAttribute.split(' ');

          if(!valuesOfAttribute.includes(value)) {
            const newListOfVAlues = valuesOfAttribute.join(' ') + ' ' + value;
            this.setAttribute(key, newListOfVAlues);
          }
        } 

        

      }

      remove(key, value) {
        console.log("in remove", key, value);
        this[key] = value;
        let valuesOfAttribute = this.getAttribute(key);
        
        valuesOfAttribute = valuesOfAttribute.split(' ');

        
        valuesOfAttribute = valuesOfAttribute.filter(el => el !== value);

        this.setAttribute(key, valuesOfAttribute.join(' '));

      }

      connectedCallback() {
        
      }

    }

    if (!customElements.get('cor-dashboard')) {
      customElements.define('cor-dashboard', CorDashboard);
    }

    return CorDashboard;

}));
//# sourceMappingURL=cor-dashboard.js.map
