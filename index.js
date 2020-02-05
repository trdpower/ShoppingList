$(function() {
    $('form').on('submit', function(event){
        event.preventDefault();
        //add item to bottom of list
        let addedItem = $('#shopping-list-entry').val();
        $('.shopping-list').append(`<li>
        <span class="shopping-item">${addedItem}</span>
        <div class="shopping-item-controls">
          <button class="shopping-item-toggle">
            <span class="button-label">check</span>
          </button>
          <button class="shopping-item-delete">
            <span class="button-label">delete</span>
          </button>
        </div>
      </li>`);
    });

    //strike-through added item
    $('.shopping-list').on('click','.shopping-item-toggle', function(){
        $(this).closest('li').toggleClass('shopping-item__checked');
    })

    //remove deleted item
    $('.shopping-list').on('click','.shopping-item-delete', function(){
        $(this).closest("li").remove();
      });
});
