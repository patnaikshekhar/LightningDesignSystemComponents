({
    onClick : function(component, event, helper) {
        component.getEvent('onClick').fire({ domEvent: event });
	},
    
	onClose : function(component, event, helper) {
        component.set('v.show', false);
        component.getEvent('onClose').fire({ domEvent: event });
	}
})