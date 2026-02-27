export type Language = 'en' | 'fr' | 'es';

export interface Translations {
  nav: {
    howItWorks: string;
    sizes: string;
    locations: string;
    faq: string;
    bookNow: string;
  };
  hero: {
    headline: string;
    subheadline: string;
    primaryCta: string;
    secondaryText: string;
  };
  trust: {
    users: string;
    cctv: string;
    ssl: string;
  };
  features: {
    title: string;
    noQueues: string;
    noQueuesDesc: string;
    flexible: string;
    flexibleDesc: string;
    pinCode: string;
    pinCodeDesc: string;
    locations: string;
    locationsDesc: string;
  };
  howItWorks: {
    title: string;
    subtitle: string;
    step1: string;
    step1Desc: string;
    step2: string;
    step2Desc: string;
    step3: string;
    step3Desc: string;
  };
  sizes: {
    title: string;
    small: string;
    smallDesc: string;
    smallPrice: string;
    medium: string;
    mediumDesc: string;
    mediumPrice: string;
    large: string;
    largeDesc: string;
    largePrice: string;
    note: string;
    bookNow: string;
  };
  testimonials: {
    title: string;
    quote1: string;
    quote1Author: string;
    quote2: string;
    quote2Author: string;
    quote3: string;
    quote3Author: string;
  };
  locations: {
    title: string;
    subtitle: string;
    bookAtLocation: string;
    open: string;
  };
  faq: {
    title: string;
    q1: string;
    a1: string;
    q2: string;
    a2: string;
    q3: string;
    a3: string;
    q4: string;
    a4: string;
    q5: string;
    a5: string;
  };
  cta: {
    headline: string;
    text: string;
    button: string;
  };
  footer: {
    brand: string;
    tagline: string;
    about: string;
    careers: string;
    blog: string;
    press: string;
    helpCenter: string;
    terms: string;
    privacy: string;
    cookies: string;
    contact: string;
    copyright: string;
  };
}

