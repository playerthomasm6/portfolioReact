import React, { useRef, useEffect, useState } from 'react'
import "./style.css";
import Score from "../Score";

const Canvas = props => {

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
    let circleWidth;
    let circleHeight;
    let circleSize;
    let circleSpeedX;
    let circleSpeedY;
    let counter;
    
    
    for (let i = 0; i < 10000; i++) { // Loop which creates circle array to be displayed in canvas

        circleWidth = (Math.floor(Math.random() * (window.innerWidth - 200) + 200));
        circleHeight = (Math.floor(Math.random() * (window.innerHeight - 200) + 200));
        circleSize = 3;
        circleSpeedX = (Math.floor(Math.random() * 6)) - 5;
        circleSpeedY = (Math.floor(Math.random() * 5)) - 5;
        counter = circleSize;

        Box.push(new Circle(circleWidth, circleHeight, circleSize, color, circleSpeedX, circleSpeedY, counter))
    }
    
    console.log(Box)

    // ================== Circle Array Builder ===================
    
    const pos = () => {
        x += speedX;
        y += speedY;
    }

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

    function getCursorPosition(canvas, event) {
        let rect = canvas.getBoundingClientRect()
        let x = event.clientX - rect.left
        let y = event.clientY - rect.top
        console.log("x: " + x + " y: " + y)
        mouse.x = x;
        mouse.y = y;
    }
    
    canvas.addEventListener('mousedown', function(e) {
        getCursorPosition(canvas, e)
    })

    console.log(mouse)

    // Constructor Functions
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
                this.color = colors[Math.floor(Math.random() * colors.length)]
        }
        this.increaseSize = function() {
            this.size += 0.5
        }
        this.getDistance = function(x1, y1, x2, y2){
            let xDistance = x2 - x1;
            let yDistance = y2 - y1;
            return Math.sqrt(Math.pow(xDistance, 2) + Math.pow(yDistance, 2));
        }
      }
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
  
    const score = []
    const calculateScore = () => {
        for (let i = 0; i < score.length; i++) {
            setTotalScore(totalScore + score[i])
            
        }
        console.log(totalScore)
    }

    

  return(
  <div id="canvas-container">
    <canvas ref={canvasRef} id="canvasID" width={screenWidth} height={screenHeight} {...props}/>
  </div>
  
  )
}

export default Canvas