'use strict';

/* Controllers */

var fleetmgntControllers = angular.module('fleetmgntControllers', ['uiGmapgoogle-maps','geolocation','ui.bootstrap']);

fleetmgntControllers.controller('LoginCtrl', ['$scope','$location','$mdToast', '$animate',
  function($scope,$location,$mdToast, $animate) {


  $scope.user = {
      username: '',
      password: ''
      
    };


    $scope.showErrorToast = function() {
    $mdToast.show(
      $mdToast.simple()
        .content($scope.login_error)
        .position({bottom: true,top: false,left: false,right: true})
        .hideDelay(3000)
    );
  };

    // function to submit the form after all validation has occurred            
  $scope.submitForm = function(isValid) {



    // check to make sure the form is completely valid
    if (isValid) {
    console.log($scope.user.username);
    if(($scope.user.username == 'bharathbmsce@gmail.com') && ($scope.user.password = 'swordfish')){

      $location.path('/home');
    }else{
      $scope.login_error = "Please enter valid username and password";
      $scope.showErrorToast();
      return false;
    }

      
    }

  };

  }]);



fleetmgntControllers.controller('IndexCtrl',['$scope','$rootScope','$log','$http','$mdBottomSheet','$mdSidenav', '$mdDialog','$location','$timeout',
   function($scope,$rootScope, $log,$http,$mdBottomSheet, $mdSidenav, $mdDialog,$location,$timeout){

$scope.viewlogin = false;

$scope.viewloginClass = 'animated fadeIn';



$scope.toggleSidenav = function(menuId) {
    $mdSidenav(menuId).toggle();
  };

  $scope.go = function (path,menuId) {
    console.log(path);
  $location.path(path);
  //$scope.toggleSidenav(menuId);
};
  $scope.menu = [
    {
      link : '#/',
      btnLink : '/',
      title: 'Dashboard',
      icon: 'dashboard'
    },
   
    {
      link : '#/devices',
      btnLink : '/devices',
      title: 'Devices',
      icon: 'perm_device_info'
    },
    {
      link : '#/config',
      btnLink : '/config',
      title: 'Configure',
      icon: 'pin_drop'
    }
  ];
  $scope.admin = [
    {
      link : '',
      title: 'Users',
      icon: 'delete'
    },
    {
      link : 'showListBottomSheet($event)',
      title: 'Settings',
      icon: 'settings'
    }
  ];

  $scope.notifications = [
    {
        segment: 'Device alerts',
        type: 'Device',
        time: '3:08PM',
        icon: 'gps_off',
        notes: "Device GPS has been disabled"
      },
      {
        segment: 'Detour alerts',
        type: 'Trip',
        time: '5 mins ago',
        icon: 'directions_car',
        notes: "Vehicle has taken detour on Trip ABC"
      },
      {
        segment: 'Device alerts',
        type: 'Device',
        time: '1 hour ago',
        icon: 'perm_device_info',
        notes: "Device has been switched off"
      },{
        segment: 'Device alerts',
        type: 'Device',
        time: '10 hour ago',
        icon: 'perm_device_info',
        notes: "Low battery on device"
      },{
        segment: 'Detour alerts',
        type: 'Trip',
        time: '5 mins ago',
        icon: 'directions_car',
        notes: "Vehicle has taken detour on Trip ABC"
      },{
        segment: 'Detour alerts',
        type: 'Trip',
        time: '5 mins ago',
        icon: 'directions_car',
        notes: "Vehicle has taken detour on Trip ABC"
      },{
        segment: 'Detour alerts',
        type: 'Trip',
        time: '5 mins ago',
        icon: 'directions_car',
        notes: "Vehicle has taken detour on Trip ABC"
      },{
        segment: 'Detour alerts',
        type: 'Trip',
        time: '5 mins ago',
        icon: 'directions_car',
        notes: "Vehicle has taken detour on Trip ABC"
      },{
        segment: 'Detour alerts',
        type: 'Trip',
        time: '5 mins ago',
        icon: 'directions_car',
        notes: "Vehicle has taken detour on Trip ABC"
      },{
        segment: 'Detour alerts',
        type: 'Trip',
        time: '5 mins ago',
        icon: 'directions_car',
        notes: "Vehicle has taken detour on Trip ABC"
      },{
        segment: 'Detour alerts',
        type: 'Trip',
        time: '5 mins ago',
        icon: 'directions_car',
        notes: "Vehicle has taken detour on Trip ABC"
      },{
        segment: 'Detour alerts',
        type: 'Trip',
        time: '5 mins ago',
        icon: 'directions_car',
        notes: "Vehicle has taken detour on Trip ABC"
      }      

];

$scope.login = function(ev){


/*$mdDialog.show({
      controller: DialogController,
      scope:$scope,
      //templateUrl: 'views/login-form.html',
      templateUrl: 'views/loginsingup-form.html',
     parent: angular.element(document.body),
      targetEvent: ev,
      clickOutsideToClose:false
    })
    .then(function(answer) {
      $scope.status = 'You said the information was "' + answer + '".';
    }, function() {
      $scope.status = 'You cancelled the dialog.';
    });
*/
$scope.viewloginClass = 'animated fadeIn';
$scope.viewlogin = true; 
};

$scope.closeLogin = function(ev){
    $scope.viewloginClass = 'animated fadeOut';
    $timeout(function() {
    $scope.viewlogin = false; console.log('timedOut');  },250);
}

$scope.loginFromData = [
    {
        type:'login',
        text:'Login',
        iconUrl : 'img/login.svg',
        inputs:[
                {
                    type:'text',
                    label:'UserId',
                    iconUrl : 'img/account.svg',
                    modelName:'userid'

                },{
                    type:'password',
                    label:'Password',
                    iconUrl : 'img/key-variant.svg',
                    modelName:'password'

                }
                 ],
        actionButtons : [ 
                    {
                        ngClass :'md-hue-3',
                        label:'Login'                        
                    },{
                        ngClass :'md-dark',
                        label:'Reset'                        
                    }

                   ],
        linkButton : {
                        ngClass :'md-hue-1',
                        label:'Signup'
                    }

    },{
        type:'signup',
        text:'Sign Up',
        iconUrl : 'img/account-plus.svg',
        inputs:[
                {
                    type:'text',
                    label:'User Name',
                    iconUrl : 'img/account.svg',
                    modelName:'username'

                },{
                    type:'text',
                    label:'Email Id',
                    iconUrl : 'img/email.svg',
                    modelName:'email'
                },{
                    type:'password',
                    label:'Password',
                    iconUrl : 'img/key-variant.svg',
                    modelName:'password'
                }
                ,{
                    type:'password',
                    label:'Confirm Password',
                    iconUrl : 'img/key-variant.svg',
                    modelName:'confpassword'

                }
                 ],
        actionButtons : [ 
                    {
                        ngClass :'md-hue-3',
                        label:'Signup'                        
                    },{
                        ngClass :'md-dark',
                        label:'Reset'                        
                    }

                   ],
        linkButton : {
                        ngClass :'md-hue-1',
                        label:'Login'
                    }

    }

]
    



 $scope.openMenu = function($mdOpenMenu, ev) {
      console.log('Inside openMenu');
      $mdOpenMenu(ev);
    };

      var icon_messages = [
      'Enterprise Fleet Management'
      ];
    

        var icons = [
            'accessibility', 'alarm', 'aspect_ratio', 'autorenew', 'bookmark_outline', 'dashboard', 'dns', 'favorite_outline', 'get_app', 'highlight_remove', 'history', 'list', 'picture_in_picture', 'print', 'settings_ethernet', 'settings_power', 'shopping_cart', 'spellcheck', 'swap_horiz', 'swap_vert', 'thumb_up', 'thumbs_up_down', 'translate', 'trending_up', 'visibility', 'warning', 'mic', 'play_circle_outline', 'repeat', 'skip_next', 'call', 'chat', 'clear_all', 'dialpad', 'dnd_on', 'forum', 'location_on', 'vpn_key', 'filter_list', 'inbox', 'link', 'remove_circle_outline', 'save', 'text_format', 'access_time', 'airplanemode_on', 'bluetooth', 'data_usage', 'gps_fixed', 'now_wallpaper', 'now_widgets', 'storage', 'wifi_tethering', 'attach_file', 'format_line_spacing', 'format_list_numbered', 'format_quote', 'vertical_align_center', 'wrap_text', 'cloud_queue', 'file_download', 'folder_open', 'cast', 'headset', 'keyboard_backspace', 'mouse', 'speaker', 'watch', 'audiotrack', 'edit', 'brush', 'looks', 'crop_free', 'camera', 'filter_vintage', 'hdr_strong', 'photo_camera', 'slideshow', 'timer', 'directions_bike', 'hotel', 'local_library', 'directions_walk', 'local_cafe', 'local_pizza', 'local_florist', 'my_location', 'navigation', 'pin_drop', 'arrow_back', 'menu', 'close', 'more_horiz', 'more_vert', 'refresh', 'phone_paused', 'vibration', 'cake', 'group', 'mood', 'person', 'notifications_none', 'plus_one', 'school', 'share', 'star_outline'
        ];
        var colors = ['lightgreen', 'pink', 'wheat', '#cc99ff', '#abcdef'];
        $scope.cnt = Math.floor(Math.random() * icons.length);
        $scope.icon = icons[$scope.cnt];
        $scope.fill = colors[0];
        $scope.size = 48;

        $scope.clickIcon = 'thumb_up';
        $scope.clickIconMorph = function() {
            if ($scope.clickIcon === 'thumb_up') {
                $scope.clickIcon = 'thumb_down';
            }
            else {
                $scope.clickIcon = 'thumb_up';
            }
        };

        setInterval(function() {
            var random = Math.random();
            if (random < 0.2) {
                $scope.size = 28 + 4 * Math.floor(Math.random() * 9);
            } else {
                $scope.cnt++;
                if ($scope.cnt >= icons.length) {
                    $scope.cnt = 0;
                }
                $scope.icon = icons[$scope.cnt];
                $scope.fill = colors[Math.floor(Math.random() * colors.length)];
            }
            $scope.$apply();
        }, 1700);


  
   }]);



