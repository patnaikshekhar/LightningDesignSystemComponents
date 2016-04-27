({
	init: function(component, event, helper) {
		component.set('v.listOfObjects', helper.getListOfObjects());
	},
    
    numbersChanged: function(component, event, helper) {
        var searchString = event.getParam('value').toLowerCase();
        
        if (searchString !== '') {
            component.set('v.listOfNumbers', helper.getNumbers().filter(function(num) {
                return num.toLowerCase().startsWith(searchString);
            }));
        } else {
            component.set('v.listOfNumbers', []);
        }
    },
    
    numberSelected: function(component, event, helper) {
        console.log('numberSelected');
        component.set('v.listOfNumbers', []);
        component.set('v.selectedNumber', event.getParam('value'));
    },
    
    resetSelectedNumber: function(component, event, helper) {
        console.log('resetSelectedNumber');
        component.set('v.selectedNumber', null);
    }
})