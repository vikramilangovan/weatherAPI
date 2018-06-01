-- phpMyAdmin SQL Dump
-- version 4.6.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: May 29, 2018 at 01:43 PM
-- Server version: 5.7.14
-- PHP Version: 5.6.25

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `weather`
--

-- --------------------------------------------------------

--
-- Table structure for table `history`
--

CREATE TABLE `history` (
  `id` int(5) NOT NULL,
  `city` varchar(50) NOT NULL,
  `country` varchar(50) NOT NULL,
  `temperature` double NOT NULL,
  `img` varchar(5) NOT NULL,
  `wind` double NOT NULL,
  `pressure` bigint(20) NOT NULL,
  `humidity` int(6) NOT NULL,
  `sunrise` bigint(20) NOT NULL,
  `sunset` bigint(20) NOT NULL,
  `lat` float NOT NULL,
  `lon` float NOT NULL,
  `datetime` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `history`
--

INSERT INTO `history` (`id`, `city`, `country`, `temperature`, `img`, `wind`, `pressure`, `humidity`, `sunrise`, `sunset`, `lat`, `lon`, `datetime`) VALUES
(95, 'Malaysia', 'MY', 300.15, '04n', 0.5, 1008, 88, 1527545991, 1527590103, 2.5, 112.5, '2018-05-29 13:25:14'),
(96, 'Coimbatore', 'IN', 300.15, '03d', 5.1, 1006, 69, 1527553692, 1527599466, 11, 76.96, '2018-05-29 13:26:08'),
(97, 'Coimbatore', 'IN', 300.15, '03d', 5.1, 1006, 69, 1527553692, 1527599466, 11, 76.96, '2018-05-29 13:27:34'),
(98, 'Coimbatore', 'IN', 300.15, '03d', 5.1, 1006, 69, 1527553692, 1527599466, 11, 76.96, '2018-05-29 13:30:42'),
(94, 'Coimbatore', 'IN', 300.15, '03d', 5.1, 1006, 69, 1527553692, 1527599466, 11, 76.96, '2018-05-29 13:22:18');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `history`
--
ALTER TABLE `history`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `history`
--
ALTER TABLE `history`
  MODIFY `id` int(5) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=99;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
