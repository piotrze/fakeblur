(function ($) {
	$.fn.fakeblur = function (options) {
		var selector = ($(this).selector).replace(/[^a-zA-Z0-9]/g, "");
		
    options = $.extend({
			source: 'body',
			overlay: '',
      suffix: '-blured',
			offset: {
				x: 0,
				y: 0
			},
			optClass: '',
			draggable: false,
			debug: false
		}, options);

		return this.each(function () {
			var $glue = $(this);
			var $source = $(options.source);
			var formattedSource = ($source.css('backgroundImage')).replace(/"/g, "").replace(/url\(|\)$/ig, "");

      var blurredData = formattedSource.replace(/(\.(\w)+$)/, options.suffix+".png");
      var attachment = $source.css('backgroundAttachment');
			var position = (attachment == 'fixed') ? '' : ($glue.offset().left - $source.offset().left - options.offset.x)*-1 + 'px ' + ($glue.offset().top - $source.offset().top - options.offset.y)*-1 + 'px';
			$glue.css({
				'background-image': 'url("' + blurredData + '")',
				'background-repeat': $source.css('backgroundRepeat'),
				'background-position': position,
				'background-attachment': attachment
			});

			if(options.optClass != false) {
				$glue.addClass(options.optClass);
			}
			if(options.draggable) {
				$glue.css({
					'background-attachment': 'fixed',
					'background-position': '0 0'
				});
				$glue.draggable();
			}
			
      if(options.debug) {
				console.log('Source Used');
			}
		});
  };
})(jQuery);
