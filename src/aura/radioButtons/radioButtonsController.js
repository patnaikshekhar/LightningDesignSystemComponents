({
	init : function(component, event, helper) {
        helper.setMappedBody(component);
	},
    
    onChange: function(component, event, helper) {
        component.getEvent('onChange').fire({ domEvent: event, value: event.getParam('value')})
    }
})