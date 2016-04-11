({
	selectionChanged : function(component, event, helper) {
		var values = event.getParam('value');
        component.set('v.options', values.options);
        component.set('v.selectedValues', values.selected);
	}
})