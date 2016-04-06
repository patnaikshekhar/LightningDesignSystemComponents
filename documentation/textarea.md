# Text Area Component

Basic Text Area in LDS. Consists of an input with a label. The onChange event is fired when the text area is changed (corresponds to the HTML onkeyup event).

## Attributes
- label	(String) - Label of the input control
- placeholder (String) - Placeholder text of the input control
- value (String) - Value of the input control

## Events
- onChange (ldsc:basicEvent) - Event fired when input element is changed. The event contains a value param with the current value of the input.
- onLostFocus	(ldsc:basicEvent) - Event fired when focus is removed from the input element
- onFocus	(ldsc:basicEvent) - Event fired when input element is selected

## Example

**Output**
![Input image](images/input.png)

**Component**
```html
<ldsc:lightningDesignApplication>
	<ldsc:textarea label="Notes" placeholder="Enter notes here..." onChange="{! c.onChange }" onFocus="{! c.gotFocus }" onLostFocus="{! c.lostFocus }" />

  <h1>{! v.notes }</h1>
</ldsc:lightningDesignApplication>
```

**Controller**
```js
({
	onChange : function(component, event, helper) {
		component.set('v.notes', event.getParam('value'));
	},

    gotFocus : function(component, event, helper) {
		console.log('Text Area got focus');
	},

    lostFocus : function(component, event, helper) {
		console.log('Text Area got lost focus');
	}
})
```
