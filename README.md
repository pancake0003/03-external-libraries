# 03-Green Sock
we chose this library because both of us think that animating objects is interesting. We wanted to create some interactive elements that would animate with the user's movements. 

as coders, we like the sturcture GreenSock has provided, and as designers, we both like the fact that even simple animations can change a lot of things. 

## Design & Process
initially, Pauline made an animated page where shapes would rotate and fade away on click. Using greensock's animation.to property, she's able to change the objects' duration, opacity, x,y units, colors, etc. and achieve this:
https://youtu.be/7z9MQWejgqU

after this attempt, I (Joy) decided to add a little tweaking to the existing code. Firstly, I thought of making the page long enough so the user can scroll as they go:
https://youtu.be/wEWYXPr-bu8

the backgrounds looked off, so using the wrap property from GreenSock, i made the background colors different.
https://youtu.be/b1cgLieDAnQ

but the page didn't look very interesting, and this also brings another issue: we need to make the animations run when they are scrolled to, and reverse when we come back to them. 

I decided to start with the backgrounds again.
This took a long while to figure out, since it has to do with greensock's other property: ScrollTrigger and onToggle. After reading through several different gsap forum pages, I was eventually able to achieve this effect:
https://youtu.be/2TLPfcqzbmw

after mastering scrollTrigger's functions, the rest was easy: I added scrollTriggers for each of the shape elements, and made them animate on trigger. The hard part in animating shapes on scroll is that they have to set separate star and end points so that they play and reverse when scrolling back. [this example of ScrollTrigger really helped me understand things.](https://codepen.io/GreenSock/pen/GREbQXW?editors=0010)

The final render looks like this:
https://youtu.be/TRZKth_25WE

## Contributing
Pauline and Joy

(all the references, troubleshooting process and bug fixing are attaches in the [sketch.js](final/sketch.js) file as comment blocks.)