var twoSum = function(nums, target) {
    
    for(var i = 0; i < nums.length; i++){
        for(var j = i+1; j<= nums.length; j++){
            if(nums[i]+nums[j] === target){
                return [i,j];
            }
        }
    }
};


//faster version
var twoSum = function(nums, target) {
    
    var map = {};
    for(var i = 0; i < nums.length; i++){
        var value = nums[i];
        var pair = target - value;
        
        if(map[pair] !== undefined){
            return [map[pair],i]
        }else{
            map[value] = i;
        }
    }
    
};