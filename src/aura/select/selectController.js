({
	onChange : function(component, event, helper) {
        component.getEvent('onChange').fire({ domEvent: event, value: event.target.value });
	}
})