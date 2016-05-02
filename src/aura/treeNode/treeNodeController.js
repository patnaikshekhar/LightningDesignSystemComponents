({
    init: function(component, event, helper) {
        helper.createNodes(component.get('v.nodes'), function(err, nodes) {
            if (err) {
            	console.error("Could not create tree node", err);    
            } else {
                var existingBody = component.get('v.body');
            	component.set('v.body', existingBody.concat(nodes));
            }
        });
    },
    
	toggleOpenState: function(component, event, helper) {
		// Toggle Open State of node
		event.stopPropagation();
        component.set('v.open', (component.get('v.open') ? false : true));
	},
    
    onClick: function(component, event, helper) {
        event.stopPropagation();
        
        if (event.target) {
        	if (event.target.nodeName == 'svg' || event.target.nodeName == 'use' || event.target.nodeName == 'BUTTON') {
                return;
            }    
        }
        
        var nodeLabel = component.get('v.label');
        
        component.getEvent('onClick').fire({
            domEvent: event,
            value: nodeLabel + (event.getParam ? '/' + event.getParam('value') : '')
        });    
        
    }
})