!function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";const o=new(n(1).Game);!function(){let e=document.getElementById("warning");e.parentNode.removeChild(e),o.setUpGame(document.getElementById("game-area"))}()},function(e,t,n){"use strict";n.r(t),n.d(t,"Game",(function(){return s}));class o{constructor(e,t){this.value=e,this.color=t}merge(e){this.value*=2,this.color=e}}class r{constructor(e){this.area=e,this.resizeArea(),window.addEventListener("resize",()=>this.resizeArea())}resizeArea(){let e=window.innerWidth,t=window.innerHeight;e>t?(t=Math.round(.9*t),e=t):(e=Math.round(.9*e),t=e),this.width=e,this.height=t;let n=this.area.getContext("2d");n.canvas.width=e,n.canvas.height=t,this.drawBoard()}setUp(e){this.size=e,this.board=new Array(this.size);for(let e=0;e<this.size;++e)this.board[e]=new Array(this.size);let t=Math.round(Math.random()*(this.size-1)),n=Math.round(Math.random()*(this.size-1));this.board[t][n]=new o(2,"#eee4da"),this.drawBoard()}drawBoard(){let e=Math.round(this.width/(this.size+1)),t=Math.round(e/(this.size+1)),n=this.area.getContext("2d"),o=t,r=t;for(let i=0;i<this.size;++i){for(let s=0;s<this.size;++s)this.board[i][s]?n.fillStyle=this.board[i][s].color:n.fillStyle="rgba(238, 228, 218, 0.35)",n.fillRect(o,r,e,e),o+=e+t;o=t,r+=e+t}}spawnTile(){}}class i{constructor(e){this.keyCodes={ArrowLeft:"Left",ArrowUp:"Up",ArrowRight:"Right",ArrowDown:"Down",a:"Left",w:"Up",d:"Right",s:"Down"},this.touchX=0,this.touchY=0,this.tolerance=50,this.targetElement=e,this.enableController()}enableController(){document.addEventListener("keydown",e=>this.handleKeydown(e)),this.targetElement.addEventListener("touchstart",e=>this.handleTouchStart(e)),this.targetElement.addEventListener("touchend",e=>this.handleTouchEnd(e))}disableController(){document.removeEventListener("keydown",e=>this.handleKeydown(e)),this.targetElement.removeEventListener("touchstart",e=>this.handleTouchStart(e)),this.targetElement.removeEventListener("touchend",e=>this.handleTouchEnd(e))}handleKeydown(e){if(-1!=Object.keys(this.keyCodes).indexOf(e.key)){let t=new Event("move"+this.keyCodes[e.key]);this.targetElement.dispatchEvent(t)}}handleTouchStart(e){e.preventDefault(),this.touchX=Math.round(e.touches[0].screenX),this.touchY=Math.round(e.touches[0].screenY)}handleTouchEnd(e){let t=Math.round(e.changedTouches[0].screenX),n=Math.round(e.changedTouches[0].screenY),o="";Math.abs(n-this.touchY)>this.tolerance?o=n>this.touchY?"Down":"Up":Math.abs(t-this.touchX)>this.tolerance&&(o=t>this.touchX?"Right":"Left"),""!==o&&this.targetElement.dispatchEvent(new Event("move"+o))}}class s{constructor(){this.score=0,this.size=4}setUpGame(e){this.setUpController(e),this.playArea=new r(e),this.playArea.setUp(this.size)}setUpController(e){this.controller=new i(e),e.addEventListener("moveLeft",()=>this.moveLeft()),e.addEventListener("moveUp",()=>this.moveUp()),e.addEventListener("moveRight",()=>this.moveRight()),e.addEventListener("moveDown",()=>this.moveDown())}moveLeft(){console.log("Moving left"),document.getElementById("debug").innerText="Moving left"}moveUp(){console.log("Moving up"),document.getElementById("debug").innerText="Moving up"}moveRight(){console.log("Moving right"),document.getElementById("debug").innerText="Moving right"}moveDown(){console.log("Moving down"),document.getElementById("debug").innerText="Moving down"}}}]);