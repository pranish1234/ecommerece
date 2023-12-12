var carousel = Array.from(
  document.querySelectorAll(".displays .caurosel-item")
);
var count = 0;

const nextslide = () => {
  count++;
  if (count >= carousel.length) {
    count = 0;
  }
  updateslide(count);
};
const updateslide = (count) => {
  carousel.forEach((item) => {
    item.style.display = "none";
  });
  carousel[count].style.display = "block";
};

const prevslide = () => {
  count == 0 ? (count = 2) : count--;
  if (count >= carousel.length) {
    count = 2;
  }
  updateslide(count);
};
