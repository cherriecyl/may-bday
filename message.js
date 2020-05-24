var messages = [
    "May!",
    "May Lee!",
    "Hello May Lee!",
    "It's your birthday!",
    "Here's to one of the fiercest humans I know.",
    "One of the fiercest, most bada$$ motherfuckin' bo$$ ladies I know and love.",
    "I am so lucky and grateful to have you in my life.",
    "Thank you for your adventurous, experimental, creative, perceptive, and nature-loving spirit.",
    "Thank you for spending hours in grocery stores inspecting product labels.",
    "Thank you for teaching me and others to look within.",
    "Thank you for always inspiring open-heartedness and connection.",
    "Thank you for never shying away from tough conversations.",
    "Thank you for always sticking to your beliefs.",
    "Thank you for being stubborn as fuck (sometimes, much of the time). <span role=\"img\" aria-label=\"Upside down smiley\">&#128579</span>",
    "Thank you for being a downright weirdo.",
    "Thank you for being a remarkable and regimented chef.",
    "...because I'm now intimidated by your cooking, you can expect that I will order in whenever you come over... or let you cook. <span role=\"img\" aria-label=\"Grinning squinting face\">&#128518</span>",
    "Thank you for being unabashedly honest and unafraid to live your truest truths.",
    "Thank you for being a fighter.",
    "...both in the boxing ring and in face of whatever mental, spiritual, professional, personal challenges come your way.",
    "Thank you for being alive.",
    "Thank you for being my bestie!",
    "Looking forward to learning and adventuring and sharing laughs for decades to come.",
    "By decades, I mean I imagine we'll be cranky ol' grandmas bitching about the world in our rocking chairs on a patio before an open field, possibly tripping on shrooms.",
    "I'm sure by then psychedelics will be much more publicly understood and accessible.",
    "...thanks in large part to the groundbreaking work of a Vancouver-based start-up. <span role=\"img\" aria-label=\"Winking face\">&#128521</span>",
    "Wishing you a day/month/year/eon connected with all your loved ones (even if you can't see them in person), and that you feel high on life and jazzed about the future!",
    "Happy birthday, May!",
]

var backgrounds = [
    "",
    "images/Western.jpg",
    "images/LOL.JPG",
    "images/Furniture.JPG",
    "images/Garibaldi.jpg",
    "images/Fighter2.jpg",
    "images/Biking.JPG",
    "images/Bird.JPG",
    "images/Shoes.jpg",
    "images/Familydimsum.JPG",
    "images/Girlgang.JPG",
    "images/Dosa.JPG",
    "images/Dicks.jpg",
    "images/Noodlebox.JPG",
    "images/FranceItaly.jpg",
    "images/Maycooking.JPG",
    "images/Germanmeats.JPG",
    "images/Polaroid.jpg",
    "images/Fighter.jpg",
    "images/Geotrip.jpg",
    "images/Deepcove.jpg",
    "images/Christmas2.JPG",
    "images/Seattle.JPG",
    "images/California.jpg",
    "images/Bardonthebeach.JPG",
    "images/Hiking.jpg",
    "images/Polaroid3.jpg",
    "images/MayFam.jpg",
]

var colours = [
    "darkblue",
    "darkslateblue",
    "darkslategray",
    "darkgreen",
    "teal",
    "sienna",
    "maroon",
    "navy",
    "rebeccapurple",
    "indigo",
    "firebrick",
    "cadetblue",
    "darkslategray",
]

var goprolinks = [
    "https://www.youtube.com/watch?v=1TJ08caetkw",
    "https://www.youtube.com/watch?v=8mfID9TwRJo",
    "https://www.youtube.com/watch?v=xlUVr3rJ59A",
    "https://www.youtube.com/watch?v=IBHdSLMfACc",
    "https://www.youtube.com/watch?v=R1NagZN2kjY"];

var x = document.getElementById("myAudio"); 

function playAudio() { 
  x.play(); 
} 

function pauseAudio() { 
  x.pause(); 
} 

$("input").on("input", function changeMessage() {

    let value = $(this).val();
    let message = messages[value];
    let background = backgrounds[value];
    let colour = colours[Math.floor(Math.random()*colours.length)];

    $("h1.message").html(message);
    document.getElementById('header').style.backgroundImage = "url(\'" + background + "\')";


    if (value > 0) {
        document.getElementById('header').style.backgroundColor = colour;
        document.getElementById('message').style.backgroundColor = colour;
    } else {
        document.getElementById('header').style.backgroundColor = "rgb(22,22,22)";
        document.getElementById('message').style.backgroundColor = "";
    }
})

openStuff = function () {
    // get a random number between 0 and the number of links
    var randIdx = Math.random() * goprolinks.length;
    // round it, so it can be used as array index
    randIdx = parseInt(randIdx, 10);
    // construct the link to be opened
    var link = goprolinks[randIdx];
    // open it in a new window / tab (depends on browser setting)
    window.open(link);
};

function slide(event) {
    event.target.style.setProperty('--thumb-rotate',event.target.value * 14 +'deg');
  }

$('body').on('click', function(event){  
    function random(max){
        return Math.random() * (max - 0) + 0;
    }

    function positionX() {
        return event.pageX;
    }

    function positionY() {
        return event.pageY;
    }

    var c = document.createDocumentFragment();
        for (var i=0; i<100; i++) {
            var styles = 'transform: translate3d(' + (random(100) - 50) + 'vw, ' + (random(100) - 50) + 'vh, 0) rotate(' + random(360) + 'deg);\
                        background: hsla('+random(360)+',100%,50%,1);\
                        animation: bang 1000ms ease-out forwards;\
                        top:'+positionY()+'px;\
                        left:'+positionX()+'px;\
                        opacity: 0';
            
            var e = document.createElement("i");
            e.style.cssText = styles.toString();
            c.appendChild(e);
        }
// document.body.appendChild(c);
    $(this).append(c);
})


