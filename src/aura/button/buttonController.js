({
	onClick : function(component, event, helper) {
		component.getEvent('onClick').fire({domEvent: event});
	}
})