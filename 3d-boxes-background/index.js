window.addEventListener('load',()=>{
    let  panel = document.querySelectorAll('.panel')

    //  获取操作节点
    // 给每个panel元素添加style属性
//    给panel添加点击事件
// 清楚其他active 只留下当前点击的类名
    //   console.log(panel);
    const list = [
       'https://images.unsplash.com/photo-1558979158-65a1eaa08691?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
    'https://images.unsplash.com/photo-1572276596237-5db2c3e16c5d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
      'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1353&q=80',
     'https://images.unsplash.com/photo-1551009175-8a68da93d5f9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1351&q=80',
     'https://images.unsplash.com/photo-1549880338-65ddcdfd017b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80'
    ]
    panel.forEach((item,index)=>{
       item.style =`background: url(${list[index]}) center center no-repeat `
        item.addEventListener('click',()=>{
            removeActiveClasses()
            item.classList.add('active')
        })
    })
    function removeActiveClasses() {
        panel.forEach(panel => {
            panel.classList.remove('active')
        })
    }
})