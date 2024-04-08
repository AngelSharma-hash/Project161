AFRAME.registerComponent("balls",{
    init:function(){
        this.shootballs()
    },
    shootballs:function(){
        window.addEventListener("keydown",(e)=>{
            if (e.key==="q"){
                var ball = document.createElement("a-entity")
                ball.setAttribute("geometry",{
                    primitive:"sphere",
                    radius:0.1
                })
                ball.setAttribute("material",{
                    src:"./123.jpg"
                })
                
                var cam = document.querySelector("#camera")
                var pos = cam.getAttribute("position")
                ball.setAttribute("position",{x:pos.x,y:pos.y,z:pos.z})
                var camera = document.querySelector("#camera").object3D
                direction = new THREE.Vector3()
                camera.getWorldDirection(direction)
                ball.setAttribute("velocity",direction.multiplyScalar(-10))
                var scene = document.querySelector("#scene")
                scene.appendChild(ball)
            }
        })
    }
})