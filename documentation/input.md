# Input Component

Basic input component in LDS. Consists of an input with a label. The onChange event is fired when the input value is changed (corresponds to the HTML onkeyup event).

## Attributes
- label	(String) - Label of the input control
- placeholder (String) - Placeholder text of the input control
- value (String) - Value of the input control
- type (String) - HTML Type of the input control. Can be text, email, number, date, color, month, week, time, datetime, datetime-local, tel or url

## Events
- onChange (ldsc:basicEvent) - Event fired when input element is changed. The event contains a value param with the current value of the input.
- onLostFocus	(ldsc:basicEvent) - Event fired when focus is removed from the input element
- onFocus	(ldsc:basicEvent) - Event fired when input element is selected

## Example

**Output**
![Input image](images/input.png)

**Component**
```html
<aura:component>

  <aura:handler name="init" value="{! this }" action="{! c.init }" />

	<ldsc:lightningDesignApplication>    
        <ldsc:input label="Name" value="{! v.value }" onChange="{! c.onChange }" />
        <ldsc:input label="Address" placeholder="Enter Address Here" />
        <ldsc:input label="Email" type="email" value="{! v.email }" onFocus="{! c.gotFocus }" onLostFocus="{! c.lostFocus }"/>

        <h1>Name : {! v.value }</h1>
    </ldsc:lightningDesignApplication>
</aura:component>
```

**Controller**
```js
({
	init : function(component, event, helper) {

        var initialValue = 'John Doe';

		component.set('v.value', initialValue);
        component.set('v.email', initialValue.replace(/ /g, '').toLowerCase() + '@test.com');
	},

    onChange: function(component, event, helper) {

        var newValue = event.getParam('value');

        component.set('v.value', newValue);
        component.set('v.email', newValue.replace(/ /g, '').toLowerCase() + '@test.com');
    },

    gotFocus: function(component, event, helper) {
        console.log('Email element got focus');
    },

    lostFocus: function(component, event, helper) {
        console.log('Email element lost focus');
    }
})
```
