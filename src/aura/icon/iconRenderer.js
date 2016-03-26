({
	render: function(component, helper) {
		
		var BASE_URL = '/resource/ldsc__SLDS100/assets';        
        var id = component.get("v.id");
        var className = (component.get("v.class") ? component.get("v.class") : '') + 
            (component.get("v.iconSize") ? ' slds-button__icon--' + component.get("v.iconSize") : '');
        
		var iconType = component.get("v.iconType");
        var iconName = component.get("v.iconName");
        
        var svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        
        if (id)
        	svg.setAttribute('id', id);
        
		svg.setAttribute('class', className);
		svg.setAttribute('aria-hidden', 'true');
		svg.innerHTML = '<use xlink:href="' + BASE_URL + '/icons/' + iconType + '-sprite/svg/symbols.svg#' + iconName + '"></use>';
		return svg;
    }
})