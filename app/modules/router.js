angular.module("fixhomeApp")
        .config(fixhomeRouter);
    
function fixhomeRouter ($stateProvider) {
    $stateProvider
		.state("home", {
			url: "/home",
			views: {
				"" : {
				templateUrl: "views/main.html",
			 	}
      		}
   		})
		.state("yeucau", {
			url: "/yeucau",
			views: {
				"" : {
					templateUrl: "views/yeucau.html",
                    controller: "yeuCauCtrl",
                    controllerAs: "vm"
                },
                "tree@yeucau": {
                    templateUrl: "views/yeucau-tree.html",
                },
                "table@yeucau": {
                    templateUrl: "views/yeucau-table.html",
                }
      		}
   		})
		.state("nhanvien", {
			url: "/nhanvien",
			views: {
				"" : {
					templateUrl: "views/nhanvien.html",
                    controller: "nhanvienCtrl",
                    controllerAs: "vm"
                },
                "tree@nhanvien": {
                    templateUrl: "views/nhanvien-tree.html",
                },
                "table@nhanvien": {
                    templateUrl: "views/nhanvien-table.html",
                }
      		}
   		})
		.state("nhanvien-detail", {
			url: "/chitietnhanvien/:cmnd",
			views: {
				"" : {
					templateUrl: "views/nhanvien-chitiet.html",
					controller: "nhanvienCtrl",
                    controllerAs: "vm"
			 	}
      		}
   		})
		.state("nhanvien-calendar", {
			url: "/	lichlamviecnhanvien/:cmnd",
			views: {
				"" : {
					templateUrl: "views/laplich.html",
					controller: "nhanvienCtrl",
                    controllerAs: "vm"
			 	}
      		}
   		})
		.state("yeucau-chitiet", {
			url: "/chitietyeucau/:mayc",
			views: {
				"" : {
					templateUrl: "views/yeucau-chitiet.html",
					controller: "yeuCauCtrl",
                    controllerAs: "vm"
			 	}
      		}
   		})
		.state("nhanvien-new", {
			url: "/themnhanvien",
			views: {
				"" : {
					templateUrl: "views/nhanvien-new.html",
					controller: "nhanvienCtrl",
                    controllerAs: "vm"
			 	}
      		}
   		})
		.state("yeucau-new", {
			url: "/themyeucau/:cmnd",
			views: {
				"" : {
					templateUrl: "views/yeucau-new.html",
					controller: "yeuCauCtrl",
                    controllerAs: "vm"
			 	}
      		}
   		})
		.state("login", {
		url: "/login",
		views: {
			"": {
				templateUrl: "views/login.html",
				controller: "loginCtrl",
				controllerAs: "vm"
				}
			}
		})
		.state("canhan", {
		url: "/canhan",
		views: {
				"": {
					templateUrl: "views/canhan.html",
					controller: "caNhanCtrl",
					controllerAs: "vm"
				},
				"tree@canhan": {
					templateUrl: "views/canhan-tree.html",
				 },
				 "table@canhan": {
					 templateUrl: "views/canhan-table.html",
				}
			}
		})
};