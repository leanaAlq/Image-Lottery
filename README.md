# Image-Lottery
100 image lottery web page

## Description
applying shuffle effect to 100 images then picking a random image from them as the winner image.

## Built With
- HTML
- Javascript
- jQuery
- CSS
## How To Reuse this code with your own image collection? 
- Place 100 (origianl size) images in the images folder.
- Place 100 resized images (150 * 80) in the images/small folder.
- uncomment theses parts: 
```javascript
box.style.background = `url("small/IMG_${randomWinner()}.jpg")`;
```
```
$("img.result").attr(
  //     "src", `images/IMG_${randomWinner()}.jpg`);
```
- comment/ delete these parts: 
```
 box.style.background = `url("https://picsum.photos/150/80/?image=1${randomnumber()}")`;
```
```
$("img.result").attr(
    "src",
    `https://picsum.photos/500/300/?image=1${randomnumber()}
    `
  );
```
- the code is based on images with the following pattern: IMG_{0000}.jpg, you can modify it to suit your own pattern.
- Contact me for any questions or suggested improvemnets (: 
## Credit

- This code is based on [FlorinPop17](https://github.com/florinpop17) [Image Shuffled Animation](https://codepen.io/FlorinPop17/pen/MEYrJW).
- Images in the Demo are from : [Lorem Picsum](https://picsum.photos/)
## Preview

### Start Page
![1](./assets/images/readme/1.png)
### Animation
![2](./assets/images/readme/2.png)
### Random Winner
![3](./assets/images/readme/3.png)
