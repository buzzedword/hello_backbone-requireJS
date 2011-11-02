"Hello, Backbone" meets RequireJS
===

The purpose of this project is to implement a simple "Hello, World!" application using BackboneJS, jQuery, and a modular directory structure glued together by RequireJS.

Why are you doing this?
---

BackboneJS is incredibly powerful; I personally don't want to ever create another web application without this in place. Backbone stresses powerful MVC concepts on the front-end, but unfortunately, not manageability of code. This makes it hard to grasp what makes Backbone similar to MVC.

Enter RequireJS
---

RequireJS introduces the concept of modular javascript packages, and a structured dependency method of coding which makes the developer consciously think about the components being used in their application. Using RequireJS, I can create a package to execute Facebook calls, and another package that has my application logic-- and only use `require('Facebook')` to include a vast swath of code. The downfall of RequireJS is that it doesn't enforce a specific application coding style, and can make it difficult for developers to visualize how to make their application modular.

A Match Made in Heaven
---

So what do we have? BackboneJS is very well structured but hardly modular, and RequireJS is highly modular but is absent of structure. Why not combine the two?

Using Backbone by itself, we would have an application structure that looks like this:

	(function ($) {
		
		var Item = Backbone.Model.extend({
			...
		});
		
		var List = Backbone.Collection.extend({
			...
		});
		
		var ItemView = Backbone.View.extend({
			...
		});
		
		var ListView = Backbone.View.extend({
			...
		});
		
		var listView = new ListView();
	}(jQuery));
	
You can infer the MVC inspiration by the keywords `Model`, `Collection`, and `View`-- but that's about all. There's no directory structure, no clear dependancies, and no simple way to maintain your application. What about after we split the code into RequireJS packages, how does it look then?

	require([
		'Collection/list',
		'Model/item',
		'View/itemView',
		'View/listView'
	], function(List, Item, ItemView, ListView){
		var listView = new ListView();
	});
	
Wow! That's neat, but where are we getting our Collections, Models, and Views?

Breaking your BackboneJS application into Modules
---

By breaking our individual Backbone declarations into files and wrapping them in RequireJS define/return pairs, we can create a beautifully modular system where you require only the pieces of the application you need. To render ListView, we need to require all 4 components of our application which have been isolated into their own files and wrapped in definition blocks. Specific views like the ListView require an additional dependency of ItemView since it uses a child view to render additional content. So long as you specify the correct asset  in the module definition, your application will execute successfully. By splitting your files modularly in this fashion, a Backbone application suddenly makes more sense as an MVC construct-- you can clearly define your Controllers, Collections, Views, and Models then add them in as needed with RequireJS.

Make sure you check the source repo for details! `app.js` is the Backbone source before breaking it up, and everything in the `main` directory is post-Require.
