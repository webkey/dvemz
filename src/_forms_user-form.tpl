<div class="user-form layout-full-width">
	<div class="layout-text">
		<div class="form-title">@@title</div>
		<form action="#" method="get">
			<div class="form-row">
				<div class="input-wrap light-form field-effects-js">
					<div class="label-holder"><label for="uf-field-01">Имя <span class="form-mark">*</span></label></div>
					<input type="text" id="uf-field-01"/>
					<span class="error-note">Поле обязательное для заполнения</span>
					<span class="confirm-note">&nbsp;</span>
				</div>
				<div class="input-wrap light-form field-effects-js">
					<div class="label-holder"><label for="uf-field-02">Эл. почта <span class="form-mark">*</span></label></div>
					<input type="text" id="uf-field-02"/>
					<span class="error-note">Поле обязательное для заполнения</span>
					<span class="confirm-note">&nbsp;</span>
				</div>
			</div>
			<div class="input-wrap light-form field-effects-js">
				<div class="label-holder">
					<label for="uf-field-select-01">Выберите тему</label>
				</div>
				<div class="select">
					<select class="cselect" id="uf-field-select-01">
						<option value=""></option> <!--Важно! Этот пункт должен быть пустым-->
						<option value="1">Размер</option>
						<option value="2">Вес</option>
						<option value="3">Цвет</option>
						<option value="4">Позицию (расположение)</option>
						<option value="5">Опшин очень-очень-очень-очень длинный</option>
						<option value="6">Контраст</option>
						<option value="7">Сочетание</option>
						<option value="8">Расстояние</option>
					</select>
					<span class="error-note">Обязательное поле</span>
					<span class="confirm-note">&nbsp;</span>
				</div>
			</div>
			<div class="input-wrap light-form field-effects-js">
				<div class="label-holder">
					<label for="uf-message">Вопрос <span class="form-mark">*</span></label>
				</div>
				<textarea id="uf-message"></textarea>
				<span class="error-note">Поле обязательное для заполнения</span>
				<span class="confirm-note">&nbsp;</span>
			</div>
			<div class="input-wrap light-form">
				<!--<div class="label-holder">
					<span class="label">Прикрепить файл</span>
				</div>-->
				<div class="input-holder upload-file__container">
					<input class="upload-file" name="files[]" type="file" multiple="multiple" data-jfiler-limit="2">
				</div>
			</div>
			<div class="input-wrap">
				<div class="label-holder">
					<label for="uf-captcha">Защита от спама:<span class="form-mark">*</span></label>
				</div>
				<div class="captcha">
					<img src="img/captcha.jpg" alt="captcha" />
					<div class="input-holder">
						<input type="text" id="uf-captcha">
						<span class="error-note">Введите текст на картинке для защиты от спама</span>
						<span class="confirm-note">&nbsp;</span>
					</div>
				</div>
			</div>
			<div class="form-footer">
				<div class="form-buttons">
					<button class="btn-default btn-submit" data-label="Отправить">Обратная связь</button>
				</div>
				<div class="form-note">
					<div class="form-note__item"><span class="form-mark">*</span> Поля обязательные для заполнения</div>
				</div>
			</div>
		</form>
	</div>
</div>