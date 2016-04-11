({
	selectedOptionsIndexChanged : function(component, event, helper) {
        
        // Update the class based on what is currently selected (clicked).
        var selectedIndex = component.get('v.selectedOptionsIndex');
        var currentOptions = component.get('v.options');
        
        if (component.getElement().querySelector('li.source.highlighted'))
        	component.getElement().
        		querySelector('li.source.highlighted').className = 'slds-picklist__item source';
        
        if (component.getElement().
        	querySelector('li.source.slds-picklist__item[data-index="' + selectedIndex + '"]'))
        	component.getElement().
        		querySelector('li.source.slds-picklist__item[data-index="' + selectedIndex + '"]').
        		className = 'slds-picklist__item source highlighted';
    },
    
    selectedSelectionIndexChanged : function(component, event, helper) {
        // Update the class based on what is currently selected (clicked).
        var selectedIndex = component.get('v.selectedSelectionIndex');
        var currentOptions = component.get('v.selected');
        
        if (component.getElement().querySelector('li.dest.highlighted'))
        	component.getElement().
        		querySelector('li.dest.highlighted').className = 'slds-picklist__item dest';
        
        if (component.getElement().
        	querySelector('li.dest.slds-picklist__item[data-index="' + selectedIndex + '"]'))
            component.getElement().
                querySelector('li.dest.slds-picklist__item[data-index="' + selectedIndex + '"]').
                className = 'slds-picklist__item dest highlighted';
    }
})