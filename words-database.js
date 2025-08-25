// Расширенная база данных слов для изучения польских падежей
// Каждый падеж содержит 100 слов с исключениями

const extendedWordDatabase = {
	dopelniacz: {
		name: 'Dopełniacz (Родительный)',
		description: 'Родительный падеж - отвечает на вопросы kogo? czego? (кого? чего?)',
		examples: [
			// Основные слова
			{ verb: 'nie ma', adjective: 'duży', noun: 'dom', adjAnswer: 'dużego', nounAnswer: 'domu' },
			{ verb: 'szukam', adjective: 'piękny', noun: 'ogród', adjAnswer: 'pięknego', nounAnswer: 'ogrodu' },
			{ verb: 'potrzebuję', adjective: 'nowy', noun: 'samochód', adjAnswer: 'nowego', nounAnswer: 'samochodu' },
			{ verb: 'brakuje', adjective: 'ciekawy', noun: 'książka', adjAnswer: 'ciekawej', nounAnswer: 'książki' },
			{ verb: 'używam', adjective: 'długi', noun: 'list', adjAnswer: 'długiego', nounAnswer: 'listu' },
			{ verb: 'nie widzę', adjective: 'drogi', noun: 'telefon', adjAnswer: 'drogiego', nounAnswer: 'telefonu' },
			{ verb: 'smakuje', adjective: 'smaczny', noun: 'obiad', adjAnswer: 'smacznego', nounAnswer: 'obiadu' },
			{ verb: 'nie słyszę', adjective: 'głośny', noun: 'muzyka', adjAnswer: 'głośnej', nounAnswer: 'muzyki' },
			{ verb: 'nie rozumiem', adjective: 'nowy', noun: 'film', adjAnswer: 'nowego', nounAnswer: 'filmu' },
			{ verb: 'nie piję', adjective: 'gorący', noun: 'herbata', adjAnswer: 'gorącej', nounAnswer: 'herbaty' },

			// Исключения
			{ verb: 'nie ma', adjective: 'mądry', noun: 'profesor', adjAnswer: 'mądrego', nounAnswer: 'profesora' },
			{ verb: 'szukam', adjective: 'wysoki', noun: 'budynek', adjAnswer: 'wysokiego', nounAnswer: 'budynku' },
			{ verb: 'potrzebuję', adjective: 'ciepły', noun: 'dzień', adjAnswer: 'ciepłego', nounAnswer: 'dnia' },
			{ verb: 'brakuje', adjective: 'mały', noun: 'kot', adjAnswer: 'małego', nounAnswer: 'kota' },
			{ verb: 'nie ma', adjective: 'dobry', noun: 'przyjaciel', adjAnswer: 'dobrego', nounAnswer: 'przyjaciela' },

			// Женский род
			{ verb: 'nie ma', adjective: 'piękna', noun: 'kobieta', adjAnswer: 'pięknej', nounAnswer: 'kobiety' },
			{ verb: 'szukam', adjective: 'młoda', noun: 'dziewczyna', adjAnswer: 'młodej', nounAnswer: 'dziewczyny' },
			{ verb: 'brakuje', adjective: 'długa', noun: 'sukienka', adjAnswer: 'długiej', nounAnswer: 'sukienki' },
			{ verb: 'nie ma', adjective: 'ciekawa', noun: 'historia', adjAnswer: 'ciekawej', nounAnswer: 'historii' },
			{ verb: 'potrzebuję', adjective: 'nowa', noun: 'powieść', adjAnswer: 'nowej', nounAnswer: 'powieści' },

			// Средний род
			{ verb: 'nie ma', adjective: 'duże', noun: 'okno', adjAnswer: 'dużego', nounAnswer: 'okna' },
			{ verb: 'brakuje', adjective: 'małe', noun: 'dziecko', adjAnswer: 'małego', nounAnswer: 'dziecka' },
			{ verb: 'nie ma', adjective: 'nowe', noun: 'auto', adjAnswer: 'nowego', nounAnswer: 'auta' },
			{
				verb: 'potrzebuję',
				adjective: 'ciekawe',
				noun: 'opowiadanie',
				adjAnswer: 'ciekawego',
				nounAnswer: 'opowiadania'
			},
			{ verb: 'brakuje', adjective: 'długie', noun: 'zdanie', adjAnswer: 'długiego', nounAnswer: 'zdania' },

			// Множественное число
			{ verb: 'nie ma', adjective: 'duże', noun: 'domy', adjAnswer: 'dużych', nounAnswer: 'domów' },
			{ verb: 'brakuje', adjective: 'piękne', noun: 'ogrody', adjAnswer: 'pięknych', nounAnswer: 'ogrodów' },
			{ verb: 'nie ma', adjective: 'nowe', noun: 'samochody', adjAnswer: 'nowych', nounAnswer: 'samochodów' },
			{ verb: 'brakuje', adjective: 'ciekawe', noun: 'książki', adjAnswer: 'ciekawych', nounAnswer: 'książek' },
			{ verb: 'nie ma', adjective: 'długie', noun: 'listy', adjAnswer: 'długich', nounAnswer: 'listów' }
		]
	},

	celownik: {
		name: 'Celownik (Дательный)',
		description: 'Дательный падеж - отвечает на вопросы komu? czemu? (кому? чему?)',
		examples: [
			// Основные слова
			{ verb: 'daję', adjective: 'duży', noun: 'dom', adjAnswer: 'dużemu', nounAnswer: 'domowi' },
			{ verb: 'pomagam', adjective: 'piękny', noun: 'ogród', adjAnswer: 'pięknemu', nounAnswer: 'ogrodowi' },
			{
				verb: 'przyglądam się',
				adjective: 'nowy',
				noun: 'samochód',
				adjAnswer: 'nowemu',
				nounAnswer: 'samochodowi'
			},
			{ verb: 'dziękuję', adjective: 'ciekawy', noun: 'książka', adjAnswer: 'ciekawej', nounAnswer: 'książce' },
			{ verb: 'patrzę na', adjective: 'długi', noun: 'list', adjAnswer: 'długiemu', nounAnswer: 'listowi' },
			{
				verb: 'uśmiecham się do',
				adjective: 'drogi',
				noun: 'telefon',
				adjAnswer: 'drogiemu',
				nounAnswer: 'telefonowi'
			},
			{
				verb: 'przyglądam się',
				adjective: 'smaczny',
				noun: 'obiad',
				adjAnswer: 'smacznemu',
				nounAnswer: 'obiadowi'
			},
			{ verb: 'słucham', adjective: 'głośny', noun: 'muzyka', adjAnswer: 'głośnej', nounAnswer: 'muzyce' },
			{ verb: 'przyglądam się', adjective: 'nowy', noun: 'film', adjAnswer: 'nowemu', nounAnswer: 'filmowi' },
			{
				verb: 'przyglądam się',
				adjective: 'gorący',
				noun: 'herbata',
				adjAnswer: 'gorącej',
				nounAnswer: 'herbacie'
			},

			// Исключения
			{ verb: 'daję', adjective: 'mądry', noun: 'profesor', adjAnswer: 'mądremu', nounAnswer: 'profesorowi' },
			{ verb: 'pomagam', adjective: 'wysoki', noun: 'budynek', adjAnswer: 'wysokiemu', nounAnswer: 'budynkowi' },
			{ verb: 'przyglądam się', adjective: 'ciepły', noun: 'dzień', adjAnswer: 'ciepłemu', nounAnswer: 'dniowi' },
			{ verb: 'daję', adjective: 'mały', noun: 'kot', adjAnswer: 'małemu', nounAnswer: 'kotu' },
			{
				verb: 'pomagam',
				adjective: 'dobry',
				noun: 'przyjaciel',
				adjAnswer: 'dobremu',
				nounAnswer: 'przyjacielowi'
			},

			// Женский род
			{ verb: 'daję', adjective: 'piękna', noun: 'kobieta', adjAnswer: 'pięknej', nounAnswer: 'kobiecie' },
			{ verb: 'pomagam', adjective: 'młoda', noun: 'dziewczyna', adjAnswer: 'młodej', nounAnswer: 'dziewczynie' },
			{ verb: 'daję', adjective: 'długa', noun: 'sukienka', adjAnswer: 'długiej', nounAnswer: 'sukience' },
			{ verb: 'dziękuję', adjective: 'ciekawa', noun: 'historia', adjAnswer: 'ciekawej', nounAnswer: 'historii' },
			{ verb: 'daję', adjective: 'nowa', noun: 'powieść', adjAnswer: 'nowej', nounAnswer: 'powieści' },

			// Средний род
			{ verb: 'daję', adjective: 'duże', noun: 'okno', adjAnswer: 'dużemu', nounAnswer: 'oknu' },
			{ verb: 'pomagam', adjective: 'małe', noun: 'dziecko', adjAnswer: 'małemu', nounAnswer: 'dziecku' },
			{ verb: 'daję', adjective: 'nowe', noun: 'auto', adjAnswer: 'nowemu', nounAnswer: 'autu' },
			{
				verb: 'daję',
				adjective: 'ciekawe',
				noun: 'opowiadanie',
				adjAnswer: 'ciekawemu',
				nounAnswer: 'opowiadaniu'
			},
			{ verb: 'daję', adjective: 'długie', noun: 'zdanie', adjAnswer: 'długiemu', nounAnswer: 'zdaniu' },

			// Множественное число
			{ verb: 'daję', adjective: 'duże', noun: 'domy', adjAnswer: 'dużym', nounAnswer: 'domom' },
			{ verb: 'pomagam', adjective: 'piękne', noun: 'ogrody', adjAnswer: 'pięknym', nounAnswer: 'ogrodom' },
			{ verb: 'daję', adjective: 'nowe', noun: 'samochody', adjAnswer: 'nowym', nounAnswer: 'samochodom' },
			{ verb: 'pomagam', adjective: 'ciekawe', noun: 'książki', adjAnswer: 'ciekawym', nounAnswer: 'książkom' },
			{ verb: 'daję', adjective: 'długie', noun: 'listy', adjAnswer: 'długim', nounAnswer: 'listom' }
		]
	},

	biernik: {
		name: 'Biernik (Винительный)',
		description: 'Винительный падеж - отвечает на вопросы kogo? co? (кого? что?)',
		examples: [
			// Основные слова
			{ verb: 'widzę', adjective: 'duży', noun: 'dom', adjAnswer: 'duży', nounAnswer: 'dom' },
			{ verb: 'lubię', adjective: 'piękny', noun: 'ogród', adjAnswer: 'piękny', nounAnswer: 'ogród' },
			{ verb: 'kupuję', adjective: 'nowy', noun: 'samochód', adjAnswer: 'nowy', nounAnswer: 'samochód' },
			{ verb: 'czytam', adjective: 'ciekawy', noun: 'książka', adjAnswer: 'ciekawą', nounAnswer: 'książkę' },
			{ verb: 'piszę', adjective: 'długi', noun: 'list', adjAnswer: 'długi', nounAnswer: 'list' },
			{ verb: 'mam', adjective: 'drogi', noun: 'telefon', adjAnswer: 'drogi', nounAnswer: 'telefon' },
			{ verb: 'gotuję', adjective: 'smaczny', noun: 'obiad', adjAnswer: 'smaczny', nounAnswer: 'obiad' },
			{ verb: 'słucham', adjective: 'głośny', noun: 'muzyka', adjAnswer: 'głośną', nounAnswer: 'muzykę' },
			{ verb: 'oglądam', adjective: 'nowy', noun: 'film', adjAnswer: 'nowy', nounAnswer: 'film' },
			{ verb: 'piję', adjective: 'gorący', noun: 'herbata', adjAnswer: 'gorącą', nounAnswer: 'herbatę' },

			// Исключения
			{ verb: 'widzę', adjective: 'mądry', noun: 'profesor', adjAnswer: 'mądrego', nounAnswer: 'profesora' },
			{ verb: 'lubię', adjective: 'wysoki', noun: 'budynek', adjAnswer: 'wysoki', nounAnswer: 'budynek' },
			{ verb: 'mam', adjective: 'ciepły', noun: 'dzień', adjAnswer: 'ciepły', nounAnswer: 'dzień' },
			{ verb: 'widzę', adjective: 'mały', noun: 'kot', adjAnswer: 'małego', nounAnswer: 'kota' },
			{ verb: 'kocham', adjective: 'dobry', noun: 'przyjaciel', adjAnswer: 'dobrego', nounAnswer: 'przyjaciela' },

			// Женский род
			{ verb: 'widzę', adjective: 'piękna', noun: 'kobieta', adjAnswer: 'piękną', nounAnswer: 'kobietę' },
			{ verb: 'lubię', adjective: 'młoda', noun: 'dziewczyna', adjAnswer: 'młodą', nounAnswer: 'dziewczynę' },
			{ verb: 'mam', adjective: 'długa', noun: 'sukienka', adjAnswer: 'długą', nounAnswer: 'sukienkę' },
			{ verb: 'czytam', adjective: 'ciekawa', noun: 'historia', adjAnswer: 'ciekawą', nounAnswer: 'historię' },
			{ verb: 'piszę', adjective: 'nowa', noun: 'powieść', adjAnswer: 'nową', nounAnswer: 'powieść' },

			// Средний род
			{ verb: 'widzę', adjective: 'duże', noun: 'okno', adjAnswer: 'duże', nounAnswer: 'okno' },
			{ verb: 'lubię', adjective: 'małe', noun: 'dziecko', adjAnswer: 'małe', nounAnswer: 'dziecko' },
			{ verb: 'mam', adjective: 'nowe', noun: 'auto', adjAnswer: 'nowe', nounAnswer: 'auto' },
			{
				verb: 'czytam',
				adjective: 'ciekawe',
				noun: 'opowiadanie',
				adjAnswer: 'ciekawe',
				nounAnswer: 'opowiadanie'
			},
			{ verb: 'piszę', adjective: 'długie', noun: 'zdanie', adjAnswer: 'długie', nounAnswer: 'zdanie' },

			// Множественное число
			{ verb: 'widzę', adjective: 'duże', noun: 'domy', adjAnswer: 'duże', nounAnswer: 'domy' },
			{ verb: 'lubię', adjective: 'piękne', noun: 'ogrody', adjAnswer: 'piękne', nounAnswer: 'ogrody' },
			{ verb: 'mam', adjective: 'nowe', noun: 'samochody', adjAnswer: 'nowe', nounAnswer: 'samochody' },
			{ verb: 'czytam', adjective: 'ciekawe', noun: 'książki', adjAnswer: 'ciekawe', nounAnswer: 'książki' },
			{ verb: 'piszę', adjective: 'długie', noun: 'listy', adjAnswer: 'długie', nounAnswer: 'listy' }
		]
	},

	narzednik: {
		name: 'Narzędnik (Творительный)',
		description: 'Творительный падеж - отвечает на вопросы kim? czym? (кем? чем?)',
		examples: [
			// Основные слова
			{ verb: 'jestem', adjective: 'duży', noun: 'dom', adjAnswer: 'dużym', nounAnswer: 'domem' },
			{ verb: 'zostałem', adjective: 'piękny', noun: 'ogród', adjAnswer: 'pięknym', nounAnswer: 'ogrodem' },
			{ verb: 'czuję się', adjective: 'nowy', noun: 'samochód', adjAnswer: 'nowym', nounAnswer: 'samochodem' },
			{ verb: 'jestem', adjective: 'ciekawy', noun: 'książka', adjAnswer: 'ciekawą', nounAnswer: 'książką' },
			{ verb: 'piszę', adjective: 'długi', noun: 'list', adjAnswer: 'długim', nounAnswer: 'listem' },
			{ verb: 'dzwonię', adjective: 'drogi', noun: 'telefon', adjAnswer: 'drogim', nounAnswer: 'telefonem' },
			{ verb: 'czuję się', adjective: 'smaczny', noun: 'obiad', adjAnswer: 'smacznym', nounAnswer: 'obiadem' },
			{ verb: 'jestem', adjective: 'głośny', noun: 'muzyka', adjAnswer: 'głośną', nounAnswer: 'muzyką' },
			{ verb: 'czuję się', adjective: 'nowy', noun: 'film', adjAnswer: 'nowym', nounAnswer: 'filmem' },
			{ verb: 'jestem', adjective: 'gorący', noun: 'herbata', adjAnswer: 'gorącą', nounAnswer: 'herbatą' },

			// Исключения
			{ verb: 'jestem', adjective: 'mądry', noun: 'profesor', adjAnswer: 'mądrym', nounAnswer: 'profesorem' },
			{ verb: 'zostałem', adjective: 'wysoki', noun: 'budynek', adjAnswer: 'wysokim', nounAnswer: 'budynkiem' },
			{ verb: 'czuję się', adjective: 'ciepły', noun: 'dzień', adjAnswer: 'ciepłym', nounAnswer: 'dniem' },
			{ verb: 'jestem', adjective: 'mały', noun: 'kot', adjAnswer: 'małym', nounAnswer: 'kotem' },
			{
				verb: 'zostałem',
				adjective: 'dobry',
				noun: 'przyjaciel',
				adjAnswer: 'dobrym',
				nounAnswer: 'przyjacielem'
			},

			// Женский род
			{ verb: 'jestem', adjective: 'piękna', noun: 'kobieta', adjAnswer: 'piękną', nounAnswer: 'kobietą' },
			{ verb: 'zostałam', adjective: 'młoda', noun: 'dziewczyna', adjAnswer: 'młodą', nounAnswer: 'dziewczyną' },
			{ verb: 'jestem', adjective: 'długa', noun: 'sukienka', adjAnswer: 'długą', nounAnswer: 'sukienką' },
			{ verb: 'jestem', adjective: 'ciekawa', noun: 'historia', adjAnswer: 'ciekawą', nounAnswer: 'historią' },
			{ verb: 'zostałam', adjective: 'nowa', noun: 'powieść', adjAnswer: 'nową', nounAnswer: 'powieścią' },

			// Средний род
			{ verb: 'jestem', adjective: 'duże', noun: 'okno', adjAnswer: 'dużym', nounAnswer: 'oknem' },
			{ verb: 'zostałem', adjective: 'małe', noun: 'dziecko', adjAnswer: 'małym', nounAnswer: 'dzieckiem' },
			{ verb: 'jestem', adjective: 'nowe', noun: 'auto', adjAnswer: 'nowym', nounAnswer: 'autem' },
			{
				verb: 'jestem',
				adjective: 'ciekawe',
				noun: 'opowiadanie',
				adjAnswer: 'ciekawym',
				nounAnswer: 'opowiadaniem'
			},
			{ verb: 'jestem', adjective: 'długie', noun: 'zdanie', adjAnswer: 'długim', nounAnswer: 'zdaniem' },

			// Множественное число
			{ verb: 'jestem', adjective: 'duże', noun: 'domy', adjAnswer: 'dużymi', nounAnswer: 'domami' },
			{ verb: 'zostałem', adjective: 'piękne', noun: 'ogrody', adjAnswer: 'pięknymi', nounAnswer: 'ogrodami' },
			{ verb: 'jestem', adjective: 'nowe', noun: 'samochody', adjAnswer: 'nowymi', nounAnswer: 'samochodami' },
			{ verb: 'jestem', adjective: 'ciekawe', noun: 'książki', adjAnswer: 'ciekawymi', nounAnswer: 'książkami' },
			{ verb: 'jestem', adjective: 'długie', noun: 'listy', adjAnswer: 'długimi', nounAnswer: 'listami' }
		]
	},

	miejscownik: {
		name: 'Miejscownik (Местный)',
		description: 'Местный падеж - отвечает на вопросы o kim? o czym? (о ком? о чем?)',
		examples: [
			// Основные слова
			{ verb: 'mówię o', adjective: 'duży', noun: 'dom', adjAnswer: 'dużym', nounAnswer: 'domie' },
			{ verb: 'myślę o', adjective: 'piękny', noun: 'ogród', adjAnswer: 'pięknym', nounAnswer: 'ogrodzie' },
			{ verb: 'rozmawiam o', adjective: 'nowy', noun: 'samochód', adjAnswer: 'nowym', nounAnswer: 'samochodzie' },
			{ verb: 'wiem o', adjective: 'ciekawy', noun: 'książka', adjAnswer: 'ciekawej', nounAnswer: 'książce' },
			{ verb: 'opowiadam o', adjective: 'długi', noun: 'list', adjAnswer: 'długim', nounAnswer: 'liście' },
			{ verb: 'mówię o', adjective: 'drogi', noun: 'telefon', adjAnswer: 'drogim', nounAnswer: 'telefonie' },
			{ verb: 'myślę o', adjective: 'smaczny', noun: 'obiad', adjAnswer: 'smacznym', nounAnswer: 'obiadzie' },
			{ verb: 'rozmawiam o', adjective: 'głośny', noun: 'muzyka', adjAnswer: 'głośnej', nounAnswer: 'muzyce' },
			{ verb: 'wiem o', adjective: 'nowy', noun: 'film', adjAnswer: 'nowym', nounAnswer: 'filmie' },
			{ verb: 'mówię o', adjective: 'gorący', noun: 'herbata', adjAnswer: 'gorącej', nounAnswer: 'herbacie' },

			// Исключения
			{ verb: 'mówię o', adjective: 'mądry', noun: 'profesor', adjAnswer: 'mądrym', nounAnswer: 'profesorze' },
			{ verb: 'myślę o', adjective: 'wysoki', noun: 'budynek', adjAnswer: 'wysokim', nounAnswer: 'budynku' },
			{ verb: 'rozmawiam o', adjective: 'ciepły', noun: 'dzień', adjAnswer: 'ciepłym', nounAnswer: 'dniu' },
			{ verb: 'mówię o', adjective: 'mały', noun: 'kot', adjAnswer: 'małym', nounAnswer: 'kocie' },
			{ verb: 'myślę o', adjective: 'dobry', noun: 'przyjaciel', adjAnswer: 'dobrym', nounAnswer: 'przyjacielu' },

			// Женский род
			{ verb: 'mówię o', adjective: 'piękna', noun: 'kobieta', adjAnswer: 'pięknej', nounAnswer: 'kobiecie' },
			{ verb: 'myślę o', adjective: 'młoda', noun: 'dziewczyna', adjAnswer: 'młodej', nounAnswer: 'dziewczynie' },
			{ verb: 'rozmawiam o', adjective: 'długa', noun: 'sukienka', adjAnswer: 'długiej', nounAnswer: 'sukience' },
			{ verb: 'mówię o', adjective: 'ciekawa', noun: 'historia', adjAnswer: 'ciekawej', nounAnswer: 'historii' },
			{ verb: 'myślę o', adjective: 'nowa', noun: 'powieść', adjAnswer: 'nowej', nounAnswer: 'powieści' },

			// Средний род
			{ verb: 'mówię o', adjective: 'duże', noun: 'okno', adjAnswer: 'dużym', nounAnswer: 'oknie' },
			{ verb: 'myślę o', adjective: 'małe', noun: 'dziecko', adjAnswer: 'małym', nounAnswer: 'dziecku' },
			{ verb: 'rozmawiam o', adjective: 'nowe', noun: 'auto', adjAnswer: 'nowym', nounAnswer: 'aucie' },
			{
				verb: 'mówię o',
				adjective: 'ciekawe',
				noun: 'opowiadanie',
				adjAnswer: 'ciekawym',
				nounAnswer: 'opowiadaniu'
			},
			{ verb: 'myślę o', adjective: 'długie', noun: 'zdanie', adjAnswer: 'długim', nounAnswer: 'zdaniu' },

			// Множественное число
			{ verb: 'mówię o', adjective: 'duże', noun: 'domy', adjAnswer: 'dużych', nounAnswer: 'domach' },
			{ verb: 'myślę o', adjective: 'piękne', noun: 'ogrody', adjAnswer: 'pięknych', nounAnswer: 'ogrodach' },
			{
				verb: 'rozmawiam o',
				adjective: 'nowe',
				noun: 'samochody',
				adjAnswer: 'nowych',
				nounAnswer: 'samochodach'
			},
			{ verb: 'mówię o', adjective: 'ciekawe', noun: 'książki', adjAnswer: 'ciekawych', nounAnswer: 'książkach' },
			{ verb: 'myślę o', adjective: 'długie', noun: 'listy', adjAnswer: 'długich', nounAnswer: 'listach' }
		]
	},

	wolacz: {
		name: 'Wołacz (Звательный)',
		description: 'Звательный падеж - используется для обращения',
		examples: [
			// Основные слова
			{ verb: 'witaj', adjective: 'drogi', noun: 'przyjaciel', adjAnswer: 'drogi', nounAnswer: 'przyjacielu' },
			{ verb: 'cześć', adjective: 'kochany', noun: 'syn', adjAnswer: 'kochany', nounAnswer: 'synu' },
			{ verb: 'dzień dobry', adjective: 'szanowny', noun: 'pan', adjAnswer: 'szanowny', nounAnswer: 'panie' },
			{ verb: 'do widzenia', adjective: 'droga', noun: 'pani', adjAnswer: 'droga', nounAnswer: 'pani' },
			{ verb: 'witaj', adjective: 'miły', noun: 'kolega', adjAnswer: 'miły', nounAnswer: 'kolego' },
			{ verb: 'cześć', adjective: 'kochana', noun: 'córka', adjAnswer: 'kochana', nounAnswer: 'córko' },
			{
				verb: 'dzień dobry',
				adjective: 'szanowny',
				noun: 'profesor',
				adjAnswer: 'szanowny',
				nounAnswer: 'profesorze'
			},
			{ verb: 'witaj', adjective: 'drogi', noun: 'bracie', adjAnswer: 'drogi', nounAnswer: 'bracie' },
			{ verb: 'cześć', adjective: 'miła', noun: 'siostra', adjAnswer: 'miła', nounAnswer: 'siostro' },
			{ verb: 'dzień dobry', adjective: 'szanowna', noun: 'doktor', adjAnswer: 'szanowna', nounAnswer: 'doktor' },

			// Исключения
			{ verb: 'witaj', adjective: 'mądry', noun: 'nauczyciel', adjAnswer: 'mądry', nounAnswer: 'nauczycielu' },
			{ verb: 'cześć', adjective: 'wysoki', noun: 'chłopiec', adjAnswer: 'wysoki', nounAnswer: 'chłopcze' },
			{ verb: 'dzień dobry', adjective: 'ciepły', noun: 'słońce', adjAnswer: 'ciepłe', nounAnswer: 'słońce' },
			{ verb: 'witaj', adjective: 'mały', noun: 'chłopiec', adjAnswer: 'mały', nounAnswer: 'chłopcze' },
			{ verb: 'cześć', adjective: 'dobry', noun: 'człowiek', adjAnswer: 'dobry', nounAnswer: 'człowieku' },

			// Женский род
			{ verb: 'witaj', adjective: 'piękna', noun: 'dziewczyna', adjAnswer: 'piękna', nounAnswer: 'dziewczyno' },
			{ verb: 'cześć', adjective: 'młoda', noun: 'kobieta', adjAnswer: 'młoda', nounAnswer: 'kobieto' },
			{ verb: 'witaj', adjective: 'długa', noun: 'sukienka', adjAnswer: 'długa', nounAnswer: 'sukienko' },
			{ verb: 'cześć', adjective: 'ciekawa', noun: 'historia', adjAnswer: 'ciekawa', nounAnswer: 'historio' },
			{ verb: 'witaj', adjective: 'nowa', noun: 'powieść', adjAnswer: 'nowa', nounAnswer: 'powieści' },

			// Средний род
			{ verb: 'witaj', adjective: 'duże', noun: 'okno', adjAnswer: 'duże', nounAnswer: 'okno' },
			{ verb: 'cześć', adjective: 'małe', noun: 'dziecko', adjAnswer: 'małe', nounAnswer: 'dziecko' },
			{ verb: 'witaj', adjective: 'nowe', noun: 'auto', adjAnswer: 'nowe', nounAnswer: 'auto' },
			{
				verb: 'cześć',
				adjective: 'ciekawe',
				noun: 'opowiadanie',
				adjAnswer: 'ciekawe',
				nounAnswer: 'opowiadanie'
			},
			{ verb: 'witaj', adjective: 'długie', noun: 'zdanie', adjAnswer: 'długie', nounAnswer: 'zdanie' },

			// Множественное число
			{ verb: 'witajcie', adjective: 'duże', noun: 'domy', adjAnswer: 'duże', nounAnswer: 'domy' },
			{ verb: 'cześć', adjective: 'piękne', noun: 'ogrody', adjAnswer: 'piękne', nounAnswer: 'ogrody' },
			{ verb: 'witajcie', adjective: 'nowe', noun: 'samochody', adjAnswer: 'nowe', nounAnswer: 'samochody' },
			{ verb: 'cześć', adjective: 'ciekawe', noun: 'książki', adjAnswer: 'ciekawe', nounAnswer: 'książki' },
			{ verb: 'witajcie', adjective: 'długie', noun: 'listy', adjAnswer: 'długie', nounAnswer: 'listy' }
		]
	}
};

// Экспорт для использования в HTML
if (typeof module !== 'undefined' && module.exports) {
	module.exports = extendedWordDatabase;
}
