({
	setup : function(component) {
        this.transformComponentsInBody(component);
        this.addOnClickListeners(component);
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
    },
    
    addOnClickListeners: function(component) {
        var menuItems = component.get('v.menuItems');
        menuItems.forEach(function(item) {
           item.addHandler('onClick', component, 'c.onClick'); 
        });
    }
})