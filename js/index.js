function switchLanguage(targetLang, event) {
  document.querySelectorAll('.language-btn').forEach(btn => {
    btn.classList.remove('active');
  });
  if (event) {
    event.currentTarget.classList.add('active');
  }

  //Two languages
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

//Set English
window.onload = function() {
  switchLanguage('en');
  
  //Set English botton
  const defaultBtn = document.querySelector('.language-btn[onclick*="switchLanguage(\'en\')"]');
  if (defaultBtn) defaultBtn.classList.add('active');
};