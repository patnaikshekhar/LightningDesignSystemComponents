({
    setup: function(component, event, helper) {
        helper.navigateToSection(component, helper, component.get('v.defaultSectionName'));
    },
    
	navigate: function(component, event, helper) {
        var value = event.getParam('value');
        helper.navigateToSection(component, helper, value);
	}
})