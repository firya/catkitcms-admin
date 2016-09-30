import Ember from 'ember';

export default Ember.Component.extend({
    tagName: null,
    classNames: [],
    elementId: 'main-menu',
    
    // All created menu items will be here
    usedItems: [],    
    
    // Close all menu items
    actions: {
        itemClick: function(){
            for(let item of this.get('usedItems')) {
                item.set('isActive', false);
            }
        }
    }
})