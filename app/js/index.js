var app = angular.module('StarterApp', ['ngMaterial','ngAnimate', 'ngMdIcons','ng-fusioncharts', 'ui.bootstrap', 'ui.bootstrap.tpls']);

app.controller('AppCtrl', ['$scope', '$mdBottomSheet','$mdSidenav', '$mdDialog',
    function($scope, $mdBottomSheet, $mdSidenav, $mdDialog){
  $scope.toggleSidenav = function(menuId) {
    $mdSidenav(menuId).toggle();
  };
  $scope.menu = [
    {
      link : '',
      title: 'Dashboard',
      icon: 'dashboard'
    },
   
    {
      link : '',
      title: 'Devices',
      icon: 'perm_device_info'
    },
    {
      link : '',
      title: 'Data',
      icon: 'data_usage'
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
      }      

];

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

app.controller('ListBottomSheetCtrl', function($scope, $mdBottomSheet) {
  $scope.items = [
    { name: 'Share', icon: 'share' },
    { name: 'Upload', icon: 'upload' },
    { name: 'Copy', icon: 'copy' },
    { name: 'Print this page', icon: 'print' },
  ];
  
  $scope.listItemClick = function($index) {
    var clickedItem = $scope.items[$index];
    $mdBottomSheet.hide(clickedItem);
  };
});

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
};

app.directive('userAvatar', function() {
  return {
    replace: true,
    template: '<svg class="user-avatar" viewBox="0 0 128 128" height="64" width="64" pointer-events="none" display="block" > <path fill="#FF8A80" d="M0 0h128v128H0z"/> <path fill="#FFE0B2" d="M36.3 94.8c6.4 7.3 16.2 12.1 27.3 12.4 10.7-.3 20.3-4.7 26.7-11.6l.2.1c-17-13.3-12.9-23.4-8.5-28.6 1.3-1.2 2.8-2.5 4.4-3.9l13.1-11c1.5-1.2 2.6-3 2.9-5.1.6-4.4-2.5-8.4-6.9-9.1-1.5-.2-3 0-4.3.6-.3-1.3-.4-2.7-1.6-3.5-1.4-.9-2.8-1.7-4.2-2.5-7.1-3.9-14.9-6.6-23-7.9-5.4-.9-11-1.2-16.1.7-3.3 1.2-6.1 3.2-8.7 5.6-1.3 1.2-2.5 2.4-3.7 3.7l-1.8 1.9c-.3.3-.5.6-.8.8-.1.1-.2 0-.4.2.1.2.1.5.1.6-1-.3-2.1-.4-3.2-.2-4.4.6-7.5 4.7-6.9 9.1.3 2.1 1.3 3.8 2.8 5.1l11 9.3c1.8 1.5 3.3 3.8 4.6 5.7 1.5 2.3 2.8 4.9 3.5 7.6 1.7 6.8-.8 13.4-5.4 18.4-.5.6-1.1 1-1.4 1.7-.2.6-.4 1.3-.6 2-.4 1.5-.5 3.1-.3 4.6.4 3.1 1.8 6.1 4.1 8.2 3.3 3 8 4 12.4 4.5 5.2.6 10.5.7 15.7.2 4.5-.4 9.1-1.2 13-3.4 5.6-3.1 9.6-8.9 10.5-15.2M76.4 46c.9 0 1.6.7 1.6 1.6 0 .9-.7 1.6-1.6 1.6-.9 0-1.6-.7-1.6-1.6-.1-.9.7-1.6 1.6-1.6zm-25.7 0c.9 0 1.6.7 1.6 1.6 0 .9-.7 1.6-1.6 1.6-.9 0-1.6-.7-1.6-1.6-.1-.9.7-1.6 1.6-1.6z"/> <path fill="#E0F7FA" d="M105.3 106.1c-.9-1.3-1.3-1.9-1.3-1.9l-.2-.3c-.6-.9-1.2-1.7-1.9-2.4-3.2-3.5-7.3-5.4-11.4-5.7 0 0 .1 0 .1.1l-.2-.1c-6.4 6.9-16 11.3-26.7 11.6-11.2-.3-21.1-5.1-27.5-12.6-.1.2-.2.4-.2.5-3.1.9-6 2.7-8.4 5.4l-.2.2s-.5.6-1.5 1.7c-.9 1.1-2.2 2.6-3.7 4.5-3.1 3.9-7.2 9.5-11.7 16.6-.9 1.4-1.7 2.8-2.6 4.3h109.6c-3.4-7.1-6.5-12.8-8.9-16.9-1.5-2.2-2.6-3.8-3.3-5z"/> <circle fill="#444" cx="76.3" cy="47.5" r="2"/> <circle fill="#444" cx="50.7" cy="47.6" r="2"/> <path fill="#444" d="M48.1 27.4c4.5 5.9 15.5 12.1 42.4 8.4-2.2-6.9-6.8-12.6-12.6-16.4C95.1 20.9 92 10 92 10c-1.4 5.5-11.1 4.4-11.1 4.4H62.1c-1.7-.1-3.4 0-5.2.3-12.8 1.8-22.6 11.1-25.7 22.9 10.6-1.9 15.3-7.6 16.9-10.2z"/> </svg>'
  };
});

app.directive('falconLogo', function() {
  return {
    replace: true,
    template: '<svg class="falcon-logo" width="36.000000pt" height="36.000000pt" viewBox="0 0 200.000000 200.000000"  preserveAspectRatio="xMidYMid meet"> <g transform="translate(0.000000,200.000000) scale(0.100000,-0.100000)" fill="#fff" stroke="none"> <path d="M890 1986 c-166 -35 -330 -112 -483 -227 -160 -120 -222 -213 -187 -279 8 -15 6 -20 -10 -25 -30 -10 -70 -63 -70 -95 0 -16 -12 -46 -26 -67 -76 -111 -114 -223 -114 -333 0 -121 35 -217 124 -338 39 -53 50 -62 62 -51 13 10 13 14 -1 29 -26 29 -40 131 -26 193 27 124 171 268 347 348 87 39 198 69 332 88 62 9 113 21 113 26 -1 16 -69 18 -216 5 -127 -11 -146 -11 -203 5 -68 19 -85 15 -58 -14 26 -29 5 -65 -35 -59 -25 4 -29 1 -29 -18 0 -40 -20 -68 -83 -114 -64 -47 -144 -138 -174 -199 -13 -26 -18 -59 -18 -117 0 -93 -4 -91 -56 20 -42 91 -55 169 -42 257 12 73 65 198 109 256 13 18 24 45 24 63 0 43 36 76 109 97 45 13 61 23 61 36 0 13 -9 17 -39 17 -56 0 -67 19 -41 71 59 114 309 285 515 352 112 37 182 47 310 47 164 0 286 -28 422 -96 50 -26 69 -31 75 -21 4 6 8 15 8 18 0 11 -174 87 -250 110 -96 27 -349 36 -450 15z"/> <path d="M1150 1841 c0 -4 36 -15 80 -25 231 -49 485 -164 597 -269 18 -17 36 -28 39 -24 4 4 -31 44 -77 90 -90 89 -169 137 -289 176 -97 31 -350 69 -350 52z"/> <path d="M812 1764 c-32 -16 -94 -65 -156 -124 -100 -95 -142 -127 -153 -116 -11 10 26 53 56 66 30 12 42 30 21 30 -31 0 -73 -36 -101 -84 -38 -68 -48 -77 -106 -87 -43 -8 -113 -45 -113 -60 0 -3 23 -9 51 -12 29 -4 74 -18 101 -32 40 -21 55 -24 77 -17 21 7 35 5 62 -9 18 -10 46 -18 62 -19 43 0 132 35 211 83 105 66 145 84 210 96 33 6 62 13 64 16 14 14 -13 16 -69 6 -62 -11 -111 -32 -269 -116 -85 -45 -130 -54 -175 -35 -19 7 -18 9 8 19 16 6 34 11 41 11 8 0 20 8 27 17 13 15 11 16 -10 10 -32 -8 -83 14 -103 45 -16 24 -16 26 8 36 13 7 24 16 24 22 0 5 5 10 10 10 6 0 10 -9 10 -20 0 -11 -7 -20 -15 -20 -23 0 -18 -28 6 -35 36 -12 69 4 86 39 14 30 14 37 0 64 l-15 31 47 19 c52 22 136 38 257 48 80 6 115 16 102 29 -4 4 -69 2 -145 -4 -197 -16 -206 -15 -192 7 16 25 68 60 122 80 56 22 68 32 36 32 -13 -1 -48 -12 -77 -26z"/> <path d="M1300 1682 c0 -4 49 -29 108 -57 278 -129 489 -324 563 -519 31 -79 36 -54 9 37 -37 121 -86 204 -175 292 -87 87 -168 139 -285 184 -92 35 -220 72 -220 63z"/> <path d="M900 1600 c-63 -11 -127 -17 -142 -14 l-27 5 6 -54 c3 -32 1 -62 -6 -75 -19 -35 4 -27 67 24 98 80 142 97 260 102 69 3 100 8 94 14 -18 18 -136 17 -252 -2z"/> <path d="M1365 1483 c-51 -11 -129 -39 -225 -81 -58 -25 -136 -53 -175 -62 -38 -9 -70 -21 -70 -26 0 -5 21 -12 47 -15 57 -9 71 -16 64 -36 -5 -12 -1 -14 16 -9 163 46 193 50 373 50 149 -1 193 -4 255 -21 73 -20 100 -21 70 -3 -8 5 -53 22 -100 37 -78 26 -98 28 -235 28 -82 0 -181 -4 -219 -8 -62 -7 -68 -6 -56 8 15 19 134 76 209 100 30 10 79 18 108 18 52 0 68 9 37 21 -17 7 -68 6 -99 -1z"/> <path d="M1130 1231 c-214 -46 -443 -117 -555 -173 -67 -34 -149 -88 -142 -94 2 -2 56 21 120 51 251 120 424 160 677 159 191 -1 278 -19 389 -80 213 -117 314 -274 296 -459 -5 -56 -5 -59 10 -40 25 32 45 113 45 186 0 58 -5 77 -42 150 -77 154 -205 254 -382 299 -103 26 -294 26 -416 1z"/> <path d="M693 1175 c-189 -64 -319 -141 -430 -258 -44 -46 -63 -73 -63 -91 0 -37 13 -33 68 22 151 150 315 254 497 317 44 16 84 32 90 37 22 20 -68 5 -162 -27z"/> <path d="M1055 1109 c-96 -10 -196 -31 -330 -69 -146 -42 -178 -54 -183 -67 -3 -10 5 -9 30 1 46 20 214 55 338 72 188 25 351 16 463 -26 70 -27 179 -112 251 -196 134 -158 165 -318 90 -468 -14 -27 -23 -51 -21 -53 10 -9 92 97 120 155 40 86 46 168 19 258 -66 214 -267 360 -542 394 -94 11 -119 11 -235 -1z"/> <path d="M855 995 c-5 -2 -58 -7 -117 -10 -60 -4 -108 -10 -108 -14 0 -5 73 -11 163 -14 312 -11 475 -86 599 -275 126 -194 127 -443 2 -581 -20 -23 -35 -44 -32 -46 9 -9 132 71 176 115 158 157 140 458 -38 644 -96 100 -219 154 -400 176 -80 9 -223 12 -245 5z"/> <path d="M690 922 c0 -4 14 -18 31 -31 129 -95 180 -422 95 -607 -28 -61 -63 -84 -128 -84 -40 -1 -42 -2 -24 -15 29 -22 102 -19 141 5 40 25 89 99 105 160 18 68 16 225 -4 295 -27 90 -74 171 -129 221 -54 49 -87 70 -87 56z"/> <path d="M850 901 c0 -6 27 -32 59 -57 104 -81 163 -232 163 -419 1 -204 -62 -348 -177 -408 l-30 -16 33 -1 c94 -1 169 86 221 254 25 80 27 175 6 290 -20 115 -62 192 -144 268 -73 67 -131 106 -131 89z"/> <path d="M1128 755 c101 -111 147 -246 140 -414 -6 -136 -30 -202 -99 -271 -28 -28 -45 -50 -39 -50 23 0 87 40 122 77 127 131 114 400 -27 594 -32 43 -121 119 -140 119 -4 0 16 -25 43 -55z"/> </g> </svg>'
   //template : '<svg width="36.000000pt" height="36.000000pt" viewBox="0 0 100.000000 100.000000"  preserveAspectRatio="xMidYMid meet"> <g transform="translate(0.000000,100.000000) scale(0.100000,-0.100000)" fill="#fff" stroke="none"> <path d="M1 768 c0 -211 2 -229 14 -195 8 21 23 51 35 66 11 16 20 36 20 44 0 9 8 23 17 33 10 10 16 28 14 42 -7 56 191 202 314 231 29 6 -23 9 -187 10 l-228 1 1 -232z"/> <path d="M675 986 c61 -19 126 -56 120 -66 -4 -6 -23 -1 -46 10 -150 77 -339 61 -496 -41 -62 -40 -133 -110 -133 -129 0 -6 11 -10 25 -10 14 0 25 -4 25 -10 0 -21 39 -9 59 18 37 49 43 54 61 49 11 -3 28 5 42 20 45 49 118 88 118 64 0 -6 -6 -11 -14 -11 -8 0 -28 -11 -43 -24 l-28 -25 88 6 c79 5 87 4 81 -10 -4 -13 -1 -17 14 -17 12 0 24 -4 27 -10 4 -6 -15 -10 -48 -10 -46 0 -63 -6 -107 -35 -29 -19 -53 -35 -55 -35 -1 0 -1 18 1 39 2 32 -1 39 -12 34 -8 -3 -13 -12 -10 -20 3 -8 0 -24 -6 -36 -7 -12 -11 -26 -10 -31 2 -5 -3 -13 -10 -17 -7 -4 -9 -11 -5 -16 5 -4 45 11 90 34 83 42 147 62 147 46 0 -5 -20 -14 -44 -21 -24 -6 -67 -26 -96 -44 -53 -33 -54 -33 -169 -29 -13 1 -30 6 -38 12 -23 20 -26 2 -3 -21 30 -30 19 -35 -24 -9 -34 20 -35 22 -19 35 17 12 16 13 -5 14 -14 0 -21 4 -16 11 4 7 0 10 -11 7 -10 -1 -21 -10 -25 -18 -4 -8 -15 -28 -24 -45 -54 -94 -69 -182 -44 -245 l14 -35 26 56 c16 36 43 71 77 100 28 24 51 52 51 62 0 11 6 17 17 15 13 -2 17 3 16 20 -3 21 0 22 37 16 21 -4 73 -3 114 1 59 5 74 10 69 21 -3 9 2 14 17 14 12 0 52 13 88 29 92 41 160 57 175 42 8 -8 5 -11 -14 -11 -33 0 -115 -28 -128 -43 -7 -9 13 -12 82 -12 92 0 187 -19 187 -37 0 -6 -8 -7 -17 -3 -10 4 -66 10 -124 13 -79 3 -119 0 -160 -11 -41 -12 -55 -13 -62 -4 -7 9 -10 9 -14 0 -2 -7 -16 -13 -29 -13 -15 0 -24 -6 -24 -16 0 -13 7 -15 37 -9 21 4 42 9 47 13 11 6 17 7 127 17 98 10 194 -17 256 -70 44 -38 93 -123 93 -163 0 -30 -21 -102 -29 -102 -4 0 -7 24 -7 53 -1 64 -20 102 -73 150 -109 99 -260 120 -464 65 -43 -11 -75 -24 -70 -29 5 -5 35 -1 68 8 39 11 99 17 170 18 100 0 115 -3 170 -28 124 -58 193 -167 166 -263 -10 -37 -60 -118 -68 -110 -2 2 3 26 12 54 16 47 16 55 1 106 -13 44 -29 69 -74 114 -83 84 -115 97 -244 97 -65 0 -111 -4 -118 -11 -8 -8 14 -13 82 -16 147 -8 236 -56 283 -153 21 -42 28 -70 28 -118 0 -76 -17 -112 -75 -161 -55 -47 -75 -47 -43 0 60 88 41 228 -43 317 -29 31 -99 70 -146 81 -30 7 -220 28 -246 27 -57 -3 -73 -10 -113 -49 -30 -29 -49 -41 -60 -36 -14 5 -17 -1 -17 -36 0 -23 5 -50 11 -62 6 -11 8 -23 4 -26 -9 -9 -50 42 -74 93 l-20 40 -1 -207 0 -208 219 0 219 0 31 25 c93 79 86 306 -12 390 -25 21 -34 35 -25 35 9 0 37 -20 61 -44 52 -50 77 -116 77 -202 0 -66 -33 -157 -67 -184 l-26 -20 262 0 261 0 0 261 0 261 -32 60 c-43 80 -138 166 -241 217 -87 43 -85 53 5 22 117 -40 191 -100 237 -193 l31 -61 0 216 0 217 -182 -1 c-163 0 -179 -2 -143 -13z"/> </g> </svg> ' 
  };
});

app.config(function($mdThemingProvider) {
  var customBlueMap =     $mdThemingProvider.extendPalette('blue', {
    'contrastDefaultColor': 'light',
    'contrastDarkColors': ['50'],
    '50': 'ffffff'
  });
  $mdThemingProvider.definePalette('customBlue', customBlueMap);
  $mdThemingProvider.theme('default')
    .primaryPalette('customBlue', {
      'default': '500',
      'hue-1': '50'
    })
    .accentPalette('pink');
  $mdThemingProvider.theme('input', 'default')
        .primaryPalette('grey')
});


 