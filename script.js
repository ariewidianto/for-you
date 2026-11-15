const player = document.getElementById('player');
const heart = document.getElementById('heart');
const scene = document.getElementById('scene');
let playerPosition = 12;
function movePlayer(amount){
  playerPosition = Math.max(2, Math.min(88, playerPosition + amount));
  player.style.left = playerPosition + '%';
  const heartPosition = 75;
  if (Math.abs(playerPosition - heartPosition) < 8 && !heart.classList.contains('found')) {
    heart.classList.add('found');
    document.querySelector('.scene-hint').textContent = 'Kamu menemukan hati kecil! ♥';
  }
}
document.addEventListener('keydown', event => {
  if (['ArrowRight','d','D'].includes(event.key)) movePlayer(3);
  if (['ArrowLeft','a','A'].includes(event.key)) movePlayer(-3);
  if (event.key === ' ' || event.key === 'ArrowUp') jump();
});
function jump(){
  player.animate([{transform:'translateY(0)'},{transform:'translateY(-55px)'},{transform:'translateY(0)'}],{duration:420,easing:'ease-out'});
}
document.getElementById('jumpButton').addEventListener('click',jump);
document.getElementById('letterButton').addEventListener('click',()=>{
  const secret=document.getElementById('secretMessage');
  secret.hidden=!secret.hidden;
  document.getElementById('letterButton').textContent=secret.hidden?'Baca pesan rahasia':'Tutup pesan rahasia';
});
document.getElementById('yesButton').addEventListener('click',()=>{
  document.getElementById('answerMessage').textContent='Yay! Semoga masih banyak cerita indah yang menunggu kita. ♡';
});
document.getElementById('maybeButton').addEventListener('click',()=>{
  document.getElementById('answerMessage').textContent='Tidak apa-apa, aku tetap senang kamu sudah sampai di sini. :)';
});
const music=document.getElementById('bgMusic');
document.getElementById('musicButton').addEventListener('click',async()=>{
  const button=document.getElementById('musicButton');
  if(music.paused){try{await music.play();button.textContent='Ⅱ Jeda musik';}catch(error){button.textContent='Tambahkan lagu.mp3';}}
  else{music.pause();button.textContent='♫ Putar musik';}
});