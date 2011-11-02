define(function(){
	var ItemView = Backbone.View.extend({
			tagName: 'li',
			
			events: {
				'click span.swap': 'swap',
				'click span.delete': 'remove'
			},
			
			initialize: function(){
				_.bindAll(this, 'render', 'unrender', 'swap', 'remove');
				
				this.model.bind('change', this.render);
				this.model.bind('remove', this.unrender);
			},
			
			render: function(){
				$(this.el).html([
					'<span style="color:black;">',
					this.model.get('part1'),
					' ',
					this.model.get('part2'),
					'</span>',
					' &nbsp; &nbsp; ',
					'<span class="swap" style="font-family:sans-serif; color:blue; cursor:pointer;">[swap]</span> ',
					'<span class="delete" style="cursor:pointer; color:red; font-family:sans-serif;">[delete]</span>'	
				].join(''));
				return this;
			},
			
			unrender: function(){
				$(this.el).remove();	
			},
			
			swap: function(){
				var swapped = {
					part1: this.model.get('part2'),
					part2: this.model.get('part1')
				};
				this.model.set(swapped);
			},
			
			remove: function(){
				this.model.destroy();
			}
		});
	return ItemView;
})