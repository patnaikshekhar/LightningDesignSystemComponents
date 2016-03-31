# Spinner Component

A basic fullscreen spinner component. Used to indicate that the application is processing. Use the show attribute to show or hide the spinner dynamically.

## Attributes
- show (Boolean) - Should the spinner be shown? Use this to show/hide the spinner
- size (String) - The size of the spinner. Can be either small, medium or large. Default is medium.
- theme (String) - The theme of the spinner. Can be either default, brand or inverse. Default is default.

## Examples

### Example 1

**Output**
![Spinner 1 image](images/spinner1.png)

**Component**
```html
<ldsc:lightningDesignApplication>
	<ldsc:spinner />
</ldsc:lightningDesignApplication>
```

### Example 2

**Output**
![Spinner 2 image](images/spinner2.png)

**Component**
```html
<ldsc:lightningDesignApplication>
  <ldsc:spinner size="large" theme="brand"/>
</ldsc:lightningDesignApplication>
```
