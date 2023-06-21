// header顶部导航，鼠标经过显示
function headerRightDivShow(){
    let rightIItem=document.querySelectorAll('header .right .login>div>a i');
    let menuList=document.querySelectorAll('header .right .login>div>div');
    let header=document.querySelector('header');
    let hoverTimer,leaveTimer1,leaveTimer2;
    rightIItem.forEach((el,key)=>{
        el.addEventListener('mouseenter',e=>{
            //不显示所有div
            menuList.forEach((el,index)=>{
                el.style.display='none';
            })
            //显示current div
            hoverTimer=setTimeout(function(){
                menuList.forEach((el,index)=>{
                    if(index==key){
                        el.style.display='block';
                    }
                    else{
                        el.style.display='none';
                    }
                })
            },200)
            clearTimeout(leaveTimer1);
            clearTimeout(leaveTimer2); 
        })
        //离开div
        el.parentElement.addEventListener('mouseleave',e=>{
            clearTimeout(hoverTimer);
            leaveTimer1=setTimeout(function(){
                menuList.forEach((el,index)=>{
                    el.style.display='none';
                })
            },500)
        })
    })
    //离开header
    header.addEventListener('mouseleave',function(){
        clearTimeout(hoverTimer);
        leaveTimer2=setTimeout(function(){
            menuList.forEach((el,index)=>{
                el.style.display='none';
            })
        },500)
    });
    
}
// 工作区侧边导航，鼠标点击切换
function dashboardDivShow(){
    let asets=document.querySelectorAll(".aside>a");
    let divsets=document.querySelectorAll(".main-content>div");
    let tag=true;
    let index=2;
    asets.forEach((el)=>{
        el.addEventListener('click',(e)=>{
            //console.log(e)
            if(tag){
                tag=false;
                asets.forEach(es=>{
                    es.className='';
                })
                let a=e.currentTarget;
                console.log(a);
                a.className='active';
                index=a.getAttribute('index')*1;
                
                divsets.forEach((div,key)=>{
                    if(key===index){
                        div.style.display='block';
                        tag=true;
                    }else{
                        div.style.display="none";
                    }
                })
            }
        });
    })
}
function startApp(){
    headerRightDivShow();
    dashboardDivShow();
}
//post传数据
function postCon(url, params) {
    return new Promise((resolve, reject) => {
        axios.post(url, params).then((res) => {
            resolve(res.data);
        }).catch((err) => {
            reject(err);
        })
    })
}
//get传数据
function getCon(url) {
    return new Promise((resolve, reject) => {
        axios.get(url).then((res) => {
            resolve(res.data);
        }).catch((err) => {
            reject(err);
        })
    })
}

//函数只是布局时切换，可改

window.addEventListener('load',startApp);
