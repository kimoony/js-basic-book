const coverImage = document.querySelector('#cover');
coverImage.onclick = () => alert('눌렀습니다.');
coverImage.onmouseover = () => coverImage.style.border = "5px black solid";
coverImage.onmouseout = () => coverImage.style.border = "";