

export default function Home() {
    return (
        <div className="flex justify-center m-[2%] h-[10vh]">
            <div style={{ backgroundColor:'beige'}} className="flex justify-between border-solid border-2 border-black w-full h-full p-[1%] rounded-md shadow-lg">
                <h1 className="float-left p-[1%]">New Jangout</h1>
                <button className="float-right pr-[1%] border-black border-2 flex justify-center items-center">Login</button>
            </div>
        </div>
    );
}