
let canvas=document.querySelector("#canvas")
canvas.width=window.innerWidth
canvas.height=window.innerHeight
canvas.style.background="#ff8"
const context=canvas.getContext('2d')

class circle{
    factorx=2
factory=2

    constructor(x,y,radius,color)
    {
        this.x=x
        this.y=y
        this.radius=radius
        this.color=color

    }
    setData(x,y)
    {
        this.x=x
        this.y=y
    }
    draw()
    {
        context.beginPath();
       
        context.fillStyle=this.color;
        context.arc(this.x,this.y,this.radius,0,2*Math.PI)
        context.fill();
        context.stroke()
       // context.fill();
        context.closePath();
    }
    update()
{
   this.x=this.x+this.factorx;
   this.y=this.y+this.factory;
   this.draw();
   if((this.y+this.radius)>=canvas.height)
   {
    // this.factorx=0;
    // this.factory=0;
    this.factory=-1
    
   }
   if((this.y-this.radius)<=0)
   {
    this.factory=1
    
   }
   if((this.x+this.radius)>=canvas.width)
   {
    this.factorx=-1
    
   }
   if((this.x-this.radius)<=0)
    {
     this.factorx=1
     
    }
    if(getDistance()<=140)
    {
        this.color='green'
        this.draw();
    }
    else
    {
        this.color="black"
        this.draw();
    }

    
}

}
 c=new circle(300,300,100,"red");
c.draw();
c1=new circle(100,100,50,"black")
c1.draw();
function getDistance(){
    distance=Math.sqrt(Math.pow((c.x-c1.x),2)+
Math.pow((c.y-c1.y),2));
return distance;
}


function updateAnimation()
{
    requestAnimationFrame(updateAnimation);
    context.clearRect(0,0,canvas.width,canvas.height)
    c.draw();
    c1.update();

}
updateAnimation();





