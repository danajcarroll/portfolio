window.onload = function () {
// --------------- REMOTES ---------------
let leftJoycon = document.getElementById('leftRemote');
let rightJoycon = document.getElementById('rightRemote');

let buttons = document.getElementsByClassName('button');
let joysticks = document.getElementsByClassName('joyStick');

// --------------- SCREEN ---------------
let centerBlock = document.getElementById('centerBlock');
let screenBacking = document.getElementById('screenBacking');
let switchScreen = document.getElementById('switchScreen');
let totalSwitch = document.getElementById('totalSwitch');

let leftJoyAnimation = gsap.timeline({
    repeat: -1
});

leftJoyAnimation.to(leftJoycon, {
    autoAlpha: 1,
    opacity: 1,
    duration: .5,
    width: '2.5rem',
    height: '0rem',
})
.to(leftJoycon, {
    autoAlpha: 1,
    duration: .25,
    width: '2.5rem',
    height: '2rem',
    borderTopLeftRadius: '0rem',
    borderBottomLeftRadius: '0rem'
})
.to(leftJoycon, {
    autoAlpha: 1,
    duration: .5,
    width: '2.5rem',
    height: '1rem',
    borderTopLeftRadius: '0rem',
    borderBottomLeftRadius: '0rem'
}, )
.to(leftJoycon, {
    autoAlpha: 1,
    duration: .5,
    width: '3rem',
    height: '1rem',
    borderTopLeftRadius: '0rem',
    borderBottomLeftRadius: '0rem',

    rotate: '90deg'
})
.to(leftJoycon, {
    autoAlpha: 1,
    duration: .5,
    width: '3rem',
    height: '8rem',
    borderTopLeftRadius: '0rem',
    borderBottomLeftRadius: '0rem',

    rotate: '90deg'
})
.to(leftJoycon, {
    autoAlpha: 1,
    duration: .5,
    width: '3rem',
    height: '8rem',
    borderTopLeftRadius: '1rem',
    borderBottomLeftRadius: '1rem',

    rotate: '0deg'
} , 3)
.to(leftJoycon, {
    autoAlpha: 0,
    duration: 0.5,
    width: '3rem',
    height: '8rem',
    borderTopLeftRadius: '1rem',
    borderBottomLeftRadius: '1rem',

    rotate: '0deg'
} , 7 );

let rightJoyAnimation = gsap.timeline({
    repeat: -1
});

rightJoyAnimation.to(rightJoycon, {
    autoAlpha: 1,
    opacity: 1,
    duration: .5,
    width: '2.5rem',
    height: '0rem',
})
.to(rightJoycon, {
    autoAlpha: 1,
    duration: .25,
    width: '2.5rem',
    height: '2rem',
    borderTopRightRadius: '0rem',
    borderBottomRightRadius: '0rem'
})
.to(rightJoycon, {
    autoAlpha: 1,
    duration: .5,
    width: '2.5rem',
    height: '1rem',
    borderTopRightRadius: '0rem',
    borderBottomRightRadius: '0rem'
}, )
.to(rightJoycon, {
    autoAlpha: 1,
    duration: .5,
    width: '3rem',
    height: '1rem',
    borderTopRightRadius: '0rem',
    borderBottomRightRadius: '0rem',

    rotate: '90deg'
})
.to(rightJoycon, {
    autoAlpha: 1,
    duration: .5,
    width: '3rem',
    height: '8rem',
    borderTopRightRadius: '0rem',
    borderBottomRightRadius: '0rem',

    rotate: '90deg'
})
.to(rightJoycon, {
    autoAlpha: 1,
    duration: .5,
    width: '3rem',
    height: '8rem',
    borderTopRightRadius: '1rem',
    borderBottomRightRadius: '1rem',

    rotate: '0deg'
} , 3)
.to(rightJoycon, {
    autoAlpha: 0,
    duration: 0.5,
    width: '3rem',
    height: '8rem',
    borderTopRightRadius: '1rem',
    borderBottomRightRadius: '1rem',

    rotate: '0deg'
} , 7);

let buttonsAnimation = gsap.timeline({
    repeat: -1,
});

buttonsAnimation.to(buttons, {
    autoAlpha: 1,
    opacity: 1,
    duration: .25,
    width: '0rem',
    height: '0rem',
} , 2)
.to(buttons, {
    autoAlpha: 1,
    duration: .25,
    width: '0.85rem',
    height: '0.85rem',
})
.to(buttons, {
    autoAlpha: 1,
    duration: .1,
    width: '0.75rem',
    height: '0.75rem',
})
.to(buttons, {
    autoAlpha: 0,
    duration: 0.5,
    width: '0.75rem',
    height: '0.75rem',
}, 7 );

let joystickAnimation = gsap.timeline({
    repeat: -1,
});

joystickAnimation.to(joysticks, {
    autoAlpha: 1,
    opacity: 1,
    duration: .25,
    width: '0rem',
    height: '0rem',
} , 2)
.to(joysticks, {
    autoAlpha: 1,
    duration: .25,
    width: '1.6rem',
    height: '1.6rem',
})
.to(joysticks, {
    autoAlpha: 1,
    duration: .1,
    width: '1.5rem',
    height: '1.5rem',
})
.to(joysticks, {
    autoAlpha: 0,
    duration: 0.5,
    width: '1.5rem',
    height: '1.5rem',
} , 7);

let centerblockAnimation = gsap.timeline({
    repeat: -1,
});

centerblockAnimation.to(centerBlock, {
    autoAlpha: 1,
    opacity: 1,
    duration: .5,
    width: '12rem',
    height: '0rem',
} , 3)
.to(centerBlock, {
    autoAlpha: 1,
    duration: .5,
    width: '12rem',
    height: '8rem',
})
.to(centerBlock, {
    autoAlpha: 0,
    duration: 0.5,
    width: '12rem',
    height: '8rem',
} , 7 );

let screenBackingAnimation = gsap.timeline({
    repeat: -1,
});

screenBackingAnimation.to(screenBacking, {
    autoAlpha: 1,
    opacity: 1,
    duration: .5,
    width: '0rem',
    height: '7.25rem',
} , 3.5)
.to(screenBacking, {
    autoAlpha: 1,
    duration: .5,
    width: '11.25rem',
    height: '7.25rem',
})
.to(screenBacking, {
    autoAlpha: 0,
    duration: 0.5,
    width: '11.25rem',
    height: '7.25rem',
} , 7 );

let switchscreenAnimation = gsap.timeline({
    repeat: -1,
});

switchscreenAnimation.from(switchScreen, {
    autoAlpha: 0,
    opacity: 0,
    duration: .5
} , 4.75)
.to(switchScreen, {
    autoAlpha: 1,
    opacity: 1,
    duration: .5
})
.to(switchScreen, {
    autoAlpha: 0,
    opacity: 0,
    duration: 0.5
} , 7 );










}
