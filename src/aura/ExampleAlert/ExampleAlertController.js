({
    alertClicked : function(component, event, helper) {
		console.log('The alert was clicked', event.getSource());
	},
    
	alertClosed : function(component, event, helper) {
		console.log('The alert was closed', event.getSource());
	}
})