fleetmgntControllers.controller('HomeCtrl',['$scope','$rootScope','$log','$http','geolocation','GetGeoLocation','$sce','$mdBottomSheet','$mdSidenav', '$mdDialog',
  function($scope,$rootScope, $log,$http,geolocation,GetGeoLocation,$sce, $mdBottomSheet, $mdSidenav, $mdDialog){


  
  
$scope.indicators = [
      {
        name: 'data_usage',
        icon: 'data_usage',
        icon_size: '36',
        footer_text: 'Data Usage',
        value: '0 MB',
        color: 'green'
      },{
        name: 'storage',
        icon: 'storage',
        icon_size: '36',
        footer_text: 'Storage',
        value: '0GB',
        color: 'red'
      },{
        name: 'devices',
        icon: 'devices',
        icon_size: '36',
        footer_text: ' Devices',
        value: '0',
        color: 'purple'
      },{
        name: 'trips',
        icon: 'directions_car',
        icon_size: '36',
        footer_text: ' Trips',
        value: '0',
        color: 'blue'
      },{
        name: 'alerts',
        icon: 'notifications_on',
        icon_size: '36',
        footer_text: ' Alerts',
        value: '0',
        color: 'yellow'
      }

];

$scope.myDataSource = {
    chart: {
        caption: "Last captured trips ",
        subCaption: "Top 5 trips in last month by distance",
        numberSuffix: "kms ",
        theme: "ocean"
    },
    data:[{
        label: "Bangalore Airport",
        value: "72"
    },
    {
        label: "My Office",
        value: "12"
    },
    {
        label: "Drive to Mysore",
        value: "120"
    },
    {
        label: "Kids School",
        value: "5"
    },
    {
        label: "Daly trip",
        value: "20"
    }]
};

$scope.attrs = {
    "caption": "Data usage - Device1 v Device2",
    "numbersuffix": "mb",
    "plotgradientcolor": "",
    "bgcolor": "FFFFFF",
    "showalternatehgridcolor": "0",
    "divlinecolor": "CCCCCC",
    "showvalues": "0",
    "showcanvasborder": "0",
    "canvasborderalpha": "0",
    "canvasbordercolor": "CCCCCC",
    "canvasborderthickness": "1",
    "yaxismaxvalue": "30000",
    "captionpadding": "30",
    "linethickness": "3",
    "yaxisvaluespadding": "15",
    "legendshadow": "0",
    "legendborderalpha": "0",
    "palettecolors": "#f8bd19,#008ee4,#33bdda,#e44a00,#6baa01,#583e78",
    "showborder": "0"
};

$scope.categories = [
    {
        "category": [
            {
                "label": "Jan"
            },
            {
                "label": "Feb"
            },
            {
                "label": "Mar"
            },
            {
                "label": "Apr"
            },
            {
                "label": "May"
            },
            {
                "label": "Jun"
            },
            {
                "label": "Jul"
            },
            {
                "label": "Aug"
            },
            {
                "label": "Sep"
            },
            {
                "label": "Oct"
            },
            {
                "label": "Nov"
            },
            {
                "label": "Dec"
            }
        ]
    }
];

$scope.dataset = [
    {
        "seriesname": "2013",
        "data": [
            {
                "value": "22400"
            },
            {
                "value": "24800"
            },
            {
                "value": "21800"
            },
            {
                "value": "21800"
            },
            {
                "value": "24600"
            },
            {
                "value": "27600"
            },
            {
                "value": "26800"
            },
            {
                "value": "27700"
            },
            {
                "value": "23700"
            },
            {
                "value": "25900"
            },
            {
                "value": "26800"
            },
            {
                "value": "24800"
            }
        ]
    },
    {
        "seriesname": "2012",
        "data": [
            {
                "value": "10000"
            },
            {
                "value": "11500"
            },
            {
                "value": "12500"
            },
            {
                "value": "15000"
            },
            {
                "value": "16000"
            },
            {
                "value": "17600"
            },
            {
                "value": "18800"
            },
            {
                "value": "19700"
            },
            {
                "value": "21700"
            },
            {
                "value": "21900"
            },
            {
                "value": "22900"
            },
            {
                "value": "20800"
            }
        ]
    }
];

  $scope.alert = '';
  $scope.showListBottomSheet = function($event) {
    $scope.alert = '';
    $mdBottomSheet.show({
      template: '<md-bottom-sheet class="md-list md-has-header"> <md-subheader>Settings</md-subheader> <md-list> <md-item ng-repeat="item in items"><md-item-content md-ink-ripple flex class="inset"> <a flex aria-label="{{item.name}}" ng-click="listItemClick($index)"> <span class="md-inline-list-icon-label">{{ item.name }}</span> </a></md-item-content> </md-item> </md-list></md-bottom-sheet>',
      controller: 'ListBottomSheetCtrl',
      targetEvent: $event
    }).then(function(clickedItem) {
      $scope.alert = clickedItem.name + ' clicked!';
    });
  };
  
  $scope.showAdd = function(ev) {
    $mdDialog.show({
      controller: DialogController,
      template: '<md-dialog aria-label="Mango (Fruit)"> <md-content class="md-padding"> <form name="deviceForm"> <div layout layout-sm="column"> <md-input-container flex> <label>Device Name</label> <input ng-model="device.name" placeholder="Placeholder text"> </md-input-container> </div> <md-input-container flex> <label>MAC</label> <input ng-model="device.mac" disabled> </md-input-container> <div layout layout-sm="column"> <md-input-container flex> <label>Registration Date</label> <input ng-model="device.date"> </md-input-container> </div> <md-input-container flex> <label>Notes</label> <textarea ng-model="device.notes" columns="1" md-maxlength="150"></textarea> </md-input-container> </form> </md-content> <div class="md-actions" layout="row"> <span flex></span> <md-button ng-click="answer(\'not useful\')"> Cancel </md-button> <md-button ng-click="answer(\'useful\')" class="md-primary"> Save </md-button> </div></md-dialog>',
      targetEvent: ev,
    })
    .then(function(answer) {
      $scope.alert = 'You said the information was "' + answer + '".';
    }, function() {
      $scope.alert = 'You cancelled the dialog.';
    });
  };




}]);



