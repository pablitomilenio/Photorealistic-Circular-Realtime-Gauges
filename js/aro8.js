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
                elem.css('opacity',val);

                maxAngle = ($numTicks-1)*stepWidth-initialTilt;
                convAng = maxAngle-95; /****** */
                curr = now/convAng;
                half = Math.round($min + $numTicks/2 * $step);
                distance1 = half-$min;
                distance2 = $max - half;
                
                if (curr < 0 ) currPerc = ((curr+1)*distance1+$min);
                else currPerc = (curr)*distance2+half;
                currPerc = Math.round(currPerc*10)/10 + " %";

               $('#centerNum').html(currPerc);

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

