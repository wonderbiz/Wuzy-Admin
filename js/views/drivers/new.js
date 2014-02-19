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
    'text!templates/drivers/new.html',
    'models/driver',
    'views/maps/mapwidget'
], function($, _, Backbone, Events, StackMob, Vm, NewDriverTemplate, Driver){

    var coordinate;
    var newDriverView = Backbone.View.extend({
        el: '.page',

        initialize: function(){

        },

        events: {
            'submit #newDriverForm': 'createNewDriver'
        },

        createNewDriver: function(e){
            e.preventDefault();

            var firstName = $('#firstNameInput').val();
            var lastName = $('#lastNameInput').val();
            var email = $('#emailInput').val();
            var contactNumber = $('#contactNumberInput').val();
            var streetAddress = $('#streetAddressInput').val();
            var city = $('#cityInput').val();
            var state = $('#stateSelect').val();
            var zip = $('#zipCodeInput').val();
            var country = $('#countrySelect').val();
            var service = $('#serviceSelect').val();

            console.log(this);

            var newDriver = new Driver({
                'first_name': firstName,
                'last_name': lastName,
                'user': email,
                'mobile_phone_number': contactNumber,
                'street_address': streetAddress,
                'city': city,
                'state': state,
                'postal_code': zip,
                'country': country,
                'vehicle_type': service
            });

            newDriver.create({
                success: function(){
                    alert("Driver '"+newDriver.toJSON().name+"' created !");
                },
                error: function(error){
                    console.log(error);
                }
            });
        },




        render: function (){
            this.$el.html(NewDriverTemplate);
        }
    });

    return newDriverView;
});