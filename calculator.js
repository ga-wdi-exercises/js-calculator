
var z = 0;
var calc = {
  add:function(y){
    z= z+y
    return z
  },
  sub:function(y){
    z= z-y
    return z
  },
  mult:function(y){
    z= z*y
    return z;
  },
  div:function(y){
    z= z/y
    return z;
  },
  exp:function(y){
    z= Math.pow(z,y)
    return z
  },
  squ:function(){
    z =z*z
    return z
  },
  value: z,
  clear:function(){
    z=0
    return z
  }
}
