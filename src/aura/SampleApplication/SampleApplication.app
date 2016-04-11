<aura:application >
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
        </c:tabs>
        <c:tabs >
            <c:tab label="Radio Buttons">
                <c:ExampleRadioButtons />
            </c:tab>
            <c:tab label="Checkbox">
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
            <c:tab label="Form" active="true">
                <c:ExampleForm />
            </c:tab>
        </c:tabs>
    </c:LightningDesignApplication>
</aura:application>