fleetmgntControllers.controller('DeviceCtrl', function($scope) {

  $scope.devices = [
      {
        nickname: 'My Mobile',
        MAC: '68-A3-C4-CB-9D-1E',
        registrationDate: '29/9/2015',
        status: "Active",
        id: "DEV01"
      },{
        nickname: 'Driver Mobile',
        MAC: '68-A3-C4-CB-9D-1E',
        registrationDate: '29/9/2015',
        status: "Inactive",
        id: "DEV01"
      },{
        nickname: 'Kid1 Mobile',
        MAC: '68-A3-C4-CB-9D-1E',
        registrationDate: '29/9/2015',
        status: "Active",
        id: "DEV01"
      },{
        nickname: 'My Mobile - Old',
        MAC: '00:00:00:00:00:0X',
        registrationDate: '29/9/2015',
        status: "Inactive",
        id: "DEV01"
      },{
        nickname: 'My Mobile',
        MAC: '68-A3-C4-CB-9D-1E',
        registrationDate: '29/9/2015',
        status: "Active",
        id: "DEV01"
      },{
        nickname: 'My Mobile',
        MAC: '68-A3-C4-CB-9D-1E',
        registrationDate: '29/9/2015',
        status: "Active",
        id: "DEV01"
      },{
        nickname: 'My Mobile',
        MAC: '68-A3-C4-CB-9D-1E',
        registrationDate: '29/9/2015',
        status: "Active",
        id: "DEV01"
      },{
        nickname: 'My Mobile',
        MAC: '68-A3-C4-CB-9D-1E',
        registrationDate: '29/9/2015',
        status: "Active",
        id: "DEV01"
      },{
        nickname: 'My Mobile',
        MAC: '68-A3-C4-CB-9D-1E',
        registrationDate: '29/9/2015',
        status: "Active",
        id: "DEV01"
      },{
        nickname: 'My Mobile',
        MAC: '68-A3-C4-CB-9D-1E',
        registrationDate: '29/9/2015',
        status: "Active",
        id: "DEV01"
      },{
        nickname: 'My Mobile',
        MAC: '68-A3-C4-CB-9D-1E',
        registrationDate: '29/9/2015',
        status: "Active",
        id: "DEV01"
      },{
        nickname: 'My Mobile',
        MAC: '68-A3-C4-CB-9D-1E',
        registrationDate: '29/9/2015',
        status: "Active",
        id: "DEV01"
      },{
        nickname: 'My Mobile',
        MAC: '68-A3-C4-CB-9D-1E',
        registrationDate: '29/9/2015',
        status: "Active",
        id: "DEV01"
      },{
        nickname: 'My Mobile',
        MAC: '68-A3-C4-CB-9D-1E',
        registrationDate: '29/9/2015',
        status: "Active",
        id: "DEV01"
      },{
        nickname: 'My Mobile',
        MAC: '68-A3-C4-CB-9D-1E',
        registrationDate: '29/9/2015',
        status: "Active",
        id: "DEV01"
      },{
        nickname: 'My Mobile',
        MAC: '68-A3-C4-CB-9D-1E',
        registrationDate: '29/9/2015',
        status: "Active",
        id: "DEV01"
      }
      
    ];


 $scope.checkActive = function(status){
  if(status=='Active')
        return 'dark-green';
      else
        return 'dark-red';
    };

    
  });




fleetmgntControllers.controller('WindowCtrl', function ($scope) {
  $scope.place = {};
  $scope.showPlaceDetails = function(param) {
    $scope.place = param;
  }
});


