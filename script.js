document.addEventListener('DOMContentLoaded', () => {
  // Element references
  const envelopeContainer = document.getElementById('envelope-img-container');
  const envelopeImg = document.getElementById('envelope-img');
  const envelopeText = document.getElementById('envelope-text');
  const envelopeSection = document.getElementById('envelope-section');
  
  const paper = document.getElementById('paper');
  const questionGifContainer = document.getElementById('question-gif');
  const questionMode = document.getElementById('question-mode');
  const yesButton = document.getElementById('yes-button');
  const noButton = document.getElementById('no-button');
  const loveMode = document.getElementById('love-mode');
  const paperNote = document.getElementById('paper-note');

  // Define loveEmbed for Yes mode.
  const loveEmbed = `<div class="tenor-gif-embed" data-postid="17959810" data-share-method="host" data-aspect-ratio="1.29032" data-width="300">
    <a href="https://tenor.com/view/i-love-you-mochi-mochi-peach-cat-pet-head-cats-hearts-gif-17959810">I Love You Mochi Mochi Peach Cat GIF</a>
    from <a href="https://tenor.com/search/i+love+you-gifs">I Love You GIFs</a>
  </div>`;

  // Main embed codes for question mode.
  const embedCodes = [
    // Valentine1: Bubu Dudu Sticker
    `<div class="tenor-gif-embed" data-postid="13168878375741792886" data-share-method="host" data-aspect-ratio="1.00671" data-width="300">
      <a href="https://tenor.com/view/bubu-dudu-bubu-dudu-bear-panda-gif-13168878375741792886">Bubu Dudu Sticker</a>
      from <a href="https://tenor.com/search/bubu-stickers">Bubu Stickers</a>
    </div>`,
    // Valentine2: Cute Face Puss GIF
    `<div class="tenor-gif-embed" data-postid="26016683" data-share-method="host" data-aspect-ratio="1" data-width="300">
      <a href="https://tenor.com/view/cute-face-puss-puss-in-boots-the-last-wish-pleasing-face-begging-face-gif-26016683">Cute Face Puss GIF</a>
      from <a href="https://tenor.com/search/cute+face-gifs">Cute Face GIFs</a>
    </div>`,
    // Valentine3: Cat Dance Dancing Cat GIF
    `<div class="tenor-gif-embed" data-postid="15661306910855976699" data-share-method="host" data-aspect-ratio="0.566667" data-width="300">
      <a href="https://tenor.com/view/cat-dance-dancing-cat-chinese-dancing-cat-funny-cat-meme-cat-gif-15661306910855976699">Cat Dance Dancing Cat GIF</a>
      from <a href="https://tenor.com/search/cat+dance-gifs">Cat Dance GIFs</a>
    </div>`,
    // Valentine4: Begging Puppy Eyes GIF
    `<div class="tenor-gif-embed" data-postid="6885575436620659860" data-share-method="host" data-aspect-ratio="1" data-width="300">
      <a href="https://tenor.com/view/begging-puppy-eyes-gif-6885575436620659860">Begging Puppy Eyes GIF</a>
      from <a href="https://tenor.com/search/begging-gifs">Begging GIFs</a>
    </div>`,
    // Valentine5: Please Sad GIF
    `<div class="tenor-gif-embed" data-postid="5266572" data-share-method="host" data-aspect-ratio="1.50602" data-width="300">
      <a href="https://tenor.com/view/please-sad-spongebob-puppy-face-gif-5266572">Please Sad GIF</a>
      from <a href="https://tenor.com/search/please-gifs">Please GIFs</a>
    </div>`,
    // Valentine6: Spongebob Squarepants Begging GIF
    `<div class="tenor-gif-embed" data-postid="10678931350545522063" data-share-method="host" data-aspect-ratio="1.04184" data-width="300">
      <a href="https://tenor.com/view/spongebob-squarepants-begging-pretty-please-beg-on-your-knees-pray-for-mercy-gif-10678931350545522063">Spongebob Squarepants Begging GIF</a>
      from <a href="https://tenor.com/search/spongebob+squarepants-gifs">Spongebob Squarepants GIFs</a>
    </div>`,
    // Valentine7: Tantrum Kicking GIF
    `<div class="tenor-gif-embed" data-postid="23507491" data-share-method="host" data-aspect-ratio="0.81875" data-width="300">
      <a href="https://tenor.com/view/tantrum-kicking-gif-23507491">Tantrum Kicking GIF</a>
      from <a href="https://tenor.com/search/tantrum-gifs">Tantrum GIFs</a>
    </div>`
  ];

  // Extra embed codes for each "No" click (fixed positions as originally working)
  const extraEmbedCodes = [
    // 1st No: Top left
    `<div class="tenor-gif-embed" data-postid="7342782203446435526" data-share-method="host" data-aspect-ratio="1" data-width="300">
      <a href="https://tenor.com/view/side-eye-side-eye-meme-gif-7342782203446435526">Side Eye Side Eye Meme GIF</a>
      from <a href="https://tenor.com/search/side+eye-gifs">Side Eye GIFs</a>
    </div>`,
    // 2nd No: Top right
    `<div class="tenor-gif-embed" data-postid="4489238850091129385" data-share-method="host" data-aspect-ratio="1.02128" data-width="300">
      <a href="https://tenor.com/view/rock-gif-4489238850091129385">Rock Sticker</a>
      from <a href="https://tenor.com/search/rock-stickers">Rock Stickers</a>
    </div>`,
    // 3rd No: Bottom left
    `<div class="tenor-gif-embed" data-postid="4217771996507838185" data-share-method="host" data-aspect-ratio="0.909091" data-width="300">
      <a href="https://tenor.com/view/whet-what-ew-can-you-not-stop-gif-4217771996507838185">Whet What GIF</a>
      from <a href="https://tenor.com/search/whet-gifs">Whet GIFs</a>
    </div>`,
    // 4th No: Bottom right
    `<div class="tenor-gif-embed" data-postid="17856173530980245283" data-share-method="host" data-aspect-ratio="0.750853" data-width="300">
      <a href="https://tenor.com/view/side-eye-gif-17856173530980245283">Side Eye GIF</a>
      from <a href="https://tenor.com/search/side+eye-gifs">Side Eye GIFs</a>
    </div>`,
    // 5th No: Top center
    `<div class="tenor-gif-embed" data-postid="18315331245724829695" data-share-method="host" data-aspect-ratio="1" data-width="300">
      <a href="https://tenor.com/view/ayo-dog-gif-18315331245724829695">Ayo Dog Meme</a>
      from <a href="https://tenor.com/search/ayo+dog-memes">Ayo Dog Memes</a>
    </div>`
  ];

  let currentGifIndex = 0;
  let noClickCount = 0;

  // Function to re-inject Tenor's embed script.
  function updateEmbed() {
    const oldScript = document.getElementById('tenor-embed-script');
    if (oldScript) {
      oldScript.remove();
    }
    const script = document.createElement('script');
    script.id = 'tenor-embed-script';
    script.type = 'text/javascript';
    script.async = true;
    script.src = 'https://tenor.com/embed.js';
    document.body.appendChild(script);
  }

  function createHeart(x, y) {
    const heart = document.createElement('div');
    heart.classList.add('heart');
    heart.style.left = x + 'px';
    heart.style.top = y + 'px';
    // Optionally, you can also add the animation inline:
    heart.style.animation = 'floatUp 3s linear forwards';
    document.body.appendChild(heart);
    heart.addEventListener('animationend', () => heart.remove());
  }
  

  function releaseHearts() {
    const rect = envelopeImg.getBoundingClientRect();
    const startX = rect.left + rect.width / 2;
    const startY = rect.top + rect.height / 2;
    for (let i = 0; i < 20; i++) {
      const offsetX = (Math.random() - 0.5) * 100;
      const offsetY = (Math.random() - 0.5) * 50;
      createHeart(startX + offsetX, startY + offsetY);
    }
  }

  // When the envelope is clicked:
  envelopeContainer.addEventListener('click', () => {
    envelopeContainer.style.pointerEvents = 'none';
    envelopeImg.src = 'V_images/envelope_open.png';
    envelopeText.style.display = 'none';
    setTimeout(() => {
      envelopeSection.classList.add('hidden');
      paper.classList.remove('hidden');
      releaseHearts();
      questionGifContainer.innerHTML = embedCodes[0];
      updateEmbed();
    }, 800);
  });

  // "No" button behavior:
  noButton.addEventListener('click', () => {
    noClickCount++;
    if (noClickCount < 6) {
      currentGifIndex = (currentGifIndex + 1) % 6;
      if (currentGifIndex === 0) currentGifIndex = 1;
      questionGifContainer.innerHTML = embedCodes[currentGifIndex];
      updateEmbed();
      const noMsg = [
        "Come On Please be my Valentine?",
        "Come on You got me dancing about Dat stop playing and be My Valentine",
        "With a cherry on top be my Valentine?",
        "You about to make a grown man Cry, be my valentine Pleeease?",
        "I'm On my knees Please Please Please be my Valentine!"
      ];
      paperNote.innerHTML = noMsg[noClickCount - 1];
      // Reposition the No button randomly within the paper for the first two clicks.
      if (noClickCount < 3) {
        const paperRect = paper.getBoundingClientRect();
        const randomX = Math.floor(Math.random() * (paperRect.width - noButton.offsetWidth)) + paperRect.left;
        const randomY = Math.floor(Math.random() * (paperRect.height - noButton.offsetHeight)) + paperRect.top;
        noButton.style.position = 'absolute';
        noButton.style.left = randomX + 'px';
        noButton.style.top = randomY + 'px';
      } else {
        // For 3rd, 4th, and 5th No clicks, fix the No button to fixed positions.
        if (noClickCount === 3) {
          noButton.style.position = 'fixed';
          noButton.style.left = '10px';
          noButton.style.bottom = '10px';
          noButton.style.top = 'auto';
          noButton.style.right = 'auto';
        } else if (noClickCount === 4) {
          noButton.style.position = 'fixed';
          noButton.style.right = '10px';
          noButton.style.bottom = '10px';
          noButton.style.top = 'auto';
          noButton.style.left = 'auto';
        } else if (noClickCount === 5) {
          noButton.style.position = 'fixed';
          noButton.style.left = '50%';
          noButton.style.top = '10px';
          noButton.style.transform = 'translateX(-50%)';
          noButton.style.right = 'auto';
          noButton.style.bottom = 'auto';
        }
      }
      // Append extra embed as fixed element using original positions.
      if (noClickCount <= extraEmbedCodes.length) {
        const extraDiv = document.createElement('div');
        extraDiv.classList.add('extra-embed');
        extraDiv.innerHTML = extraEmbedCodes[noClickCount - 1];
        extraDiv.style.position = 'fixed';
        extraDiv.style.zIndex = '1000'; // Increased z-index
        extraDiv.style.pointerEvents = 'none'; // Allow clicks through
        if (noClickCount === 1) {
          extraDiv.style.left = '10px';
          extraDiv.style.top = '10px';
        } else if (noClickCount === 2) {
          extraDiv.style.right = '10px';
          extraDiv.style.top = '10px';
        } else if (noClickCount === 3) {
          extraDiv.style.left = '10px';
          extraDiv.style.bottom = '10px';
        } else if (noClickCount === 4) {
          extraDiv.style.right = '10px';
          extraDiv.style.bottom = '10px';
        } else if (noClickCount === 5) {
          extraDiv.style.left = '50%';
          extraDiv.style.top = '10px';
          extraDiv.style.transform = 'translateX(-50%)';
        }
        extraDiv.style.opacity = '0';
        document.body.appendChild(extraDiv);
        void extraDiv.offsetWidth;
        extraDiv.style.opacity = '1';
        updateEmbed();
      }
    } else {
      noButton.style.display = 'none';
      questionGifContainer.innerHTML = embedCodes[6];
      updateEmbed();
      paperNote.innerHTML = "That's It you made me mad about Dat. I'm taking away the No button";
    }
  });

  // "Yes" button behavior:
  yesButton.addEventListener('click', () => {
    questionMode.classList.add('hidden');
    questionGifContainer.innerHTML = '';
    // Remove all extra embed elements.
    document.querySelectorAll('.extra-embed').forEach(el => el.remove());
    document.getElementById('love-gif').innerHTML = loveEmbed;
    loveMode.classList.remove('hidden');
    updateEmbed();
  });
});


























  