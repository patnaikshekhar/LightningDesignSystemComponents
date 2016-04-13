({
	init : function(component, event, helper) {
		component.set('v.nodes', helper.getSampleNodes());
	},
    
    handleTreeClick: function(component, event, helper) {
    	console.log(event.getParam('value'));
	}
})