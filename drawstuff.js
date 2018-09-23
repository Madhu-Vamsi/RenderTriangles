/* classes */ 

// Color constructor
class PixelAttributes{
    constructor(x,y,color,t){
        this.color=color;
        this.x=x;
        this.y=y;
        this.t=t;
    }
    
    setColor(c){
        this.color=c;
    }
    
    getT(){
        return this.t;
    }

    setT(newT){
        this.t=newT;
    }

    getColor(){
        return this.color;
    }

}
class Color {
    constructor(r,g,b,a) {
        try {
            if ((typeof(r) !== "number") || (typeof(g) !== "number") || (typeof(b) !== "number") || (typeof(a) !== "number"))
                throw "color component not a number";
            else if ((r<0) || (g<0) || (b<0) || (a<0)) 
                throw "color component less than 0";
            else if ((r>255) || (g>255) || (b>255) || (a>255)) 
                throw "color component bigger than 255";
            else {
                this.r = r; this.g = g; this.b = b; this.a = a; 
            }
        } // end try
        
        catch (e) {
            //console.log(e);
        }
    } // end Color constructor

        // Color change method
    change(r,g,b,a) {
        try {
            if ((typeof(r) !== "number") || (typeof(g) !== "number") || (typeof(b) !== "number") || (typeof(a) !== "number"))
                throw "color component not a number";
            else if ((r<0) || (g<0) || (b<0) || (a<0)) 
                throw "color component less than 0";
            else if ((r>255) || (g>255) || (b>255) || (a>255)) 
                throw "color component bigger than 255";
            else {
                this.r = r; this.g = g; this.b = b; this.a = a; 
            }
        } // end throw
        
        catch (e) {
            //console.log(e);
        }
    } // end Color change method
} // end color class

//class Vector is taken from Professor Ben's github class exercise
class Vector { 
    constructor(x=0,y=0,z=0) {
        this.set(x,y,z);
    } // end constructor
    getx(){
        return this.x;
    }
        gety(){
        return this.y;
    }
        getz(){
        return this.z;
    }

    // sets the components of a vector
    set(x,y,z) {
        try {
            if ((typeof(x) !== "number") || (typeof(y) !== "number") || (typeof(z) !== "number"))
                throw "vector component not a number";
            else
                this.x = x; this.y = y; this.z = z; 
        } // end try
        
        catch(e) {
            //console.log(e);
        }
    } // end vector set
    
    // copy the passed vector into this one
    copy(v) {
        try {
            if (!(v instanceof Vector))
                throw "Vector.copy: non-vector parameter";
            else
                this.x = v.x; this.y = v.y; this.z = v.z;
        } // end try
        
        catch(e) {
            //console.log(e);
        }
    }
    static dot(v1,v2) {
        try {
            if (!(v1 instanceof Vector) || !(v2 instanceof Vector))
                throw "Vector.dot: non-vector parameter";
            else
                return(v1.x*v2.x + v1.y*v2.y + v1.z*v2.z);
        } // end try
        
        catch(e) {
            //console.log(e);
            return(NaN);
        }
    } // end dot static method
    
    // static add method
    static add(v1,v2) {
        try {
            if (!(v1 instanceof Vector) || !(v2 instanceof Vector))
                throw "Vector.add: non-vector parameter";
            else
                return(new Vector(v1.x+v2.x,v1.y+v2.y,v1.z+v2.z));
        } // end try
        
        catch(e) {
            //console.log(e);
            return(new Vector(NaN,NaN,NaN));
        }
    } // end add static method

    // static subtract method, v1-v2
    static subtract(v1,v2) {
        try {
            if (!(v1 instanceof Vector) || !(v2 instanceof Vector))
                throw "Vector.subtract: non-vector parameter";
            else {
                var v = new Vector(v1.x-v2.x,v1.y-v2.y,v1.z-v2.z);
                //v.toConsole("Vector.subtract: ");
                return(v);
            }
        } // end try
        
        catch(e) {
            //console.log(e);
            return(new Vector(NaN,NaN,NaN));
        }
    } // end subtract static method

