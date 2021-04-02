/**
 * Adobe Edge: symbol definitions
 */
(function($, Edge, compId){
//images folder
var im='images/';

var fonts = {};
var opts = {
    'gAudioPreloadPreference': 'auto',

    'gVideoPreloadPreference': 'auto'
};
var resources = [
];
var symbols = {
"stage": {
    version: "4.0.0",
    minimumCompatibleVersion: "4.0.0",
    build: "4.0.0.359",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
            {
                id: '_6',
                type: 'image',
                rect: ['-6px', '0px','312px','208px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"6.jpg",'0px','0px']
            },
            {
                id: '_5',
                type: 'image',
                rect: ['-6px', '0px','312px','220px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"5.jpg",'0px','0px']
            },
            {
                id: '_4',
                type: 'image',
                rect: ['-6px', '0px','312px','208px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"4.jpg",'0px','0px']
            },
            {
                id: '_3',
                type: 'image',
                rect: ['-6px', '0px','312px','194px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"3.jpg",'0px','0px']
            },
            {
                id: '_2',
                type: 'image',
                rect: ['-6px', '0px','312px','208px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"2.jpg",'0px','0px']
            },
            {
                id: '_1',
                type: 'image',
                rect: ['-6px', '0px','312px','207px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"1.jpg",'0px','0px']
            }],
            symbolInstances: [

            ]
        },
    states: {
        "Base State": {
            "${__1}": [
                ["style", "top", '0px'],
                ["style", "opacity", '0'],
                ["style", "left", '-6px']
            ],
            "${__6}": [
                ["style", "top", '0px'],
                ["style", "opacity", '0'],
                ["style", "left", '-6px']
            ],
            "${__4}": [
                ["style", "top", '0px'],
                ["style", "opacity", '0'],
                ["style", "left", '-6px']
            ],
            "${_Stage}": [
                ["color", "background-color", 'rgba(255,255,255,1)'],
                ["style", "width", '300px'],
                ["style", "height", '180px'],
                ["style", "overflow", 'hidden']
            ],
            "${__3}": [
                ["style", "top", '0px'],
                ["style", "opacity", '0'],
                ["style", "left", '-6px']
            ],
            "${__2}": [
                ["style", "top", '0px'],
                ["style", "opacity", '0'],
                ["style", "left", '-6px']
            ],
            "${__5}": [
                ["style", "top", '0px'],
                ["style", "opacity", '0'],
                ["style", "left", '-6px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 18000,
            autoPlay: true,
            timeline: [
                { id: "eid15", tween: [ "style", "${__5}", "opacity", '1', { fromValue: '0'}], position: 12000, duration: 750 },
                { id: "eid16", tween: [ "style", "${__5}", "opacity", '0', { fromValue: '1'}], position: 14250, duration: 750 },
                { id: "eid17", tween: [ "style", "${__6}", "opacity", '1', { fromValue: '0'}], position: 15000, duration: 750 },
                { id: "eid18", tween: [ "style", "${__6}", "opacity", '0', { fromValue: '1'}], position: 17250, duration: 750 },
                { id: "eid13", tween: [ "style", "${__4}", "opacity", '1', { fromValue: '0'}], position: 9000, duration: 750 },
                { id: "eid14", tween: [ "style", "${__4}", "opacity", '0', { fromValue: '1'}], position: 11250, duration: 750 },
                { id: "eid5", tween: [ "style", "${__1}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 750 },
                { id: "eid6", tween: [ "style", "${__1}", "opacity", '0', { fromValue: '1'}], position: 2250, duration: 750 },
                { id: "eid11", tween: [ "style", "${__3}", "opacity", '1', { fromValue: '0'}], position: 6000, duration: 750 },
                { id: "eid12", tween: [ "style", "${__3}", "opacity", '0', { fromValue: '1'}], position: 8250, duration: 750 },
                { id: "eid7", tween: [ "style", "${__2}", "opacity", '1', { fromValue: '0'}], position: 3000, duration: 750 },
                { id: "eid8", tween: [ "style", "${__2}", "opacity", '0', { fromValue: '1'}], position: 5250, duration: 750 }            ]
        }
    }
}
};


Edge.registerCompositionDefn(compId, symbols, fonts, resources, opts);

/**
 * Adobe Edge DOM Ready Event Handler
 */
$(window).ready(function() {
     Edge.launchComposition(compId);
});
})(jQuery, AdobeEdge, "EDGE-4520946");
