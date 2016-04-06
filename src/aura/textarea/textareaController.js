({
	onChange : function(component, event, helper) {
        component.getEvent('onChange').fire({domEvent: event, value: event.target.value });
	},
    
    onFocus : function(component, event, helper) {
        component.getEvent('onFocus').fire({domEvent: event, value: event.target.value });
	},
    
    onLostFocus : function(component, event, helper) {
        component.getEvent('onLostFocus').fire({domEvent: event, value: event.target.value });
	}
})