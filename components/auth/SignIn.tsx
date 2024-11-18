"use client";
import { IconEye, IconEyeOff } from "@tabler/icons-react";
import Image from "next/image";
//import Link from "next/link";
import {Link} from "@nextui-org/link";
import {Button, ButtonGroup} from "@nextui-org/button";

import { useState } from "react";
import {Input} from "@nextui-org/input";

const SignIn = () => {
  const [showPass, setShowPass] = useState(false);

  return (
    <div className="box sp-grid sp-login">
      <div className="sp-grid-col" >
        <Image src="/images/sp-logo.png" alt="img" width={533} height={560} />
      </div>
      
      <div className="sp-grid-col">
      
        <h1>Hola!</h1>
        <p className="pb-3">Inicia sesión en tu cuenta y únete a nosotros.</p>
      
        <form>
            <label htmlFor="email">Email</label>
            <Input
              type="email"
              placeholder="Ingresá tu Email"
              name="email"
              defaultValue="email@email.com"
            />
            
            <label htmlFor="password">Contraseña</label>
            <Input
                type={showPass ? "text" : "password"}
                placeholder="Ingresá tu contraseña"
                name="password"
                defaultValue="1154545fvvff..."
                endContent={
                  <span onClick={() => setShowPass(!showPass)}>
                    {showPass ? <IconEye /> : <IconEyeOff />}
                  </span>                
                }                
              />

            <Link href="#" className="py-3 color-white">Olvidé mi contraseña</Link>
            <p >¿No tenés cuenta?{" "}
              <Link  href="/auth/sign-up">
                Registrate
              </Link>
            </p>
            <div className="py-3">
              <Button type="submit" className="sp-btn-primary">Login</Button>
            </div>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
