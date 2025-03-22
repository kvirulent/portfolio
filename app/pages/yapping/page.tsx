import Blinker from "@/app/ui/blinker";

const Page = () => {
    return(
        <main className="m-5">
            <div className="flex flex-col">
                <p className="text-amber text-4xl glow m-2">welcome to the yap zone</p>
                <hr/>
                <div className="flex flex-row text-black">
                    <div className="flexflex-col flex-1">
                        <p className="bg-[#FFB000] flex-1 pr-2 pl-2">name</p>
                        <p className="bg-[#FFB000] flex-1 pr-2 pl-2">a post.. or two</p>
                    </div>
                    <div className="flex flex-col flex-2">
                        <p className="bg-orange-600 flex-2 pr-2 pl-2">date posted</p>
                        <p className="bg-orange-600 flex-2 pr-2 pl-2">12/24/2024</p>
                    </div>
                    <div className="flex flex-col flex-2">
                        <p className="bg-[#FFB000] flex-2 pr-2 pl-2">date modified</p>
                        <p className="bg-[#FFB000] flex-2 pr-2 pl-2">12/21/2024</p>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Page;