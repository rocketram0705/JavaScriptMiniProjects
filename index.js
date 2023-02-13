function waitForm(){
    return new Promise(resolve=>{
         setTimeout(()=>resolve(''),100);
    })
}
async function openMenuItems(){
    var menucontainer = document.getElementById('menucontainer');
    menucontainer.style.display="flex";
    var menuitems = document.querySelectorAll('.menuitem');
    for (let i = 0; i < menuitems.length; i++) {
        await waitForm();
        menuitems[i].classList.toggle("showcls");
    }
}

/*var i =0;
 function openMenuItems(){ 
  //var menucontainer = document.getElementById('menucontainer');
    //menucontainer.style.display="flex";
    setTimeout(function (){
        var menuitems=document.querySelectorAll('.menuitem');
       // alert(menuitems[i]);
        menuitems[i].classList.toggle("showcls");
        i++;
        if(i<menuitems.length){
            openMenuItems();
        }
        else{ 
            i=0;
           // clearTimeout();        
        }
    },250)
}*/

/* screen.msOrientation -> is used to check orientation of old browsers 
   screen.orientation.type -> used to check orientation of almost all browsers
   screen.mozOrientation.type -> used to check orientation of mozila firefox browsers.... 
   window.addEventListener('orientationchange',function(){}); fires event when orientation of device changes 
   */
function getOrientation(){
let orientation = screen.msOrientation || (screen.orientation || screen.mozOrientation).type;

switch 
(orientation){
  case 'portrait-primary':
        console.log("this is in dektop/laptop primary mode..");
  case 'portrait-secondary':

        break;
  case 'landscape-primary':
        console.log("this device is in the laptop/desktop primary mode");
	break;
  case 'landscape-secondary':
	break; 
  case 'undefined':
	//not supported
	break;
  default:

}
return orientation;
}

window.addEventListener('orientationchange',(e)=>{
console.log(e);
orient = getOrientation();
alert(orient);
});