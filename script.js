/* =====================================
   ISHITA'S BIRTHDAY WEBSITE
   No background music
   ===================================== */

const letter = `Ishita, my Jaan,

Happy Birthday to the person who makes ordinary days feel a little more beautiful. Today is all about you, but I hope you know that I feel lucky too — lucky to know you, lucky to care for you, and lucky that someone as special as you is part of my world.

If I could give you one gift beyond everything else, it would be the chance to see yourself through my eyes. You would see how much your smile matters, how lovely your little ways are, and how deserving you are of every good thing life has to offer. You do not have to be perfect, have every answer, or be happy every second. You are precious simply because you are you.

I cannot promise that every day will be easy or that life will always go exactly as we imagine. But I can promise to keep showing up with honesty, patience and care. I want to listen when you need to be heard, celebrate your wins like they are my own, stand beside your dreams, and remind you that you never have to make yourself smaller to be loved.

I want us to collect the kind of memories that make us smile years later — silly jokes, long conversations, spontaneous plans, quiet moments, little celebrations and all the beautiful things that happen in between. I want to keep learning about you, growing alongside you, and finding new ways to make you feel appreciated. I want to be someone you can be completely yourself with.

On your birthday, my wish is that life is gentle with your heart. May your dreams find their way to you. May you always have reasons to laugh, courage when things get difficult, peace when the world feels loud, and people around you who see the wonderful person you are.

Thank you for being you, Jaan. If I get to make one wish for all the days ahead, it is that I get to keep celebrating you — not only on birthdays, but in all the tiny moments that make a life beautiful.

Happy Birthday, my Ishita. You deserve a world full of happiness, and I will always be cheering for you.

With all my love. ♡`;


const letterText = document.getElementById("letterText");
const letterButton = document.getElementById("showLetter");
const toast = document.getElementById("toast");

let letterStarted = false;
let toastTimer;
let finalMomentPlayed = false;


/* =====================================
   DEVICE CHECK
   ===================================== */

const isMobile = window.matchMedia(
  "(max-width: 760px)"
).matches;

const finePointer = window.matchMedia(
  "(hover: hover) and (pointer: fine)"
).matches;


/* =====================================
   SPARKLES
   ===================================== */

function makeSparkles() {
  const holder = document.getElementById("sparkles");

  if (!holder) return;

  const count = isMobile ? 24 : 65;

  for (let i = 0; i < count; i++) {
    const sparkle = document.createElement("i");

    sparkle.className = "spark";

    sparkle.style.left = Math.random() * 100 + "%";
    sparkle.style.top = Math.random() * 100 + "%";
    sparkle.style.animationDelay =
      Math.random() * 4 + "s";

    holder.appendChild(sparkle);
  }
}


/* =====================================
   FALLING PETALS
   ===================================== */

function makePetal() {
  const holder = document.getElementById("petals");

  if (!holder) return;

  // Avoid too many petals on mobile.
  if (isMobile && holder.children.length > 5) return;

  const petal = document.createElement("span");

  petal.className = "petal";

  petal.textContent =
    Math.random() > 0.5 ? "✿" : "❀";

  petal.style.left = Math.random() * 100 + "vw";

  petal.style.fontSize =
    (9 + Math.random() * 13) + "px";

  const duration = 9 + Math.random() * 9;

  petal.style.animationDuration = duration + "s";

  holder.appendChild(petal);

  setTimeout(() => {
    petal.remove();
  }, duration * 1000);
}


makeSparkles();

const petalInterval = isMobile ? 1800 : 850;

setInterval(makePetal, petalInterval);


/* =====================================
   CONFETTI
   ===================================== */

