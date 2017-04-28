<header class="header">
	<div class="header__holder">
		<div class="header__row">
			<div class="header__cell">
				<div class="logo">
					<a href="index.html">
						<div class="logo-img">ДВЭМЗ</div>
						<div class="logo-title">Дальневосточный электромонтажный завод</div>
						<div class="logo-text">Производство и продажа Электромонтажного оборудования</div>
					</a>
					<img style="display: none;" src="img/logo.png" alt="ДВЭМЗ">
				</div>
			</div>
		</div>
		<div class="header__row">
			<div class="header__cell">
				<div class="user-options">
					<a href="#" class="user-option__item btn-menu-js menu-btn" title="Открыть главное меню">
						<span>Меню</span>
						<i>&nbsp;</i>
					</a>
					<a href="#" class="user-option__item">
						<div class="user-option__icon">
							<span>Текст</span>
							<svg xmlns="http://www.w3.org/2000/svg" version="1.1" x="0px" y="0px" viewBox="0 0 100 100" enable-background="new 0 0 100 100"><path d="M5,5v90h90V5H5z M12.079,17.114l32.914,33.011L12.079,82.942V17.114z M17.057,12.08h66.095L50.006,45.127  L17.057,12.08z M49.991,55.139L82.677,87.92H17.113L49.991,55.139z M55.004,50.14L87.92,17.322v65.83L55.004,50.14z"></path></svg>
						</div>
					</a>
					<a href="#" class="user-option__item">
						<div class="user-option__icon">
							<span>Текст</span>
							<svg xmlns="http://www.w3.org/2000/svg" version="1.1" x="0px" y="0px" viewBox="0 0 100 100" enable-background="new 0 0 100 100"><path d="M5,5v90h90V5H5z M12.079,17.114l32.914,33.011L12.079,82.942V17.114z M17.057,12.08h66.095L50.006,45.127  L17.057,12.08z M49.991,55.139L82.677,87.92H17.113L49.991,55.139z M55.004,50.14L87.92,17.322v65.83L55.004,50.14z"></path></svg>
						</div>
					</a>
					<a href="#" class="user-option__item">
						<div class="user-option__icon">
							<div class="basket-counter">1</div>
							<span>Текст</span>
							<svg xmlns="http://www.w3.org/2000/svg" version="1.1" x="0px" y="0px" viewBox="0 0 100 100" enable-background="new 0 0 100 100"><path d="M5,5v90h90V5H5z M12.079,17.114l32.914,33.011L12.079,82.942V17.114z M17.057,12.08h66.095L50.006,45.127  L17.057,12.08z M49.991,55.139L82.677,87.92H17.113L49.991,55.139z M55.004,50.14L87.92,17.322v65.83L55.004,50.14z"></path></svg>
						</div>
					</a>
				</div>
			</div>
		</div>
		<div class="header__row">
			<div class="header__cell">
				<a href="#" class="down-arrows move-next-section-js">
					<span class="down-arrow__align">
						<span>&nbsp;</span><span>&nbsp;</span>
					</span>
				</a>
			</div>
		</div>
	</div>
</header>
<!--NAVIGATION-->
<div class="nav-wrap nav-popup-js">
	<nav class="nav">
		@@include('_navigation-list.tpl', {
			"mainNavItemActive": "@@mainNavItemActive",
			"classKey": "nav"
		})
	</nav>
	<div class="nav-footer">
		<div class="copyright">&copy; 2017 ОАО ДВЭМЗ</div>
		<div class="map-site"><a href="#" title="Перейти на карту сайта">Карта сайта</a></div>
	</div>
</div>
<!--NAVIGATION end-->