// Configuración de i18next
i18next.use(i18nextBrowserLanguageDetector).init(
  {
    debug: false, // Cambiado a false para entorno de producción
    fallbackLng: "en",
    resources: {
      es: {
        translation: {
          // Navbar
          navbar: {
            about: "Sobre mí",
            services: "Servicios",
            blog: "Blog",
            gallery: "Galería",
            testimonials: "Testimonios",
            contact: "Contacto",
            language: "Idioma"
          },
          // Hero section
          hero_button: "Reservar Experiencia",
          about_hero_title: "Pasión por la <span class=\"fst-italic text-wine\">cultura líquida</span>.",

          // Sección "Sobre mí"
          about_title: "Sobre mí",
          about_paragraph_1: "Soy JP Juan Pablo, sommelier certificado en California, con experiencia internacional en la industria del vino. He trabajado en algunas de las regiones vitivinícolas más emblemáticas del mundo, como La Rioja y Ribera del Duero en España, Toscana y Piamonte en Italia, Burdeos y Borgoña en Francia, Valle del Maipo y Valle de Colchagua en Chile, Mendoza en Argentina y Napa Valley y Sonoma en Estados Unidos.",
          about_paragraph_2: "Actualmente soy Wine & Beverage Director y Head Floor Sommelier en <strong>Tasting House</strong>, Los Gatos.",
          about_paragraph_9: "Originario de Valdivia, Chile, cuenta con más de 15 años de experiencia en la industria del vino y la hospitalidad a nivel internacional. Es sommelier certificado por la Court of Master Sommeliers (CMS), posee el certificado WSET Level 3 Advanced, y es Wine Judge certificado por la American Wine Society (AWS). Actualmente se prepara para el examen CMS Advanced y está completando su certificación como Italian Wine Specialist. Ha sido seleccionado tres veces para participar en el prestigioso Ruinart Challenge.",
          about_paragraph_3: "Mi pasión es compartir el conocimiento del vino de manera accesible y amena, alejada de pretensiones y enfocada en la experiencia sensorial.",
          about_paragraph_4: "Ofrezco servicios de consultoría, catas privadas y educación vinícola, adaptados a las necesidades de cada cliente.",
          about_paragraph_5: "Mi objetivo es desmitificar el mundo del vino y ayudar a las personas a descubrir nuevos sabores y experiencias.",
          about_paragraph_6: "Creo firmemente que el vino es para disfrutar y compartir, no para intimidar.",
          about_paragraph_7: "Me encanta viajar, descubrir nuevas regiones vinícolas y compartir estas experiencias con mis clientes.",
          about_paragraph_8: "El vino es cultura líquida, una forma de viajar sin moverse del lugar.",
          
          // Sección de Servicios
          servicios_subtitle: "Experiencias",
          servicios: {
            titulo: "Servicios",
            catasPrivadas: {
              titulo: "Catas privadas",
              descripcion: "Disfruta de una experiencia única con catas privadas en tu hogar, empresa o evento especial. Selecciono personalmente los vinos y creo maridajes personalizados para que explores el mundo del vino de forma sensorial y entretenida.<br /><strong>Ejemplo:</strong> Cata temática de vinos italianos con maridaje de quesos y charcutería artesanal para un grupo de 10 personas."
            },
            consultoria: {
              titulo: "Consultoría a restaurantes, hoteles y bares",
              descripcion: "Asesoro establecimientos gastronómicos para optimizar sus cartas de vino, crear experiencias memorables para los clientes y capacitar al equipo en servicio de bebidas.<br /><strong>Ejemplo:</strong> Rediseño completo de la carta de vinos de un restaurante mediterráneo con énfasis en vinos locales y sostenibles."
            },
            entrenamiento: {
              titulo: "Entrenamiento para equipos",
              descripcion: "Capacito al personal de servicio en técnicas de atención, lenguaje del vino y maridaje para mejorar la experiencia del cliente. Adaptado a todos los niveles de conocimiento.<br /><strong>Ejemplo:</strong> Programa de 4 sesiones para staff de sala y baristas sobre servicio de vino por copa, decantación y recomendaciones de maridaje."
            },
            cavas: {
              titulo: "Mantenimiento de cavas privadas",
              descripcion: "Ofrezco gestión profesional de colecciones de vino: organización, inventario, rotación y asesoría en nuevas adquisiciones. Ideal para coleccionistas y amantes del vino.<br /><strong>Ejemplo:</strong> Organización y digitalización del inventario de una cava privada con más de 200 etiquetas premium."
            },
            educacion: {
              titulo: "Educación y talleres para aficionados",
              descripcion: "Talleres diseñados para entusiastas del vino que desean aprender sobre cata, regiones vinícolas, estilos y conservación de vinos. Accesibles, prácticos y entretenidos.<br /><strong>Ejemplo:</strong> Curso introductorio de 3 días sobre vinos del Nuevo Mundo para principiantes, con degustaciones guiadas."
            }
          },
          
          // Sección de Blog
          blog: {
            title: "Blog / Recomendaciones",
            card1: {
              title: "Maridaje perfecto",
              text: "Cómo lograr el equilibrio ideal entre vinos y platos."
            },
            card2: {
              title: "Regiones vinícolas",
              text: "Explora las mejores zonas productoras de vino del mundo."
            },
            card3: {
              title: "Consejos de cata",
              text: "Tips prácticos para disfrutar aún más del vino."
            }
          },
          
          // Secciones adicionales
          galeria_title: "Galería",
          // Sección de testimonios en español
          testimonios_title: "Testimonios",
          testimonios: {
            testimonio1: {
              texto: "La pasión de Juan Pablo hizo que nuestra cata fuera inolvidable.",
              autor: "María R., San Francisco"
            },
            testimonio2: {
              texto: "Profesionalismo y carisma. ¡Una noche memorable!",
              autor: "Alejandro M., Los Ángeles"
            },
            testimonio3: {
              texto: "Una experiencia única. Aprendimos y disfrutamos muchísimo.",
              autor: "Carla D., Napa Valley"
            }
          },
          contacto_title: "Contacto",
          contacto_nombre: "Nombre",
          contacto_email: "Correo electrónico",
          contacto_mensaje: "Mensaje",
          contacto_enviar: "Enviar",
          contacto_hablemos: "Hablemos",
          footer_copyright: "© 2025 Juan Pablo Trillo — Sommelier. Todos los derechos reservados.",
          age_gate_title: "Verificación de Edad",
          age_gate_question: "¿Eres mayor de 21 años?",
          age_gate_disclaimer: "Este sitio web contiene información sobre bebidas alcohólicas. Debes ser mayor de 21 años para acceder.",
          age_gate_yes: "Soy mayor de 21",
          age_gate_no: "No soy mayor de 21",
          age_gate_restricted_title: "Acceso Restringido",
          age_gate_restricted_message: "Lo sentimos, debes ser mayor de 21 años para acceder a este sitio web.",
          age_gate_restricted_info: "Por favor, visítanos cuando tengas la edad legal para consumir bebidas alcohólicas."
        }
      },
      en: {
        translation: {
          // Navbar en inglés
          navbar: {
            about: "About Me",
            services: "Services",
            blog: "Blog",
            gallery: "Gallery",
            testimonials: "Testimonials",
            contact: "Contact",
            language: "Language"
          },
          // Hero section
          hero_button: "Book Experience",
          about_hero_title: "Passion for <span class=\"fst-italic text-wine\">liquid culture</span>.",

          // Sección "Sobre mí" en inglés
          about_title: "About Me",
          about_paragraph_1: "I'm JP Juan Pablo, a certified sommelier in California with international experience in the wine industry. I have worked in some of the most iconic wine regions of the world, including Rioja and Ribera del Duero in Spain, Tuscany and Piedmont in Italy, Bordeaux and Burgundy in France, Maipo Valley and Colchagua Valley in Chile, Mendoza in Argentina, and Napa Valley and Sonoma in the United States.",
          about_paragraph_2: "I am currently Wine & Beverage Director and Head Floor Sommelier at <strong>Tasting House</strong>, Los Gatos.",
          about_paragraph_9: "Originally from Valdivia, Chile, he has over 15 years of experience in the wine and hospitality industry internationally. He is a Certified Sommelier through the Court of Master Sommeliers (CMS), holds the WSET Level 3 Advanced Certificate, and is a Certified Wine Judge by the American Wine Society (AWS). He is currently preparing for the CMS Advanced Exam and completing his Italian Wine Specialist Certification. He has been honored as a three-time participant in the prestigious Ruinart Challenge.",
          about_paragraph_3: "My passion is sharing wine knowledge in an accessible and enjoyable way, away from pretensions and focused on the sensory experience.",
          about_paragraph_4: "I offer consulting services, private tastings, and wine education, tailored to each client's needs.",
          about_paragraph_5: "My goal is to demystify the world of wine and help people discover new flavors and experiences.",
          about_paragraph_6: "I firmly believe that wine is for enjoying and sharing, not for intimidating.",
          about_paragraph_7: "I love traveling, discovering new wine regions, and sharing these experiences with my clients.",
          about_paragraph_8: "Wine is liquid culture, a way to travel without moving from your place.",
          
          // Sección de Servicios en inglés
          servicios_subtitle: "Experiences",
          servicios: {
            titulo: "Services",
            catasPrivadas: {
              titulo: "Private Tastings",
              descripcion: "Enjoy a unique experience with private tastings at your home, business, or special event. I personally select the wines and create custom pairings so you can explore the world of wine in a sensory and entertaining way.<br /><strong>Example:</strong> Themed Italian wine tasting with artisanal cheese and charcuterie pairing for a group of 10."
            },
            consultoria: {
              titulo: "Consulting for Restaurants, Hotels, and Bars",
              descripcion: "I advise hospitality establishments on optimizing wine lists, creating memorable guest experiences, and training staff in beverage service.<br /><strong>Example:</strong> Complete redesign of a Mediterranean restaurant's wine list focusing on local and sustainable wines."
            },
            entrenamiento: {
              titulo: "Team Training",
              descripcion: "I train service staff in guest service techniques, wine terminology, and pairing strategies to enhance the customer experience. Suitable for all knowledge levels.<br /><strong>Example:</strong> Four-session program for floor staff and baristas on by-the-glass service, decanting, and pairing recommendations."
            },
            cavas: {
              titulo: "Private Cellar Maintenance",
              descripcion: "Professional management of wine collections: organization, inventory, rotation, and advice on new acquisitions. Ideal for collectors and wine lovers.<br /><strong>Example:</strong> Organization and digitization of a private cellar inventory with over 200 premium labels."
            },
            educacion: {
              titulo: "Education and Workshops for Enthusiasts",
              descripcion: "Workshops designed for wine lovers who want to learn about tasting, wine regions, styles, and storage. Accessible, practical, and fun.<br /><strong>Example:</strong> 3-day introductory course on New World wines for beginners, including guided tastings."
            }
          },
          
          // Sección de Blog en inglés
          blog: {
            title: "Blog / Recommendations",
            card1: {
              title: "Perfect Pairing",
              text: "How to achieve the ideal balance between wines and dishes."
            },
            card2: {
              title: "Wine Regions",
              text: "Explore the best wine-producing areas in the world."
            },
            card3: {
              title: "Tasting Tips",
              text: "Practical advice to enjoy wine even more."
            }
          },
          
          // Secciones adicionales en inglés
          galeria_title: "Gallery",
          // Sección de testimonios en inglés
          testimonios_title: "Testimonials",
          testimonios: {
            testimonio1: {
              texto: "Juan Pablo's passion made our tasting unforgettable.",
              autor: "María R., San Francisco"
            },
            testimonio2: {
              texto: "Professionalism and charisma. A memorable night!",
              autor: "Alejandro M., Los Angeles"
            },
            testimonio3: {
              texto: "A unique experience. We learned and enjoyed a lot.",
              autor: "Carla D., Napa Valley"
            }
          },
          contacto_title: "Contact",
          contacto_nombre: "Name",
          contacto_email: "Email",
          contacto_mensaje: "Message",
          contacto_enviar: "Send",
          contacto_hablemos: "Let's Talk",
          footer_copyright: "© 2025 Juan Pablo Trillo — Sommelier. All rights reserved.",
          age_gate_title: "Age Verification",
          age_gate_question: "Are you 21 years or older?",
          age_gate_disclaimer: "This website contains information about alcoholic beverages. You must be 21 years or older to access.",
          age_gate_yes: "I am 21 or older",
          age_gate_no: "I am under 21",
          age_gate_restricted_title: "Access Restricted",
          age_gate_restricted_message: "Sorry, you must be 21 years or older to access this website.",
          age_gate_restricted_info: "Please visit us when you reach the legal drinking age."
        }
      },
      fr: {
        translation: {
          // Navbar en francés
          navbar: {
            about: "À propos de moi",
            services: "Services",
            blog: "Blog",
            gallery: "Galerie",
            testimonials: "Témoignages",
            contact: "Contact",
            language: "Langue"
          },
          // Hero section
          hero_button: "Réserver une Expérience",
          about_hero_title: "Passion pour la <span class=\"fst-italic text-wine\">culture liquide</span>.",

          // Sección "Sobre mí" en francés
          about_title: "À propos de moi",
          about_paragraph_1: "Je suis JP Juan Pablo, sommelier certifié en Californie, avec une expérience internationale dans l'industrie du vin. J'ai travaillé dans certaines des régions viticoles les plus emblématiques du monde, comme La Rioja et Ribera del Duero en Espagne, Toscane et Piémont en Italie, Bordeaux et Bourgogne en France, Vallée du Maipo et Vallée de Colchagua au Chili, Mendoza en Argentine et Napa Valley et Sonoma aux États-Unis.",
          about_paragraph_2: "Je suis actuellement Directeur des Vins et Boissons et Chef Sommelier à <strong>Tasting House</strong>, Los Gatos.",
          about_paragraph_9: "Originaire de Valdivia, au Chili, il possède plus de 15 ans d'expérience dans l'industrie du vin et de l'hospitalité au niveau international. Il est sommelier certifié par la Court of Master Sommeliers (CMS), détient le certificat WSET Level 3 Advanced et est Wine Judge certifié par l'American Wine Society (AWS). Il se prépare actuellement à l'examen CMS Advanced et complète sa certification d'Italian Wine Specialist. Il a été honoré en tant que participant trois fois au prestigieux Ruinart Challenge.",
          about_paragraph_3: "Ma passion est de partager la connaissance du vin de manière accessible et agréable, loin des prétentions et axée sur l'expérience sensorielle.",
          about_paragraph_4: "J'offre des services de conseil, des dégustations privées et de l'éducation au vin, adaptés aux besoins de chaque client.",
          about_paragraph_5: "Mon objectif est de démystifier le monde du vin et d'aider les gens à découvrir de nouvelles saveurs et expériences.",
          about_paragraph_6: "Je crois fermement que le vin est fait pour être apprécié et partagé, pas pour intimider.",
          about_paragraph_7: "J'aime voyager, découvrir de nouvelles régions viticoles et partager ces expériences avec mes clients.",
          about_paragraph_8: "Le vin est une culture liquide, une façon de voyager sans bouger de sa place.",
          
          // Sección de Servicios en francés
          servicios_subtitle: "Expériences",
          servicios: {
            titulo: "Services",
            catasPrivadas: {
              titulo: "Dégustations privées",
              descripcion: "Profitez d'une expérience unique avec des dégustations privées à domicile, en entreprise ou lors d'un événement spécial. Je sélectionne personnellement les vins et crée des accords mets-vins personnalisés pour explorer le monde du vin de manière sensorielle et divertissante.<br /><strong>Exemple :</strong> Dégustation à thème de vins italiens avec fromages et charcuteries artisanales pour un groupe de 10 personnes."
            },
            consultoria: {
              titulo: "Conseil pour restaurants, hôtels et bars",
              descripcion: "Je conseille les établissements gastronomiques pour optimiser leurs cartes des vins, créer des expériences mémorables pour les clients et former le personnel au service des boissons.<br /><strong>Exemple :</strong> Refonte complète de la carte des vins d'un restaurant méditerranéen mettant l'accent sur les vins locaux et durables."
            },
            entrenamiento: {
              titulo: "Formation pour les équipes",
              descripcion: "Je forme le personnel de service aux techniques d'accueil, au langage du vin et aux accords mets-vins pour améliorer l'expérience client. Adapté à tous les niveaux de connaissance.<br /><strong>Exemple :</strong> Programme de 4 sessions pour le personnel de salle et les baristas sur le service au verre, la décantation et les recommandations d'accords."
            },
            cavas: {
              titulo: "Gestion de caves privées",
              descripcion: "Gestion professionnelle des collections de vin : organisation, inventaire, rotation et conseils sur les nouvelles acquisitions. Idéal pour les collectionneurs et les amateurs de vin.<br /><strong>Exemple :</strong> Organisation et numérisation de l'inventaire d'une cave privée comptant plus de 200 étiquettes haut de gamme."
            },
            educacion: {
              titulo: "Éducation et ateliers pour amateurs",
              descripcion: "Ateliers conçus pour les passionnés de vin souhaitant apprendre la dégustation, les régions viticoles, les styles et la conservation. Accessibles, pratiques et ludiques.<br /><strong>Exemple :</strong> Cours d'introduction de 3 jours sur les vins du Nouveau Monde pour débutants, avec dégustations guidées."
            }
          },
          
          // Sección de Blog en francés
          blog: {
            title: "Blog / Recommandations",
            card1: {
              title: "Accord parfait",
              text: "Comment atteindre l'équilibre idéal entre vins et plats."
            },
            card2: {
              title: "Régions viticoles",
              text: "Explorez les meilleures zones productrices de vin au monde."
            },
            card3: {
              title: "Conseils de dégustation",
              text: "Astuces pratiques pour profiter encore plus du vin."
            }
          },
          
          // Secciones adicionales en francés
          galeria_title: "Galerie",
          // Sección de testimonios en francés
          testimonios_title: "Témoignages",
          testimonios: {
            testimonio1: {
              texto: "La passion de Juan Pablo a rendu notre dégustation inoubliable.",
              autor: "María R., San Francisco"
            },
            testimonio2: {
              texto: "Professionnalisme et charisme. Une soirée mémorable !",
              autor: "Alejandro M., Los Angeles"
            },
            testimonio3: {
              texto: "Une expérience unique. Nous avons beaucoup appris et apprécié.",
              autor: "Carla D., Napa Valley"
            }
          },
          contacto_title: "Contact",
          contacto_nombre: "Nom",
          contacto_email: "Email",
          contacto_mensaje: "Message",
          contacto_enviar: "Envoyer",
          contacto_hablemos: "Parlons",
          footer_copyright: "© 2025 Juan Pablo Trillo — Sommelier. Tous droits réservés.",
          age_gate_title: "Vérification d'Âge",
          age_gate_question: "Avez-vous 21 ans ou plus?",
          age_gate_disclaimer: "Ce site contient des informations sur les boissons alcoolisées. Vous devez avoir 21 ans ou plus pour y accéder.",
          age_gate_yes: "J'ai 21 ans ou plus",
          age_gate_no: "J'ai moins de 21 ans",
          age_gate_restricted_title: "Accès Restreint",
          age_gate_restricted_message: "Désolé, vous devez avoir 21 ans ou plus pour accéder à ce site.",
          age_gate_restricted_info: "Veuillez nous rendre visite lorsque vous aurez atteint l'âge légal pour consommer de l'alcool."
        }
      }
    }
  },
  function (err, t) {
    updateContent();
  }
);

