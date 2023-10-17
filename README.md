# 03-Green Sock
we chose this library because both of us think that animating objects is interesting. We wanted to create some interactive elements that would animate with the user's movements. 

as coders, we like the sturcture GreenSock has provided, and as designers, we both like the fact that even simple animations can change a lot of things. 

## Design & Process
initially, Pauline made an animated page where shapes would rotate and fade away on click. Using greensock's animation.to property, she's able to change the objects' duration, opacity, x,y units, colors, etc. and achieve this:

https://github.com/pancake0003/03-external-libraries/assets/146360951/5783d83b-cb7b-40a5-98fe-394f9dfee9e2

after this attempt, I (Joy) decided to add a little tweaking to the existing code. Firstly, I thought of making the page long enough so the user can scroll as they go:

https://github.com/pancake0003/03-external-libraries/assets/146360951/e0dfd06c-a5ff-4d06-9a6d-2b9386a39cdb

the backgrounds looked off, so using the wrap property from GreenSock, i made the background colors different.

https://github.com/pancake0003/03-external-libraries/assets/146360951/a4397fe5-2db6-482f-9903-e6013c0584d9

but the page didn't look very interesting, and this also brings another issue: we need to make the animations run when they are scrolled to, and reverse when we come back to them. 

I decided to start with the backgrounds again.
This took a long while to figure out, since it has to do with greensock's other property: ScrollTrigger and onToggle. After reading through several different gsap forum pages, I was eventually able to achieve this effect:

https://github.com/pancake0003/03-external-libraries/assets/146360951/266e30d2-f3cd-420f-924c-ede061053d2e

after mastering scrollTrigger's functions, the rest was easy: I added scrollTriggers for each of the shape elements, and made them animate on trigger. The hard part in animating shapes on scroll is that they have to set separate star and end points so that they play and reverse when scrolling back. [this example of ScrollTrigger really helped me understand things.](https://codepen.io/GreenSock/pen/GREbQXW?editors=0010)

The final render looks like this:

https://github.com/pancake0003/03-external-libraries/assets/146360951/5e699da1-d7ab-4e22-a7ee-543d3d1c3ed0

## Contributing
Pauline and Joy

(all the references, troubleshooting process and bug fixing are attaches in the [sketch.js](final/sketch.js) file as comment blocks.)
