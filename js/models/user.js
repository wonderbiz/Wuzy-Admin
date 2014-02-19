/**
 * Created by frimoldi on 30/01/14.
 */
define([
    'lodash',
    'backbone',
    'wuzy-stackmob'
], function(_, Backbone, StackMob) {
    var userModel = StackMob.User.extend({
        schemaName: 'User',
        loginField: 'username',
        passwordField: 'password'
    });

    return userModel;
});
