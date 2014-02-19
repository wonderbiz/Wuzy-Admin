// Filename: router.js
define([
    'jquery',
    'underscore',
    'backbone',
    'wuzy-stackmob',
    'vm',
    'events',
    'constants',
    'models/venue',
    'models/customer',
    'models/driver'
], function ($, _, Backbone, StackMob,Vm, Events, Const, VenueModel, DriverModel, CustomerModel, FareModel) {
    var AppRouter = Backbone.Router.extend({
        routes: {
            // Pages
            'login': 'login',
            'home': 'home',
            'venues': 'venues',
            'venue/:venue': 'venue',
            'venues/new': 'venues/new',
            'drivers': 'drivers',
            'driver/:driver': 'driver',
            'drivers/new': 'drivers/new',
            'customers': 'customers',
            'customer/:customer': 'customer',
            'customers/new': 'customers/new',
            'fares': 'fares',
            'fare/:fare': 'fare',
            'fares/new': 'fares/new',




            // Default - catch all
            '*actions': 'home'
        }
    });

    var initialize = function(options){
        var appView = options.appView;
        var router = new AppRouter(options);

        var userIsLoggedIn = false;

        function checkLoginStatus(){
            if (!userIsLoggedIn){
                router.navigate('login', true);
            }

            return userIsLoggedIn;
        }

        StackMob.isLoggedIn({
            yes: function(){
                userIsLoggedIn = true;
            },
            no: function(){
                userIsLoggedIn = false;
            }
        });

        Events.on(Const.USER_LOGGED_IN, function() {
            userIsLoggedIn = true;
            router.navigate('home', true);
        });

        Events.on(Const.USER_LOGGED_OUT, function() {
            userIsLoggedIn = false;
            router.navigate('login', true);
        });

        Events.on(Const.INTERNAL_NAVIGATION_EVENT_NAME, function(options) {
            router.navigate(options.INTERNAL_NAVIGATION_PATH);
        });

        router.on('route:login', function(){
            require(['views/login/page'], function (LoginPage){
                var loginPage = Vm.create(appView, 'LoginPage', LoginPage);
                loginPage.render();
            })
        });

        router.on('route:home', function(){
            if(!checkLoginStatus())
                return;

            require(['views/home/page'], function (HomePage){
                var homePage = Vm.create(appView, 'HomePage', HomePage);
                homePage.render();
            })
        });

        router.on('route:venues', function(){
            if(!checkLoginStatus())
                return;

            require(['views/venues/list'], function (VenuesList){
                var venuesList = Vm.create(appView, 'VenuesList', VenuesList);
                venuesList.render();
            });
        });


        router.on('route:venue', function(venueId){
            if(!checkLoginStatus())
                return;

            require(['views/venues/detail'], function (VenueDetail){
                var venue = new VenueModel({'venue_id':venueId});

                venue.fetch({
                    success: function(model){
                        var venueDetail = Vm.create(appView, 'VenueDetail', VenueDetail, {model:model});
                        venueDetail.render();
                    },
                    error: function(error) {
                        console.log(error);
                    }
                });
            });
        });

        router.on('route:venues/new', function(){
            if(!checkLoginStatus())
                return;

            require(['views/venues/new'], function (NewVenuePage){
                var newVenueView = Vm.create(appView, 'NewVenuePage', NewVenuePage);
                newVenueView.render();
            });
        });
        router.on('route:drivers', function(){
            if(!checkLoginStatus())
                return;

            require(['views/drivers/list'], function (DriversList){
                var driversList = Vm.create(appView, 'DriversList', DriversList);
                driversList.render();
            });
        });


        router.on('route:driver', function(driverId){
            if(!checkLoginStatus())
                return;

            require(['views/drivers/detail'], function (DriverDetail){
                var driver = new DriverModel({'driver_id':driverId});

                driver.fetch({
                    success: function(model){
                        var driverDetail = Vm.create(appView, 'DriverDetail', DriverDetail, {model:model});
                        driverDetail.render();
                    },
                    error: function(error) {
                        console.log(error);
                    }
                });
            });
        });

        router.on('route:drivers/new', function(){
            if(!checkLoginStatus())
                return;

            require(['views/drivers/new'], function (NewDriverPage){
                var newDriverView = Vm.create(appView, 'NewDriverView', NewDriverPage);
                newDriverView.render();
            });
        });

        router.on('route:customers', function(){
            if(!checkLoginStatus())
                return;

            require(['views/customers/list'], function (CustomersList){
                var customersList = Vm.create(appView, 'CustomersList', CustomersList);
                customersList.render();
            });
        });


        router.on('route:customer', function(customerId){
            if(!checkLoginStatus())
                return;

            require(['views/customers/detail'], function (CustomerDetail){
                var customer = new CustomerModel({'customer_id':customerId});

                customer.fetch({
                    success: function(model){
                        var customerDetail = Vm.create(appView, 'CustomerDetail', CustomerDetail, {model:model});
                        customerDetail.render();
                    },
                    error: function(error) {
                        console.log(error);
                    }
                });
            });
        });

        router.on('route:customers/new', function(){
            if(!checkLoginStatus())
                return;

            require(['views/customers/new'], function (NewCustomerPage){
                var newCustomerView = Vm.create(appView, 'NewCustomerView', NewCustomerPage);
                newCustomerView.render();
            });
        });


        router.on('route:fares', function(){
            if(!checkLoginStatus())
                return;

            require(['views/fares/list'], function (FaresList){
                var faresList = Vm.create(appView, 'FaresList', FaresList);
                faresList.render();
            });
        });


        router.on('route:fare', function(fareId){
            if(!checkLoginStatus())
                return;

            require(['views/fares/detail'], function (FareDetail){
                var fare = new FareModel({'fare_id':fareId});

                fare.fetch({
                    success: function(model){
                        var fareDetail = Vm.create(appView, 'FareDetail', FareDetail, {model:model});
                        fareDetail.render();
                    },
                    error: function(error) {
                        console.log(error);
                    }
                });
            });
        });

        router.on('route:fares/new', function () {
            if (!checkLoginStatus())
                return;

            require(['views/fares/new'], function (NewfarePage) {
                var newfareView = Vm.create(appView, 'NewfareView', NewfarePage);
                newfareView.render();
            });
        });

        Backbone.history.start();
    };

    return {
        initialize: initialize
    };
});
