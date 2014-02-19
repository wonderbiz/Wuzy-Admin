/**
 * Created by frimoldi on 30/01/14.
 */
define([
    'jquery',
    'lodash',
    'backbone',
    'events',
    'wuzy-stackmob',
    'vm',
    'text!templates/home/page.html',
    'constants',
    'models/user'
], function($, _, Backbone, Events, StackMob, Vm, homePageTemplate, Const, UserModel){

    var HomePage = Backbone.View.extend({
        el: '.page',

        initialize: function(){

        },

        render: function (){
            this.$el.html(homePageTemplate);
        }
    });

    return HomePage;
});
