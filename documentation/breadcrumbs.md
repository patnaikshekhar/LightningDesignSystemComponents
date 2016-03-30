# Breadcrumbs Component

Breadcrumbs are used for navigation. The crumbs attribute is an array of the crumbs. The onClick action is called when a crumb is clicked. There are two data attributes data-id and data-name which are set on the crumb so that one can identify which crumb was clicked.

## Attributes
- assistiveText (String) - Assistive Text to  be displayed
- crumbs (String[]) - List of links names

## Events
- onClick (Aura.Action) - Action to be called when clicked

## Example

**Output**
![Breadcrumbs image](images/breadcrumbs.png)

**Component**
```html
<ldsc:LightningDesignApplication >
	<ldsc:breadcrumbs crumbs="Account,Contact" onClick="{! c.crumbClicked }" />
</ldsc:LightningDesignApplication>
```

**Controller**
```js
({
	crumbClicked : function(component, event, helper) {
		console.log('The index ' + event.getParam('domEvent').target.dataset.id +
                    ' was clicked. Which has the name ' + event.getParam('domEvent').target.dataset.name + '.');
	}
})
```
