// 语言切换核心逻辑
function switchLanguage(targetLang, event) {
  // 1. 切换按钮高亮（修复 event 报错）
  document.querySelectorAll('.language-btn').forEach(btn => {
    btn.classList.remove('active');
  });
  if (event) {
    event.currentTarget.classList.add('active');
  }

  // 2. 切换所有文字（兼容 language-en + lang-en）
  const enElements = document.querySelectorAll('.language-en, .lang-en');
  const cnElements = document.querySelectorAll('.language-cn, .lang-cn');
  
  if (targetLang === 'en') {
    enElements.forEach(el => el.style.display = 'block');
    cnElements.forEach(el => el.style.display = 'none');
    document.documentElement.lang = 'en';
  } else {
    enElements.forEach(el => el.style.display = 'none');
    cnElements.forEach(el => el.style.display = 'block');
    document.documentElement.lang = 'zh-CN';
  }
}

// 页面加载默认英文
window.onload = function() {
  switchLanguage('en');
  
  // 默认高亮英文按钮
  const defaultBtn = document.querySelector('.language-btn[onclick*="switchLanguage(\'en\')"]');
  if (defaultBtn) defaultBtn.classList.add('active');
};