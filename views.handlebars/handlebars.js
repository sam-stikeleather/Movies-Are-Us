$(documnt).ready(function()) {

    var source = $("#genre-template").html();
    var template = Handlebars.complie(source);

    var source = $().html();
    var template = Handlebars.complie(source)


    Handlebars.registerHelper('genre'), function(type) {
        return movie.type + " " 
    };

    var html = template(context);
    $(".post")
}