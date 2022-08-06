AFRAME.registerComponent("bullets",{
    init:function(){
     this.shootBullet();
    },
    shootBullet:function(){
     window.addEventListener("keydown",(e)=>{
      if(e.key === "z"){
        var bullet=document.createElement("a-entity");
        bullet.setAttribute("geometry",{
            primitive:"sphere",
            radius:0.5
        });
        bullet.setAttribute("visible",true);
        bullet.setAttribute("material","color","black");
        var cam = document.querySelector("#camera");
        pos = cam.getAttribute("position");
        bullet.setAttribute("position",{x:pos.x,y:pos.y,z:pos.z});
        var camera = document.querySelector("#camera").object3D;
        bullet.setAttribute("velocity",{x:0,y:0,z:-1});
        var scene = document.querySelector("#scene");
        scene.appendChild(bullet);
      }
     })
    },
})