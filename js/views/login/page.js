/**
 * Created by frimoldi on 29/01/14.
 */
define([
    'jquery',
    'lodash',
    'backbone',
    'events',
    'vm',
    'wuzy-stackmob',
    'text!templates/login/page.html',
    'constants',
    'models/user'
], function($, _, Backbone, Events, Vm, StackMob, loginPageTemplate, Const, UserModel){

    var LoginPage = Backbone.View.extend({
        el: '.full-page',

        initialize: function(){
            StackMob.isLoggedIn({
                yes: function(){
                    console.log('already logged in');
                },
                no: function(){
                    console.log('not logged in');
                }
            });
        },

        events: {
            "submit #loginForm" : "login"
        },

        login: function (event){
            event.preventDefault();

            var username = $('#usernameInput').val();
            var password = $('#passwordInput').val();

            var user = new UserModel({username: username, password: password});
            user.login(true, {
                success: function(stackMobLoggedUser) {
                    console.log('User logged in as ' + stackMobLoggedUser.username);
                    Events.trigger(Const.USER_LOGGED_IN);
                },

                error: function(error) {
                    console.log('Login failed: ' + error.error_description);
                }
            });
        },

        render: function (){
            this.$el.html(loginPageTemplate);
        }
    });

    return LoginPage;
});
