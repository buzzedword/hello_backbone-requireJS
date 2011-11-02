define(['../View/itemView', '../Model/item', '../Collection/list'], function(ItemView, Item, List){
	var ListView = Backbone.View.extend({
			el : $('body'),
			
			events : {
				'click button#add': 'addItem'
			},
			
			initialize : function(){
				_.bindAll(this, 'render', 'addItem', 'appendItem');
				this.collection = new List();
				this.collection.bind('add', this.appendItem);
				
				this.counter = 0;
				this.render();
			},
			
			render: function(){
				$(this.el).append("<button id='add'>Add list item</button>");
				$(this.el).append("<ul></ul>");
				_(this.collection.models).each(function(item){
					appendItem(item);
				}, this);
			},
			
			addItem: function(){
				this.counter++;
				var item = new Item();
				item.set({
					part2: item.get('part2') + this.counter
				});
				this.collection.add(item);
			},
			
			appendItem: function(item){
				var itemView = new ItemView({
					model: item
				});
				$('ul', this.el).append(itemView.render().el);
			}
		});
		return ListView;
});