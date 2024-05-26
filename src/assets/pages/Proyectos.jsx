import React from 'react'
import ProyectoCard from "../components/ProyectoCard";
import Titulo from "../components/Titulo";
import "../stylesheets/App.scss";

export default function Error() {
  return (
   <div>
<header className='header--page'>
<div className="header__text">
        
<h1 className='Titulo__Page'>Proyectos</h1>
      
      </div>
    

</header>
       
        <section className="proyectos" id="proyectos">


          <article className="proyecto__carta">
          <span className="proyecto__estado">
                <h2>¡Nuevo!</h2>
              </span>
            <div>
              <img
                className="proyecto__imagen"
                src="img/discord_js.webp"
                alt="Discord.js"
              />
 <div className="proyecto__informacion">
<span></span>
              <div className="proyecto__lenguajes">
                <i className="fa-brands fa-js"></i>
                <i className="fa-brands fa-node"></i>
                
              </div>
              </div>
            </div>

            <ProyectoCard
              titulo="Discord.js"
              descripcion="Bot de discord.js v14, codigo basico con comandos prefixs y comandos SlachCommands solofunciona para uso personal."
              texto_url1="Codigo"
              url1="https://github.com/revay3d/Discord.js"
              codigo={true}
            />
          </article>

          <article className="proyecto__carta">
      
            <div>
              <img
                className="proyecto__imagen"
                src="img/safebox.webp"
                alt="SafeBox"
              />
 <div className="proyecto__informacion">

  <div className="proyecto__version">Version 1.0</div>
              <div className="proyecto__lenguajes">
                <i className="fa-brands fa-python"></i>
                
              </div>
              </div>
            </div>

            <ProyectoCard
              titulo="SafeBox"
              descripcion="aplicación Windows en desarrollo para almacenar y gestionar archivos como PDF, Word, fotos, y códigos de forma segura."
              texto_url1="Codigo"
              url1="https://github.com/revay3d/SafeBox"
              codigo={true}
            />
          </article>

          <article className="proyecto__carta">
            <div>
              <img
                className="proyecto__imagen"
                src="img/discord.webp"
                alt="Discord.py"
              />

            <div className="proyecto__informacion">
            <div className="proyecto__version">Version 1.2</div>
            <div className="proyecto__lenguajes">

              <i className="fa-brands fa-python"></i>
              <i className="fa-brands fa-html5"></i>
              <i className="fa-brands fa-css3-alt"></i>

            </div>
          </div>
            </div>

            <ProyectoCard
              titulo="Discord.py"
              descripcion="Bot Discord v14 por RevayDev: envía mensajes y embeds sencillos, diseñado exclusivamente para uso personal."
              texto_url1="Codigo"
              url1="https://github.com/revay3d/Discord.py"
              texto_url2="Tutorial"
              url2="https://youtu.be/g-XOB3019QU?si=MsZelB_tcek0QNcO"
              info={true}
              codigo={true}
            />
          </article>

          <article className="proyecto__carta">
            <div>
        
              <img
                className="proyecto__imagen"
                src="img/TempCat.webp"
                alt="Card_Contacto"
              />
 <div className="proyecto__informacion">
  <span></span>
              <div className="proyecto__lenguajes">
                <i className="fa-brands fa-html5"></i>
                <i className="fa-brands fa-css3-alt"></i>
                <i className="fa-brands fa-react"></i>
                <i className="fa-brands fa-node"></i>
              </div>
              </div>
            </div>

            <ProyectoCard
              titulo="TempCat"
              descripcion="Sitio web de un server de minecraft hecho para informar a sus usuarios, lo cree para aprender react y diseño web profecional."


              
              texto_url1="Codigo"
              url1="https://github.com/revay3d/TempCat"
              codigo={true}
              info={true}

              texto_url2="Visitar"
              url2="https://revay3d.github.io/TempCat"
            />

          </article>
          
     
         

        </section>

        <footer class="footer">

<h1 class="footer__texto"> © 2024 RevayDev - Hecho con 💙</h1>
<div class="footer__links">
  <a href="https://discord.com/users/1066481602403766313" target="_blank" alt="Discord"><i
      class="fa-brands fa-discord"></i></a>
  <a href="https://www.youtube.com/channel/UCE7NWSOlaZ4IOXfIuBip_kQ" target="_blank" alt="Youtube"><i
      class="fa-brands fa-youtube"></i></a>
  <a href="https://github.com/revay3d" target="_blank"><i class="fa-brands fa-github" alt="Github"></i></a>
  <a href="https://www.paypal.com/donate/?hosted_button_id=BUY65JN7NWM2U" target="_blank" alt="Paypal"> <i
      class="fa-brands fa-paypal"></i></a>
</div>

</footer>

   </div>
  )
}
