<aura:application access="GLOBAL">
    
    <aura:handler name="init" value="{! this }" action="{! c.setup }" />
    
    <aura:attribute name="defaultSectionName" type="String" default="Introduction" description="Name of the default section" access="PRIVATE" />
    <aura:attribute name="sectionName" type="String" default="" description="Name of the current section" access="PRIVATE" />
    <aura:attribute name="sectionIconName" type="String" default="" description="Icon Name of the section" access="PRIVATE" />
    <aura:attribute name="sectionIconType" type="String" default="" description="Icon Type of the section" access="PRIVATE" />
    <aura:attribute name="section" type="Aura.Component[]" description="Section components" access="PRIVATE" />
    
    <c:LightningDesignApplication >
        <c:grid >
            <c:col size="3">
                <c:kitchenSinkNav onNav="{! c.navigate }" />
            </c:col>
            <c:col size="9">
                {! v.sectionName }
                {! v.section }
            	<c:pageHeader title="{! v.sectionName }" iconName="{! v.sectionIconName }" iconType="{! v.sectionIconType }"/>
            </c:col>
        </c:grid>
    </c:LightningDesignApplication>
</aura:application>