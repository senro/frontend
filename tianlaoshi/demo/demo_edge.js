/*jslint */
/*global AdobeEdge: false, window: false, document: false, console:false, alert: false */
(function (compId) {

    "use strict";
    var im='images/',
        aud='media/',
        vid='media/',
        js='js/',
        fonts = {
        },
        opts = {
            'gAudioPreloadPreference': 'auto',
            'gVideoPreloadPreference': 'auto'
        },
        resources = [
        ],
        scripts = [
        ],
        symbols = {
            "stage": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'person',
                            type: 'image',
                            rect: ['396px', '-64px', '876px', '876px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"Pasted-1.jpg",'0px','0px'],
                            transform: [[],[],[],['0.79','0.79']]
                        },
                        {
                            id: 'banner',
                            symbolName: 'banner',
                            type: 'rect',
                            rect: ['-144px', '170px', '1105', '586', 'auto', 'auto']
                        },
                        {
                            id: 'logo',
                            type: 'image',
                            rect: ['61px', '43px', '236px', '76px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"Pasted-4.jpg",'0px','0px']
                        },
                        {
                            id: 'leftDot',
                            type: 'image',
                            rect: ['-127px', '246px', '39px', '36px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"leftDot.png",'0px','0px']
                        },
                        {
                            id: 'rigthDot',
                            type: 'image',
                            rect: ['720px', '493px', '39px', '35px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"rigthDot.png",'0px','0px']
                        },
                        {
                            id: 'des',
                            type: 'text',
                            rect: ['123px', '253px', 'auto', 'auto', 'auto', 'auto'],
                            opacity: '0',
                            text: "<p style=\"margin: 0px;\">​精品设计</p>",
                            font: ['Arial, Helvetica, sans-serif', [42, "px"], "rgba(0,0,0,1)", "normal", "none", "", "break-word", "nowrap"]
                        },
                        {
                            id: 'tit',
                            type: 'text',
                            rect: ['123px', '201px', 'auto', 'auto', 'auto', 'auto'],
                            opacity: '0',
                            text: "<p style=\"margin: 0px;\">​优衣库</p>",
                            font: ['Arial, Helvetica, sans-serif', [42, "px"], "rgba(0,0,0,1)", "normal", "none", "", "break-word", "nowrap"]
                        }
                    ],
                    style: {
                        '${Stage}': {
                            isStage: true,
                            rect: ['null', 'null', '1280px', '720px', 'auto', 'auto'],
                            overflow: 'hidden',
                            fill: ["rgba(241,239,239,1.00)"]
                        }
                    }
                },
                timeline: {
                    duration: 3382.36328125,
                    autoPlay: true,
                    data: [
                        [
                            "eid87",
                            "left",
                            3000,
                            382,
                            "easeOutBack",
                            "${des}",
                            '507px',
                            '123px'
                        ],
                        [
                            "eid77",
                            "opacity",
                            2759,
                            241,
                            "linear",
                            "${rigthDot}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid70",
                            "scaleX",
                            2000,
                            750,
                            "easeInOutCubic",
                            "${person}",
                            '1',
                            '0.79'
                        ],
                        [
                            "eid59",
                            "scaleX",
                            2000,
                            500,
                            "easeInOutCubic",
                            "${banner}",
                            '1',
                            '0.52'
                        ],
                        [
                            "eid82",
                            "left",
                            3000,
                            382,
                            "easeInOutCubic",
                            "${tit}",
                            '507px',
                            '123px'
                        ],
                        [
                            "eid81",
                            "opacity",
                            3000,
                            382,
                            "linear",
                            "${tit}",
                            '0',
                            '1'
                        ],
                        [
                            "eid86",
                            "opacity",
                            3000,
                            382,
                            "linear",
                            "${des}",
                            '0',
                            '1'
                        ],
                        [
                            "eid74",
                            "left",
                            2750,
                            250,
                            "linear",
                            "${leftDot}",
                            '-127px',
                            '62px'
                        ],
                        [
                            "eid65",
                            "left",
                            2000,
                            0,
                            "easeInOutCubic",
                            "${person}",
                            '396px',
                            '396px'
                        ],
                        [
                            "eid69",
                            "opacity",
                            2000,
                            750,
                            "easeInOutCubic",
                            "${person}",
                            '0',
                            '1'
                        ],
                        [
                            "eid61",
                            "left",
                            2000,
                            500,
                            "easeInOutCubic",
                            "${banner}",
                            '85px',
                            '-144px'
                        ],
                        [
                            "eid71",
                            "scaleY",
                            2000,
                            750,
                            "easeInOutCubic",
                            "${person}",
                            '1',
                            '0.79'
                        ],
                        [
                            "eid72",
                            "top",
                            2000,
                            750,
                            "easeInOutCubic",
                            "${person}",
                            '-156px',
                            '-64px'
                        ],
                        [
                            "eid62",
                            "top",
                            2000,
                            500,
                            "easeInOutCubic",
                            "${banner}",
                            '66px',
                            '170px'
                        ],
                        [
                            "eid60",
                            "scaleY",
                            2000,
                            500,
                            "easeInOutCubic",
                            "${banner}",
                            '1',
                            '0.52'
                        ]
                    ]
                }
            },
            "rects": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'rect',
                            id: 'Rectangle',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            rect: ['32px', '30px', '1154px', '583px', 'auto', 'auto'],
                            fill: ['rgba(255,255,255,1.00)']
                        },
                        {
                            type: 'rect',
                            id: 'RectangleCopy',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            rect: ['1px', '0px', '14px', '644px', 'auto', 'auto'],
                            fill: ['rgba(255,255,255,1.00)']
                        },
                        {
                            type: 'rect',
                            id: 'RectangleCopy4',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            rect: ['1200px', '0px', '14px', '644px', 'auto', 'auto'],
                            fill: ['rgba(255,255,255,1.00)']
                        },
                        {
                            type: 'rect',
                            id: 'RectangleCopy3',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            rect: ['0px', '630px', '1214px', '14px', 'auto', 'auto'],
                            fill: ['rgba(255,255,255,1.00)']
                        },
                        {
                            type: 'rect',
                            id: 'RectangleCopy2',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            rect: ['0px', '0px', '1214px', '14px', 'auto', 'auto'],
                            fill: ['rgba(255,255,255,1.00)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '1214px', '644px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [

                    ]
                }
            },
            "TEXT_SCAN": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            font: ['Arial, Helvetica, sans-serif', [64, 'px'], 'rgba(0,0,0,1)', '900', 'none', '', 'break-word', 'nowrap'],
                            id: 'Text',
                            text: '<p style=\"margin: 0px;\">​扫描二维码</p>',
                            type: 'text',
                            rect: ['0px', '0px', 'auto', 'auto', 'auto', 'auto']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '320px', '74px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [

                    ]
                }
            },
            "TEXT_ENTER": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            font: ['Arial, Helvetica, sans-serif', [64, 'px'], 'rgba(0,0,0,1)', '900', 'none', '', 'break-word', 'nowrap'],
                            id: 'TextCopy',
                            text: '<p style=\"margin: 0px;\">进入网上店铺</p>',
                            type: 'text',
                            rect: ['0px', '0px', 'auto', 'auto', 'auto', 'auto']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '384px', '74px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [

                    ]
                }
            },
            "TEXT_GETKNOW": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            font: ['Arial, Helvetica, sans-serif', [64, 'px'], 'rgba(0,0,0,1)', '900', 'none', '', 'break-word', 'nowrap'],
                            id: 'TextCopy2',
                            text: '<p style=\"margin: 0px;\">了解最新活动咨询</p>',
                            type: 'text',
                            rect: ['0px', '0px', 'auto', 'auto', 'auto', 'auto']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '512px', '74px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [

                    ]
                }
            },
            "TEXT_WELCOME": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            font: ['Arial, Helvetica, sans-serif', [64, 'px'], 'rgba(0,0,0,1)', '900', 'none', '', 'break-word', 'nowrap'],
                            id: 'TextCopy3',
                            text: '<p style=\"margin: 0px;\">WELCOME</p>',
                            type: 'text',
                            rect: ['0px', '0px', 'auto', 'auto', 'auto', 'auto']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '334px', '74px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [

                    ]
                }
            },
            "TEXT_URL": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            font: ['Arial, Helvetica, sans-serif', [64, 'px'], 'rgba(0,0,0,1)', '100', 'none', '', 'break-word', 'nowrap'],
                            id: 'TextCopy4',
                            text: '<p style=\"margin: 0px;\"><span style=\"font-size: 38px;\">HTTP://WWW.TMALL.COM/SHOP</span></p>',
                            type: 'text',
                            rect: ['0px', '0px', 'auto', 'auto', 'auto', 'auto']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '590px', '74px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [

                    ]
                }
            },
            "banner": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            transform: [[], [], [], ['0.91', '0.91']],
                            id: 'rects',
                            symbolName: 'rects',
                            rect: ['-55px', '-29px', '1214', '644', 'auto', 'auto'],
                            type: 'rect'
                        },
                        {
                            transform: [[], [], [], ['1', '0']],
                            rect: ['278px', '463px', '590', '74', 'auto', 'auto'],
                            id: 'TEXT_URL',
                            symbolName: 'TEXT_URL',
                            opacity: '0',
                            type: 'rect'
                        },
                        {
                            transform: [[], [], [], ['0.5', '0.5']],
                            rect: ['98px', '352px', '334', '74', 'auto', 'auto'],
                            id: 'TEXT_WELCOME',
                            symbolName: 'TEXT_WELCOME',
                            opacity: '0',
                            type: 'rect'
                        },
                        {
                            transform: [[], [], [], ['1', '0']],
                            rect: ['86px', '240px', '512', '74', 'auto', 'auto'],
                            id: 'TEXT_GETKNOW',
                            symbolName: 'TEXT_GETKNOW',
                            opacity: '0',
                            type: 'rect'
                        },
                        {
                            transform: [[], [], [], ['1', '0']],
                            rect: ['86px', '157px', '384', '74', 'auto', 'auto'],
                            id: 'TEXT_ENTER',
                            symbolName: 'TEXT_ENTER',
                            opacity: '0',
                            type: 'rect'
                        },
                        {
                            transform: [[], [], [], ['1', '0']],
                            rect: ['86px', '58px', '320', '74', 'auto', 'auto'],
                            id: 'TEXT_SCAN',
                            symbolName: 'TEXT_SCAN',
                            opacity: '0',
                            type: 'rect'
                        },
                        {
                            rect: ['403px', '73px', '303px', '305px', 'auto', 'auto'],
                            id: 'qrcode',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/Pasted.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '1105px', '586px']
                        }
                    }
                },
                timeline: {
                    duration: 2000,
                    autoPlay: true,
                    data: [
                        [
                            "eid3",
                            "opacity",
                            250,
                            0,
                            "linear",
                            "${TEXT_SCAN}",
                            '0',
                            '0'
                        ],
                        [
                            "eid19",
                            "opacity",
                            750,
                            250,
                            "easeInOutCubic",
                            "${TEXT_SCAN}",
                            '0',
                            '1'
                        ],
                        [
                            "eid25",
                            "top",
                            1000,
                            250,
                            "easeInOutCubic",
                            "${TEXT_ENTER}",
                            '157px',
                            '177px'
                        ],
                        [
                            "eid45",
                            "scaleY",
                            1500,
                            250,
                            "easeInOutCubic",
                            "${TEXT_WELCOME}",
                            '0.5',
                            '1'
                        ],
                        [
                            "eid1",
                            "scaleX",
                            0,
                            0,
                            "linear",
                            "${rects}",
                            '0.91',
                            '0.91'
                        ],
                        [
                            "eid46",
                            "left",
                            1500,
                            250,
                            "easeInOutCubic",
                            "${TEXT_WELCOME}",
                            '18px',
                            '98px'
                        ],
                        [
                            "eid2",
                            "scaleY",
                            0,
                            0,
                            "linear",
                            "${rects}",
                            '0.91',
                            '0.91'
                        ],
                        [
                            "eid44",
                            "scaleX",
                            1500,
                            250,
                            "easeInOutCubic",
                            "${TEXT_WELCOME}",
                            '0.5',
                            '1'
                        ],
                        [
                            "eid5",
                            "opacity",
                            250,
                            0,
                            "linear",
                            "${TEXT_GETKNOW}",
                            '0',
                            '0'
                        ],
                        [
                            "eid35",
                            "opacity",
                            1250,
                            250,
                            "easeInOutCubic",
                            "${TEXT_GETKNOW}",
                            '0',
                            '1'
                        ],
                        [
                            "eid53",
                            "scaleY",
                            1750,
                            250,
                            "easeInOutCubic",
                            "${TEXT_URL}",
                            '0',
                            '1'
                        ],
                        [
                            "eid34",
                            "top",
                            1250,
                            250,
                            "easeInOutCubic",
                            "${TEXT_GETKNOW}",
                            '240px',
                            '260px'
                        ],
                        [
                            "eid17",
                            "scaleY",
                            750,
                            250,
                            "easeInOutCubic",
                            "${TEXT_SCAN}",
                            '0',
                            '1'
                        ],
                        [
                            "eid6",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${TEXT_WELCOME}",
                            '0',
                            '0'
                        ],
                        [
                            "eid48",
                            "opacity",
                            1508,
                            242,
                            "easeInOutCubic",
                            "${TEXT_WELCOME}",
                            '0',
                            '1'
                        ],
                        [
                            "eid9",
                            "left",
                            0,
                            750,
                            "easeInOutCubic",
                            "${qrcode}",
                            '403px',
                            '724px'
                        ],
                        [
                            "eid33",
                            "scaleY",
                            1250,
                            250,
                            "easeInOutCubic",
                            "${TEXT_GETKNOW}",
                            '0',
                            '1'
                        ],
                        [
                            "eid4",
                            "opacity",
                            250,
                            0,
                            "linear",
                            "${TEXT_ENTER}",
                            '0',
                            '0'
                        ],
                        [
                            "eid27",
                            "opacity",
                            1000,
                            250,
                            "easeInOutCubic",
                            "${TEXT_ENTER}",
                            '0',
                            '1'
                        ],
                        [
                            "eid16",
                            "top",
                            750,
                            250,
                            "easeInOutCubic",
                            "${TEXT_SCAN}",
                            '58px',
                            '91px'
                        ],
                        [
                            "eid26",
                            "scaleY",
                            1000,
                            250,
                            "easeInOutCubic",
                            "${TEXT_ENTER}",
                            '0',
                            '1'
                        ],
                        [
                            "eid7",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${TEXT_URL}",
                            '0',
                            '0'
                        ],
                        [
                            "eid54",
                            "opacity",
                            1750,
                            250,
                            "easeInOutCubic",
                            "${TEXT_URL}",
                            '0',
                            '1'
                        ]
                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("demo_edgeActions.js");
})("EDGE-95933076");
