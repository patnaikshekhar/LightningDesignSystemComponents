({
	selectOption : function(component, event, helper) {
		var index = event.target.dataset.index;
		component.set('v.selectedOptionsIndex', index);
	},
    
    selectSelection : function(component, event, helper) {
		var index = event.target.dataset.index;
		component.set('v.selectedSelectionIndex', index);
	},
    
    addOption : function(component, event, helper) {
		var selectedIndex = component.get('v.selectedOptionsIndex');
        var currentSelection = component.get('v.selected');
        var currentOptions = component.get('v.options');
        
        if (currentOptions[selectedIndex]) {
            component.getEvent('onChange').fire({
                domEvent: event,
                value: {
                    options: currentOptions.filter(function(o, index) {
                       return index != selectedIndex; 
                    }),
                    selected: currentSelection.concat(currentOptions[selectedIndex])
                }
            });
            
            component.set('v.selectedOptionsIndex', selectedIndex);
        }
        
	},
    
    removeSelection : function(component, event, helper) {
		var selectedIndex = component.get('v.selectedSelectionIndex');
        var currentSelection = component.get('v.selected');
        var currentOptions = component.get('v.options');
        
        if (currentSelection[selectedIndex]) {
            component.getEvent('onChange').fire({
                domEvent: event,
                value: {
                    options: currentOptions.concat(currentSelection[selectedIndex]),
                    selected: currentSelection.filter(function(o, index) {
                       return index != selectedIndex; 
                    })
                }
            });
            
            component.set('v.selectedSelectionIndex', selectedIndex);
        }
	},
    
	moveOrderUp : function(component, event, helper) {
		var selectedIndex = parseInt(component.get('v.selectedSelectionIndex'));
        var currentSelection = component.get('v.selected');
        var currentOptions = component.get('v.options');
        
        if (selectedIndex > 0) {
            var element = currentSelection.slice(selectedIndex, selectedIndex + 1);
            var previousElement = currentSelection.slice(selectedIndex - 1, selectedIndex);
            var afterElement = currentSelection.slice(selectedIndex + 1);
            var beforeElement = currentSelection.slice(0, selectedIndex - 1);
    
            var newSelection = beforeElement.concat(element).concat(previousElement).concat(afterElement);
            
        	component.getEvent('onChange').fire({
            	domEvent: event,
                value: {
                    options: currentOptions,
                    selected: newSelection
                }
            });
            
            component.set('v.selectedSelectionIndex', selectedIndex - 1);
        }      
	},

    moveOrderDown : function(component, event, helper) {
        var selectedIndex = parseInt(component.get('v.selectedSelectionIndex'));
        var currentSelection = component.get('v.selected');
        var currentOptions = component.get('v.options');
        
        if (selectedIndex <= currentSelection.length - 1) {
            var element = currentSelection.slice(selectedIndex, selectedIndex + 1);
            var nextElement = currentSelection.slice(selectedIndex + 1, selectedIndex + 2);
            var afterElement = currentSelection.slice(selectedIndex + 2);
            var beforeElement = currentSelection.slice(0, selectedIndex);
            
            var newSelection = beforeElement.concat(nextElement).concat(element).concat(afterElement);
            
            component.getEvent('onChange').fire({
                domEvent: event,
                value: {
                    options: currentOptions,
                    selected: newSelection
                }
            });
            
            component.set('v.selectedSelectionIndex', selectedIndex + 1);
        }      
    },
    
    selectedOptionsIndexChanged : function(component, event, helper) {
        helper.selectedOptionsIndexChanged(component, event, helper);
    },
    
    selectedSelectionIndexChanged : function(component, event, helper) {
        helper.selectedSelectionIndexChanged(component, event, helper);
    }
})