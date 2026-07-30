// const experience = [
//   {
//     role: "Sales Associate",
//     company: "Ozone Park Pharmacy",
//     date: "Oct 2025 - Present",
//     location: "New York, NY",
//     bullets: [
//       "Build customer relationships through consistent, attentive service; assist with medication management, troubleshooting, and expediting requests.<br><br>",
//       "Liaise with insurance companies to maintain accurate information and follow up so customers receive covered medication on time.",
//     ],
//   },
//   {
//     role: "Social Media & Design Specialist",
//     company: "Unique Assets Limited",
//     date: "May 2022 - Present",
//     location: "Bangladesh (Seasonal)",
//     bullets: [
//       "Conceptualized and executed media strategies that increased engagement by 35% and strengthened brand awareness across platforms. <br><br>",
//       "Designed 20+ layouts for digital and print media, including brochures, pamphlets, flyers, and advertisements. <br><br>",
//       "Produced and edited 30+ videos for digital platforms, creating content aligned with the brand identity. <br><br>",
//       "Tracked audience engagement data to identify performance trends and guide future campaign strategies. <br>",
//     ],
//   },
//   {
//     role: "Public Relations Intern",
//     company: "Alison Brod Marketing + Communication",
//     date: "Jan 2025 - May 2025",
//     location: "New York, NY",
//     bullets: [
//       "Coordinated the management of beauty client accounts, including L'Oreal Paris, Bliss, and Charlotte Tilbury. <br><br>",
//       "Analyzed data on 200+ celebrities and influencers, compiling organized Excel reports to support PR initiatives. <br><br>",
//       "Cataloged media audits, press clippings, and news articles from Muck Rack and Cision with close attention to detail. <br><br>",
//       "Contributed to marketing and PR efforts for ABMC beauty brands, including L'Oreal, Bliss, and Charlotte Tilbury. <br><br>",
//     ],
//   },
//   {
//     role: "Student Worker",
//     company: "Fordham University Visual Arts Department",
//     date: "Jan 2025 - May 2025",
//     location: "New York, NY",
//     bullets: [
//       "Supervised photo lab darkroom operations, assisting staff and faculty to maintain an efficient workspace for 30+ students. <br><br>",
//       "Installed and configured visual arts technology, including scanners, large-format printers, and Adobe Creative Cloud applications, to support coursework and exhibitions. <br><br>",
//     ],
//   },
// ];

// const skills = [
//   "UX & UI Design",
//   "Graphic Design",
//   "Digital Art",
//   "Typography",
//   "Adobe Creative Cloud",
//   "Digital Marketing",
//   "Brand Strategy",
//   "Content Creation",
// ];

// const experienceMarkup = experience.map(({ role, company, date, location, bullets }, index) => {
//   const panelId = `experience-panel-${index}`;
//   const headingId = `experience-heading-${index}`;

//   return `
//     <article class="accordion-item">
//       <h3 class="accordion-header" id="${headingId}">
//         <button class="accordion-button ${index ? "collapsed" : ""}" type="button"
//           data-bs-toggle="collapse" data-bs-target="#${panelId}"
//           aria-expanded="${index === 0}" aria-controls="${panelId}">
//           <span class="accordion-header-copy">
//             <span class="experience-role d-block">${role}</span>
//             <span class="experience-company d-block">${company}</span>
//           </span>
//           <span class="experience-meta">${date}<br>${location}</span>
//         </button>
//       </h3>
//       <div id="${panelId}" class="accordion-collapse collapse ${index === 0 ? "show" : ""}"
//         aria-labelledby="${headingId}" data-bs-parent="#experience-list">
//         <div class="accordion-body">
//           <ul class="experience-summary">
//             ${bullets.map((bullet) => `<li>${bullet}</li>`).join("")}
//           </ul>
//         </div>
//       </div>
//     </article>`;
// }).join("");

// const skillsMarkup = skills.map((skill) => `
//   <span class="skill-pill">${skill}</span>
// `).join("");

// document.querySelector("#experience-list").innerHTML = experienceMarkup;
// document.querySelector("#skills-list").innerHTML = skillsMarkup;
// // ------------------------

// const videoRevealItems = document.querySelectorAll(".reveal-item6");

// const videoObserver = new IntersectionObserver(
//   (entries, observer) => {
//     entries.forEach((entry) => {
//       if (entry.isIntersecting) {
//         entry.target.classList.add("is-visible");
//         observer.unobserve(entry.target);
//       }
//     });
//   },
//   { threshold: 0.14 }
// );

