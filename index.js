$(function() {
    $('form').on('submit', function() {
        let addedItem = $('#shopping-list-entry').val();
        $('.shopping-list').append('<li>' + addedItem + '</li>');
    })
});