import Right from "@/app/components/icons/Right";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="hero mt-20">
      <div className="container-xl mx-auto text-center md:text-left">
        <h1 className="text-4xl font-semibold">
          Everything<br />
          is better<br />
          with a&nbsp;
          <span className="text-primary">
            Diet Products
          </span>
        </h1>
        <p className="my-6 text-gray-500 text-sm">
          Diet Products is the missing piece that makes every day complete, a simple yet delicious joy in life
        </p>
        <div className="flex gap-4 text-sm">
          <button className="flex justify-center bg-blue-500 uppercase items-center gap-2 text-white px-4 py-2 rounded-full">
            Order now
            <Right />
          </button>
          <button className="flex items-center border-0 gap-2 py-2 text-gray-600 font-semibold">
            Learn more
            <Right />
          </button>
        </div>
      </div>
      <div className="relative hidden md:block">
        <Image src={'/Diet Products.png'} layout={'fill'} objectFit={'contain'} alt={'Diet Product'} />
      </div>
    </section>
  );
}