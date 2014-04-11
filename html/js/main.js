/**
 * a function to change the facebook icon from
 * bluescale to color on mouseenter, and back again
 * on mouseleave
 */
function altFacebook() {
    var oldsrc = 'images/facebook_blue.png';
    var newsrc = 'images/facebook.png';
    $('#facebook').mouseenter(function() {
        $(this).attr('src', newsrc);
    }).mouseleave(function() {
        $(this).attr('src', oldsrc);
    });
}

/**
 * a function to change the twitter icon from
 * bluescale to color on mouseenter, and back again
 * on mouseleave
 */
function altTwitter() {
    var oldsrc = 'images/twitter_alt_blue.png';
    var newsrc = 'images/twitter_alt.png';
    $('#twitter').mouseenter(function() {
        $(this).attr('src', newsrc);
    }).mouseleave(function() {
        $(this).attr('src', oldsrc);
    });
}

/**
 * a function to change the gootle icon from
 * bluescale to color on mouseenter, and back again
 * on mouseleave
 */
function altGoogle() {
    var oldsrc = 'images/google_blue.png';
    var newsrc = 'images/google-red.png';
    $('#google').mouseenter(function() {
        $(this).attr('src', newsrc);
    }).mouseleave(function() {
        $(this).attr('src', oldsrc);
    });
}

/**
 * a function to change the youtube icon from
 * greyscale to color on mouseenter, and back again
 * on mouseleave
 */
function altYoutube() {
    var oldsrc = 'images/linkedin_blue.png';
    var newsrc = 'images/linkedin.png';
    $('#linkedin').mouseenter(function() {
        $(this).attr('src', newsrc);
    }).mouseleave(function() {
        $(this).attr('src', oldsrc);
    });
}

/**
 * a function to toggle the display of the clicked archives sub-lists
 */
function toggleArchives() {
    var element;
    $('ul.years li').click(function() {
	$(this).children().children('li').toggle();
	element = $(this).children(1);
    });
}

/**
 * a function that initiates the settings of the page's elements
 * on window load
 */
window.onload = function initiate() {
    altFacebook();
    altTwitter();
    altGoogle();
    altYoutube();
    toggleArchives();
};