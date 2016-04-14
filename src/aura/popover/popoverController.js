({
	init : function(component, event, helper) {
        helper.setNubbinPosition(component);
        
        // Default triggerStopElement
        if (component.get('v.triggerStopElement') == '') {
            component.set('v.triggerStopElement', component.get('v.triggerElement'));
        }
	}
})