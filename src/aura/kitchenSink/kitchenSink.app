<aura:application access="GLOBAL">
    
    <aura:attribute name="defaultSectionName" type="String" default="Introduction" description="Name of the default section" access="PRIVATE" />
    <aura:attribute name="sectionName" type="String" description="Name of the current section" access="PRIVATE" />
    <aura:attribute name="sectionIconName" type="String" description="Icon Name of the section" access="PRIVATE" />
    <aura:attribute name="sectionIconType" type="String" description="Icon Type of the section" access="PRIVATE" />
    <aura:attribute name="section" type="Aura.Component[]" description="Section components" access="PRIVATE" />
    
    <aura:handler name="init" value="{! this }" action="{! c.setup }" />
    
    <c:LightningDesignApplication >
        <c:grid >
            <c:col size="3">
                <c:tree onClick="{! c.selectNode }">
                    <c:treeNode label="Introduction" />
                    <c:treeNode label="Installation" />
                    <c:treeNode label="Components">
                        <c:treeNode label="Lightning Design Application" />
                        <c:treeNode label="Grid" />
                        <c:treeNode label="Column" />
                    </c:treeNode>
                </c:tree>
            </c:col>
            <c:col size="9">
                <c:pageHeader title="{! v.sectionName }" iconName="{! v.sectionIconName }" iconType="{! v.sectionIconType }"/>
                <div>
                	{! v.section }
                </div>
            </c:col>
        </c:grid>
    </c:LightningDesignApplication>
</aura:application>