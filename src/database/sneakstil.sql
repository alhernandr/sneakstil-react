-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 12-05-2024 a las 19:12:48
-- Versión del servidor: 10.4.32-MariaDB
-- Versión de PHP: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `sneakstil`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `cesta`
--

CREATE TABLE `cesta` (
  `id` int(11) NOT NULL,
  `nombre` varchar(255) DEFAULT NULL,
  `marca` varchar(100) DEFAULT NULL,
  `precio` decimal(10,2) DEFAULT NULL,
  `disponibilidad` varchar(50) DEFAULT NULL,
  `imagen` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `clientes`
--

CREATE TABLE `clientes` (
  `id` int(11) NOT NULL,
  `nombre` varchar(100) DEFAULT NULL,
  `email` varchar(100) DEFAULT NULL,
  `pasword` varchar(255) NOT NULL,
  `admin` tinyint(1) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `clientes`
--

INSERT INTO `clientes` (`id`, `nombre`, `email`, `pasword`, `admin`) VALUES
(10, 'lu', 'lu@gmail.com', '$2y$10$E.PTofHmhmQjkbmXz5UtpODkmUqBP.a24.XYIsgEmkKDsuNU8OAd6', NULL),
(12, 'admin', 'admin@gmail.com', '$2y$10$mKJ4QD9zWhInPx3sZNQQxOnVjhdi8A/loqS6fdhekWQQt9qib3pLO', 1),
(13, 'alvaro', 'alvaro29032000@gmail.com', '$2y$10$Cm6kF.3aGdvB.U7poPUrDuOlVltUsxCK7jdJa69o/f8F7tvspFyfS', NULL),
(20, 'Eliazar', 'Eliazar@gmail.com', '12345678', NULL);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `productos`
--

CREATE TABLE `productos` (
  `id` int(11) NOT NULL,
  `nombre` varchar(255) DEFAULT NULL,
  `marca` varchar(100) DEFAULT NULL,
  `precio` decimal(10,2) DEFAULT NULL,
  `disponibilidad` varchar(50) DEFAULT NULL,
  `imagen` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `productos`
--

INSERT INTO `productos` (`id`, `nombre`, `marca`, `precio`, `disponibilidad`, `imagen`) VALUES
(21, 'Jordan 4 Retro Military Black', 'Nike', 546.00, '10', 'b360366a82440b2f2ff8ae36b97277ee.jpg'),
(22, 'Jordan 3 Retro SP A Ma Maniére', 'Nike', 461.00, '4', 'a42ec092fbc77b55d062c2913e0f71b1.jpg'),
(23, 'Jordan 4 Retro Canyon Purple', 'Nike', 289.00, '5', '78a5e0f1b565c3a33551c39b3638044c.jpg'),
(24, 'Jordan 4 Frozen Moments', 'Nike', 284.00, '12', '00633fc7946c418176963dc4cdfb8fa7.jpg'),
(25, 'Jordan 11 Retro Midnight Navy', 'Nikejhf', 120.00, '2', ''),
(26, 'Jordan 1 Mid SE Fearless Melody Ehsani', 'Nike', 885.00, '7', 'fce39d11a2c34d8cdf635373c2dd6c2a.jpg'),
(27, 'Jordan 1 Retro High OG Palomino', 'Nike', 171.00, '12', 'f7cc908108ad763d8b5885fd9ee0a19f.jpg'),
(28, 'Nike SB Dunk Low Concepts Purple Lobster', 'Nike', 982.00, '4', '94d5e872f28aae20a5512ea36de7a27b.jpg');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `cesta`
--
ALTER TABLE `cesta`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `clientes`
--
ALTER TABLE `clientes`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `productos`
--
ALTER TABLE `productos`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `cesta`
--
ALTER TABLE `cesta`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT de la tabla `clientes`
--
ALTER TABLE `clientes`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;

--
-- AUTO_INCREMENT de la tabla `productos`
--
ALTER TABLE `productos`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=36;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;