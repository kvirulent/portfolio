// Simple navigation UI. Specifying previous_route sets the back button redirect to that route.
"use client";
import { useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';

interface NanoProps {
    previous_route?: string,
    home_route?:string,
    directory?:string
}

const Nano = ({ previous_route, home_route, directory }: NanoProps) => {
    const [time, setTime] = useState(new Date())
    const router = useRouter();

    useEffect(() => {
        setTimeout(() => {
            setTime(new Date())
        }, 1000)
    })

    function getTimeFormatted() {
        return `${time.getHours() < 10 ? `0${time.getHours()}` : time.getHours()}:${time.getMinutes() < 10 ? `0${time.getMinutes()}` : time.getMinutes()}:${time.getSeconds() < 10 ? `0${time.getSeconds()}` : time.getSeconds()}`
    }

    function redirectBack() {
        if (previous_route) {
            router.push(previous_route)
        } else {
            router.back()
        }
    };

    function redirectHome() {
        if (home_route) {
            router.push(home_route)
        } else {
            router.push("/index-nostartup")
        }
    }
    
    return(
        <div className="z-[40] mt-[-20px] fixed w-full bg-orange-600 text-black flex flex-row pl-5 pr-5">
            <p className="flex-1">{getTimeFormatted()} {directory}</p>
            <div className="flex flex-row">
                <p className="cursor-pointer pl-2 pr-2 hover:text-amber" onClick={redirectBack}>&lt;</p>
                <p className="cursor-pointer pl-2 pr-2 hover:text-amber" onClick={redirectHome}>⌂</p>
            </div>
        </div>
    )
}
 
export default Nano;

/* 

18:31 12/19/2024
old nano code, CSS inexplicably broke probably due to me changing a tag for something else and it breaking this
i also didn't like the design as it's intrusive to the content's visibility (obscures everything behind it, in the middle of the page, isn't very small, no good)

<div className="z-[40] fixed bottom-0 m-5 text-amber blur-[0.5px]">
    <ul className="flex flex-row">
        <li className="m-2 box-glow hover:noglow"><button className="p-[2px] text-black hover:text-amber" onClick={redirectBack}>&lt;</button></li>
        <li className="m-2 box-glow hover:noglow"><button className="p-[2px] text-black hover:text-amber" onClick={redirectHome}>⌂</button></li>
        <li className="m-2 box-glow hover:noglow"><button className="p-[2px] text-black hover:text-amber" onClick={redirectForward}>&gt;</button></li>
    </ul>
</div>

18:52 12/19/2024
nvm this is some kind of layout issue :(
rewrote it, just z-[40] fixed bottom-5 right-5 and still sits under all the content. time to hunt for what's causing this!
i looked through the DOM several times before and couldn't find anything that'd be affecting it, so now i'm going to start obliterating stuff until it stops happening
scorched earth

19:31 12/19/2024
i attempted to diagnose the issue by moving it up the DOM tree until the fixed positioning was properly displayed
it seems to not like being in the same element as the page content, because once it is removed from the blurred div (parents of both it and a div containing page contents)
it positions itself properly, however when inside the content container it positions itself relatively to the container, not the viewport

2:21 12/20/2024
ive updated the layout for the /pages/ directory. its now just a fragment containing this module and a div to contain content:

<>
    <Nano />
    <div className="min-h-screen flex justify-center">
        
        <div className="m-5">
            {children}
        </div>
    </div>
</>

still, this just puts it directly under the blurred div which it doesn't like being in alongside the content
very lost, very sleepy...
i am just so inextricably lost on what could possibly be causing the div to just not position properly

15:07 12/20/2024
small addendum to my last entry: i attempted to merge the mdiv that applies the margin and the div that applies the flex, centering, and min-h
i also tried simply removing the container div and putting both the content and this module in the fragment directly:

<>
    <Nano />
    {children}
</>

no results, it is still stuck...

one last addition, i wanted to catalogue a few redesign ideas for the navigation
1> a top bar similar to macOS's top bar with the time, filename, and navigation controls
2> a more low-profile option, just controls in the bottom right corner

to clarify, controls are:
a button to go back to the last page
a button to go to the home page
a button to go to the next page

not sure how i want them to work, im considering this for the yapping page and maybe the controls will
send you forward/backward in the order of the blog pages, not with the actual page you visited before or after
mostly because a forward button is kind of useless (why would you need to go forward? and why would you use 
the button on the website instead of the browser controls), and a back button is just a more verbose home button, so also useless
smart guy told me the best ux is no ux.... hrm hrm hrm hrmmm :)

now resuming your normal programming...

15:20 12/20/2024
turns out changing the tag structure of the page did break some stuff
the webring and socials page are no longer center-aligned.. i am reverting the change now

am back. reverted several changes. the structure is now:
<div className="min-h-screen flex justify-center m-5"> 
        <Nano />
        {children}
</div>

no more fragment, they share the same div now. still confused how the fixed object just.. isnt fixed?
im considering just making it conditionally visible on the /pages/ directory, but that feels cheaty, this should work without that

15:37 12/20/2024
continuing attempts to isolate the issue, still unsuccessful! 
i attempted to change the content inside the div to just be a scrollable page using text and linebreaks
no result, nano is still pinned in the bottom right corner...

setting the content to be fixed also results in the same issue for it
so, this leads me onto one thing, that everything in the div is just broken
next thing to try is to remove all the tags from the parent div
i know that will break the page layout, but if it will fix the positioning issue, then ill have found my problem at least

IM BACK AND I HAVE SOMETHING TO SAY.
it's the blur. what the fuck. i dont care why but it's fixed

new problem: the crt filter element is now offset 20 pixels down for no reason, so im going to fix that now
hopefully it doesnt take me two days
fixed in 30s: the crt was absolute and being affected when its parent moved for some reason. it is now fixed
anyway, now i can start making the damn module again

nvm, there's an actual layout problem, the body tag is being pushed down 20px for no reason

16:00 12/20/2024
i have failed to create any better solution or find the issue with my layout, so i am remedying the issue 
by just moving the nano module 20 pixels up:  mt-[-20px]
idc anymore

*/