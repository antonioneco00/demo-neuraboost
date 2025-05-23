"use client";

import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";
import { useState } from "react";
import { useMessages } from "next-intl";
import { ContactFormData, Messages } from "@/types";
import { motion } from "motion/react";

export default function Contact() {
  const { h1_title, description, form, info } = (useMessages() as Messages)
    .contact;
  const {
    name,
    email,
    message,
    button,
    required,
    sending,
    success,
    errors: errorMessages,
  } = form;
  const {
    name: requiredName,
    email: requiredEmail,
    message: requiredMessage,
  } = required;
  const { invalid_email, try_again } = errorMessages;

  const { title, address, street, city, country, phone } = info;

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting, isSubmitSuccessful },
  } = useForm<ContactFormData>();

  const [error, setError] = useState("");

  const onSubmit = async (data: ContactFormData) => {
    setError("");

    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        {
          name: data.name,
          from_email: data.email,
          message: data.message,
          to_email: process.env.NEXT_PUBLIC_EMAILJS_TO_EMAIL!,
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      );
      reset();
    } catch (err) {
      console.error("EmailJS Error:", err);
      setError(try_again);
    }
  };

  return (
    <div className="relative isolate px-6 py-24 sm:py-32 lg:px-8" id="contact">
      <div className="absolute top-0 left-0 -z-10 size-full bg-[url(/constellation.svg)]" />
      <div className="max-w-6xl bg-background mx-auto lg:p-12 p-6 rounded-2xl shadow-2xl ring-1 ring-gray-900/10 dark:ring-blue-400/40">
        <div className="flex md:flex-row flex-col">
          <motion.div
            initial={{ x: -200, opacity: 0 }}
            transition={{ duration: 1 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="lg:grow md:w-lg lg:pr-0 md:pr-6"
          >
            <div className="mx-auto text-center">
              <h2 className="text-4xl font-semibold tracking-tight text-balance sm:text-5xl">
                {h1_title}
              </h2>
              <p className="mt-2 text-lg/8 text-gray-500">{description}</p>
            </div>

            <form
              onSubmit={handleSubmit(onSubmit)}
              className="mx-auto mt-12 max-w-xl"
            >
              <div className="grid grid-cols-1 gap-y-6">
                <div className="sm:col-span-2">
                  <label
                    htmlFor="name"
                    className="block text-sm/6 font-semibold"
                  >
                    {name}
                  </label>
                  <div className="mt-2.5">
                    <input
                      id="name"
                      {...register("name", { required: requiredName })}
                      className="block w-full dark:bg-gray-900 rounded-md px-3.5 py-2 text-base outline-1 outline-gray-300 dark:outline-gray-800 placeholder:text-gray-400 focus:outline-blue-600"
                    />
                    {errors.name && (
                      <p className="mt-1 text-sm text-red-500">
                        {errors.name.message as string}
                      </p>
                    )}
                  </div>
                </div>

                <div className="sm:col-span-2">
                  <label
                    htmlFor="email"
                    className="block text-sm/6 font-semibold"
                  >
                    {email}
                  </label>
                  <div className="mt-2.5">
                    <input
                      id="email"
                      type="email"
                      {...register("email", {
                        required: requiredEmail,
                        pattern: {
                          value: /\S+@\S+\.\S+/,
                          message: invalid_email,
                        },
                      })}
                      className="block w-full dark:bg-gray-900 rounded-md px-3.5 py-2 text-base outline-1 outline-gray-300 dark:outline-gray-800 placeholder:text-gray-400 focus:outline-blue-600"
                    />
                    {errors.email && (
                      <p className="mt-1 text-sm text-red-500">
                        {errors.email.message as string}
                      </p>
                    )}
                  </div>
                </div>

                <div className="sm:col-span-2">
                  <label
                    htmlFor="message"
                    className="block text-sm/6 font-semibold"
                  >
                    {message}
                  </label>
                  <div className="mt-2.5">
                    <textarea
                      id="message"
                      rows={4}
                      {...register("message", { required: requiredMessage })}
                      className="block w-full dark:bg-gray-900 rounded-md px-3.5 py-2 text-base outline-1 outline-gray-300 dark:outline-gray-800 placeholder:text-gray-400 focus:outline-blue-600"
                    />
                    {errors.message && (
                      <p className="mt-1 text-sm text-red-500">
                        {errors.message.message as string}
                      </p>
                    )}
                  </div>
                </div>
              </div>

              <div className="mt-6">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="block w-full rounded-md bg-blue-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white hover:bg-blue-500 focus-visible:outline-blue-600"
                >
                  {isSubmitting ? sending : button}
                </button>
              </div>

              {isSubmitSuccessful && !error && (
                <p className="mt-4 text-green-600 text-center">{success}</p>
              )}
              {error && (
                <p className="mt-4 text-red-600 text-center">{error}</p>
              )}
            </form>
          </motion.div>

          <div className="xl:w-xs md:w-3xs md:border-l border-gray-500/30 md:pl-8 mx-3 sm:mx-8 md:mx-0">
            <motion.h3
              initial={{ x: 200, opacity: 0 }}
              transition={{ duration: 1 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              className="text-3xl font-bold my-8"
            >
              {title}
            </motion.h3>
            <motion.div
              initial={{ x: 200, opacity: 0 }}
              transition={{ duration: 1, delay: 0.1 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              className="mb-6"
            >
              <h4 className="text-lg font-semibold mb-3">{address}</h4>
              <p className="text-gray-500">{street}</p>
              <p className="text-gray-500">{city}</p>
              <p className="text-gray-500">{country}</p>
            </motion.div>
            <motion.div
              initial={{ x: 200, opacity: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              className="mb-6"
            >
              <h4 className="text-lg font-semibold mb-3">{phone}</h4>
              <a
                href="tel:911234567"
                className="text-gray-500 hover:text-blue-500 transition-colors duration-500"
              >
                +34 911 234 567
              </a>
            </motion.div>
            <motion.div
              initial={{ x: 200, opacity: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
            >
              <h4 className="text-lg font-semibold mb-3">Email</h4>
              <a
                href="mailto:hello@neuraboost.com"
                className="text-gray-500 hover:text-blue-500 transition-colors duration-500"
              >
                hello@neuraboost.com
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
