// Підключення функціоналу "Чертоги Фрілансера"
import { isMobile } from "./functions.js";
// Підключення списку активних модулів
import { flsModules } from "./modules.js";

// window.addEventListener('DOMContentLoaded', function() {
//   var textarea = document.querySelector('.input-text');
//   var inputPhone = document.querySelector('.input-phone');
  
//   function updatePlaceholder() {
//     if (window.innerWidth < 901) {
//       textarea.setAttribute('placeholder', '✍️ Введи текст свого привітання');
//       inputPhone.setAttribute('placeholder', '📞 Друже, введи свій номер, щоб взяти участь у розіграші боксу');
//     } else {
//       textarea.setAttribute('placeholder', 'Як же тебе не любити, Києве мій...');
//       inputPhone.setAttribute('placeholder', '+38 (0__) ___ __ __');
//     }
//   }
  
//   // Вызываем функцию обновления при загрузке страницы и при изменении размера окна
//   window.addEventListener('resize', updatePlaceholder);
//   updatePlaceholder(); // Вызываем функцию для начальной установки значения
  
// });

// Менять значение placeholder в зависимости от ширины экрана
window.addEventListener('DOMContentLoaded', function() {
  var textarea = document.getElementById('formMessage');
  if(textarea) {
    function updatePlaceholder() {
      if (window.innerWidth < 901) {
        textarea.setAttribute('placeholder', '✍️ Введи текст свого привітання');
      } else {
        textarea.setAttribute('placeholder', 'Як же тебе не любити, Києве мій...');
      }
    }

    // Вызываем функцию обновления при загрузке страницы и при изменении размера окна
    window.addEventListener('resize', updatePlaceholder);
    updatePlaceholder(); // Вызываем функцию для начальной установки значения
  }
});


// Получаем ссылки на элементы
var button = document.querySelector('.content-about__close');
if (button) {
  var popupBody = document.querySelector('.popup__body');
  var popupContent = document.querySelectorAll('.popup__content');
  var formCloseButton = document.querySelector('.content-form__close');
  var textarea = document.querySelector('.input-text');

  // Функция для добавления класса _delete-info
  function addDeleteInfoClass() {
    popupBody.classList.add('_delete-info');
  }

  // Функция для удаления класса _delete-info
  function removeDeleteInfoClass() {
    popupBody.classList.remove('_delete-info');
  }

  // Функция для удаления атрибута data-close
  function removeDataClose() {
    button.removeAttribute('data-close');
  }

  // Функция для добавления атрибута data-close
  function addDataClose() {
    button.setAttribute('data-close', '');
  }

  // Функция для проверки, является ли элемент предком указанного элемента
  function isDescendant(parent, child) {
    var node = child.parentNode;
    while (node != null) {
      if (node === parent) {
        return true;
      }
      node = node.parentNode;
    }
    return false;
  }

  // Функция для проверки клика вне элементов
  function handleClickOutside(event) {
    if (
      !button.contains(event.target) &&
      !isDescendant(popupBody, event.target) &&
      !isDescendant(formCloseButton, event.target) &&
      event.target !== textarea
    ) {
      removeDeleteInfoClass();
    }
  }

  // Функция для проверки размера экрана и обновления атрибута
  function checkScreenWidth() {
    if (window.innerWidth < 900) {
      button.addEventListener('click', addDeleteInfoClass);
      removeDataClose();
    } else {
      button.removeEventListener('click', addDeleteInfoClass);
      popupBody.classList.remove('_delete-info');
      addDataClose();
    }
  }

  // Привязываем обработчик события к изменению размера окна
  window.addEventListener('resize', checkScreenWidth);

  // Привязываем обработчик события клика для проверки клика вне элементов
  document.addEventListener('click', handleClickOutside);

  // Привязываем обработчик события клика на textarea для добавления класса _delete-info
  textarea.addEventListener('click', addDeleteInfoClass);

  // Вызываем функцию проверки размера экрана при загрузке страницы
  checkScreenWidth();

}



