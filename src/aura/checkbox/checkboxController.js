({
	onChange : function(component, event, helper) {
        
        var currentValue = component.get('v.value');
        var newValue = currentValue ? false : true;
        component.set('v.value', newValue);
        component.getEvent('onChange').fire({ domEvent: event, value: newValue})
	}
})