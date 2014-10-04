module.exports = function(config) {
  config.set({
    basePath: '../..',

    frameworks: ['jasmine'],

    autoWatch: true,

    preprocessors: {
      '**/*.coffee': 'coffee'
    },

    plugins: [
      'karma-jasmine',
      'karma-coverage',
      'karma-chrome-launcher',
      'karma-coffee-preprocessor'
    ],

    files: [
      'vendor/assets/bower_components/angular/angular.js',
      'vendor/assets/bower_components/angular-mocks/angular-mocks.js',
      'vendor/assets/bower_components/angular-route/angular-route.js',
      'app/assets/javascripts/main.js.coffee',
      'app/assets/javascripts/angular/controllers/RestaurantIndexCtrl.js.coffee',
      'app/assets/javascripts/angular/*',
      'spec/javascripts/*_spec.js.coffee'
    ]  
  });
};