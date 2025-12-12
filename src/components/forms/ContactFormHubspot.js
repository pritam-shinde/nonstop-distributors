"use client";
import { useEffect } from "react";
import styles from "../../app/HubspotForm.module.css";

const ContactFormHubspot = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "//js.hsforms.net/forms/shell.js";
    script.charset = "utf-8";
    script.type = "text/javascript";
    script.async = true;

    script.onload = () => {
      if (window.hbspt) {
        window.hbspt.forms.create({
          region: "na1",
          portalId: "6700414",
          formId: "e7dcb999-d7d7-4a66-9324-49d2aaf38909",
          target: `.${styles.container}`,  
        });
      }
    };

    document.body.appendChild(script);
  }, []);

  return <div className={styles.container}></div>;
};

export default ContactFormHubspot;