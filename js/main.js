//start the JS code for the Contact Form

// Get the modal
var modal = $('#myModal');

// Get the button that opens the modal
var btn = $("#myBtn");

// Get the <span> element that closes the modal
var span = $("._close");

// When the user clicks the button, open the modal
$(btn).click(function(e){
    e.preventDefault();
    // populate data to Modal box
    var firstname = $(this).closest('form').find('input[name=firstname]').val();
    var lastname = $(this).closest('form').find('input[name=lastname]').val();
    var phonenumber = $(this).closest('form').find('input[name=phonenumber]').val();
    var comments = $(this).closest('form').find('textarea[name=comments]').val();
    $(modal).find('.modal-content .name > span').html(' '+firstname);
    $(modal).find('.modal-content .lname > span').html(' '+lastname);
    $(modal).find('.modal-content .phonenumber > span').html(' '+phonenumber);
    $(modal).find('.modal-content .comments > span').html(' '+ comments);
    // display modal box
    $(modal).css('display','block');
    // hide after some time
    setTimeout(function(){
        $(modal).css('display','none');
        // form submit
        $('#contact_form').submit()
    }, 3000);

});

// When the user clicks on <span> (x), close the modal
$(span).click(function(e){
    e.preventDefault();
    $(modal).css('display','none');
});
//end the code for contact form


//start the code for preloader

// construct Preloader
function siteFuctions(loaderTime) {
	this.preloader = function(){
		setTimeout(function(){
	        $('#preloader').fadeOut('slow',function(){;});
	    }, loaderTime);
	}
}

// inilized preloader
var siteFuctions = new siteFuctions(1500);
siteFuctions.preloader();
//end the code for preloader

// Gets the word and throws image upon clicking

$(document).ready(function(){

$('.mouseOver').click(function() {
  $('.mouseOver').removeClass('active');
  $(this).toggleClass('active');
});



});
