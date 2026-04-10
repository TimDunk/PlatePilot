/* 深粉色主题 */
:root {
  --color-pink: #c94c8c;
  --color-pink-dark: #b03f7a;
  --color-light: #fdf2f7;
}

/* 语言按钮 */
.lang-btn {
  border: 2px solid var(--color-pink) !important;
  background: transparent !important;
  color: var(--color-pink) !important;
  font-weight: 500;
  padding: 0.4rem 1rem !important;
  border-radius: 8px;
  margin-left: 0.4rem;
  transition: 0.2s;
}
.lang-btn:hover,
.lang-btn.active {
  background: var(--color-pink) !important;
  color: #fff !important;
}

/* 整体容器 */
.about-container {
  max-width: 800px;
}

/* 卡片样式 */
.about-card {
  border: 0;
  border-radius: 12px;
  background: var(--color-light);
  box-shadow: 0 2px 6px rgba(0,0,0,0.06);
}
.about-card h5 {
  color: var(--color-pink);
  font-weight: 700;
  margin-bottom: 1rem;
}

/* 粉色按钮 */
.btn-pink {
  background: var(--color-pink);
  color: #fff;
  border-radius: 8px;
  font-weight: 500;
}
.btn-pink:hover {
  background: var(--color-pink-dark);
  color: #fff;
}

footer {
  border-top: 1px solid #eee;
}

// 商家入驻表单提交
document.getElementById('merchantForm').addEventListener('submit', function (e) {
  e.preventDefault();
  alert('Information submitted successfully! We will contact you soon.\n信息已提交成功，我们将尽快与您联系。');
  this.reset();
});