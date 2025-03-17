import ContactForm from "@/components/contact-form";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contato | Vanzak Labs"
};

export default function Contact() {
  return (
    <div>
      <ContactForm />
    </div>
  )
}
