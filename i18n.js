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
            testimonials: "Testimonios",
            contact: "Contacto",
            language: "Idioma"
          },
          // Blog Page
          blog: {
            page_title: "Blog & Recomendaciones",
            page_subtitle: "Explorando el mundo del vino, una copa a la vez.",
            view_all: "Ver todas las recomendaciones",
            title: "Blog / Recomendaciones",
            card1: {
              title: "Maridaje perfecto",
              text: "Cómo lograr el equilibrio ideal entre vinos y platos.",
              full_content: "<p>El maridaje es el arte de combinar vino y comida para crear una experiencia gastronómica superior a la suma de sus partes. No existen reglas estrictas, pero sí principios guías:</p><ul><li><strong>Acidez:</strong> Los vinos con alta acidez (como Sauvignon Blanc o Pinot Noir) son excelentes para 'limpiar' el paladar de comidas grasas o salsas ricas.</li><li><strong>Intensidad:</strong> Combina la intensidad del vino con la del plato. Un Cabernet Sauvignon robusto opacaría un pescado delicado, mientras que un Pinot Grigio desaparecería ante un estofado de carne.</li><li><strong>Dulzor:</strong> Para postres, asegúrate de que el vino sea al menos tan dulce como el plato, o se sentirá amargo.</li><li><strong>Regionalidad:</strong> 'Lo que crece junto, va junto'. Un Chianti con pasta y salsa de tomate es un clásico por una razón.</li></ul><p>Recuerda: El mejor maridaje es aquel que más disfrutas tú.</p>"
            },
            card2: {
              title: "Regiones vinícolas",
              text: "Explora las zonas productoras más icónicas, con especial énfasis en el terroir chileno.",
              full_content: "<p>El mundo del vino es vasto, pero ciertas regiones destacan por su historia y calidad excepcional:</p><ul><li><strong>Chile (Maipo, Colchagua y Casablanca):</strong> Desde los Cabernet Sauvignon especiados del Maipo hasta el Carmenère profundo de Colchagua y los blancos frescos de Casablanca, Chile ofrece una diversidad única entre montaña y mar.</li><li><strong>Burdeos, Francia:</strong> Referencia mundial para mezclas de Cabernet Sauvignon y Merlot, con elegancia y gran potencial de guarda.</li><li><strong>Toscana, Italia:</strong> Famosa por la Sangiovese, produciendo desde el clásico Chianti hasta los prestigiosos Super Toscanos.</li><li><strong>Valle de Napa, EE.UU.:</strong> Epicentro de los tintos potentes y opulentos en el Nuevo Mundo.</li><li><strong>Mendoza, Argentina:</strong> Líder indiscutido en Malbec de altura, con gran intensidad y color.</li></ul><p>Viajar a través de la copa es la forma más accesible de conocer el mundo.</p>"
            },
            card3: {
              title: "Consejos de cata",
              text: "Tips prácticos para disfrutar aún más del vino.",
              full_content: "<p>Catar vino no tiene por qué ser intimidante. Sigue estos 4 pasos sencillos (Las 4 'S' en inglés):</p><ol><li><strong>See (Ver):</strong> Inclina la copa sobre un fondo blanco. El color te da pistas sobre la uva y la edad (los tintos se vuelven más ladrillo con el tiempo, los blancos más dorados).</li><li><strong>Swirl (Girar):</strong> Gira suavemente el vino en la copa. Esto oxigena el vino y libera sus aromas volátiles.</li><li><strong>Smell (Oler):</strong> Mete la nariz en la copa. ¿Hueles fruta? ¿Flores? ¿Especias? ¿Madera? Tómate tu tiempo.</li><li><strong>Sip (Probar):</strong> Toma un sorbo pequeño y muévelo por toda tu boca. Evalúa la acidez (salivación), el tanino (sequedad), el alcohol (calor) y el cuerpo (peso).</li></ol><p>Lo más importante: ¡Confía en tu propio paladar!</p>"
            },
            card4: {
              title: "El Arte de Decantar",
              text: "¿Cuándo y por qué usar un decantador?",
              full_content: "<p>Decantar tiene dos funciones principales: oxigenar el vino y separar los sedimentos.</p><ul><li><strong>Oxigenación:</strong> Ideal para vinos tintos jóvenes y tánicos. El contacto con el aire 'abre' los aromas y suaviza los taninos.</li><li><strong>Separación:</strong> Esencial para vinos viejos que han acumulado sedimentos naturales. Decanta suavemente con una luz detrás del cuello de la botella para ver cuándo parar.</li></ul><p>No todos los vinos necesitan decantarse, pero casi todos los tintos se benefician de unos minutos de 'respiración'.</p>"
            },
            card5: {
              title: "Mundo de Espumosos",
              text: "Champagne, Cava, Prosecco... ¿Cuál es la diferencia?",
              full_content: "<p>Las burbujas vienen en muchos estilos:</p><ul><li><strong>Champagne (Francia):</strong> El rey. Método tradicional (segunda fermentación en botella). Complejo, notas de brioche y frutos secos.</li><li><strong>Cava (España):</strong> Mismo método que el Champagne pero con uvas locales (Macabeo, Xarel·lo, Parellada). Excelente relación calidad-precio.</li><li><strong>Prosecco (Italia):</strong> Método Charmat (fermentación en tanque). Frutal, floral y fresco. Ideal para aperitivos y cócteles.</li></ul><p>¡Siempre hay una excusa para celebrar!</p>"
            },
            card6: {
              title: "Excelencia en Servicio",
              text: "La importancia de la temperatura correcta.",
              full_content: "<p>Servir el vino a la temperatura adecuada es crucial:</p><ul><li><strong>Espumosos:</strong> Muy fríos (6-8°C).</li><li><strong>Blancos ligeros y Rosados:</strong> Fríos (7-10°C).</li><li><strong>Blancos con cuerpo y Tintos ligeros:</strong> Frescos (10-13°C).</li><li><strong>Tintos con cuerpo:</strong> Ligeramente frescos (15-18°C). ¡Nunca a temperatura ambiente si hace calor!</li></ul><p>El frío oculta aromas pero resalta la acidez; el calor resalta el alcohol y los taninos.</p>"
            },
            card7: {
              title: "Vino y Bienestar",
              text: "Los beneficios del consumo moderado.",
              full_content: "<p>Estudios sugieren que el consumo moderado de vino tinto puede ser beneficioso gracias a los antioxidantes como el resveratrol.</p><p>Se asocia con la salud cardiovascular y la reducción del estrés. Sin embargo, la clave es siempre la <strong>moderación</strong>. Una copa al día puede ser un placer saludable, el exceso nunca lo es.</p>"
            },
            card8: {
              title: "Iniciando tu Cava",
              text: "Tips para empezar tu colección personal.",
              full_content: "<p>No necesitas un sótano subterráneo para empezar. Busca un lugar fresco, oscuro y sin vibraciones.</p><ul><li><strong>Diversidad:</strong> Compra variedad de estilos y regiones.</li><li><strong>Guarda vs. Consumo:</strong> Ten vinos para beber hoy y otros para guardar 5-10 años.</li><li><strong>Comra doble:</strong> Si puedes, compra 3 botellas de lo mismo: una para probar ahora, otra en 2 años, y otra en 5.</li></ul>"
            },
            card9: {
              title: "Temperatura Ideal",
              text: "Cómo afecta la temperatura al sabor del vino.",
              full_content: "<p>Profundizando en la temperatura: Si sirves un vino tinto demasiado caliente (más de 20°C), el alcohol se sentirá agresivo y los aromas a fruta 'cocida'. Si sirves un blanco demasiado frío (menos de 4°C), no olerás casi nada. Un truco: saca los blancos del refri 15 min antes de servir, y mete los tintos al refri 15 min antes.</p>"
            }
          },
          hero_button: "Reservar Experiencia",
          about_hero_title: "Pasión por la <span class=\"fst-italic text-wine\">cultura líquida</span>.",

          // Sección "Sobre mí"
          about_title: "Sobre mí",
          about_paragraph_1: "Juan Pablo Trillo Molina se desempeña como Director de Vinos, Sommelier Jefe de Sala y Maître Sabrage en The Tasting House en Los Gatos, California. Desde que se unió al equipo en sus inicios, ha desempeñado un papel clave en la configuración y liderazgo del programa de vinos, incorporándose inicialmente como Sommelier Jefe y ascendiendo constantemente a su actual posición de liderazgo.",
          about_paragraph_2: "Con más de 15 años de experiencia en la industria global de la hospitalidad y el vino, la trayectoria profesional de Juan Pablo abarca una diversa gama de roles en bares de vinos, salas de degustación, hoteles y restaurantes en varios países. Su profundo conocimiento del servicio del vino y la cultura lo ha convertido en una figura integral en The Tasting House, donde también dirige el programa interno de educación sobre vinos y asesora a aspirantes a sommeliers.",
          about_paragraph_3: "Nativo de Valdivia, Chile—una ciudad reconocida por su vibrante escena cervecera, vinícola y culinaria—Juan Pablo desarrolló su aprecio por el vino temprano en la vida. Mientras cursaba su licenciatura en Ciencias Sociales y Psicología en Santiago, comenzó a explorar las reconocidas regiones vinícolas de Chile, particularmente el Valle de Rapel, lo que despertó una pasión duradera por la viticultura y el terroir.",
          about_paragraph_4: "En 2013, Juan Pablo se trasladó a los Estados Unidos y rápidamente se sumergió en las ricas regiones vinícolas que rodean Santa Cruz y las AVAs más amplias de California. Esta experiencia profundizó su compromiso de transicionar de entusiasta del vino a profesional del vino. Es Juez de Vinos Certificado por la American Wine Society (AWS), también posee el Certificado Avanzado WSET Nivel 3 y es Sommelier Certificado a través del Court of Master Sommeliers (CMS). Actualmente se está preparando para el Examen Avanzado de CMS, completando su Certificación de Especialista en Vino Italiano. Además, ha sido honrado como participante en tres ocasiones en el prestigioso Ruinart Challenge.",
          about_paragraph_5: "La pasión de Juan Pablo por el vino está arraigada en una perspectiva global. Sus viajes lo han llevado a través de los viñedos de Mendoza, Maipo, Rioja, Ribera del Duero, Burdeos, Toscana y más allá, enriqueciendo su conocimiento y aprecio por diversas culturas vinícolas. Esta experiencia internacional, combinada con su dedicación a la educación y la hospitalidad, define su enfoque para curar experiencias vinícolas excepcionales tanto para huéspedes como para colegas.",

          // Sección de Servicios
          servicios_subtitle: "Experiencias",
          servicios: {
            titulo: "Servicios",
            viajes: {
              titulo: "Viajes",
              descripcion: "Experiencias de enoturismo diseñadas para individuos, grupos o empresas en las regiones más prestigiosas del mundo. Creamos itinerarios personalizados en Chile, EE.UU. y Europa, enfocados en descubrir el terroir y la cultura local a través de visitas exclusivas y catas de alto nivel."
            },
            catasPrivadas: {
              titulo: "Catas privadas",
              descripcion: "Sesiones sensoriales a medida para eventos privados o actividades corporativas de integración. Selecciono vinos exclusivos y diseñamos dinámicas de grupo que se ajustan a tus intereses, garantizando una experiencia educativa y entretenida en el entorno que elijas."
            },
            consultoria: {
              titulo: "Consultoría a restaurantes, hoteles y bares",
              descripcion: "Asesoría estratégica dirigida tanto a coleccionistas privados como a empresas del sector hospitalidad (hoteles, restaurantes y bares). Optimizamos la selección de vinos y diseñamos cartas o colecciones que reflejen identidad, calidad y rentabilidad."
            },
            entrenamiento: {
              titulo: "Entrenamiento para equipos",
              descripcion: "Capacitación técnica y de servicio para equipos de empresas o grupos de entusiastas que buscan profesionalizar su conocimiento. Cubrimos desde técnicas de servicio y protocolo hasta maridaje, adaptando el nivel y profundidad a las necesidades específicas del cliente."
            },
            cavas: {
              titulo: "Mantenimiento de cavas privadas",
              descripcion: "Gestión integral de colecciones para particulares y empresas, asegurando la conservación óptima y organización de sus vinos. Ofrecemos servicios de inventario digital, rotación estratégica de botellas y asesoría experta en nuevas adquisiciones para potenciar su inversión."
            },
            educacion: {
              titulo: "Educación y talleres para aficionados",
              descripcion: "Talleres formativos para individuos o grupos que desean profundizar en la cultura del vino desde una perspectiva práctica. Exploramos regiones, estilos y técnicas de cata de forma accesible, ideal tanto para momentos sociales como para programas de desarrollo profesional."
            }
          },

          // Sección de Blog


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
          footer_copyright: "© 2026 Juan Pablo Trillo — Sommelier. Todos los derechos reservados.",
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
            testimonials: "Testimonials",
            contact: "Contact",
            language: "Language"
          },
          // Blog Page
          blog: {
            page_title: "Blog & Recommendations",
            page_subtitle: "Exploring the world of wine, one glass at a time.",
            view_all: "View All Recommendations",
            title: "Blog / Recommendations",
            card1: {
              title: "Perfect Pairing",
              text: "How to achieve the ideal balance between wines and dishes.",
              full_content: "<p>Pairing is the art of combining wine and food to create a gastronomic experience greater than the sum of its parts. There are no strict rules, but there are guiding principles:</p><ul><li><strong>Acidity:</strong> Wines with high acidity (like Sauvignon Blanc or Pinot Noir) are excellent for 'cleansing' the palate of fatty foods or rich sauces.</li><li><strong>Intensity:</strong> Match the intensity of the wine with the dish. A robust Cabernet Sauvignon would overpower a delicate fish, while a Pinot Grigio would vanish against a beef stew.</li><li><strong>Sweetness:</strong> For desserts, ensure the wine is at least as sweet as the dish, or it will taste bitter.</li><li><strong>Regionality:</strong> 'What grows together, goes together.' A Chianti with pasta and tomato sauce is a classic for a reason.</li></ul><p>Remember: The best pairing is the one you enjoy the most.</p>"
            },
            card2: {
              title: "Wine Regions",
              text: "Explore iconic wine-producing areas, with a special focus on Chilean terroir.",
              full_content: "<p>The wine world is vast, but certain regions stand out for their history and exceptional quality:</p><ul><li><strong>Chile (Maipo, Colchagua, and Casablanca):</strong> From the spicy Cabernet Sauvignons of Maipo to the deep Carmenère of Colchagua and the fresh whites of Casablanca, Chile offers unique diversity between the mountains and the sea.</li><li><strong>Bordeaux, France:</strong> Global reference for Cabernet Sauvignon and Merlot blends, known for elegance and great aging potential.</li><li><strong>Tuscany, Italy:</strong> Famous for Sangiovese, producing everything from classic Chianti to prestigious Super Tuscans.</li><li><strong>Napa Valley, USA:</strong> The epicenter of powerful and opulent reds in the New World.</li><li><strong>Mendoza, Argentina:</strong> Undisputed leader in high-altitude Malbec, with great intensity and color.</li></ul><p>Traveling through the glass is the most accessible way to see the world.</p>"
            },
            card3: {
              title: "Tasting Tips",
              text: "Practical advice to enjoy wine even more.",
              full_content: "<p>Wine tasting doesn't have to be intimidating. Follow these 4 simple steps (The 4 'S's):</p><ol><li><strong>See:</strong> Tilt the glass over a white background. Color gives clues about the grape and age (reds turn brick-like with time, whites more golden).</li><li><strong>Swirl:</strong> Gently swirl the wine in the glass. This oxygenates the wine and releases its volatile aromas.</li><li><strong>Smell:</strong> Put your nose in the glass. Do you smell fruit? Flowers? Spices? Wood? Take your time.</li><li><strong>Sip:</strong> Take a small sip and move it around your mouth. Evaluate acidity (salivation), tannin (dryness), alcohol (warmth), and body (weight).</li></ol><p>Most importantly: Trust your own palate!</p>"
            },
            card4: {
              title: "The Art of Decanting",
              text: "When and why to use a decanter?",
              full_content: "<p>Decanting serves two main functions: oxygenating the wine and separating sediment.</p><ul><li><strong>Oxygenation:</strong> Ideal for young, tannic red wines. Contact with air 'opens up' aromas and softens tannins.</li><li><strong>Separation:</strong> Essential for old wines that have accumulated natural sediment. Decant gently with a light behind the bottle neck to see when to stop.</li></ul><p>Not all wines need decanting, but almost all reds benefit from a few minutes of 'breathing'.</p>"
            },
            card5: {
              title: "World of Sparkling",
              text: "Champagne, Cava, Prosecco... What's the difference?",
              full_content: "<p>Bubbles come in many styles:</p><ul><li><strong>Champagne (France):</strong> The king. Traditional method (second fermentation in bottle). Complex, notes of brioche and nuts.</li><li><strong>Cava (Spain):</strong> Same method as Champagne but with local grapes (Macabeo, Xarel·lo, Parellada). Excellent value.</li><li><strong>Prosecco (Italy):</strong> Charmat method (tank fermentation). Fruity, floral, and fresh. Ideal for aperitifs.</li></ul><p>There is always an excuse to celebrate!</p>"
            },
            card6: {
              title: "Service Excellence",
              text: "The importance of correct temperature.",
              full_content: "<p>Serving wine at the right temperature is crucial:</p><ul><li><strong>Sparkling:</strong> Very cold (42-46°F).</li><li><strong>Light Whites & Rosés:</strong> Cold (45-50°F).</li><li><strong>Full-bodied Whites & Light Reds:</strong> Cool (50-55°F).</li><li><strong>Full-bodied Reds:</strong> Slightly cool (59-64°F). Never room temperature if it's warm!</li></ul><p>Cold hides aromas but highlights acidity; heat highlights alcohol and tannins.</p>"
            },
            card7: {
              title: "Wine & Wellness",
              text: "Benefits of moderate consumption.",
              full_content: "<p>Studies suggest moderate red wine consumption can be beneficial due to antioxidants like resveratrol.</p><p>It is associated with cardiovascular health and stress reduction. However, the key is always <strong>moderation</strong>. One glass a day can be a healthy pleasure, excess never is.</p>"
            },
            card8: {
              title: "Starting Your Cellar",
              text: "Tips to start your personal collection.",
              full_content: "<p>You don't need an underground basement to start. Look for a cool, dark, vibration-free spot.</p><ul><li><strong>Diversity:</strong> Buy a variety of styles and regions.</li><li><strong>Aging vs. Drinking:</strong> Have wines to drink today and others to age 5-10 years.</li><li><strong>Buy Double:</strong> If you can, buy 3 bottles of the same: one to try now, one in 2 years, and one in 5.</li></ul>"
            },
            card9: {
              title: "Ideal Temperature",
              text: "How temperature affects wine flavor.",
              full_content: "<p>Diving deeper into temperature: If you serve a red wine too warm (over 68°F), the alcohol will feel aggressive and fruit aromas 'cooked'. If you serve a white too cold (under 40°F), you won't smell much. A trick: take whites out of the fridge 15 mins before serving, and put reds in the fridge 15 mins before.</p>"
            }
          },
          hero_button: "Book Experience",
          about_hero_title: "Passion for <span class=\"fst-italic text-wine\">liquid culture</span>.",

          // Sección "Sobre mí" en inglés
          about_title: "About Me",
          about_paragraph_1: "Juan Pablo Trillo Molina serves as the Wine Director, Lead Floor Sommelier, and Maître Sabrage at The Tasting House in Los Gatos, California. Since joining the team at its inception, he has played a key role in shaping and leading the wine program, initially joining as Lead Sommelier and steadily rising to his current leadership position.",
          about_paragraph_2: "With over 15 years of experience in the global hospitality and wine industry, Juan Pablo’s professional background spans a diverse range of roles in wine bars, tasting rooms, hotels, and restaurants across several countries. His deep understanding of wine service and culture has made him an integral figure at The Tasting House, where he also leads the internal wine education program and mentors aspiring sommeliers.",
          about_paragraph_3: "A native of Valdivia, Chile—a town renowned for its vibrant beer, wine, and culinary scene—Juan Pablo developed his appreciation for wine early in life. While pursuing a Bachelor's degree in Social Sciences and Psychology in Santiago, he began exploring Chile’s renowned wine regions, particularly the Rapel Valley, which sparked a lasting passion for viticulture and terroir.",
          about_paragraph_4: "In 2013, Juan Pablo relocated to the United States and quickly became immersed in the rich wine regions surrounding Santa Cruz and the broader California AVAs. This experience deepened his commitment to transitioning from wine enthusiast to wine professional. He is a Certified Wine Judge by the American Wine Society (AWS) also holds WSET Level 3 Advanced Certificate and is a Certified Sommelier through the Court of Master Sommeliers (CMS). He is currently preparing for the CMS Advanced Exam, completing his Italian Wine Specialist Certification. Additionally, he has been honored as a three-time participant in the prestigious Ruinart Challenge.",
          about_paragraph_5: "Juan Pablo’s passion for wine is rooted in a global perspective. His travels have taken him through the vineyards of Mendoza, Maipo, Rioja, Ribera del Duero, Bordeaux, Tuscany, and beyond, enriching his knowledge and appreciation for diverse wine cultures. This international experience, combined with his dedication to education and hospitality, defines his approach to curating exceptional wine experiences for guests and colleagues alike.",

          // Sección de Servicios en inglés
          servicios_subtitle: "Experiences",
          servicios: {
            titulo: "Services",
            viajes: {
              titulo: "Travel",
              descripcion: "Wine tourism experiences designed for individuals, groups, or companies in the world's most prestigious regions. We create personalized itineraries in Chile, the USA, and Europe, focused on discovering local terroir and culture through exclusive visits and high-level tastings."
            },
            catasPrivadas: {
              titulo: "Private Tastings",
              descripcion: "Bespoke sensory sessions designed for private events or corporate team-building activities. I personally select exclusive wines and design group dynamics tailored to your interests, ensuring an educational and entertaining experience in your chosen setting."
            },
            consultoria: {
              titulo: "Consulting for Restaurants, Hotels, and Bars",
              descripcion: "Strategic advice for both private collectors and hospitality businesses (hotels, restaurants, and bars). We optimize wine selections and design wine lists or collections that reflect identity, quality, and profitability."
            },
            entrenamiento: {
              titulo: "Team Training",
              descripcion: "Technical and service training for corporate teams or groups of enthusiasts seeking to professionalize their knowledge. We cover service techniques, protocol, and pairing, adapting the depth to the client's specific needs."
            },
            cavas: {
              titulo: "Private Cellar Maintenance",
              descripcion: "Comprehensive collection management for individuals and companies, ensuring optimal conservation and organization of their wines. We offer digital inventory services, strategic bottle rotation, and expert advice on new acquisitions to enhance your investment."
            },
            educacion: {
              titulo: "Education and Workshops for Enthusiasts",
              descripcion: "Educational workshops for individuals or groups looking to deepen their wine culture from a practical perspective. We explore regions, styles, and tasting techniques in an accessible way, ideal for both social gatherings and professional development programs."
            }
          },

          // Sección de Blog en inglés


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
          footer_copyright: "© 2026 Juan Pablo Trillo — Sommelier. All rights reserved.",
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
            testimonials: "Témoignages",
            contact: "Contact",
            language: "Langue"
          },
          // Blog Page
          blog: {
            page_title: "Blog & Recommandations",
            page_subtitle: "Explorer le monde du vin, un verre à la fois.",
            view_all: "Voir toutes les recommandations",
            title: "Blog / Recommandations",
            card1: {
              title: "Accord parfait",
              text: "Comment atteindre l'équilibre idéal entre vins et plats.",
              full_content: "<p>L'accord mets-vins est l'art de combiner le vin et la nourriture pour créer une expérience gastronomique supérieure à la somme de ses parties. Il n'y a pas de règles strictes, mais des principes directeurs :</p><ul><li><strong>Acidité :</strong> Les vins à forte acidité (comme le Sauvignon Blanc ou le Pinot Noir) sont excellents pour 'nettoyer' le palais des aliments gras ou des sauces riches.</li><li><strong>Intensité :</strong> Accordez l'intensité du vin avec celle du plat. Un Cabernet Sauvignon robuste écraserait un poisson délicat, tandis qu'un Pinot Grigio disparaîtrait face à un ragoût de bœuf.</li><li><strong>Douceur :</strong> Pour les desserts, assurez-vous que le vin est au moins aussi doux que le plat, sinon il paraîtra amer.</li><li><strong>Régionalité :</strong> 'Ce qui pousse ensemble, va ensemble'. Un Chianti avec des pâtes et une sauce tomate est un classique pour une raison.</li></ul><p>N'oubliez pas : Le meilleur accord est celui que vous appréciez le plus.</p>"
            },
            card2: {
              title: "Régions viticoles",
              text: "Explorez les zones productrices les plus emblématiques, avec un accent particulier sur le terroir chilien.",
              full_content: "<p>Le monde du vin est vaste, mais certaines régions se distinguent par leur histoire et leur qualité exceptionnelle :</p><ul><li><strong>Chili (Maipo, Colchagua et Casablanca) :</strong> Des Cabernet Sauvignon épicés de Maipo au Carmenère profond de Colchagua et aux blancs frais de Casablanca, le Chili offre une diversité unique entre montagne et mer.</li><li><strong>Bordeaux, France :</strong> Référence mondiale pour les assemblages Cabernet Sauvignon et Merlot, connus pour leur élégance et leur grand potentiel de garde.</li><li><strong>Toscane, Italie :</strong> Célèbre pour le Sangiovese, produisant tout, du Chianti classique aux prestigieux Super Toscans.</li><li><strong>Napa Valley, USA :</strong> L'épicentre des rouges puissants et opulents du Nouveau Monde.</li><li><strong>Mendoza, Argentine :</strong> Leader incontesté du Malbec d'altitude, avec une grande intensité et couleur.</li></ul><p>Voyager à travers le verre est la façon la plus accessible de voir le monde.</p>"
            },
            card3: {
              title: "Conseils de dégustation",
              text: "Astuces pratiques pour profiter encore plus du vin.",
              full_content: "<p>La dégustation de vin ne doit pas être intimidante. Suivez ces 4 étapes simples :</p><ol><li><strong>Regarder (See) :</strong> Inclinez le verre sur un fond blanc. La couleur donne des indices sur le cépage et l'âge (les rouges tuilent avec le temps, les blancs dorent).</li><li><strong>Tourner (Swirl) :</strong> Faites tourner doucement le vin dans le verre. Cela oxygène le vin et libère ses arômes volatils.</li><li><strong>Sentir (Smell) :</strong> Mettez votre nez dans le verre. Sentez-vous des fruits ? Des fleurs ? Des épices ? Du bois ? Prenez votre temps.</li><li><strong>Goûter (Sip) :</strong> Prenez une petite gorgée et faites-la circuler dans votre bouche. Évaluez l'acidité (salivation), les tanins (sécheresse), l'alcool (chaleur) et le corps (poids).</li></ol><p>Le plus important : Faites confiance à votre propre palais !</p>"
            },
            card4: {
              title: "L'Art de Décanter",
              text: "Quand et pourquoi utiliser une carafe ?",
              full_content: "<p>La décantation a deux fonctions principales : oxygéner le vin et séparer les sédiments.</p><ul><li><strong>Oxygénation :</strong> Idéal pour les vins rouges jeunes et tanniques. Le contact avec l'air 'ouvre' les arômes et adoucit les tanins.</li><li><strong>Séparation :</strong> Essentiel pour les vieux vins qui ont accumulé des sédiments naturels. Décantez doucement avec une lumière derrière le goulot pour voir quand arrêter.</li></ul><p>Tous les vins n'ont pas besoin d'être décantés, mais presque tous les rouges bénéficient de quelques minutes de 'respiration'.</p>"
            },
            card5: {
              title: "Monde des Effervescents",
              text: "Champagne, Cava, Prosecco... Quelle différence ?",
              full_content: "<p>Les bulles existent en plusieurs styles :</p><ul><li><strong>Champagne (France) :</strong> Le roi. Méthode traditionnelle (seconde fermentation en bouteille). Complexe, notes de brioche et de noix.</li><li><strong>Cava (Espagne) :</strong> Même méthode que le Champagne mais avec des raisins locaux. Excellent rapport qualité-prix.</li><li><strong>Prosecco (Italie) :</strong> Méthode Charmat (fermentation en cuve). Fruité, floral et frais. Idéal pour les apéritifs.</li></ul><p>Il y a toujours une excuse pour célébrer !</p>"
            },
            card6: {
              title: "Excellence du Service",
              text: "L'importance de la bonne température.",
              full_content: "<p>Servir le vin à la bonne température est crucial :</p><ul><li><strong>Effervescents :</strong> Très froids (6-8°C).</li><li><strong>Blancs légers et Rosés :</strong> Froids (7-10°C).</li><li><strong>Blancs corsés et Rouges légers :</strong> Frais (10-13°C).</li><li><strong>Rouges corsés :</strong> Légèrement frais (15-18°C). Jamais à température ambiante s'il fait chaud !</li></ul><p>Le froid masque les arômes mais souligne l'acidité ; la chaleur souligne l'alcool et les tanins.</p>"
            },
            card7: {
              title: "Vin et Bien-être",
              text: "Les bienfaits d'une consommation modérée.",
              full_content: "<p>Des études suggèrent qu'une consommation modérée de vin rouge peut être bénéfique grâce aux antioxydants comme le resvératrol.</p><p>Il est associé à la santé cardiovasculaire et à la réduction du stress. Cependant, la clé est toujours la <strong>modération</strong>. Un verre par jour peut être un plaisir sain, l'excès ne l'est jamais.</p>"
            },
            card8: {
              title: "Commencer sa Cave",
              text: "Conseils pour débuter votre collection.",
              full_content: "<p>Pas besoin d'une cave souterraine pour commencer. Cherchez un endroit frais, sombre et sans vibrations.</p><ul><li><strong>Diversité :</strong> Achetez une variété de styles et de régions.</li><li><strong>Garde vs Consommation :</strong> Ayez des vins à boire aujourd'hui et d'autres à garder 5-10 ans.</li><li><strong>Achetez en double :</strong> Si possible, achetez 3 bouteilles du même vin : une pour goûter maintenant, une dans 2 ans, et une dans 5 ans.</li></ul>"
            },
            card9: {
              title: "Température Idéale",
              text: "Comment la température affecte le goût.",
              full_content: "<p>Approfondissons la température : Si vous servez un vin rouge trop chaud (plus de 20°C), l'alcool semblera agressif et les arômes de fruits 'cuits'. Si vous servez un blanc trop froid (moins de 4°C), vous ne sentirez presque rien. Une astuce : sortez les blancs du frigo 15 min avant de servir, et mettez les rouges au frigo 15 min avant.</p>"
            }
          },
          hero_button: "Réserver une Expérience",
          about_hero_title: "Passion pour la <span class=\"fst-italic text-wine\">culture liquide</span>.",

          // Sección "Sobre mí" en francés
          about_title: "À propos de moi",
          about_paragraph_1: "Juan Pablo Trillo Molina occupe les fonctions de Directeur des Vins, Chef Sommelier et Maître Sabrage à The Tasting House à Los Gatos, en Californie. Depuis qu'il a rejoint l'équipe à ses débuts, il a joué un rôle clé dans l'élaboration et la direction du programme des vins, intégrant initialement l'équipe en tant que Chef Sommelier et gravissant régulièrement les échelons jusqu'à son poste de direction actuel.",
          about_paragraph_2: "Avec plus de 15 ans d'expérience dans l'industrie mondiale de l'hôtellerie et du vin, le parcours professionnel de Juan Pablo couvre une gamme diversifiée de rôles dans des bars à vin, des salles de dégustation, des hôtels et des restaurants dans plusieurs pays. Sa profonde compréhension du service du vin et de sa culture a fait de lui une figure intégrante de The Tasting House, où il dirige également le programme interne d'éducation au vin et encadre les aspirants sommeliers.",
          about_paragraph_3: "Originaire de Valdivia, au Chili—une ville réputée pour sa scène brassicole, viticole et culinaire dynamique—Juan Pablo a développé son appréciation pour le vin tôt dans la vie. Tout en poursuivant une licence en Sciences Sociales et Psychologie à Santiago, il a commencé à explorer les régions viticoles renommées du Chili, en particulier la Vallée de Rapel, ce qui a déclenché une passion durable pour la viticulture et le terroir.",
          about_paragraph_4: "En 2013, Juan Pablo a déménagé aux États-Unis et s'est rapidement immergé dans les riches régions viticoles entourant Santa Cruz et les AVA californiennes plus larges. Cette expérience a approfondi son engagement à passer du statut d'amateur de vin à celui de professionnel du vin. Il est Juge de Vin Certifié par l'American Wine Society (AWS), détient également le Certificat Avancé WSET Niveau 3 et est Sommelier Certifié par la Court of Master Sommeliers (CMS). Il se prépare actuellement à l'Examen Avancé CMS, complétant sa Certification de Spécialiste en Vin Italien. De plus, il a été honoré en tant que participant à trois reprises au prestigieux Ruinart Challenge.",
          about_paragraph_5: "La passion de Juan Pablo pour le vin est ancrée dans une perspective mondiale. Ses voyages l'ont mené à travers les vignobles de Mendoza, Maipo, Rioja, Ribera del Duero, Bordeaux, Toscane et au-delà, enrichissant ses connaissances et son appréciation des diverses cultures viticoles. Cette expérience internationale, combinée à son dévouement à l'éducation et à l'hospitalité, définit son approche pour curer des expériences viticoles exceptionnelles pour les invités comme pour ses collègues.",

          // Sección de Servicios en francés
          servicios_subtitle: "Expériences",
          servicios: {
            titulo: "Services",
            viajes: {
              titulo: "Voyages",
              descripcion: "Expériences d'œnotourisme conçues pour les particuliers, les groupes ou les entreprises dans les régions les plus prestigieuses du monde. Nous créons des itinéraires personnalisés au Chili, aux États-Unis et en Europe, axés sur la découverte du terroir et de la culture locale."
            },
            catasPrivadas: {
              titulo: "Dégustations privées",
              descripcion: "Sessions sensorielles sur mesure pour événements privés ou activités de team-building en entreprise. Je sélectionne des vins exclusifs et conçois des dynamiques de groupe adaptées à vos intérêts, garantissant une expérience éducative et divertissante dans le cadre de votre choix."
            },
            consultoria: {
              titulo: "Conseil pour restaurants, hôtels et bars",
              descripcion: "Conseil stratégique pour collectionneurs privés et entreprises du secteur de l'hôtellerie (hôtels, restaurants et bars). Nous optimisons la sélection des vins et concevons des cartes ou collections reflétant l'identité, la qualité et la rentabilité."
            },
            entrenamiento: {
              titulo: "Formation pour les équipes",
              descripcion: "Formation technique et de service pour les équipes d'entreprises ou les groupes d'amateurs souhaitant professionnaliser leurs connaissances. Nous couvrons les techniques de service, le protocole et les accords mets-vins, en adaptant le niveau à vos besoins."
            },
            cavas: {
              titulo: "Gestion de caves privées",
              descripcion: "Gestion intégrale de collections pour particuliers et entreprises, assurant une conservation et une organisation optimales. Nous proposons l'inventaire numérique, la rotation stratégique et le conseil expert sur les nouvelles acquisitions pour valoriser votre investissement."
            },
            educacion: {
              titulo: "Éducation et ateliers pour amateurs",
              descripcion: "Ateliers pour particuliers ou groupes souhaitant approfondir leur culture du vin. Nous explorons les régions, les styles et les techniques de dégustation de manière accessible, idéal pour les moments sociaux comme pour les programmes de développement professionnel."
            }
          },

          // Sección de Blog en francés


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
          footer_copyright: "© 2026 Juan Pablo Trillo — Sommelier. Tous droits réservés.",
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
  i18next.changeLanguage(lng, function () {
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
document.addEventListener('DOMContentLoaded', function () {
  // Detectar idioma del navegador y aplicarlo
  const userLang = navigator.language || navigator.userLanguage;
  const lang = userLang.split('-')[0]; // Obtener código de idioma primario

  // Si el idioma detectado está soportado, usarlo
  if (['es', 'en', 'fr'].includes(lang)) {
    changeLanguage(lang);
  } else {
    // Si no, usar el idioma predeterminado (inglés)
    changeLanguage('en');
  }

});