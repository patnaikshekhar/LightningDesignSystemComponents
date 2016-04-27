({
	setItems : function(component) {

        var items = component.get('v.items');
        var defaultIconName = component.get('v.defaultIconName');
        var defaultIconType = component.get('v.defaultIconType');
        var defaultIconSize = component.get('v.defaultIconSize');
        
        if (items.length > 0) {
            var transformedItems = items.map(function(i) {
                if (typeof i === "string") {
                    return {
                        label: i,
                        iconType: defaultIconType,
                        iconName: defaultIconName,
                        iconSize: defaultIconSize
                    }
                } else if (typeof i === "object") {
                    return i;
                }
            });

            component.set('v.lookupItems', transformedItems);
        } else {
            component.set('v.lookupItems', []);
        }
	},
    
    selectionChanged: function(component) {
        var selected = component.get('v.selected');
        var defaultIconName = component.get('v.defaultIconName');
        var defaultIconType = component.get('v.defaultIconType');
        var defaultIconSize = component.get('v.defaultIconSize');
        
        if (typeof selected === 'string') {
            // Single item selected in the form of a string
           	component.set('v.selectedPill', {
                label: selected,
                iconType: defaultIconType,
                iconName: defaultIconName,
                iconSize: defaultIconSize
            });    
        } else if (typeof selected === 'object') {
            // Single item selected in the form of an object with a label and a item
            
            if (selected) {
                component.set('v.selectedPill', selected);
            } else {
                component.set('v.selectedPill', undefined);
            }
                
        } else {
            // Multiple items selected in the form of an object with a label and a item
            component.set('v.selectedPills', selected.map(function(s) {
                if (typeof s === 'string') {
                    return {
                        label: s,
                        iconType: defaultIconType,
                        iconName: defaultIconName,
                        iconSize: defaultIconSize
                    };  
                } else if (typeof s === 'object') {
                    return s;
                }
            }));
        }
    }
})