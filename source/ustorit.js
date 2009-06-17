var ustorit = null;
(function(){

    
    var PREFIX = 'ustorit';


    
    function getValue(key){}
    
    function unitFactory(name){

        var storeName = name;
        var store = localStorage;

        function _get(key){
            return store.getItem(PREFIX+storeName+key);
        }
        
        function _set(key, value){
            store.setItem(PREFIX+storeName+key,value);
        }
        
        var safari = {
            
            //get
            
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