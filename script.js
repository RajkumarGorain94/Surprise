// ----------------------------
// Birthday Message
// ----------------------------

const message = `

जन्मदिन की ढेर सारी शुभकामनाएँ मेरी सबसे प्यारी दोस्त! ❤️🎉

यकीन ही नहीं होता कि हमारी दोस्ती को लगभग 6 साल हो गए हैं।
इन सालों में हम कई बार नाराज़ भी हुए,
लेकिन कभी एक-दूसरे का साथ नहीं छोड़ा।

हमने हर खुशी,
हर परेशानी,
और हर छोटी-बड़ी बात एक-दूसरे के साथ शेयर की है।

और यही हमारी दोस्ती की सबसे बड़ी खूबसूरती है।

तुम्हारी सबसे खास बात तुम्हारा साफ़ दिल
और तुम्हारी सच्चाई है।

तुम सच कहने से कभी नहीं डरती,
चाहे वो सुनने में कितना भी कड़वा क्यों न लगे।

क्योंकि तुम्हारे लिए सही बात सबसे ज़्यादा मायने रखती है।

यही बात तुम्हें सबसे अलग और सबसे खास बनाती है।

दुआ करता हूँ कि तुम्हारी ज़िंदगी हमेशा खुशियों,
सफलता और मुस्कुराहटों से भरी रहे।

और हाँ...

एक दिन हम अपने सारे सपने पूरे करेंगे...

Switzerland साथ घूमेंगे 🇨🇭✈️

ढेर सारी यादें बनाएँगे ❤️

Happy Birthday Once Again!

हमेशा खुश रहना ❤️

`;

const loading = document.getElementById("loading-screen");
const giftSection = document.getElementById("gift-section");
const birthdaySection = document.getElementById("birthday-section");
const gallerySection = document.getElementById("gallery-section");
const endingSection = document.getElementById("ending");

const giftBox = document.getElementById("gift-box");

const music = document.getElementById("music");

const typewriter = document.getElementById("typewriter");

const replay = document.getElementById("replay");

// ----------------------------
// Loading
// ----------------------------

window.onload = () => {

setTimeout(()=>{

loading.style.display="none";

giftSection.classList.remove("hidden");

},2500);

};

// ----------------------------
// Open Gift
// ----------------------------

giftBox.addEventListener("click",()=>{

giftBox.style.pointerEvents="none";

document.querySelector(".gift-lid").style.transform="rotate(-120deg)";

music.play();

confetti({

particleCount:250,

spread:180,

origin:{y:0.6}

});

setTimeout(()=>{

giftSection.style.display="none";

birthdaySection.style.display="block";

typeMessage();

createHearts();

createBalloons();

createSparkles();

},1800);

});

// ----------------------------
// Typewriter
// ----------------------------

let i=0;

function typeMessage(){

if(i<message.length){

typewriter.innerHTML+=message.charAt(i);

i++;

setTimeout(typeMessage,35);

}else{

setTimeout(showGallery,4000);

}

}

// ----------------------------
// Floating Hearts
// ----------------------------

function createHearts() {

    setInterval(() => {

        const heart = document.createElement("div");

        heart.className = "heart";

        heart.innerHTML = "❤️";

        heart.style.left = Math.random() * 100 + "vw";

        heart.style.animationDuration = (4 + Math.random() * 4) + "s";

        heart.style.fontSize = (20 + Math.random() * 30) + "px";

        document.querySelector(".hearts").appendChild(heart);

        setTimeout(() => {
            heart.remove();
        }, 8000);

    }, 350);

}

// ----------------------------
// Floating Balloons
// ----------------------------

const balloons = ["🎈", "🎈", "🎈", "🎈", "🎈"];

function createBalloons() {

    setInterval(() => {

        const balloon = document.createElement("div");

        balloon.className = "balloon";

        balloon.innerHTML =
            balloons[Math.floor(Math.random() * balloons.length)];

        balloon.style.left = Math.random() * 100 + "vw";

        balloon.style.animationDuration =
            (8 + Math.random() * 5) + "s";

        document.querySelector(".balloons").appendChild(balloon);

        setTimeout(() => {

            balloon.remove();

        }, 13000);

    }, 700);

}

// ----------------------------
// Sparkles
// ----------------------------

function createSparkles() {

    for (let i = 0; i < 70; i++) {

        const star = document.createElement("div");

        star.className = "sparkle";

        star.style.left = Math.random() * 100 + "vw";

        star.style.top = Math.random() * 100 + "vh";

        star.style.animationDelay = Math.random() * 3 + "s";

        document.querySelector(".sparkles").appendChild(star);

    }

}

// ----------------------------
// Slideshow
// ----------------------------

function showGallery() {

    birthdaySection.style.display = "none";

    gallerySection.style.display = "block";

    const slides = document.querySelectorAll(".slide");

    let current = 0;

    slides[current].classList.add("active");

    const interval = setInterval(() => {

        slides[current].classList.remove("active");

        current++;

        if (current >= slides.length) {

            clearInterval(interval);

            setTimeout(showEnding, 1500);

            return;

        }

        slides[current].classList.add("active");

    }, 3500);

}

// ----------------------------
// Ending
// ----------------------------

function showEnding() {

    gallerySection.style.display = "none";

    endingSection.style.display = "flex";

}

// ----------------------------
// Replay
// ----------------------------

replay.addEventListener("click", () => {

    location.reload();

});