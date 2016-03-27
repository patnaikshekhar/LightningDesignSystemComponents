({
	createTabHeaders : function(component) {
		var components = component.get('v.body');
        
        component.set('v.tabs', components.map(function(c) {
            return {
                label: c.get('v.label'),
                active: c.get('v.active'),
                component: c
            }
        }));
	}
})