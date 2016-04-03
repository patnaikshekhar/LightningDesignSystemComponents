# Lightning Components for Lightning Design System

## Under Development - Alpha to be released April 30th 2016

An open source library of [lightning components](https://developer.salesforce.com/docs/atlas.en-us.lightning.meta/lightning/) for the [Lightning Design System](http://www.lightningdesignsystem.com/). The purpose of this project is to create easy to use generic components that can be used in a lightning application. Since the Lightning Design System is still in-flux this is going to be a changing set of components. Pull request, feature requests and issues are most welcome.

This helps make your lightning application a little more concise and semantic. So instead of writing

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

## Installation

Installation is via a managed package.
Managed package link goes here (TBD)

## Components

- [Lightning Design Application](documentation/lightningDesignApplication.md)
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

## Interfaces

- htmlAttributes - Contains the id and class standard HTML attributes which can be applied to components.
- iconAttributes - These set a list of attributes available for components which use icons internally.

## Documentation

Documentation for each of the components can be accessed at the following link (after you install the managed package)

https://<BASE_URL>/auradocs/reference.app

Where BASE_URL is the url of your instance. Once you reach the standard aura documentation page you can navigate to the ldsc namespace to check the documentation for each of the components.
