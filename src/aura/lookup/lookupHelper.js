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
        } else if (Array.isArray(selected)) {
            // Multiple items selected in the form of an object with a label and a item
            var pills = selected.map(function(node) {
                return ['c:pill', {
                    label: (typeof node === 'string' ? node : node.label),
                    iconName: (typeof node === 'string' ? defaultIconName : node.iconName),
                    iconType: (typeof node === 'string' ? defaultIconType : node.iconType),
                    iconSize: (typeof node === 'string' ? defaultIconSize : node.iconSize),
                }];
            });
            
            if (pills.length > 0) {
                $A.createComponents(pills, function(components, status, err) {
                    if (status === "SUCCESS") {
                        components.forEach(function(c) {
                            c.addHandler('onRemove', component, 'c.triggerOnRemove');
                        });
                        
                        component.set('v.selectedPills', components);
                    } else {
                        console.error('Error creating pills', err);
                    }
                });
            } else {
                component.set('v.selectedPills', []);
            }
            
        } else if (typeof selected === 'object') {
            // Single item selected in the form of an object with a label and a item
            
            if (selected) {
                component.set('v.selectedPill', selected);
            } else {
                component.set('v.selectedPill', undefined);
            }
                
        }
    }
})