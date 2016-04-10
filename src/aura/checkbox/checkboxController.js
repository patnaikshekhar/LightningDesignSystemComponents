({
	onChange : function(component, event, helper) {
        var currentValue = component.get('v.checked');
        var newValue = currentValue ? false : true;
        component.getEvent('onChange').fire({ domEvent: event, value: newValue})
	}
})