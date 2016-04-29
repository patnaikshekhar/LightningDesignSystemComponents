({
	init: function(component, event, helper) {
		component.set('v.listOfObjects', helper.getListOfObjects());
	},
    
    numbersChanged: function(component, event, helper) {
        // Get the search string
        var searchString = event.getParam('value').toLowerCase();
        
        // Filter the current list of numbers by the search string (use lowercase)
        if (searchString !== '') {
            component.set('v.listOfNumbers', helper.getNumbers().filter(function(num) {
                return num.toLowerCase().startsWith(searchString);
            }));
        } else {
            component.set('v.listOfNumbers', []);
        }
    },
    
    numberSelected: function(component, event, helper) {
        // Remove the search results by nullifing the list
        component.set('v.listOfNumbers', []);
        
        // Set the selected number based on the value selected
        component.set('v.selectedNumber', event.getParam('value'));
    },
    
    resetSelectedNumber: function(component, event, helper) {
        component.set('v.selectedNumber', null);
    },
    
    heroesFilterChanged: function(component, event, helper) {
        // Get the search string
        var searchString = event.getParam('value').toLowerCase();
        
        // Filter the current list of heroes by the search string (use lowercase)
        if (searchString !== '') {
            component.set('v.listOfSuperHeroes', helper.getSuperHeroes().filter(function(hero) {
                return hero.label.toLowerCase().startsWith(searchString);
            }));
        } else {
            component.set('v.listOfSuperHeroes', []);
        }
    },
    
    heroSelected: function(component, event, helper) {
        
        // Nullify the search string
        // Hack to nulify
        component.set('v.herosSearchString', event.getParam('value'));
        component.set('v.herosSearchString', '');
        // Remove the search box
        component.set('v.listOfSuperHeroes', []);
        
        // Find the hero which was selected
        var selectedHero = helper.getSuperHeroes().filter(function(hero) {
            return hero.label == event.getParam('value');
        })[0]; 
        
        // Get the current selection of heroes
        var currentSelection = component.get('v.selectedHeroes');
        
        // Append the heroes to the current selection
        component.set('v.selectedHeroes', currentSelection.concat(selectedHero));
    },
    
    removeHero: function(component, event, helper) {
        // Get current selection of heroes
        var currentSelection = component.get('v.selectedHeroes');
        
        // Remove the hero by filtering the list
        component.set('v.selectedHeroes', currentSelection.filter(function(hero) {
            return hero.label != event.getParam('value');
        }));
    }
})