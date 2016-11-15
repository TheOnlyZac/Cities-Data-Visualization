// Source: http://stackoverflow.com/questions/19003985/adjust-scroll-position-to-a-closest-div (try before buy)

$(document).ready(function() {
    var animating = false;
    var lastScrollTop = 0;
    
    function scrollDown() {
        console.log('scrollDown function start');
        var items = $('.item');
        clearTimeout($.data(this, 'scrollTimer'));
        if (!animating) {
            $.data(this, 'scrollTimer', setTimeout(function() {
                items.each(function(key, value) {
                    if ($(value).offset().top > $(window).scrollTop()) {
                        animating = true;
                        console.log('animating start (scrollDown)');
                        $('body').animate( { scrollTop: $(value).offset().top + 'px' }, 1000);
                        setTimeout(function() {
                            animating = false;
                            console.log('animating end (scrollDown)');
                        }, 1100);
                        return false;
                    }
                });
            }, 200));
        } else {
            console.log('animating, aborting');
            return;
        }
    };
    
    function scrollUp() {
        console.log('scrollUp function start');
        var items = $($('.item').get().reverse());
        clearTimeout($.data(this, 'scrollTimer'));
        if (!animating) {
            $.data(this, 'scrollTimer', setTimeout(function() {
                items.each(function(key, value) {
                    if ($(value).offset().top < $(window).scrollTop()) {
                        animating = true;
                        console.log('animating start (scrollUp)');
                        $('body').animate( { scrollTop: $(value).offset().top + 'px' }, 1000);
                        setTimeout(function() {
                            animating = false;
                            console.log('animating end (scrollUp)');
                        }, 1100);
                        return false;
                    }
                });
            }, 200));
        } else {
            console.log('animating, aborting');
            return;
        }
    };
    
    function autoscroll() {
        if (animating) { return; }
        var items = $('.item');
        closest = null;
        shortestdistance = 999999999;
        items.each(function() {
            distance = Math.abs(this.offsetTop - window.pageYOffset);
            if (distance < shortestdistance) {
                closest = this;
                shortestdistance = distance;
            }
        })
       animating = true;
       console.log('animating start (autoscroll)')
       $('body').animate( { scrollTop: closest.offsetTop + 'px' }, 1000);
       setTimeout(function() {
           animating = false;
           console.log('animating end (autoscroll)')
       }, 1100);
       return false;
    }
    
    var timer = null;
    window.addEventListener('scroll', function() {
        if (animating) {
            //console.log('animating, stopping sutoscroll');
            return;
        } else {
            if(timer !== null) {
                //console.log('timer isnt done');
                clearTimeout(timer);        
            }
            timer = setTimeout(function() {
                //console.log('timer done, autoscrolling');
                autoscroll();
            }, 250);
        }
    }, false);
    
    $(document).on('click', '#down', function() {
        scrollDown(('down'));
    });
                  
    $(document).on('keydown', function(e) {
        if ((e.which == 33) || (e.which == 38) || (e.which == 37)) {
            //page up || up arrow || left arrow
            console.log('up keypress');
            e.preventDefault();
            scrollUp();
        }
        else if ((e.which == 34) || (e.which == 40) || (e.which == 39)) {
            //page down || down arrow || right arrow
            console.log('down keypress');
            e.preventDefault();
            scrollDown();
        }
    });
});