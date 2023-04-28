
const videoElement = document.getElementById('video');
const button = document.getElementById('button');

async function selectMediaScreen(){
    try{
        const mediaStream = await window.navigator.mediaDevices.getDisplayMedia(); 

        videoElement.srcObject = mediaStream;
        videoElement.onloadedmetadata = ()=>{
            videoElement.play();
            
            videoElement.requestPictureInPicture(); // picture in picture directly 
        }
        
    }
    catch(e){
        alert(e);
    }
}

button.addEventListener('click', async()=>{
    selectMediaScreen();
})


