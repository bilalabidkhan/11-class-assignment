import { client } from "@/sanity/lib/client";
import Image from "next/image";

interface Watches {
    name: string,
    image: string,
    price: number,
}

export default async function Home() {
  const res:Watches[] = await client.fetch(`*[_type == 'Watches']{
    name, 
    price, 
    "imageUrl": image.asset->url}`)
  console.log(res);
  return (
    <div className="bg-slate-400">
      <h1 className="p-8 font-serif text-2xl">Blog Assigement</h1>
     <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3"> 
       {res.map((data) => (
        <div className="justify-center items-center bg-white m-10 border rounded-xl p-6 space-y-6 hover:bg-slate-700 hover:scale-105">
          <Image src={data.imageUrl} alt="imageUrl" width={800} height={800} className="rounded-2xl"></Image>
          <p className="font-semibold">{data.name}</p>
          <p className="font-medium ">{data.price}</p>
        </div> 
       ))}
     </div>
    </div>
  );
}
