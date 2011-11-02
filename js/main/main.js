require(
	{
		baseUrl: 'js/main',
		paths : {
			'jquery' : location.protocol + '//cdnjs.cloudflare.com/ajax/libs/jquery/1.6.4/jquery.min',
			'underscore' : location.protocol + '//cdnjs.cloudflare.com/ajax/libs/underscore.js/1.1.7/underscore-min',
			'backbone' : location.protocol + '//cdnjs.cloudflare.com/ajax/libs/backbone.js/0.5.3/backbone-min'
		}
	},
	["main"],
	function(){
		require(['require', 'jquery', 'underscore', 'backbone'], function(require){
			Backbone.sync = function(method, model, success, error){
				success();
			}
			
			require([
				'Collection/list',
				'Model/item',
				'View/itemView',
				'View/listView'
			], function(List, Item, ItemView, ListView){
				var listView = new ListView();
			});
		});
	}
);