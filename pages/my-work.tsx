import Image from 'next/image';

export default function Work() {
  return (
    <div>
      <div className="flex flex-col gap-y-4">
        {/* <Image
          src="/images/about.jpg"
          // objectFit="cover"
          alt=""
          layout="raw"
          sizes="(max-width: 710px) 120px"
        /> */}
        <img className="w-full" src="/images/portfolio/a.jpg" />
        <img className="w-full" src="/images/portfolio/b.jpg" />
        <img className="w-full" src="/images/portfolio/c.jpg" />
      </div>
    </div>
  );
}
