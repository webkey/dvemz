<!--catalog menu-->
<ul class="@@classKey__list @@classKey-js">
	<!--@@classKey item start-->
	<li class="has-drop@@if(catalogMenuActiveItem === "Новости"){ current}">
		@@include('_navigation-LINK--full.tpl', { "itemText": "Новости", "itemLink": "typography.html", "key": "@@classKey", "specialValue": "" })

		@@include('_navigation-DROP-WRAP.tpl', { "dropLevel": "(==========1==========)", "start": "1", "key": "@@classKey"})
	<li>@@include('_navigation-LINK--full.tpl', { "itemText": "Цели и задачи", "itemLink": "#", "key": "@@classKey", "specialValue": "" })</li>
	<li class="has-drop">
		@@include('_navigation-LINK--full.tpl', { "itemText": "Направления деятельности", "itemLink": "#", "key": "@@classKey", "specialValue": "" })

		@@include('_navigation-DROP-WRAP.tpl', { "dropLevel": "(==========2==========)", "start": "1", "key": "@@classKey"})
	<li class="has-drop">
		@@include('_navigation-LINK--full.tpl', { "itemText": "Международное сотрудничество", "itemLink": "#", "key": "@@classKey", "specialValue": "" })

		@@include('_navigation-DROP-WRAP.tpl', { "dropLevel": "(==========3==========)", "start": "1", "key": "@@classKey"})
	<li>@@include('_navigation-LINK--full.tpl', { "itemText": "Перечень международных договоров, реализация положений которых входит в компетенцию МЧС", "itemLink": "#", "key": "@@classKey", "specialValue": "" })</li>
	<li>@@include('_navigation-LINK--full.tpl', { "itemText": "Межгосударственный совет по черезвычайным ситуациям природного и техногенного характера (МГС по ЧС) и Корпус сил СНГ", "itemLink": "#", "key": "@@classKey", "specialValue": "" })</li>
		@@include('_navigation-DROP-WRAP.tpl', { "dropLevel": "(==========3==========)", "end": "1", "key": "@@classKey"})

	<li class="has-drop">
		@@include('_navigation-LINK--full.tpl', { "itemText": "Наука", "itemLink": "#", "key": "@@classKey", "specialValue": "" })

		@@include('_navigation-DROP-WRAP.tpl', { "dropLevel": "(==========3==========)", "start": "1", "key": "@@classKey"})
	<li>@@include('_navigation-LINK--full.tpl', { "itemText": "Инновационный фонд МЧС", "itemLink": "#", "key": "@@classKey", "specialValue": "" })</li>
	<li>@@include('_navigation-LINK--full.tpl', { "itemText": "ГНТП «Защита от черезвычайных ситуаций»", "itemLink": "#", "key": "@@classKey", "specialValue": "" })</li>
	<li>@@include('_navigation-LINK--full.tpl', { "itemText": "ГПНИ «Информатика и космос, научное обеспечение безопасности и защиты от чрезвычайных ситуаций»", "itemLink": "#", "key": "@@classKey", "specialValue": "" })</li>
	<li>@@include('_navigation-LINK--full.tpl', { "itemText": "Государственная программа инновационного развития Республики Беларусь на 2011-20155 гг.", "itemLink": "#", "key": "@@classKey", "specialValue": "" })</li>
	<li>@@include('_navigation-LINK--full.tpl', { "itemText": "Государственная программа по преодолению последствий катастрофы на Чернобыльской АЭС на 2011-2015 гг. и на период до 2020", "itemLink": "#", "key": "@@classKey", "specialValue": "" })</li>
		@@include('_navigation-DROP-WRAP.tpl', { "dropLevel": "(==========3==========)", "end": "1", "key": "@@classKey"})

	<li>@@include('_navigation-LINK--full.tpl', { "itemText": "Образование", "itemLink": "#", "key": "@@classKey", "specialValue": "" })</li>
	<li>@@include('_navigation-LINK--full.tpl', { "itemText": "Работа с детьми и молодежью", "itemLink": "#", "key": "@@classKey", "specialValue": "" })</li>
	<li class="has-drop">
		@@include('_navigation-LINK--full.tpl', { "itemText": "История пожарного дела", "itemLink": "#", "key": "@@classKey", "specialValue": "" })

		@@include('_navigation-DROP-WRAP.tpl', { "dropLevel": "(==========3==========)", "start": "1", "key": "@@classKey"})
	<li>@@include('_navigation-LINK--full.tpl', { "itemText": "Музей МЧС", "itemLink": "#", "key": "@@classKey", "specialValue": "" })</li>
	<li>@@include('_navigation-LINK--full.tpl', { "itemText": "Хронология важнейших событий в истории пожарно-спасательной службы Беларуси", "itemLink": "#", "key": "@@classKey", "specialValue": "" })</li>
	<li>@@include('_navigation-LINK--full.tpl', { "itemText": "Архивариус", "itemLink": "#", "key": "@@classKey", "specialValue": "" })</li>
	<li>@@include('_navigation-LINK--full.tpl', { "itemText": "Фотоматериалы", "itemLink": "#", "key": "@@classKey", "specialValue": "" })</li>
		@@include('_navigation-DROP-WRAP.tpl', { "dropLevel": "(==========3==========)", "end": "1", "key": "@@classKey"})

	<li>@@include('_navigation-LINK--full.tpl', { "itemText": "Спорт", "itemLink": "#", "key": "@@classKey", "specialValue": "" })</li>
		@@include('_navigation-DROP-WRAP.tpl', { "dropLevel": "(==========2==========)", "end": "1", "key": "@@classKey"})

	<li class="has-drop">
		@@include('_navigation-LINK--full.tpl', { "itemText": "Руководство", "itemLink": "#", "key": "@@classKey", "specialValue": "" })

		@@include('_navigation-DROP-WRAP.tpl', { "dropLevel": "(==========2==========)", "start": "1", "key": "@@classKey"})
	<li class="has-drop">
		@@include('_navigation-LINK--full.tpl', { "itemText": "Руководство МЧС", "itemLink": "#", "key": "@@classKey", "specialValue": "" })

		@@include('_navigation-DROP-WRAP.tpl', { "dropLevel": "(==========3==========)", "start": "1", "key": "@@classKey"})
	<li>@@include('_navigation-LINK--full.tpl', { "itemText": "Биография Министра по ЧС РБ", "itemLink": "#", "key": "@@classKey", "specialValue": "" })</li>
		@@include('_navigation-DROP-WRAP.tpl', { "dropLevel": "(==========3==========)", "end": "1", "key": "@@classKey"})

	<li>@@include('_navigation-LINK--full.tpl', { "itemText": "График приема граждан", "itemLink": "#", "key": "@@classKey", "specialValue": "" })</li>
		@@include('_navigation-DROP-WRAP.tpl', { "dropLevel": "(==========2==========)", "end": "1", "key": "@@classKey"})

	<li>@@include('_navigation-LINK--full.tpl', { "itemText": "Контактная информация", "itemLink": "#", "key": "@@classKey", "specialValue": "" })</li>
	<li class="has-drop">
		@@include('_navigation-LINK--full.tpl', { "itemText": "Административные процедуры и дебюрократизация", "itemLink": "#", "key": "@@classKey", "specialValue": "" })

		@@include('_navigation-DROP-WRAP.tpl', { "dropLevel": "(==========2==========)", "start": "1", "key": "@@classKey"})
	<li>@@include('_navigation-LINK--full.tpl', { "itemText": "Работа с обращениями граждан", "itemLink": "#", "key": "@@classKey", "specialValue": "" })</li>
	<li>@@include('_navigation-LINK--full.tpl', { "itemText": "Процедуры МЧС", "itemLink": "#", "key": "@@classKey", "specialValue": "" })</li>
		@@include('_navigation-DROP-WRAP.tpl', { "dropLevel": "(==========2==========)", "end": "1", "key": "@@classKey"})

	<li>@@include('_navigation-LINK--full.tpl', { "itemText": "Важнейшие мероприятия", "itemLink": "#", "key": "@@classKey", "specialValue": "" })</li>
	<li class="has-drop">
		@@include('_navigation-LINK--full.tpl', { "itemText": "Статистика", "itemLink": "#", "key": "@@classKey", "specialValue": "" })

		@@include('_navigation-DROP-WRAP.tpl', { "dropLevel": "(==========2==========)", "start": "1", "key": "@@classKey"})
	<li>@@include('_navigation-LINK--full.tpl', { "itemText": "Боевая работа", "itemLink": "#", "key": "@@classKey", "specialValue": "" })</li>
	<li>@@include('_navigation-LINK--full.tpl', { "itemText": "Сведенья о ЧС", "itemLink": "#", "key": "@@classKey", "specialValue": "" })</li>
		@@include('_navigation-DROP-WRAP.tpl', { "dropLevel": "(==========2==========)", "end": "1", "key": "@@classKey"})

		@@include('_navigation-DROP-WRAP.tpl', { "dropLevel": "(==========1==========)", "end": "1", "key": "@@classKey"})

	</li>
	<!--@@classKey item end-->
</ul>
<!--catalog menu end-->