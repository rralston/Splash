function displayAnswer(divID)
{

  for(var i = 1; i<=6;i++){
    if (divID != 'answer'+i) {
      document.getElementById('answer' + i).style.display = 'none';
      var player = document.getElementById('player' + i);
      var video = player["src"];
      player['src'] = '';
      player['src'] = video;
    }
    else{
      document.getElementById(divID).style.display = 'block';
    }
  }

  return false;
}


	$(function() {
	
	    var menu_ul = $('.hide_part'),
	           menu_a  = $('.open');
	    
	    menu_ul.hide();
	
	    menu_a.click(function(e) {
	        e.preventDefault();
	        if(!$(this).hasClass('active')) {
	            menu_a.removeClass('active');
	            menu_ul.filter(':visible').slideUp('normal');
	            $(this).addClass('active').next().stop(true,true).slideDown('normal');
	        } else {
	            $(this).removeClass('active');
	            $(this).next().stop(true,true).slideUp('normal');
	        }
	    });
	
	});