function confettiBurst(count = 100) {
  const colors = [
    "#ff9fca",
    "#c5a9ff",
    "#f7e7ef",
    "#d9b78e",
    "#ec78ac"
  ];

  // Reduce particles on older phones.
  if (isMobile) {
    count = Math.min(count, 45);
  }

  for (let i = 0; i < count; i++) {
    const confetti = document.createElement("i");

    confetti.className = "confetti";

    confetti.style.left =
      Math.random() * 100 + "vw";

    confetti.style.background =
      colors[Math.floor(Math.random() * colors.length)];

    confetti.style.borderRadius =
      Math.random() > 0.5 ? "50%" : "2px";

    confetti.style.setProperty(
      "--drift",
      (Math.random() * 260 - 130) + "px"
    );

    confetti.style.animationDuration =
      (2.5 + Math.random() * 2) + "s";

    document.body.appendChild(confetti);

    setTimeout(() => {
      confetti.remove();
    }, 4700);
  }
}


/* =====================================
   FLOATING HEARTS
   ===================================== */

function heartsBurst(count = 20) {
  if (isMobile) {
    count = Math.min(count, 12);
  }

  for (let i = 0; i < count; i++) {
    setTimeout(() => {
      const heart = document.createElement("span");

      heart.className = "heart-float";

      heart.textContent =
        Math.random() > 0.5 ? "♥" : "♡";

      heart.style.left =
        Math.random() * 100 + "vw";

      heart.style.fontSize =
        (13 + Math.random() * 23) + "px";

      document.body.appendChild(heart);

      setTimeout(() => {
        heart.remove();
      }, 3700);

    }, i * 75);
  }
}


/* =====================================
   TOAST MESSAGE
   ===================================== */

function showToast(message) {
  if (!toast) return;

  toast.textContent = message;

  toast.classList.add("show");

  clearTimeout(toastTimer);

  toastTimer = setTimeout(() => {
    toast.classList.remove("show");
  }, 2800);
}


/* =====================================
   TYPING LOVE LETTER
   ===================================== */

function typeLetter() {
  if (letterStarted || !letterText) return;

  letterStarted = true;

  if (letterButton) {
    letterButton.innerHTML =
      "WORDS, STRAIGHT FROM MY HEART <span>♡</span>";
  }

  letterText.classList.add("typing");

  let index = 0;

  function typeNext() {
    if (index < letter.length) {

      // Type more characters at once for a smoother,
      // faster experience on mobile phones.
      const chunk = isMobile ? 8 : 5;

      letterText.textContent +=
        letter.slice(index, index + chunk);

      index += chunk;

      setTimeout(typeNext, isMobile ? 15 : 20);

    } else {
      letterText.classList.remove("typing");
    }
  }

  typeNext();
}


/* =====================================
   OPEN SURPRISE BUTTON
   ===================================== */

const openButton = document.getElementById("openSurprise");

if (openButton) {
  openButton.addEventListener("click", () => {

    confettiBurst(100);
    heartsBurst(20);

    const beginSection = document.getElementById("begin");

    if (beginSection) {
      beginSection.scrollIntoView({
        behavior: "smooth"
      });
    }

    showToast("Welcome to your little universe, Jaan ♡");

  });
}


/* =====================================
   LETTER BUTTON
   ===================================== */

if (letterButton) {
  letterButton.addEventListener("click", () => {
    typeLetter();
  });
}


/* =====================================
   REPLAY BUTTON
   ===================================== */

const replayButton = document.getElementById("replay");

if (replayButton) {
  replayButton.addEventListener("click", () => {

    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });

    confettiBurst(75);
    heartsBurst(15);

    showToast("Every little detail is made for you ♡");

  });
}


/* =====================================
   SCROLL REVEAL ANIMATION
   ===================================== */

const revealElements = document.querySelectorAll(".reveal");

if ("IntersectionObserver" in window) {

  const observer = new IntersectionObserver(
    entries => {

      entries.forEach(entry => {

        if (entry.isIntersecting) {

          entry.target.classList.add("visible");

          if (entry.target.closest("#letter")) {
            typeLetter();
          }

          observer.unobserve(entry.target);
        }

      });

    },
    {
      threshold: 0.12
    }
  );

  revealElements.forEach(element => {
    observer.observe(element);
  });

} else {

  // Fallback for older browsers.
  revealElements.forEach(element => {
    element.classList.add("visible");
  });

}


/* =====================================
   READING PROGRESS BAR
   ===================================== */