    // static scale method
    static scale(c,v) {
        try {
            if (!(typeof(c) === "number") || !(v instanceof Vector))
                throw "Vector.scale: malformed parameter";
            else
                return(new Vector(c*v.x,c*v.y,c*v.z));
        } // end try
        
        catch(e) {
            //console.log(e);
            return(new Vector(NaN,NaN,NaN));
        }
    } // end scale static method

    
    // static normalize method
    static normalize(v) {
        try {
            if (!(v instanceof Vector))
                throw "Vector.normalize: parameter not a vector";
            else {
                var lenDenom = 1/Math.sqrt(Vector.dot(v,v));
                return(Vector.scale(lenDenom,v));
            }
        } // end try
        
        catch(e) {
            //console.log(e);
            return(new Vector(NaN,NaN,NaN));
        }
    } // end scale static method
    static cross(v1,v2) {
        try {
            if (!(v1 instanceof Vector) || !(v2 instanceof Vector))
                throw "Vector.cross: non-vector parameter";
            else {
                var crossX = v1.y*v2.z - v1.z*v2.y;
                var crossY = v1.z*v2.x - v1.x*v2.z;
                var crossZ = v1.x*v2.y - v1.y*v2.x;
                return(new Vector(crossX,crossY,crossZ));
            } // endif vector params
        } // end try
        
        catch(e) {
            console.log(e);
            return(NaN);
        }
    }
    
} // end Vector class
/* utility functions */

// draw a pixel at x,y using color
function drawPixel(imagedata,x,y,color) {
    try {
        if ((typeof(x) !== "number") || (typeof(y) !== "number"))
            throw "drawpixel location not a number";
        else if ((x<0) || (y<0) || (x>=imagedata.width) || (y>=imagedata.height))
            throw "drawpixel location outside of image";
        else if (color instanceof Color) {
            var pixelindex = (y*imagedata.width + x) * 4;
            imagedata.data[pixelindex] = color.r;
            imagedata.data[pixelindex+1] = color.g;
            imagedata.data[pixelindex+2] = color.b;
            imagedata.data[pixelindex+3] = color.a;
        } else 
            throw "drawpixel color is not a Color";
    } // end try
    
    catch(e) {
        //console.log(e);
    }
} // end drawPixel
    
// draw random pixels
function drawRandPixels(context) {
    var c = new Color(0,0,0,0); // the color at the pixel: black
    var w = context.canvas.width;
    var h = context.canvas.height;
    var imagedata = context.createImageData(w,h);
    const PIXEL_DENSITY = 0.01;
    var numPixels = (w*h)*PIXEL_DENSITY; 
    
    // Loop over 1% of the pixels in the image
    for (var x=0; x<numPixels; x++) {
        c.change(Math.random()*255,Math.random()*255,
            Math.random()*255,255); // rand color
        drawPixel(imagedata,
            Math.floor(Math.random()*w),
            Math.floor(Math.random()*h),
                c);
    } // end for x
    context.putImageData(imagedata, 0, 0);
} // end draw random pixels

// get the input ellipsoids from the standard class URL
function getInputTriangles() {
    
    const INPUT_TRIANGLES_URL = "https://ncsucgclass.github.io/prog1/triangles.json";
      //  "";
        
    // load the ellipsoids file
    var httpReq = new XMLHttpRequest(); // a new http request
    httpReq.open("GET",INPUT_TRIANGLES_URL,false); // init the request
    httpReq.send(); // send the request
    var startTime = Date.now();
    while ((httpReq.status !== 200) && (httpReq.readyState !== XMLHttpRequest.DONE)) {
        if ((Date.now()-startTime) > 3000)
            break;
    } // until its loaded or we time out after three seconds
    if ((httpReq.status !== 200) || (httpReq.readyState !== XMLHttpRequest.DONE)) {
        //console.log*("Unable to open input ellipses file!");
        return String.null;
    } else


      return JSON.parse(httpReq.response); 



} // end get input ellipsoids


