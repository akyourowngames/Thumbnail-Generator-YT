let gen_btn = document.querySelector(".gen-btn");
let clr_btn = document.querySelector(".clr-btn");
let cont = document.querySelector(".container");
let img_wrapper = document.querySelector(".card-img-wrapper");

let img_urls = [
    "https://rukminim2.flixcart.com/image/850/1000/kgsb1jk0-0/poster/n/h/y/medium-twfnp2-beautiful-waterfall-nature-view-large-size-high-original-imafwy37qv2b5g3v.jpeg?q=90&crop=false",
    "https://static.vecteezy.com/system/resources/thumbnails/036/226/872/small/ai-generated-nature-landscapes-background-free-photo.jpg",
    "https://media.istockphoto.com/id/483724081/photo/yosemite-valley-landscape-and-river-california.jpg?s=612x612&w=0&k=20&c=QQ7rvq0Qbfpkug1Wbd36PGqkOntoPFKWxiE4w4tV-NE=",
    "https://thumbs.dreamstime.com/b/autumn-nature-landscape-colorful-forest-autumn-nature-landscape-colorful-forest-morning-sunlight-131400332.jpg",
    "https://video.cgtn.com/news/2024-12-11/IMD-2024-Promoting-sustainable-development-in-mountainous-areas-1zfqujyDpaE/video/wu_1ieqida011pfk16u5d3k17fn3uia/wu_1ieqida011pfk16u5d3k17fn3uia.jpg",
    "https://akshitphotography.com/wp-content/uploads/2021/08/Nature-Photography-105.jpg",
    "https://ghantee.com/wp-content/uploads/2024/09/god-hanuman-HD-realistic-wallpaper-for-pc.jpg",
     "https://images.wallpapersden.com/image/download/god-ganesh-in-smite_bGpsZWyUmZqaraWkpJRobWllrWdma2U.jpg",
];

const videoTitles = [
    "🔥 Top 8 AI Tools You MUST Try in 2025!",
    "💻 Learn Python in 10 Minutes! (Beginner Friendly)",
    "📱 How to Build an App in 2025 – Full Guide!",
    "🎮 10 Hidden Secrets in GTA 6 You Didn't Know!",
    "📢 The TRUTH About YouTube's Algorithm (MUST WATCH)",
    "⚡ JavaScript Tips That Will Make You a PRO!",
    "👀 5 ANIME That Will Change Your Life!",
    "🚀 How to Make $1000/Month Online (No Experience Needed!)"
  ];

  const youtubeChannels = [
    "Tech Titans",
    "GameZone Pro",
    "Brain Boost Academy",
    "AnimeVerse Hub",
    "Code Ninja",
    "FilmFanatics TV",
    "Future AI Insights",
    "MusicVibe Nation"
  ];

  const get_time = () => {
    let random_min = Math.floor(Math.random() * 60);
    let random_sec = Math.floor(Math.random() * 60);
    if (random_sec < 10) {
      random_sec += "0";
    }
    let time = random_min + ":" + random_sec;
    return time;
  }

  const get_views = () => {
    let random_views = Math.floor(Math.random() * 10000000);

    if (random_views < 1000) {
      random_views = random_views + " views";
    } else if (random_views < 1000000) {
      random_views = (random_views / 1000).toFixed(1) + "K views";
    } else {
      random_views = (random_views / 1000000).toFixed(1) + "M views";
    }
    return random_views;
    } 

    const upload_time = () => {
      let random_year = Math.floor(Math.random() * 10) + 1;
      return random_year;
    }

gen_btn.addEventListener("click", () => {
    var random_num = Math.floor(Math.random() * 8);

    let card = document.createElement("div");
    card.classList.add("card");
    cont.appendChild(card);
    
    let card_head = document.createElement("div");
    card_head.classList.add("card_head");
    card.appendChild(card_head);

    let imgWrapper = document.createElement("div");
    imgWrapper.classList.add("card-img-wrapper");
    card_head.appendChild(imgWrapper);

    let img = document.createElement("img");
    img.src = img_urls[random_num];
    img.classList.add("card-img");
    imgWrapper.appendChild(img);
    
    let h3 = document.createElement("h3");
    h3.textContent = videoTitles[random_num];
    card_head.appendChild(h3);

    let card_cont = document.createElement("div");
    card_cont.classList.add("card-cont");
    card.appendChild(card_cont);

    let description = document.createElement("p");
    description.textContent = youtubeChannels[random_num] + " • " + get_views() + " • " + upload_time() + " years ago";
    description.classList.add("description");
    card_cont.appendChild(description);

    let randomTime = get_time();
    imgWrapper.style.setProperty("--before-content", `'${randomTime}'`);
    console.log(randomTime);
});

clr_btn.addEventListener("click", () => {
    let card = document.querySelector(".card");
    cont.removeChild(card);
});