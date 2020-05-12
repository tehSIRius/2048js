!function(e){var t={};function s(i){if(t[i])return t[i].exports;var r=t[i]={i:i,l:!1,exports:{}};return e[i].call(r.exports,r,r.exports,s),r.l=!0,r.exports}s.m=e,s.c=t,s.d=function(e,t,i){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},s.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(s.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)s.d(i,r,function(t){return e[t]}.bind(null,r));return i},s.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="",s(s.s=0)}([function(e,t,s){"use strict";var i=s(2),r=s(1);const o=new i.Game;!function(){let e=document.getElementById("warning");e.parentNode.removeChild(e);let t=document.getElementById("game-area");o.setUpGame(t),(0,r.setUpMenu)(o.size,t)}()},function(e,t,s){"use strict";s.r(t),s.d(t,"setUpMenu",(function(){return r}));const i=[2,4,8,16,32];function r(e,t){!function(e,t){let s=document.getElementsByClassName("change-size"),r=document.getElementById("resize-modal"),o=document.querySelector("#resize-modal .modal-content");for(let e=0;e<s.length;++e)s[e].addEventListener("click",e=>{e.preventDefault(),r.style.visibility="visible",o.style.transform="scale(1)"});document.getElementById("resize-cancel").addEventListener("click",e=>{e.preventDefault(),o.style.transform="scale(0)",r.style.visibility="hidden"}),document.getElementById("resize-confirm").addEventListener("click",e=>{e.preventDefault(),t.dispatchEvent(new CustomEvent("resize",{detail:{size:Number(document.forms["size-form"].size.value)}})),o.style.transform="scale(0)",r.style.visibility="hidden"}),document.forms["size-form"][i.indexOf(e)].checked=!0}(e,t),document.getElementById("menu-toggle").addEventListener("click",e=>{e.preventDefault(),document.getElementById("mobile-menu").style.transform="translateX(100%)"}),document.getElementById("close-menu").addEventListener("click",e=>{e.preventDefault(),document.getElementById("mobile-menu").style.transform="translateX(-100%)"}),function(){let e=document.getElementsByClassName("highscores"),t=document.getElementById("highscores-modal"),s=document.querySelector("#highscores-modal .modal-content");for(let i=0;i<e.length;++i)e[i].addEventListener("click",e=>{e.preventDefault(),t.style.visibility="visible",s.style.transform="scale(1)"});document.getElementById("highscores-cancel").addEventListener("click",e=>{e.preventDefault(),s.style.transform="scale(0)",t.style.visibility="hidden"})}(),function(){let e=document.getElementsByClassName("about"),t=document.getElementById("about-modal"),s=document.querySelector("#about-modal .modal-content");for(let i=0;i<e.length;++i)e[i].addEventListener("click",e=>{e.preventDefault(),t.style.visibility="visible",s.style.transform="scale(1)"});document.getElementById("about-cancel").addEventListener("click",e=>{e.preventDefault(),s.style.transform="scale(0)",t.style.visibility="hidden"})}()}},function(e,t,s){"use strict";s.r(t),s.d(t,"Game",(function(){return h}));class i{constructor(e){this.keyCodes={ArrowLeft:"left",ArrowUp:"up",ArrowRight:"right",ArrowDown:"down",a:"left",w:"up",d:"right",s:"down"},this.touchX=0,this.touchY=0,this.tolerance=this.calculateTolerance(),this.targetElement=e,document.addEventListener("keydown",e=>this.handleKeydown(e)),this.targetElement.addEventListener("touchstart",e=>this.handleTouchStart(e)),this.targetElement.addEventListener("touchend",e=>this.handleTouchEnd(e))}calculateTolerance(){let e;return e=window.innerWidth>window.innerHeight?.02*window.innerHeight:.02*window.innerWidth,e}handleKeydown(e){if(Object.keys(this.keyCodes).indexOf(e.key)>-1){let t=new CustomEvent("moveGameBoard",{detail:{direction:this.keyCodes[e.key]}});this.targetElement.dispatchEvent(t),e.key.includes("Arrow")&&e.preventDefault()}}handleTouchStart(e){e.preventDefault(),this.touchX=Math.round(e.touches[0].screenX),this.touchY=Math.round(e.touches[0].screenY)}handleTouchEnd(e){let t=Math.round(e.changedTouches[0].screenX),s=Math.round(e.changedTouches[0].screenY),i="";if(Math.abs(s-this.touchY)>this.tolerance?i=s>this.touchY?"down":"up":Math.abs(t-this.touchX)>this.tolerance&&(i=t>this.touchX?"right":"left"),""!==i){let e=new CustomEvent("moveGameBoard",{detail:{direction:i}});this.targetElement.dispatchEvent(e)}}}const r=["#eee4da","#ede0c8","#f2b179","#f59563","#f67c5f","#f65e3b","#edcf72","#edcc61","#edc850","#edc53f","#edc53f"];class o{constructor(e){this.value=e,this.color=r[(Math.log2(this.value)-1)%12],this.fontColor="black",this.setFontColor()}merge(){return this.value*=2,this.color=r[(Math.log2(this.value)-1)%12],this.setFontColor(),this.value}setFontColor(){let e=(299*parseInt(this.color[1]+this.color[2])+587*parseInt(this.color[3]+this.color[4])+114*parseInt(this.color[5]+this.color[6]))/1e3;Math.abs(255-e)>Math.abs(0-e)?this.fontColor="white":this.fontColor="black"}}class n{constructor(e){this.chance=.1,this.area=e,this.font="Verdana",this.context=e.getContext("2d"),this.context.drawRoundedRect=a,this.resizeArea(),this.size=0,this.board=[],this.previousState=null,window.addEventListener("resize",()=>this.resizeArea())}resizeArea(){let e=window.innerWidth,t=window.innerHeight;e>t?(t=Math.round(.85*t),e=t):(e=Math.round(.85*e),t=e),this.width=e,this.height=t,this.context.canvas.width=e,this.context.canvas.height=t,this.drawBoard()}setUp(e){this.size=e,this.board=new Array(this.size);for(let e=0;e<this.size;++e)this.board[e]=new Array(this.size),this.board[e].fill(null);this.checkBoard(!0),this.checkBoard(!0),this.drawBoard()}setBoard(e){this.size=e.length;for(let t=0;t<this.size;++t){this.board[t]=[];for(let s=0;s<e[t].length;++s)e[t][s]?this.board[t][s]=new o(e[t][s].value):this.board[t][s]=null}this.drawBoard()}undoLastMove(){this.previousState&&(this.board=this.copy2DArray(this.previousState),this.previousState=null,this.drawBoard())}moveTiles(e){this.previousState=this.copy2DArray(this.board);let t=this.getMovableArray(e),s=!1;for(let e=0;e<t.length;++e){let i=this.cleanUpLine(t[e]);this.compareArrays(i,t[e])||(t[e]=i,s=!0)}this.applyMovedArray(t,e),this.checkBoard(s),this.drawBoard()}drawBoard(){let e=Math.round(32/this.size),t=Math.round((this.width-e*(this.size-1))/this.size);this.context.clearRect(0,0,this.context.canvas.width,this.context.canvas.height);let s=0,i=0;for(let r=0;r<this.size;++r){for(let o=0;o<this.size;++o){if(this.board[r][o]){this.context.drawRoundedRect(s,i,t,t,this.board[r][o].color,this.size),this.context.font=`${Math.round(t/3)}px "${this.font}"`,this.context.textAlign="center",this.context.textBaseline="middle",this.context.fillStyle=this.board[r][o].fontColor;let e=s+Math.round(t/2),n=i+Math.round(t/2)+Math.round(.05*t);this.context.fillText(this.board[r][o].value,e,n)}else this.context.drawRoundedRect(s,i,t,t,"rgba(238, 228, 218, 0.35)",this.size);s+=t+e}s=0,i+=t+e}}dispatchVictory(){this.area.dispatchEvent(new Event("victory"))}spawnTile(e){let t=Math.round(Math.random()*(e.length-1)),s=e[t][0],i=e[t][1],r=2;Math.random()<this.chance&&(r=4),this.board[s][i]=new o(r)}checkBoard(e){let t=[];for(let e=0;e<this.board.length;++e)for(let s=0;s<this.board.length;++s)null==this.board[e][s]&&t.push([e,s]);if(t.length>0&&e)this.spawnTile(t);else if(0==t.length){let e=!1;for(let t=0;t<this.size;++t)for(let s=0;s<this.size-1;++s)this.board[t][s].value==this.board[t][s+1].value&&(e=!0);for(let t=0;t<this.size-1;++t)for(let s=0;s<this.size;++s)this.board[t][s].value==this.board[t+1][s].value&&(e=!0);e||this.area.dispatchEvent(new Event("gameOver"))}}compareArrays(e,t){let s=!0;for(let i=0;i<e.length;i++)e[i]!=t[i]&&(s=!1);return s}cleanUpLine(e){let t=this.shiftLine(e);for(let e=0;e<t.length-1;++e)if(null!=t[e]&&null!=t[e+1]&&t[e].value==t[e+1].value){t[e].merge()==Math.pow(2,3*this.size-1)&&this.dispatchVictory(),this.area.dispatchEvent(new CustomEvent("scoreUp",{detail:{value:t[e].value}})),t[e+1]=null}return t=this.shiftLine(t),t}shiftLine(e){let t=e.filter(e=>null!=e);for(let s=t.length;s<e.length;++s)t.push(null);return t}getMovableArray(e){let t=[];switch(e){case"left":this.board.forEach(e=>t.push(e));break;case"right":this.board.forEach(e=>t.push(e.reverse()));break;case"up":for(let e=0;e<this.size;++e){t[e]=[];for(let s=0;s<this.size;++s)t[e].push(this.board[s][e])}break;case"down":for(let e=0;e<this.size;++e){t[e]=[];for(let s=this.size-1;s>=0;--s)t[e].push(this.board[s][e])}}return t}applyMovedArray(e,t){switch(t){case"left":for(let t=0;t<e.length;++t)this.board[t]=e[t];break;case"right":for(let t=0;t<e.length;++t)this.board[t]=e[t].reverse();break;case"up":for(let t=0;t<e.length;++t){let s=[];for(let i=0;i<e.length;++i)s.push(e[i][t]);this.board[t]=s}break;case"down":for(let t=0;t<e.length;++t){let s=[];for(let i=0;i<e.length;++i)s.push(e[i][t]);this.board[t]=s}this.board.reverse()}}copy2DArray(e){let t=[];for(let s=0;s<e.length;++s){t[s]=[];for(let i=0;i<e[s].length;++i)e[s][i]?t[s][i]=new o(e[s][i].value):t[s][i]=null}return t}}function a(e,t,s,i,r,o){const n=2*Math.PI/2,a=2*Math.PI/4,l=32/o;this.beginPath(),this.arc(l+e,l+t,l,-a,n,!0),this.lineTo(e,t+i-l),this.arc(l+e,i-l+t,l,n,a,!0),this.lineTo(e+s-l,t+i),this.arc(e+s-l,t+i-l,l,a,0,!0),this.lineTo(e+s,t+l),this.arc(e+s-l,t+l,l,0,-a,!0),this.lineTo(e+l,t),this.closePath(),this.fillStyle=r,this.fill()}class l{constructor(){this.isUsable=this.checkAvailability()}checkAvailability(){let e,t="__storage_test__";try{localStorage.setItem(t,t),localStorage.removeItem(t),e=!0}catch(t){e=!1}return e}storeItem(e,t){this.isUsable&&localStorage.setItem(e,JSON.stringify(t))}loadItem(e){let t=null;if(this.isUsable){let s=localStorage.getItem(e);t=JSON.parse(s)}return t}removeItem(e){this.isUsable&&localStorage.removeItem(e)}}class h{constructor(){this.score=0,this.lastValue=0,this.size=4,this.saveTimeout=null,this.storage=new l,this.won=!1,this.lost=!1,this.highscores={}}setUpGame(e){this.setUpController(e),this.playArea=new n(e),this.loadLocalData(),document.getElementById("score").innerText=this.score,e.addEventListener("gameOver",()=>this.gameOver()),e.addEventListener("victory",()=>this.victory()),e.addEventListener("scoreUp",e=>this.updateScore(e.detail.value)),e.addEventListener("resize",()=>{this.setSize(event.detail.size),this.resetGame()}),document.getElementById("reset").addEventListener("click",e=>{e.preventDefault(),this.resetGame()}),document.getElementById("undo").addEventListener("click",e=>{e.preventDefault(),this.undoLastMove()}),document.getElementById("victory").addEventListener("click",e=>{e.preventDefault(),document.getElementById("victory").style.display="none"}),document.forms["can-submit-score"].addEventListener("submit",e=>{e.preventDefault(),this.saveScore(),document.getElementById("game-over").style.display="none"})}setUpController(e){this.controller=new i(e),e.addEventListener("moveGameBoard",e=>{this.lost||this.playArea.moveTiles(e.detail.direction)})}loadLocalData(){let e=this.storage.loadItem("board");e?(this.score=e.score,this.size=e.board.length,this.won=e.won,this.playArea.setBoard(e.board)):this.playArea.setUp(this.size),e=this.storage.loadItem("highscores"),e&&(this.highscores=e,this.updateHighscoresTable())}updateScore(e){this.lastValue=e,this.score+=e,document.getElementById("score").innerText=this.score,this.saveTimeout&&(clearTimeout(this.saveTimeout),this.saveTimeout=null),this.saveTimeout=setTimeout(()=>{let e={board:this.playArea.board,score:this.score,won:this.won};this.storage.storeItem("board",e)},2e3)}resetGame(){document.querySelector("#victory .overlay-content").style.transform="scale(0)",document.querySelector("#game-over .overlay-content").style.transform="scale(0)",document.getElementById("victory").style.opacity="0%",document.getElementById("game-over").style.opacity="0%",document.getElementById("victory").style.visibility="hidden",document.getElementById("game-over").style.visibility="hidden",this.score=0,this.lost=!1,this.won=!1,document.getElementById("score").innerText=this.score,this.playArea.setUp(this.size);let e={board:this.playArea.board,score:this.score,won:this.won};this.storage.storeItem("board",e)}setSize(e){this.size=e,this.resetGame()}undoLastMove(){this.score-=this.lastValue,this.lastValue=0,this.playArea.undoLastMove(),document.getElementById("score").innerText=this.score}gameOver(){if(!this.lost){let e="flex",t=[];this.lost=!0,this.highscores[this.size]||(this.highscores[this.size]=[]),t=this.highscores,t>9&&t[t.length-1]>this.score&&(e="none"),document.getElementById("can-submit-score").style.display=e,document.getElementById("game-over").style.visibility="visible",document.getElementById("game-over").style.opacity="100%",document.querySelector("#game-over .overlay-content").style.transform="scale(1)",this.storage.removeItem("board")}}victory(){this.won||(document.getElementById("victory-value").innerText=Math.pow(2,3*this.size-1),document.getElementById("victory").style.visibility="visible",document.getElementById("victory").style.opacity="100%",document.querySelector("#victory .overlay-content").style.transform="scale(1)",this.won=!0)}saveScore(){let e=document.forms["can-submit-score"][0].value.trim();e.length>20&&(e=e.substring(0,19));let t={name:e,score:this.score};this.highscores[this.size].length>9&&this.highscores[this.size].pop(),this.highscores[this.size].push(t),this.highscores[this.size].sort((e,t)=>e.score>t.score?-1:1),this.storage.storeItem("highscores",this.highscores),this.updateHighscoresTable(),this.resetGame()}updateHighscoresTable(){let e=Object.keys(this.highscores).sort((e,t)=>e>t?-1:1),t=document.getElementById("scores-area");t.innerHTML="",e.forEach(e=>{let s=document.createElement("div"),i=document.createElement("h3");i.innerText="Scores for Board Size "+e,s.appendChild(i);let r=document.createElement("div");r.className="table-wrapper",s.appendChild(r);let o=document.createElement("table");r.appendChild(o);let n=document.createElement("tr");o.appendChild(n);let a=document.createElement("th");a.innerText="Player",n.appendChild(a);let l=document.createElement("th");l.innerText="Score",n.appendChild(l),this.highscores[e].forEach(e=>{let t=document.createElement("tr"),s=document.createElement("td");s.innerText=e.name,t.appendChild(s);let i=document.createElement("td");i.innerText=e.score,t.appendChild(i),o.appendChild(t)}),t.appendChild(s)})}}}]);