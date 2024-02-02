function sideMenuOpener() {
  const sideMenu = document.querySelector(".side-menu");
  const sideMenuBtn = document.querySelector(".top-menu-bar__btn-menu");
  const sideMenuClose = document.querySelector(".side-menu-close");
  const screenShadow = document.querySelector(".screen-shadow");

  let isOpen = sideMenu.getAttribute("aria-hidden") === false;

  const calculateScrollSize = () => {
    let screenSize = document.querySelector("main > .screen").offsetWidth;
    let viewportSize = document.documentElement.clientWidth;
    return viewportSize - screenSize;
  }

  let scrollSize = calculateScrollSize();

  if (sideMenuBtn) {
    sideMenuBtn.addEventListener("click", () => {
      scrollSize = calculateScrollSize();
      screenShadow.classList.add("active");
      sideMenu.setAttribute("style", "right: " + scrollSize / 2 + "px");
      isOpen = true;
    });

    window.addEventListener("resize", () => {
      if (isOpen) {
        scrollSize = calculateScrollSize();
        screenShadow.classList.add("active");
        sideMenu.setAttribute("style", "right: " + scrollSize / 2 + "px");
        isOpen = true;
      }
    });

    sideMenuClose.addEventListener("click", () => {
      sideMenu.setAttribute("style", "right: -" + sideMenu.offsetWidth + "px");
      screenShadow.classList.remove("active");
      isOpen = false;
    });

    // Add event listener for clicks on document
    document.addEventListener("click", function (e) {
      if (isOpen === true) {
        handleDocumentClick(e);
      }
    });
  }


  // 사이드메뉴 드롭다운
  const sideMenuDepthOneMenus = document.querySelectorAll(".side-menu-depth-1__item > a");
  if (sideMenuDepthOneMenus) {
    sideMenuDepthOneMenus.forEach((menu) => {
      menu.addEventListener("click", (e) => {
        e.preventDefault();
        const sideMenuDepthTwo = e.currentTarget.nextElementSibling;
        if (sideMenuDepthTwo) {
          sideMenuDepthTwo.classList.toggle("active");
        }
      });
    });
  }
}
export default sideMenuOpener;