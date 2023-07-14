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
  
});


// Получаем ссылки на элементы
var button = document.querySelector('.content-about__close');
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
