({
	setup : function(component) {
		var body = component.get('v.body');
        
        // Filter out the sections
        var filteredMenuItems = body.filter(function(c) {
            return (c.getName() == 'ldsc$menuItem' || c.getName() == 'c$menuItem'
                    || c.getName() == 'ldsc$menuSeperator' || c.getName() == 'c$menuSeperator');
        });
        
        var menuItems = filteredMenuItems.reduceRight(function(acc, next) {
            if (next.getName() == 'ldsc$menuSeperator' || next.getName() == 'c$menuSeperator') {
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
            return (c.getName() == 'ldsc$menuHeader' || c.getName() == 'c$menuHeader');
        }));
	}
})