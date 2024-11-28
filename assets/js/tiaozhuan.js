document.addEventListener('DOMContentLoaded', function() {
  var links=document.querySelectorAll('a[href="#"]');

  links.forEach(function (links){
    links.addEventListener('click',function (events){
      events.preventDefault();
    })
      }

  )
  document.body.addEventListener('click', function(e) {
    // 检查点击的是否为锚点链接

    if (e.target.tagName === 'A' && e.target.hash) {
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

for (let i = 0; i < 2; i++) {
  const triggerLinkId = `triggerLink${i}`;
  const floatingWindowId = `floatingWindow${i}`;
  const docFrameId = `docFrame${i}`;

  const triggerLink = document.getElementById(triggerLinkId);
  const floatingWindow = document.getElementById(floatingWindowId);
  const docFrame = document.getElementById(docFrameId);

  // 鼠标悬停显示悬浮窗
  triggerLink.addEventListener('mouseover', () => {
    floatingWindow.style.display = 'block';
  });

  floatingWindow.addEventListener('mouseover', () => {
    floatingWindow.style.display = 'block';
  })
  // 鼠标移开隐藏悬浮窗
  triggerLink.addEventListener('mouseout', () => {
    floatingWindow.style.display = 'none';
  });

  floatingWindow.addEventListener('mouseout', () => {
    floatingWindow.style.display = 'none';
  });

  // 点击悬浮窗内容进入网页（在新标签页打开）
  triggerLink.addEventListener('click', () => {
    const href = docFrame.src;
    window.open(href, '_blank');
  });
}

$(document).ready(function () {
  const maxLength = 50; // 设置固定显示的字符长度
  $('.truncate-text').each(function () {
    const originalText = $(this).text();
    if (originalText.length > maxLength) {
      const truncatedText = originalText.slice(0, maxLength) + '... <a href="#" class="read-more">查看更多</a>';
      $(this).html(truncatedText);

      $(this).find('.read-more').click(function (e) {
        e.preventDefault();
        $(this).parent().text(originalText);
      });
    }
  });
});