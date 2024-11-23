document.addEventListener('DOMContentLoaded', function() {
  document.body.addEventListener('click', function(e) {
    // 检查点击的是否为锚点链接
    if (e.target.tagName === 'A' && e.target.hash) {
      e.preventDefault(); // 阻止默认行为
      var targetId = e.target.hash.slice(1);
      var targetElement = document.getElementById(targetId);

      if (targetElement  && targetId !== 'menu') {
        // 计算目标元素的位置
        var elementRect = targetElement.getBoundingClientRect();
        var absoluteElementTop = elementRect.top + window.pageYOffset;
        // 将目标位置设置为视窗高度的40%处（中间偏上）
        var offsetPosition = absoluteElementTop - (window.innerHeight * 0.3);

        // 平滑滚动到目标位置
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    }
  });
});