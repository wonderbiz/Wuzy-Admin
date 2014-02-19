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
    'text!templates/customers/new.html',
    'models/customer',
    'views/maps/mapwidget'
], function($, _, Backbone, Events, StackMob, Vm, NewCustomerTemplate, Customer){

    var coordinate;
    var newCustomerView = Backbone.View.extend({
        el: '.page',

        initialize: function(){

        },

        events: {
            'submit #newCustomerForm': 'createNewCustomer'
        },

        createNewCustomer: function(e){
            e.preventDefault();

            var firstName = $('#firstNameInput').val();
            var lastName = $('#lastNameInput').val();
            var email = $('#emailInput').val();
            var contactNumber = $('#contactNumberInput').val();

            console.log(this);

            var newCustomer = new Customer({
                'first_name': firstName,
                'last_name': lastName,
                'user': email,
                'mobile_phone_number': contactNumber
            });

            newCustomer.create({
                success: function(){
                    alert("Customer '"+newCustomer.toJSON().name+"' created !");
                },
                error: function(error){
                    console.log(error);
                }
            });
        },




        render: function (){
            this.$el.html(NewCustomerTemplate);
        }
    });

    return newCustomerView;
});