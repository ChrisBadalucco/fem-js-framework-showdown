window.Todos = Ember.Application.create();

// FixtureAdapter = local / prototyping
// AjaxAdapter = remote 
Todos.ApplicationAdapter = DS.FixtureAdapter.extend();
