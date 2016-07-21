({
	onChange : function(component, event, helper) {
        
        // Work around for the locker service.
        var selectedItems = event.target.children.filter(function(option) {	
            return option.selected
        });
        
        if (selectedItems.length > 0) {
        	component.getEvent('onChange').fire({ domEvent: event, value: selectedItems[0].value });    
        }
	}
})