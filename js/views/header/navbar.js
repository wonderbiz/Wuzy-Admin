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
    'text!templates/header/navbar.html',
    'constants',
    'models/user'
], function($, _, Backbone, Events, StackMob, Vm, navigationBarViewTemplate, Const, UserModel){

    var NavigationBarView = Backbone.View.extend({
        el: '.navbar',

        initialize: function(){
            this.$el.removeClass('hidden');
        },

        events: {
            'click #logoutButton' : 'logout'
        },

        logout: function(){
            var user = new UserModel();
            user.logout({
                success: function(){
                    console.log('User logged out');
                    Events.trigger(Const.USER_LOGGED_OUT);
                },

                error: function(error){
                    console.log(error);
                }
            });
        },

        render: function (){
            this.$el.html(navigationBarViewTemplate);
        }
    });

    return NavigationBarView;
});
