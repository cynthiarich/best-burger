$(document).ready(function () {
    // Getting references to the create burger form and input
    const newForm = $("#burger-builder");
    const burgerName = $("#burgerName");
    const burgerMeat = $("#burgerMeat")
    const burgerCheese = $("#burgerCheese");
    const burgerBread = $("#burgerBread");
    const burgerDesc = $("#burgerDesc");

    //add newest cards and most popular cards
    //newest is everything added in the last 7 days
    //most popular gets the top 10 by number of upvotes = number of downvotes
    // When the submit button is clicked
    newForm.on("submit", event => {
        event.preventDefault();

        const burger = {
            burgerName: burgerName.val(),
            burgerMeat: burgerMeat.val(),
            burgerCheese: burgerCheese.val(),
            burgerBread: burgerBread.val(),
            burgerDesc: burgerDesc.val()
        };
        newBurger(burger);
    });
});

$(document).on("click", "#upvote", function () {
    const id = $(this).data("burgerid");
    
    $.post("/api/upvote", { 
        id 
    })
    .then(data => {
        window.location.replace("/");
    });
});

$(document).on("click", "#downvote", function () {
    const id = $(this).data("burgerid");
    console.log(`Downvoting: ${id}`);
    
    $.post("/api/downvote", { 
        id 
    })
    .then(data => {
        window.location.replace("/");
    });
});

function newBurger(burger) {
    const { burgerName, burgerMeat, burgerCheese, burgerBread, burgerDesc } = burger;
    
    $.post("/api/new", {
        burgerName,
        burgerMeat,
        burgerCheese,
        burgerBread,
        burgerDesc
    })
    .then(data => {
        window.location.replace("/");
    });
}

function handleErr(err) {
    $("#alert .msg").text(err.responseJSON);
    $("#alert").fadeIn(500);
}
