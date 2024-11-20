// import Image from "next/image";
// import styles from "./page.module.css";
import "./globals.css"
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1 className="heading">Countries List</h1>
      <h2>Click on any country button to show its data: </h2>
      <ul className="d-flex">
            <li className="cust_button"><Link className="" href="./country/pakistan">Pakistan</Link></li>
            <li className="cust_button"><Link className="" href="./country/india">India</Link></li>
            <li className="cust_button"><Link className="" href="./country/japan">Japan</Link></li>
            <li className="cust_button"><Link className="" href="./country/usa">USA</Link></li>
            <li className="cust_button"><Link className="" href="./country/uk">UK</Link></li> 

        </ul>
    </div>
  );
}
