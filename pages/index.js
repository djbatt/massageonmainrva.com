import Image from 'next/image'
import BrandLogo from "../public/Carytown-Massage-Logo.svg";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <main>

        <div class="logoDiv">

          <Image
            src={BrandLogo}
            layout="responsive"
            width={291}
            height={100}
            priority
            alt="Carytown Massage Logo"
          ></Image>
        </div>
        <h4 class="heading">
          Massage On Main is now Carytown Massage.
        </h4>
        <p class="body">
          Please visit our new website to book appointments or contact us. You can visit our new website by clicking the button below.
        </p>
        <div class="buttonDiv">
          <Link
            href="https://carytownmassage.com/"
            passHref
          >
            <a>Visit our new website</a>
          </Link>
        </div>
      </main>
    </>
  )
}
