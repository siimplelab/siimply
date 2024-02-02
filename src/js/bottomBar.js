function bottomBar() {
  // 마우스오버 스타일 변경
  const bottomBarBtn = document.querySelectorAll(".bottom-bar__btn");

  function handleBottomBarHover(event) {
    const img = event.currentTarget.querySelector('img');
    if (img && !event.currentTarget.classList.contains("active")) {
      img.src = img.src.includes("gray") ? img.src.replace("gray", "purple") : img.src.replace("purple", "gray");
    }
  }
  if (bottomBarBtn) {
    bottomBarBtn.forEach((btn) => {
      btn.addEventListener("mouseover", handleBottomBarHover);
      btn.addEventListener("mouseout", handleBottomBarHover);
    });

  }

  // URL별 스타일 변경
  function getURLParameter(name) {
    var results = new RegExp('[\?&]' + name + '=([^&#]*)').exec(window.location.href);
    if (results == null) {
      return null;
    }
    return decodeURIComponent(results[1]) || 0;
  }

  function checkURLAndAddClass() {
    const parameterValue = getURLParameter('bo_table');
    const parameterValueContent = getURLParameter('co_id');
    const keywordsCommunity = ['customizing'];
    const keywordSellerApplication = ['seller_application'];
    const keywordsCS = ['cs'];
    const keywordMyPage = ['mypage'];
    const menuCommunity = '#bottom-bar__btn__community';
    const menuSellerApplication = '#bottom-bar__btn__seller-application';
    const menuCS = '#bottom-bar__btn__cs';
    const menuMyPage = '#bottom-bar__btn__mypage'

    // 커뮤니티 메뉴
    if (keywordsCommunity.includes(parameterValue)) {
      const elem = document.querySelector(menuCommunity);
      if (elem) {
        elem.classList.add('active');
        let elemImage = elem.querySelector('img');
        elemImage.src = elemImage.src.includes("gray") ? elemImage.src.replace("gray", "purple") : elemImage.src;
      }
    }
    // 셀러신청 메뉴
    if (keywordSellerApplication.includes(parameterValueContent)) {
      const elem = document.querySelector(menuSellerApplication);
      if (elem) {
        elem.classList.add('active');
        let elemImage = elem.querySelector('img');
        elemImage.src = elemImage.src.includes("gray") ? elemImage.src.replace("gray", "purple") : elemImage.src;
      }
    }
    // 고객센터 메뉴
    if (keywordsCS.includes(parameterValue)) {
      const elem = document.querySelector(menuCS);
      if (elem) {
        elem.classList.add('active');
        let elemImage = elem.querySelector('img');
        elemImage.src = elemImage.src.includes("gray") ? elemImage.src.replace("gray", "purple") : elemImage.src;
      }
    }
    // 마이페이지 메뉴
    if (keywordMyPage.includes(parameterValueContent)) {
      const elem = document.querySelector(menuMyPage);
      if (elem) {
        elem.classList.add('active');
        let elemImage = elem.querySelector('img');
        elemImage.src = elemImage.src.includes("gray") ? elemImage.src.replace("gray", "purple") : elemImage.src;
      }
    }
  }

  // 홈 메뉴
  const menuHome = '#bottom-bar__btn__home';

  function checkIfURLHasNoParameters() {
    var url = window.location.href;

    // Check if URL contains '?' which indicates parameters
    if (!url.includes('?')) {
      const elem = document.querySelector(menuHome);
      let elemImage = elem.querySelector('img');

      elemImage.src = elemImage.src.includes("gray") ? elemImage.src.replace("gray", "purple") : elemImage.src;
      elem.classList.add('active');
    }
  }

  // Execute the function when the window loads
  window.addEventListener('load', () => {
    if (bottomBarBtn.length > 0) {
      checkURLAndAddClass();
      checkIfURLHasNoParameters();
    }
  });
}

export default bottomBar;
