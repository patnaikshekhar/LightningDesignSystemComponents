({
    setup: function(component, event, helper) {
        helper.navigateToSection(component, helper, component.get('v.defaultSectionName'));
    },
    
	selectNode : function(component, event, helper) {
        var value = event.getParam('value');
        helper.navigateToSection(component, helper, value);
	}
})