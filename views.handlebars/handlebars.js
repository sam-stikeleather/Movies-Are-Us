$(documnt).ready(function()) {

    var source = $("#genre-template").html();
    var template = Handlebars.complie(source);

    var source = $().html();
    var template = Handlebars.complie(source);

    var context = {
        genre: {
            type: "Action";
            type: "Science Fiction",
            type: "Comedy",
            type: "Adventure",
            type: "Drama",
            type: "Documentary",
            type: "Musical",
            type: "Fiction",
            type: "Fantasy",
            type: "Romantic Comedy",
            type: "Action Comedy",
            type: "Musical",
            type: "Thriller",
            type: "Narrative",
            type: "Exploitation",
            type: "Biographical",
            type: "Children",
            type: "Splatter",
            type: "Slasher",
            type: "Gangster",
            type: "Noir",
            type: "Made for TV",
            type: "Mystery",
            type: "War",
            type: "Historical Drama",
            type: "Experimental",
            type: "Fantasy",
            type: "Experimental",
            type: "Western",
            type: "Horror",
            type: "Romance",
            type: "Romantic Comedy",
            type: "Crime",
            type: "Animation",
            type: "Historical Fiction",
            type: "History",
            type: "Hindi",
            type: "Satire",
            type: "Teen",
            type: "Action/Adventure",
            type: "Martial Arts",
            type: "Psychological Thriller"
    

        }
    Handlebars.registerHelper('genre'), function(type) {
        return movie.type + " " 
    });

    var html = template(context);
    $(".post")
}