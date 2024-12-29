import { Button } from "./ui/button";

export default function Headbar() {
    return (
        <div className="flex justify-center m-[2%] h-[10vh]">
            <div style={{ backgroundColor: 'beige' }} className="flex justify-between border-solid border-2 border-black w-full h-full p-[1%] rounded-md shadow-lg items-center">
                <h1 className="flex text-center float-left text-[calc(1.25vw+0.5vh)]">New Jangout</h1>
                <Button variant='secondary' className="float-right m-[0.5%] w-[7%] h-[75%] text-[calc(1vw+0.5vh)] border-black border-2">Login</Button>
            </div>
        </div>
    );
}