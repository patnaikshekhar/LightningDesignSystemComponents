({
	onChange : function(component, event, helper) {
		component.set('v.notes', event.getParam('value'));
	},
    
    gotFocus : function(component, event, helper) {
		console.log('Text Area got focus');
	},
    
    lostFocus : function(component, event, helper) {
		console.log('Text Area got lost focus');
	}
})