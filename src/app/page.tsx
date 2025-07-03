import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="bg-gray-800 grid grid-rows-[20px_1fr_20px] justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 ">
        <main className="items-center justify-items-center sm:items-center sm:justify-items-center ">
          <div className="space-y-5 max-w-4xl mx-auto text-center pt-25 mb-20">
            <h1 className="text-4xl text-gray-300 dark:text-gray-400 font-extrabold mx-auto sm:text-6xl">
              Assistente Virtual Avançada (AVA)
            </h1>
            <p className="max-w-xl mx-auto text-white">
              Precisa de dinheiro rápido e seguro? Nossa solução é perfeita para
              você. Faça um contrato agora.
            </p>
            <div className="flex flex-col items-center justify-center gap-x-3 font-medium text-sm sm:flex-row ">
              <Button asChild>
                <Link href="/chat" className="w-2/5">
                  Ir para o Chat
                </Link>
              </Button>
              <Button asChild variant="outline">
                <Link href="#about" className="w-2/5">
                  Mais sobre o AVA
                </Link>
              </Button>
            </div>
          </div>
          <div>
            <p className="text-sm text-gray-500 text-center">
              AVA é uma assistente virtual avançada, projetada para ajudar com
              diversas tarefas e fornecer informações úteis. Desenvolvida por
              Vinícius Porto.
            </p>
          </div>
        </main>
      </div>
      <div>
        <section id="about" className="max-w-4xl mx-auto p-8">
          <div className="flex items-center justify-center mb-8">
            <Image
              width={128}
              height={128}
              src="/ava-logo.png"
              alt="Logo do AVA"
              className="w-24 h-24 sm:w-32 sm:h-32"
            />
          </div>
          <div className="flex items-center justify-center mb-4">
            <h2 className="text-3xl font-bold mb-4">Sobre o AVA</h2>
            <p className="text-lg text-gray-700 dark:text-gray-300">
              AVA é uma assistente virtual avançada, projetada para ajudar com
              diversas tarefas e fornecer informações úteis. Desenvolvida por
              Vinícius Porto, ela combina inteligência artificial com uma
              interface amigável para oferecer uma experiência única.
            </p>
          </div>
        </section>
      </div>
    </>
  );
}