fleetmgntControllers.controller('ConfigureCtrl', ['$scope', '$timeout', 'uiGmapLogger', '$http','uiGmapGoogleMapApi','$mdDialog','GetGeoLocation','geolocation',
  function($scope,$timeout, $log, $http, GoogleMapApi, $mdDialog,GetGeoLocation,geolocation) {

    $scope.saveBtn = new Object();
    $scope.saveBtn.disable = true;
    $scope.saveBtn.class = "md-hue-1";
    $scope.direction = false;
    $scope.currLocn = new Object();
    $scope.currLocn.lat= 12.981097;
    $scope.currLocn.lng = 77.593174;
    $scope.directionsDisplays = [];

     $scope.routes =[];

    geolocation.getLocation().then(function(data){

      $scope.currLocn.lat = data.coords.latitude;
      $scope.currLocn.lng = data.coords.longitude;

      //console.log($scope.currLocn.lat,$scope.currLocn.lng);

      GoogleMapApi.then(function(maps) {

      
     maps.visualRefresh = true;
    $scope.defaultBounds = new google.maps.LatLngBounds(
      new google.maps.LatLng(40.82148, -73.66450),
      new google.maps.LatLng(40.66541, -74.31715));
        createMaps($scope,GetGeoLocation,geolocation);
      });
    });

   $scope.isCreateRules = true;
   $scope.isCreateAlerts = true;

   var ruleObj = Object();
    ruleObj.type = [{'name':'Trip','desc':'Trip monitoring','req':[{'name':'Start Location','type':'text','elmName':'startLoc','placeholder':'Search Location','searchBoxParent':'startLocParent' },{'name':'End Location','type':'text','elmName':'endLoc','placeholder':'Search Location','searchBoxParent':'endLocParent' }]},{'name':'Nearby','desc':' Nearby preferred location','req':[{'name':'Nearby Location','type':'text','elmName':'nearLoc','placeholder':'Search Location' ,'searchBoxParent':'nearLocParent'}]}]; 
    $scope.ruleObj = ruleObj;
    $scope.selectedRuleType = function(selectedType){
      
      $scope.ruleObj.locCtrl = selectedType.req;
      $scope.saveBtn.disable = false;

      $scope.directionMap = {
        size : "col-xs-12" , directionsSize : "none"
      };
      if(selectedType.name == 'Trip'){
      $scope.direction = true;
       }else{
        $scope.direction = false;
       }
     }
$scope.map2lcn = "Select a location";
$scope.map2addr = "Select a location";
                    

$log.doLog = true;

//Function to show dialog

$scope.displayRtDtls = function(routeIdx,ev){
    console.log('Route Index' + routeIdx);
     /*$mdDialog.show(
      $mdDialog.alert()
        .parent(angular.element(document.querySelector('#routeOpts')))
        .clickOutsideToClose(true)
        .title($scope.routes[routeIdx].highlts)
        .theme("docs-dark")
        .content($scope.routes[routeIdx].steps)
        .ariaLabel('Display details')
        .ok('SELECT THIS ROUTE')
        
    );*/

     //$scope.showAdvanced = function(ev) {
    $scope.currentRoute = $scope.routes[routeIdx];
    console.log($scope.currentRoute);
    $mdDialog.show({
      controller: DialogController,
      //scope:$scope,
      //templateUrl: 'views/route-cofirm.html',
      template:
      '<md-dialog aria-label="'+$scope.currentRoute.highlts+'"  ng-cloak>'+
      '<form>'+
      '<md-toolbar>'+
       ' <div class="md-toolbar-tools">'+
        '  <h2>'+$scope.currentRoute.highlts+'</h2>'+
         ' <span flex></span>'+
          '<md-button aria-label="Cancel" class="md-icon-button" ng-click="cancel()">'+
           '<ng-md-icon icon="cancel"></ng-md-icon>'+
         ' </md-button>'+
        '</div>'+
      '</md-toolbar>'+
      '<md-dialog-content style="max-width:800px;max-height:810px; ">'+
       ' <div class="md-dialog-content">'+
        '  <h2>'+$scope.currentRoute.highlts+'</h2>'+
         '<div class="stepDetails">'+$scope.currentRoute.steps+'</div>'+
        '</div>'+
      '</md-dialog-content>'+
      '<div class="md-actions" layout="row">'+
       ' <span flex></span>'+
       ' <md-button class="md-raised md-primary" ng-click="selectRoute()" >'+
       '  SELECT THIS ROUTE'+
       ' </md-button>    '+
     ' </div>'+
     ' </form>'+
    '</md-dialog>',
      parent: angular.element(document.body),
      targetEvent: ev,
      clickOutsideToClose:false
    })
    .then(function(answer) {
      $scope.status = 'You said the information was "' + answer + '".';
    }, function() {
      $scope.status = 'You cancelled the dialog.';
    });
  //};

}


//Function to get Direction
    $scope.getDirection = function(){
        $scope.routes = [];
        var directionsService = new google.maps.DirectionsService;
        if($scope.map.markers[0].longitude!='' && $scope.map.markers[1].longitude){
            var sourceLoc = {
            lat : $scope.map.markers[0].latitude,
            lng : $scope.map.markers[0].longitude
        }
        var destLoc = {
            lat : $scope.map.markers[1].latitude,
            lng : $scope.map.markers[1].longitude
        }

        //createNewMap(sourceLoc,destLoc,$scope);
        //createNewMaps($scope,GetGeoLocation,geolocation,sourceLoc,destLoc);
        angular.forEach($scope.directionsDisplays,function(display){
            display.setMap(null);
        });
        $scope.directionsDisplays = [];
            var directionsServiceRequest = {
        origin: new google.maps.LatLng(
            $scope.map.markers[0].latitude, 
            $scope.map.markers[0].longitude
        ),
        destination: new google.maps.LatLng(
            $scope.map.markers[1].latitude, 
            $scope.map.markers[1].longitude
        ),
        travelMode: google.maps.TravelMode['DRIVING'],
        optimizeWaypoints: true,
        durationInTraffic:true,
        provideRouteAlternatives: true
    };

    $('#directionSteps').html("");
    directionsService.route(directionsServiceRequest, function(response, status) {
      //console.log(response);
        if (status == google.maps.DirectionsStatus.OK) {
            angular.forEach(response.routes,function(value,key) {
                var directionsDisplay;
               var displayRt = new Object(); 
            if(key == 0){
             directionsDisplay = new google.maps.DirectionsRenderer({draggable:true,suppressMarkers:true});   
             displayRt.class = "md-primary"
            }else{
            directionsDisplay = new google.maps.DirectionsRenderer({draggable:true,suppressMarkers:true, polylineOptions: { strokeColor: "rgb(146, 144, 144)" 
                , strokeOpacity: 1.0,strokeWeight: 3} });    
            }
            var route = response;
            route.routes = [];
            route.routes[0] = value;
            directionsDisplay.setMap($scope.map.control.getGMap());
            directionsDisplay.setDirections(route);
            //directionsDisplay.setPanel(document.getElementById('directionSteps'));
             console.log(route);    
            $scope.directionsDisplays.push(directionsDisplay);
            angular.forEach(value.legs,function(leg,key){
              displayRt.highlts = leg.distance.text+" - about "+ leg.duration.text;    
             displayRt.steps = "";
             angular.forEach(leg.steps,function(step,key){
               displayRt.steps =  displayRt.steps +"<br>" + key + ". " + step.instructions + "  - " + step.distance.text; 
             });
             $scope.routes.push(displayRt);
              console.log( $scope.routes);
            });
         });
        }
      });
     }
   }
 }]);


