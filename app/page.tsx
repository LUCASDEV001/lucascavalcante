import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div>
        {/* SESSÃO PRINCIPAL */}
        <main className="p-16">
          <div>
            <h1 className="font-bold text-center text-3xl md:text-[40px] text-gray-900">
              Desenvolvedor de Websites
            </h1>
          </div>
          <div className="">
            <p className="text-xl pt-5 text-gray-600 text-center md:w-2/3 mx-auto">
              Sou um desenvolvedor especializado em criação de sites
              responsivos, e otimização SEO para entregar soluções
              personalizadas e de alta qualidade.
            </p>
          </div>
          <div className="mt-10 items-center justify-center flex select-none">
            <Image
              src="/Profile.png"
              alt="Imagem de perfil"
              height={250}
              width={250}
            />
          </div>
        </main>

        {/* SESSÃO DE APRESENTAÇÃO */}
        <section className="bg-blue-600">
          <div className="pt-32">
            <h3 className="font-bold text-center text-2xl w-3/4 mx-auto text-white">
              Olá! Eu me chamo Lucas. Prazer em conhecê-lo.
            </h3>
          </div>
          <div className="pt-5">
            <p className="text-white text-[17px] text-center w-3/4 md:w-1/2 mx-auto">
              Sou um desenvolvedor de sistemas formado na área de tecnologia da
              informação, especializado em desenvolvimento de sites para a web.
              Se você procura uma presença online que seja única, impactante e
              totalmente alinhada com seus objetivos, você está no lugar certo!
              Sou fascinado por transformar ideias em experiências sensacionais
              na web.
            </p>
          </div>

          <div className="flex justify-center pt-10 pb-28 select-none">
            <Image
              src="/devices.png"
              alt="Imagem mostrando dispositivos"
              width={350}
              height={350}
            />
          </div>
        </section>

        {/* SESSÃO DE SERVIÇOS */}
        <section className="flex flex-col">
          <div className="pt-32">
            <h3 className="font-bold text-center text-3xl text-gray-900">
              Como posso te ajudar?
            </h3>
          </div>

          <div className="md:flex items-center pt-16 mx-auto">
            <div className="flex flex-col items-center">
              <h3 className="font-bold text-2xl text-gray-600">
                1. Tenha um site funcional
              </h3>
              <p className="text-[17px] text-gray-600 pt-5 w-80 text-center">
                Você deseja um site. Ele precisa ter uma aparência incrível e
                você quer que funcione o tempo todo. É para isso que estou aqui!
                Eu ajudo você projetando, construindo e hospedando um site
                bonito que impulsionará o crescimento do seu negócio.
              </p>
            </div>
            <div className="ml-10 select-none">
              <Image
                src="/vectors/tech.png"
                alt="Vetor simulando um website funcional"
                width={200}
                height={200}
              />
            </div>
          </div>

          <div className="md:flex items-center pt-16 mx-auto flex-row-reverse">
            <div className="flex flex-col items-center">
              <h3 className="font-bold text-2xl text-gray-600">
                2. Torne-se relavante com SEO
              </h3>
              <p className="text-[17px] text-gray-600 pt-5 w-80 text-center">
                Um bom posicionamento no Google significa que mais pessoas verão
                seu produto e website. Eu garanto que você tenha um ranking
                líder com as melhores práticas de SEO. Dê ao seu conteúdo a
                audiência que ele merece!
              </p>
            </div>
            <div className="ml-10 select-none">
              <Image
                src="/vectors/codepc.png"
                alt="Vetor simulando um notebook com código"
                width={200}
                height={200}
              />
            </div>
          </div>

          <div className="md:flex items-center pt-16 mx-auto pb-16">
            <div className="flex flex-col items-center">
              <h3 className="font-bold text-2xl text-gray-600">
                3. Venda seus produtos online
              </h3>
              <p className="text-[17px] text-gray-600 pt-5 w-80 text-center">
                Você tem uma ideia e deseja transformá-la em um negócio online
                sem toda a complicação. Perfeito! Estou aqui para ajudar você a
                configurar uma loja virtual que seja incrível e gere receita.
              </p>
            </div>
            <div className="ml-10 select-none">
              <Image
                src="/vectors/money-bag.png"
                alt="Vetor simulando dinheiro"
                width={200}
                height={200}
              />
            </div>
          </div>
        </section>

        {/* SESSÃO DE BENEFÍCIOS */}
        <section className="bg-blue-600">
          <div className="pt-32">
            <h3 className="font-bold text-center text-3xl text-white">
              Benefícios
            </h3>
          </div>

          <div className="pt-16 flex flex-wrap justify-center gap-5">
            <div className="text-center mb-5" style={{ flexBasis: "33.33%" }}>
              <div className="select-none">
                <Image
                  src="/icon/appreciate.png"
                  alt="Ícone simulando um joinha"
                  width={800}
                  height={800}
                  className="w-20 mx-auto drop-shadow-lg"
                />
              </div>
              <p className="w-4/5 mx-auto text-center pt-5 text-lg text-white drop-shadow-lg">
                Atraia os clientes que valorizam qualidade
              </p>
            </div>

            <div className="text-center mb-5" style={{ flexBasis: "33.33%" }}>
              <div className="select-none">
                <Image
                  src="/icon/clock.png"
                  alt="Ícone simulando um relógio"
                  width={800}
                  height={800}
                  className="w-20 mx-auto drop-shadow-lg"
                />
              </div>
              <p className="w-4/5 mx-auto text-center pt-5 text-lg text-white drop-shadow-lg">
                Economize tempo com seu negócio
              </p>
            </div>

            <div className="text-center mb-5" style={{ flexBasis: "33.33%" }}>
              <div className="select-none">
                <Image
                  src="/icon/hands.png"
                  alt="Ícone simulando um aperto de mãos"
                  width={800}
                  height={800}
                  className="w-20 mx-auto drop-shadow-lg"
                />
              </div>
              <p className="w-4/5 mx-auto text-center pt-5 text-lg text-white drop-shadow-lg">
                Conquiste a confiança de seus clientes ideais
              </p>
            </div>

            <div className="text-center mb-5" style={{ flexBasis: "33.33%" }}>
              <div className="select-none">
                <Image
                  src="/icon/clients.png"
                  alt="Ícone simulando clientes"
                  width={800}
                  height={800}
                  className="w-20 mx-auto drop-shadow-lg"
                />
              </div>
              <p className="w-4/5 mx-auto text-center pt-5 text-lg text-white drop-shadow-lg">
                Alcance um público maior e curioso
              </p>
            </div>

            <div className="text-center mb-5" style={{ flexBasis: "33.33%" }}>
              <div className="select-none">
                <Image
                  src="/icon/web.png"
                  alt="Ícone simulando um website"
                  width={800}
                  height={800}
                  className="w-20 mx-auto drop-shadow-lg"
                />
              </div>
              <p className="w-4/5 mx-auto text-center pt-5 text-lg text-white drop-shadow-lg">
                Tenha um site funcionando 24/7
              </p>
            </div>

            <div className="text-center mb-5" style={{ flexBasis: "33.33%" }}>
              <div className="select-none">
                <Image
                  src="/icon/marketing.png"
                  alt="Ícone simulando um alto-falante para marketing"
                  width={800}
                  height={800}
                  className="w-20 mx-auto drop-shadow-lg"
                />
              </div>
              <p className="w-4/5 mx-auto text-center pt-5 text-lg text-white drop-shadow-lg">
                Marketing eficiente com SEO
              </p>
            </div>
          </div>

          <div className="flex justify-center pt-10 pb-28"></div>
        </section>

        {/* SESSÃO DE PROJETOS */}
        <section className="flex flex-col">
          <div className="pt-32">
            <div>
              <h3 className="font-bold text-center text-3xl text-gray-900">
                Projetos 💻
              </h3>
            </div>

            <div className="flex justify-center gap-10 pt-16 pb-16 flex-wrap sm:flex-no-wrap">
              <div className="max-w-sm bg-blue-700 border border-gray-200 rounded-lg shadow sm:flex-col">
                <a
                  href="https://supermercantil.vercel.app/"
                  target="_blank"
                  className="flex justify-center pt-5"
                >
                  <Image
                    src="/projects/super1.png"
                    alt="Imagem de projeto Supermercantil"
                    width={350}
                    height={300}
                  />
                </a>
                <div className="p-5">
                  <a href="https://supermercantil.vercel.app/" target="_blank">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                      Supermercantil
                    </h5>
                  </a>
                  <p className="mb-3 font-normal text-white">
                    Site para supermercado, destacando ofertas especiais e
                    promoções através de uma seção dedicada
                  </p>
                  <a
                    href="https://supermercantil.vercel.app/"
                    target="_blank"
                    className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-black rounded-lg hover:bg-white hover:text-black "
                  >
                    Ver projeto
                    <svg
                      className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 14 10"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M1 5h12m0 0L9 1m4 4L9 9"
                      />
                    </svg>
                  </a>
                </div>
              </div>

              <div className="max-w-sm bg-blue-700 border border-gray-200 rounded-lg shadow sm:flex-col">
                <a
                  href="https://drive-xpo.vercel.app/"
                  target="_blank"
                  className="flex justify-center pt-5"
                >
                  <Image
                    src="/projects/super2.png"
                    alt="Imagem de projeto DriveXpo"
                    width={350}
                    height={300}
                  />
                </a>
                <div className="p-5">
                  <a href="https://drive-xpo.vercel.app/" target="_blank">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                      DriveXpo
                    </h5>
                  </a>
                  <p className="mb-3 font-normal text-white">
                    Este site permite que o cliente alugue carros de forma
                    online e sem muito esforço, pagando apenas para dirigir
                  </p>
                  <a
                    href="https://drive-xpo.vercel.app/"
                    target="_blank"
                    className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-black rounded-lg hover:bg-white hover:text-black "
                  >
                    Ver projeto
                    <svg
                      className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 14 10"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M1 5h12m0 0L9 1m4 4L9 9"
                      />
                    </svg>
                  </a>
                </div>
              </div>

              <div className="max-w-sm bg-blue-700 border border-gray-200 rounded-lg shadow sm:flex-col">
                <a
                  href="https://lucasdev001.github.io/viva-jaguaribe/"
                  target="_blank"
                  className="flex justify-center pt-5"
                >
                  <Image
                    src="/projects/super3.png"
                    alt="Imagem de projeto Viva Jaguaribe"
                    width={350}
                    height={300}
                  />
                </a>
                <div className="p-5">
                  <a
                    href="https://lucasdev001.github.io/viva-jaguaribe/"
                    target="_blank"
                  >
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                      Viva Jaguaribe
                    </h5>
                  </a>
                  <p className="mb-3 font-normal text-white">
                    Site totalmente desenvolvido para empreedimento imobiliário,
                    com o verdadeiro intuito de alavancar as vendas.
                  </p>
                  <a
                    href="https://lucasdev001.github.io/viva-jaguaribe/"
                    target="_blank"
                    className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-black rounded-lg hover:bg-white hover:text-black "
                  >
                    Ver projeto
                    <svg
                      className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 14 10"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M1 5h12m0 0L9 1m4 4L9 9"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SESSÃO FINAL */}
        <section>
          <div className="pt-5 pb-36">
            <div className="mt-28 border-t-[1px] "></div>
            <div>
              <h3 className="font-bold text-center text-3xl pt-32 text-gray-900">
                É sua vez de dizer olá! 🖐
              </h3>
            </div>

            <div className="">
              <p className="text-xl pt-5 text-gray-600 text-center md:w-2/3 mx-auto">
                Vamos conversar sobre seu projeto? 🙂
              </p>
            </div>

            <div className="pt-10 flex justify-center">
              <Link href="/contato">
                <span className="text-white font-medium  bg-blue-500 rounded-full p-5 text-xl hover:bg-blue-700 hover:text-white duration-200 hover:cursor-pointer select-none">
                  Entrar em Contato
                </span>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
