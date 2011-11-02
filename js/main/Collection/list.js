define(['../Model/item'],function(Item){
	var List = 	Backbone.Collection.extend({
			model: Item
		});
	return List;
});