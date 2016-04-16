({
	getDefaultFontSize : function(parentElement) {
        parentElement = parentElement || document.body;
        var div = document.createElement('div');
        div.style.width = "1000em";
        parentElement.appendChild(div);
        var pixels = div.offsetWidth / 1000;
        parentElement.removeChild(div);
        return pixels;
	},
    
    calculatePosition: function(triggerElement, element, position, nubbinSize, popupWidth, helper) {
    	var positionTop = 0;
        var positionLeft = 0;
        
        var rect = triggerElement.getBoundingClientRect();
        var popupHeight = element.offsetHeight;
        var triggerElementTop = rect.top;
        var triggerElementLeft = rect.left;
        var triggerElementHeight = rect.height;
        var triggerElementWidth = rect.width;
        
        if (position === "right") {
            positionTop = triggerElementTop + (triggerElementHeight / 2) - (popupHeight / 2) + document.body.scrollTop;
            positionLeft = triggerElementLeft + triggerElementWidth + nubbinSize + document.body.scrollLeft;
        } else if (position === "left") {
            positionTop = triggerElementTop + (triggerElementHeight / 2) - (popupHeight / 2) + document.body.scrollTop;
            positionLeft = triggerElementLeft - popupWidth - nubbinSize + document.body.scrollLeft;
        } else if (position === "top") {
            positionTop = triggerElementTop - popupHeight - nubbinSize + document.body.scrollTop;
            positionLeft = triggerElementLeft + (triggerElementWidth / 2) - (popupWidth / 2) + document.body.scrollLeft;
        } else if (position === "bottom") {
            positionTop = triggerElementTop + triggerElementHeight + nubbinSize + document.body.scrollTop;
            positionLeft = triggerElementLeft + (triggerElementWidth / 2) - (popupWidth / 2) + document.body.scrollLeft;
        }
        
        return [positionTop, positionLeft];
	},
    
    setNubbinPosition: function(component) {
        var position = component.get('v.position');
        var nubbinPosition = '';
        
        if (position == 'left') {
       		nubbinPosition = 'right';
        } else if (position == 'right') {
            nubbinPosition = 'left';
        } else if (position == 'top') {
            nubbinPosition = 'bottom';
        } else if (position == 'bottom') {
            nubbinPosition = 'top';
        }
        
        component.set('v.nubbinPosition', nubbinPosition);
    },
    
    init: function(component, helper) {
        
        helper.setNubbinPosition(component);
        
        // Default triggerStopElement
        if (component.get('v.triggerStopElement') == '') {
            component.set('v.triggerStopElement', component.get('v.triggerElement'));
        }
    },
    
	onTrigger: function(component, helper) {
        // Remove the component from its current position on the DOM and place it in the main document body.
        var element = component.getElement();
        var position = component.get('v.position');

        var selector = component.get('v.triggerElement');
        var triggerElement = document.querySelector(selector);
        var remSize = helper.getDefaultFontSize(element.parentNode);
        
        if (element) {
            var nubbinSize = (remSize * parseInt(component.get('v.nubbinSize')));
        	var popupWidth = (remSize * parseInt(component.get('v.popupWidth')));
            
            var newPosition = helper.calculatePosition(triggerElement, element, position, nubbinSize, popupWidth, helper);
            element.style.position = 'absolute';
            element.style.top = Math.round(newPosition[0]) + 'px';
            element.style.left = Math.round(newPosition[1]) + 'px';    
        }
    },
    
    afterRender: function(component) {
        
		// Set event listener based on selector
        var selector = component.get('v.triggerElement');
        var stopSelector = component.get('v.triggerStopElement');
        var event = component.get('v.triggerEvent');
        var stopEvent = component.get('v.triggerStopEvent');
        
        var triggerElement = document.querySelector(selector);
        var triggerStopElement = document.querySelector(stopSelector);
        
        if (triggerElement) {
            
            // Attach start trigger
            triggerElement.addEventListener(event, function(e) {
                if (!component.get('v.show')) {
                    e.stopPropagation();
                    component.set('v.show', true);
                }
            });
            
            // Attach stop trigger
            triggerStopElement.addEventListener(stopEvent, function(e) {
                if (component.get('v.show')) {
                    e.stopPropagation();
                    component.set('v.show', false);
                }
            });
        }
	}
})