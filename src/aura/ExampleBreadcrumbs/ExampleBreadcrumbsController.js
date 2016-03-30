({
	crumbClicked : function(component, event, helper) {
		console.log('The index ' + event.getParam('domEvent').target.dataset.id + 
                    ' was clicked. Which has the name ' + event.getParam('domEvent').target.dataset.name + '.');
	}
})