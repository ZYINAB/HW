class Area {
    constructor(x, y, shape) {
        this.shape = shape;
        this.width = x;
        this.height = y;
        
    }

    getArea() 
    {
        // return this.height * this.width;
        if (this.shape === 'square' || this.shape ==='Rectangle' || this.shape ==='Parallelogram')
        {
            return this.height * this.width;  
        }

        else if (this.shape === 'Circle')
        {
        let x =  Math.PI * this.height * this.width;
        return x.toFixed(2);
        }

        else if(this.shape === 'Triangle')
        {
            return  0.5 * this.height * this.width;
        }
     else
    {
    return 6*this.height * this.width; 
    }

    }

    getAreaInfo(){
        console.log(`The Area of ${this.shape} is equal ${this.getArea()}`);
    }
   
}


class Square extends Area {
    constructor(x) {
        super(x, x, 'square');
    }
}


class Rectangle extends Area{
    constructor(x,y){
        super(x,y,'Rectangle');
    }
}

// complete the class of Circle
class Circle extends Area
{
    constructor(x)
    {
        super(x,x,'Circle')
    }
    
    
}
// complete the class of Triangle
class Triangle extends Area
{
    constructor(x,y){
        super(x,y,'Triangle');
    }
}
// complete the class of Parallelogram
class Parallelogram extends Area
{
    constructor(x,y){
        super(x,y,'Parallelogram');
    }   
}

// complete the class of Cube
class Cube extends Area
{
    constructor(x)
    {
        super(x,x,'Cube')
    }
    

}
// usage
let sq1 = new Square(5);
sq1.getAreaInfo();

let rec1 = new Rectangle(3,4);
rec1.getAreaInfo();

let cir1 = new Circle(3);
cir1.getAreaInfo();

let tri1 = new Triangle(50,33);
tri1.getAreaInfo();

let par1 = new Parallelogram(4,8);
par1.getAreaInfo();

let cub1 =new Cube(2,2);
cub1.getAreaInfo();