export const translations: Record<Language, Translations> = {
  en: {
    nav: {
      howItWorks: 'How It Works',
      sizes: 'Sizes & Pricing',
      locations: 'Locations',
      faq: 'FAQ',
      bookNow: 'Book Now',
    },
    hero: {
      headline: 'Secure Self-Storage Lockers, Instant Access',
      subheadline: 'Drop your bags and go. Rent by the hour, day, or month with our smart, contactless lockers. 24/7 access.',
      primaryCta: 'Find a Locker',
      secondaryText: 'Trusted by 1,000+ users.',
    },
    trust: {
      users: 'Trusted by 1,000+ users',
      cctv: '24/7 CCTV Monitoring',
      ssl: 'SSL Secured Payments',
    },
    features: {
      title: 'Why Choose Oui Lockers?',
      noQueues: 'No Queues',
      noQueuesDesc: 'Skip the line. Book online and access your locker instantly with a PIN code.',
      flexible: 'Flexible Duration',
      flexibleDesc: 'Rent by the hour, day, or month. Extend your rental anytime.',
      pinCode: 'Pin Code Access',
      pinCodeDesc: 'Secure, contactless entry. Your code is sent to your phone instantly.',
      locations: 'Various Locations',
      locationsDesc: 'Find lockers in convenient city center locations worldwide.',
    },
    howItWorks: {
      title: 'How It Works',
      subtitle: 'Renting a smart locker is as easy as 1-2-3. No paperwork, no queues.',
      step1: 'Book Online',
      step1Desc: 'Select your location, locker size, and duration. Receive instant confirmation and a unique access code.',
      step2: 'Drop & Go',
      step2Desc: 'Enter your access code on the keypad. The door opens automatically. Place your items inside and close.',
      step3: 'Retrieve Anytime',
      step3Desc: 'Come and go as you please. Use the same code to re-open the locker. When done, just close the door.',
    },
    sizes: {
      title: 'Choose the Right Size',
      small: 'Small',
      smallDesc: 'Ideal for backpacks, purses, and small shopping bags.',
      smallPrice: 'From $5/day',
      medium: 'Medium',
      mediumDesc: 'Fits 1-2 standard suitcases or a carry-on bag.',
      mediumPrice: 'From $8/day',
      large: 'Large',
      largeDesc: 'Perfect for sports gear, golf clubs, or 3+ large suitcases.',
      largePrice: 'From $12/day',
      note: 'Final price is calculated by duration in the booking engine.',
      bookNow: 'Book Now',
    },
    testimonials: {
      title: 'What Our Customers Say',
      quote1: 'Saved my trip! My flight was delayed and I needed a place to store my luggage for 6 hours. Oui Lockers was a lifesaver.',
      quote1Author: 'Sarah J. - Traveler',
      quote2: 'Cheapest and easiest way to store my stuff over the summer break. No contract needed.',
      quote2Author: 'Marc D. - Student',
      quote3: 'I use the large locker for my golf clubs during the week. So convenient.',
      quote3Author: 'Carlos R. - Local',
    },
    locations: {
      title: 'Find a Locker Near You',
      subtitle: 'Choose from our convenient city center locations',
      bookAtLocation: 'Book at This Location',
      open: 'Open',
    },
    faq: {
      title: 'Frequently Asked Questions',
      q1: 'How do I receive my access code?',
      a1: 'You will receive a 6-digit PIN code via SMS and email immediately after your booking is confirmed.',
      q2: 'Can I extend my rental time?',
      a2: 'Yes! You can extend your rental through the link in your confirmation email or by visiting our booking engine again, as long as the locker is available.',
      q3: 'What items are prohibited?',
      a3: 'For safety reasons, flammable materials, illegal substances, and perishable food items are not allowed in the lockers.',
      q4: 'What if I lose my code?',
      a4: 'Contact our support team at help@ouilockers.com with your booking ID. We can verify your identity and resend your code.',
      q5: 'Is there a size limit for items?',
      a5: 'Please check the dimensions on our "Sizes" page. If your item doesn\'t fit, the locker door will not close, and the system will alert you to choose a larger size.',
    },
    cta: {
      headline: 'Ready to free your hands?',
      text: 'Find a locker near you and book in seconds.',
      button: 'View Locations',
    },
    footer: {
      brand: 'Oui Lockers',
      tagline: 'Smart storage for modern living.',
      about: 'About Us',
      careers: 'Careers',
      blog: 'Blog',
      press: 'Press',
      helpCenter: 'Help Center',
      terms: 'Terms of Service',
      privacy: 'Privacy Policy',
      cookies: 'Cookie Policy',
      contact: 'help@ouilockers.com',
      copyright: '© 2024 Oui Lockers. All rights reserved.',
    },
  },
  fr: {
    nav: {
      howItWorks: 'Comment ça marche',
      sizes: 'Tailles & Tarifs',
      locations: 'Emplacements',
      faq: 'FAQ',
      bookNow: 'Réserver',
    },
    hero: {
      headline: 'Consignes de stockage sécurisées, accès instantané',
      subheadline: 'Déposez vos bagages et partez. Louez à l\'heure, à la journée ou au mois avec nos casiers intelligents sans contact. Accès 24/7.',
      primaryCta: 'Trouver un casier',
      secondaryText: 'Approuvé par plus de 1 000 utilisateurs.',
    },
    trust: {
      users: 'Approuvé par 1 000+ utilisateurs',
      cctv: 'Surveillance CCTV 24/7',
      ssl: 'Paiements SSL sécurisés',
    },
    features: {
      title: 'Pourquoi choisir Oui Lockers?',
      noQueues: 'Pas de files d\'attente',
      noQueuesDesc: 'Évitez la file. Réservez en ligne et accédez à votre casier instantanément avec un code PIN.',
      flexible: 'Durée flexible',
      flexibleDesc: 'Louez à l\'heure, à la journée ou au mois. Prolongez votre location à tout moment.',
      pinCode: 'Accès par code PIN',
      pinCodeDesc: 'Entrée sans contact sécurisée. Votre code est envoyé instantanément à votre téléphone.',
      locations: 'Divers emplacements',
      locationsDesc: 'Trouvez des casiers dans des pratiques emplacements en centre-ville dans le monde entier.',
    },
    howItWorks: {
      title: 'Comment ça marche',
      subtitle: 'Louer un casier intelligent est aussi simple que 1-2-3. Pas de papier, pas de file.',
      step1: 'Réserver en ligne',
      step1Desc: 'Sélectionnez votre emplacement, la taille du casier et la durée. Recevez une confirmation instantanée et un code d\'accès unique.',
      step2: 'Déposez et partez',
      step2Desc: 'Entrez votre code d\'accès sur le clavier. La porte s\'ouvre automatiquement. Placez vos objets à l\'intérieur et fermez.',
      step3: 'Récupérez à tout moment',
      step3Desc: 'Venez et partez à votre guise. Utilisez le même code pour rouvrir le casier. Une fois terminé, fermez simplement la porte.',
    },
    sizes: {
      title: 'Choisissez la bonne taille',
      small: 'Petit',
      smallDesc: 'Idéal pour les sacs à dos, les sacs à main et les petits sacs de shopping.',
      smallPrice: 'À partir de 5€/jour',
      medium: 'Moyen',
      mediumDesc: 'Convient à 1-2 valises standard ou un bagage à main.',
      mediumPrice: 'À partir de 8€/jour',
      large: 'Grand',
      largeDesc: 'Parfait pour l\'équipement sportif, les clubs de golf ou 3+ grandes valises.',
      largePrice: 'À partir de 12€/jour',
      note: 'Le prix final est calculé selon la durée dans le moteur de réservation.',
      bookNow: 'Réserver',
    },
    testimonials: {
      title: 'Ce que disent nos clients',
      quote1: 'Sauvé mon voyage! Mon vol était retardé et j\'avais besoin d\'un endroit pour stocker mes bagages pendant 6 heures. Oui Lockers a été une sauvegarde.',
      quote1Author: 'Sarah J. - Voyageuse',
      quote2: 'Le moyen le moins cher et le plus simple de stocker mes affaires pendant les vacances d\'été. Pas de contrat nécessaire.',
      quote2Author: 'Marc D. - Étudiant',
      quote3: 'J\'utilise le grand casier pour mes clubs de golf pendant la semaine. Très pratique.',
      quote3Author: 'Carlos R. - Local',
    },
    locations: {
      title: 'Trouvez un casier près de chez vous',
      subtitle: 'Choisissez parmi nos emplacements pratiques en centre-ville',
      bookAtLocation: 'Réserver à cet emplacement',
      open: 'Ouvert',
    },
    faq: {
      title: 'Questions fréquentes',
      q1: 'Comment recevoir mon code d\'accès?',
      a1: 'Vous recevrez un code PIN à 6 chiffres par SMS et par email immédiatement après la confirmation de votre réservation.',
      q2: 'Puis-je prolonger ma durée de location?',
      a2: 'Oui! Vous pouvez prolonger votre location via le lien dans votre email de confirmation ou en visitant à nouveau notre moteur de réservation, tant que le casier est disponible.',
      q3: 'Quels articles sont interdits?',
      a3: 'Pour des raisons de sécurité, les matériaux inflammables, les substances illégales et les aliments périssables ne sont pas autorisés dans les casiers.',
      q4: 'Que faire si je perds mon code?',
      a4: 'Contactez notre équipe de support à help@ouilockers.com avec votre ID de réservation. Nous pouvons vérifier votre identité et vous renvoyer votre code.',
      q5: 'Y a-t-il une limite de taille pour les articles?',
      a5: 'Veuillez vérifier les dimensions sur notre page "Tailles". Si votre article ne rentre pas, la porte du casier ne se fermera pas et le système vous alertera pour choisir une taille plus grande.',
    },
    cta: {
      headline: 'Prêt à libérer vos mains?',
      text: 'Trouvez un casier près de chez vous et réservez en quelques secondes.',
      button: 'Voir les emplacements',
    },
    footer: {
      brand: 'Oui Lockers',
      tagline: 'Stockage intelligent pour la vie moderne.',
      about: 'À propos',
      careers: 'Carrières',
      blog: 'Blog',
      press: 'Presse',
      helpCenter: 'Centre d\'aide',
      terms: 'Conditions d\'utilisation',
      privacy: 'Politique de confidentialité',
      cookies: 'Politique de cookies',
      contact: 'help@ouilockers.com',
      copyright: '© 2024 Oui Lockers. Tous droits réservés.',
    },
  },
  es: {
    nav: {
      howItWorks: 'Cómo funciona',
      sizes: 'Tamaños y Precios',
      locations: 'Ubicaciones',
      faq: 'Preguntas Frecuentes',
      bookNow: 'Reservar ahora',
    },
    hero: {
      headline: 'Taquillas de almacenamiento seguro, acceso instantáneo',
      subheadline: 'Deja tus maletas y vete. Alquila por hora, día o mes con nuestras taquillas inteligentes sin contacto. Acceso 24/7.',
      primaryCta: 'Encontrar una taquilla',
      secondaryText: 'Confiable para más de 1,000 usuarios.',
    },
    trust: {
      users: 'Confiable para 1,000+ usuarios',
      cctv: 'Monitoreo CCTV 24/7',
      ssl: 'Pagos SSL seguros',
    },
    features: {
      title: '¿Por qué elegir Oui Lockers?',
      noQueues: 'Sin filas',
      noQueuesDesc: 'Omite la fila. Reserva en línea y accede a tu taquilla instantáneamente con un código PIN.',
      flexible: 'Duración flexible',
      flexibleDesc: 'Alquila por hora, día o mes. Extiende tu alquiler en cualquier momento.',
      pinCode: 'Acceso con código PIN',
      pinCodeDesc: 'Entrada sin contacto segura. Tu código se envía instantáneamente a tu teléfono.',
      locations: 'Diversas ubicaciones',
      locationsDesc: 'Encuentra taquillas en ubicaciones convenientes en el centro de la ciudad en todo el mundo.',
    },
    howItWorks: {
      title: 'Cómo funciona',
      subtitle: 'Alquilar una taquilla inteligente es tan fácil como 1-2-3. Sin papeleo, sin filas.',
      step1: 'Reserva en línea',
      step1Desc: 'Selecciona tu ubicación, tamaño de taquilla y duración. Recibe confirmación instantánea y un código de acceso único.',
      step2: 'Deja y vete',
      step2Desc: 'Ingresa tu código de acceso en el teclado. La puerta se abre automáticamente. Coloca tus artículos dentro y cierra.',
      step3: 'Recupera cuando quieras',
      step3Desc: 'Ven y ve cuando quieras. Usa el mismo código para volver a abrir la taquilla. Cuando termines, simplemente cierra la puerta.',
    },
    sizes: {
      title: 'Elige el tamaño correcto',
      small: 'Pequeño',
      smallDesc: 'Ideal para mochilas, bolsos y pequeñas bolsas de compras.',
      smallPrice: 'Desde $5/día',
      medium: 'Mediano',
      mediumDesc: 'Cabe 1-2 maletas estándar o una bolsa de mano.',
      mediumPrice: 'Desde $8/día',
      large: 'Grande',
      largeDesc: 'Perfecto para equipos deportivos, palos de golf o 3+ maletas grandes.',
      largePrice: 'Desde $12/día',
      note: 'El precio final se calcula por duración en el motor de reservas.',
      bookNow: 'Reservar ahora',
    },
    testimonials: {
      title: 'Lo que dicen nuestros clientes',
      quote1: '¡Salvó mi viaje! Mi vuelo se retrasó y necesitaba un lugar para guardar mi equipaje durante 6 horas. Oui Lockers fue una salvación.',
      quote1Author: 'Sarah J. - Viajera',
      quote2: 'La forma más barata y fácil de guardar mis cosas durante las vacaciones de verano. Sin contrato necesario.',
      quote2Author: 'Marc D. - Estudiante',
      quote3: 'Uso la taquilla grande para mis palos de golf durante la semana. Muy conveniente.',
      quote3Author: 'Carlos R. - Local',
    },
    locations: {
      title: 'Encuentra una taquilla cerca de ti',
      subtitle: 'Elige entre nuestras convenientes ubicaciones en el centro de la ciudad',
      bookAtLocation: 'Reservar en esta ubicación',
      open: 'Abierto',
    },
    faq: {
      title: 'Preguntas Frecuentes',
      q1: '¿Cómo recibo mi código de acceso?',
      a1: 'Recibirás un código PIN de 6 dígitos por SMS y correo electrónico inmediatamente después de que se confirme tu reserva.',
      q2: '¿Puedo extender mi tiempo de alquiler?',
      a2: '¡Sí! Puedes extender tu alquiler a través del enlace en tu correo de confirmación o visitando nuevamente nuestro motor de reservas, siempre que la taquilla esté disponible.',
      q3: '¿Qué artículos están prohibidos?',
      a3: 'Por razones de seguridad, materiales inflamables, sustancias ilegales y alimentos perecederos no están permitidos en las taquillas.',
      q4: '¿Qué pasa si pierdo mi código?',
      a4: 'Contacta a nuestro equipo de soporte en help@ouilockers.com con tu ID de reserva. Podemos verificar tu identidad y reenviar tu código.',
      q5: '¿Hay un límite de tamaño para los artículos?',
      a5: 'Por favor verifica las dimensiones en nuestra página "Tamaños". Si tu artículo no cabe, la puerta de la taquilla no se cerrará y el sistema te alertará para elegir un tamaño más grande.',
    },
    cta: {
      headline: '¿Listo para liberar tus manos?',
      text: 'Encuentra una taquilla cerca de ti y reserva en segundos.',
      button: 'Ver ubicaciones',
    },
    footer: {
      brand: 'Oui Lockers',
      tagline: 'Almacenamiento inteligente para la vida moderna.',
      about: 'Nosotros',
      careers: 'Carreras',
      blog: 'Blog',
      press: 'Prensa',
      helpCenter: 'Centro de ayuda',
      terms: 'Términos de servicio',
      privacy: 'Política de privacidad',
      cookies: 'Política de cookies',
      contact: 'help@ouilockers.com',
      copyright: '© 2024 Oui Lockers. Todos los derechos reservados.',
    },
  },
};
