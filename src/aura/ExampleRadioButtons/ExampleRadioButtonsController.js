({
	init : function(component, event, helper) {
		component.set('v.selectedColor', 'green');
	},
    
    onSelectColor: function(component, event, helper) {
        component.set('v.selectedColor', event.getParam('value'));
    }
})