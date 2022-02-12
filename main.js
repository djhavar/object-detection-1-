ObjectDetector="";

img= "";
objects=[];
status ="";

function preload(){
    img = loadImage('dog_cat.jpg')
}

function setup() {
    canvas = createCanvas(640,420);
    canvas.center();
    objectDetector = ml5.objectDetector('cocossd',modalLoaded);
    document.getElementById("status").innerHTML = "status : detecting Object";
}

function modalLoaded() {
    console.log("modal Loaded!")
    status = true;
}

function gotResult(error, results) {
    if (error) {
      console.log(error);
    }
    console.log(results);
    objects = results;
  }

  function draw() {
      Image(img, 0, 0, 640, 420);

      if(status != "")
      {
          for (var i =0; i<Object.length;1++) {
              document.getElementById("status").innerHTML = "Status : Object Detection";

              Fill(255,0,0)
              percent = floor(objects[i].confidence * 100)
              text(objects[i].label + " " + percent + "%", objects[i].x + 15, objects[i].y + 15);
              noFill();
              stroke(255, 0, 0);
              rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height);
          }
      }
  }