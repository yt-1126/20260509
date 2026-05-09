// 綁event
document.getElementById('addButton').addEventListener('click', e => {
    var todo = document.getElementById('todoInput').value;
    //先抓原本的html
    var html = document.getElementById('todoList').innerHTML;
    //新增一個html
    html = html + '<li>' + todo + '</li>';
    //塞回去
    document.getElementById('todoList').innerHTML = html;
})