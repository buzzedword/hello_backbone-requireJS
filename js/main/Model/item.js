define(function(){
	var Item = Backbone.Model.extend({
		defaults: {
			part1: "hello",
			part2: "world"
		}
	});
	
	return Item;
});