// videoRevealItems.forEach((item) => videoObserver.observe(item));

// function toggleVideo(videoId) {
//   const video = document.getElementById(videoId);
//   const card = document.querySelector(`[data-video-card="${videoId}"]`);

//   if (!video || !card) return;

//   if (video.paused) {
//     video.play().then(() => card.classList.add("is-playing")).catch(() => {
//       card.classList.remove("is-playing");
//     });
//   } else {
//     video.pause();
//     card.classList.remove("is-playing");
//   }
// }

// function openFullscreen(videoId) {
//   const video = document.getElementById(videoId);
//   if (!video) return;

//   video.play().catch(() => {});

//   if (video.requestFullscreen) {
//     video.requestFullscreen();
//   } else if (video.webkitEnterFullscreen) {
//     video.webkitEnterFullscreen();
//   }
// }

// document.querySelectorAll("[data-video]").forEach((button) => {
//   button.addEventListener("click", () => toggleVideo(button.dataset.video));
// });

// document.querySelectorAll("[data-fullscreen]").forEach((button) => {
//   button.addEventListener("click", () => openFullscreen(button.dataset.fullscreen));
// });

// document.getElementById("reelButton").addEventListener("click", () => {
//   document.querySelector(".video-gallery").scrollIntoView({ behavior: "smooth" });
// });

// document.querySelectorAll(".tilt-card").forEach((card) => {
//   card.addEventListener("pointermove", (event) => {
//     const bounds = card.getBoundingClientRect();
//     const x = (event.clientX - bounds.left) / bounds.width - 0.5;
//     const y = (event.clientY - bounds.top) / bounds.height - 0.5;
//     card.style.transform = `rotateX(${-y * 4}deg) rotateY(${x * 4}deg) scale(1.015)`;
//   });

//   card.addEventListener("pointerleave", () => {
//     card.style.transform = "";
//   });
// });

// // ---------------------------



// // -----------------------------

// const revealItems = document.querySelectorAll(".reveal-item1");

// const revealOnScroll = new IntersectionObserver(
//   (entries, observer) => {
//     entries.forEach((entry) => {
//       if (entry.isIntersecting) {
//         entry.target.classList.add("is-visible");
//         observer.unobserve(entry.target);
//       }
//     });
//   },
//   { threshold: 0.12 }
// );

// revealItems.forEach((item) => revealOnScroll.observe(item));

// const aboutToggle = document.querySelector("#aboutToggle");
// const moreAbout = document.querySelector("#moreAbout");
// const aboutEllipsis = document.querySelector("#aboutEllipsis");

// aboutToggle.addEventListener("click", () => {
//   const isExpanded = aboutToggle.getAttribute("aria-expanded") === "true";

//   moreAbout.hidden = isExpanded;
//   aboutEllipsis.hidden = !isExpanded;
//   aboutToggle.setAttribute("aria-expanded", String(!isExpanded));
//   aboutToggle.innerHTML = isExpanded
//     ? 'Read More <span aria-hidden="true">&#8594;</span>'
//     : 'Read Less <span aria-hidden="true">&#8592;</span>';
// });

// // --------------------------------

// const workRevealItems = document.querySelectorAll(".reveal-item5");

// const workObserver = new IntersectionObserver(
//   (entries, observer) => {
//     entries.forEach((entry) => {
//       if (entry.isIntersecting) {
//         entry.target.classList.add("is-visible");
//         observer.unobserve(entry.target);
//       }
//     });
//   },
//   { threshold: 0.14 }
// );

// workRevealItems.forEach((item) => workObserver.observe(item));

// // ------------------------------





// const graphicRevealItems = document.querySelectorAll(".reveal-item");

// document.querySelectorAll("#page-title span, #page-title em").forEach((line) => {
//   const text = line.textContent;
//   line.setAttribute("aria-label", text);
//   line.innerHTML = [...text].map((character, index) => (
//     character === " "
//       ? " "
//       : `<span class="letter" aria-hidden="true" style="animation-delay:${index * 45}ms">${character}</span>`
//   )).join("");
// });

// const graphicObserver = new IntersectionObserver(
//   (entries, observer) => {
//     entries.forEach((entry) => {
//       if (entry.isIntersecting) {
//         entry.target.classList.add("is-visible");
//         observer.unobserve(entry.target);
//       }
//     });
//   },
//   { threshold: 0.16 }
// );

