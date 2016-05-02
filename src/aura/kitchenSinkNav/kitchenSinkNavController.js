({
	selectNode : function(component, event, helper) {
        component.getEvent('onNav').fire({
            domEvent: event.getParam('domEvent'),
            value: event.getParam('value')
        });
	}
})