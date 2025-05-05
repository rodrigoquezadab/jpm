i18next.use(i18nextBrowserLanguageDetector).init({
    debug: true,
    fallbackLng: 'es',
    resources: {
      es: {
        translation: {
          about_title: "Sobre mí",
          about_paragraph_1: "Hola, soy JP Trillo, sommelier chileno certificado y actualmente radicado en California. Llevo más de 10 años dedicado al mundo del vino, una pasión que me ha llevado a recorrer algunas de las regiones vitivinícolas más reconocidas del planeta.",
          about_paragraph_2: "Mi camino comenzó en Chile, explorando el Valle del Maipo, Colchagua y Casablanca, donde comprendí que el vino es mucho más que una bebida: es cultura, historia y encuentro. Desde entonces, he seguido aprendiendo y perfeccionándome, visitando lugares emblemáticos como La Rioja y Ribera del Duero en España; Toscana y Piamonte en Italia; Borgoña y Burdeos en Francia; Mendoza en Argentina; y, por supuesto, Napa y Sonoma aquí en Estados Unidos.",
          about_paragraph_3: "Hoy me desempeño como Wine & Beverage Director y Head Floor Sommelier en Tasting House, un bistró ubicado en Los Gatos, California, donde comparto experiencias únicas con amantes del vino de todas partes del mundo.",
          about_paragraph_4: "Estoy certificado por instituciones de gran prestigio como la Court of Master Sommeliers (Certified Level), el Wine & Spirit Education Trust (WSET Advanced), y la San Francisco Wine School. También completé un Wine Judge Program de tres años y soy Maître-Sabreur por la Confrérie du Sabre d'Or.",
          about_paragraph_5: "Creo profundamente que el vino no debe ser un privilegio de unos pocos. Para mí, el vino es un puente que une culturas, personas y momentos. Es una forma de contar historias y revivir memorias. Como decía mi abuelo: el vino no se bebe solo, se comparte.",
          about_paragraph_6: "Por eso, a través de este sitio, quiero acercar el mundo del vino a todos —ya sea mediante catas privadas, consultorías, talleres educativos o simplemente compartiendo mi experiencia y recomendaciones.",
          about_paragraph_7: "Te invito a conocer más, a disfrutar, a descubrir… y a volver a poner la botella sobre la mesa.",
          about_paragraph_8: "`El vino cuenta historias, une a las personas y debe ser parte de la vida diaria.`",
          social_follow_me: "Sígueme",
          contact_title: "Contáctame",
          contact_form_name: "Nombre",
          contact_form_email: "Correo electrónico",
          contact_form_message: "Mensaje",
          contact_form_button: "Enviar",
          footer_rights: "Todos los derechos reservados.",
        }
      },
      en: {
        translation: {
          about_title: "About Me",
          about_paragraph_1: "I'm Juan Pablo Trillo, a sommelier with a passion for wine.",
          about_paragraph_2: "I share unique wine experiences through personalized events.",
          social_follow_me: "Follow me",
          contact_title: "Contact Me",
          contact_form_name: "Name",
          contact_form_email: "Email",
          contact_form_message: "Message",
          contact_form_button: "Send",
          footer_rights: "All rights reserved.",
        }
      },
      fr: {
        translation: {
          about_title: "À propos de moi",
          about_paragraph_1: "Je suis Juan Pablo Trillo, sommelier passionné par le vin.",
          about_paragraph_2: "Je propose des expériences œnologiques uniques lors d'événements personnalisés.",
          social_follow_me: "Suivez-moi",
          contact_title: "Contactez-moi",
          contact_form_name: "Nom",
          contact_form_email: "Email",
          contact_form_message: "Message",
          contact_form_button: "Envoyer",
          footer_rights: "Tous droits réservés.",
        }
      }
    }
  }, function(err, t) {
    updateContent();
  });
  
  function updateContent() {
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      el.innerHTML = i18next.t(key);
    });
  }
  
  function changeLanguage(lng) {
    i18next.changeLanguage(lng, updateContent);
  }
  