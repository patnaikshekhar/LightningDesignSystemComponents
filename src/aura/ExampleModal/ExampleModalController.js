({
	showBasicModal : function(component, event, helper) {
		var currentState = component.get('v.showBasic');
        if (currentState) {
            component.set('v.showBasic', false);
        } else {
            component.set('v.showBasic', true);
        }
	},
    
    showDirectionalModal : function(component, event, helper) {
		var currentState = component.get('v.showDirectional');
        if (currentState) {
            component.set('v.showDirectional', false);
        } else {
            component.set('v.showDirectional', true);
        }
	},
    
    showTaglineModal : function(component, event, helper) {
		var currentState = component.get('v.showTagline');
        if (currentState) {
            component.set('v.showTagline', false);
        } else {
            component.set('v.showTagline', true);
        }
	},
    
    showLargeModal : function(component, event, helper) {
		var currentState = component.get('v.showLarge');
        if (currentState) {
            component.set('v.showLarge', false);
        } else {
            component.set('v.showLarge', true);
        }
	}
    
})