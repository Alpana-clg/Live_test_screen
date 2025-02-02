
'use client'

import { useRouter } from "next/navigation";
import Image from "next/image";
import styles from './page.module.css'
import Navbar from "@/components/Navbar"
import StudentPanel from "@/components/StudentPanel";

export default function Home() {
    const route =useRouter();
  const navigate =(name)=>{
    route.push(name);
  }
  return (
<main>
<div className={styles.container}>
  <Navbar />
  
  <StudentPanel />

</div>
</main> 
  );
}

