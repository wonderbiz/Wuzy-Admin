/**
* Created by johnpogosyan on 2/11/14.
*/
define([
    'jquery',
    'underscore',
    'backbone',
    'events',
    'wuzy-stackmob',
    'vm',
    'constants',
    'text!templates/fares/fareItem.html',
    'views/fares/detail',
      'views/customers/detail'
], function ($, _, Backbone, Events, StackMob, Vm, Const, faresItemsTemplate, FareDetailView, CustomerDetailView) {

    var FareItem = Backbone.View.extend({
        tagName: 'tr',
        initialize: function () {

        },

        events: {
            'click .detail-link': 'showDetail'
        },

        showDetail: function (e) {
            e.preventDefault();
            var detailView = new CustomerDetailView({ model: this.model });
            detailView.render();
           
//            e.preventDefault();
//            var detailView = new FareDetailView({ model: this.model });
//            detailView.render();

            Events.trigger(Const.INTERNAL_NAVIGATION_EVENT_NAME, { INTERNAL_NAVIGATION_PATH: 'customer/' + this.model.attributes.customer.customer_id });
        },


        render: function () {
            this.$el.html(_.template(faresItemsTemplate, { fare: this.model.toJSON() }));

            //set up my JSON-formatted string...
            var myDate = Date(this.el.children[0].innerHTML.trim());
            var myObj = { "theDate": myDate };
            var myDateJson = JSON.stringify(myObj);

            //parse the JSON-formatted string to an object
            var myNewObj = JSON.parse(myDateJson);

            //get the date, create a new Date object, and manually format the date string
            var myNewDate = new Date(myNewObj.theDate);

            this.el.children[0].innerHTML = (months[myNewDate.getMonth()]) + " " + myNewDate.getDate() + "," + myNewDate.getFullYear();
            this.el.children[3].innerHTML = "$ " + parseFloat(this.el.children[3].innerHTML.trim()).toFixed(2);
            return this;
        }
    });

    return FareItem;
});

var months = new Array(12);
months[0] = "Jan";
months[1] = "Feb";
months[2] = "Mar";
months[3] = "Apr";
months[4] = "May";
months[5] = "Jun";
months[6] = "Jul";
months[7] = "Aug";
months[8] = "Sep";
months[9] = "Oct";
months[10] = "Nov";
months[11] = "Dec";