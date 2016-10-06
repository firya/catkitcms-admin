import Ember from 'ember';

export default Ember.Controller.extend({
    
    modeFirstItem: Ember.computed('model', function() {
      return this.get('model').get('firstObject');
    }),    
    /*init() {
      //console.log( this.get('model') );
    }
    */
});
