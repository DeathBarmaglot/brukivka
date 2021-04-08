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
                rect: ['-6px', '-19px','312px','208px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"6.jpg",'0px','0px']
            },
            {
                id: '_5',
                type: 'image',
                rect: ['-6px', '0px','312px','220px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"5.jpg",'0px','0px']
            },
            {
                id: '_3',
                type: 'image',
                rect: ['-6px', '0px','312px','194px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"3.jpg",'0px','0px']
            },
            {
                id: '_1',
                type: 'image',
                rect: ['-6px', '-7px','312px','207px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"1.jpg",'0px','0px']
            },
            {
                id: '_13',
                type: 'image',
                rect: ['-4555px', '-414px','9410px','870px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"1.svg",'0px','0px'],
                transform: [[],[],[],['0.03','0.03']]
            },
            {
                id: '_23',
                type: 'image',
                rect: ['-4356px', '-961px','8950px','2000px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"2.svg",'0px','0px'],
                transform: [[],[],[],['0.06','0.06']]
            },
            {
                id: '_33',
                type: 'image',
                rect: ['-5691px', '-531px','11660px','1140px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"3.svg",'0px','0px'],
                transform: [[],[],[],['0.03','0.03']]
            },
            {
                id: '_43',
                type: 'image',
                rect: ['-3874px', '-773px','8050px','1760px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"4.svg",'0px','0px'],
                transform: [[],[],[],['0.03','0.03']]
            },
            {
                id: '_53',
                type: 'image',
                rect: ['-3339px', '-483px','7040px','1070px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"5.svg",'0px','0px'],
                transform: [[],[],[],['0.08','0.08']]
            }],
            symbolInstances: [

            ]
        },
    states: {
        "Base State": {
            "${__33}": [
                ["style", "top", '-531px'],
                ["transform", "scaleY", '0'],
                ["transform", "scaleX", '0'],
                ["style", "left", '-5691px'],
                ["style", "background-position", [0,0], {valueTemplate:'@@0@@px @@1@@px'} ]
            ],
            "${__13}": [
                ["style", "top", '-414px'],
                ["transform", "scaleY", '0.03'],
                ["transform", "scaleX", '0.03'],
                ["style", "opacity", '1'],
                ["style", "left", '-4875px'],
                ["style", "background-position", [0,0], {valueTemplate:'@@0@@px @@1@@px'} ]
            ],
            "${__22}": [
                ["style", "left", '-11367px'],
                ["style", "top", '-15759px']
            ],
            "${__52}": [
                ["style", "left", '-11367px'],
                ["style", "top", '-15759px']
            ],
            "${__3}": [
                ["style", "top", '0px'],
                ["style", "opacity", '0'],
                ["style", "left", '-6px']
            ],
            "${__42}": [
                ["style", "left", '-11367px'],
                ["style", "top", '-15759px']
            ],
            "${__12}": [
                ["style", "left", '-11367px'],
                ["style", "top", '-15759px']
            ],
            "${__32}": [
                ["style", "left", '-11367px'],
                ["style", "top", '-15759px']
            ],
            "${__1}": [
                ["style", "top", '-7px'],
                ["style", "opacity", '0'],
                ["style", "left", '-6px']
            ],
            "${__6}": [
                ["style", "top", '-19px'],
                ["style", "opacity", '0'],
                ["style", "left", '-6px']
            ],
            "${__43}": [
                ["style", "top", '-773px'],
                ["transform", "scaleY", '0.06'],
                ["transform", "scaleX", '0.06'],
                ["style", "opacity", '1'],
                ["style", "left", '-3874px'],
                ["style", "background-position", [9111.1002604167,0], {valueTemplate:'@@0@@px @@1@@px'} ]
            ],
            "${_Stage}": [
                ["color", "background-color", 'rgba(255,255,255,1)'],
                ["style", "overflow", 'hidden'],
                ["style", "height", '180px'],
                ["style", "width", '300px']
            ],
            "${__5}": [
                ["style", "top", '0px'],
                ["style", "opacity", '0'],
                ["style", "left", '-6px']
            ],
            "${__23}": [
                ["style", "top", '-961px'],
                ["transform", "scaleY", '0.06'],
                ["style", "clip", [0,8950,-533.3333129882812,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["transform", "scaleX", '0.06'],
                ["style", "opacity", '1'],
                ["style", "background-position", [0,0], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "left", '-4356px']
            ],
            "${__53}": [
                ["style", "top", '-375px'],
                ["transform", "scaleY", '0.09'],
                ["transform", "scaleX", '0.09'],
                ["style", "left", '-3411px'],
                ["style", "background-position", [0,1200], {valueTemplate:'@@0@@px @@1@@px'} ]
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 16000,
            autoPlay: true,
            timeline: [
                { id: "eid21", tween: [ "style", "${__13}", "left", '-4554px', { fromValue: '-4875px'}], position: 250, duration: 500, easing: "easeInOutCubic" },
                { id: "eid15", tween: [ "style", "${__5}", "opacity", '1', { fromValue: '0'}], position: 7500, duration: 750, easing: "easeInOutCubic" },
                { id: "eid16", tween: [ "style", "${__5}", "opacity", '0', { fromValue: '1'}], position: 11378, duration: 750, easing: "easeInOutCubic" },
                { id: "eid47", tween: [ "transform", "${__33}", "scaleY", '0.1', { fromValue: '0'}], position: 7750, duration: 439, easing: "easeInOutCubic" },
                { id: "eid51", tween: [ "transform", "${__33}", "scaleY", '0', { fromValue: '0.1'}], position: 11378, duration: 689, easing: "easeInOutCubic" },
                { id: "eid38", tween: [ "style", "${__23}", "opacity", '0', { fromValue: '1'}], position: 7750, duration: 581, easing: "easeInOutCubic" },
                { id: "eid11", tween: [ "style", "${__3}", "opacity", '1', { fromValue: '0'}], position: 3561, duration: 750, easing: "easeInOutCubic" },
                { id: "eid12", tween: [ "style", "${__3}", "opacity", '0', { fromValue: '1'}], position: 7500, duration: 750, easing: "easeInOutCubic" },
                { id: "eid48", tween: [ "transform", "${__33}", "scaleX", '0.1', { fromValue: '0'}], position: 7750, duration: 439, easing: "easeInOutCubic" },
                { id: "eid52", tween: [ "transform", "${__33}", "scaleX", '0', { fromValue: '0.1'}], position: 11378, duration: 689, easing: "easeInOutCubic" },
                { id: "eid70", tween: [ "style", "${__53}", "background-position", [0,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,1200]}], position: 500, duration: 689, easing: "easeInOutCubic" },
                { id: "eid64", tween: [ "style", "${__53}", "background-position", [0,1200], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,0]}], position: 15311, duration: 689, easing: "easeInOutCubic" },
                { id: "eid17", tween: [ "style", "${__6}", "opacity", '1', { fromValue: '0'}], position: 11572, duration: 750, easing: "easeInOutCubic" },
                { id: "eid18", tween: [ "style", "${__6}", "opacity", '0', { fromValue: '1'}], position: 15250, duration: 750, easing: "easeInOutCubic" },
                { id: "eid34", tween: [ "style", "${__23}", "clip", [0,8950,2000,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [0,8950,-533.3333129882812,0]}], position: 3872, duration: 574, easing: "easeInOutCubic" },
                { id: "eid5", tween: [ "style", "${__1}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 750, easing: "easeInOutCubic" },
                { id: "eid6", tween: [ "style", "${__1}", "opacity", '0', { fromValue: '1'}], position: 3561, duration: 750, easing: "easeInOutCubic" },
                { id: "eid99", tween: [ "style", "${__43}", "opacity", '0', { fromValue: '1'}], position: 15250, duration: 750, easing: "easeInOutCubic" },
                { id: "eid37", tween: [ "style", "${__13}", "opacity", '0', { fromValue: '1'}], position: 3561, duration: 581, easing: "easeInOutCubic" },
                { id: "eid107", tween: [ "style", "${__13}", "opacity", '1', { fromValue: '0'}], position: 11844, duration: 581, easing: "easeInOutCubic" },
                { id: "eid105", tween: [ "style", "${__13}", "opacity", '0', { fromValue: '1'}], position: 14991, duration: 581, easing: "easeInOutCubic" },
                { id: "eid54", tween: [ "style", "${__43}", "background-position", [0,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [9111.1002604167,0]}], position: 11572, duration: 750, easing: "easeInOutCubic" }            ]
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
