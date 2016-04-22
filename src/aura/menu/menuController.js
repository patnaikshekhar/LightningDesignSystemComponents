({
    init: function(component, event, helper) {
    	helper.setup(component);    
    },
    
	showMoreClicked: function(component, event, helper) {
		var showMenu = component.get('v.show');
        component.set('v.show', showMenu ? false : true);
	},
    
    onClick: function(component, event, helper) {
        // Close menu
        component.set('v.show', false);
        
        component.getEvent('onClick').fire({ 
            domEvent: event.getParam('domEvent'),
            value: event.getParam('value')
        });
    }
})