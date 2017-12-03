class GaugeObject {
    constructor() {
        this.basePath = "imgFinal/";
        this.name = null;
    }
}


class Arrow extends GaugeObject {
    constructor() {
        super();
        this.yCenter = "85%";
        this.xCenter = "50%";
        this.basePath = "imgFinal/Zeiger/";
        this.height = "330px";
        this.folder = null;
        this.yName = null;
        this.gName = null;
        this.rName = null;
    }
    initVals() {
        this.name = this.folder;
        this.srcPrefix = this.basePath + this.folder + "/";
        this.ySrc = this.srcPrefix + this.yName;
        this.rSrc = this.srcPrefix + this.rName;
        this.gSrc = this.srcPrefix + this.gName;
    }

    addImages() {
        $('body').append("<img id='rot' class='arrow' src='" + this.rSrc + "'>");
        $('body').append("<img id='gruen' class='arrow' src='" + this.gSrc + "'>");
        $('body').append("<img id='gelb' class='arrow' src='" + this.ySrc + "'>");
    }

    initCSS() {
        $('.arrow').css({
            'transform-origin': '' + this.xCenter + ' ' + this.yCenter + ' 0px',
            'height': this.height,
            'position': 'absolute',
            'opacity': '0',
            'z-index': '10'
        });
    }
}

class Border extends GaugeObject {
    constructor() {
        super();

        this.basePath = "imgFinal/Borders/";
        this.height = "330px";
        this.name = null;

    }
    initVals() {
        this.Src = this.basePath + this.name+".png";
    }

    addImages() {
        $('body').append("<img id='tacho' src='" + this.Src + "'>");
    }

    initCSS() {
        $('#tacho').css({
            'position': 'absolute'
        });
    }
}