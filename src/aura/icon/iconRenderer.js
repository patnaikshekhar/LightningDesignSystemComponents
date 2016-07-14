({
	render: function(component, helper) {
		//console.log('Rendering icon');
		var BASE_URL = '/resource/ldsc__SLDS100/assets';        
        var id = component.get("v.id");
        var iconType = component.get("v.iconType");
        var iconName = component.get("v.iconName");
        var className = '';
        
        if (component.get("v.class") != "") {
        	className += ' ' + component.get("v.class");  
        } else {
            className = 'slds-icon ' + 'slds-icon--' + component.get('v.iconSize');
            
            className += ' slds-icon-' + iconType + '-' + iconName.replace(/_/g, "-");
                
            // If type is action then add round class
            if (iconType === 'action') {
                className += ' slds-icon_container--circle';
            }
            
            if (iconType == 'utility') {
                className += ' slds-icon-text-default';
            }
            
        }        
        
        var svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        
        if (id)
        	svg.setAttribute('id', id);
        
		svg.setAttribute('class', className);
		svg.setAttribute('aria-hidden', 'true');
		svg.innerHTML = '<use xlink:href="' + BASE_URL + '/icons/' + iconType + '-sprite/svg/symbols.svg#' + iconName + '"></use>';
        
        // Is a container required
        if (!component.get('v.iconContainer')) {
            return svg;
        } else {
            var containerClass = 'slds-icon_container ';
            
            // If no css was provided
            if (component.get('v.iconContainerClass') == "") {
            	// Add background css based on icon
            	
            	containerClass += ' slds-icon-' + iconType + '-' + iconName.replace(/_/g, "-");
                
                // If type is action then add round class
                if (iconType === 'action') {
                    containerClass += ' slds-icon_container--circle';
                }
            } else {
                containerClass += component.get('v.iconContainerClass');
            }
            
        	var container = document.createElement('span');
            container.setAttribute('class', containerClass);
            container.appendChild(svg);
            return container;
        }
	
    }
})