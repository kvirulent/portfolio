import Nano from "@/app/ui/nano";

const Layout = ({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) => {

    return (
        <div className="min-h-screen flex justify-center">
            <Nano previous_route="/" />
            <div className="m-5">
                {children}
            </div>
        </div>
    )

}

export default Layout;