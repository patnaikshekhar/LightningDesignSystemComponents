# Lightning Components for Lightning Design System

An open source library of [lightning components](https://developer.salesforce.com/docs/atlas.en-us.lightning.meta/lightning/) for the [Lightning Design System](http://www.lightningdesignsystem.com/). The purpose of this project is to create easy to use generic components that can be used to accelerate the development of a lightning application.

**These components are meant to be used programatically using the developer console and are not meant to be using directly in Lightning App Builder or Community Builder.**

These components help make your lightning application a little more concise and semantic as compared to using the Lightning Design System by itself. So instead of writing

```html
<a href="#void" class="slds-pill">
  <svg aria-hidden="true" class="slds-icon slds-icon-standard-account slds-pill__icon">
    <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="/assets/icons/standard-sprite/svg/symbols.svg#account"></use>
  </svg>
  <span class="slds-pill__label">Pill Label</span>
  <button class="slds-button slds-button--icon-bare slds-pill__remove">
    <svg aria-hidden="true" class="slds-button__icon">
      <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#close"></use>
    </svg>
    <span class="slds-assistive-text">Remove</span>
  </button>
</a>
```

to create a pill. You instead would just write

```html
  <ldsc:pill label="Pill with icon" iconType="standard" iconName="account" onRemove="{! c.removePill }" />
```

Since the Lightning Design System is still in-flux this is going to be a changing set of components. Pull requests, features and issues are most welcome.

## Installation (Alpha 1)

Installation is via a [managed package](https://login.salesforce.com/packaging/installPackage.apexp?p0=04t58000000AANu).

## Components

- [Lightning Design Application](documentation/lightningDesignApplication.md)
- [Grid](documentation/grid.md)
- [Column](documentation/col.md)
- [Badge](documentation/badge.md)
- [Breadcrumbs](documentation/breadcrumbs.md)
- Button
- Button Group
- [Icon](documentation/icon.md)
- [Tabs](documentation/tabs.md)
- [Tab](documentation/tab.md)
- [Spinner](documentation/spinner.md)
- [Modal](documentation/modal.md)
- [Pill](documentation/pill.md)
- [Alert](documentation/alert.md)
- **Form Elements**
  - [Input](documentation/input.md)
  - [Text Area](documentation/textarea.md)
  - [Radio Buttons](documentation/radioButtons.md)
  - [Checkbox](documentation/checkbox.md)
  - [Checkboxes](documentation/checkboxes.md)
  - [Select](documentation/select.md)
  - [Multi-Select](documentation/multiselect.md)
  - [Lookup](documentation/lookup.md)
  - [Form](documentation/form.md)
- [Image](documentation/image.md)
- [Media](documentation/media.md)
- [Tile](documentation/tile.md)
- [Tree](documentation/tree.md)
- [Popover](documentation/popover.md)
- [Menu](documentation/menu.md)
- [Page Header](documentation/pageHeader.md)

## Interfaces

- htmlAttributes - Contains the id and class standard HTML attributes which can be applied to components.
- iconAttributes - These set a list of attributes available for components which use icons internally.

## Documentation

Documentation for each of the components can be accessed at the following link (after you install the managed package)

https://BASE_URL/auradocs/reference.app

Where BASE_URL is the url of your instance. Once you reach the standard aura documentation page you can navigate to the ldsc namespace to check the documentation for each of the components.

## Releases

- **Alpha 2** : Planned (29/05/2016) - Scope
  - Improved documentation - Kitchen Sink and Tutorial Video
  - Ready for Beta release to app exchange
  - Additional Components Data Table, Cards??
  - Upgrade to Summer '16 ??

- **Alpha 1** : Completed (30/04/2016)
  - Base Release
  - Basic components from Spring '16 Release
