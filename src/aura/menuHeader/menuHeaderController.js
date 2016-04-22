({
	init: function(component, event, helper) {
		helper.setup(component);
	},
    
    onClick: function(component, event, helper) {
        component.getEvent('onClick').fire({ 
            domEvent: event.getParam('domEvent'),
            value: event.getParam('value')
        });
    }
})