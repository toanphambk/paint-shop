function buildTabs(counter){
        myTabs = '<div id="diatabs'+ counter +'" class="diatabs">';
        myTabs +=     '<ul>';
        myTabs +=      '<li class="tab1"><a href="#fragment-1-'+ counter +'"></a></li>';
        myTabs +=      '<li class="tab2"><a href="#fragment-2-'+ counter +'"></a></li>';
        myTabs +=      '<li class="tab3"><a href="#fragment-3-'+ counter +'"></a></li>';
        myTabs +=      '<li class="tab4"><a href="#fragment-4-'+ counter +'"></a></li>';
        myTabs +=    '</ul>';
        myTabs +=    '<div id="fragment-1-'+ counter +'">';
        myTabs +=      'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.';
        myTabs +=    '</div>';
        myTabs +=    '<div id="fragment-2-'+ counter +'">';
        myTabs +=     ' Blindtext  Blindtext  Blindtext  Blindtext  Blindtext  Blindtext  Blindtext  Blindtext  Blindtext  Blindtext  Blindtext  Blindtext  Blindtext ';
        myTabs +=    '</div>';
        myTabs +=    '<div id="fragment-3-'+ counter +'">';
        myTabs +=      'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.';
        myTabs +=    '</div>';
        myTabs +=      '<div id="fragment-4-'+ counter +'">';
        myTabs +=      'Blindtext  Blindtext  Blindtext  Blindtext  Blindtext  Blindtext  Blindtext  Blindtext  Blindtext  Blindtext  Blindtext  Blindtext  Blindtext' ;
        myTabs +=    '</div>';
        myTabs +=  '</div>';
        return myTabs;
    };
   
  $(document).ready(function(){
      $(buildTabs(myCounter)).appendTo('.diagnose.'+myCounter);
      $( "#diatabs"+myCounter ).tabs();
      myCounter++;
    $('.copyTab').unbind().click(function (){
        var counter = $( ".diatabs" ).get().length;
        if(counter === 4) return;
        var actWidth = $(this).closest('.diagnose').width();
        $('<div class="fixedPart diagnose '+myCounter+'"></div>').appendTo('#center');
        $('.diagnose.'+myCounter).load('diagnose.html');
        $('.diagnose.'+myCounter).animate({'right':(actWidth * counter)})
        //myCounter++;
    });
    $('.closeTabs').unbind().click(function (){
        $.each($(this).closest('.diagnose').nextAll(),function (){
            $(this).animate({'right':(parseInt($(this).css('right')) - $(this).closest('.diagnose').width())});
        });
        $(this).closest('.diagnose').remove();
    });
});


