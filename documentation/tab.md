# Tab Component

A Tab component will be used with the [tabs component](tabs.md)

## Attributes
- label	(String) - Label of the tab. Will be shown on top.
- active (String) -	Should this tab be shown. One tab in a list of tabs should be active.
- type (String) -	The type of the tab. Can be either default or scoped.
- body (Aura.Component[]) - The contents of the tab component.

## Example

**Output**
![Tab image](images/tabs.png)

**Component**
```html
<ldsc:lightningDesignApplication >
	<ldsc:tabs>
        <ldsc:tab label="Tab 1" active="true">
            <p>These are the contents of tab 1</p>
        </ldsc:tab>
        <ldsc:tab label="Tab 2">
            <p>These are the contents of tab 2</p>
        </ldsc:tab>
    </ldsc:tabs>
    <ldsc:tabs type="scoped">
        <ldsc:tab label="Scoped Tab 1" active="true">
            <p>These are the contents of tab 1</p>
        </ldsc:tab>
        <ldsc:tab label="Scoped Tab 2">
            <p>These are the contents of tab 2</p>
        </ldsc:tab>
    </ldsc:tabs>
</ldsc:lightningDesignApplication>
```
