({
	setMappedBody : function(component) {
		var body = component.get('v.body');
        var name = component.get('v.name');
        var value = component.get('v.value');

        // Set the name param on all the elements of body
        var newBody = body.map(function(child) {
            if (child.getName() == 'ldsc$radioButton') {
                
                // Inherit the name from the parent component
            	child.set('v.name', name);
                
                // Set whether the option is selected based on the value passed in
                var label = child.get('v.label');
                if (label) {
                	child.set('v.selected', label == value);    
                }
                
                // Set the onChange listener
                child.addHandler('onChange', component, 'c.onChange');
            }
            
            return child;
        });
        
        component.set('v.mappedBody', newBody);
	}
})