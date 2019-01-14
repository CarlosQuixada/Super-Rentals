import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | rental-listing', function(hooks) {
  setupRenderingTest(hooks);
  
  hooks.beforeEach(function () {
    this.rental = {
      image: 'fake.png',
      title: 'test-title',
      owner: 'test-owner',
      type: 'test-type',
      city: 'test-city',
      bedrooms: 3
    };
  
  });
  test('should display rental details', async function(assert) {
    await render(hbs`{{rental-listing rental=rental}}`);
  });

  test('should toggle wide class on click', async function(assert) {
    await render(hbs`{{rental-listing rental=rental}}`);
  });
});
