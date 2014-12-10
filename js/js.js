; (function($) {
    var config = {};
    var dd = 0;
	$(window).bind('load',
	function() {
		reset();
	});
	$(window).bind('resize',
	function() {
		reset();
	});
	function reset() {
		config.w = $(window).width();
		config.h = $(window).height();
		$('#menu').height(config.h);
		$('.ct').height(config.h - 60);
		//$('#user').height(config.h);
	}
	$('.menu_open').bind('click',
	function(e) {
		if ($('#container').hasClass('pull') == false) {
			if (dd == 0) {
				$('#container,#menu,#header,#us_panel').addClass('push');
				dd = 1;
				$(window).bind('touchmove',
				function(e) {
					e.preventDefault();
					e.stopImmediatePropagation();
				});
				$('#us_panel').addClass('hide');
			} else {
				$('#container,#menu,#header,#us_panel').removeClass('push');
				dd = 0;
				$(window).unbind('touchmove');
			};
		}
		return false;
	});
	$('.search_open').bind('click',
	function(e) {
		if ($('#container').hasClass('push') == false) {
			if (dd == 0) {
				$('#container,#user,#header,#us_panel').addClass('pull');
				dd = 1;
				$(window).bind('touchmove',
				function(e) {
					e.preventDefault();
					e.stopImmediatePropagation();
				});
				$('#us_panel').addClass('hide');
			} else {
				$('#container,#user,#header,#us_panel').removeClass('pull');
				dd = 0;
				$(window).unbind('touchmove');
			}
		}
		return false;
	});
    $('#sort td').bind('click',
	function() {
		$('#sort_content').addClass('show');
		$('.asort').eq($(this).index()).addClass('show');
	});
	$('.asort .hd .fr').bind('click',
	function() {
		$('#sort_content').removeClass('show');
		var _this = $(this);
		setTimeout(function() {
			_this.parent().parent().parent().removeClass('show');
		},
		300);
	});

   $('.ct li').click(function() {
       var _this = $(this);
       _this.siblings().removeClass('a_selected');
	   _this.addClass('a_selected');

   })

  //if (document.getElementById('list')) {
		//$(window).bind('load',
		//function() {
			scLock = true;
			//$('.alist').openNewFrame();
			$('#container').bind('scroll',
			function() {
				var t = $('#container').scrollTop();
				if (t >= ($('#list').height() - $(window).height()) && scLock == true) {
					console.log(0);
					//now_page++;
					scLock = false;
					/*$.get('http://www.uehtml.com/list/', {
						page: now_page,
						fid: dt[0],
						owner: dt[1],
						sort: dt[2],
						search: search_value
					},
					function(data) {
						var v = $(data).find('#list ul').html();
						$('#list ul').append(v);
						var patt1 = new RegExp("alist");
						if (patt1.test(v)) {
							scLock = true;
						} else {
							$('.list_loading').html('<span>没有了!</span>');
						}
						tcst();
						//$('.alist').openNewFrame();
					});*/
			            var v = $('#list ul').html();
						setTimeout(function(){$('#list ul').append(v);$('.list_loading').html('<span>没有了!</span>');},2000);
						
				}
			});
		//}
		//);
	//}



})(Zepto)