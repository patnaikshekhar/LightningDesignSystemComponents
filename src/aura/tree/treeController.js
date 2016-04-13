({
	init : function(component, event, helper) {
        helper.createNodes(component.get('v.nodes'), function(err, nodes) {
            if (err) {
            	console.error("Could not create tree node", err);    
            } else {
                var existingBody = component.get('v.body');
            	component.set('v.body', existingBody.concat(nodes));
                helper.setLevel(component, component, helper, 0);
                helper.toggleAll(component.get('v.expandAll'), component, helper);
            }
        });
	},
    
    onClick: function(component, event, helper) {
        component.getEvent('onClick').fire({
            domEvent: event,
            value: event.getParam('value')
        });
    },
    
    toggleAll: function(component, event, helper) {
        helper.toggleAll(component.get('v.expandAll'), component, helper);
    }
})