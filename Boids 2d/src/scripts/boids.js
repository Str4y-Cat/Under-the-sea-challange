export default 

class boid{

    constructor(count,sizes,minDistance){
        console.log('you have created a boid!')

        this.sizes=sizes
        this.boidCount=count
        this.boidArray=this.setUpBoidPositions(this.boidCount)
        this.stagePadding = 10;
        this.boundingBox={
            width : this.sizes.width + this.stagePadding * 2,
            height : this.sizes.height + this.stagePadding * 2
        }
        this.minDistance=minDistance;

        
    }


    //set up
     setUpBoidPositions(count) {
        const boidArray=[]
        for(let i=0; i<count;i++)
            {   

                //positioning
                const x= Math.random()*this.sizes.width
                const y= Math.random()*this.sizes.height
            
                const direction= Math.random() * Math.PI * 2
                
                const obj=
                {
                     position:{x:x,y:y},
                     direction
                }
                boidArray.push(obj)
            }
        return boidArray
        
    }

    update(){
        this.boidArray.forEach(boid => {
            // boid.position.x+=2
            boid=this.move(boid)
        });
    }

    move(boid)
    {
        
        // fish.direction = Math.random()*(Math.PI*2);

        // Animate the fish position according to the direction and speed.
        boid.position.x += -Math.cos(boid.direction) * 2;
        boid.position.y += -Math.sin(boid.direction) * 2;

        if(boid.position.x>this.boundingBox.width){boid.position.x=0}
        if(boid.position.x<0){boid.position.x=this.boundingBox.width}
        if(boid.position.y>this.boundingBox.height){boid.position.y=0}
        if(boid.position.y<0){boid.position.y=this.boundingBox.height}


        return boid
    }


    /**
     * Need to do the inverse, find the distance. if the distance is small allocate a larger weight to it
     * 
     * should probably be a exp graph, (normalize the distance)*(exp function)*seperationStrength,
     * 
     */
    seperation(currentBoid, avoidBoids){
    
    avoidBoids.forEach((avoidBoid)=>{
        
        /**find force factor
         * get distance between boids
         * normalize distance
         * apply exp equation to normalized distance
         */

        /** Find perpendicular angle
         *  add/subtract the perpendicular angle multiplied by the force factor
         *  
         */

        //return this angle
    })


        
        
   return sumDistance
    }

    /**
     * 
     * think this one is pretty simple, just average the surrounding angles and multiply a alignmentStrength
     */
    alignment(current, arr){
        const angle= arr.reduce((sum,cur)=>{
            return sum.direction+=cur.direction
        },current.direction)/(arr.length+1)

        return angle
    }

    /**
     * 
     * reverse of the seperation function
     * 
     */
    cohesion(current, arr){

    }

    /**
     * combine the 3 values
     * average them
     * could add further weight to each value if one is more important, but this could be redundant
     * 
     */
    getAngle(){
        this.boidArray.forEach((boid,i)=>{
            const closeBoids= this.getCloseBoids(boid,i)
        })
       
        

    }

    getCloseBoids(i){

        // console.log(this.boidArray)
        // console.log(`Min search distance is ${this.minDistance}`)
        const currentBoid=this.boidArray[i]
        // console.log(currentBoid)

        let closeBoids= this.boidArray.filter((nextBoid)=> 
            {
                const distance = getDistance(currentBoid.position,nextBoid.position)
                // console.log(distance)
                return distance<=this.minDistance&&distance!=0
            })
            
            // console.log(closeBoids)
        return closeBoids;
    }

}



function getAngle(pos1,pos2){
    let dY=pos2.y-pos1.y
    let dX=pos2.x-pos1.x
    let angle= Math.atan2(dY,dX)
    // return (angle<0)?(Math.PI+angle)+Math.PI:angle
    return (angle)

}

/**
 * Determines the distance between two 2d points
 * @param {vec2} pos1 
 * @param {vec2} pos2 
 * @returns int
 */
function getDistance(pos1,pos2){
   return Math.sqrt((pos1.x-pos2.x)**2+(pos1.y-pos2.y)**2)
}