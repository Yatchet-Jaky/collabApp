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
        <div className="flex justify-center m-[2%] h-[10vh]">
            <div style={{ backgroundColor: 'beige' }} className="flex justify-between border-solid border-2 border-black w-full h-full p-[1%] rounded-md shadow-lg items-center">
                <h1 className="flex text-center float-left text-[calc(1.25vw+0.5vh)]">New Jangout</h1>
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
                <Dialog>
                    <DialogTrigger className='m-[0.5%] float-right w-[7%] h-[75%] items-center'>
                        <Button variant='secondary' className="w-[95%] h-[95%] text-[calc(1vw+0.5vh)] border-black border-2">Login</Button>
                    </DialogTrigger>
                    <DialogContent>
                        <DialogHeader>
                            <DialogTitle>Login</DialogTitle>
                            <DialogDescription>
                                <Input className='mt-[2%] mb-[3%] border-blackx' />
                                <Input />
                            </DialogDescription>
                        </DialogHeader>
                        <DialogFooter>
                            <Button type='submit' className="w-[15%] h-[70%] text-[calc(1vw+0.5vh)] border-black border-2">Log in</Button>
                        </DialogFooter>
                    </DialogContent>
                </Dialog>
            </div>
        </div>
    );
}