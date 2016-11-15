$(document).ready(function() {
    
    linkstring = "\
        <a class='homelink' href='newyork.html'> \
            <div class='parallax' id='nyctitlebox'> \
                <div class='titlerow' id='nyc'> \
                    <p id='maintitle'>New York</p> \
                    <p id='mainsubtitle'><i>The city that never sleeps.</i></p> \
                </div> \
            </div> \
        </a> \
        \
        <a class='homelink' href='london.html'> \
            <div class='parallax' id='londontitlebox'> \
                <div class='titlerow' id='london'> \
                    <p id='maintitle'>London</p> \
                    <p id='mainsubtitle'><i>The old smoke.</i></p> \
                </div> \
            </div> \
        </a> \
        \
        <a class='homelink' href='paris.html'> \
            <div class='parallax' id='paristitlebox'> \
                <div class='titlerow' id='paris'> \
                    <p id='maintitle'>Paris</p> \
                    <p id='mainsubtitle'><i>The city of lights.</i></p> \
                </div> \
            </div> \
        </a> \
        \
        <a class='homelink' href='sydney.html'> \
            <div class='parallax' id='sydneytitlebox'> \
                <div class='titlerow' id='sydney'> \
                    <p id='maintitle'>Sydney</p> \
                    <p id='mainsubtitle'><i>The emerald city.</i></p> \
                </div> \
            </div> \
        </a>"
    
    $nyc = $('#nyc');
    $london = $('#london');
    $paris = $('#paris');
    $sydney = $('#sydney');
    
    function reset() {
        $nyc.css('height','25%');
        $london.css('height','25%');
        $paris.css('height','25%');
        $sydney.css('height','25%');
    }
    
    function resize(city) {
        $nyc.css('height',city=='nyc' ? '28%':'23.33%');
        $london.css('height',city=='london' ? '28%':'23.33%');
        $paris.css('height',city=='paris' ? '28%':'23.33%');
        $sydney.css('height',city=='sydney' ? '28%':'23.33%');
    }
    
    $nyc.mouseenter(function() {
        resize('nyc');
    })
    $london.mouseenter(function() {
        resize('london');
    })
    $paris.mouseenter(function() {
        resize('paris');
    })
    $sydney.mouseenter(function() {
        resize('sydney');
    })
    $('.titlerow').mouseleave(function() {
        reset();
    })
})