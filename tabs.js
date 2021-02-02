$(".many").keypress(function(e) {
    //if the letter is not digit then don't type anything
    if (e.which != 8 && e.which != 0 && (e.which < 48 || e.which > 57)) {
        return false;
    }
})

$('.add').click(function() {
    var many = $('.many').val();
    $('.many').val(++many)
});

$('.less').click(function() {
    var many = $('.many').val();
    if (many <= 0) {
        return false;
    } else {
        $('.many').val(--many);
    }
})

$('.go').click(function() {
    $(".box").html("");
    var Txt = $('.txtbox').val();
    var many = $('.many').val();
    for (var i = 0; i < many; i++) {
        var html = $('.box').html();
        if (Txt === "Starcraft" || Txt === "starcraft") {
            $('.box').append('<p> Starcraft est un jeu sorti en 1998, il dechire.</p>')
        } else if (Txt === "Sony" || Txt === "sony") {
            $('.box').append('<p> Plus connu sous le nom de IntoXx-TiouP, c\'est un veritable joueur d\'exception. Bravant les 140 APM à longueur de game, il roulait sur tout ce qui passait .</p>')
        } else if (Txt === "List" || Txt === "list") {
            var array = ["Sony", "Starcraft", "FBI"];
            var text = "";
            var i;
            for (i = 0; i < array.length; i++) {
                text += array[i] + "<br>";
            }
            $('.box').append(text);
        } else if (Txt === "FBI") {
            $('.go').click(function() {
                window.open("https://www.fbi.gov/")
            })
        } else {
            $('.box').append('<p> i like ' + Txt + '</p>')
        }
    }

});