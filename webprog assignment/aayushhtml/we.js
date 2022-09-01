$(document).ready(function(){
  
  $('.o-select__container').each(function(){
    var thisID = $(this).find('select').attr('id');
    $(this).attr('id','js_container_'+thisID);
    $(this).append('<div class="o-select__open" id="js_'+thisID+'">Select your option</div><ul class="o-select__fake" id="jsChild_'+thisID+'"></ul>');
  });
  
  var pbSelect = {};
  pbSelect.mainContent = $('.o-select__container').each(function(){$(this).attr('id')});
  pbSelect.selectID = $('.o-select').each(function(){$(this).attr('id')});
  pbSelect.selectLenght = $(pbSelect.selectID ).find('option').length;
  pbSelect.fakeSelectID = $('.o-select__open').each(function(){$(this).attr('id')});
  pbSelect.fakeSelectCont = $('.o-select__fake').each(function(){$(this).attr('id')});
  pbSelect.selectOption = $('.o-select option');
  //console.log(pbSelect.selectID[0].value);
  $(pbSelect.selectID).each( function(i){
    var __this = $(this);
    var values = $(this).find('option').map(function() { return $(this).val(); });
    var labels = $(this).find('option').map(function() { return $(this).text(); });
    var selected = $(this).find('option').map(function() {  if($(this).attr('selected')) return true; return false;  });
    console.log(selected);

    for(var i= 0; i < values.length; i++){
      var isSelected;
      if(selected[i] === true){
        isSelected = 'isSelected';
      } else {
        isSelected = '';
      }
      __this.parent().find(pbSelect.fakeSelectCont).append('<li class="o-select__Fakeitem '+ isSelected+'"  data-value="'+values[i]+'" >'+labels[i]+'</li>');
    }
  });
  pbSelect.fakeSelectItem = $('.o-select__Fakeitem');
  $(pbSelect.fakeSelectID).on('click touch', function() {
    var __this = $(this);
    $('.o-select__open').not(this).removeClass('isOpen');
    $('.o-select__open').not(this).next().removeClass('isOpen');
    $('.o-select__open').not(this).parent('div').removeClass('isOpen');     
    if(__this.hasClass('isOpen')){
      __this.removeClass('isOpen');
      __this.next().removeClass('isOpen');
      setTimeout (function(){
        __this.parent('div').removeClass('isOpen');      
      },500);      

    } else {
      __this.addClass('isOpen');
      __this.next().addClass('isOpen');
      __this.parent('div').addClass('isOpen');        
    }
  });
  
  $(pbSelect.fakeSelectItem).on('click touch', function() {
    var __this = $(this),
    this_value = __this.attr('data-value'),
    this_text = __this.text(); 
    __this.parent('.o-select__fake').find('li').removeClass('isSelected');
    __this.addClass('isSelected');   
    __this.parent().parent().find(pbSelect.selectOption).attr('selected',false);
    //console.log($(pbSelect.selectOption))
    __this.parent().parent().find(pbSelect.selectOption).each( function(){
      if(__this.val() === this_value ){__this.attr('selected',true);}
    });
    __this.parent('ul').prev('.o-select__open').text(this_text);
    __this.parent('ul').parent(pbSelect.mainContent).find('.a-value').text(this_text);
    if(__this.hasClass('isSelected')){
      setTimeout (function(){
        __this.parent('ul').prev('.o-select__open').trigger('click');
        //console.log(__this)
      },1200);
    }
  });
  

    $(pbSelect.mainContent).each( function(){ 
      $(this).children('.o-select__open ').on('click touch', function(e) {
        e.stopPropagation();
        return false;
      });
    });
    $(pbSelect.mainContent).each( function(){ 
      $(this).children('.o-select__fake ').on('click touch', function(e) {
        e.stopPropagation();
        return false;
      });
    });
    $(document).on('click touch', function() {
      $('.o-select__open , .o-select__fake').removeClass('isOpen');
    });     

 

  
  /*$('body').on('click', function (e) {
      if (!$('.o-select__open').is(e.target) 
          && $('.o-select__fake').has(e.target).length === 0 
      ) {
          $('.o-select__open , .o-select__fake').removeClass('isOpen');
      }
  }); */ 
 
  
});
