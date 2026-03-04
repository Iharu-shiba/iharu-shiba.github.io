// ====================
// 描画
// ====================
function drawGame(){
    ctx.fillStyle='black'; ctx.fillRect(0,0,canvas.width,canvas.height);

    // サークル
    for(let c of circles){
        ctx.fillStyle=c.color;
        ctx.beginPath(); ctx.arc(c.x,c.y,c.radius,0,Math.PI*2); ctx.fill();
        ctx.fillStyle='white'; ctx.textAlign='center'; ctx.textBaseline='middle';
        ctx.font='bold 16px Arial'; ctx.fillText(c.points,c.x,c.y);
    }

    // パーティクル
    for(let p of particles) p.draw();

    // UI
    ctx.fillStyle='white'; ctx.font='bold 24px Arial';
    ctx.textAlign='left';
    ctx.fillText('Score: '+score,20,40);
    ctx.textAlign='right';
    ctx.fillText('Lives: '+lives,canvas.width-20,40);

    // Best Score 右上に目立たせる
    ctx.font='bold 28px Arial';
    ctx.fillStyle='gold';
    ctx.fillText('Best: '+bestScore, canvas.width-20, 80);

    // コンボ
    ctx.textAlign='center';
    ctx.fillStyle='white';
    ctx.fillText('Combo: '+combo,canvas.width/2,40);
}

function drawGameOverScreen(){
    ctx.fillStyle='black'; ctx.fillRect(0,0,canvas.width,canvas.height);

    ctx.fillStyle='white'; ctx.font='bold 48px Arial'; ctx.textAlign='center';
    ctx.fillText('GAME OVER',canvas.width/2,canvas.height/2-60);

    ctx.font='32px Arial';
    ctx.fillText('Score: '+score,canvas.width/2,canvas.height/2);
    ctx.fillText('Best: '+bestScore,canvas.width/2,canvas.height/2+50);

    ctx.font='bold 28px Arial';
    ctx.fillStyle='gold';
    ctx.textAlign='right';
    ctx.fillText('Best: '+bestScore, canvas.width-20, 80); // 右上にも表示

    ctx.font='24px Arial';
    ctx.fillStyle='white';
    ctx.textAlign='center';
    ctx.fillText('TAP TO PLAY AGAIN',canvas.width/2,canvas.height/2+100);
}

// ====================
// ゲーム更新のゲームオーバー処理
// ====================
if(lives <=0){
    if(score > bestScore){
        bestScore = score;
        localStorage.setItem('bestScore', bestScore);
    }
    gameState='GAME_OVER';
}