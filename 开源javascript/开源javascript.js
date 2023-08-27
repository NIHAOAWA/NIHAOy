// 获取 DOM 元素
const nameElement = document.getElementById('name');
const ageElement = document.getElementById('age');
const bioElement = document.getElementById('bio');
const submitButton = document.getElementById('submit');

// 定义表单提交函数
function handleSubmit(event) {
  event.preventDefault(); // 阻止表单默认提交行为

  // 获取输入值
  const name = nameElement.value;
  const age = ageElement.value;
  const bio = bioElement.value;
  
  // 显示提交的信息
  alert(`姓名：${name}\n年龄：${age}\n个人简介：${bio}`);
}

// 监听提交按钮点击事件
submitButton.addEventListener('click', handleSubmit);