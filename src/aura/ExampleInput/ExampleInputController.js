({
	init : function(component, event, helper) {
        
        var initialValue = 'John Doe';
        
		component.set('v.value', initialValue);
        component.set('v.email', initialValue.replace(/ /g, '').toLowerCase() + '@test.com');
	},
    
    onChange: function(component, event, helper) {
        
        var newValue = event.getParam('value');
        
        component.set('v.value', newValue);
        component.set('v.email', newValue.replace(/ /g, '').toLowerCase() + '@test.com');
    },
    
    gotFocus: function(component, event, helper) {
        console.log('Email element got focus');
    },
    
    lostFocus: function(component, event, helper) {
        console.log('Email element lost focus');
    }
})