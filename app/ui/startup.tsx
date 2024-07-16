//@ts-nocheck
"use client";
import { useState, useEffect } from 'react';
import Typewriter from '@/app/ui/typewriter';

const Startup = () => {
    const [isActive, setIsActive] = useState(true);

    useEffect(() => {
        document.body.style.overflow = 'hidden';

        const timer = setTimeout(() => {
            setIsActive(false);
            document.body.style.overflow = 'scroll'
        }, 6000)

        return () => clearTimeout(timer);
    }, []);
                                                        {/* SHUT TH EFUCK UP TYPESCRIPT!!!!!11!! */}
    return ( 
        <div className={isActive ? "text-console-green glow fixed inset-0 z-50 p-4 opacity-100 pointer-events-none whitespace-pre" : "hidden"}>
            <p>c:\system\notporn&gt; <Typewriter text="cd .." delay={100} begin_delay={10} /></p>
            <Typewriter text="c:\system\>" delay={0} begin_delay={530} /> <Typewriter text="cd tools" delay="100" begin_delay={620} /> <br/>
            <Typewriter text="c:\system\tools>" delay={0} begin_delay={1560} /> <Typewriter text="neofetch" delay={100} begin_delay={1620} /> <br/> <br/>
            <Typewriter text="              .,-:;//;:=,                    xirulent@DESKTOP-JKL0VER" delay={0} begin_delay={3200} /> <br/>
            <Typewriter text="          . :H@@@MM@M#H/.,+%;,               -------------------------- "  delay={0} begin_delay={3210} /> <br/>
            <Typewriter text="     -+@MM; $M@@MH+-,;XMMMM@MMMM@+-          OS: Windows 11 Pro x86_64"  delay={0} begin_delay={3220} /> <br/>
            <Typewriter text="    ;@M@@M- XM@X;. -+XXXXXHHH@M@M#@/.        Host: System manufacturer"  delay={0} begin_delay={3230} /> <br/>
            <Typewriter text="  ,%MM@@MH ,@%=             .---=-=:=,.      Kernel: 10.0.22000"  delay={0} begin_delay={3240} /> <br/>
            <Typewriter text="  =@#@@@MX.,                -%HX$$%%%:;      Uptime: 7 hours, 24 mins "  delay={0} begin_delay={3250} /> <br/>
            <Typewriter text=" =-./@M@M$                   .;@MMMM@MM:     Packages: 102 (scoop) "  delay={0} begin_delay={3260} /> <br/>
            <Typewriter text=" X@/ -$MM/                    . +MM@@@M$     Shell: bash 4.4.23"  delay={0} begin_delay={3270} /> <br/>
            <Typewriter text=",@M@H: :@:                    . =X#@@@@-     Resolution: 1920x1080, 1920x1080"  delay={0} begin_delay={3280} /> <br/>
            <Typewriter text=",@@@MMX, .                    /H- ;@M@M=     DE: Aero" delay={0} begin_delay={3290} /> <br/>
            <Typewriter text=".H@@@@M@+,                    %MM+..%#$.     WM: Explorer"  delay={0} begin_delay={3300} /> <br/>
            <Typewriter text=" /MMMM@MMH/.                  XM@MH; =;      WM Theme: dark"  delay={0} begin_delay={3310} /> <br/>
            <Typewriter text="  /%+%$XHH@$=              , .H@@@@MX,       Terminal: Windows Terminal"  delay={0} begin_delay={3320} /> <br/>
            <Typewriter text="   .=--------.           -%H.,@@@@@MX,       CPU: Ryzen 5 5600X (12) @ 3.70GHz"  delay={0} begin_delay={3330} /> <br/>
            <Typewriter text="   .%MM@@@HHHXX$$$%+- .:$MMX =M@@MM%.        GPU: Nvidia GTX 750 Ti"  delay={0} begin_delay={3340} /> <br/>
            <Typewriter text="     =XMMM@MM@MM#H;,-+HMM@M+ /MMMX=          Memory: 14324MiB / 32768MiB "  delay={0} begin_delay={3350} /> <br/>
            <Typewriter text="       =%@M@M#@$-.=$@MM@@@M; %M%=            There's supposed to be some color"  delay={0} begin_delay={3210} /> <br/>
            <Typewriter text="         ,:+$+-,/H#MMMMMMM@= =,              testing stuff here but I am too"  delay={0} begin_delay={3210} /> <br/>
            <Typewriter text="               =++%%%%+/:-.                  lazy to color it properly. lol"  delay={0} begin_delay={3210} /> <br/>
            <br/>
        </div>
    )
}
export default Startup;

/*
                                                         
                 
            ,MK:
            xMMMX:
           .NMMMMMX;
           lMMMMMMMM0clodkO0KXWW:
           KMMMMMMMMMMMMMMMMMMX'
      .;d0NMMMMMMMMMMMMMMMMMMK.
 .;dONMMMMMMMMMMMMMMMMMMMMMMx
'dKMMMMMMMMMMMMMMMMMMMMMMMMl
   .:xKWMMMMMMMMMMMMMMMMMMM0.
       .:xNMMMMMMMMMMMMMMMMMK.
          lMMMMMMMMMMMMMMMMMMK.
          ,MMMMMMMMWkOXWMMMMMM0
          .NMMMMMNd.     `':ldko
           OMMMK:
           oWk,
           ;:

              .,-:;//;:=,
          . :H@@@MM@M#H/.,+%;,
       ,/X+ +M@@M@MM%=,-%HMMM@X/,
     -+@MM; $M@@MH+-,;XMMMM@MMMM@+-
    ;@M@@M- XM@X;. -+XXXXXHHH@M@M#@/.
  ,%MM@@MH ,@%=             .---=-=:=,.
  =@#@@@MX.,                -%HX$$%%%:;
 =-./@M@M$                   .;@MMMM@MM:
 X@/ -$MM/                    . +MM@@@M$
,@M@H: :@:                    . =X#@@@@-
,@@@MMX, .                    /H- ;@M@M=
.H@@@@M@+,                    %MM+..%#$.
 /MMMM@MMH/.                  XM@MH; =;
  /%+%$XHH@$=              , .H@@@@MX,
   .=--------.           -%H.,@@@@@MX,
   .%MM@@@HHHXX$$$%+- .:$MMX =M@@MM%.
     =XMMM@MM@MM#H;,-+HMM@M+ /MMMX=
       =%@M@M#@$-.=$@MM@@@M; %M%=
         ,:+$+-,/H#MMMMMMM@= =,
               =++%%%%+/:-.

*/