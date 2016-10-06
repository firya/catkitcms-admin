import DS from 'ember-data';

export default DS.Model.extend({
  
  // Page title 
  title: DS.attr('string'),
  
  // Template ID
  template: DS.belongsTo('template.page'),
  
  // Tree dependencies
  children: DS.hasMany('content.page', {inverse: 'parent'}),
  parent: DS.belongsTo('content.page', {inverse: 'children'})
});
