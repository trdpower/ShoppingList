$(function() {
    $('form').on('submit', function(){
        event.preventDefault();
        //add item to bottom of list
        let addedItem = $('#shopping-list-entry').val();
        $('.shopping-list').append('<li>' + addedItem + '</li>', '.shopping-item-controls').addClass('shopping-item-controls');
        
    });
        
    //strike-through added item
    $('.shopping-item-toggle').on('click', function(){
        $(this).closest('li').css("text-decoration", "line-through");
    });
    //remove deleted item
    $('.shopping-item-delete').on('click', function(){
        $(this).closest('li').remove();
    });
});