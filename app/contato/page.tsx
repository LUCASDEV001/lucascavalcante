"use client";
import React, { useState } from "react";
import Image from "next/image";
import emailjs from "@emailjs/browser";

const page = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  function sendEmail(e: any) {
    e.preventDefault();

    if (name === "" || email === "" || message === "") {
      alert("Preencha todos os campos");
      return;
    }

    const templateParams = {
      from_name: name,
      message: message,
      email: email,
    };

    emailjs
      .send(
        "service_mytwrlk",
        "template_impvq8v",
        templateParams,
        "qNftZL8063w-PY7UT"
      )
      .then(
        (response) => {
          console.log(
            "E-mail enviado com sucesso!",
            response.status,
            response.text
          );
          alert("E-mail enviado com sucesso!");
          setName("");
          setEmail("");
          setMessage("");
        },
        (err) => {
          console.log("ERRO: ", err);
          alert("Houve um erro durante o envio. Tente novamente mais tarde!");
        }
      );
  }

  return (
    <div className="pb-28 pt-5">
      <h2 className="font-bold text-[30px] text-blue-500 flex justify-center">
        Entre em Contato
      </h2>
      <h2 className="text-[20px] flex justify-center text-center text-gray-500 mt-2">
        Vamos conversar! Envie um e-mail agora mesmo!
      </h2>

      <div className="flex justify-center gap-20 mt-7 ">
        <div className="hidden md:block select-none">
          <Image
            src="/devweb.png"
            alt="vetor de desenvolvimento web"
            width={1000}
            height={1000}
            className="w-96 object-cover align-middle pt-20 pointer-events-none"
          />
        </div>

        <div>
          <div className="max-w-3xl mx-auto mt-3 text-lg border shadow-md p-5 rounded-md">
            <form onSubmit={sendEmail}>
              <div className="w-full flex flex-col my-4">
                <label className="text-gray-500" htmlFor="name">
                  Nome
                </label>
                <input
                  type="text"
                  minLength={3}
                  maxLength={150}
                  required
                  className=" p-2 outline-none border border-gray-200 rounded-3xl "
                  autoComplete="off"
                  onChange={(e) => setName(e.target.value)}
                  value={name}
                />
              </div>
              <div className="w-full flex flex-col my-4">
                <label className="text-gray-500" htmlFor="email">
                  E-mail
                </label>
                <input
                  type="email"
                  minLength={5}
                  maxLength={150}
                  required
                  className=" p-2 outline-none border border-gray-200 rounded-3xl "
                  autoComplete="off"
                  id="email"
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                />
              </div>
              <div>
                <label className="text-gray-500" htmlFor="message">
                  Mensagem
                </label>
                <textarea
                  rows={4}
                  required
                  minLength={10}
                  maxLength={500}
                  name="message"
                  placeholder="Digite aqui"
                  className="w-full outline-none resize-none p-4 border border-gray-200 rounded-3xl "
                  onChange={(e) => setMessage(e.target.value)}
                  value={message}
                />
              </div>
              <button
                type="submit"
                className="px-4 py-2 w-40 bg-blue-500 rounded-full disabled:bg-gray-400 disabled:text-gray-100 text-white font-medium mt-4 hover:scale-105 transition-all"
              >
                Enviar
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
