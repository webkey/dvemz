<!--header-->
<header class="header">
	<div class="header__align">
		<div class="header__holder">
			<div class="header__row header__row--logo">
				<div class="header__cell">
					<div class="logo">
						<a href="index.html">
							<div class="logo-img">Электроавтоматика</div>
							<!--<div class="logo-title"><span>Электроавтоматика</span></div>-->
							<!--<div class="logo-text"><span>Производство и продажа Электромонтажного оборудования</span></div>-->
						</a>
					</div>
				</div>
			</div>
			<div class="header__row">
				<div class="header__cell">
					@@include('_tpl_user-options.tpl')
				</div>
			</div>
			<div class="header__row header__row--arrow">
				<div class="header__cell">
					<a href="#" class="down-arrows move-next-section-js">
					<span class="down-arrow__align">
						<span>&nbsp;</span>
						<span>&nbsp;</span>
						<span>&nbsp;</span>
					</span>
					</a>
				</div>
			</div>
		</div>
	</div>
</header>
<!--header end-->

<!--NAVIGATION-->
<aside class="nav-wrap nav-popup-js">
	<div class="nav-wrap__align">
		<div class="nav-wrap__holder">
			<div class="nav-wrap__row">
				<div class="nav-wrap__cell">
					<header class="nav-title">
						<a href="#" class="btn-popup-close btn-nav-close btn-nav-close-js"><i></i><span>Закрыть</span></a>
						<a href="index.html" class="logo-nav">
							<div class="logo-nav__img"><span>Электроавтоматика</span></div>
							<span class="logo-nav__title">Интернет-магазин</span>
						</a>
					</header>
				</div>
			</div>
			<div class="nav-wrap__row">
				<div class="nav-wrap__cell">
					<nav class="nav">
						@@include('_navigation-list.tpl', {
							"mainNavItemActive": "@@mainNavItemActive",
							"classKey": "nav"
						})
					</nav>
				</div>
			</div>
			<div class="nav-wrap__row">
				<div class="nav-wrap__cell">
					<footer class="nav-footer">
						<a href="#" class="btn-siblings"><i>&nbsp;</i><span>Электрощитовое <br> оборудование</span></a>
						<div class="copyright">&copy; 2017 ОАО Электроавтоматика</div>
						<div class="map-site"><a href="map-site.html" title="Перейти на карту сайта">Карта сайта</a></div>
					</footer>
				</div>
			</div>
		</div>
	</div>
</aside>
<!--NAVIGATION end-->

<!--NAVIGATION-->
<aside class="nav-wrap search-popup-js">
	<div class="nav-wrap__align">
		<div class="nav-wrap__holder">
			<div class="nav-wrap__row">
				<div class="nav-wrap__cell">
					<header class="nav-title">
						<a href="#" class="btn-popup-close btn-nav-close btn-nav-close-js"><i></i><span>Закрыть</span></a>
						<a href="index.html" class="logo-nav">
							<div class="logo-nav__img"><span>Электроавтоматика</span></div>
							<span class="logo-nav__title">Интернет-магазин</span>
						</a>
					</header>
				</div>
			</div>
			<div class="nav-wrap__row">
				<div class="nav-wrap__cell">
					<!-- search form -->
					<div class="search-form">
						<form action="#" method="post">
							<div class="search-form__field js-field-effects">
								<input class="search-form__input" type="search" id="search-form-field" placeholder="Поиск">
								<!--
								<div class="search-form__label">
									<label for="search-form-field"> <span>...</span></label>
								</div>
								-->
								<div class="search-form__btn">
									<svg xmlns="http://www.w3.org/2000/svg" version="1.1" x="0px" y="0px" viewBox="30.6 44.1 550.8 550.8" enable-background="new 30.6 44.1 550.8 550.8"> <path d="M570.4,531L459.9,420.4c67.4-92.7,59.2-223.3-24.4-306.9c-46.3-46.3-107-69.5-167.7-69.5s-121.4,23.2-167.7,69.5  c-92.6,92.6-92.6,242.8,0,335.4c46.3,46.3,107,69.5,167.7,69.5c48.9,0,97.8-15,139.1-45.1l110.5,110.5c7.3,7.3,16.9,11,26.5,11  c9.6,0,19.2-3.7,26.5-11C585.1,569.3,585.1,545.6,570.4,531z M398.4,411.9c-34.9,34.9-81.3,54.1-130.6,54.1  c-49.4,0-95.7-19.2-130.6-54.1c-72-72-72-189.3,0-261.3c34.9-34.9,81.3-54.1,130.6-54.1s95.8,19.2,130.6,54.1  C470.5,222.7,470.5,339.9,398.4,411.9z"/> </svg>
									<span>Искать</span>
									<input type="submit" value="">
								</div>
							</div>
						</form>
					</div>
					<!--search form end-->
				</div>
			</div>
			<div class="nav-wrap__row">
				<div class="nav-wrap__cell">
					<footer class="nav-footer">
						<a href="#" class="btn-siblings"><i>&nbsp;</i><span>Электрощитовое <br> оборудование</span></a>
						<div class="copyright">&copy; 2017 ОАО Электроавтоматика</div>
						<div class="map-site"><a href="map-site.html" title="Перейти на карту сайта">Карта сайта</a></div>
					</footer>
				</div>
			</div>
		</div>
	</div>
</aside>
<!--NAVIGATION end-->