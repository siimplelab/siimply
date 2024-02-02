document.addEventListener("DOMContentLoaded", function () {
  /*****************************
   * * 엘리먼트 랜더링 대기 함수
   *****************************/
  async function waitForElement(selector, callback) {
    while (document.querySelector(selector) === null) {
      await new Promise(resolve => setTimeout(resolve, 50));
    }
    callback();
  }

  async function waitForElements(selectors, callback) {
    // Wait until all elements are present
    while (!selectors.every(selector => document.querySelector(selector))) {
      await new Promise(resolve => setTimeout(resolve, 50));
    }
    callback();
  }

  /***********************
   * * 데이트피커
   ***********************/
  waitForElement('#datepickerStart', () => {
    var defaultDate = new Date();

    $("#datepickerStart").datepicker({
      onSelect: function (dateText, inst) {
        this.value = dateText; // or $(this).val(dateText);
      },
      defaultDate: defaultDate,
      dateFormat: "yy년 mm월 dd일", // Korean date format
      closeText: "닫기",
      currentText: "오늘",
      prevText: '이전 달',
      nextText: '다음 달',
      monthNames: ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'],
      monthNamesShort: ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'],
      dayNames: ['일', '월', '화', '수', '목', '금', '토'],
      dayNamesShort: ['일', '월', '화', '수', '목', '금', '토'],
      dayNamesMin: ['일', '월', '화', '수', '목', '금', '토'],
      weekHeader: "주",
      yearSuffix: '년'
    });

    $("#datepickerEnd").datepicker({
      onSelect: function (dateText, inst) {
        this.value = dateText; // or $(this).val(dateText);
      },
      defaultDate: defaultDate,
      dateFormat: "yy년 mm월 dd일", // Korean date format
      closeText: "닫기",
      currentText: "오늘",
      prevText: '이전 달',
      nextText: '다음 달',
      monthNames: ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'],
      monthNamesShort: ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'],
      dayNames: ['일', '월', '화', '수', '목', '금', '토'],
      dayNamesShort: ['일', '월', '화', '수', '목', '금', '토'],
      dayNamesMin: ['일', '월', '화', '수', '목', '금', '토'],
      weekHeader: "주",
      yearSuffix: '년'
    });

    $("#datepickerStart").val($.datepicker.formatDate('yy년 mm월 dd일', defaultDate));
    $("#datepickerEnd").val($.datepicker.formatDate('yy년 mm월 dd일', defaultDate));
  });

  /**********
   * * ANCHOR 백버튼
   **********/
  const backButtons = document.querySelectorAll('[data-name="backButton"]');
  const backButton = document.querySelector('[data-name="backButton"]');

  function initBackButtons() {
    backButtons.forEach((elem) => {
      elem.addEventListener("click", function () {
        window.history.back();
      });
    });
  }

  function initBackButton() {
    backButton.addEventListener("click", function () {
      window.history.back();
    });
  }

  // waitForElement(backButton, initBackButton);

  /************
   * * ANCHOR 체크박스
   ************/
  document.querySelectorAll('[data-name="checkboxInput"]').forEach(function (checkbox) {
    checkbox.addEventListener('change', function () {
      console.log('Checkbox ID: ' + this.id + ', State: ' + this.checked);
    });
  });

  /*********************
   * * 아코디언 (수정)
   *********************/
  function initAccordion() {
    const accordions = document.querySelectorAll('[data-js-accordion-item]');
  
    accordions.forEach(accordion => {
      const header = accordion.querySelector('[data-js-accordion-header]');
      const content = accordion.querySelector('[data-js-accordion-content]');
      const isDefaultOpen = accordion.getAttribute('data-default-open') === 'true';
  
      // Set initial state based on data-default-open attribute
      header.setAttribute('aria-expanded', isDefaultOpen);
      content.style.height = isDefaultOpen ? content.scrollHeight + 'px' : '0';
  
      header.addEventListener('click', () => {
        const isOpen = header.getAttribute('aria-expanded') === 'true';
        header.setAttribute('aria-expanded', !isOpen);
        content.style.height = isOpen ? '0' : content.scrollHeight + 'px';
      });
    });
  
    // Function to close all accordions
    function closeAccordions() {
      accordions.forEach(accordion => {
        const header = accordion.querySelector('[data-js-accordion-header]');
        const content = accordion.querySelector('[data-js-accordion-content]');
      
        header.setAttribute('aria-expanded', false);
        content.style.height = '0';
      });
    }
  
    // Event listener for window resize
    window.addEventListener('resize', () => {
      if (window.innerWidth < 1024) {
        closeAccordions();
      }
    });
  
    // Close accordions on initial load if window width is less than 1024px
    if (window.innerWidth < 1024) {
      closeAccordions();
    }
  }
  
  // const toggles = document.querySelectorAll('[data-name="accordionToggle"]');

  // function initToggles() {
  //   toggles.forEach(toggle => {
  //     const content = toggle.parentElement.nextElementSibling;
  //     if (toggle.classList.contains('--active')) {
  //       content.style.maxHeight = content.scrollHeight + 'px';
  //     }

  //     toggle.addEventListener('click', function () {
  //       this.classList.toggle('--active');
  //       if (content.style.maxHeight) {
  //         content.style.maxHeight = null;
  //       } else {
  //         content.style.maxHeight = content.scrollHeight + 'px';
  //       }
  //     });
  //   });
  // }

  waitForElements(['#slider-range', '[data-name="checkboxInput"]'], () => {
    setTimeout(() => {
      // initToggles();
      initAccordion();
    }
      , 100)
  });

  /*******************
   * * ANCHOR 슬라이더 레인지
   *******************/
  function initSliderRange() {
    $("#slider-range").slider({
      range: true,
      min: 0,
      max: 10000,
      values: [100, 1500],
      slide: function (event, ui) {
        $("#range-value-1").val(ui.values[0] + '만원');
        $("#range-value-2").val(ui.values[1] + '만원');
      }
    });
    $("#range-value-1").val($("#slider-range").slider("values", 0) + ' 만원');
    $("#range-value-2").val($("#slider-range").slider("values", 1) + ' 만원');
  }

  waitForElement('#slider-range', initSliderRange);

  /*******************
   * * ANCHOR 스텝퍼
   *******************/
  function initStepper() {
    const steppers = document.querySelectorAll('.stepper');

    steppers.forEach(stepper => {
      const input = stepper.querySelector('.stepper-input');
      const minusBtn = stepper.querySelector('.stepper-minus');
      const plusBtn = stepper.querySelector('.stepper-plus');

      minusBtn.addEventListener('click', () => {
        let currentValue = parseInt(input.value, 10);
        input.value = Math.max(0, currentValue - 1); // Prevents negative values
        input.setAttribute('aria-valuenow', input.value);
      });

      plusBtn.addEventListener('click', () => {
        let currentValue = parseInt(input.value, 10);
        input.value = currentValue + 1;
        input.setAttribute('aria-valuenow', input.value);
      });

      input.addEventListener('input', () => {
        input.value = input.value.replace(/[^0-9]/g, '');
        input.setAttribute('aria-valuenow', input.value);
      });
    });
  }

  if (document.querySelector('.stepper')) {
    initStepper();
  }

  /*********************
   * * 드롭다운
   *********************/
  function initDropdown() {
    // Query all dropdown buttons
    const dropdownButtons = document.querySelectorAll('[data-type="dropdown"] button');

    // Function to toggle dropdown
    function toggleDropdown(event) {
      let currentButton = event.target;
      let currentContent = currentButton.nextElementSibling;
      let expanded = currentButton.getAttribute('aria-expanded') === 'true';

      // Set the expanded state on the button that was clicked
      currentButton.setAttribute('aria-expanded', !expanded);
      // Toggle the display of the associated dropdown content
      currentContent.style.display = expanded ? 'none' : 'block';
    }

    // Add click event listener to each dropdown button
    dropdownButtons.forEach(button => {
      button.addEventListener('click', toggleDropdown);
    });

    // Click event listener for the document to handle closing dropdowns
    document.addEventListener('click', function (event) {
      // If the clicked target is not a dropdown button or a descendant of a dropdown-content
      if (!event.target.matches('.dropdown button') && !event.target.closest('.dropdown-content')) {
        // Close all dropdowns
        dropdownButtons.forEach(button => {
          button.setAttribute('aria-expanded', 'false');
          button.nextElementSibling.style.display = 'none';
        });
      }
    });
  }

  if (document.querySelector('[data-type="dropdown"]')) {
    initDropdown();
  }

  /*********************
   * * 드롭다운 셀렉트
   *********************/
  function setupDropdownSelect(dropdownSelector) {
    document.querySelectorAll(dropdownSelector).forEach(dropdownSelect => {
      const valueInput = dropdownSelect.querySelector('[data-dropdown-value]');
      const toggle = dropdownSelect.querySelector('[data-dropdown-toggle]');
      const menu = dropdownSelect.querySelector('[data-dropdown-menu]');
      const options = dropdownSelect.querySelectorAll('[data-dropdown-option]');

      let focusedOptionIndex = -1;

      function closeDropdown() {
        toggle.setAttribute('aria-expanded', 'false');
        menu.classList.add('hidden');
        focusedOptionIndex = -1;
      }

      toggle.addEventListener('click', () => {
        const isExpanded = toggle.getAttribute('aria-expanded') === 'true';
        toggle.setAttribute('aria-expanded', !isExpanded);
        menu.classList.toggle('hidden');

        if (!isExpanded) {
          if (options.length > 0) {
            options[0].focus();
            focusedOptionIndex = 0;
          }
        } else {
          focusedOptionIndex = -1;
        }
      });

      options.forEach((option, index) => {
        option.addEventListener('click', () => {
          const value = option.getAttribute('value');
          const text = option.textContent;

          toggle.textContent = text;
          valueInput.value = value;
          closeDropdown();
        });

        option.addEventListener('keydown', (event) => {
          switch (event.key) {
            case 'Enter':
            case ' ':
              event.preventDefault();
              selectOption(option);
              break;
            case 'ArrowUp':
              event.preventDefault();
              if (index > 0) {
                options[index - 1].focus();
                focusedOptionIndex = index - 1;
              }
              break;
            case 'ArrowDown':
              event.preventDefault();
              if (index < options.length - 1) {
                options[index + 1].focus();
                focusedOptionIndex = index + 1;
              }
              break;
          }
        });
      });

      function selectOption(option) {
        const value = option.getAttribute('value');
        const text = option.textContent;

        toggle.textContent = text;
        valueInput.value = value;
        closeDropdown();
      }

      toggle.addEventListener('keydown', (event) => {
        switch (event.key) {
          case 'ArrowDown':
            event.preventDefault();
            if (!menu.classList.contains('hidden') && focusedOptionIndex < options.length - 1) {
              focusedOptionIndex++;
              options[focusedOptionIndex].focus();
            } else {
              menu.classList.remove('hidden');
              toggle.setAttribute('aria-expanded', true);
              if (options.length > 0) {
                focusedOptionIndex = 0;
                options[0].focus();
              }
            }
            break;
          case 'Escape':
            event.preventDefault();
            closeDropdown();
            break;
        }
      });

      // Close dropdown when clicking outside
      document.addEventListener('click', (event) => {
        if (!dropdownSelect.contains(event.target)) {
          closeDropdown();
        }
      });

      // Prevent document click from closing when clicking inside dropdown
      dropdownSelect.addEventListener('click', (event) => {
        event.stopPropagation();
      });
    });
  }

  // Initialize all dropdown selects
  setupDropdownSelect('[data-dropdown]');


  /******************************
   * * ANCHOR 메인메뉴 - 모바일
   ******************************/
  function initMobileMenu() {
    const mobileMenu = document.querySelector('#topNavMenu');
    const mobileMenuToggle = document.querySelector('#topNavToggle');

    function toggleMenu() {
      if (window.matchMedia('(max-width: 1023px)').matches) {
        mobileMenu.classList.toggle('max-lg:hidden');
      }
    }

    mobileMenuToggle.addEventListener('click', toggleMenu);
  }

  if (document.querySelector('#topNavMenu')) {
    initMobileMenu();
  }

  /******************************
   * * ANCHOR 메인필터 - 모바일
   ******************************/
  function initMobileFilter() {
    const mobileFilter = document.querySelector('#mainFilter');
    const mobileFilterToggle = document.querySelector('#mainFilterToggle');

    function toggleFilter() {
      if (window.matchMedia('(max-width: 1023px)').matches) {
        mobileFilter.classList.toggle('max-lg:hidden');
      }
    }

    mobileFilterToggle.addEventListener('click', toggleFilter);
  }

  if (document.querySelector('#mainFilter')) {
    initMobileFilter();
  }

  /********************************
   * * ANCHOR 데이터필터 - 모바일
   ********************************/
  const tabsComponent = {
    init: function () {
      this.updateTabFromURL();
      window.addEventListener('hashchange', this.updateTabFromURL.bind(this));
    },

    updateTabFromURL: function () {
      const hash = window.location.hash;
      const activeTab = document.querySelector(`[data-tab-target="${hash.substring(1)}"]`);
      if (activeTab) {
        this.activateTab(activeTab);
      }
    },

    activateTab: function (tab) {
      let tabsContainer = tab.closest('.tabs');
      let tabId = tab.getAttribute('data-tab-target');

      // Update tabs
      tabsContainer.querySelectorAll('[data-tab-target]').forEach(t => {
        t.setAttribute('aria-selected', 'false');
      });
      tab.setAttribute('aria-selected', 'true');

      // Update panels
      tabsContainer.querySelectorAll('[data-tab-content]').forEach(p => {
        p.hidden = p.getAttribute('data-tab-content') !== tabId;
      });
    }
  };

  if (document.querySelector('[data-tabs]')) {
    tabsComponent.init();
  }

  /**********
   * * 모달
   **********/
  class Modal {
    constructor(modalSelector, triggerSelector, closeSelector) {
      this.modal = document.querySelector(modalSelector);
      this.triggerButton = document.querySelector(triggerSelector);
      this.closeButton = document.querySelector(closeSelector);

      this.init();
    }

    init() {
      this.triggerButton.addEventListener('click', () => this.show());
      this.closeButton.addEventListener('click', () => this.hide());
      window.addEventListener('click', (event) => {
        if (event.target === this.modal) {
          this.hide();
        }
      });
      document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape') {
          this.hide();
        }
      });
    }

    show() {
      this.modal.classList.remove('hidden');
      this.modal.querySelector('[role="dialog"]').focus();
    }

    hide() {
      this.modal.classList.add('hidden');
    }
  }

  function handleModalOperation() {
    const myModal = new Modal('[data-modal]', '#openModal', '[data-close-modal]');
  }

  waitForElement('[data-modal]', handleModalOperation);

  /************
   * * 라디오
   ************/
  function setupRadioButtons() {
    document.querySelectorAll('input[type="radio"][data-radio]').forEach(radio => {
      radio.addEventListener('change', () => {
        // Any additional functionality needed on radio change
        console.log(`Radio value changed to: ${radio.value}`);
      });
    });
  }

  setupRadioButtons();
});
