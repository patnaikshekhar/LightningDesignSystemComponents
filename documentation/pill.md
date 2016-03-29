# Pill Component

Within a form control, a pill represents an existing item in a database, as opposed to user-generated freeform text.

## Attributes
- label (String) - Label of pill
- avatarURL (String) - URL of the Avatar
- onRemove (Aura.Action) - Event called when the pill is removed

## Example

**Output**
![Pill image](images/pill.png)

**Component**
```html
<ldsc:lightningDesignApplication>
    <ldsc:pill label="Basic Pill" onRemove="{! c.removePill }" />
    <ldsc:pill label="Pill with icon" iconType="standard" iconName="account" />
    <ldsc:pill label="Pill with avatar" avatarURL="/resource/ldsc__SLDS100/assets/images/avatar2.jpg" />
</ldsc:lightningDesignApplication>
```

**Controller**
```js
({
	removePill : function(component, event, helper) {
		console.log('Pill was removed', event.target);
	}
})
```
