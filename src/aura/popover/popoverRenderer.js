({
    afterRender: function(component, helper) {
        
        // Set event listener based on selector
        var selector = component.get('v.triggerElement');
        var stopSelector = component.get('v.triggerStopElement');
        var event = component.get('v.triggerEvent');
        var stopEvent = component.get('v.triggerStopEvent');
        
        var stopEvent = component.get('v.triggerStopEvent');
        var position = component.get('v.position');
        
        var triggerElement = document.querySelector(selector);
        var triggerStopElement = document.querySelector(stopSelector);
        
        if (triggerElement) {
            triggerStopElement.addEventListener(stopEvent, function(e) {
                if (component.get('v.show')) {
                    e.stopPropagation();
                    component.set('v.show', false);
                }
            });
            
            triggerElement.addEventListener(event, function(e) {
                if (!component.get('v.show')) {
                    e.stopPropagation();
                    component.set('v.show', true); 
                
                    // Remove the component from its current position on the DOM and place it in the main document body.
                    var element = component.getElement();
                    
                    if (element) {
                        element.parentNode.removeChild(element);
                        document.body.appendChild(element);
                        
                        var newPosition = helper.calculatePosition(triggerElement, element, position, helper);
                        element.style.top = newPosition[0] + 'px';
                        element.style.left = newPosition[1] + 'px';    
                    }
                }
            });
        } else {
            console.error('Trigger Element was not found');
        }
    }
})