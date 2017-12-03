$.fn.animateRotate = function(startAngle, endAngle, duration, easing ,targetOpacity){
    complete = null;
    to = targetOpacity / 100;
    co = $(this).css('opacity');
    diff = to-parseFloat(co);
    stp = diff/160;


    return this.each(function(){
        var elem = $(this);


        $({deg: startAngle}).animate({deg: endAngle}, {
            duration: duration,
            easing: easing,
            
            step: function(now){ 
                val = parseFloat(elem.css('opacity'))+Math.pow(stp,1.15);
                console.log(val);
                elem.css('opacity',val);

                elem.css({
                  '-moz-transform':'rotate('+now+'deg)',
                  '-webkit-transform':'rotate('+now+'deg)',
                  '-o-transform':'rotate('+now+'deg)',
                  '-ms-transform':'rotate('+now+'deg)',
                  'transform':'rotate('+now+'deg)',
                });
            },
            complete: complete || $.noop
        });
    });
};