fleetmgntControllers.controller("SearchController",['$scope', '$timeout', 'uiGmapLogger', '$http','uiGmapGoogleMapApi'
    , function ($scope, $timeout, $log, $http, GoogleMapApi) {
  
}]);


function DialogController($scope, $mdDialog) {
  $scope.hide = function() {
    $mdDialog.hide();
  };
  $scope.cancel = function() {
    $mdDialog.cancel();
  };
  $scope.answer = function(answer) {
    $mdDialog.hide(answer);
  };
}


function createMaps($scope,GetGeoLocation,geolocation){

//Google maps instances -- Start

$scope.searchboxBounds =  new google.maps.LatLngBounds();

angular.extend($scope, {
    selected: {
      options: {
        visible:false

      },
      templateurl:'window.tpl.html',
      templateparameter: {}
    },
  selected1: {
      options: {
        visible:false

      },
      templateurl:'window.tpl.html',
      templateparameter: {}
    },
  selected2: {
      options: {
        visible:false

      },
      templateurl:'window.tpl.html',
      templateparameter: {}
    },
    map: {
      control: {},
      center: {
        latitude: $scope.currLocn.lat,
        longitude: $scope.currLocn.lng
      },
      zoom: 12,
      dragging: false,
      bounds: {},
      markers: [{
              id:1,
              place_id: "source_location",
              latitude: $scope.currLocn.lat,
              longitude: $scope.currLocn.lng,
              options: {
              labelContent: 'Start here!',
             labelAnchor: "22 0",
             labelClass: "marker-labels",
             draggable: true,
                   selected: {}
                 },
              templateurl:'window.tpl.html'
            },{
              id:2,
              place_id: "dest_location",
              latitude: $scope.currLocn.lat+0.0001,
              longitude: $scope.currLocn.lng+0.05,
              options: {
                labelContent: 'End here!',
            labelAnchor: "22 0",
            labelClass: "marker-labels",
            draggable: true,
            selected: {}
              },
              templateurl:'window.tpl.html'
            }],
      idkey: 'place_id',
      events: {
        idle: function (map) {
                   
        },
    
       /* dragend: function(map) {
          //update the search box bounds after dragging the map
          var bounds = map.getBounds();
          var ne = bounds.getNorthEast();
          var sw = bounds.getSouthWest(); 
          $scope.searchbox.options.bounds = new google.maps.LatLngBounds(sw, ne);
          //$scope.searchbox.options.visible = true;
        },*/tilesloaded: function (map, eventName, originalEventArgs) {
        }
      }
    },
    searchbox: {
      template:'searchbox.tpl.html',
      //position:'top-right',
      position:'top-left',
      options: {
      },
      parentdiv:'searchBoxParentStartLoc',
      events: {
        places_changed: function (searchBox) {
          
          var places = searchBox.getPlaces();

          if (places.length == 0) {
            return;
          }
          // For each place, get the icon, place name, and location.
          var newMarkers = [];
          //var bounds = new google.maps.LatLngBounds();
          for (var i = 0, place; place = places[i]; i++) {
            // Create a marker for each place.
            var marker = {
              id:i,
              place_id: "source_location",
              idKey: place.place_id,
              name: place.name,
              latitude: place.geometry.location.lat(),
              longitude: place.geometry.location.lng(),
              options: {
                labelContent: 'Start here!',
             labelAnchor: "22 0",
             labelClass: "marker-labels",
             draggable: true,
                visible:true,
                
                selected: {}
              },
              templateurl:'window.tpl.html',
              templateparameter: place
            };
            newMarkers.push(marker);
         $scope.maplcn = "Lat : "+place.geometry.location.lat()+", Long : "+place.geometry.location.lng();
         GetGeoLocation.getMapData(place.geometry.location.lat(),place.geometry.location.lng()).then(function(data){
               $scope.mapaddr = data.formatted_address;
          });
            $scope.searchboxBounds.extend(place.geometry.location);
            //console.log(bounds);
          }

          //$scope.searchbox1bounds = bounds;  

         $scope.map.bounds = {
            northeast: {
              latitude: $scope.searchboxBounds.getNorthEast().lat(),
              longitude: $scope.searchboxBounds.getNorthEast().lng()
            },
            southwest: {
              latitude: $scope.searchboxBounds.getSouthWest().lat(),
              longitude: $scope.searchboxBounds.getSouthWest().lng()
            }
          }

          //console.log($scope.map.bounds);

          _.each(newMarkers, function(marker) {
            marker.closeClick = function() {
              $scope.selected.options.visible = false;
              marker.options.visble = false;
              return $scope.$apply();
            };
            marker.onClicked = function() {
              $scope.selected.options.visible = false;
              $scope.selected = marker;
              $scope.selected.options.visible = true;
            };
          });

          //console.log(newMarkers);
          //$scope.map.markers = [];
          $scope.map.markers = newMarkers;
        }
      }
    },searchbox1: {
      template:'searchbox.tpl.html',
      //position:'top-right',
      position:'top-left',
      options: {
      },
      parentdiv:'searchBoxParentEndLoc',
      events: {
        places_changed: function (searchBox) {
          
          var places = searchBox.getPlaces();

          if (places.length == 0) {
            return;
          }
          // For each place, get the icon, place name, and location.
          var newMarkers = [];
          //var bounds = new google.maps.LatLngBounds();
          for (var i = 0, place; place = places[i]; i++) {
            // Create a marker for each place.
            var marker = {
              id:i,
              place_id: "dest_location",
              idKey: place.place_id,
              name: place.name,
              latitude: place.geometry.location.lat(),
              longitude: place.geometry.location.lng(),
              options: {
                labelContent: 'End here!',
             labelAnchor: "22 0",
             labelClass: "marker-labels",
             draggable: true
              },
              templateurl:'window.tpl.html',
              templateparameter: place
            };
            newMarkers.push(marker);
           $scope.mapl1cn = "Lat : "+place.geometry.location.lat()+", Long : "+place.geometry.location.lng();

            GetGeoLocation.getMapData(place.geometry.location.lat(),place.geometry.location.lng()).then(function(data){
                       $scope.map1addr = data.formatted_address;
                  });
                    $scope.searchboxBounds.extend(place.geometry.location);
                    //console.log(place.geometry.location);
          }

          //console.log($scope.searchbox1bounds);

            /*_.each($scope.searchbox1bounds, function(eBound){
              console.log(eBound);
            bounds.extend(eBound);    
            });*/

            //console.log(bounds);

          $scope.map.bounds = {
            northeast: {
              latitude: $scope.searchboxBounds.getNorthEast().lat(),
              longitude: $scope.searchboxBounds.getNorthEast().lng()
            },
            southwest: {
              latitude: $scope.searchboxBounds.getSouthWest().lat(),
              longitude: $scope.searchboxBounds.getSouthWest().lng()
            }
          }

          _.each($scope.map.markers,function(marker){
            if(marker.place_id=='dest_location'){
              $scope.map.markers.pop();
            }

          });

          _.each(newMarkers, function(marker) {
            marker.closeClick = function() {
              $scope.selected.options.visible = false;
              marker.options.visble = false;
              return $scope.$apply();
            };
            marker.onClicked = function() {
              $scope.selected.options.visible = false;
              $scope.selected = marker;
              $scope.selected.options.visible = true;
            };

            $scope.map.markers.push(marker);
          });

          
          
        }
      }
    },
    map2: {
      control: {},
      center: {
        latitude: $scope.currLocn.lat,
        longitude: $scope.currLocn.lng
      },
      zoom: 10,
      dragging: false,
      bounds: {
        northeast: {
        latitude:$scope.defaultBounds.getNorthEast().lat(),
        longitude:$scope.defaultBounds.getNorthEast().lng()
            },
        southwest: {
        latitude:$scope.defaultBounds.getSouthWest().lat(),
        longitude:-$scope.defaultBounds.getSouthWest().lng()}
      },
      markers: [],
      idkey: 'place_id',
      events: {
        idle: function (map) {
                   
        },
        dragend: function(map) {
          //update the search box bounds after dragging the map
          var bounds = map.getBounds();
          var ne = bounds.getNorthEast();
          var sw = bounds.getSouthWest(); 
          $scope.searchbox2.options.bounds = new google.maps.LatLngBounds(sw, ne);
          //$scope.searchbox2.options.visible = true;
        },tilesloaded: function (map, eventName, originalEventArgs) {
        },
        click: function (mapModel, eventName, originalEventArgs) {
          // 'this' is the directive's scope
          //console.log("user defined event: " + eventName, mapModel, originalEventArgs);

          var e = originalEventArgs[0];
          var lat = e.latLng.lat(),
            lon = e.latLng.lng();
            //console.log('You clicked here ' + 'lat: ' + lat + ' lon: ' + lon);

            /*var marker = {
              id:i,
              place_id: place.place_id,
              name: place.name,
              latitude: place.geometry.location.lat(),
              longitude: place.geometry.location.lng(),
              options: {
                visible:false
              },
              templateurl:'window.tpl.html',
              templateparameter: place
            };
            newMarkers.push(marker);*/
              
            GetGeoLocation.getMapData(lat,lon).then(function(data){
               $scope.map2lcn = "Lat : "+lat+", Long : "+lon ;
               $scope.map2addr = data.formatted_address;
               //console.log($scope.map2lcn);
              
          });
            

          $scope.map2.markers = [{
            id:0,
              place_id: 'ChIJUxnzDhEUrjsRs-zJhe1LSBA',
              name: 'Test',
            options: {
              labelContent: 'You clicked here ' + 'lat: ' + lat + ' lon: ' + lon,
              labelClass: "marker-labels",
              labelAnchor:"50 0",
              visible:true
            },
            latitude: lat,
            longitude: lon
          }];

          
          //scope apply required because this event handler is outside of the angular domain
          $scope.$apply();
        },
      }
    },
    searchbox2: {
      template:'searchbox.tpl.html',
      //position:'top-right',
      position:'top-left',
      options: {
       
      },
      parentdiv:'searchBoxParentNearLoc',
      events: {
        places_changed: function (searchBox) {
          
          var places = searchBox.getPlaces();

          if (places.length == 0) {
            return;
          }
          // For each place, get the icon, place name, and location.
          var newMarkers = [];
          var bounds = new google.maps.LatLngBounds();
          for (var i = 0, place; place = places[i]; i++) {
            // Create a marker for each place.
            var marker = {
              id:i,
              place_id: place.place_id,
              name: place.name,
              latitude: place.geometry.location.lat(),
              longitude: place.geometry.location.lng(),
              options: {
                visible:false
              },
              templateurl:'window.tpl.html',
              templateparameter: place
            };
            newMarkers.push(marker);

            //console.log('You clicked here ' + 'lat: ' + marker.latitude + ' lon: ' + marker.longitude);
            $scope.map2lcn = "Lat : "+place.geometry.location.lat()+", Long : "+place.geometry.location.lng();


            GetGeoLocation.getMapData(place.geometry.location.lat(),place.geometry.location.lng()).then(function(data){
               $scope.map2addr = data.formatted_address;
                        });

            bounds.extend(place.geometry.location);
          }

          $scope.map2.bounds = {
            northeast: {
              latitude: bounds.getNorthEast().lat(),
              longitude: bounds.getNorthEast().lng()
            },
            southwest: {
              latitude: bounds.getSouthWest().lat(),
              longitude: bounds.getSouthWest().lng()
            }
          }

          _.each(newMarkers, function(marker) {
            marker.closeClick = function() {
              $scope.selected2.options.visible = false;
              marker.options.visble = false;
              return $scope.$apply();
            };
            marker.onClicked = function() {
              $scope.selected2.options.visible = false;
              $scope.selected2 = marker;
              $scope.selected2.options.visible = true;
            };
          });

          $scope.map2.markers = newMarkers;
          //console.log($scope.map2.markers);
        }
      }
    }
  });




    
    $scope.$watchGroup(['map.markers[0].latitude'], function() {


      if($scope.map.markers[0]!=undefined){
      GetGeoLocation.getMapData($scope.map.markers[0].latitude,$scope.map.markers[0].longitude).then(function(data){
               $scope.mapaddr = data.formatted_address;
            });
    }
  });

    $scope.$watchGroup(['map.markers[1].latitude'], function() {
      if($scope.map.markers[1]!=undefined){
      GetGeoLocation.getMapData($scope.map.markers[1].latitude,$scope.map.markers[1].longitude).then(function(data){
               $scope.map1addr = data.formatted_address;
            });  
      }
      
  });

//Google maps instances -- end

  


}

