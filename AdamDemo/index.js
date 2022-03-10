//Time

function startTime() {
  const today = new Date();
  let h = today.getHours();
  let m = today.getMinutes();
  let s = today.getSeconds();
  var dateTime = today.getMonth() + 1 + "/" + today.getDate();

  m = checkTime(m);
  s = checkTime(s);
  document.getElementById("clock").innerHTML =
    dateTime + " " + "  " + h + ":" + m + ":" + s;
  setTimeout(startTime, 1000);
}

function checkTime(i) {
  if (i < 10) {
    i = "0" + i;
  }
  return i;
}

//Moving
var container = document.querySelector("#container");

var activeItem = null;

var active = false;

container.addEventListener("touchstart", dragStart, false);
container.addEventListener("touchend", dragEnd, false);
container.addEventListener("touchmove", drag, false);
container.addEventListener("mousedown", dragStart, false);
container.addEventListener("mouseup", dragEnd, false);
container.addEventListener("mousemove", drag, false);

function dragStart(e) {
  if (e.target !== e.currentTarget) {
    active = true;
    //Interacting with Item
    activeItem = e.target;

    if (activeItem !== null) {
      if (!activeItem.xOffset) {
        activeItem.xOffset = 0;
      }

      if (!activeItem.yOffset) {
        activeItem.yOffset = 0;
      }

      if (e.type === "touchstart") {
        activeItem.initialX = e.touches[0].clientX - activeItem.xOffset;
        activeItem.initialY = e.touches[0].clientY - activeItem.yOffset;
      } else {
        console.log("doing something!");
        activeItem.initialX = e.clientX - activeItem.xOffset;
        activeItem.initialY = e.clientY - activeItem.yOffset;
      }
    }
  }
}

function dragEnd(e) {
  if (activeItem !== null) {
    activeItem.initialX = activeItem.currentX;
    activeItem.initialY = activeItem.currentY;
  }
  active = false;
  activeItem = null;
}

function drag(e) {
  if (active) {
    if (e.type === "touchmove") {
      e.preventDefault();

      activeItem.currentX = e.touches[0].clientX - activeItem.initialX;
      activeItem.currentY = e.touches[0].clientY - activeItem.initialY;
    } else {
      activeItem.currentX = e.clientX - activeItem.initialX;
      activeItem.currentY = e.clientY - activeItem.initialY;
    }

    activeItem.xOffset = activeItem.currentX;
    activeItem.yOffset = activeItem.currentY;

    setTranslate(activeItem.currentX, activeItem.currentY, activeItem);
  }
}
function setTranslate(xPos, yPos, el) {
  el.style.transform = "translate3d(" + xPos + "px, " + yPos + "px, 0)";
}

//Modal
const modalTwitter = document.querySelector(".modal-twitter");
const modalInstagram = document.querySelector(".modal-instagram");
const modalSoundCloud = document.querySelector(".modal-soundcloud");
const modalTumblr = document.querySelector(".modal-tumblr");
const modalYoutube = document.querySelector(".modal-youtube");
//
const btnCloseModalTwitter = document.querySelector(".close-modal");
const btnCloseModalInstagram = document.querySelector(".close-modal-ig");
const btnCloseModalSoundCloud = document.querySelector(".close-modal-sc");
const btnCloseModalTumblr = document.querySelector(".close-modal-tb");
const btnCloseModalYoutube = document.querySelector(".close-modal-yt");
//
const btnsOpenModalTwitter = document.querySelector(".show-modal-twitter");
const btnsOpenModalInstagram = document.querySelector(".show-modal-instagram");
const btnsOpenModalSoundCloud = document.querySelector(
  ".show-modal-soundcloud"
);
const btnsOpenModalTumblr = document.querySelector(".show-modal-tumblr");
const btnsOpenModalYoutube = document.querySelector(".show-modal-youtube");

//Twitter

const openModalTwitter = function () {
  modalTwitter.classList.remove("hidden");
};

const closeModalTwitter = function () {
  modalTwitter.classList.add("hidden");
};
btnsOpenModalTwitter.addEventListener("click", openModalTwitter);

btnCloseModalTwitter.addEventListener("click", closeModalTwitter);

document.addEventListener("keydown", function (e) {
  // console.log(e.key);

  if (e.key === "Escape" && !modal.classList.contains("hidden")) {
    closeModal();
  }
});
//Instgram
const openModalInsta = function () {
  modalInstagram.classList.remove("hidden");
};

const closeModalInsta = function () {
  modalInstagram.classList.add("hidden");
};
btnsOpenModalInstagram.addEventListener("click", openModalInsta);

btnCloseModalInstagram.addEventListener("click", closeModalInsta);

document.addEventListener("keydown", function (e) {
  // console.log(e.key);

  if (e.key === "Escape" && !modal.classList.contains("hidden")) {
    closeModal();
  }
});

//Soundcloud
const openModalSoundCloud = function () {
  modalSoundCloud.classList.remove("hidden");
};

const closeModalSoundCloud = function () {
  modalSoundCloud.classList.add("hidden");
};
btnsOpenModalSoundCloud.addEventListener("click", openModalSoundCloud);

btnCloseModalSoundCloud.addEventListener("click", closeModalSoundCloud);

document.addEventListener("keydown", function (e) {
  // console.log(e.key);

  if (e.key === "Escape" && !modal.classList.contains("hidden")) {
    closeModal();
  }
});

//Tumblr
const openModalTumblr = function () {
  modalTumblr.classList.remove("hidden");
};

const closeModalTumblr = function () {
  modalTumblr.classList.add("hidden");
};
btnsOpenModalTumblr.addEventListener("click", openModalTumblr);

btnCloseModalTumblr.addEventListener("click", closeModalTumblr);

document.addEventListener("keydown", function (e) {
  // console.log(e.key);

  if (e.key === "Escape" && !modal.classList.contains("hidden")) {
    closeModal();
  }
});

const openModalYoutube = function () {
  modalYoutube.classList.remove("hidden");
};

const closeModalYoutube = function () {
  modalYoutube.classList.add("hidden");
};
btnsOpenModalYoutube.addEventListener("click", openModalYoutube);

btnCloseModalYoutube.addEventListener("click", closeModalYoutube);

document.addEventListener("keydown", function (e) {
  // console.log(e.key);

  if (e.key === "Escape" && !modal.classList.contains("hidden")) {
    closeModal();
  }
});
