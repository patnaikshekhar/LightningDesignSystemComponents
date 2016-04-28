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
        component.set('v.listOfNumbers', []);
        component.set('v.selectedNumber', event.getParam('value'));
    },
    
    resetSelectedNumber: function(component, event, helper) {
        component.set('v.selectedNumber', null);
    },
    
    heroesFilterChanged: function(component, event, helper) {
        var searchString = event.getParam('value').toLowerCase();
        
        if (searchString !== '') {
            component.set('v.listOfSuperHeroes', helper.getSuperHeroes().filter(function(hero) {
                return hero.label.toLowerCase().startsWith(searchString);
            }));
        } else {
            component.set('v.listOfSuperHeroes', []);
        }
    },
    
    heroSelected: function(component, event, helper) {
        component.set('v.listOfSuperHeroes', []);
        var selectedHero = helper.getSuperHeroes().filter(function(hero) {
            return hero.label == event.getParam('value');
        })[0]; 
        
        var currentSelection = component.get('v.selectedHeroes');
        
        component.set('v.selectedHeroes', currentSelection.concat(selectedHero));
    },
    
    removeHero: function(component, event, helper) {
        var currentSelection = component.get('v.selectedHeroes');
        component.set('v.selectedHeroes', currentSelection.filter(function(hero) {
            return hero.label != event.getParam('value');
        }));
    }
})