function mapLocAddr($scope,lat,lng){

  $scope.maplcn = "Lat : "+model.latitude+", Long : "+model.longitude;
            GetGeoLocation.getMapData(model.latitude,model.longitude).then(function(data){
               $scope.mapaddr = data.formatted_address;
            });
}


fleetmgntControllers.controller('BusinessCaseCtrl', function ($scope) {
  $scope.myInterval = 3000;
  var slides = $scope.slides = [
{image:'http://www.carzonrent.com/myles-campaign/images/plans_bnr-cor.jpg'},
{image:'http://www.carzonrent.com/myles-campaign/images/ladakh03.jpg'},
{image:'http://www.carzonrent.com/myles-campaign/images/myles_banner.jpg'},
{image:'http://www.carzonrent.com/myles-campaign/images/3banner.jpg'},
{image:'http://www.carzonrent.com/myles-campaign/images/4banner.jpg'},
{image:'http://www.carzonrent.com/myles-campaign/images/5banner.jpg'}

  ];

  $scope.options = [
  {usecase:'Manage your fleet vehicles',icon:'local_shipping'},
  {usecase:'Manage your taxi services',icon:'local_taxi'},
  {usecase:'Track your car ',icon:'directions_car'},
  {usecase:'Manage your bike/cycle ride ',icon:'directions_bike'},
  {usecase:'Locate your frends and family',icon:'gps_fixed'}
     ];


  /*$scope.addSlide = function() {
    var newWidth = 600 + slides.length + 1;
    slides.push({
      image: 'http://placekitten.com/' + newWidth + '/300',
      text: ['More','Extra','Lots of','Surplus'][slides.length % 4] + ' ' +
        ['Cats', 'Kittys', 'Felines', 'Cutes'][slides.length % 4]
    });
  };
  for (var i=0; i<4; i++) {
    $scope.addSlide();
  }*/
});




