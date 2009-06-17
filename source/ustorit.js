var ustorit = null;
(function(){

    
    var PREFIX = 'ustorit';
    
    var globalStorageInterface = function(){
        
        var store = globalStorage;
        
        var domain = window.location.hostname;
        
        return {
            
            setItem:function(key, value){
                store[domain][key] = value;
            },
            
            getItem:function(key){
                return store[domain][key];
            }
        };
        
    };
    
    function storageInterfaceFactory(){
        
        if(typeof(localStorage) === 'object'){
            return localStorage;
        }
        
        if(typeof(globalStorage) === 'object'){
            return globalStorageInterface();
        }
 
        
    };
    
    function unitFactory(name){

        var storeName = name;
        var store = storageInterfaceFactory();

        function _get(key){
            return store.getItem(PREFIX+storeName+key);
        }
        
        function _set(key, value){
            store.setItem(PREFIX+storeName+key,value);
        }
        
        return {
            get:function(key){
                return _get(key);
            },
            
            set:function(key, value){
                return _set(key, value);
            }
        };
    };
   
   ustorit = {
       
       getUnit:function(name){
           return unitFactory(name);
       }
       
   };
    
}());