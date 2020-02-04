$(function() {
    $('form').on('submit', function() {
        event.preventDefault();
        let addedItem = $('#shopping-list-entry').val();
        $('.shopping-list').append('<li>' + addedItem + '</li>',).addClass('.shopping-item-controls');





    })
});