function createNewMaps($scope,GetGeoLocation,geolocation,sourceLoc,destLoc){

//Google maps instances -- Start

$scope.searchboxBounds =  new google.maps.LatLngBounds();

angular.extend($scope, {
    selected: {
      options: {
        visible:false

      },
      templateurl:'window.tpl.html',
      templateparameter: {}
    },
  selected1: {
      options: {
        visible:false

      },
      templateurl:'window.tpl.html',
      templateparameter: {}
    },
  selected2: {
      options: {
        visible:false

      },
      templateurl:'window.tpl.html',
      templateparameter: {}
    },
    map: {
      control: {},
      center: {
        latitude: $scope.currLocn.lat,
        longitude: $scope.currLocn.lng
      },
      zoom: 12,
      dragging: false,
      bounds: $scope.map.bounds,
      markers: [{
              id:1,
              place_id: "source_location",
              latitude: sourceLoc.lat,
              longitude: sourceLoc.lng,
              options: {
              labelContent: 'Start here!',
             labelAnchor: "22 0",
             labelClass: "marker-labels",
             draggable: true,
                   selected: {}
                 },
              templateurl:'window.tpl.html'
            },{
              id:2,
              place_id: "dest_location",
              latitude: destLoc.lat,
              longitude: destLoc.lng,
              options: {
                labelContent: 'End here!',
            labelAnchor: "22 0",
            labelClass: "marker-labels",
            draggable: true,
            selected: {}
              },
              templateurl:'window.tpl.html'
            }],
      idkey: 'place_id',
      events: {
        idle: function (map) {
                   
        },
    
       /* dragend: function(map) {
          //update the search box bounds after dragging the map
          var bounds = map.getBounds();
          var ne = bounds.getNorthEast();
          var sw = bounds.getSouthWest(); 
          $scope.searchbox.options.bounds = new google.maps.LatLngBounds(sw, ne);
          //$scope.searchbox.options.visible = true;
        },*/tilesloaded: function (map, eventName, originalEventArgs) {
        }
      }
    },
    searchbox: {
      template:'searchbox.tpl.html',
      //position:'top-right',
      position:'top-left',
      options: {
      },
      parentdiv:'searchBoxParentStartLoc',
      events: {
        places_changed: function (searchBox) {
          
          var places = searchBox.getPlaces();

          if (places.length == 0) {
            return;
          }
          // For each place, get the icon, place name, and location.
          var newMarkers = [];
          //var bounds = new google.maps.LatLngBounds();
          for (var i = 0, place; place = places[i]; i++) {
            // Create a marker for each place.
            var marker = {
              id:i,
              place_id: "source_location",
              idKey: place.place_id,
              name: place.name,
              latitude: place.geometry.location.lat(),
              longitude: place.geometry.location.lng(),
              options: {
                labelContent: 'Start here!',
             labelAnchor: "22 0",
             labelClass: "marker-labels",
             draggable: true,
                visible:true,
                
                selected: {}
              },
              templateurl:'window.tpl.html',
              templateparameter: place
            };
            newMarkers.push(marker);
         $scope.maplcn = "Lat : "+place.geometry.location.lat()+", Long : "+place.geometry.location.lng();
         GetGeoLocation.getMapData(place.geometry.location.lat(),place.geometry.location.lng()).then(function(data){
               $scope.mapaddr = data.formatted_address;
          });
            $scope.searchboxBounds.extend(place.geometry.location);
            //console.log(bounds);
          }

          //$scope.searchbox1bounds = bounds;  

         $scope.map.bounds = {
            northeast: {
              latitude: $scope.searchboxBounds.getNorthEast().lat(),
              longitude: $scope.searchboxBounds.getNorthEast().lng()
            },
            southwest: {
              latitude: $scope.searchboxBounds.getSouthWest().lat(),
              longitude: $scope.searchboxBounds.getSouthWest().lng()
            }
          }

          //console.log($scope.map.bounds);

          _.each(newMarkers, function(marker) {
            marker.closeClick = function() {
              $scope.selected.options.visible = false;
              marker.options.visble = false;
              return $scope.$apply();
            };
            marker.onClicked = function() {
              $scope.selected.options.visible = false;
              $scope.selected = marker;
              $scope.selected.options.visible = true;
            };
          });

          //console.log(newMarkers);
          //$scope.map.markers = [];
          $scope.map.markers = newMarkers;
        }
      }
    },searchbox1: {
      template:'searchbox.tpl.html',
      //position:'top-right',
      position:'top-left',
      options: {
      },
      parentdiv:'searchBoxParentEndLoc',
      events: {
        places_changed: function (searchBox) {
          
          var places = searchBox.getPlaces();

          if (places.length == 0) {
            return;
          }
          // For each place, get the icon, place name, and location.
          var newMarkers = [];
          //var bounds = new google.maps.LatLngBounds();
          for (var i = 0, place; place = places[i]; i++) {
            // Create a marker for each place.
            var marker = {
              id:i,
              place_id: "dest_location",
              idKey: place.place_id,
              name: place.name,
              latitude: place.geometry.location.lat(),
              longitude: place.geometry.location.lng(),
              options: {
                labelContent: 'End here!',
             labelAnchor: "22 0",
             labelClass: "marker-labels",
             draggable: true
              },
              templateurl:'window.tpl.html',
              templateparameter: place
            };
            newMarkers.push(marker);
           $scope.mapl1cn = "Lat : "+place.geometry.location.lat()+", Long : "+place.geometry.location.lng();

            GetGeoLocation.getMapData(place.geometry.location.lat(),place.geometry.location.lng()).then(function(data){
                       $scope.map1addr = data.formatted_address;
                  });
                    $scope.searchboxBounds.extend(place.geometry.location);
                    //console.log(place.geometry.location);
          }

          //console.log($scope.searchbox1bounds);

            /*_.each($scope.searchbox1bounds, function(eBound){
              console.log(eBound);
            bounds.extend(eBound);    
            });*/

            //console.log(bounds);

          $scope.map.bounds = {
            northeast: {
              latitude: $scope.searchboxBounds.getNorthEast().lat(),
              longitude: $scope.searchboxBounds.getNorthEast().lng()
            },
            southwest: {
              latitude: $scope.searchboxBounds.getSouthWest().lat(),
              longitude: $scope.searchboxBounds.getSouthWest().lng()
            }
          }

          _.each($scope.map.markers,function(marker){
            if(marker.place_id=='dest_location'){
              $scope.map.markers.pop();
            }

          });

          _.each(newMarkers, function(marker) {
            marker.closeClick = function() {
              $scope.selected.options.visible = false;
              marker.options.visble = false;
              return $scope.$apply();
            };
            marker.onClicked = function() {
              $scope.selected.options.visible = false;
              $scope.selected = marker;
              $scope.selected.options.visible = true;
            };

            $scope.map.markers.push(marker);
          });

          
          
        }
      }
    },
    map2: {
      control: {},
      center: {
        latitude: $scope.currLocn.lat,
        longitude: $scope.currLocn.lng
      },
      zoom: 10,
      dragging: false,
      bounds: {
        northeast: {
        latitude:$scope.defaultBounds.getNorthEast().lat(),
        longitude:$scope.defaultBounds.getNorthEast().lng()
            },
        southwest: {
        latitude:$scope.defaultBounds.getSouthWest().lat(),
        longitude:-$scope.defaultBounds.getSouthWest().lng()}
      },
      markers: [],
      idkey: 'place_id',
      events: {
        idle: function (map) {
                   
        },
        dragend: function(map) {
          //update the search box bounds after dragging the map
          var bounds = map.getBounds();
          var ne = bounds.getNorthEast();
          var sw = bounds.getSouthWest(); 
          $scope.searchbox2.options.bounds = new google.maps.LatLngBounds(sw, ne);
          //$scope.searchbox2.options.visible = true;
        },tilesloaded: function (map, eventName, originalEventArgs) {
        },
        click: function (mapModel, eventName, originalEventArgs) {
          // 'this' is the directive's scope
          //console.log("user defined event: " + eventName, mapModel, originalEventArgs);

          var e = originalEventArgs[0];
          var lat = e.latLng.lat(),
            lon = e.latLng.lng();
            //console.log('You clicked here ' + 'lat: ' + lat + ' lon: ' + lon);

            /*var marker = {
              id:i,
              place_id: place.place_id,
              name: place.name,
              latitude: place.geometry.location.lat(),
              longitude: place.geometry.location.lng(),
              options: {
                visible:false
              },
              templateurl:'window.tpl.html',
              templateparameter: place
            };
            newMarkers.push(marker);*/
              
            GetGeoLocation.getMapData(lat,lon).then(function(data){
               $scope.map2lcn = "Lat : "+lat+", Long : "+lon ;
               $scope.map2addr = data.formatted_address;
               //console.log($scope.map2lcn);
              
          });
            

          $scope.map2.markers = [{
            id:0,
              place_id: 'ChIJUxnzDhEUrjsRs-zJhe1LSBA',
              name: 'Test',
            options: {
              labelContent: 'You clicked here ' + 'lat: ' + lat + ' lon: ' + lon,
              labelClass: "marker-labels",
              labelAnchor:"50 0",
              visible:true
            },
            latitude: lat,
            longitude: lon
          }];

          
          //scope apply required because this event handler is outside of the angular domain
          $scope.$apply();
        },
      }
    },
    searchbox2: {
      template:'searchbox.tpl.html',
      //position:'top-right',
      position:'top-left',
      options: {
       
      },
      parentdiv:'searchBoxParentNearLoc',
      events: {
        places_changed: function (searchBox) {
          
          var places = searchBox.getPlaces();

          if (places.length == 0) {
            return;
          }
          // For each place, get the icon, place name, and location.
          var newMarkers = [];
          var bounds = new google.maps.LatLngBounds();
          for (var i = 0, place; place = places[i]; i++) {
            // Create a marker for each place.
            var marker = {
              id:i,
              place_id: place.place_id,
              name: place.name,
              latitude: place.geometry.location.lat(),
              longitude: place.geometry.location.lng(),
              options: {
                visible:false
              },
              templateurl:'window.tpl.html',
              templateparameter: place
            };
            newMarkers.push(marker);

            //console.log('You clicked here ' + 'lat: ' + marker.latitude + ' lon: ' + marker.longitude);
            $scope.map2lcn = "Lat : "+place.geometry.location.lat()+", Long : "+place.geometry.location.lng();


            GetGeoLocation.getMapData(place.geometry.location.lat(),place.geometry.location.lng()).then(function(data){
               $scope.map2addr = data.formatted_address;
                        });

            bounds.extend(place.geometry.location);
          }

          $scope.map2.bounds = {
            northeast: {
              latitude: bounds.getNorthEast().lat(),
              longitude: bounds.getNorthEast().lng()
            },
            southwest: {
              latitude: bounds.getSouthWest().lat(),
              longitude: bounds.getSouthWest().lng()
            }
          }

          _.each(newMarkers, function(marker) {
            marker.closeClick = function() {
              $scope.selected2.options.visible = false;
              marker.options.visble = false;
              return $scope.$apply();
            };
            marker.onClicked = function() {
              $scope.selected2.options.visible = false;
              $scope.selected2 = marker;
              $scope.selected2.options.visible = true;
            };
          });

          $scope.map2.markers = newMarkers;
          //console.log($scope.map2.markers);
        }
      }
    }
  });




    
    $scope.$watchGroup(['map.markers[0].latitude'], function() {


      if($scope.map.markers[0]!=undefined){
      GetGeoLocation.getMapData($scope.map.markers[0].latitude,$scope.map.markers[0].longitude).then(function(data){
               $scope.mapaddr = data.formatted_address;
            });
    }
  });

    $scope.$watchGroup(['map.markers[1].latitude'], function() {
      if($scope.map.markers[1]!=undefined){
      GetGeoLocation.getMapData($scope.map.markers[1].latitude,$scope.map.markers[1].longitude).then(function(data){
               $scope.map1addr = data.formatted_address;
            });  
      }
      
  });

    $scope.$watchGroup(['directionHTML'], function() {
      console.log(directionHTML);
      
  });

//Google maps instances -- end

  


}

