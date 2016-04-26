({
	setItems : function(component) {
        
        var items = component.get('v.items');
        var defaultIconName = component.get('v.defaultIconName');
        var defaultIconType = component.get('v.defaultIconType');
        
        if (items.length > 0) {
            var transformedItems = items.map(function(i) {
                if (typeof i === "string") {
                    return {
                        label: i,
                        iconType: defaultIconType,
                        iconName: defaultIconName
                    }
                } else if (typeof i === "object") {
                    return i;
                }
            });
            
            component.set('v.lookupItems', transformedItems);
        }
	}
})