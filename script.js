const sky = document.querySelector('.sky');
for(let i = 0; i < 3; i++){
    const cloud = document.createElement('div');
    cloud.classList.add('cloud');
    cloud.style.left = `${-200 * i}px`;
    sky.appendChild(cloud);
}