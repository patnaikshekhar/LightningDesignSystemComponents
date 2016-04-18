({
    init: function(component, event, helper) {
    	helper.setup(component);    
    },
    
	showMoreClicked : function(component, event, helper) {
		var showMenu = component.get('v.show');
        component.set('v.show', showMenu ? false : true);
	}
})