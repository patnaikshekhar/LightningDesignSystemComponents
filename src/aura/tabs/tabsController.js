({
	init : function(component, event, helper) {
        // Inherit the type from parent
        component.set('v.body', component.get('v.body').map(function(c) {
           c.set('v.type', component.get('v.type'));
           return c;
        }));
        
        // Create Tab headers
		helper.createTabHeaders(component);
	},
    
    changeTab : function(component, event, helper) {
        var indexOfTabWhichWasClicked = parseInt(event.target.dataset.id);
        var currentBody = component.get('v.body');
        
        var newBody = currentBody.map(function(c, i) {
            if (i == indexOfTabWhichWasClicked) {
                c.set('v.active', true);
            } else {
                c.set('v.active', false);
            }
            return c;
        });
        
        component.set('v.body', newBody);
        
        helper.createTabHeaders(component);
    }
})