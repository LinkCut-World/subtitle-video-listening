let input_container=document.querySelector("#input-container");
let input=document.querySelector("input");
let video_container=document.querySelector("#video-container");
let block=document.querySelector("#inner");
let video=document.querySelector("video");
let up=document.querySelector("#up");
let down=document.querySelector("#down");
let back=document.querySelector("#back");
let cont=document.querySelector("#continue");
let st=0;
let ed=-114;
let flag=0;
let block_h=20;
block.style.height=block_h+"%";

input.addEventListener("change",function(event){
    let file=input.files[0];
    let url=URL.createObjectURL(file);
    video.src=url;
    st=flag=0;
    ed=-114;
    block_h=20;
    block.style.height=block_h+"%";
    block.style.visibility="visible";
});

video.addEventListener("loadedmetadata",function(){
    let w=parseFloat(window.getComputedStyle(document.body).getPropertyValue('width'));
    let h=window.innerHeight-parseFloat(window.getComputedStyle(input_container).getPropertyValue('height'));
    let r=video.videoWidth/video.videoHeight;
    if(h*r<=w) w=h*r;
    else h=w/r;
    video_container.style.width=w+"px";
    video_container.style.height=h+"px";
});

up.addEventListener("click",function(){
    if(block_h<50) block_h++;
    block.style.height=block_h+"%";
});

down.addEventListener("click",function(){
    if(block_h>0) block_h--;
    block.style.height=block_h+"%";
});

function reachEnd(){
    if(ed!=-114&&video.currentTime>=ed){
        flag=1;
        video.pause();
        video.removeEventListener("timeupdate",reachEnd);
    }
};

back.addEventListener("click",function(){
    ed=video.currentTime;
    if(!flag) ed--;
    flag=0;
    video.currentTime=st;
    video.addEventListener("timeupdate",reachEnd);
    block.style.visibility="hidden";
    video.play();
});

cont.addEventListener("click",function(){
    flag=0;
    ed=-114;
    st=video.currentTime;
    block.style.visibility="visible";
    video.play();
});

document.addEventListener("keyup",function(event){
    if(event.key.toLowerCase()==='a'){
        back.click();
    }
    else if(event.key.toLowerCase()=='d'){
        cont.click();
    }
    else if(event.key.toLowerCase()=='s'){
        if(video.paused){
            video.play();
        }else{
            video.pause();
        }
    }
});