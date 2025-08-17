function googleTranslateElementInit() {
  new google.translate.TranslateElement(
    {
      pageLanguage: 'fr', // langue par défaut de ton site
      includedLanguages: 'fr,en,es', // langues dispo
      layout: google.translate.TranslateElement.InlineLayout.SIMPLE
    },
    'google_translate_element'
  );
}
