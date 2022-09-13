-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Aug 19, 2022 at 07:19 AM
-- Server version: 10.4.22-MariaDB
-- PHP Version: 8.0.15

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `grocery`
--

-- --------------------------------------------------------

--
-- Table structure for table `categories`
--

CREATE TABLE `categories` (
  `id` int(11) NOT NULL,
  `category_name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `picture` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `is_active` tinyint(1) NOT NULL DEFAULT 1,
  `createdAt` timestamp NOT NULL DEFAULT current_timestamp(),
  `updatedAt` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `categories`
--

INSERT INTO `categories` (`id`, `category_name`, `picture`, `is_active`, `createdAt`, `updatedAt`) VALUES
(1, 'Grocery', NULL, 1, '2022-08-10 07:36:36', '2022-08-10 07:36:36'),
(3, 'Vegetables', NULL, 1, '2022-08-10 07:36:58', '2022-08-10 07:36:58'),
(9, 'Fruits', '2411040_1660121438143.jpg', 0, '2022-08-10 08:47:21', '2022-08-10 08:50:38'),
(10, 'Meat', NULL, 0, '2022-08-16 13:25:47', '2022-08-16 13:25:47'),
(11, 'Wheat', NULL, 0, '2022-08-16 13:50:41', '2022-08-16 13:50:41'),
(13, 'Grains', NULL, 0, '2022-08-16 14:00:13', '2022-08-16 14:00:13'),
(14, 'Rice', NULL, 0, '2022-08-17 05:26:14', '2022-08-17 05:26:14'),
(15, 'Apple', NULL, 0, '2022-08-17 05:36:42', '2022-08-17 05:36:42'),
(16, 'Orange', NULL, 0, '2022-08-17 10:44:00', '2022-08-17 10:44:00'),
(17, 'Mango', NULL, 0, '2022-08-17 13:04:54', '2022-08-17 13:04:54'),
(21, 'Test', NULL, 0, '2022-08-18 07:23:55', '2022-08-18 07:23:55'),
(25, 'Test@1', NULL, 0, '2022-08-18 08:43:10', '2022-08-18 14:05:25'),
(26, 'Wheat_1', NULL, 0, '2022-08-18 08:46:18', '2022-08-18 08:46:18'),
(27, 'Wheat_2', NULL, 0, '2022-08-18 08:56:12', '2022-08-18 08:56:12');

-- --------------------------------------------------------

--
-- Table structure for table `contacts`
--

CREATE TABLE `contacts` (
  `id` int(11) NOT NULL,
  `task` varchar(200) DEFAULT NULL,
  `createdAt` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `updatedAt` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `contacts`
--

INSERT INTO `contacts` (`id`, `task`, `createdAt`, `updatedAt`) VALUES
(1, '2342423432434', '2022-08-10 07:18:36', '2022-08-10 07:19:05');

-- --------------------------------------------------------

--
-- Table structure for table `products`
--

CREATE TABLE `products` (
  `id` int(11) NOT NULL,
  `product_name` varchar(200) DEFAULT NULL,
  `product_amount` int(200) DEFAULT NULL,
  `product_discount_price` int(200) DEFAULT NULL,
  `product_image` varchar(200) DEFAULT NULL,
  `category_id` int(11) DEFAULT NULL,
  `status` tinyint(1) NOT NULL,
  `description` varchar(200) DEFAULT NULL,
  `tag` varchar(200) DEFAULT NULL,
  `rating` varchar(200) DEFAULT NULL,
  `is_weight_variable` varchar(200) DEFAULT NULL,
  `createdAt` timestamp NULL DEFAULT current_timestamp(),
  `updatedAt` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `products`
--

INSERT INTO `products` (`id`, `product_name`, `product_amount`, `product_discount_price`, `product_image`, `category_id`, `status`, `description`, `tag`, `rating`, `is_weight_variable`, `createdAt`, `updatedAt`) VALUES
(1, 'Tomato', 50, 10, 'tomato_noun_001_17860_1660655961537.jpg', 2, 1, NULL, NULL, NULL, NULL, '2022-08-16 13:19:21', '2022-08-16 13:19:21'),
(3, 'zomato', 50, 10, 'hotel-lobby-15817257_1660716065136.jpg', 2, 1, 'xyz', 'fresh', NULL, '', '2022-08-17 06:01:05', '2022-08-17 06:01:05'),
(4, 'Mango', 50, 10, 'fresh-mango-500x500_1660826797941.jpg', 2, 1, 'xyz', 'fresh', '2', 'true', '2022-08-18 12:46:37', '2022-08-18 12:46:37');

-- --------------------------------------------------------

--
-- Table structure for table `products_images`
--

CREATE TABLE `products_images` (
  `id` int(20) NOT NULL,
  `product_id` int(20) DEFAULT NULL,
  `product_image` varchar(200) DEFAULT NULL,
  `status` int(11) NOT NULL DEFAULT 1,
  `createdAt` date DEFAULT NULL,
  `updatedAt` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `products_images`
--

INSERT INTO `products_images` (`id`, `product_id`, `product_image`, `status`, `createdAt`, `updatedAt`) VALUES
(1, 2, '1660808888788_Screenshot from 2022-07-30 13-00-59.png', 1, '2022-08-18', '2022-08-18'),
(2, 2, 'taj-mahal-hotel-mumbai-famous-building-touristic-part-india-68658618_1660823146122.jpg', 1, '2022-08-18', '2022-08-18'),
(3, 2, '1660808888788_Screenshot from 2022-07-30 13-00-59.png', 1, '2022-08-18', '2022-08-18'),
(4, 2, '1660814732182_Screenshot from 2022-07-30 13-00-59.png', 1, '2022-08-18', '2022-08-18'),
(5, 2, '1660814732182_Screenshot from 2022-07-30 13-00-59.png', 1, '2022-08-18', '2022-08-18'),
(6, 2, '1660814732182_Screenshot from 2022-07-30 13-00-59.png', 1, '2022-08-18', '2022-08-18'),
(7, 2, '1660814733153_Screenshot from 2022-07-30 13-00-59.png', 1, '2022-08-18', '2022-08-18'),
(8, 2, '1660814733153_Screenshot from 2022-07-30 13-00-59.png', 1, '2022-08-18', '2022-08-18'),
(9, 2, '1660814733153_Screenshot from 2022-07-30 13-00-59.png', 1, '2022-08-18', '2022-08-18'),
(10, 2, '1660814734057_Screenshot from 2022-07-30 13-00-59.png', 1, '2022-08-18', '2022-08-18'),
(12, 2, '1660814734057_Screenshot from 2022-07-30 13-00-59.png', 1, '2022-08-18', '2022-08-18'),
(13, 2, '1660814735136_Screenshot from 2022-07-30 13-00-59.png', 1, '2022-08-18', '2022-08-18'),
(14, 2, '1660814735136_Screenshot from 2022-07-30 13-00-59.png', 1, '2022-08-18', '2022-08-18'),
(15, 2, '1660814735136_Screenshot from 2022-07-30 13-00-59.png', 1, '2022-08-18', '2022-08-18'),
(16, 2, '1660814735729_Screenshot from 2022-07-30 13-00-59.png', 1, '2022-08-18', '2022-08-18'),
(17, 2, '1660814735729_Screenshot from 2022-07-30 13-00-59.png', 1, '2022-08-18', '2022-08-18'),
(18, 2, '1660814735729_Screenshot from 2022-07-30 13-00-59.png', 1, '2022-08-18', '2022-08-18'),
(19, 2, '1660814736654_Screenshot from 2022-07-30 13-00-59.png', 1, '2022-08-18', '2022-08-18'),
(20, 2, 'red-whole-sliced-onion-isolated-260nw-1684863088_1660826410666.jpg', 1, '2022-08-18', '2022-08-18'),
(21, 2, '1660814736654_Screenshot from 2022-07-30 13-00-59.png', 1, '2022-08-18', '2022-08-18'),
(22, 2, '1660814737530_Screenshot from 2022-07-30 13-00-59.png', 1, '2022-08-18', '2022-08-18'),
(23, 2, '1660814737530_Screenshot from 2022-07-30 13-00-59.png', 1, '2022-08-18', '2022-08-18'),
(24, 2, 'taj-mahal-hotel-mumbai-famous-building-touristic-part-india-68658618_1660823181512.jpg', 1, '2022-08-18', '2022-08-18');

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `id` int(11) NOT NULL,
  `first_name` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `last_name` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `bio` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `password` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `is_verified` tinyint(1) NOT NULL DEFAULT 0,
  `token` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`id`, `first_name`, `last_name`, `bio`, `email`, `password`, `is_verified`, `token`, `createdAt`, `updatedAt`) VALUES
(1, NULL, NULL, NULL, 'aslam.doctor@gmail.com', '$2a$10$7GK7Mswnlrvhru4jCd1p.u8Ss/G2mmvSihnALQnQf4AhI8DOoqbb2', 1, '', '2020-09-09 15:51:29', '2020-09-09 17:00:40'),
(2, 'Jahn', 'Doe', 'Hello, I am John Doe.', 'john@doe.com', '$2a$10$mLZM/wKT3R.I32XSk9g5puFiBH/8f.BEfAy/C9Jbyz2zmhnODK8bi', 1, '', '2020-09-09 16:00:28', '2020-09-09 16:48:11');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `categories`
--
ALTER TABLE `categories`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `contacts`
--
ALTER TABLE `contacts`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `products_images`
--
ALTER TABLE `products_images`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `categories`
--
ALTER TABLE `categories`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=28;

--
-- AUTO_INCREMENT for table `contacts`
--
ALTER TABLE `contacts`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `products`
--
ALTER TABLE `products`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `products_images`
--
ALTER TABLE `products_images`
  MODIFY `id` int(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=25;

--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
