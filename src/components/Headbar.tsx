import { Link } from 'react-router-dom';
import { Button } from "./ui/button";
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"

export default function Headbar() {
    return (
        <div className="flex justify-center m-[2%] h-[10vh]">
            <div style={{ backgroundColor: 'beige' }} className="flex justify-between border-solid border-2 border-black w-full h-full p-[1%] rounded-md shadow-lg items-center">
                <h1 className="flex text-center float-left text-[calc(1.25vw+0.5vh)]">New Jangout</h1>
                <NavigationMenu>
                    <NavigationMenuList>
                        <NavigationMenuItem>
                            <Link to="/">
                                <NavigationMenuLink className={`${navigationMenuTriggerStyle()}`}>Home</NavigationMenuLink>
                            </Link>
                            <Link to="/testing">
                                <NavigationMenuLink className={`${navigationMenuTriggerStyle()}`}>Rooms</NavigationMenuLink>
                            </Link>
                            <Link to="/">
                                <NavigationMenuLink className={`${navigationMenuTriggerStyle()}`}>Profile</NavigationMenuLink>
                            </Link>
                        </NavigationMenuItem>
                    </NavigationMenuList>
                </NavigationMenu>
                <Button variant='secondary' className="float-right m-[0.5%] w-[7%] h-[75%] text-[calc(1vw+0.5vh)] border-black border-2">Login</Button>
            </div>
        </div>
    );
}