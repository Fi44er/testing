-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Хост: 127.0.0.1
-- Время создания: Ноя 28 2023 г., 12:12
-- Версия сервера: 10.4.28-MariaDB
-- Версия PHP: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- База данных: `testing`
--

-- --------------------------------------------------------

--
-- Структура таблицы `category`
--

CREATE TABLE `category` (
  `id` int(11) NOT NULL,
  `name` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Дамп данных таблицы `category`
--

INSERT INTO `category` (`id`, `name`) VALUES
(1, 'man-nature'),
(2, 'man-technique'),
(3, 'man-system'),
(4, 'man-art'),
(5, 'man-man');

-- --------------------------------------------------------

--
-- Структура таблицы `prof_test`
--

CREATE TABLE `prof_test` (
  `id` int(150) NOT NULL,
  `question` varchar(500) NOT NULL,
  `categoryId` int(11) NOT NULL,
  `countPoint` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Дамп данных таблицы `prof_test`
--

INSERT INTO `prof_test` (`id`, `question`, `categoryId`, `countPoint`) VALUES
(1, 'Легко знакомлюсь с людьми.', 5, 1),
(2, 'Охотно и подолгу могу что-нибудь мастерить.', 2, 1),
(3, 'Люблю ходить в музеи, театры, на выставки.', 4, 1),
(4, 'Охотно и постоянно ухаживаю за растениями, животными. ', 1, 1),
(5, 'Охотно и подолгу могу что-нибудь вычислять, чертить.', 3, 1),
(6, 'С удовольствием общаюсь со сверстниками или малышами', 5, 1),
(7, 'С удовольствием ухаживаю за растениями и животными.', 1, 1),
(8, 'Обычно делаю мало ошибок в письменных работах.', 3, 1),
(9, 'Мои изделия обычно вызывают интерес у товарищей, старших', 2, 2),
(10, 'Люди считают, что у меня есть художественные способности.', 4, 2),
(11, 'Охотно читаю о растениях, животных', 1, 1),
(12, 'Принимаю участие в спектаклях, концертах', 4, 1),
(13, 'Люблю читать об устройстве механизмов, приборов, машин ', 2, 1),
(14, 'Подолгу могу разгадывать головоломки, задачи, ребусы', 3, 2),
(15, 'Легко улаживаю разногласия между людьми ', 5, 2),
(16, 'Считают, что у меня есть способности к работе с техникой', 2, 2),
(17, 'Людям нравится мое художественное творчество', 4, 2),
(18, 'У меня есть способности к работе с растениями и животными', 1, 2),
(19, 'Я могу ясно излагать свои мысли в письменной форме', 3, 2),
(20, 'Я почти никогда ни с кем не ссорюсь', 5, 1),
(21, 'Результаты моего технического творчества одобряют даже незнакомые\r\nлюди', 2, 1),
(22, 'Без особого труда усваиваю иностранные языки', 3, 1),
(23, ' Мне часто случается помогать даже незнакомым людям', 5, 2),
(24, 'Подолгу могу заниматься музыкой, рисованием, читать книги и т. д. ', 4, 1),
(25, 'Могу влиять на ход развития растений и животных', 1, 2),
(26, 'Люблю разбираться в устройстве механизмов, приборов', 2, 1),
(27, 'Мне обычно удается убедить людей в своей правоте', 5, 1),
(28, 'Охотно наблюдаю за растениями или животными', 1, 1),
(29, 'Охотно читаю научно-популярную, критическую литературу, публицистику', 3, 1),
(30, 'Стараюсь понять секреты мастерства и пробую свои силы в живописи,\r\nмузыке и т. п.', 4, 1);

-- --------------------------------------------------------

--
-- Структура таблицы `refresh`
--

CREATE TABLE `refresh` (
  `id` int(11) NOT NULL,
  `user` int(11) NOT NULL,
  `refreshToken` varchar(500) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Дамп данных таблицы `refresh`
--

INSERT INTO `refresh` (`id`, `user`, `refreshToken`) VALUES
(52, 21, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InRlc3QyQHRlc3QucnUiLCJpZCI6MjEsImZpbyI6InRlc3QgdGVzdCIsInBob25lTnVtYmVyIjo5ODg5OTk5OTk5OSwiaWF0IjoxNzAxMTU2MjQxLCJleHAiOjE3MDM3NDgyNDF9.jY8cv91NhyVHi5XBWwnoFvuzyJ0laEhCE2Z7tXi6pSI');

-- --------------------------------------------------------

--
-- Структура таблицы `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `email` varchar(250) NOT NULL,
  `password` varchar(250) NOT NULL,
  `fio` varchar(250) NOT NULL,
  `phoneNumber` bigint(20) NOT NULL,
  `regTime` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Дамп данных таблицы `users`
--

INSERT INTO `users` (`id`, `email`, `password`, `fio`, `phoneNumber`, `regTime`) VALUES
(21, 'test2@test.ru', '$2b$04$85dQIZBN6vmCrzLHETCOYu1DUpgTFsaLsH5.zQ.zNmJwKZX2mvuaW', 'test test', 98899999999, '2023-11-13 09:18:01'),
(22, 'test78@test.ru', '$2b$04$H/mSB.1K.HW2AvENeyvWWODMq6pam3vCcc.67L4YjeHwpT.PE0uJO', 'test test', 98899999999, NULL),
(24, 'mail@mail.ru', '$2b$04$kX/77xrQ407rRzUjVce4aeQqU1tysrChO97UKam9JvuiozpFZ7RKC', 'test test', 89033333333, NULL),
(25, 'qwerty123@mail.ru', '$2b$04$So0S35r4DOjMzFL7ApBAUeWEVRBTC81AYN5W4Vstqmg.baoMzUfGy', 'qwerty qwerty qwerty', 89055556677, NULL),
(26, 'date@mail.ru', '$2b$04$2ArxqmYXi33VvJV7d9I/q.1moa7CJQYrJfj.sS7K8/lhC3w8lSW5i', 'test123', 11111111111, '2023-11-13 09:18:01');

--
-- Индексы сохранённых таблиц
--

--
-- Индексы таблицы `category`
--
ALTER TABLE `category`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `prof_test`
--
ALTER TABLE `prof_test`
  ADD PRIMARY KEY (`id`),
  ADD KEY `categoryId` (`categoryId`);

--
-- Индексы таблицы `refresh`
--
ALTER TABLE `refresh`
  ADD PRIMARY KEY (`id`),
  ADD KEY `user` (`user`);

--
-- Индексы таблицы `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `email` (`email`);

--
-- AUTO_INCREMENT для сохранённых таблиц
--

--
-- AUTO_INCREMENT для таблицы `category`
--
ALTER TABLE `category`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT для таблицы `prof_test`
--
ALTER TABLE `prof_test`
  MODIFY `id` int(150) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=38;

--
-- AUTO_INCREMENT для таблицы `refresh`
--
ALTER TABLE `refresh`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=53;

--
-- AUTO_INCREMENT для таблицы `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=27;

--
-- Ограничения внешнего ключа сохраненных таблиц
--

--
-- Ограничения внешнего ключа таблицы `prof_test`
--
ALTER TABLE `prof_test`
  ADD CONSTRAINT `prof_test_ibfk_1` FOREIGN KEY (`categoryId`) REFERENCES `category` (`id`);

--
-- Ограничения внешнего ключа таблицы `refresh`
--
ALTER TABLE `refresh`
  ADD CONSTRAINT `refresh_ibfk_1` FOREIGN KEY (`user`) REFERENCES `users` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
