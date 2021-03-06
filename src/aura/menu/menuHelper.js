({
	setup: function(component) {
        
        var helper = this;
        
        helper.createMenuItems(component, function() {
        	helper.transformComponentsInBody(component); 
            helper.addOnClickListeners(component, component.get('v.menuItems'));
            helper.addOnClickListeners(component, component.get('v.sections'));
        });
	},
    
    createMenuItems: function(component, callback) {
    	var menuItems = component.get('v.items');
        
        if (menuItems) {
            
            if (menuItems.length > 0) {
            	var menuItemsComponents = menuItems.map(function(value) {
                    if (value == '--') {
                    	return ['c:menuSeparator', {}];    
                    } else {
                        return ['c:menuItem', {
                            label: value
                        }];
                    }
                });

                $A.createComponents(menuItemsComponents, function(components, status, err) {
                    if (status === "SUCCESS") {
                        var existingBody = component.get('v.body');
                        component.set('v.body', existingBody.concat(components));
                        callback();
                    } else {
                        console.err('Error has occured when creating components', err);
                        callback();
                    }
                });	    
            } else {
                callback();
            }
        } else {
            callback();
        }
	},
    
    transformComponentsInBody: function(component) {
        var body = component.get('v.body');
        
        // Filter out the sections
        var filteredMenuItems = body.filter(function(c) {
            return (c.isInstanceOf('c:menuItem') || c.isInstanceOf('c:menuItem')
                    || c.isInstanceOf('c:menuSeparator') || c.isInstanceOf('c:menuSeparator'));
        });
        
        var menuItems = filteredMenuItems.reduceRight(function(acc, next) {
            if (next.isInstanceOf('c:menuSeparator') || next.isInstanceOf('c:menuSeparator')) {
                if (acc.length > 0) {
                	var previous = acc[0];
                	previous.set('v.class', 'slds-has-divider--top-space');
                    return acc;
                } else {
                	return acc;    
                }
            } else {
                return [next].concat(acc);
            }
        }, []);
        
        component.set('v.menuItems', menuItems);
                      
        component.set('v.sections', body.filter(function(c) {
            return (c.isInstanceOf('c:menuHeader') || c.isInstanceOf('c:menuHeader'));
        }));
    },
    
    addOnClickListeners: function(component, items) {
        items.forEach(function(item) {
           item.addHandler('onClick', component, 'c.onClick'); 
        });
    }
})