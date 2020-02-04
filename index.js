$(function) {

    $('button').click(function(){
        const addedItem = $('#shopping-list-entry').val();
        $('.shopping-list').append('<li>' + addedItem + + '</li>');
        return false;
    })
}