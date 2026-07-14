// ==========================
// Loader
// ==========================

window.addEventListener("load", () => {
    setTimeout(() => {
        document.getElementById("loader").style.display = "none";
    }, 2500);
});

// ==========================
// Floating Hearts
// ==========================

const hearts = document.getElementById("hearts");

function createHeart() {

    const heart = document.createElement("div");

    heart.classList.add("heart");

    heart.innerHTML = ["❤️","💕","💖","💗","💘"][
        Math.floor(Math.random()*5)
    ];

    heart.style.left = Math.random()*100 + "vw";

    heart.style.fontSize = (20 + Math.random()*25) + "px";

    heart.style.animationDuration =
        (5 + Math.random()*5) + "s";

    hearts.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    },10000);

}

setInterval(createHeart,250);

// ==========================================
// Page Swapping Engine (Hides scrollbar flow)
// ==========================================

function showPage(pageId) {
    const sections = ["hero", "letter", "gallery", "surprise"];
    sections.forEach(id => {
        const element = document.getElementById(id);
        if (element) {
            element.classList.remove("page-active");
        }
    });

    const targetPage = document.getElementById(pageId);
    if (targetPage) {
        targetPage.classList.add("page-active");
    }
}

// ==========================
// Open Love Letter Button
// ==========================
const startBtn = document.getElementById("startBtn");
startBtn.addEventListener("click", () => {
    showPage("letter");

    const music = document.getElementById("bgMusic");
    music.play().catch(() => {});
});

// ==========================
// Gallery Button
// ==========================
document.getElementById("galleryBtn").addEventListener("click", () => {
    showPage("gallery");
});

// ==========================
// Surprise Button
// ==========================
document.getElementById("surpriseBtn").addEventListener("click", () => {
    showPage("surprise");
});

// =============================
// Fireworks Animation
// =============================

const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}

resizeCanvas();
window.addEventListener("resize", resizeCanvas);

class Particle {

    constructor(x, y) {
        this.x = x;
        this.y = y;

        this.dx = (Math.random() - 0.5) * 10;
        this.dy = (Math.random() - 0.5) * 10;

        this.life = 100;

        this.color = `hsl(${Math.random()*360},100%,60%)`;
    }

    update() {

        this.x += this.dx;
        this.y += this.dy;

        this.dy += 0.05;

        this.life--;

    }

    draw() {

        ctx.beginPath();

        ctx.arc(this.x, this.y, 3, 0, Math.PI * 2);

        ctx.fillStyle = this.color;

        ctx.fill();

    }

}

let particles = [];

function explode(x, y) {

    for(let i=0;i<120;i++){

        particles.push(new Particle(x,y));

    }

}

function animate() {

    ctx.clearRect(0,0,canvas.width,canvas.height);

    particles.forEach((p,index)=>{

        p.update();

        p.draw();

        if(p.life<=0){

            particles.splice(index,1);

        }

    });

    requestAnimationFrame(animate);

}

animate();

// =============================
// Celebrate Button
// =============================

document.getElementById("fireworksBtn")
.addEventListener("click",()=>{

    for(let i=0;i<8;i++){

        setTimeout(()=>{

            explode(

                Math.random()*canvas.width,

                Math.random()*canvas.height/2

            );

        },i*300);

    }

    setTimeout(()=>{

        alert(
`🎂 Happy Birthday Shivani ❤️

You are my happiness,
my smile,
my favorite person.

May your life always be filled with love,
joy,
success,
and beautiful memories.

Forever Yours,

❤️ Ashutosh ❤️`
        );

    },3000);

});