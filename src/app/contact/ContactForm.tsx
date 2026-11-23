"use client";

import { useState, type FormEvent } from "react";
import { ArrowUpRight, Send, ShieldCheck } from "lucide-react";

export default function ContactForm() {
  const [status, setStatus] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    if (!form.reportValidity()) return;
    const data = new FormData(form);
    const fields = [
      "IMTS CARE WEBSITE ENQUIRY", "",
      `Name: ${data.get("name") || ""}`,
      `Email: ${data.get("email") || ""}`,
      `Phone / WhatsApp: ${data.get("phone") || "Not provided"}`,
      `Enquiry type: ${data.get("enquiry") || ""}`,
      `Current country: ${data.get("country") || "Not provided"}`,
      `Preferred destination: ${data.get("destination") || "Not provided"}`,
      `Preferred contact method: ${data.get("contactMethod") || "Email"}`,
      "", "Message:", `${data.get("message") || "No additional message provided."}`,
      "", "This enquiry is for coordination purposes only."
    ];
    const subject = encodeURIComponent(`Website enquiry: ${data.get("enquiry")} — ${data.get("name")}`);
    setStatus("Your email app is opening with the enquiry details. Please review and send the email to complete your enquiry.");
    window.location.href = `mailto:info@imtscare.com?subject=${subject}&body=${encodeURIComponent(fields.join("\n"))}`;
  }

  return <form className="imts-contact-form" onSubmit={handleSubmit}>
    <div className="imts-contact-form-top"><div><span>ENQUIRY FORM</span><h3>Tell us a little about your request</h3></div><div className="imts-contact-form-mark"><Send size={19} /></div></div>
    <div className="imts-contact-fields">
      <label><span>Full name <b>*</b></span><input name="name" type="text" placeholder="Your full name" autoComplete="name" required /></label>
      <label><span>Email address <b>*</b></span><input name="email" type="email" placeholder="name@example.com" autoComplete="email" required /></label>
      <label><span>Phone / WhatsApp</span><input name="phone" type="tel" placeholder="+ country code" autoComplete="tel" /></label>
      <label><span>Type of enquiry <b>*</b></span><select name="enquiry" required defaultValue=""><option value="" disabled>Select an enquiry type</option><option>Air ambulance</option><option>Patient transfer</option><option>Medical tourism / treatment coordination</option><option>General enquiry</option></select></label>
      <label><span>Current country</span><input name="country" type="text" placeholder="Where is the patient currently located?" /></label>
      <label><span>Preferred destination</span><input name="destination" type="text" placeholder="Country or city, if known" /></label>
      <label className="imts-contact-field-full"><span>How can we help?</span><textarea name="message" rows={5} placeholder="Briefly describe the assistance you are looking for. Please do not include medical records or sensitive medical details." /></label>
      <fieldset className="imts-contact-field-full imts-contact-radio-field"><legend>How would you prefer us to contact you?</legend>
        <label><input type="radio" name="contactMethod" value="Email" defaultChecked /> Email</label>
        <label><input type="radio" name="contactMethod" value="Phone" /> Phone</label>
        <label><input type="radio" name="contactMethod" value="WhatsApp" /> WhatsApp</label>
      </fieldset>
    </div>
    <div className="imts-contact-form-footer"><p><ShieldCheck size={16} /> Please share only basic enquiry details. Do not submit medical records through this form.</p><button type="submit">Prepare enquiry <ArrowUpRight size={17} /></button></div>
    {status && <p className="imts-contact-form-status" role="status">{status}</p>}
    <p className="imts-contact-form-privacy">By submitting, you agree that IMTS CARE may use these details to respond to your enquiry.</p>
  </form>;
}
