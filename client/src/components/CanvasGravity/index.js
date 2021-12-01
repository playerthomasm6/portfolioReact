import React, { useRef, useEffect, useState } from 'react'
import "./style.css";
import Score from "../Score";

const CanvasGravity = props => {

  const screenWidth = window.innerWidth - (window.innerWidth/20);
  const screenHeight = window.innerHeight - 200;
  
  
  const canvasRef = useRef(null)

  const colors = ["black", "red", "blue", "gray", "orange", "green", "purple", "gold", "silver", "turquios"]
  
  const draw = (ctx, frameCount, x, y, size, color) => {
    ctx.fillStyle = color
    ctx.beginPath()
    ctx.arc(x, y, size, 0, 2*Math.PI)
    ctx.fill()
  }

  
  const [totalScore, setTotalScore] = useState(0)
  
  

  useEffect(() => {
    
    const canvas = canvasRef.current
    const context = canvas.getContext('2d')
    let frameCount = 0
    let animationFrameId
    let x = 100;
    let y = 100;
    let size = 50;
    let speedX = 4;
    let speedY = 3;
    let color;

    // ================== Circle Array Builder ===================
  let Box = []; // array to hold Circle objects
  let circleX;
  let circleY;
  let circleSize;
  let circleSpeedX;
  let circleSpeedY;
  let counter;
  
  const selectSpeed = () => {
      let speed = (Math.floor(Math.random() * 6)) - 5;
          if (speed === 0) {
              return
          } else { 
              console.log(speed)
              return speed
          }
          
  }

  const selectXPosition = () => {
      let x = (Math.floor(Math.random() * (window.innerWidth - 200) + 200));
      if (x < 50 || x > screenWidth - 50) {
          return
      } else {
          return x;
      }
  }
  

  const selectYPosition = () => {
      let y = (Math.floor(Math.random() * (screenWidth - 200) + 200));
      if (y < 50 || y > screenHeight - 50) {
          return
      } else {
          return y;
      }
  }


  const ballAmount = 2;
  for (let i = 0; i < ballAmount; i++) { // Loop which creates circle array to be displayed in canvas
      circleX = selectXPosition();
      circleY = selectYPosition();
      circleSize = 10;
      circleSpeedX = selectSpeed();
      circleSpeedY = selectSpeed();
      counter = circleSize;

      Box.push(new Circle(circleX, circleY, circleSize, color, circleSpeedX, circleSpeedY, counter))
  }
  
  console.log(Box)




  // ================== Circle Array Builder ===================

   // ===============Constructor Functions=============================
   function Circle(x, y, size, color, speedX, speedY, counter) {
    this.x = x;
    this.y = y;
    this.size = size;
    this.color = color;
    this.speedX = speedX;
    this.speedY = speedY;
    this.counter = counter;

    this.update = function() {
        // if (this.size > 100) {
        //     return
        // }
        // if (this.getDistance(this.x, this.y, mouse.x, mouse.y) < this.x + 10 || this.getDistance(this.x, this.y, mouse.x, mouse.y) < this.y + 10) {
        //     console.log("HIT")
        //     score.push(this.size)
        //     this.size = 101
        //     this.color = "red"
        //     mouse.x = undefined
        //     mouse.y = undefined
            
        
        // }
        this.drawCircle();

        if (this.getDistance(this.x + this.size, this.y + this.size, mouseX, mouseY) < 60) {
            if (this.x < mouseX) {
                this.speedY = -50
                if (mouseX < this.x) {
                    this.speedX = this.speedX + 5
                } 
                else if (mouseX > this.x) {
                    this.speedX = this.speedX - 5
                }
            }
        }

        
        this.gravity();
        this.inertia();

        if (this.x + this.size > screenWidth) {
            this.changeColor()
            this.speedX = this.speedX * -1
        }
        if (this.x - this.size < 0) {
            this.changeColor()
            this.speedX = this.speedX * -1
        }
        if (this.y + this.size > screenHeight) {
            this.changeColor()
            this.speedY = this.speedY * -1  
        }
        if (this.y - this.size < 0) {
            this.changeColor()
            this.speedY = this.speedY * -1 
        }
        if (this.y + this.size < screenHeight) {
            this.y = this.y + 1
        }
        
        this.checkCollision()
        this.circlePos();
        
    };

    this.drawCircle = function(){
        context.fillStyle =  this.color
        context.beginPath()
        context.arc(this.x, this.y, this.size, 0, 2*Math.PI)
        context.fill()
        context.beginPath()
        // context.fillStyle = "black"
        // context.font = "30px Arial";
        // context.fillText(this.size, this.x + 20, this.y);
    }

    this.circlePos = function() {
        this.x += this.speedX;
        this.y += this.speedY;
    }

    this.changeColor = function() {
            // this.color = colors[Math.floor(Math.random() * colors.length)]
    }
    this.increaseSize = function() {
        this.size += 0.5
    }
    this.getDistance = function(x1, y1, x2, y2){
        let xDistance = x2 - x1;
        let yDistance = y2 - y1;
        return Math.sqrt(Math.pow(xDistance, 2) + Math.pow(yDistance, 2));
    }
    this.gravity = function() {

        // if the ball is above the "ground" and moving towards the ground accelerate the ball
        if (this.speedY > 0 && this.y < screenHeight) {
            this.speedY = this.speedY + 1
        }
        // if the ball is above the "ground" and moving "up" the ball decelerates
        else if (this.speedY < 0 && this.y < screenHeight) {
            this.speedY = this.speedY + 2.5
        }
        if (this.speedY === 0 && this.y < screenHeight) {
            this.speedY = this.speedY +1
        }
        
    }

    this.inertia = function() {
        if (this.speedX < 0) {
            this.speedX += 0.001
        }
        else if (this.speedX > 0) {
            this.speedX -= 0.001
        }
    }

    this.deflect = function() {

    }

    this.checkCollision = function() {
        Box.forEach(box => {
            
            if (this.getDistance(this.x, this.y, box.x, box.y) < this.size + box.size) {
                console.log("Collided")
                console.log(this.getDistance(this.x, this.y, box.x, box.y))
                if (this.speedX < 0) {
                    this.speedX = (this.speedX * -1)
                    box.speedX = (box.speedX * -1)
                }

                if (this.speedX > 0) {
                    this.speedX = (this.speedX * -1)
                    box.speedX = (box.speedX * -1)
                }
                
                // this.speedY = this.speedY * -1
                
                // box.speedY = box.speedY * -1
            }
            }
        )}
    
  }

  // ===============Constructor Functions=============================

    
    
    const pos = () => {
        x += speedX;
        y += speedY;
    }
    let mouseX;
    let mouseY;
    canvas.addEventListener("mousemove", e => {
        mouseX = e.offsetX;
        mouseY = e.offsetY;
        console.log("x: " + mouseX + " " + "y: " + mouseY)
    })

    const mousePosition = () => {
        let e = window.event
        let posX = e.clientX;
        let posY = e.clientY;

        return [posX, posY]
    }

    mousePosition();

    const mouse = {
        x: undefined,
        y: undefined,
        color: "red"
    }

    function getCursorPosition(canvas, event) { // Checks current mouse position on Canvas and assigns x,y to mouse.x and mouse.y
        let rect = canvas.getBoundingClientRect()
        let x = event.clientX - rect.left
        let y = event.clientY - rect.top
        // console.log("x: " + x + " y: " + y)
        mouse.x = x;
        mouse.y = y;
    }
    
    canvas.addEventListener('mousedown', function(e) { // Event listener to track mouse position on Canvas
        getCursorPosition(canvas, e)
    })


   



    //Our draw come here
    const render = () => {
        // frameCount++
        // pos();
        // calculateScore(totalScore)
        context.clearRect(0, 0, canvas.width, canvas.height)
        // draw(context, frameCount, x,y,size, color)
        Box.forEach(box => {
            box.update();
        })
        
        animationFrameId = window.requestAnimationFrame(render)
      }

        render()
      
      return () => {
        window.cancelAnimationFrame(animationFrameId)
      }
    }, [draw])
  
  return(
  <div id="canvas-container">
    <canvas ref={canvasRef} id="canvasID" width={screenWidth} height={screenHeight} {...props}/>
  </div>
  
  )
}

export default CanvasGravity