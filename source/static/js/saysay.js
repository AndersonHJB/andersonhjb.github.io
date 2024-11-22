(function () {
  // 定义初始化函数
  function initializeSayTabs() {
    const mainContainer = document.querySelector('#saysay-main');
    if (!mainContainer) return; // 如果当前页面没有这个模块，则跳过

    const tabButtons = mainContainer.querySelectorAll('.tab-button');
    const tabContents = mainContainer.querySelectorAll('.say-item');

    tabButtons.forEach((button) => {
      // 防止重复绑定，先移除所有 click 事件
      button.removeEventListener('click', handleTabClick);
      button.addEventListener('click', handleTabClick);
    });

    function handleTabClick(event) {
      const button = event.currentTarget;
      const group = button.getAttribute('data-group');
      const index = button.getAttribute('data-index');

      // 切换按钮激活状态
      mainContainer
        .querySelectorAll(`.tab-button[data-group="${group}"]`)
        .forEach((btn) => btn.classList.remove('active'));
      button.classList.add('active');

      // 切换内容显示状态
      mainContainer
        .querySelectorAll(`.say-item[data-group="${group}"]`)
        .forEach((content) => content.classList.remove('active'));
      mainContainer
        .querySelector(`.say-item[data-group="${group}"][data-index="${index}"]`)
        .classList.add('active');
    }
  }

  // 初始化函数，支持首次加载和 PJAX 完成后调用
  function initSayTabsWithPJAX() {
    initializeSayTabs(); // 初次加载页面时初始化

    document.addEventListener('pjax:complete', () => {
      initializeSayTabs(); // PJAX 加载完成后重新初始化
    });
  }

  // DOM 加载完成后执行
  document.addEventListener('DOMContentLoaded', initSayTabsWithPJAX);
})();
