import React from "react";
import "../stylesheets/App.scss";
import Estadisticas from "../components/Estadisticas";
import Historia from "../components/Historia";
import ProyectoCard from "../components/ProyectoCard";
import Titulo from "../components/Titulo";
import Icono from "../components/Icono";
import SeccionExtra from "../components/SeccionExtra";
import ConsejosCart from "../components/ConsejosCart";
import Footer from "../components/Footer";
import CorreoCopy from "../components/CorreoCopy";

import { NavHashLink } from 'react-router-hash-link';

const handleClick = () => {
  setTimeout(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }, 0);
};

export default function Inicio() {
  const [scroll, setScroll] = React.useState(false);

  React.useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 200);
    });
  }, []);


  return (
    <>

      <header className="header">
   
       
       
        <div className="header__text">
        
          <p className="text__hola">¡Hola mundo! </p>
          <p className="text_all">
            Soy <samp className="text__name"> RevayDev</samp>
          </p>

          <span className="text__job">Front-End Developer.</span>
          <div className="links">
          <CorreoCopy initialEmail= "revaydev17@gmail.com" />

          <div className="text__links">
          <a href="https://discord.com/users/1066481602403766313" target="_blank">  <i className="fa-brands fa-discord"></i> </a>
           <a href="https://www.youtube.com/channel/UCE7NWSOlaZ4IOXfIuBip_kQ" target="_blank"> <i className="fa-brands fa-youtube"></i> </a>
           <a href="https://github.com/revay3d" target="_blank"> <i className="fa-brands fa-github"></i> </a>
        
        
          </div>
        
          </div>
        </div>
        <span className="flash flash--normal"></span>
      
      
      </header>
      

      <div className={`aviso ${scroll ? "ocultar" : " "} `}>
    <NavHashLink to="/#sobre_mi"><i className="fa-solid fa-arrow-down"></i></NavHashLink>
      </div>
      <main>
        <div className="contenedor">
          <section className="main__sobre_mi" id="sobre_mi">
            <h2 className="sobre_mi__title">Sobre mi</h2>
            <p className="sobre_mi__text">
              RevayDev es un seudonimo es decir un nombre artistico. mi nombre
              es <span className="Resaltar">Roberto Jimenez</span> y tengo 16
              años soy de nacionalidad colombiana.
              y poseo una gran capacidad para trabajar tanto en equipo como de manera independiente. Me apasiona aprender y estoy constantemente buscando formas de mejorar mis habilidades. Destaco por mi habilidad para asimilar rápidamente nuevos conocimientos y aplicarlos eficientemente en cualquier tarea que se me asigne o enseñe.

             
            </p>

            <div className="historia">
              <Historia
                titulo="Inicio - Frontend"
                fecha="Julio 2021"
                texto="Inicié con micro:bit, mi primera web no fue perfecta, pero mejoré y ahora diseño sitios profesionales y atractivos."
                tipo="secundario"
              />

              <Historia
                titulo="Creando - Porfolio"
                fecha="Enero 2023"
                texto="Desarrollo mi portafolio con React, inspirándome en diseños de referencia para crear una web estética y profesional."
                tipo="secundario"
              />

              <Historia
                titulo="Estudiando - Backend"
                fecha="Abril 2024"
                texto="Actualmente, estoy aprendiendo sobre Backend para poder desarrollar sitios web de tiendas en línea y proyectos similares."
                
             />
            </div>
          </section>
          <div className="estadisticas">
            <Estadisticas titulo="Clientes" numero="2" />

            <Estadisticas titulo="Proyectos" numero="5" />

            <Estadisticas titulo="Experiencia" numero="+3" />
          </div>
        </div>

<div  id="proyectos"></div>

<Titulo 
titulo="PROYECTOS"
/>
       
        <section className="proyectos" >


          <article className="proyecto__carta">
          <span className="proyecto__estado">
                <h2>¡Nuevo!</h2>
              </span>
            <div>
              <img
                className="proyecto__imagen"
                src="img/safebox.webp"
                alt="SafeBox"
              />
 <div className="proyecto__informacion">

  <div className="proyecto__version"><span>Version 1.0</span></div>
              <div className="proyecto__lenguajes">
                <i className="fa-brands fa-python"></i>
                
              </div>
              </div>
            </div>

            <ProyectoCard
              titulo="SafeBox"
              descripcion="Aplicación Windows en desarrollo para almacenar y gestionar archivos como PDF, Word, fotos, y códigos de forma segura."
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
            <div className="proyecto__version"><span>Version 1.2</span></div>
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
        <div className="caja">
       
        <NavHashLink to="Proyecto" onClick={handleClick}> <button className="BotomMasInformacion"><span>Mas Proyectos</span></button></NavHashLink>
        </div>
        <Titulo 
titulo="EXTRAS"
/>

<article className="extra">

  <SeccionExtra titulo="Herramientas" descripcion="Estos son mis lenguajes de programación y  frameworks favoritos y los que sé utilizar. Más adelante, aprenderé más lenguajes de programación o  frameworks." />
     
          <div className="conteniner_iconos">
         
          <Icono 
     icono="html5" 
     texto="HTML"

     />


<Icono 
     icono="css3-alt" 
     texto="CSS"

     />
       <Icono 
     icono="square-js" 
     texto="JAVASCRIPT"

     />

     <Icono 
     icono="python" 
     texto="PYTHON"

     />

<Icono 
     icono="markdown" 
     texto="MARKDOWN"

     />

<Icono 
     icono="sass" 
     texto="SASS"

     />

<Icono 
     icono="react" 
     texto="REACT"

     />

<Icono 
     icono="node" 
     texto="NODE"

     />

</div>
      </article>

     <article className="extra">

     <SeccionExtra titulo="Consejos" descripcion="Estos son los lugares de aprendizaje que te recomiendo si estás interesado en aprender desarrollo web y herramientas útiles." />

     <div className="conteniner_cards">
<ConsejosCart 
icono="graduation-cap"
titulo="Aprendizajes"
descripcion="Estos son los lugares de aprendizaje fáciles y gratuitos que ofrecen certificados."
texto_url1="FreecodeCamp" 
url1="https://www.freecodecamp.org/espanol/"
texto_url2="Google Activate" 
url2="https://skillshop.exceedlms.com/student/catalog/list?category_ids=7880&locale=es"        

/>

<ConsejosCart 
icono="toolbox"
titulo="Herramientas"
descripcion="Estas son las herramientas que utilizo para los íconos y fuentes en mis sitios web."
texto_url1="Font Awesome" 
url1="https://fontawesome.com/"
texto_url2="Google Fonts" 
url2="https://fonts.google.com/"        

/>

<ConsejosCart 
icono="code"
titulo="Programas"
descripcion="Estas son las aplicaciones o programas útiles para trabajar cómodamente."
texto_url1="Visual Code" 
url1="https://code.visualstudio.com/"
texto_url2="Github" 
url2="https://github.com/"        

/>



     </div>


     </article>
  

     <article className="extra">
      <section  id="Contacto">
     <SeccionExtra titulo="Contáctame" descripcion="¿Quieres contactarme? Estoy listo para hacer un proyecto grande y moderno." />

<div className="caja_contacto">
<CorreoCopy initialEmail= "revaydev17@gmail.com" />
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
   





</section>
     </article>
      </main>

      <Footer/>
    </>
  );
}
