import React from "react";
import Icono from "./Icono";
import "./styles/footer.scss";
import "../stylesheets/Formulario.scss";

export default function Footer() {
  return (
    <footer class="footer">
     
          <div className="footer__informacion">
            <h1 className="informacion__name">RevayDev</h1>
            <p className="informacion_description">Front-end Developer</p>

            <div class="footer__links">
              <div>
                <a
                  href="https://discord.com/users/1066481602403766313"
                  target="_blank"
                  alt="Discord"
                >
                  <i class="fa-brands fa-discord"></i>
                </a>
                <a
                  href="https://www.youtube.com/channel/UCE7NWSOlaZ4IOXfIuBip_kQ"
                  target="_blank"
                  alt="Youtube"
                >
                  <i class="fa-brands fa-youtube"></i>
                </a>
                <a href="https://github.com/revay3d" target="_blank">
                  <i class="fa-brands fa-github" alt="Github"></i>
                </a>
              </div>
      
      </div>
      </div>

          <div className="footer__tegnoligias">
            <span className="tegnoligias__title">Se utilizo</span>
          <div className="tegnoligias__lenguajes">

          <Icono 
     icono="html5" 
   

     />

<Icono 
     icono="css3-alt" 
   

     />
     <Icono 
     icono="js" 
   

     />

<Icono 
     icono="sass" 
   

     />

<Icono 
     icono="react" 
   

     />
     

          </div>
          </div>
     
        <div className="footer__derechos">© 2024 RevayDev - Hecho con 💙</div>
  
      <div className="contacto__formulario elemento">
        <form action="https://formspree.io/f/xgejzykw" method="POST">
          <label className="formulario__texto" htmlFor="name">
            Nombre Completo
          </label>
          <input
            className="formulario__celda"
            type="text"
            placeholder="RevayDev"
            id="name"
            name="name"
            required
          />

          <label className="formulario__texto" htmlFor="email">
            Correo
          </label>
          <input
            className="formulario__celda"
            type="email"
            placeholder="revaydev17@gmail.com"
            id="email"
            name="email"
            required
          />

          <label className="formulario__texto" htmlFor="coments">
            Mensaje
          </label>
          <textarea
            className="formulario__celda"
            placeholder="Mensaje"
            id="coments"
            name="message"
            required
          ></textarea>
          <input className="formulario__enviar" type="submit" value="Enviar" />
          <input
            type="hidden"
            name="_next"
            value="https://github.com/Revay3d/revaydev/formulario.html"
          />
          <input type="hidden" name="_captcha" value="false" />
        </form>
      </div>
    </footer>
  );
}
