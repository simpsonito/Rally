(function (lib, img, cjs) {

    var p; // shortcut to reference prototypes

// stage content:
    (lib.baseRally = function() {
        this.initialize();

        // malo
        this.mal = new lib.mal();
        this.mal.setTransform(30,299);

        // bueno
        this.bien = new lib.bien();
        this.bien.setTransform(30,271);

        // fondo
        this.instance = new lib.rally();
        this.instance.setTransform(0,0,0.852,1.28);

        this.addChild(this.instance,this.bien,this.mal);
    }).prototype = p = new cjs.Container();
    p.nominalBounds = new cjs.Rectangle(0,0,459.9,319.9);


// symbols:
    (lib.cocheBien = function() {
        this.initialize(img.cocheBien);
    }).prototype = p = new cjs.Bitmap();
    p.nominalBounds = new cjs.Rectangle(0,0,50,25);


    (lib.cocheMal = function() {
        this.initialize(img.cocheMal);
    }).prototype = p = new cjs.Bitmap();
    p.nominalBounds = new cjs.Rectangle(0,0,50,25);


    (lib.rally = function() {
        this.initialize(img.rally);
    }).prototype = p = new cjs.Bitmap();
    p.nominalBounds = new cjs.Rectangle(0,0,540,250);


    (lib.cocheMalo = function() {
        this.initialize();

        // Layer 1
        this.instance = new lib.cocheMal();
        this.instance.setTransform(-24.9,-12.4);

        this.addChild(this.instance);
    }).prototype = p = new cjs.Container();
    p.nominalBounds = new cjs.Rectangle(-24.9,-12.4,50,25);


    (lib.cocheBueno = function() {
        this.initialize();

        // Layer 1
        this.instance = new lib.cocheBien();
        this.instance.setTransform(-24.9,-12.4);

        this.addChild(this.instance);
    }).prototype = p = new cjs.Container();
    p.nominalBounds = new cjs.Rectangle(-24.9,-12.4,50,25);


    (lib.mal = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});

        // timeline functions://cada una por cada número de pregunta
        this.frame_0 = function() {
            this.stop();
        };
        this.frame_11 = function() {
            this.stop();
        };
        this.frame_21 = function() {
            this.stop();
        };
        this.frame_31 = function() {
            this.stop();
        };
        this.frame_42 = function() {
            this.stop();
        };
        this.frame_52 = function() {
            this.stop();
        };
        this.frame_62 = function() {
            this.stop();
        };
        this.frame_73 = function() {
            this.stop();
        };
        this.frame_83 = function() {
            this.stop();
        };
        this.frame_94 = function() {
            this.stop();
        };
        this.frame_105 = function() {
            this.stop();
        };
        this.frame_116 = function() {
            this.stop();
        };
        this.frame_127 = function() {
            this.stop();
        };
        this.frame_138 = function() {
            this.stop();
        };
        this.frame_148 = function() {
            this.stop();
        };
        this.frame_159 = function() {
            this.stop();
        };

        // actions tween://11,21,31,42,52,62,73,83,94,105,116,127,138,148,159 //
        this.timeline.addTween(
            cjs.Tween.get(this)
            .call(this.frame_0)
            .wait(11).call(this.frame_11)
            .wait(10).call(this.frame_21)
            .wait(10).call(this.frame_31)
            .wait(11).call(this.frame_42)
            .wait(10).call(this.frame_52)
            .wait(10).call(this.frame_62)
            .wait(11).call(this.frame_73)
            .wait(10).call(this.frame_83)
            .wait(11).call(this.frame_94)
            .wait(11).call(this.frame_105)
            .wait(11).call(this.frame_116)
            .wait(11).call(this.frame_127)
            .wait(11).call(this.frame_138)
            .wait(10).call(this.frame_148)
            .wait(11).call(this.frame_159));

        // coche
        this.instance = new lib.cocheMalo("synched",0);

        this.timeline.addTween(cjs.Tween.get(this.instance).to({guide:{path:[0.1,0,184.1,0,368,0]}},26).to({rotation:-89.8,guide:{path:[368,0,381,0,393.9,0,393.9,-22.3,393.9,-44.7]}},5).to({rotation:-179.9,guide:{path:[393.9,-44.9,393.9,-69.3,393.9,-93.8,383.1,-93.8,372.2,-93.8]}},5).to({scaleX:1,scaleY:1,guide:{path:[372.3,-93.8,182.7,-93.8,-6.8,-93.8,-6.8,-95.2,-6.8,-96.7]}},27).to({rotation:-89.8,guide:{path:[-6.8,-96.6,-6.8,-103.7,-6.8,-110.8]}},1).to({rotation:0,guide:{path:[-6.8,-110.9,-6.8,-120.8,-6.8,-130.8,-2.7,-130.8,1.3,-130.8]}},2).to({scaleX:1,scaleY:1,guide:{path:[1.5,-130.8,196.2,-130.8,390.9,-130.8,390.9,-134.2,390.9,-137.6]}},28).to({rotation:-89.8,guide:{path:[390.9,-137.5,390.9,-158.8,390.9,-180]}},3).to({rotation:-179.9,guide:{path:[390.9,-180.1,390.9,-198.4,390.9,-216.8,388.1,-216.8,385.2,-216.8]}},3).to({rotation:-179.8,guide:{path:[385.3,-216.8,194.2,-216.8,3.1,-216.8]}},27).to({scaleX:1,scaleY:1,rotation:-79.8,guide:{path:[3,-216.8,-2.4,-216.8,-7.8,-216.8,-7.8,-225.4,-7.8,-234.1]}},2).to({scaleX:1,scaleY:1,rotation:0,guide:{path:[-7.8,-234.1,-7.8,-246.4,-7.8,-258.8,0.9,-258.8,9.7,-258.8]}},3).to({scaleX:1,scaleY:1,guide:{path:[9.9,-258.8,200.9,-258.8,391.9,-258.8]}},27,cjs.Ease.get(-0.99)).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-24.9,-12.4,50,25);


    (lib.bien = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});

        // timeline functions://cada una por cada número de pregunta
        this.frame_0 = function() {
            this.stop();
        };
        this.frame_11 = function() {
            this.stop();
        };
        this.frame_21 = function() {
            this.stop();
        };
        this.frame_31 = function() {
            this.stop();
        };
        this.frame_42 = function() {
            this.stop();
        };
        this.frame_52 = function() {
            this.stop();
        };
        this.frame_62 = function() {
            this.stop();
        };
        this.frame_73 = function() {
            this.stop();
        };
        this.frame_83 = function() {
            this.stop();
        };
        this.frame_94 = function() {
            this.stop();
        };
        this.frame_105 = function() {
            this.stop();
        };
        this.frame_116 = function() {
            this.stop();
        };
        this.frame_127 = function() {
            this.stop();
        };
        this.frame_138 = function() {
            this.stop();
        };
        this.frame_148 = function() {
            this.stop();
        };
        this.frame_159 = function() {
            this.stop();
        };

        // actions tween:
        this.timeline.addTween(
            cjs.Tween.get(this)
                .call(this.frame_0)
                .wait(11).call(this.frame_11)
                .wait(10).call(this.frame_21)
                .wait(10).call(this.frame_31)
                .wait(11).call(this.frame_42)
                .wait(10).call(this.frame_52)
                .wait(10).call(this.frame_62)
                .wait(11).call(this.frame_73)
                .wait(10).call(this.frame_83)
                .wait(11).call(this.frame_94)
                .wait(11).call(this.frame_105)
                .wait(11).call(this.frame_116)
                .wait(11).call(this.frame_127)
                .wait(11).call(this.frame_138)
                .wait(10).call(this.frame_148)
                .wait(11).call(this.frame_159));

        // coche
        this.instance = new lib.cocheBueno("synched",0);

        this.timeline.addTween(cjs.Tween.get(this.instance).to({guide:{path:[0.1,0,195.1,0,390,0]}},22).to({rotation:-89.8,guide:{path:[390,0,392,0,393.9,0,393.9,-12.9,393.9,-25.9]}},4).to({rotation:-179.9,guide:{path:[393.9,-25.9,393.9,-29.8,393.9,-33.8,382.9,-33.8,371.8,-33.8]}},4).to({scaleX:1,scaleY:1,rotation:-179.8,guide:{path:[371.8,-33.8,184.4,-33.8,-3,-33.8]}},20).to({rotation:-89.8,guide:{path:[-3.2,-34,-5,-34,-6.8,-34,-6.8,-58.2,-6.8,-82.5]}},7).to({rotation:0,guide:{path:[-6.8,-82.5,-6.8,-103.6,-6.8,-124.8,-5.4,-124.8,-4.1,-124.8]}},6).to({scaleX:1,scaleY:1,guide:{path:[-4,-124.8,187,-124.8,378.2,-124.8]}},24).to({rotation:-89.8,guide:{path:[378.2,-124.7,384.6,-124.7,390.9,-124.7,390.9,-133.4,390.9,-142]}},4).to({rotation:-179.8,guide:{path:[390.9,-142.1,390.9,-152.4,390.9,-162.8,386.3,-162.8,381.6,-162.8]}},4).to({rotation:-179.9,guide:{path:[381.7,-162.8,186.9,-162.8,-7.8,-162.8,-7.8,-163,-7.8,-163.2]}},27,cjs.Ease.get(-0.99)).to({scaleX:1,scaleY:1,rotation:-89.8,guide:{path:[-7.8,-163.2,-7.8,-185.6,-7.8,-208.1]}},6).to({rotation:0,guide:{path:[-7.8,-208.1,-7.8,-226.9,-7.8,-245.6]}},5).to({scaleX:1,scaleY:1,guide:{path:[-7.8,-245.6,-7.8,-248.7,-7.8,-251.8,191.5,-251.8,390.9,-251.8]}},26,cjs.Ease.get(-0.99)).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-24.9,-12.4,50,25);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;