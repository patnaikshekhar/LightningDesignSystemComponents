({
	crumbClicked : function(component, event, helper) {
		console.log('The index ' + event.target.dataset.id + 
                    ' was clicked. Which has the name ' + event.target.dataset.name + '.');
	}
})