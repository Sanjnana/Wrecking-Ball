class Rope{
    constructor(bodyA,pointB){
        var options={
            bodyA:bodyA, pointB:pointB,
        lenght:250
  }
this.pointB=pointB
this.rope= Constraint.create(options)
World.add(world,this.rope)

        }
    display(){
        if(this.rope.bodyA){

        
        var pointA=this.rope.bodyA.position
        var pointB=this.pointB
        push()
        stroke("red")
        line(pointA.x,pointA.y,pointB.x,pointB.y)
        pop()
    }
    }

}