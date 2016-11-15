$(document).ready(function() {
    
    $('#page-content').removeClass('invisible');
    
    navhtml = "<div class='nav-container'> \
            <a class='navlink' href='index.html'><div class='navtitle'> \
                <p class='nav-item'><b><i>Home</i></b></p> \
            </div></a> \
            <a class='navlink' href='newyork.html'><div class='navtitle'> \
                <p class='nav-item'><i>New York</i></p> \
            </div></a> \
            <a class='navlink' href='london.html'><div class='navtitle'> \
                <p class='nav-item'><i>London</i></p> \
            </div></a> \
            <a class='navlink' href='paris.html'><div class='navtitle'> \
                <p class='nav-item'><i>Paris</i></p> \
            </div></a> \
            <a class='navlink' href='sydney.html'><div class='navtitle'> \
                <p class='nav-item'><i>Sydney</i></p> \
            </div></a> \
            <a class='navlink' href='http://theonlyzac.tumblr.com/portfolio'> \
            <p class='copyright'>©2016 Zachary Krasnow</p> \
            </a> \
        </div>";
    $('nav').html(navhtml);
    
    $mb = $('.menubutton');
    $d = $('#drawer');
    
    $(this).on('click', '.menubutton', function() {
        if ($mb.hasClass('shifted')) {
            setTimeout(function() {
                $mb.removeClass('shifted');
                $d.removeClass('opened');
                $('#page-content').removeClass('faded');
            }, 0);
        } else {
            setTimeout(function() {
                $mb.addClass('shifted');
                $d.addClass('opened');
                $('#page-content').addClass('faded');
            }, 100);
        }
    });
    
    /* This works. If you change it in any way it
    stops working. So pls dont touch. */
    /* $('a').on('click', function(e) {
        goto = this.href;
        e.preventDefault();
        if ($('#drawer').hasClass('opened')) {
            $mb.removeClass('shifted');
            $d.removeClass('opened');
            $('.item').addClass('invisible');
            setTimeout(function() {
                location = goto;
            }, 500);
        }
    }); */
    
    $('a').on('click', function(e) {
        $thing = $(this);
        e.preventDefault();
        console.log($thing);
        goto = $thing[0].href;
        if ($thing.hasClass('navlink') && !($('#drawer').hasClass('opened'))) {
            return;
        } else {
            $mb.removeClass('shifted');
            $d.removeClass('opened');
            $('#page-content').addClass('invisible');
            setTimeout(function() {
                location = goto;
            }, 500);
        }
    });
    
    $(this).on('click', $('.item'), function() {
        $mb.removeClass('shifted');
        $d.removeClass('opened');
        $('#page-content').removeClass('faded')
    });
})