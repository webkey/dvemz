@@if(context.component === "heading") {

	<h1>
		<span class="mark">h1</span>
		Типографика в вебдизайне. Основные понятия и положения
	</h1>

}@@if(context.component === "dateTime") {

	<time class="datetime" datetime="2017-03-22T13:42">22 марта 2017, 13:42</time>

}@@if(context.component === "entryText") {

	<div class="entry-text">
		<p>Типографика играет <i>ключевую роль</i> в веб-дизайне, по статистике
			<b>95% содержимого</b> сайтов составляет текстовый контент. Шрифтовое оформление управляет настроением и создает определенную атмосферу при прочтении текстового содержимого веб-страниц.
		</p>
	</div>

}@@if(context.component === "popupOpen") {

	<div class="layout-text">
		<a href="#msg-popup" class="btn-default btn-popup-js">Открыть попап "Написать нам"</a>
	</div>

}@@if(context.component === "paragraphs") {

	<p>В этой статье будут рассмотрены <a href="#">основные аспекты современной веб-типографики</a>, которые помогут вам определиться при выборе <a href="#">шрифта</a> и способов оформления текста.</p>
	<p>Высота <a href="#">строчных букв</a> без выносных элементов — это расстояние от базовой до верхней линии шрифта, иначе говоря — величина очка строчных. Выбирая шрифты, которые вы хотите использовать при оформлении совместно, нужно следить, чтобы высота их строчных букв была одинакова. Это поможет выдержать
		<a href="#">одинаковый уровень насыщенности абзаца</a>. Кроме того, такой текст будет легче читаться.</p>
	<hr>
	<p>То, как будет выглядеть шрифт, зависит от того, как он будет набран. Times New Roman может выглядеть по-настоящему здорово. И главное: пусть лучше текст будет скучным, чем уродливым или нечитабельным.</p>

}@@if(context.component === "h2h6") {

	<h2>
		<span class="mark">h2</span>
		Забудьте о Comic Sans Представьте, что вы его вообще никогда не видели
	</h2>
	<p>Современная веб-типографика базируется на CSS-стилях. Меняя значения стилей браузера по умолчанию, можно сделать текстовое содержимое более привлекательным.</p>
	<p>В этой статье будут рассмотрены основные аспекты современной веб-типографики, которые помогут вам определиться при выборе шрифта и способов оформления текста.</p>
	<!--h3-->
	<h3>
		<span class="mark">h3</span>
		Если у вас недостаточно опыта и знаний, даже не пытайтесь использовать необычные, затейливые шрифты. Будьте проще
	</h3>
	<p>Одним из наиболее важных методов для эффективной передачи содержания является использование типографской иерархии.</p>
	<p>Она представляет собой систему организации данных, которая устанавливает порядок их важности, что позволяет пользователю найти то, что ему нужно.</p>
	<!--h4-->
	<h4>
		<span class="mark">h4</span>
		Экспериментировать с большим количеством шрифтов на начальном этапе не стоит. Двух вполне достаточно. Вы же не хотите превратить текст в разномастную ерунду
	</h4>
	<p>То, как будет выглядеть шрифт, зависит от того, как он будет набран. Times New Roman может выглядеть по-настоящему здорово. И главное: пусть лучше текст будет скучным, чем уродливым или нечитабельным.</p>
	<!--h5-->
	<h5>
		<span class="mark">h5</span>
		Гротеск со шрифтом с засечками, рукописный с модерном. Важно сохранить контраст. Два схожих шрифта рядом выглядят неряшливо.
	</h5>
	<p>Высота строчных букв без выносных элементов — это расстояние от базовой до верхней линии шрифта, иначе говоря — величина очка строчных. Выбирая шрифты, которые вы хотите использовать при оформлении совместно, нужно следить, чтобы высота их строчных букв была одинакова. Это поможет выдержать одинаковый уровень насыщенности абзаца. Кроме того, такой текст будет легче читаться.</p>
	<!--h6-->
	<h6>
		<span class="mark">h6</span>
		Шрифты без засечек имеют простой и четкий внешний вид. Шрифты с засечками, напротив, придают более серьезный и официальный тон.
	</h6>
	<p>В процессе чтения глаза привыкают к основному шрифту и они утомляются, если заголовки, оглавление и второстепенный текст набраны шрифтами разной гарнитуры, не гармонирующими с основным шрифтом. Поэтому, при подборе шрифтов достаточно остановиться на одном–двух шрифтах, а акценты расставлять за счет размера, цвета, начертания и т.п.</p>

}@@if(context.component === "fontStyle") {

	<h3><a href="#hashTextStyle" id="hashTextStyle" class="hashAnchor"><span class="mark">Начертания шрифта</span></a></h3>
	<!--italic-->
	<h4><a href="#hashTextStyleItalic" id="hashTextStyleItalic" class="hashAnchor"><span class="mark">Наклонный</span></a></h4>
	<p><i>В рекомендациях по сочетанию шрифтов преобладает негласное правило — для заголовков выбирается шрифт без засечек, а основной текст формируется шрифтом с засечками. Однако такой подход не настолько популярен, как может показаться.</i></p>

	<!--bold-->
	<h4><a href="#hashTextStyleBold" id="hashTextStyleBold" class="hashAnchor"><span class="mark">Жирный</span></a></h4>
	<p><b>На самом деле это правило касается в первую очередь печатных изданий, книгопечатания. Связано это с тем, что шрифт с засечками (небольшими росчерками на концах основных штрихов) плавно выстраивается в одну линию, облегчая восприятие текста и делая его более читабельным.</b></p>

	<!--bold italic-->
	<h4><a href="#hashTextStyleBoldItalic" id="hashTextStyleBoldItalic" class="hashAnchor"><span class="mark">Наклонный жирный</span></a></h4>
	<p><b><i>Иначе обстоят дела с отображением текста дисплеями различных устройств. Возникает проблема сглаживания и неровности засечек. Поэтому для основного текста лучше подходит шрифт без засечек с несколько увеличенной высотой строчных знаков.</i></b></p>

	<!--latin-->
	<h4><a href="#hashTextStyleLatin" id="hashTextStyleLatin" class="hashAnchor"><span class="mark">Текст на латинице</span></a></h4>
	<p>While scrolling down the home page and work page of Andre do Amaral’s portfolio I was blown away by its minimalistic nature and boldness. The case studies are only made up of a big photo, a giant headline, and  a year. The juxtaposition between the client’s name and the year it was worked on is brilliant.</p>
	<p>Not only are the two text different in size, font weight but also in font type; the year is serif while the name is sans serif. </p>

}@@if(context.component === "listUl") {

	<h3><a href="#hashUnorderedList" id="hashUnorderedList" class="hashAnchor"><span class="mark">Неупорядоченный список</span></a></h3>
	<ul>
		<li>Не используйте причудливые шрифты
			<ul>
				<li>Забудьте о Comic Sans</li>
				<li>Не избегайте стандартных, дефолтных шрифтов
					<ul>
						<li>Не используйте одновременно больше двух шрифтов</li>
						<li>Смешивайте только контрастные шрифты. Выравнивайте по левой стороне. Избегайте большого числа переносов</li>
						<li>Выбирайте шрифты с одинаковой высотой букв</li>
					</ul>
				</li>
			</ul>
		</li>
		<li>Размер шрифта</li>
		<li>Без отступа</li>
		<li>Узкая колонка. Висячая пунктуация. Не злоупотребляйте пробелами</li>
	</ul>

}@@if(context.component === "listOl") {

	<h3><a href="#hashOrderedList" id="hashOrderedList" class="hashAnchor"><span class="mark">Упорядоченный список</span></a></h3>
	<ol>
		<li>Семейство шрифтов (свойство font-family)</li>
		<li>Сочетание шрифтов с засечками и без засечек</li>
		<li>Цвет шрифта (свойство color)</li>
		<li>Межбуквенный и межсимвольный интервал (свойства word-spacing и letter-spacing)</li>
		<li>Межстрочный интервал (свойство line-height)</li>
		<li>Длина строки</li>
	</ol>

}@@if(context.component === "listMix") {

	<h3><a href="#hashComplexList" id="hashComplexList" class="hashAnchor"><span class="mark">Сложный список</span></a></h3>
	<ol>
		<li>Не используйте причудливые шрифты
			<ul>
				<li>Забудьте о Comic Sans</li>
				<li>Не избегайте стандартных, дефолтных шрифтов
					<ul>
						<li>Не используйте одновременно больше двух шрифтов</li>
						<li>Смешивайте только контрастные шрифты. Выравнивайте по левой стороне. Избегайте большого числа переносов</li>
						<li>Выбирайте шрифты с одинаковой высотой букв</li>
					</ul>
				</li>
			</ul>
		</li>
		<li>Размер шрифта</li>
		<li>Без отступа</li>
		<li>Узкая колонка. Висячая пунктуация. Не злоупотребляйте пробелами</li>
	</ol>

}@@if(context.component === "blockquote") {

	<h3><a href="#hashQuote" id="hashQuote" class="hashAnchor"><span class="mark">Цитата</span></a></h3>
	<p>Вообще, переносов в вебе по возможности следует избегать. Попробуйте перенести слово на новую строку или чуть-чуть измените межбуквенное расстояние. Если знаков переноса слишком много, поменяйте размер шрифта или величину пробелов. А при выключке влево вообще не используйте перенос слов.</p>
	<div class="layout-text">
		<blockquote>
			<q>Гарнитура — шрифт или несколько шрифтов, имеющих стилистическое единство начертания. Состоит из набора знаков (обычно — цифры, буквы, знаки пунктуации, спецсимволы, но может состоять так же исключительно из неалфавитных знаков). Например, гарнитура «Times New Roman» состоит из обычного, курсивного, полужирного и множества других шрифтов этого семейства.</q>
			<cite>Словарь Ожегова</cite>
		</blockquote>
	</div>
	<p>Не отделяйте отступом первый абзац от заголовка. Если вы отбиваете абзацы пустой строкой, не используйте абзацные отступы. Это избыточно и безвкусно. С другой стороны, текст вообще без отступов и отбивок будет сложнее восприниматься. В общем, выберите один из способов: или красную строку, или отбивку — и используйте его на протяжении всего текста.</p>

}@@if(context.component === "tableStyling") {

	<h3><a href="#hashTableCustom" id="hashTableCustom" class="hashAnchor"><span class="mark">Таблица стилизованная</span></a></h3>
	<div class="layout-text">
		<div class="table-auto">
			<table class="tbl">
				<thead>
					<tr>
						<th>При этом</th>
						<th>Обратите внимание</th>
						<th>Что в таблице может</th>
						<th>Отсутствовать <br> шапка</th>
						<th>Как таковая</th>
					</tr>
				</thead>
				<tfoot>
					<tr>
						<td>Итого</td>
						<td>55%</td>
						<td>23422</td>
						<td>&nbsp;</td>
						<td>&nbsp;</td>
					</tr>
				</tfoot>
				<tbody>
					<tr>
						<td>Содержаться</td>
						<td colspan="2">объединённые ячейки</td>
						<!--<td></td>-->
						<td>как в колонках</td>
						<td>так и в строках</td>
					</tr>
					<tr>
						<td>Например так</td>
						<td>30%</td>
						<td>14343</td>
						<td>Информация</td>
						<td>в таблицах</td>
					</tr>
					<tr>
						<td>Висячая пунктуация</td>
						<td>13%</td>
						<td>23233</td>
						<td>Отличный способ для <b>выделения</b> самого важного в тексте – использование <a href="#">контрастных</a> шрифтов</td>
						<td>читабельной</td>
					</tr>
					<tr>
						<td>&nbsp;</td>
						<td>30%</td>
						<td>14343</td>
						<td>Информация</td>
						<td>в таблицах</td>
					</tr>
					<tr>
						<td>Вот так</td>
						<td>13%</td>
						<td>23233</td>
						<td>Да</td>
						<td>Нет</td>
					</tr>
				</tbody>
			</table>
		</div>
	</div>

}@@if(context.component === "tableDefault") {

	<h3><a href="#hashTable" id="hashTable" class="hashAnchor"><span class="mark">Таблица без стилей</span></a></h3>
	<div class="layout-text">
		<!--default table-->
		<div class="table-auto">
			<table border="1">
				<thead>
					<tr>
						<th>При этом</th>
						<th>Обратите внимание</th>
						<th>Что в таблице может</th>
						<th>Отсутствовать <br> шапка</th>
						<th>Как таковая</th>
					</tr>
				</thead>
				<tfoot>
					<tr>
						<td>Итого</td>
						<td>55%</td>
						<td>23422</td>
						<td>&nbsp;</td>
						<td>&nbsp;</td>
					</tr>
				</tfoot>
				<tbody>
					<tr>
						<td>Содержаться</td>
						<td colspan="2">объединённые ячейки</td>
						<!--<td></td>-->
						<td>как в колонках</td>
						<td>так и в строках</td>
					</tr>
					<tr>
						<td>Например так</td>
						<td>30%</td>
						<td>14343</td>
						<td>Информация</td>
						<td>в таблицах</td>
					</tr>
					<tr>
						<td>Висячая пунктуация</td>
						<td>13%</td>
						<td>23233</td>
						<td>Отличный способ для <b>выделения</b> самого важного в тексте – использование <a href="#">контрастных</a> шрифтов</td>
						<td>читабельной</td>
					</tr>
					<tr>
						<td>&nbsp;</td>
						<td>30%</td>
						<td>14343</td>
						<td>Информация</td>
						<td>в таблицах</td>
					</tr>
					<tr>
						<td>Вот так</td>
						<td>13%</td>
						<td>23233</td>
						<td>Да</td>
						<td>Нет</td>
					</tr>
				</tbody>
			</table>
		</div>
	</div>

}@@if(context.component === "files") {

	<h3><a href="#hashFiles" id="hashFiles" class="hashAnchor"><span class="mark">Документы для скачивания</span></a></h3>
	<p>Когда вы увеличиваете размер шрифта, расстояние между символами тоже увеличивается. Поэтому, если вы устанавливаете в тексте крупный заголовок, советуем пропорционально скорректировать расстояние между символами и словами</p>
	<div class="layout-text">
		@@include('_tpl_files.tpl')
	</div>
	<p>Выделить важную мысль или слово, на которое нужно обратить внимание, можно самыми разными способами. Не переусердствуйте с ними. Не стоит выделять целое предложение одними прописными — новичок не всегда может сделать это к месту. Просто используйте полужирное начертание шрифта.</p>

}@@if(context.component === "filesImportant") {

	<h3><a href="#hashFilesImportant" id="hashFilesImportant" class="hashAnchor"><span class="mark">Важные документы</span></a></h3>
	<p>Когда вы увеличиваете размер шрифта, расстояние между символами тоже увеличивается. Поэтому, если вы устанавливаете в тексте крупный заголовок, советуем пропорционально скорректировать расстояние между символами и словами</p>
	<!--files-->
	<div class="layout-text">
		@@include('_tpl_files-important.tpl')
	</div>
	<p>Выделить важную мысль или слово, на которое нужно обратить внимание, можно самыми разными способами. Не переусердствуйте с ними. Не стоит выделять целое предложение одними прописными — новичок не всегда может сделать это к месту. Просто используйте полужирное начертание шрифта.</p>

}@@if(context.component === "buttons") {

	<h3><a href="#hashButtons" id="hashButtons" class="hashAnchor"><span class="mark">Кнопки</span></a></h3>
	<p>Редко бывает так, что 65 символов выходят за пределы браузера на пк, но на большинстве мобильных девайсов 65 символов (если текст отображается в достаточно большом масштабе, чтобы быть разборчивым) выходят далеко за пределы браузера.</p>

	<h4><span class="mark"></span><a href="#hashButtonsDef" id="hashButtonsDef" class="hashAnchor"><span class="mark">Дефолтные кнопки</span></a></h4>
	<div class="layout-text">
		<div style="padding: 0 0 20px;">
			<a href="#" class="btn-default">Link</a>
		</div>
		<div style="padding: 0 0 20px;">
			<input class="btn-default" type="submit" value="Type submit">
			<input class="btn-default" type="button" value="Type button">
			<input class="btn-default" type="reset" value="Type reset">
		</div>
	</div>

	<h4><span class="mark"></span><a href="#hashButtonsOutline" id="hashButtonsOutline" class="hashAnchor"><span class="mark">Кнопки с обводкой</span></a></h4>
	<div class="layout-text">
		<div style="padding: 0 0 20px;">
			<a href="#" class="btn-outline">Link</a>
		</div>
		<div style="padding: 0 0 20px;">
			<input class="btn-outline" type="submit" value="Type submit">
			<input class="btn-outline" type="button" value="Type button">
			<input class="btn-outline" type="reset" value="Type reset">
		</div>
	</div>

	<h4><span class="mark"></span><a href="#hashButtonsAlt" id="hashButtonsAlt" class="hashAnchor"><span class="mark">Альтернативные кнопки</span></a></h4>
	<div class="layout-text">
		<div style="padding: 0 0 20px;">
			<a href="#" class="btn-default-alt">Отправить заявку</a>
		</div>
		<div style="padding: 0 0 20px;">
			<input class="btn-default-alt" type="submit" value="Type submit">
			<input class="btn-default-alt" type="button" value="Type button">
			<input class="btn-default-alt" type="reset" value="Type reset">
		</div>
	</div>

	<h4><span class="mark"></span><a href="#hashButtonsAlt" id="hashButtonsAlt" class="hashAnchor"><span class="mark">Кнопки со стрелками</span></a></h4>
	<div class="layout-text">
		<div style="padding: 0 0 20px;">
			<a href="#" class="btn-outline btn-with-arrow"><span>Смотреть все</span><i>&nbsp;</i></a>
		</div>
		<div style="padding: 0 0 20px;">
			<a href="#" class="btn-outline btn-with-arrow"><i>&nbsp;</i><span>Вернуться к каталогу</span></a>
		</div>
		<div style="padding: 0 0 20px;">
			<a href="#" class="btn-outline btn-with-arrow"><span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium beatae consequatur cupiditate eos, ex harum hic molestias mollitia nam nihil officiis, praesentium quas, quidem quos ratione sint voluptatibus voluptatum! Nam.</span><i>&nbsp;</i></a>
		</div>

		<div style="padding: 0 0 20px;">
			<a href="#" class="btn-outline-alt btn-with-arrow"><span>Смотреть все</span><i>&nbsp;</i></a>
		</div>
		<div style="padding: 0 0 20px;">
			<a href="#" class="btn-outline-alt btn-with-arrow"><i>&nbsp;</i><span>Вернуться к каталогу</span></a>
		</div>
		<div style="padding: 0 0 20px;">
			<a href="#" class="btn-outline-alt btn-with-arrow"><span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium beatae consequatur cupiditate eos, ex harum hic molestias mollitia nam nihil officiis, praesentium quas, quidem quos ratione sint voluptatibus voluptatum! Nam.</span><i>&nbsp;</i></a>
		</div>
	</div>

}@@if(context.component === "formDefault") {

	<h3><a href="#hashFormElementExample"  id="hashFormElementExample" class="hashAnchor"><span class="mark">Поля форм</span></a></h3>
	<div class="layout-text">
		@@include('_forms_form-default.tpl')
	</div>

}@@if(context.component === "select") {

	<h3><a href="#hashFormsSelect" id="hashFormsSelect" class="hashAnchor"><span class="mark">Селекты</span></a></h3>
	<div class="layout-text">
		@@include('_forms_form-selects.tpl')
	</div>

}@@if(context.component === "formLight") {

	<h3><a href="#hashFormLight"  id="hashFormLight" class="hashAnchor"><span class="mark">Поля форм (альтернативный вид)</span></a></h3>
	<div class="layout-text">
		@@include('_forms_form-light.tpl')
	</div>

}@@if(context.component === "checkboxRadio") {

	<h3><a href="#hashFormCheckboxExample" id="hashFormCheckboxExample" class="hashAnchor"><span class="mark">Чекбоксы и Радиобаттоны</span></a></h3>
	<div class="layout-text">
		@@include('_forms_checkbox-and-radio.tpl')
	</div>

}@@if(context.component === "userForm") {

	<h3><a href="#hashUserFormExample" id="hashUserFormExample" class="hashAnchor"><span class="mark">Форма обратной связи</span></a></h3>
	@@include('_forms_user-form.tpl', {
		"title": "Задать вопрос"
	})

}@@if(context.component === "columnize") {

	<div class="layout-flood">
		<h3><a href="#hashColumnize" id="hashColumnize" class="hashAnchor"><span class="mark">Колонки (css3 columnize)</span></a></h3>
	</div>
	@@include('_typography_columnize.tpl')

}@@if(context.component === "accordion") {

	<h3><a href="#hashSimpleAccordion" id="hashSimpleAccordion" class="hashAnchor"><span class="mark">Аккордеон</span></a></h3>
	<div class="layout-text">
		@@include('_tpl-simple-accordion.tpl')
	</div>

}@@if(context.component === "imagesAlign") {

	<h3><a href="#hashImagesAlign" id="hashImagesAlign" class="hashAnchor"><span class="mark">Выравнивание картинок в контенте</span></a></h3>
	@@include('_typography_images-align.tpl')

}@@if(context.component === "entryImage") {

	<div class="layout-full-width">
		<div class="entry-img">
			<img src="img/__temp-img-entry.jpg" alt="image description"/>
			<h2 class="entry-img__title">Типографика в вебдизайне. Основные понятия и положения</h2>
		</div>
	</div>

}@@if(context.component === "imagesSlider") {

	<h3><a href="#hashImagesCarousel" id="hashImagesCarousel" class="hashAnchor"><span class="mark">Карусель с подписями</span></a></h3>
	@@include('_sliders_images-carousel.tpl')

}@@if(context.component === "searchPage") {

	<h3><a href="#hashSearchPage" id="hashSearchPage" class="hashAnchor"><span class="mark">Пример страницы поиска</span></a></h3>
	<div class="layout-text">
		@@include('_tpl_search-page-bitrix.tpl')
	</div>

}@@if(context.component === "featureList") {

	<h3><a href="#hashVisualList" id="hashVisualList" class="hashAnchor"><span class="mark">Изображения + описания к ним</span></a></h3>
	<div class="layout-text">
		@@include("_tpl_feature-list.tpl")
	</div>

}@@if(context.component === "featureList") {

	<h3 style="margin-bottom: 0;"><a style="position: absolute; left: -9999px;" href="#hashArticleFooter" id="hashArticleFooter" class="hashAnchor"><span class="mark">Футер статьи</span></a></h3>
	<div class="article-footer">
		<div class="layout-text">
			@@include("_tpl_share.tpl")
		</div>
	</div>

}