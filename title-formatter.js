document.addEventListener('DOMContentLoaded', function() {
  // 处理post页面标题，将中英文分开显示
  const titleElements = document.querySelectorAll('.posts-page h1, .posts-page .page-title, h1:contains("最新消息Latest News")');
  
  titleElements.forEach(function(element) {
    const text = element.textContent;
    if (text.includes('最新消息Latest News')) {
      // 将中英文分开显示
      element.innerHTML = '最新消息<br>Latest News';
    }
  });
}); 