var CityInfo = {
	'kyiv': { name: 'Київ', desc: '👉 Київ із зе кепітал оф грейт Юкрейн, бо вже грейт з 11 століття, коли був найбільшим містом у Європі.'},
	'kharkiv': { name: 'Харків', desc: '👉 Навіть дорослі хочуть відкрити для себе платформу 9 3/4, Flintкривай магічне місто Харків на 50-й невидимій паралелі через весь земний шар.'},
	'odesa': { name: 'Одесу', desc: '👉 Якщо ви з друзями годинами залипаєте у Фіфу на приставці, краще збирайте рюкзаки та Flintкривайте Одесу, поки літо не закінчилося: місто першого футбольного поля в Україні.'},
	'dnipro': { name: 'Дніпро', desc: '👉 Місто-батьківщина сухариків Flint, які з’явилися тут у 2002 році! Доречі найпершим смаком сухариків цілого покоління став «Сметана із зеленню».'},
	'lviv': { name: 'Львів', desc: '👉 Тільки не кажи, що ти не дослідив кожну пам’ятку та кафешку у Львові, бо це місто яке увійшло в Топ-100 туристичних міст Європи. Тож бери рюкзак та запас сухарів і гайда з друзями вивчати кожен камінчик Львова, там дуууже багато цікавинок!'},
	'vinnytsia': { name: 'Вінницю', desc: '👉 Коли друзі кличуть гуляти, а ти не хочеш вилазити з комфортного ліжечка, Flintкривай із ними Вінницю, яка чотири рази очолювала опитування «Найкомфортніше місто для життя в Україні», яке проводилося групою «Рейтинг» для міжнародного республіканського інституту.'},
	'donetsk': { name: 'Донецьк', desc: '👉 А ти знаєш, які скарби не дістав би навіть найвправніший пірат Flint? Донецьке цінне вугілля, яке знаходиться на глибині понад 1700 метрів, для його здобуття було сконструйовано найглибші шахти.'},
	'poltava': { name: 'Полтаву', desc: '👉 Flintкривай історію Полтави — столицю літературної української мови й першого твору написаного нею знамениту «Енеїду».'},
	'zhytomyr': { name: 'Житомир', desc: '👉 Важливе Flintкриття: кожна твоя зарплата родом із Житомирщини, адже саме Житомирщина — Батьківщина нашої національної валюти.'},
	'zaporizhzhia': { name: 'Запоріжжя', desc: '👉 Хортиця — найбільший річковий острів саме на Дніпрі, який входить до списку 7 чудес України, а вже тільки 8-м можна назвати твою здібність не чути нікого, коли хрумтиш сухарики.'},
	'frankivsk': { name: 'Івано-Франківськ', desc: '👉 Відкривши банку огірків, тебе по праву можна називати Василем Вірастюком, найсильнішу людину планети, якого подарувало нам його місто Івано-Франківськ.'},
	'sumy': { name: 'Суми', desc: '👉 Як ти любиш великі пачки Flint, так Суми люблять свої найбільші печери Софроніївського монастиря.'},
	'rivne': { name: 'Рівне', desc: '👉 Flintкривай Укрзалізницю та мандруй стопами видобувачів бурштину в бурштиновому краї Рівненщини.'},
	'ternopil': { name: 'Тернопіль', desc: '👉 PayPass, Face ID… А чи знав ти, що саме Тернопіль наш провідник у світ технологій: перше місто в Україні з електронним квитком у громадському транспорті.'},
	'uzhgorod': { name: 'Ужгород', desc: '👉 Це рідкісне місто в Україні, у якого є власний торт — справжній конкурент «Київського». Тож із сувеніром з Ужгорода питання закрите.'},
	'kherson': { name: 'Херсон', desc: '👉 Окрім героїзму, місто Херсон відоме тим, що стало знімальним майданчиком для фільму «Том Сойєр». Здається, настав час передивитись та похрумтіти смачненьким.'},
	'kropyvnytskyi': { name: 'Кропивницький', desc: '👉 Марко Кропивницький був настільки крутим письменником, що в його честь місто назвали! То може бери свій запас сухариків, лептоп і вирушай за письменницьким натхненням до центральної України!)'},
	'luhansk': { name: 'Луганськ', desc: '👉 Щоби побачити єдинорога треба вирушати в Луганськ, де є унікальний експонат: гармата, названа «кріпаком єдинорогом», яку вилили на Луганському заводі. Дата її виготовлення — 1814 рік. Ця гармата — найстаріша з гаубиць, що стоять пам’ятниками в області.'},
	'lutsk': { name: 'Луцьк', desc: '👉 Лучани вже багато років поспіль намагаються розкопати одне підземелля в пошуках скарбів. Майже як ти намагаєшся визначити, який смак Flint смачніший… здається і те, й інше неможливе!'},
	'mykolaiv': { name: 'Миколаїв', desc: '👉 Здається, миколаївці люблять крайнощі — після тривалого часу в морі гуляють найдовшою пішохідною вулицею… або вона для тих, хто любить довго теревенити під сухарики Flint.'},
	'simferopol': { name: 'Сімферополь', desc: '👉 Якщо на планеті й існує час на похрумтіти Flint та подумати за життя — то найдовший тролейбусний маршрут на планеті між Ялтою та  Сімферополем створений якраз для цього! 86 км — ти і Flint!'},
	'khmelnytskyi': { name: 'Хмельницький', desc: '👉 Справжнім отаманом не народжуються — ним стають! І ти зможеш! Flint і дух Богдана Хмельницького підтримають твій козацький дух!'},
	'chernihiv': { name: 'Чернігів', desc: '👉 Чернігів настільки містичний і крутий, що має талісманом Семаргла — звіра з головою собаки і пташиними крилами. Справжнє місце для заряду енергією, особливо, якщо під час візиту їсти Flint)'},
	'chernivtsi': { name: 'Чернівці', desc: '👉 Не любиш прокидатися під нудний будильник, бо вчора весь вечір хрумтів сухариками під відеоігри? У Чернівцях тебе розбудить справжній трубач «Марічкою».'},
	'cherkasy': { name: 'Черкаси', desc: '👉 Додай свою історію до безлічі міських легенд про Черкаський палац одружень….або хоча б посидь на сходах із сухариками, Flint завжди привертає увагу))'}
};
document.addEventListener("beforePopupOpen", function(event) {
	var CityID = event.detail.popup.lastFocusEl.id;
	document.querySelector("#popup .content-about__title").innerHTML= "Цікавий факт про " + CityInfo[CityID].name;
	document.querySelector("#popup .content-about__content").innerHTML=CityInfo[CityID].desc;
  document.querySelector("#popup input[name='city']").value = CityID;
});