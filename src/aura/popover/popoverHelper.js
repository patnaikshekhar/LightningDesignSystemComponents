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
    
    calculatePosition: function(triggerElement, element, position, helper) {
    	var positionTop = 0;
        var positionLeft = 0;
        
        var nubbinSize = (helper.getDefaultFontSize(element.parentNode) * 1);
                        
        var rect = triggerElement.getBoundingClientRect();
        var popupHeight = element.offsetHeight;
        var popupWidth = element.offsetWidth;
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
    }
})