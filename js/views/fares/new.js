/**
* Created by frimoldi on 31/01/14.
*/
define([
    'jquery',
    'lodash',
    'backbone',
    'events',
    'wuzy-stackmob',
    'vm',
    'text!templates/fares/new.html',
    'models/fare',
    'views/maps/mapwidget'
], function ($, _, Backbone, Events, StackMob, Vm, NewFareTemplate, Fare) {

    var coordinate;
    var newFareView = Backbone.View.extend({
        el: '.page',

        initialize: function () {

        },

        events: {
            'submit #newFareForm': 'createNewFare'
        },

        createNewFare: function (e) {
            e.preventDefault();

            var Driver = $('#DriverSelect').val();
            var Customer = $('#CustomerSelect').val();
            var Fare = $('#FareInput').val();
            var Date = $('#DateInput').val();

            console.log(this);

            var newFare = new Fare({
                'Driver': Driver,
                'Customer': Customer,
                'Fare': Fare,
                'Date': Date
            });

            newFare.create({
                success: function () {
                    alert("Fare '" + newFare.toJSON().name + "' created !");
                },
                error: function (error) {
                    console.log(error);
                }
            });
        },




        render: function () {
            this.$el.html(NewFareTemplate);
        }
    });

    return newFareView;
});