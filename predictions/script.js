let timer = document.querySelector('#timer');
let text = document.querySelector('#text');
let start = document.querySelector('#start');
let stop1 = document.querySelector('#stop');

let predictions = [
	'Стремитесь к успеху и выглядите так, словно вы его уже достигли.',
	'Лучшее всегда является врагом хорошего.',
	'Ничего не может быть смешнее, чем нравиться всем и каждому.',
	'Чем мы наполняем наши молитвы, то нам и причитается.',
	'Разница между победителем и побежденным только в том, что первый поднялся больше раз, чем упал.',
	'Каждый дарованный нам день является первым в том отрезке жизни, что нам остался.',
	'Не стоит тратить время и силы на мелочи, нужно думать о главном.',
	'Все не так гладко, как того бы хотелось, но намного лучше, чем могло бы быть.',
	'Нужно делать то, что ты должен делать. И пусть все будет так, как будет.',
	'Определитесь с конечной целью – и у вас появится шанс на победу.',
	'Обратной стороной каждого поражения являются открывающиеся новые возможности.',
	'Стать твоим другом дано не каждому, но каждому дано стать чьим-то учителем.',
	'Чтобы быть поистине счастливым – властвуй над своими помыслами.',
	'Каждому из нас дается столько блага, сколько он сам дал другим.',
	'Каким бы огромным ни было расстояние – оно начинается с первого шага.',
	'Пусть тебя не страшит неумение. Делая с желанием – научишься.',
	'Лучше сделать и пожалеть о сделанном, чем не сделать и сожалеть о не сделанном.',
	'Стоя на месте, двигаться можно только назад.',
	'Что бы ни случилось, все в конечном итоге приведет к лучшему.',
	'Уже вскорости вы получите важное известие.',
	'В ситуации замешан хорошо известный вам мужчина.',
	'Изменения, вошедшие в вашу жизнь, изменят и многое в вас лично.',
	'Осторожнее относитесь к людям, поскольку не исключен обман.',
	'Кто-то из близких способен подставить вам подножку в ответственный момент.',
	'Ваши ожидания не напрасны.',
	'Будьте бдительнее и тщательнее запирайте двери.',
	'Все ваши проблемы кроются в вас самих.',
	'Все, что вы делаете, может привести к непредсказуемому результату.',
	'Лучший лекарь – это время, оно затянет ваши раны.',
	'Вы движетесь в верном направлении.',
	'Каким бы ржавым ни был замок, вы справитесь с ним.',
	'Похоже, ваша жизнь наполнится тревогами и беспокойствами.',
	'Ваши усилия чрезмерны для той цели, к которой вы стремитесь.',
	'Основное описание проблемы – нехватка знаний.',
	'То, что выйдет в результате, принесет вам разочарование.',
	'Проблема кроется совсем не в том, что вы думаете.',
	'Вы получите предложение, которое покажется вам неприемлемым.',
	'Двигайтесь лишь вперед, поскольку вы поступаете верно.',
	'Цель, к которой вы стремитесь, вполне реальна.',
	'Вскорости бюджет вашей семьи будет пополнен.'
];

let counter = 1;
let timerId;
start.addEventListener('click', function() {
	

	timerId = setInterval(function() {
		timer.innerHTML = counter;
		counter++;
		if (counter == predictions.length + 1) {
			counter = 1;
		}
	}, 50);
	start.classList.remove('active');
	stop1.classList.add('active');
});

stop1.addEventListener('click', function() {
	clearInterval(timerId);
	timer.innerHTML = '';
	stop1.classList.remove('active');
	text.innerHTML = predictions[counter];
})