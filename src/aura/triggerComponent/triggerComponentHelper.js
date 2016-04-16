({
	afterRender: function(component) {
        
		// Set event listener based on selector
        var selector = component.get('v.triggerElement');
        var stopSelector = component.get('v.triggerStopElement');
        var event = component.get('v.triggerEvent');
        var stopEvent = component.get('v.triggerStopEvent');
        
        var triggerElement = document.querySelector(selector);
        var triggerStopElement = document.querySelector(stopSelector);
        
        if (triggerElement) {
            
            // Attach stop trigger
            triggerStopElement.addEventListener(stopEvent, function(e) {
                if (component.get('v.show')) {
                    e.stopPropagation();
                    component.set('v.show', false);
                }
            });
            
            // Attach start trigger
            triggerElement.addEventListener(event, function(e) {
                if (!component.get('v.show')) {
                    e.stopPropagation();
                    component.set('v.show', true); 
                }
            });
        }
	}
})