// CHALLENGE 4 slideToggle() & fadeTo() --------------------------------------------------------------------------------------------------
$(document).ready(function() {
    // Create the slideToggle effects each of the paragraphs and
    // buttons
    $("#button_effects1").click(function(){
        $('#par1').slideToggle(1000);
    });
    $("#button_effects2").click(function(){
        $('#par2').slideToggle(1000);
    });
    $("#button_effects3").click(function(){
        $('#par3').slideToggle(1000);
    });
    $("#button_effects4").click(function(){
        $('#par4').slideToggle(1000);
    });
    $("#button_effects5").click(function(){
        $('#par5').slideToggle(1000);
    });
    $("#button_effects6").click(function(){
        $('#par6').slideToggle(1000);
    });

    // Use the fadeTo effect when the mouse hovers over a specific button
    // and fadeTo again when the mouse is no longer hovering over the button
    $("#button_effects1").mouseenter(function(){
        $('#button_effects1').fadeTo(1000, 0.5);
    });
    $("#button_effects1").mouseleave(function(){
        $('#button_effects1').fadeTo(1000, 1);
    });

    $("#button_effects2").mouseenter(function(){
        $('#button_effects2').fadeTo(1000, 0.5);
    });
    $("#button_effects2").mouseleave(function(){
        $('#button_effects2').fadeTo(1000, 1);
    });

    $("#button_effects3").mouseenter(function(){
        $('#button_effects3').fadeTo(1000, 0.5);
    });
    $("#button_effects3").mouseleave(function(){
        $('#button_effects3').fadeTo(1000, 1);
    });

    $("#button_effects4").mouseenter(function(){
        $('#button_effects4').fadeTo(1000, 0.5);
    });
    $("#button_effects4").mouseleave(function(){
        $('#button_effects4').fadeTo(1000, 1);
    });

    $("#button_effects5").mouseenter(function(){
        $('#button_effects5').fadeTo(1000, 0.5);
    });
    $("#button_effects5").mouseleave(function(){
        $('#button_effects5').fadeTo(1000, 1);
    });

    $("#button_effects6").mouseenter(function(){
        $('#button_effects6').fadeTo(1000, 0.5);
    });
    $("#button_effects6").mouseleave(function(){
        $('#button_effects6').fadeTo(1000, 1);
    });

}); 





// CHALLENGE 3 slideToggle() --------------------------------------------------------------------------------------------------
/* $(document).ready(function() {
    $("#button_effects1").click(function(){
        $('#par1').slideToggle(1000);
    });
    $("#button_effects2").click(function(){
        $('#par2').slideToggle(1000);
    });
    $("#button_effects3").click(function(){
        $('#par3').slideToggle(1000);
    });
    $("#button_effects4").click(function(){
        $('#par4').slideToggle(1000);
    });
    $("#button_effects5").click(function(){
        $('#par5').slideToggle(1000);
    });
    $("#button_effects6").click(function(){
        $('#par6').slideToggle(1000);
    });
}); */







// CHALLENGE 2 toggle() --------------------------------------------------------------------------------------------------
/*$(document).ready(function() {
    $("#button_effects1").click(function(){
        $('#par1').toggle(1000);
    });
    $("#button_effects2").click(function(){
        $('#par2').toggle(1000);
    });
    $("#button_effects3").click(function(){
        $('#par3').toggle(1000);
    });
    $("#button_effects4").click(function(){
        $('#par4').toggle(1000);
    });
    $("#button_effects5").click(function(){
        $('#par5').toggle(1000);
    });
    $("#button_effects6").click(function(){
        $('#par6').toggle(1000);
    });
}); */





// CHALLENGE 1 hide() --------------------------------------------------------------------------------------------------
/* $(document).ready(function() {
    $("#button_effects1").click(function(){
            $('#button_effects1').hide('slow');

        });
}); */