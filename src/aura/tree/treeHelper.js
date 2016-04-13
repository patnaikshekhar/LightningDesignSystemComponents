({
    createNodes: function(nodes, callback) {
        if (nodes) {
            if (nodes.length > 0) {
                var newNodes = nodes.map(function(node) {
                    return ['c:treeNode', {
                        label: node.label,
                        open: (node.open ? node.open : true),
                        nodes: (node.children ? node.children : [])
                    }];
                });
                
                $A.createComponents(newNodes, function(components, status, err) {
                    if (status === "SUCCESS") {
                        callback(null, components);
                    } else {
                        callback(err, null);
                    }
                });
            } else {
            	callback(null, []);    
            }
        } else {
            callback(null, []);
        }
    },
    
	setLevel : function(parent, component, helper, level) {
		var body = component.get('v.body');
        
        if (level != 0) {
            component.set('v.ariaLevel', level);
            component.addHandler('onClick', parent, 'c.onClick');
        }
        
        body.forEach(function(child) {
            if (child.getName() == 'ldsc$treeNode' || child.getName() == 'c$treeNode') {
                helper.setLevel(component, child, helper, level + 1);
            }
        });
	},
    
    toggleAll: function(state, component, helper) {
        var body = component.get('v.body');
        body.forEach(function(child) {
            if (child.getName() == 'ldsc$treeNode' || child.getName() == 'c$treeNode') {
            	child.set('v.open', state);
                helper.toggleAll(state, child, helper);
            }
        });
    }
})