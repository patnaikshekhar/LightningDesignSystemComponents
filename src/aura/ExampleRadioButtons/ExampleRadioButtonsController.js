({
	init : function(component, event, helper) {
		component.set('v.selectedColor', 'green');
        component.set('v.selectedOption', 'Option 2');
	},
    
    onSelectColor: function(component, event, helper) {
        component.set('v.selectedColor', event.getParam('value'));
    },
    
    onSelectManualOption: function(component, event, helper) {
        component.set('v.selectedOption', event.getParam('value'));
    }
})