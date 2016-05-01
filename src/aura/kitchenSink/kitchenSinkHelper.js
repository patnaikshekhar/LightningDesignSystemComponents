({
    navigateToSection: function(component, helper, value) {
      	var nodes = helper.nodes();
        if (value in nodes) {
            component.set('v.sectionName', nodes[value].sectionName);
            component.set('v.sectionIconName', nodes[value].sectionIconName);
            component.set('v.sectionIconType', nodes[value].sectionIconType);
            
            $A.createComponents([['ldsc:' + nodes[value].section, {}]], function(components, status, err) {
                console.log(status, err);
            	component.set('v.section', components[0]);    
            });
        }  
    },
    	
	nodes: function() {
        return {
            'Introduction': {
                sectionName: 'Introduction',
                sectionIconName: 'apps',
                sectionIconType: 'standard',
                section: 'documentationIntroduction'
            },
            'Installation': {
                sectionName: 'Installation',
                sectionIconName: 'custom',
                sectionIconType: 'standard',
                section: 'documentationInstallation'
            },
            'Lightning Design Application': {
                sectionName: 'Lightning Design Application',
                sectionIconName: 'apps_admin',
                sectionIconType: 'standard',
                section: 'documentationLightningDesignApplication'
            }
        };
	}
})