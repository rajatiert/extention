import Image from "next/image"
const Loader = ()=>{
    return <div className="w-full flex flex-col justify-center rounded-b-lg items-center h-[80vh] border-[1px] border-t-0 border-[#CFCFCF]">
        <Image src="loading.svg" width="100" height="100" alt="loader" />
        <p>Fetching Data from github...</p>
    </div>
}


export default Loader;