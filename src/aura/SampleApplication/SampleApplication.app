<aura:application access="GLOBAL">
	<c:LightningDesignApplication >
        
        <!--<ldsc:ExampleSpinner />-->
        <!--<ldsc:ExampleModal />-->
        
        <c:tabs >
            <c:tab label="Badges" active="true">
                <c:badge onClick="{! c.buttonClick }">Test</c:badge>
    			<c:badge theme="inverse">Test</c:badge>
            </c:tab>
            <c:tab label="Button">
                <c:ExampleButton />
            </c:tab>
            <c:tab label="Button Group">
                <c:ExampleButtonGroup />
            </c:tab>
            <c:tab label="Breadcrumbs">
                <c:ExampleBreadcrumbs />
            </c:tab>
            <c:tab label="Tabs">
                <c:ExampleTabs />
            </c:tab>
            <c:tab label="Images">
                <c:ExampleImage />
            </c:tab>
            <c:tab label="Tiles">
                <c:ExampleTile />
            </c:tab>
            <c:tab label="Tree">
                <c:ExampleTree />
            </c:tab>
        </c:tabs>
        <c:tabs >
            <c:tab label="Radio Buttons">
                <c:ExampleRadioButtons />
            </c:tab>
            <c:tab label="Checkbox" active="true">
                <c:ExampleCheckbox />
            </c:tab>
            <c:tab label="Checkboxes">
                <c:ExampleCheckboxes />
            </c:tab>
            <c:tab label="Select">
                <c:ExampleSelect />
            </c:tab>
            <c:tab label="Multi Select">
                <c:ExampleMultiSelect />
            </c:tab>
            <c:tab label="Form">
                <c:ExampleForm />
            </c:tab>
        </c:tabs>
        <c:tabs >
            <c:tab label="Media">
                <c:ExampleMedia />
            </c:tab>
            <c:tab label="Popover">
                <c:ExamplePopover />
            </c:tab>
            <c:tab label="Menu">
                <c:ExampleMenu />
            </c:tab>
            <c:tab label="Header" active="true">
                <c:ExamplePageHeader />
            </c:tab>
        </c:tabs>
    </c:LightningDesignApplication>
</aura:application>