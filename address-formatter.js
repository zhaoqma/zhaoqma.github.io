document.addEventListener('DOMContentLoaded', function() {
  // 处理地址字段中的分号，将其转换为换行
  const addressElements = document.querySelectorAll('.contact-widget .address, .contact-widget .directions');
  
  addressElements.forEach(function(element) {
    if (element.textContent.includes('；')) {
      // 将分号替换为换行符
      element.innerHTML = element.textContent.replace(/；/g, '<br>');
    }
  });
}); 