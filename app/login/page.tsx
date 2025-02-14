"use client";

import { useState } from "react";
import Head from "next/head";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";

export default function LoginPage() {
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    // Add your login logic here
    setTimeout(() => setIsLoading(false), 1000);
  };

  return (
    <>
      {/* Google Search Console Verification Meta Tag */}
      <Head>
         <meta name="google-site-verification" content="ZZC8q4luOrUBcrBjClrqL__Gt9OrXRcfsnTtCcl6-u4" /> 
        <title>Login - Tube Trend</title>
      </Head>

      {/* Login Page UI */}
      <div className="min-h-screen bg-black/[0.96] flex items-center justify-center p-4">
        <Card className="w-full max-w-md bg-black/50 border-white/10">
          <CardHeader className="space-y-1 flex items-center">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Dark%20Green%20Modern%20Initial%20Logo%20(1)-bRrlCnco7SkLrjWiZM45BS8eN8hZdW.png"
              alt="Tube Trend Logo"
              width={64}
              height={64}
              className="mb-4"
            />
            <CardTitle className="text-2xl text-white">Welcome back</CardTitle>
            <CardDescription>Enter your email to sign in to your account</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <Input type="email" placeholder="Email" className="bg-white/5 border-white/10 text-white" required />
              <Input type="password" placeholder="Password" className="bg-white/5 border-white/10 text-white" required />
              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-teal-500 to-blue-500 text-white"
                disabled={isLoading}
              >
                {isLoading ? "Signing in..." : "Sign In"}
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </>
  );
}