const progressBar = document.getElementById("readingProgress");

function updateProgress() {

  if (!progressBar) return;

  const scrollTop =
    window.scrollY ||
    document.documentElement.scrollTop;

  const maxScroll =
    document.documentElement.scrollHeight -
    window.innerHeight;

  const percentage =
    maxScroll > 0
      ? (scrollTop / maxScroll) * 100
      : 0;

  progressBar.style.width = percentage + "%";
}

window.addEventListener("scroll", updateProgress, {
  passive: true
});

updateProgress();


/* =====================================
   PROMISE CARD ANIMATION
   ===================================== */

const promiseCards =
  document.querySelectorAll(".promise-card");

if ("IntersectionObserver" in window) {

  const cardObserver = new IntersectionObserver(
    entries => {

      entries.forEach(entry => {

        if (entry.isIntersecting) {

          const index =
            Array.from(promiseCards).indexOf(entry.target);

          entry.target.style.transitionDelay =
            (index * 120) + "ms";

          entry.target.classList.add("visible");

          cardObserver.unobserve(entry.target);
        }

      });

    },
    {
      threshold: 0.15
    }
  );

  promiseCards.forEach(card => {
    cardObserver.observe(card);
  });

}


/* =====================================
   DESKTOP CURSOR SPARKLES
   ===================================== */

if (finePointer) {

  let lastSparkle = 0;

  document.addEventListener("pointermove", event => {

    const now = Date.now();

    if (now - lastSparkle < 55) return;

    lastSparkle = now;

    const sparkle = document.createElement("span");

    sparkle.textContent =
      Math.random() > 0.5 ? "✦" : "·";

    sparkle.style.position = "fixed";
    sparkle.style.left = event.clientX + "px";
    sparkle.style.top = event.clientY + "px";

    sparkle.style.color =
      Math.random() > 0.5 ? "#ffb5d5" : "#d0b8ff";

    sparkle.style.fontSize = "12px";
    sparkle.style.pointerEvents = "none";
    sparkle.style.zIndex = "90";
    sparkle.style.transition = "all .7s ease";

    document.body.appendChild(sparkle);

    requestAnimationFrame(() => {

      sparkle.style.transform =
        `translate(${Math.random() * 30 - 15}px, -25px) scale(0)`;

      sparkle.style.opacity = "0";

    });

    setTimeout(() => {
      sparkle.remove();
    }, 750);

  });

}


/* =====================================
   FINAL HEART MOMENT
   ===================================== */

const finalSection =
  document.querySelector(".final-section");

if (finalSection && "IntersectionObserver" in window) {

  const finalObserver = new IntersectionObserver(
    entries => {

      entries.forEach(entry => {

        if (entry.isIntersecting && !finalMomentPlayed) {

          finalMomentPlayed = true;

          heartsBurst(25);

          setTimeout(() => {
            confettiBurst(65);
          }, 500);

          showToast("Forever looks beautiful with you, Ishita ♡");

          finalObserver.unobserve(entry.target);
        }

      });

    },
    {
      threshold: 0.3
    }
  );

  finalObserver.observe(finalSection);

}


/* =====================================
   PHOTO FRAME DESKTOP TILT
   ===================================== */

const photoFrame =
  document.querySelector(".single-memory .image-shell");

if (photoFrame && finePointer) {

  photoFrame.addEventListener("pointermove", event => {

    const rect = photoFrame.getBoundingClientRect();

    const x = (event.clientX - rect.left) / rect.width;
    const y = (event.clientY - rect.top) / rect.height;

    const rotateY = (x - 0.5) * 4;
    const rotateX = (0.5 - y) * 4;

    photoFrame.style.transform =
      `perspective(900px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;

  });

  photoFrame.addEventListener("pointerleave", () => {

    photoFrame.style.transform =
      "perspective(900px) rotateX(0) rotateY(0)";

  });

  photoFrame.style.transition = "transform .3s ease";

}


/* =====================================
   WEBSITE READY
   ===================================== */

console.log("Made with love, only for Ishita ♡");