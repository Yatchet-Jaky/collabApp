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
import { useState } from 'react';

export default function Headbar() {

    /* Functions that handle getting the values from the inputs */
    const [open, setOpen] = useState(false);
    const [loggedIn, setLoggedIn] = useState(false);
    const [AccountInfo, setAccountInfo] = useState({
        username: "",
        password: "",
    });

    /* Functions that handle getting the values from the inputs */
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setAccountInfo((prevData) => ({
            /* ... is a spread operator which basically makes sure that no other properties/elements in an object/array 
            are changed unless they are explicitly changed*/
            ...prevData,
            [name]: value,
        }));
    };

    /* Functions that handle getting the values from the inputs */
    const handleSubmit = () => {
        console.log("Account info:", AccountInfo)
        setOpen(false)
        if (loggedIn) {
            setLoggedIn(false);
            setAccountInfo({ username: '', password: '' });
        } else {
            /* Change later when accounts actually created and working */
            setLoggedIn(true);
        }
    };

    /* Resets the input values of the inputs when the dialog is closed 
    onOpenChange returns a boolean value which is why when handleOpenChange is called with onOpenChange, openState is changed automatically*/
    const handleOpenChange = (openState: boolean) => {
        if (!openState) {
            setAccountInfo({ username: '', password: '' }); // Reset state
        }
        setOpen(openState)
    }

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
                <Dialog open={open} onOpenChange={handleOpenChange}>
                    {/* Needed to set DialogTrigger asChild because otherwise it would result in a nested <button> error as 
                    the dialog trigger counts as a button */}
                    <DialogTrigger asChild className='m-[0.5%] float-right w-[95%] h-[95%] items-center'>
                        <Button variant='secondary' className="w-[5.5%] h-[100%] text-[calc(1vw+0.5vh)] border-black border-2">{loggedIn ? 'Log Out' : 'Login'} </Button>
                    </DialogTrigger>
                    <DialogContent className='bg-white pb-[1%] w-[30%]'>
                        <DialogHeader>
                            <DialogTitle>{loggedIn ? "Welcome back" : "Login"} </DialogTitle>
                            <DialogDescription>
                                {!loggedIn ? (
                                    <>
                                        <Input className='mt-[3%] mb-[4%] border-black w-[100%]' name='username' value={AccountInfo.username} onChange={handleChange} placeholder='Username' />
                                        <Input className='border-black w-[100%] mt-[2%]' name='password' value={AccountInfo.password} onChange={handleChange} placeholder='Password' />
                                    </>
                                ) : (
                                    <>
                                        <span>
                                            Logged in you are! <br />
                                            Username = {AccountInfo.username} <br />
                                            Password = {AccountInfo.password}
                                        </span>
                                    </>
                                )
                                }
                            </DialogDescription>
                        </DialogHeader>
                        <DialogFooter>
                            <Button type='submit' onClick={handleSubmit} className="float-right w-[15%] h-[70%] text-[calc(0.5vw+0.75vh)]">{!loggedIn ? "Log In" : "Log Out"}</Button>
                        </DialogFooter>
                    </DialogContent>
                </Dialog>
            </div>
        </div>
    );
}