// graphicRevealItems.forEach((item) => graphicObserver.observe(item));

// document.querySelectorAll(".tilt-card").forEach((card) => {
//   card.addEventListener("pointermove", (event) => {
//     const bounds = card.getBoundingClientRect();
//     const x = (event.clientX - bounds.left) / bounds.width - 0.5;
//     const y = (event.clientY - bounds.top) / bounds.height - 0.5;
//     card.style.transform = `rotateX(${-y * 5}deg) rotateY(${x * 5}deg) scale(1.02)`;
//   });

//   card.addEventListener("pointerleave", () => {
//     card.style.transform = "";
//   });
// });

// // -------------------------------------




document.addEventListener("DOMContentLoaded", () => {

  // =========================
  // EXPERIENCE
  // =========================

  const experience = [
    {
      role: "Sales Associate",
      company: "Ozone Park Pharmacy",
      date: "Oct 2025 - Present",
      location: "New York, NY",
      bullets: [
        "Build customer relationships through consistent, attentive service; assist with medication management, troubleshooting, and expediting requests.<br><br>",
        "Liaise with insurance companies to maintain accurate information and follow up so customers receive covered medication on time.",
      ],
    },
    {
      role: "Social Media & Design Specialist",
      company: "Unique Assets Limited",
      date: "May 2022 - Present",
      location: "Bangladesh (Seasonal)",
      bullets: [
        "Conceptualized and executed media strategies that increased engagement by 35% and strengthened brand awareness across platforms.<br><br>",
        "Designed 20+ layouts for digital and print media, including brochures, pamphlets, flyers, and advertisements.<br><br>",
        "Produced and edited 30+ videos for digital platforms, creating content aligned with the brand identity.<br><br>",
        "Tracked audience engagement data to identify performance trends and guide future campaign strategies.",
      ],
    },
    {
      role: "Public Relations Intern",
      company: "Alison Brod Marketing + Communication",
      date: "Jan 2025 - May 2025",
      location: "New York, NY",
      bullets: [
        "Coordinated the management of beauty client accounts, including L'Oreal Paris, Bliss, and Charlotte Tilbury.<br><br>",
        "Analyzed data on 200+ celebrities and influencers, compiling organized Excel reports to support PR initiatives.<br><br>",
        "Cataloged media audits, press clippings, and news articles from Muck Rack and Cision with close attention to detail.<br><br>",
        "Contributed to marketing and PR efforts for ABMC beauty brands, including L'Oreal, Bliss, and Charlotte Tilbury.",
      ],
    },
    {
    role: "President",
    company: "Fordham University Arts Club",
    date: "Sept 2023 - May 2025",
    location: "New York, NY",
    bullets: [
      "Directed and led the executive board to ensure responsibilities were clearly delegated and completed effectively. <br><br>",
      "Organized and promoted 30+ campus-wide events through comprehensive planning and collaboration with other clubs. <br><br>",
      "Curated the club’s social media presence, growing engagement by 60% through consistent posting and visual campaigns. <br><br>",

    ],
  },
    {
      role: "Student Worker",
      company: "Fordham University Visual Arts Department",
      date: "Jan 2025 - May 2025",
      location: "New York, NY",
      bullets: [
        "Supervised photo lab darkroom operations, assisting staff and faculty to maintain an efficient workspace for 30+ students.<br><br>",
        "Installed and configured visual arts technology, including scanners, large-format printers, and Adobe Creative Cloud applications, to support coursework and exhibitions.",
      ],
    },
  ];

  const skills = [
    "UX & UI Design",
    "Graphic Design",
    "Digital Art",
    "Typography",
    "Adobe Creative Cloud",
    "Digital Marketing",
    "Sales",
    "Customer Care",
    "Brand Strategy",
    "Content Creation",
  ];

  const experienceMarkup = experience.map(({ role, company, date, location, bullets }, index) => {
    const panelId = `experience-panel-${index}`;
    const headingId = `experience-heading-${index}`;

    return `
      <article class="accordion-item">
        <h3 class="accordion-header" id="${headingId}">
          <button class="accordion-button ${index ? "collapsed" : ""}"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#${panelId}"
            aria-expanded="${index === 0}"
            aria-controls="${panelId}">

            <span class="accordion-header-copy">
              <span class="experience-role d-block">${role}</span>
              <span class="experience-company d-block">${company}</span>
            </span>

            <span class="experience-meta">
              ${date}<br>${location}
            </span>

          </button>
        </h3>

        <div id="${panelId}"
             class="accordion-collapse collapse ${index === 0 ? "show" : ""}"
             aria-labelledby="${headingId}"
             data-bs-parent="#experience-list">

          <div class="accordion-body">
            <ul class="experience-summary">
              ${bullets.map(b => `<li>${b}</li>`).join("")}
            </ul>
          </div>

        </div>
      </article>
    `;
  }).join("");

  const skillsMarkup = skills
    .map(skill => `<span class="skill-pill">${skill}</span>`)
    .join("");

  const experienceList = document.querySelector("#experience-list");
  const skillsList = document.querySelector("#skills-list");

  if (experienceList) experienceList.innerHTML = experienceMarkup;
  if (skillsList) skillsList.innerHTML = skillsMarkup;

  // =========================
  // HELPER
  // =========================

  function createObserver(selector, threshold = 0.14) {
    const items = document.querySelectorAll(selector);

    if (!items.length) return;

    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          obs.unobserve(entry.target);
        }
      });
    }, { threshold });

    items.forEach(item => observer.observe(item));
  }

  createObserver(".reveal-item", 0.16);
  createObserver(".reveal-item1", 0.12);
  createObserver(".reveal-item5", 0.14);
  createObserver(".reveal-item6", 0.14);

  // =========================
  // PAGE TITLE
  // =========================

  // document.querySelectorAll("#page-title span, #page-title em").forEach(line => {
  //   const text = line.textContent;

  //   line.setAttribute("aria-label", text);

  //   line.innerHTML = [...text]
  //     .map((char, i) =>
  //       char === " "
  //         ? " "
  //         : `<span class="letter" aria-hidden="true" style="animation-delay:${i * 45}ms">${char}</span>`
  //     )
  //     .join("");
  // });

  // =========================
  // VIDEO
  // =========================

  function toggleVideo(videoId) {
    const video = document.getElementById(videoId);
    const card = document.querySelector(`[data-video-card="${videoId}"]`);

    if (!video || !card) return;

    if (video.paused) {
      video.play()
        .then(() => card.classList.add("is-playing"))
        .catch(() => card.classList.remove("is-playing"));
    } else {
      video.pause();
      card.classList.remove("is-playing");
    }
  }

  function openFullscreen(videoId) {
    const video = document.getElementById(videoId);

    if (!video) return;

    video.play().catch(() => {});

    if (video.requestFullscreen) {
      video.requestFullscreen();
    } else if (video.webkitEnterFullscreen) {
      video.webkitEnterFullscreen();
    }
  }

  document.querySelectorAll("[data-video]").forEach(btn => {
    btn.addEventListener("click", () => {
      toggleVideo(btn.dataset.video);
    });
  });

  document.querySelectorAll("[data-fullscreen]").forEach(btn => {
    btn.addEventListener("click", () => {
      openFullscreen(btn.dataset.fullscreen);
    });
  });

  const reelButton = document.getElementById("reelButton");
  const videoGallery = document.querySelector(".video-gallery");

  if (reelButton && videoGallery) {
    reelButton.addEventListener("click", () => {
      videoGallery.scrollIntoView({
        behavior: "smooth"
      });
    });
  }

  // =========================
  // ABOUT
  // =========================

  const aboutToggle = document.querySelector("#aboutToggle");
  const moreAbout = document.querySelector("#moreAbout");
  const aboutEllipsis = document.querySelector("#aboutEllipsis");

  if (aboutToggle && moreAbout && aboutEllipsis) {
    aboutToggle.addEventListener("click", () => {

      const expanded =
        aboutToggle.getAttribute("aria-expanded") === "true";

      moreAbout.hidden = expanded;
      aboutEllipsis.hidden = !expanded;

      aboutToggle.setAttribute(
        "aria-expanded",
        String(!expanded)
      );

      aboutToggle.innerHTML = expanded
        ? 'Read More <span aria-hidden="true">&#8594;</span>'
        : 'Read Less <span aria-hidden="true">&#8592;</span>';

    });
  }

  // =========================
  // TILT
  // =========================

  document.querySelectorAll(".tilt-card").forEach(card => {

    card.addEventListener("pointermove", e => {

      const rect = card.getBoundingClientRect();

      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;

      card.style.transform =
        `rotateX(${-y * 5}deg) rotateY(${x * 5}deg) scale(1.02)`;

    });

    card.addEventListener("pointerleave", () => {
      card.style.transform = "";
    });

  });

});