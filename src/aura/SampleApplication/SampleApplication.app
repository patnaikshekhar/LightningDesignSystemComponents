<aura:application >
	<c:LightningDesignApplication >
        <c:badge >Test</c:badge>
    	<c:badge theme="inverse">Test</c:badge>
        <c:button onClick="{! c.buttonClick }">Basic Button</c:button>
        <c:button theme="neutral">Neutral Button</c:button>
        <c:button theme="brand">Brand Button</c:button>
        <c:button theme="destructive">Destructive Button</c:button>
        <c:button theme="inverse">Inverse Button</c:button>
        <c:button theme="neutral" disabled="true">Disabled Button</c:button>
        <c:button theme="neutral" iconPosition="left" iconType="utility" iconName="download">Icon Button</c:button>
        <c:button theme="neutral" iconPosition="right" iconType="utility" iconName="download">Icon Button</c:button>
        <c:button iconSize="large" iconType="utility" iconName="settings"></c:button>
        <c:icon iconName="announcement" iconType="action" />
        <c:buttonGroup >
            <c:button theme="neutral">Action 1</c:button>
            <c:button theme="neutral">Action 2</c:button>
            <c:button theme="neutral">Action 3</c:button>
        </c:buttonGroup>
    </c:LightningDesignApplication>
</aura:application>