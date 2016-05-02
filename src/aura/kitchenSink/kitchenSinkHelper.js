({
    navigateToSection: function(component, helper, value) {
      	var nodes = helper.nodes();
        
        if (value in nodes) {
            component.set('v.sectionName', nodes[value].sectionName);
            component.set('v.sectionIconName', nodes[value].sectionIconName);
            component.set('v.sectionIconType', nodes[value].sectionIconType);
            //console.log('Creating', 'ldsc:' + nodes[value].section);
            $A.createComponent('ldsc:' + nodes[value].section, {}, function(c, status, err) {
                if (status === 'SUCCESS' && component.isValid()) {
                    component.set('v.section', [c]);    
                }
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
            'Components/Lightning Design Application': {
                sectionName: 'Lightning Design Application',
                sectionIconName: 'apps_admin',
                sectionIconType: 'standard',
                section: 'documentationLightningDesignApplication'
            }
        };
	}
})