function real_draw(context){
    console.log("in real draw22");
    var json=getInputTriangles();
    console.log(json);
    var eye = new Vector(0.5,0.5,-0.5);
    //console.log(eye)
   
  

   
    var w = context.canvas.width;
    var h = context.canvas.height;


    //var d = 512;
    var imagedata = context.createImageData(w,h);
    //eye.toWorldCoordinate(w,h,d);
    //eye.toConsole();
    var p=new Vector(0,0,0);
    //var ray=new Vector(0,0,0);
    //    var t=1; //set it to screen
    var hm={};

    var n = json.length;
    for(var x=0;x<w;x++){
        for(var y=0;y<h;y++){
            p.set(x,y,0);
            var temp=Vector.subtract(p,eye);

            //d.set(temp.getx(),temp.gety(),temp.getz());
            //ray=Vector.add(eye,Vector.scale(t,d));
            for(var f=0;f<n;f++){
                var currentColor=new Color(json[f].material.diffuse[0]*255,json[f].material.diffuse[1]*255,json[f].material.diffuse[2]*255,255); //.diffuse[0]*255,ellipsoid.diffuse[1]*255,ellipsoid.diffuse[2]*255,255);;
                var currentFile = json[f]
                var tn=currentFile.triangles.length;
                for(var t=0;t<tn;t++){
                    var vertex1=currentFile.triangles[t][0];
                    var vertex2=currentFile.triangles[t][1];
                    var vertex3=currentFile.triangles[t][2];

                    var vertexPos1=currentFile.vertices[vertex1];
                    var vertexPos2=currentFile.vertices[vertex2];
                    var vertexPos3=currentFile.vertices[vertex3];
                    var A=new Vector(vertexPos1[0],vertexPos1[1],vertexPos1[2]);
                    var B=new Vector(vertexPos2[0],vertexPos2[1],vertexPos2[2]);
                    var C=new Vector(vertexPos3[0],vertexPos3[1],vertexPos3[2]);
                    var tempPixelAttribute=getIntersectionOfRayAndThisObject(imagedata,x/w,y/h,eye,A,B,C,currentColor,json[f]);

                    var previousClosestPixelAttribute=hm[x.toString()+'~'+y.toString()];

                    if(previousClosestPixelAttribute==null){
                        hm[x.toString()+'~'+y.toString()]=tempPixelAttribute;
                    }
                    //if there is a value of t already
                    else{
                        //if the current object is more near to screen
                      if(tempPixelAttribute.getT()<=previousClosestPixelAttribute.getT()){
                        hm[x.toString()+'~'+y.toString()]=tempPixelAttribute;
                        }
                        else{
                            //do nothing
                        }  
                    }
                    drawPixel(imagedata,x,h-y,hm[x.toString()+'~'+y.toString()].getColor());
                }
                
            }
        }
    }
context.putImageData(imagedata,0,0);
}

function getIntersectionOfRayAndThisObject(imagedata,x,y,eye,A,B,C,currentColor,json){
    var side1=Vector.subtract(B,A);
    var side2=Vector.subtract(C,A);
    var normal=Vector.cross(side1,side2);
    var planeConstant=Vector.dot(normal,A);
    var numer_right=Vector.dot(normal,eye);
    var nume=planeConstant - numer_right;
    var d=Vector.subtract(new Vector(x,y,0),eye);
    var deno=Vector.dot(normal,d);
    




    var c2=new Color(0,0,0,255);
    if(deno==0){
        return new PixelAttributes(x,y,c2,Infinity);
    }
    var t=nume/deno;
    //var c=new Color(150,150,150,255);
    var I=Vector.add(eye,Vector.scale(t,d));
        //here
    var noramalizedNormal=Vector.normalize(normal);
    var light=new Vector(-3,1,-0.5);
    var L=Vector.subtract(light,I);  
    var normalizedL=Vector.normalize(L);
    var V=Vector.subtract(eye,I);
    var normalizedV=Vector.normalize(V);

    var redDiffuse = json.material.diffuse[0]*255;
    var greenDiffuse = json.material.diffuse[1]*255;
    var blueDiffuse = json.material.diffuse[2]*255;
    var redSpecular = json.material.specular[0]*255;
    var greenSpecular = json.material.specular[1]*255;
    var blueSpecular = json.material.specular[2]*255;
    var redAmbient = json.material.ambient[0]*255;
    var greenAmbient = json.material.ambient[1]*255;
    var blueAmbient = json.material.ambient[2]*255;
    var maxOfNandL = Math.max(0, Vector.dot(noramalizedNormal, normalizedL));
    var H = Vector.normalize(Vector.add(normalizedV, normalizedL));
    var maxOfNandH = Math.pow(Math.max(0, Vector.dot(noramalizedNormal, H)), json.material.n);
    currentColor.change((redDiffuse*maxOfNandL)+(redSpecular*maxOfNandH)+redAmbient, (greenDiffuse*maxOfNandL)+(greenSpecular*maxOfNandH)+greenAmbient, (blueDiffuse*maxOfNandL)+(blueSpecular*maxOfNandH)+blueAmbient, 255);
    var ab=Vector.subtract(A,B);
    var bc=Vector.subtract(B,C);
    var ca=Vector.subtract(C,A);
    var ai=Vector.subtract(A,I);
    var bi=Vector.subtract(B,I);
    var ci=Vector.subtract(C,I);
    var s1=Vector.dot(normal,Vector.cross(ab,ai));
    var s2=Vector.dot(normal,Vector.cross(bc,bi));
    var s3=Vector.dot(normal,Vector.cross(ca,ci));
    if((s1>0&&s2>0&&s3>0)||(s1<0&&s2<0&&s3<0)){
    var px = new PixelAttributes(x,y,currentColor,t);
    return px;    
    }

    return new PixelAttributes(x,y,c2,Infinity);
    
}
function main() {

    // Get the canvas and context
    var canvas = document.getElementById("viewport"); 
    var context = canvas.getContext("2d");
 
    console.log("in main");
    real_draw(context);
    console.log("done main");   

 }