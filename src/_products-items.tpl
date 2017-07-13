@@if (context.inCart) {
	<article class="products__item in-cart">
}
@@if (!context.inCart) {
	<article class="products__item">
}
	<div class="products__inner">
		<div class="products__body">
			<a href="products-card.html" class="products__figure">
				<div class="products__img">
					<img src="img/@@src" alt="@@title" />
				</div>
			</a>
			<div class="products__content">
				<div class="products__title"><a href="products-card.html">@@title</a></div>
				<div class="products__stock">@@stock</div>
			</div>
		</div>
		<div class="products__footer">
			@@if (context.price) {
			<div class="products__price">
				<div class="cur">@@price</div>
				@@if (context.old) {
				<div class="old">@@old</div>
				}
			</div>
			}
			@@if (!context.price) {
			<div class="products__price">
				<div class="no">цена по запросу</div>
			</div>
			}
			<div class="products__options">
				<div class="btn-outline btn-with-icon" data-href="#">
					<i>
						<svg xmlns="http://www.w3.org/2000/svg" version="1.1" x="0px" y="0px" viewBox="0 0 501.1 409.5" enable-background="new 0 0 501.1 409.5"> <path d="M173.5,350.1c-3.7,0-7.4,0.9-10.9,2.6c-11.4,4-19.6,14.8-19.6,27.6c0,16.1,13.1,29.2,29.2,29.2c9.2,0,17.3-4.2,22.7-10.8  c4.7-5.3,7.8-11.9,7.9-18.6C203.1,365.4,188.2,350.2,173.5,350.1z M447.1,248l54.1-153H120V0H0v20h100v304h310v-20H120v-56H447.1z   M120,115h352.9l-39.9,113H120V115z M353.8,350.1c-4.6,0-9.2,1.4-13.4,3.9c-9.7,4.7-16.4,14.7-16.4,26.3c0,16.1,13.1,29.2,29.2,29.2  c12.7,0,23.5-8.1,27.5-19.4c1.4-3.2,2.2-6.6,2.2-10.1C383.1,365.2,368.6,350.2,353.8,350.1z"></path> </svg>
					</i>
					<span>В корзину</span>
				</div>
				<div class="spinner">
					<input class="spinner-js" type="text" name="value" value="1" data-only-number>
					<div class="remove-from-cart"><i>&nbsp;</i><span>Удалить с корзины</span></div>
				</div>
			</div>
		</div>
	</div>

</article>