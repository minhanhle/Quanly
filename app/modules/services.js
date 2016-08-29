angular.module('fixhomeApp')
.service('fixhomeService',fixhomeService);

function fixhomeService ($http) {
	this.login =  function(user){
		return $http.get('/login?username='+user.name+'&passwork='+user.pass).then(function(response) {
			return response.data;
		})
	}
	
	/*Fixer*/
	this.loadListFixer = function () {
		return $http.get('/tho').then(function(response) {
			var dstho = response.data;
			
			return dstho;
		})
	}
	
	
	this.saveFixer = function(data) {
		return $http.post('/tho', data).then(
             function successCallback(response) {
                 	return "Thêm thành công."
                  }, function errorCallback(response) {
                    	return "Vui lòng kiểm tra lai các thông tin."
                  })
	}
	
	this.updateFixer = function(data) {
		return $http.put('/tho/'+data.cmnd, data).then(
             function successCallback(response) {
                 	return "Cập nhật thành công."
                  }, function errorCallback(response) {
                    	return "Vui lòng kiểm tra lai các thông tin."
                  })
	}
	
	this.getFixerbyID = function(item) {
		return $http.get('/tho/'+item).then (
			function successCallback(response){
				//response.data.ngaysinh = new Date(response.data.ngaysinh);
				return response.data;
			}, function errorCallback(response) {
				return response.error;
			}
		)
	}
	
	this.deleteFixerbyID = function(item) {
		return $http.delete('/tho/'+item).then (
			function successCallback(response){
				return response.data;
			}, function errorCallback(response) {
				return response.error;
			}
		)
	}
	
	this.searchFixer = function(condition) {
		return $http.get('/timkiemtho?cmnd=' + condition.cmnd + '&hoten=' + condition.hoten + '&sotruong=' + condition.sotruong).then(
			function successCallback(response){
				return response.data;
			}, function errorCallback(response) {
				return response.error;
			}
		)
	}
	
	/*YEU CAU*/
	this.loadListRequest = function () {
		return $http.get('/yeucau').then(function(response) {
			return response.data;
		})
	}
	
	this.loadRequestNew = function () {
		return $http.get('/notification').then(function(response) {
			return response.data;
		})
	}
	
	this.saveRequest = function(data) {
		return $http.post('/yeucau', data).then(
             function successCallback(response) {
                 	return "Thêm thành công."
                  }, function errorCallback(response) {
                    	return "Vui lòng kiểm tra lai các thông tin."
                  })
	}
	
	this.updateRequest = function(data) {
		return $http.put('/yeucau/'+data.mayc, data).then(
             function successCallback(response) {
                 	return "Cập nhật thành công."
                  }, function errorCallback(response) {
                    	return "Vui lòng kiểm tra lai các thông tin."
                  })
	}
	
	this.getRequestbyID = function(item) {
		return $http.get('/yeucau/'+item).then (
			function successCallback(response){
				return response.data;
			}, function errorCallback(response) {
				return response.error;
			}
		)
	}
	
	this.getRequestID = function() {
		return $http.get('/getid').then (
			function successCallback(response){
				return response.data;
			}, function errorCallback(response) {
				return response.error;
			}
		)
	}
	
	this.deleteRequestbyID = function(item) {
		return $http.delete('/yeucau/'+item).then (
			function successCallback(response){
				return response.data;
			}, function errorCallback(response) {
				return response.error;
			}
		)
	}
	
	/*Skill*/
	this.getSkill = function() {
		return $http.get('/dichvu').then (
			function successCallback(response){
				return response.data;
			}, function errorCallback(response) {
				return response.error;
			}
		)
	}
	
	/*District*/
	this.getDistrict = function() {
		return $http.get('/quan').then (
			function successCallback(response){
				return response.data;
			}, function errorCallback(response) {
				return response.error;
			}
		)
	}
};