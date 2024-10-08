"use client"
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Button } from "@/components/ui/button"; 

function Header() {
    
  return (
    <div className="flex items-center justify-between p-2 shadow-lg">
        <div className="flex gap-7 items-center">
        <Image src='/hikeko_logo.png'
        alt='logo'
        width={50}
        height={50}
        />
        Hikeko
        </div>

      <div>
        <Button>Log in</Button>
      </div>
    
    </div>
  );
}

export default Header