Alloy = require("alloy");

exports.definition = {
	
	config: {
		"columns": {
			"WebsiteIcon":"string",
			"WebsiteName":"string"
		},
		"adapter": {
			"type": Alloy.Globals.modelAdapter,
			"collection_name": "Favorite"
		}
	},		

	extendModel: function(Model) {		
		_.extend(Model.prototype, {
						
			// extended functions go here

		}); // end extend
		
		return Model;
	},
	
	
	extendCollection: function(Collection) {		
		_.extend(Collection.prototype, {
			
			// extended functions go here			
			
		}); // end extend
		
		return Collection;
	}
		
}

