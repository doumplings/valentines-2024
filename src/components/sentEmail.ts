import emailjs from "@emailjs/browser";

export const SendEmail = () => {
  emailjs
    .send("service_aci8g5s", "template_jz6xjsz", undefined, {
      publicKey: "DatUEsIBgoIQZCKVG",
    })
    .then(() => console.log("...SUCCESS"))
    .catch(() => console.log("...FAILED"));
};
