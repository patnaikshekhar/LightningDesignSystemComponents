({
	setup: function(component, event, helper) {
		helper.setItems(component);
        helper.selectionChanged(component);
	},
    
    onChange: function(component, event, helper) {
        component.getEvent('onChange').fire({
            domEvent: event.getParam('domEvent'),
            value: event.getParam('value')
        });
    },
    
    selectedChanged: function(component, event, helper) {
        helper.selectionChanged(component);
    },
    
    triggerSelectItem: function(component, event, helper) {
        component.getEvent('onSelect').fire({
            domEvent: event.getParam('domEvent'),
            value: event.getParam('value')
        });
    },
    
    triggerOnRemove: function(component, event, helper) {
        component.getEvent('onRemove').fire({
            domEvent: event.getParam('domEvent'),
            value: event.getParam('value')
        });
    }
})