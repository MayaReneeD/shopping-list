$(document).ready (function(){
    //hearing for the submit button
    $('#js-shopping-list-form').submit(function(event){
    //preventing the browser from refreshing
    event.preventDefault();
    //define variable to add new item to list 
    const newItem = $('.js-shopping-list-entry').val();
    //allow user the ability to clear inputs
    $('.js-shopping-list-entry').val('');
    //allow to the user to add the new item to list
    $('.shopping-list').append(
      `<li>
          <span class="shopping-item">${newItem}</span>
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
    
    //need to delete item when user clicks on delete button
    $('.shopping-list').on('click','.shopping-item-delete', function(event){
      $(this).closest('li').remove();
    });
    //need to find item and check off item 
    $('.shopping-list').on('click','.shopping-item-toggle',function(event){
      $(this).closet('li').find('.shopping-item').toggleClass('.shopping-item_checked');
    });
    
  
    
  });