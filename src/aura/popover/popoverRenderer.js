({
    afterRender: function(component, helper) {
        this.superAfterRender();
        
        // Remove child from parent and add to body
        var element = component.getElement();
        element.parentNode.removeChild(element);
        document.body.appendChild(element);
        
        helper.afterRender(component);
    }
})