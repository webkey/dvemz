<form action="#" method="get">
	<div class="input-wrap">
		<div class="label-holder">
			<label for="expl-label-01">Пример текстового поля с плейсхолдером: <span class="form-mark">*</span></label>
		</div>
		<div class="input-holder">
			<input type="text" placeholder="Текстовое поле" id="expl-label-01" />
			<span class="error-note">Поле обязательное для заполнения</span>
		</div>
	</div>
	<div class="input-wrap">
		<div class="label-holder">
			<label for="expl-label-02">Пример невалидного текстового поля: <span class="form-mark">*</span></label>
		</div>
		<div class="input-holder error">
			<input class="error" type="text" placeholder="Невалидное поле" id="expl-label-02" />
			<span class="error-note">Поле обязательное для заполнения</span>
		</div>
	</div>
	<div class="form-row">
		<div class="input-wrap">
			<div class="label-holder">
				<label for="expl-label-03">Текстовое поле первое: <span class="form-mark">*</span></label>
			</div>
			<div class="input-holder">
				<input type="text" placeholder="Текстовое поле первое" id="expl-label-03" />
			</div>
		</div>
		<div class="input-wrap">
			<div class="label-holder">
				<label for="expl-label-04">Текстовое поле второе: <span class="form-mark">*</span></label>
			</div>
			<div class="input-holder">
				<input type="text" placeholder="Текстовое поле второе" id="expl-label-04" />
			</div>
		</div>
	</div>
	<div class="form-row">
		<div class="input-wrap">
			<div class="label-holder">
				<label for="expl-label-05">Текстовое поле третье: <span class="form-mark">*</span></label>
			</div>
			<div class="input-holder">
				<input type="text" placeholder="Текстовое поле третье" id="expl-label-05" />
			</div>
		</div>
		<div class="input-wrap">
			<div class="label-holder">
				<label for="expl-label-06">Пример селекта: <span class="form-mark">*</span></label>
			</div>
			<div class="select">
				<select class="cselect" name="filter-type" id="expl-label-06">
					<option value="1">Размер</option>
					<option value="2">Вес</option>
					<option value="3">Цвет</option>
					<option value="4">Позицию (расположение)</option>
					<option value="5">Опшин очень-очень-очень-очень длинный</option>
					<option value="6">Контраст</option>
					<option value="7">Сочетание</option>
					<option value="8">Расстояние</option>
				</select>
			</div>
		</div>
	</div>
	<div class="input-wrap">
		<div class="label-holder">
			<label for="expl-label-07">Сообщение:</label>
		</div>
		<div class="input-holder">
			<textarea placeholder="Сообщение" id="expl-label-07"></textarea>
		</div>
	</div>

	<div class="layout-text">
		<h3>
			<a href="#hashFormsSelect" id="hashFormsSelect" class="hashAnchor"><span class="mark">Селекты</span></a>
		</h3>
	</div>
	<div class="input-wrap">
		<div class="label-holder">
			<label for="default-select-example">Некастомный селект:</label>
		</div>
		<div class="select">
			<select id="default-select-example">
				<option value="1">Размер</option>
				<option value="2">Вес</option>
				<option value="3">Цвет</option>
				<option value="4">Позицию (расположение)</option>
				<option value="5">Опшин очень-очень-очень-очень длинный</option>
				<option value="6">Контраст</option>
				<option value="7">Сочетание</option>
				<option value="8">Расстояние</option>
			</select>
		</div>
	</div>
	<div class="input-wrap">
		<div class="label-holder">
			<label for="custom-select-example">Кастомный селект:</label>
		</div>
		<div class="select">
			<select class="cselect" id="custom-select-example">
				<option value="1">Размер</option>
				<option value="2">Вес</option>
				<option value="3">Цвет</option>
				<option value="4">Позицию (расположение)</option>
				<option value="5">Опшин очень-очень-очень-очень длинный</option>
				<option value="6">Контраст</option>
				<option value="7">Сочетание</option>
				<option value="8">Расстояние</option>
			</select>
		</div>
	</div>
	<div class="input-wrap">
		<div class="label-holder">
			<label for="multiselect-example">Мультиселект:</label>
		</div>
		<div class="select">
			<select class="cselect" id="multiselect-example" multiple>
				<option value="1">Размер</option>
				<option value="2">Вес</option>
				<option value="3">Цвет</option>
				<option value="4">Позицию (расположение)</option>
				<option value="5">Опшин очень-очень-очень-очень длинный</option>
				<option value="6">Контраст</option>
				<option value="7">Сочетание</option>
				<option value="8">Расстояние</option>
			</select>
		</div>
	</div>
	<div class="input-wrap">
		<div class="label-holder">
			<label for="multiselect-with-placeholder-example">Мультиселект c пелейсхолдером:</label>
		</div>
		<div class="select">
			<select class="cselect" id="multiselect-with-placeholder-example" multiple data-placeholder="Выберите несколько вариантов">
				<option value="1">Размер</option>
				<option value="2">Вес</option>
				<option value="3">Цвет</option>
				<option value="4">Позицию (расположение)</option>
				<option value="5">Опшин очень-очень-очень-очень длинный</option>
				<option value="6">Контраст</option>
				<option value="7">Сочетание</option>
				<option value="8">Расстояние</option>
			</select>
		</div>
	</div>
</form>