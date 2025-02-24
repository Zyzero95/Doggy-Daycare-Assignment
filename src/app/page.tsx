import Image from "next/image";
import splashPic from "@/app/images/splashimage1.png"

export default function Home() {
  return (
    <>
      <article className="header-text">
        <p>WELCOME TO</p>
        <p>DOGGY</p>
        <p>DAYCARE</p>
      </article>
      <button  className={"homepage-btn"}>OUR DOGS</button>
      <Image
        className="splash-image"
        src={splashPic}
        width={300}
        alt="Splash art of Golden Retriever"
      />
    </>
  );
}
