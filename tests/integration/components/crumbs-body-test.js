import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('breadcrumbs-body', 'Integration | Component | breadcrumbs body', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{breadcrumbs-body}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#breadcrumbs-body}}
      template block text
    {{/breadcrumbs-body}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
