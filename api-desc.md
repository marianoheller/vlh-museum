BASE: https://www.rijksmuseum.nl/api/nl/


Endpoints:

/collection                                 Full collection
/collection/[object-number]                 Collection Details
/collection/[object-number]/tiles           Collection Image tiles


/api/pages/nl/[slug]                        Returns page (slug is page identifier)


/api/usersets                               Shows sets made by users
/api/usersets/[id]                          Userset details(id is userSet identifier)


/api/nl/agenda/[date]                       Shows events for date(yyyy-mm-dd)
/api/nl/agenda/[date]/exposition/[exposition-id]/availability/[period-id]    Calendar event availability
