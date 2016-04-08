({
	setMappedBody : function(component) {
		var body = component.get('v.body');
        var name = component.get('v.name');
        console.log();
        // Set the name param on all the elements of body
        var newBody = body.map(function(component) {
            if (component.getName() == 'ldsc$radioButton') {
            	component.set('v.name', name);    
            }
            
            return component;
        });
        
        console.log(body, newBody);
        
        component.set('v.mappedBody', newBody);
	}
})