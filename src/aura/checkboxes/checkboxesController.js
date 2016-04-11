({
	updateState : function(component, event, helper) {
		var labels = component.get('v.labels');
        var values = component.get('v.values');
        component.set('v.items', labels.map(function(label, i) {
            return {
                label: label,
                value: (values ? (values[i] ? values[i] : false) : false)
            }
        }));
	},
    
    onChange : function(component, event, helper) {
        var values = component.get('v.values');
        var labels = component.get('v.labels');
        
        var labelOfChangedCheckbox = event.getSource().get('v.label');
        var labelPosition = labels.indexOf(labelOfChangedCheckbox);
        
        var newValues = values.map(function(val, i) {   	
            if (i == labelPosition) {
            	return event.getParam('value');
            } else {
                return val;
            }
        });
        
        component.getEvent('onChange').fire({ domEvent: event, value: newValues });
    }
})