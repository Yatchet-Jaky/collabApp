import { Link } from 'react-router-dom';
import { Button } from "./ui/button";
import { Input } from "@/components/ui/input"
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"

export default function Headbar() {
    return (
        /*The logo and Name of the App*/
        <div className="flex justify-center h-[8vh] w-full">
            <div style={{ backgroundColor: 'beige' }} className="flex justify-between border-solid border-2 border-black w-full h-full p-[1%] shadow-lg items-center">
                <h1 className="flex text-center float-left text-[calc(1.05vw+1vh)]">New Jangout</h1>
        {/* The Navigation bar of the header*/}
                <NavigationMenu>
                    <NavigationMenuList>
                        <NavigationMenuItem>
                            <NavigationMenuLink asChild className={`${navigationMenuTriggerStyle()}`}>
                                <Link to="/">Home</Link>
                            </NavigationMenuLink>
                            <NavigationMenuLink asChild className={`${navigationMenuTriggerStyle()}`}>
                                <Link to="/testing">Rooms</Link>
                            </NavigationMenuLink>
                            <NavigationMenuLink asChild className={`${navigationMenuTriggerStyle()}`}>
                                <Link to="/">Profile</Link>
                            </NavigationMenuLink>
                        </NavigationMenuItem>
                    </NavigationMenuList>
                </NavigationMenu>
                {/* The Login button of the header*/}
                <Dialog>
                    <DialogTrigger className='m-[0.5%] float-right w-[5.5%] h-[100%] items-center'>
                        <Button variant='secondary' className="w-[95%] h-[95%] text-[calc(1vw+0.5vh)] border-black border-2">Login</Button>
                    </DialogTrigger>
                    <DialogContent className='bg-white pb-[1%] w-[30%]'>
                        <DialogHeader>
                            <DialogTitle>Login</DialogTitle>
                            <DialogDescription>
                                <Input className='mt-[3%] mb-[4%] border-black w-[100%]' placeholder='Username' />
                                <Input className='border-black w-[100%] mt-[2%]' placeholder='Password' />
                            </DialogDescription>
                        </DialogHeader>
                        <DialogFooter>
                            <Button type='submit' className="float-right w-[15%] h-[70%] text-[calc(0.5vw+0.75vh)]">Log in</Button>
                        </DialogFooter>
                    </DialogContent>
                </Dialog>
            </div>
        </div>
    );
}