({
	init: function(component, event, helper) {
		component.set('v.colors', [false, false, true]);
        component.set('v.options', [false, false, false]);
	},
    
    colorChanged: function(component, event, helper) {
        component.set('v.colors', event.getParam('value'));
    }
})