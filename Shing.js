class Shing{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.pointB = pointB;
        this.shing = Constraint.create(options);
        World.add(world, this.shing);
    }

    fly(){
    this.shing.bodyA= null;
    }

    display(){
        if (this.shing.bodyA !=null){
            var pointA = this.shing.bodyA.position;
            var pointB = this.pointB;
            strokeWeight(4);
            line(pointA.x, pointA.y, pointB.x, pointB.y);
        }
        
    }
    
}