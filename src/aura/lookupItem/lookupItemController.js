({
	onClick : function(component, event, helper) {
        component.getEvent('onClick').fire({
            domEvent: event,
            value: component.get('v.label')
        });
	}
})