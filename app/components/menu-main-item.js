import Ember from 'ember';

export default Ember.Component.extend({
    tagName: 'li',
    click: function() {
        
        // Store state
        let state = this.isActive;
        
        // Call parent action to close all items
        this.sendAction('itemClick');
        
        // Toggle active attribute
        this.set('isActive', !state);
    },
    classNameBindings: ['isActive'],
    isActive: false,
    
    /*
     * Push menu item into menu component
     * It helps to close all another items when this item selected
     * 
     */
    _register: function() {
        this.set('register-as', this.get('register-as').push(this));
    }.on('init')
    
})