// Función para actualizar el contenido basado en el idioma seleccionado
function updateContent() {
  // Actualizar textos normales con data-i18n
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    
    // Verificar si el elemento debe mantener el HTML en la traducción
    const isHtml = el.getAttribute("data-i18n-html") === "true";
    
    // Traducir el texto según corresponda
    if (key && i18next.exists(key)) {
      if (isHtml) {
        el.innerHTML = i18next.t(key);
      } else {
        el.textContent = i18next.t(key);
      }
    }
  });
  
  // Actualizar los atributos placeholder
  document.querySelectorAll("[data-i18n-placeholder]").forEach((el) => {
    const key = el.getAttribute("data-i18n-placeholder");
    
    // Traducir el placeholder
    if (key && i18next.exists(key)) {
      el.setAttribute("placeholder", i18next.t(key));
    }
  });
}

// Función para cambiar el idioma
function changeLanguage(lng) {
  i18next.changeLanguage(lng, function() {
    updateContent();
    // Actualizar el texto del botón del idioma seleccionado
    document.getElementById('dropdownLanguage').textContent = 
      lng === 'es' ? 'Español' : 
      lng === 'en' ? 'English' : 
      lng === 'fr' ? 'Français' : 'Idioma';
  });
}

// Ejecutar actualización al cargar la página
// Ejecutar actualización al cargar la página
document.addEventListener('DOMContentLoaded', function() {
  // Detectar idioma del navegador y aplicarlo
  const userLang = navigator.language || navigator.userLanguage;
  const lang = userLang.split('-')[0]; // Obtener código de idioma primario
  
  // Si el idioma detectado está soportado, usarlo
  if(['es', 'en', 'fr'].includes(lang)) {
    changeLanguage(lang);
  } else {
    // Si no, usar el idioma predeterminado (inglés)
    changeLanguage('en');
  }

});