// Simple splashscreen with mobile device compatibility warning.
"use client";
import { useState } from "react";

const Startup = () => {
  const [active, setActive] = useState(true);

  function disable() {
    setActive(false);
  }

  return (
    <div className={active ? "fixed background inset-0 z-[40] p-4 opacity-100 flex flex-col justify-center items-center" : "hidden"}>
      <div className="m-10 text-sm md:text-base">
        <pre>            ,MK:</pre>
        <pre>            xMMMX:</pre>
        <pre>           .NMMMMMX;</pre>
        <pre>           lMMMMMMMM0clodkO0KXWW: </pre>
        <pre>           KMMMMMMMMMMMMMMMMMMX&apos; </pre>
        <pre>      .;d0NMMMMMMMMMMMMMMMMMMK. </pre>
        <pre> .;dONMMMMMMMMMMMMMMMMMMMMMMx </pre>
        <pre>&apos;dKMMMMMMMMMMMMMMMMMMMMMMMMl </pre>
        <pre>   .:xKWMMMMMMMMMMMMMMMMMMM0. </pre>
        <pre>       .:xNMMMMMMMMMMMMMMMMMK. </pre>
        <pre>          lMMMMMMMMMMMMMMMMMMK. </pre>
        <pre>          ,MMMMMMMMWkOXWMMMMMM0 </pre>
        <pre>          .NMMMMMNd.     `&apos;:ldko </pre>
        <pre>           OMMMK: </pre>
        <pre>           oWk, </pre>
        <pre>           ;: </pre>
      </div>
      <p className="text-lg md:text-3xl text-center">THIS WEBSITE IS NOT FULLY COMPATIBLE WITH MOBILE DEVICES.</p>
      <p className="cursor-pointer hover:box-glow hover:text-black" onClick={disable}>[  OK  ]</p>
    </div>
  )
};
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
