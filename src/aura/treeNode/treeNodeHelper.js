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
    }
})