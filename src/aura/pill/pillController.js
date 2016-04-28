({
	onRemove : function(component, event, helper) {
        component.getEvent('onRemove').fire({
            domEvent: event,
            value: component.get('v.label')
        });
	}
})