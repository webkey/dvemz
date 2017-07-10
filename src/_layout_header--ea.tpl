<header class="header">
	<div class="header__holder">
		<div class="header__row">
			<div class="header__cell">
				<div class="logo">
					<a href="index.html">
						<div class="logo-img"><span>&nbsp;</span></div>
						<div class="logo-title"><span>Электроавтоматика</span></div>
						<div class="logo-text"><span>Производство и продажа Электромонтажного оборудования</span></div>
					</a>
					<img style="display: none;" src="img/logo-short--ea.png" alt="Электроавтоматика">
				</div>
			</div>
		</div>
		<div class="header__row">
			<div class="header__cell">
				@@include('_tpl_user-options.tpl')
			</div>
		</div>
		<div class="header__row">
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
		<div class="copyright">&copy; 2017 ОАО Электроавтоматика</div>
		<div class="map-site"><a href="#" title="Перейти на карту сайта">Карта сайта</a></div>
	</div>
</div>
<!--NAVIGATION end-->