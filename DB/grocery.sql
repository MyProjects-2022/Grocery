-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Sep 02, 2022 at 03:35 PM
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
-- Table structure for table `add_to_cart`
--

CREATE TABLE `add_to_cart` (
  `id` int(11) NOT NULL,
  `user_id` int(11) DEFAULT NULL,
  `username` varchar(200) DEFAULT NULL,
  `price` varchar(55) DEFAULT NULL,
  `product_id` int(11) DEFAULT NULL,
  `status` varchar(200) DEFAULT NULL,
  `quantity` varchar(200) DEFAULT NULL,
  `createdAt` date NOT NULL DEFAULT current_timestamp(),
  `updatedAt` date NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `add_to_cart`
--

INSERT INTO `add_to_cart` (`id`, `user_id`, `username`, `price`, `product_id`, `status`, `quantity`, `createdAt`, `updatedAt`) VALUES
(1, 26, 'chetan', NULL, 9, 'add to cart', '5', '2022-09-01', '2022-09-01'),
(2, 37, 'aniket', NULL, 3, 'add to whishlist', '3', '2022-09-01', '2022-09-01'),
(3, 38, 'nikson', NULL, 4, 'add to whishlist', '6', '2022-09-01', '2022-09-01'),
(4, 38, 'nikson', NULL, 4, 'add to whishlist', '6', '2022-09-01', '2022-09-01'),
(5, 38, 'nikson', NULL, 4, 'add to whishlist', '6', '2022-09-01', '2022-09-01'),
(6, 38, 'nikson', NULL, 4, 'add to whishlist', '6', '2022-09-01', '2022-09-01'),
(7, 38, 'nikson', NULL, 4, 'add to whishlist', '6', '2022-09-01', '2022-09-01'),
(8, 38, 'nikson', NULL, 4, 'add to whishlist', '6', '2022-09-01', '2022-09-01'),
(9, 38, 'nikson', NULL, 4, 'add to whishlist', '6', '2022-09-01', '2022-09-01'),
(10, 38, 'nikson', NULL, 4, 'add to whishlist', '6', '2022-09-01', '2022-09-01'),
(11, 38, 'nikson', NULL, 4, 'add to whishlist', '6', '2022-09-01', '2022-09-01'),
(12, 38, 'nikson', NULL, 4, 'add to whishlist', '6', '2022-09-01', '2022-09-01'),
(13, 38, 'nikson', NULL, 4, 'add to whishlist', '6', '2022-09-01', '2022-09-01'),
(14, 2, 'amit', NULL, 6, '', '23', '2022-09-01', '2022-09-01'),
(15, 2, 'amit', NULL, 6, '', '23', '2022-09-01', '2022-09-01'),
(16, 2, 'amit', NULL, 6, 'whishlist', '23', '2022-09-01', '2022-09-01'),
(17, 2, 'amit', NULL, 6, 'whishlist', '23', '2022-09-01', '2022-09-01'),
(18, 2, 'amit', NULL, 6, 'whishlist', '23', '2022-09-01', '2022-09-01'),
(19, 2, 'amit', NULL, 6, 'whishlist', '23', '2022-09-01', '2022-09-01'),
(20, 2, 'amit', NULL, 6, 'whishlist', '23', '2022-09-01', '2022-09-01'),
(21, 2, 'amit', NULL, 6, 'cart', '23', '2022-09-01', '2022-09-01'),
(22, 2, 'amit', NULL, 6, 'whishlist', '23', '2022-09-01', '2022-09-01'),
(23, 10, 'sad', NULL, 6, 'whishlist', '23', '2022-09-01', '2022-09-01'),
(24, 11, 'sad', '22000', 6, 'whishlist', '23', '2022-09-01', '2022-09-01');

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
(9, 'Fruit', 'fresh-mango-500x500_1661517049259.jpg', 0, '2022-08-10 08:47:21', '2022-08-27 10:32:16'),
(30, 'Beverages', NULL, 1, '2022-08-25 12:03:22', '2022-08-25 12:03:22'),
(31, 'Egg, Meat And Fish', NULL, 1, '2022-08-25 12:04:47', '2022-08-25 12:04:47');

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
-- Table structure for table `order`
--

CREATE TABLE `order` (
  `id` int(11) NOT NULL,
  `user_id` int(11) DEFAULT NULL,
  `product_id` int(11) DEFAULT NULL,
  `quantity` varchar(255) DEFAULT NULL,
  `final_amount` int(100) DEFAULT NULL,
  `discount_price` int(100) DEFAULT NULL,
  `total_amount` int(100) DEFAULT NULL,
  `shipping_address` varchar(255) DEFAULT NULL,
  `user_contact` varchar(255) DEFAULT NULL,
  `pin_code` varchar(255) DEFAULT NULL,
  `full_address` varchar(255) DEFAULT NULL,
  `status` varchar(200) DEFAULT NULL,
  `createdAt` date NOT NULL DEFAULT current_timestamp(),
  `updatedAt` date NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `order`
--

INSERT INTO `order` (`id`, `user_id`, `product_id`, `quantity`, `final_amount`, `discount_price`, `total_amount`, `shipping_address`, `user_contact`, `pin_code`, `full_address`, `status`, `createdAt`, `updatedAt`) VALUES
(1, 26, 9, '5', 25500, 2500, 22500, 'Indore', '9635842523', '452082', 'Rau,Indore ', 'active', '2022-09-01', '2022-09-01'),
(2, 26, 9, '5', 25500, 2500, 22500, 'Indore', '9635842523', '452082', 'Rau,Indore ', 'active', '2022-09-01', '2022-09-01');

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
  `description` text DEFAULT NULL,
  `tag` varchar(200) DEFAULT NULL,
  `rating` int(200) DEFAULT 0,
  `product_type` varchar(200) DEFAULT NULL,
  `product_slug` varchar(200) DEFAULT NULL,
  `is_weight_variable` tinyint(1) DEFAULT 0,
  `product_discount_percent` int(200) DEFAULT NULL,
  `brand` varchar(200) DEFAULT NULL,
  `benefits` text DEFAULT NULL,
  `other_product_info` text DEFAULT NULL,
  `storage_and_usage` text DEFAULT NULL,
  `createdAt` timestamp NULL DEFAULT current_timestamp(),
  `updatedAt` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `products`
--

INSERT INTO `products` (`id`, `product_name`, `product_amount`, `product_discount_price`, `product_image`, `category_id`, `status`, `description`, `tag`, `rating`, `product_type`, `product_slug`, `is_weight_variable`, `product_discount_percent`, `brand`, `benefits`, `other_product_info`, `storage_and_usage`, `createdAt`, `updatedAt`) VALUES
(36, 'Orange', 500, 60, 'Jaffa-Oranges_1661428099378.jpg', 9, 0, 'a color between red and yellow : the color of a carrot. 2 : a sweet juicy citrus fruit with orange colored rind that grows on an evergreen tree with shining leaves and fragrant white flowers.', 'Fresh Orange', 0, 'featured', 'Orange', 1, 88, 'Navel Orange', 'As mentioned previously, it\'s never wise to consume anything in excess - especially a citrus-y fruit laden with vitamin C that\'s heavy on the stomach. If you\'re eating too many oranges every day, you might experience side-effects like diarrhoea, vomiting, nausea, heartburn, bloating, cramps, and insomnia.', 'The orange originated in a region encompassing Southern China, Northeast India, and Myanmar, and the earliest mention of the sweet orange was in Chinese literature in 314 BC. As of 1987, orange trees were found to be the most cultivated fruit tree in the world.', 'Commercial growers and handlers can store oranges for 3 to 8 weeks when refrigerat- ed at 38° to 48°F (3° to 9°C), depending on the initial condition of the fruit. Optimum humidity for storage of oranges is 90 to 95%.', '2022-08-25 11:48:19', '2022-08-30 07:35:53'),
(37, 'Red Bull', 150, 120, 'download_1661430013258.jpg', 30, 0, 'Red Bull is a brand of energy drinks of Austrian company Red Bull GmbH.', 'Gives You Wiiings', 0, 'Popular', 'Energy Drink', 0, 20, 'Red Bull GmbH', 'Red Bull contains the water-soluble B-group vitamins niacin, vitamin B6, vitamin B2 and vitamin B12. These B-group vitamins contribute to normal energy-yielding metabolism, such as the build-up and break-down of carbohydrates and proteins, and the reduction of tiredness and fatigue.', 'Red Bull was founded in Austria by Dietrich Mateschitz in 1984. On April 1, 1987, Red Bull Energy Drink was launched in Austria.', 'Technically it would be fine for a while. Since it\'s sugary, and lacks protein, bacteria and mould would take a fairly long time to start growing. Personally I wouldn\'t leave it opened at room temperature for more than a few hours, since it will be fairly flat by then.', '2022-08-25 12:20:13', '2022-08-25 12:20:13'),
(52, 'Pomegranate', 227, 175, 'GettyImages-157685468-fb148317607a47c1b4696f79b66016c4_1661779786349.jpg', 9, 0, 'The pomegranate plant is a large shrub or small tree that has smooth, evergreen leaves and showy orange to red flowers. It has rounded fruit with a dry outer covering (husk) made up of two layers: (1) a hard-outer layer called an epicarp, (2) a soft inner layer called a mesocarp.', 'Fresh Pomegranate', 0, 'Popular', 'Fruit', 1, 23, 'V8 Pomegranate', 'Pomegranates are rich in antioxidants and flavonoids, both of which are known to prevent free radicals from damaging your cells. In some studies, pomegranates show potential to be effective in preventing prostate, breast, lung, and colon cancers.', 'The pomegranate tree is native from Iran to the Himalayas in northern India and has been cultivated since ancient times throughout the Mediterranean region of Asia, Africa and Europe.', 'Store pomegranates in a cool, dry well-ventilated place. The fruit should be spread on shelves or tables or hung by tying strings to the fruit stems. Fruit can also be refrigerated. Fresh seeds or juice will keep in the refrigerator for up to 5 days.\r\n', '2022-08-29 13:29:46', '2022-08-29 13:29:46'),
(53, 'Ladyfinger', 149, 129, 'lady-finger-benefits_1661781061784.webp', 3, 0, 'A green colored oblong shaped vegetable, tapering at the end with tiny seeds inside. It is also known as okra or gumbo. It is often used as an ingredient in Indian and Pakistani cuisine. The entire plant is edible and its leaves are usually eaten raw in salads.', 'Fresh ladyfinger', 0, 'Featured', 'Vegetables', 1, 13, 'Balocco Savoiardi Ladyfingers', 'A green colored oblong shaped vegetable, tapering at the end with tiny seeds inside. It is also known as okra or gumbo. It is often used as an ingredient in Indian and Pakistani cuisine. The entire plant is edible and its leaves are usually eaten raw in salads.', 'Ladyfingers originated in the late 15th century at the court of the Duchy of Savoy and were created to mark the occasion of a visit by the King of France. Later, they were given the name Savoiardi and recognized as an \"official\" court biscuit.', 'The ladyfinger will keep 3 days in an airtight container. They can also be frozen for up to 8 weeks.', '2022-08-29 13:51:01', '2022-08-29 13:51:01'),
(54, 'Mango', 450, 350, '28-Mango-Month-640x514.jpg_1661865446838.webp', 9, 0, 'The fruit varies greatly in size and character. Its form is oval, round, heart-shaped, kidney-shaped, or long and slender. The smallest mangoes are no larger than plums, while others may weigh 1.8 to 2.3 kg (4 to 5 pounds). Some varieties are vividly coloured with shades of red and yellow, while others are dull green.', 'Fresh Mango ', 0, 'Popular', 'Fruit', 1, 22, 'Hapus', 'They are a great source of magnesium and potassium, both of which are connected to lower blood pressure and a regular pulse. Furthermore, mangos are the source of a compound known as mangiferin, which early studies suggest may be able to reduce inflammation of the heart. Mangos can help stabilize your digestive system.', 'Mangoes originated in India over 4,000 years ago and are considered a sacred fruit. Mangoes spread gradually throughout Asia and then to the rest of the world. Due to a mango\'s large center seed, the fruit relied on humans to transport them across the world.', 'Once ripe, mangos should be moved to the refrigerator, which will slow down the ripening process. Whole, ripe mangos may be stored for up to five days in the refrigerator.', '2022-08-30 13:17:26', '2022-08-30 13:17:26'),
(55, 'Coca-Cola', 55, 45, '637344648678202976Carma_Photo_Product_19_Featured-(x)-up_800x654_1661866453795.jpg', 30, 0, 'The Coca-Cola Company (NYSE: KO) is a total beverage company with products sold in more than 200 countries and territories. Our company\'s purpose is to refresh the world and make a difference. Our portfolio of brands includes Coca-Cola, Sprite, Fanta and other sparkling soft drinks.', 'Carbonated drink', 0, 'Featured', 'Soft-Drink', 0, 18, 'Coca-Cola', '4 surprising health benefits of Coca-Cola you might not know\r\nEase digestion. \r\nFocus your mind.\r\nIncrease your engery.\r\nStop nausea.', 'The Origin of Coca-Cola\r\nOn May 8, 1886, Dr. John Pemberton sold the first glass of Coca-Cola at Jacobs\' Pharmacy in downtown Atlanta. Serving nine drinks per day in its first year, Coca-Cola was new refreshment in its beginning. See the story here of how it all began.', 'You can help Coke keep fresh longer by storing it in a cool dark place with a constant temperature. If the coke is unopened, you can store it in your pantry. A sealed bottle of soda will keep its CO2 a day or two longer than an open can will', '2022-08-30 13:34:13', '2022-08-30 13:34:13'),
(75, 'Banana', 500, 60, 'Jaffa-Oranges_1661428099378.jpg', 9, 0, 'a color between red and yellow : the color of a carrot. 2 : a sweet juicy citrus fruit with orange colored rind that grows on an evergreen tree with shining leaves and fragrant white flowers.', 'Fresh Orange', 0, 'featured', 'Orange', 1, 88, 'Navel Orange', 'As mentioned previously, it\'s never wise to consume anything in excess - especially a citrus-y fruit laden with vitamin C that\'s heavy on the stomach. If you\'re eating too many oranges every day, you might experience side-effects like diarrhoea, vomiting, nausea, heartburn, bloating, cramps, and insomnia.', 'The orange originated in a region encompassing Southern China, Northeast India, and Myanmar, and the earliest mention of the sweet orange was in Chinese literature in 314 BC. As of 1987, orange trees were found to be the most cultivated fruit tree in the world.', 'Commercial growers and handlers can store oranges for 3 to 8 weeks when refrigerat- ed at 38° to 48°F (3° to 9°C), depending on the initial condition of the fruit. Optimum humidity for storage of oranges is 90 to 95%.', '2022-08-25 11:48:19', '2022-08-30 07:35:53'),
(76, 'Apple', 500, 60, 'Jaffa-Oranges_1661428099378.jpg', 9, 0, 'a color between red and yellow : the color of a carrot. 2 : a sweet juicy citrus fruit with orange colored rind that grows on an evergreen tree with shining leaves and fragrant white flowers.', 'Fresh Orange', 0, 'featured', 'Orange', 1, 88, 'Navel Orange', 'As mentioned previously, it\'s never wise to consume anything in excess - especially a citrus-y fruit laden with vitamin C that\'s heavy on the stomach. If you\'re eating too many oranges every day, you might experience side-effects like diarrhoea, vomiting, nausea, heartburn, bloating, cramps, and insomnia.', 'The orange originated in a region encompassing Southern China, Northeast India, and Myanmar, and the earliest mention of the sweet orange was in Chinese literature in 314 BC. As of 1987, orange trees were found to be the most cultivated fruit tree in the world.', 'Commercial growers and handlers can store oranges for 3 to 8 weeks when refrigerat- ed at 38° to 48°F (3° to 9°C), depending on the initial condition of the fruit. Optimum humidity for storage of oranges is 90 to 95%.', '2022-08-25 11:48:19', '2022-08-30 07:35:53'),
(77, 'anjir', 500, 60, 'Jaffa-Oranges_1661428099378.jpg', 9, 0, 'a color between red and yellow : the color of a carrot. 2 : a sweet juicy citrus fruit with orange colored rind that grows on an evergreen tree with shining leaves and fragrant white flowers.', 'Fresh Orange', 0, 'featured', 'Orange', 1, 88, 'Navel Orange', 'As mentioned previously, it\'s never wise to consume anything in excess - especially a citrus-y fruit laden with vitamin C that\'s heavy on the stomach. If you\'re eating too many oranges every day, you might experience side-effects like diarrhoea, vomiting, nausea, heartburn, bloating, cramps, and insomnia.', 'The orange originated in a region encompassing Southern China, Northeast India, and Myanmar, and the earliest mention of the sweet orange was in Chinese literature in 314 BC. As of 1987, orange trees were found to be the most cultivated fruit tree in the world.', 'Commercial growers and handlers can store oranges for 3 to 8 weeks when refrigerat- ed at 38° to 48°F (3° to 9°C), depending on the initial condition of the fruit. Optimum humidity for storage of oranges is 90 to 95%.', '2022-08-25 11:48:19', '2022-08-30 07:35:53'),
(78, 'Badam', 500, 60, 'Jaffa-Oranges_1661428099378.jpg', 9, 0, 'a color between red and yellow : the color of a carrot. 2 : a sweet juicy citrus fruit with orange colored rind that grows on an evergreen tree with shining leaves and fragrant white flowers.', 'Fresh Orange', 0, 'featured', 'Orange', 1, 88, 'Navel Orange', 'As mentioned previously, it\'s never wise to consume anything in excess - especially a citrus-y fruit laden with vitamin C that\'s heavy on the stomach. If you\'re eating too many oranges every day, you might experience side-effects like diarrhoea, vomiting, nausea, heartburn, bloating, cramps, and insomnia.', 'The orange originated in a region encompassing Southern China, Northeast India, and Myanmar, and the earliest mention of the sweet orange was in Chinese literature in 314 BC. As of 1987, orange trees were found to be the most cultivated fruit tree in the world.', 'Commercial growers and handlers can store oranges for 3 to 8 weeks when refrigerat- ed at 38° to 48°F (3° to 9°C), depending on the initial condition of the fruit. Optimum humidity for storage of oranges is 90 to 95%.', '2022-08-25 11:48:19', '2022-08-30 07:35:53'),
(79, 'Blueberries', 500, 60, 'Jaffa-Oranges_1661428099378.jpg', 9, 0, 'a color between red and yellow : the color of a carrot. 2 : a sweet juicy citrus fruit with orange colored rind that grows on an evergreen tree with shining leaves and fragrant white flowers.', 'Fresh Orange', 0, 'featured', 'Orange', 1, 88, 'Navel Orange', 'As mentioned previously, it\'s never wise to consume anything in excess - especially a citrus-y fruit laden with vitamin C that\'s heavy on the stomach. If you\'re eating too many oranges every day, you might experience side-effects like diarrhoea, vomiting, nausea, heartburn, bloating, cramps, and insomnia.', 'The orange originated in a region encompassing Southern China, Northeast India, and Myanmar, and the earliest mention of the sweet orange was in Chinese literature in 314 BC. As of 1987, orange trees were found to be the most cultivated fruit tree in the world.', 'Commercial growers and handlers can store oranges for 3 to 8 weeks when refrigerat- ed at 38° to 48°F (3° to 9°C), depending on the initial condition of the fruit. Optimum humidity for storage of oranges is 90 to 95%.', '2022-08-25 11:48:19', '2022-08-30 07:35:53'),
(80, 'Crab_apples', 500, 60, 'Jaffa-Oranges_1661428099378.jpg', 9, 0, 'a color between red and yellow : the color of a carrot. 2 : a sweet juicy citrus fruit with orange colored rind that grows on an evergreen tree with shining leaves and fragrant white flowers.', 'Fresh Orange', 0, 'featured', 'Orange', 1, 88, 'Navel Orange', 'As mentioned previously, it\'s never wise to consume anything in excess - especially a citrus-y fruit laden with vitamin C that\'s heavy on the stomach. If you\'re eating too many oranges every day, you might experience side-effects like diarrhoea, vomiting, nausea, heartburn, bloating, cramps, and insomnia.', 'The orange originated in a region encompassing Southern China, Northeast India, and Myanmar, and the earliest mention of the sweet orange was in Chinese literature in 314 BC. As of 1987, orange trees were found to be the most cultivated fruit tree in the world.', 'Commercial growers and handlers can store oranges for 3 to 8 weeks when refrigerat- ed at 38° to 48°F (3° to 9°C), depending on the initial condition of the fruit. Optimum humidity for storage of oranges is 90 to 95%.', '2022-08-25 11:48:19', '2022-08-30 07:35:53'),
(81, 'Dragon_Fruit', 500, 60, 'Jaffa-Oranges_1661428099378.jpg', 9, 0, 'a color between red and yellow : the color of a carrot. 2 : a sweet juicy citrus fruit with orange colored rind that grows on an evergreen tree with shining leaves and fragrant white flowers.', 'Fresh Orange', 0, 'featured', 'Orange', 1, 88, 'Navel Orange', 'As mentioned previously, it\'s never wise to consume anything in excess - especially a citrus-y fruit laden with vitamin C that\'s heavy on the stomach. If you\'re eating too many oranges every day, you might experience side-effects like diarrhoea, vomiting, nausea, heartburn, bloating, cramps, and insomnia.', 'The orange originated in a region encompassing Southern China, Northeast India, and Myanmar, and the earliest mention of the sweet orange was in Chinese literature in 314 BC. As of 1987, orange trees were found to be the most cultivated fruit tree in the world.', 'Commercial growers and handlers can store oranges for 3 to 8 weeks when refrigerat- ed at 38° to 48°F (3° to 9°C), depending on the initial condition of the fruit. Optimum humidity for storage of oranges is 90 to 95%.', '2022-08-25 11:48:19', '2022-08-30 07:35:53'),
(82, 'Apricot ', 500, 60, 'Jaffa-Oranges_1661428099378.jpg', 9, 0, 'a color between red and yellow : the color of a carrot. 2 : a sweet juicy citrus fruit with orange colored rind that grows on an evergreen tree with shining leaves and fragrant white flowers.', 'Fresh Orange', 0, 'featured', 'Orange', 1, 88, 'Navel Orange', 'As mentioned previously, it\'s never wise to consume anything in excess - especially a citrus-y fruit laden with vitamin C that\'s heavy on the stomach. If you\'re eating too many oranges every day, you might experience side-effects like diarrhoea, vomiting, nausea, heartburn, bloating, cramps, and insomnia.', 'The orange originated in a region encompassing Southern China, Northeast India, and Myanmar, and the earliest mention of the sweet orange was in Chinese literature in 314 BC. As of 1987, orange trees were found to be the most cultivated fruit tree in the world.', 'Commercial growers and handlers can store oranges for 3 to 8 weeks when refrigerat- ed at 38° to 48°F (3° to 9°C), depending on the initial condition of the fruit. Optimum humidity for storage of oranges is 90 to 95%.', '2022-08-25 11:48:19', '2022-08-30 07:35:53'),
(83, 'Black_Currant', 500, 60, 'Jaffa-Oranges_1661428099378.jpg', 9, 0, 'a color between red and yellow : the color of a carrot. 2 : a sweet juicy citrus fruit with orange colored rind that grows on an evergreen tree with shining leaves and fragrant white flowers.', 'Fresh Orange', 0, 'featured', 'Orange', 1, 88, 'Navel Orange', 'As mentioned previously, it\'s never wise to consume anything in excess - especially a citrus-y fruit laden with vitamin C that\'s heavy on the stomach. If you\'re eating too many oranges every day, you might experience side-effects like diarrhoea, vomiting, nausea, heartburn, bloating, cramps, and insomnia.', 'The orange originated in a region encompassing Southern China, Northeast India, and Myanmar, and the earliest mention of the sweet orange was in Chinese literature in 314 BC. As of 1987, orange trees were found to be the most cultivated fruit tree in the world.', 'Commercial growers and handlers can store oranges for 3 to 8 weeks when refrigerat- ed at 38° to 48°F (3° to 9°C), depending on the initial condition of the fruit. Optimum humidity for storage of oranges is 90 to 95%.', '2022-08-25 11:48:19', '2022-08-30 07:35:53'),
(84, 'Blackberry', 500, 60, 'Jaffa-Oranges_1661428099378.jpg', 9, 0, 'a color between red and yellow : the color of a carrot. 2 : a sweet juicy citrus fruit with orange colored rind that grows on an evergreen tree with shining leaves and fragrant white flowers.', 'Fresh Orange', 0, 'featured', 'Orange', 1, 88, 'Navel Orange', 'As mentioned previously, it\'s never wise to consume anything in excess - especially a citrus-y fruit laden with vitamin C that\'s heavy on the stomach. If you\'re eating too many oranges every day, you might experience side-effects like diarrhoea, vomiting, nausea, heartburn, bloating, cramps, and insomnia.', 'The orange originated in a region encompassing Southern China, Northeast India, and Myanmar, and the earliest mention of the sweet orange was in Chinese literature in 314 BC. As of 1987, orange trees were found to be the most cultivated fruit tree in the world.', 'Commercial growers and handlers can store oranges for 3 to 8 weeks when refrigerat- ed at 38° to 48°F (3° to 9°C), depending on the initial condition of the fruit. Optimum humidity for storage of oranges is 90 to 95%.', '2022-08-25 11:48:19', '2022-08-30 07:35:53'),
(85, 'Blueberry', 500, 60, 'Jaffa-Oranges_1661428099378.jpg', 9, 0, 'a color between red and yellow : the color of a carrot. 2 : a sweet juicy citrus fruit with orange colored rind that grows on an evergreen tree with shining leaves and fragrant white flowers.', 'Fresh Orange', 0, 'featured', 'Orange', 1, 88, 'Navel Orange', 'As mentioned previously, it\'s never wise to consume anything in excess - especially a citrus-y fruit laden with vitamin C that\'s heavy on the stomach. If you\'re eating too many oranges every day, you might experience side-effects like diarrhoea, vomiting, nausea, heartburn, bloating, cramps, and insomnia.', 'The orange originated in a region encompassing Southern China, Northeast India, and Myanmar, and the earliest mention of the sweet orange was in Chinese literature in 314 BC. As of 1987, orange trees were found to be the most cultivated fruit tree in the world.', 'Commercial growers and handlers can store oranges for 3 to 8 weeks when refrigerat- ed at 38° to 48°F (3° to 9°C), depending on the initial condition of the fruit. Optimum humidity for storage of oranges is 90 to 95%.', '2022-08-25 11:48:19', '2022-08-30 07:35:53'),
(86, 'Coconut', 500, 60, 'Jaffa-Oranges_1661428099378.jpg', 9, 0, 'a color between red and yellow : the color of a carrot. 2 : a sweet juicy citrus fruit with orange colored rind that grows on an evergreen tree with shining leaves and fragrant white flowers.', 'Fresh Orange', 0, 'featured', 'Orange', 1, 88, 'Navel Orange', 'As mentioned previously, it\'s never wise to consume anything in excess - especially a citrus-y fruit laden with vitamin C that\'s heavy on the stomach. If you\'re eating too many oranges every day, you might experience side-effects like diarrhoea, vomiting, nausea, heartburn, bloating, cramps, and insomnia.', 'The orange originated in a region encompassing Southern China, Northeast India, and Myanmar, and the earliest mention of the sweet orange was in Chinese literature in 314 BC. As of 1987, orange trees were found to be the most cultivated fruit tree in the world.', 'Commercial growers and handlers can store oranges for 3 to 8 weeks when refrigerat- ed at 38° to 48°F (3° to 9°C), depending on the initial condition of the fruit. Optimum humidity for storage of oranges is 90 to 95%.', '2022-08-25 11:48:19', '2022-08-30 07:35:53'),
(87, 'Custard_Apple', 500, 60, 'Jaffa-Oranges_1661428099378.jpg', 9, 0, 'a color between red and yellow : the color of a carrot. 2 : a sweet juicy citrus fruit with orange colored rind that grows on an evergreen tree with shining leaves and fragrant white flowers.', 'Fresh Orange', 0, 'featured', 'Orange', 1, 88, 'Navel Orange', 'As mentioned previously, it\'s never wise to consume anything in excess - especially a citrus-y fruit laden with vitamin C that\'s heavy on the stomach. If you\'re eating too many oranges every day, you might experience side-effects like diarrhoea, vomiting, nausea, heartburn, bloating, cramps, and insomnia.', 'The orange originated in a region encompassing Southern China, Northeast India, and Myanmar, and the earliest mention of the sweet orange was in Chinese literature in 314 BC. As of 1987, orange trees were found to be the most cultivated fruit tree in the world.', 'Commercial growers and handlers can store oranges for 3 to 8 weeks when refrigerat- ed at 38° to 48°F (3° to 9°C), depending on the initial condition of the fruit. Optimum humidity for storage of oranges is 90 to 95%.', '2022-08-25 11:48:19', '2022-08-30 07:35:53'),
(88, 'Date', 500, 60, 'Jaffa-Oranges_1661428099378.jpg', 9, 0, 'a color between red and yellow : the color of a carrot. 2 : a sweet juicy citrus fruit with orange colored rind that grows on an evergreen tree with shining leaves and fragrant white flowers.', 'Fresh Orange', 0, 'featured', 'Orange', 1, 88, 'Navel Orange', 'As mentioned previously, it\'s never wise to consume anything in excess - especially a citrus-y fruit laden with vitamin C that\'s heavy on the stomach. If you\'re eating too many oranges every day, you might experience side-effects like diarrhoea, vomiting, nausea, heartburn, bloating, cramps, and insomnia.', 'The orange originated in a region encompassing Southern China, Northeast India, and Myanmar, and the earliest mention of the sweet orange was in Chinese literature in 314 BC. As of 1987, orange trees were found to be the most cultivated fruit tree in the world.', 'Commercial growers and handlers can store oranges for 3 to 8 weeks when refrigerat- ed at 38° to 48°F (3° to 9°C), depending on the initial condition of the fruit. Optimum humidity for storage of oranges is 90 to 95%.', '2022-08-25 11:48:19', '2022-08-30 07:35:53'),
(89, 'Fig', 500, 60, 'Jaffa-Oranges_1661428099378.jpg', 9, 0, 'a color between red and yellow : the color of a carrot. 2 : a sweet juicy citrus fruit with orange colored rind that grows on an evergreen tree with shining leaves and fragrant white flowers.', 'Fresh Orange', 0, 'featured', 'Orange', 1, 88, 'Navel Orange', 'As mentioned previously, it\'s never wise to consume anything in excess - especially a citrus-y fruit laden with vitamin C that\'s heavy on the stomach. If you\'re eating too many oranges every day, you might experience side-effects like diarrhoea, vomiting, nausea, heartburn, bloating, cramps, and insomnia.', 'The orange originated in a region encompassing Southern China, Northeast India, and Myanmar, and the earliest mention of the sweet orange was in Chinese literature in 314 BC. As of 1987, orange trees were found to be the most cultivated fruit tree in the world.', 'Commercial growers and handlers can store oranges for 3 to 8 weeks when refrigerat- ed at 38° to 48°F (3° to 9°C), depending on the initial condition of the fruit. Optimum humidity for storage of oranges is 90 to 95%.', '2022-08-25 11:48:19', '2022-08-30 07:35:53'),
(90, 'Gooseberry', 500, 60, 'Jaffa-Oranges_1661428099378.jpg', 9, 0, 'a color between red and yellow : the color of a carrot. 2 : a sweet juicy citrus fruit with orange colored rind that grows on an evergreen tree with shining leaves and fragrant white flowers.', 'Fresh Orange', 0, 'featured', 'Orange', 1, 88, 'Navel Orange', 'As mentioned previously, it\'s never wise to consume anything in excess - especially a citrus-y fruit laden with vitamin C that\'s heavy on the stomach. If you\'re eating too many oranges every day, you might experience side-effects like diarrhoea, vomiting, nausea, heartburn, bloating, cramps, and insomnia.', 'The orange originated in a region encompassing Southern China, Northeast India, and Myanmar, and the earliest mention of the sweet orange was in Chinese literature in 314 BC. As of 1987, orange trees were found to be the most cultivated fruit tree in the world.', 'Commercial growers and handlers can store oranges for 3 to 8 weeks when refrigerat- ed at 38° to 48°F (3° to 9°C), depending on the initial condition of the fruit. Optimum humidity for storage of oranges is 90 to 95%.', '2022-08-25 11:48:19', '2022-08-30 07:35:53'),
(91, 'Grapes', 500, 60, 'Jaffa-Oranges_1661428099378.jpg', 9, 0, 'a color between red and yellow : the color of a carrot. 2 : a sweet juicy citrus fruit with orange colored rind that grows on an evergreen tree with shining leaves and fragrant white flowers.', 'Fresh Orange', 0, 'featured', 'Orange', 1, 88, 'Navel Orange', 'As mentioned previously, it\'s never wise to consume anything in excess - especially a citrus-y fruit laden with vitamin C that\'s heavy on the stomach. If you\'re eating too many oranges every day, you might experience side-effects like diarrhoea, vomiting, nausea, heartburn, bloating, cramps, and insomnia.', 'The orange originated in a region encompassing Southern China, Northeast India, and Myanmar, and the earliest mention of the sweet orange was in Chinese literature in 314 BC. As of 1987, orange trees were found to be the most cultivated fruit tree in the world.', 'Commercial growers and handlers can store oranges for 3 to 8 weeks when refrigerat- ed at 38° to 48°F (3° to 9°C), depending on the initial condition of the fruit. Optimum humidity for storage of oranges is 90 to 95%.', '2022-08-25 11:48:19', '2022-08-30 07:35:53'),
(92, 'Mang', 20, 10, 'fresh-mango-500x500_1662013132862.jpg', 2, 1, 'xyz', 'fresh', 2, 'featured', 'petrole', 1, 50, 'abc', 'dfas', 'dsfa', 'dsaf', '2022-09-01 06:18:52', '2022-09-01 06:18:52'),
(93, 'vcxa', 20, 10, 'fresh-mango-500x500_1662026519248.jpg', 2, 1, 'xyz', 'fresh', 2, 'featured', 'petrole', 1, 50, 'abc', 'dfas', 'dsfa', 'dsaf', '2022-09-01 10:01:59', '2022-09-01 10:01:59');

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
(3, 12, '1661246508219_hotel-room-27254386.jpg', 1, '2022-08-23', '2022-08-23'),
(4, 28, '1661422027418_images (2).jpg', 1, '2022-08-25', '2022-08-25'),
(5, 28, '1661422027422_images (1).jpg', 1, '2022-08-25', '2022-08-25'),
(6, 28, '1661422027423_fresh-watermelon-500x500.jpg', 1, '2022-08-25', '2022-08-25'),
(7, 28, '1661422027423_verno_sandia.jpg', 1, '2022-08-25', '2022-08-25'),
(8, 31, '1661423963145_BlackWatermelonYUMI.jpg', 1, '2022-08-25', '2022-08-25'),
(9, 31, '1661423963146_images (2).jpg', 1, '2022-08-25', '2022-08-25'),
(10, 31, '1661423963146_images (1).jpg', 1, '2022-08-25', '2022-08-25'),
(12, 31, '1661423963147_verno_sandia.jpg', 1, '2022-08-25', '2022-08-25'),
(13, 35, '1661426239213_BlackWatermelonYUMI.jpg', 1, '2022-08-25', '2022-08-25'),
(14, 35, '1661426239213_images (2).jpg', 1, '2022-08-25', '2022-08-25'),
(15, 35, '1661426239214_images (1).jpg', 1, '2022-08-25', '2022-08-25'),
(16, 35, '1661426239214_fresh-watermelon-500x500.jpg', 1, '2022-08-25', '2022-08-25'),
(17, 35, '1661426239215_verno_sandia.jpg', 1, '2022-08-25', '2022-08-25'),
(18, 35, '1661426303714_BlackWatermelonYUMI.jpg', 1, '2022-08-25', '2022-08-25'),
(19, 35, '1661426303716_images (2).jpg', 1, '2022-08-25', '2022-08-25'),
(20, 35, '1661426303717_images (1).jpg', 1, '2022-08-25', '2022-08-25'),
(21, 35, '1661426303717_fresh-watermelon-500x500.jpg', 1, '2022-08-25', '2022-08-25'),
(22, 35, '1661426303718_verno_sandia.jpg', 1, '2022-08-25', '2022-08-25'),
(23, 36, '1661428099519_Enbata4.jpg', 1, '2022-08-25', '2022-08-25'),
(24, 36, '1661428099521_Enbata3.jpg', 1, '2022-08-25', '2022-08-25'),
(25, 36, '1661428099521_Wogan-Orange-Fruits-China.jpg', 1, '2022-08-25', '2022-08-25'),
(26, 36, 'MV5BYjc5OWU5NzktNTU5MS00NzhiLWE5ZGEtOTIyMjJkOGEwMzQwXkEyXkFqcGdeQXVyMjkwOTAyMDU@._V1__1661585507514.jpg', 1, '2022-08-25', '2022-08-27'),
(27, 36, '1661428099528_image.jpg', 1, '2022-08-25', '2022-08-25'),
(28, 36, '1661428431436_Enbata4.jpg', 1, '2022-08-25', '2022-08-25'),
(29, 36, '1661428431437_Enbata3.jpg', 1, '2022-08-25', '2022-08-25'),
(30, 36, '1661428431437_Wogan-Orange-Fruits-China.jpg', 1, '2022-08-25', '2022-08-25'),
(31, 36, '1661428431438_Jaffa-Oranges.jpg', 1, '2022-08-25', '2022-08-25'),
(32, 36, '1661428431438_image.jpg', 1, '2022-08-25', '2022-08-25'),
(33, 37, '1661430013455_1_lqRQn0Bsttlg1ny2dCPXeQ.jpeg', 1, '2022-08-25', '2022-08-25'),
(34, 37, '1661430013455_give-your-brand-wings--scaled.jpg', 1, '2022-08-25', '2022-08-25'),
(35, 37, '1661430013456_moodboard--products_2x.jpg', 1, '2022-08-25', '2022-08-25'),
(36, 37, '1661430013457_red-bull-can-01.jpg', 1, '2022-08-25', '2022-08-25'),
(37, 37, 'test_1661584966140.webp', 1, '2022-08-25', '2022-08-27'),
(38, 37, 'node-js-file-upload-express_1661595005452.png', 1, '2022-08-25', '2022-08-27'),
(39, 37, '1661430144561_give-your-brand-wings--scaled.jpg', 1, '2022-08-25', '2022-08-25'),
(40, 37, '1661430144562_moodboard--products_2x.jpg', 1, '2022-08-25', '2022-08-25'),
(41, 37, '1661430144562_red-bull-can-01.jpg', 1, '2022-08-25', '2022-08-25'),
(42, 37, '1661430144563_RedBullEnergyDrink.svg.png', 1, '2022-08-25', '2022-08-25'),
(43, 41, '1661433556306_1_lqRQn0Bsttlg1ny2dCPXeQ.jpeg', 1, '2022-08-25', '2022-08-25'),
(44, 41, '1661433556309_give-your-brand-wings--scaled.jpg', 1, '2022-08-25', '2022-08-25'),
(45, 41, '1661433556311_moodboard--products_2x.jpg', 1, '2022-08-25', '2022-08-25'),
(46, 41, '1661433556311_download.jpg', 1, '2022-08-25', '2022-08-25'),
(47, 41, '1661433556312_Enbata3.jpg', 1, '2022-08-25', '2022-08-25'),
(48, 12, '1661433604788_apartmentIndore.jpg', 1, '2022-08-25', '2022-08-25'),
(49, 12, '1661433604791_fresh-mango-500x500.jpg', 1, '2022-08-25', '2022-08-25'),
(50, 12, '1661433604792_red-whole-sliced-onion-isolated-260nw-1684863088.jpg', 1, '2022-08-25', '2022-08-25'),
(51, 42, '1661433716018_image.jpg', 1, '2022-08-25', '2022-08-25'),
(52, 42, '1661433716019_BlackWatermelonYUMI.jpg', 1, '2022-08-25', '2022-08-25'),
(53, 42, '1661433716020_images (2).jpg', 1, '2022-08-25', '2022-08-25'),
(54, 42, '1661433716021_images (1).jpg', 1, '2022-08-25', '2022-08-25'),
(55, 42, '1661433716022_verno_sandia.jpg', 1, '2022-08-25', '2022-08-25'),
(56, 12, '1661434085401_apartmentIndore.jpg', 1, '2022-08-25', '2022-08-25'),
(57, 12, '1661434085405_fresh-mango-500x500.jpg', 1, '2022-08-25', '2022-08-25'),
(58, 12, '1661434085406_red-whole-sliced-onion-isolated-260nw-1684863088.jpg', 1, '2022-08-25', '2022-08-25'),
(59, 12, '1661434376960_apartmentIndore.jpg', 1, '2022-08-25', '2022-08-25'),
(60, 12, '1661434376964_fresh-mango-500x500.jpg', 1, '2022-08-25', '2022-08-25'),
(61, 12, '1661434376965_red-whole-sliced-onion-isolated-260nw-1684863088.jpg', 1, '2022-08-25', '2022-08-25'),
(62, 12, '1661434477624_apartmentIndore.jpg', 1, '2022-08-25', '2022-08-25'),
(63, 12, '1661434477628_fresh-mango-500x500.jpg', 1, '2022-08-25', '2022-08-25'),
(64, 12, '1661434477630_red-whole-sliced-onion-isolated-260nw-1684863088.jpg', 1, '2022-08-25', '2022-08-25'),
(65, 26, '1661434506589_apartmentIndore.jpg', 1, '2022-08-25', '2022-08-25'),
(66, 26, '1661434506590_fresh-mango-500x500.jpg', 1, '2022-08-25', '2022-08-25'),
(67, 26, '1661434506590_red-whole-sliced-onion-isolated-260nw-1684863088.jpg', 1, '2022-08-25', '2022-08-25'),
(68, 40, '1661435558084_fresh-mango-500x500.jpg', 1, '2022-08-25', '2022-08-25'),
(69, 40, '1661435558087_red-whole-sliced-onion-isolated-260nw-1684863088.jpg', 1, '2022-08-25', '2022-08-25'),
(70, 40, '1661435558090_tomato_noun_001_17860.jpg', 1, '2022-08-25', '2022-08-25'),
(97, 26, '1661522814275_balloon_2_test1.jpg', 1, '2022-08-26', '2022-08-26'),
(98, 26, '1661522814278_firework.png', 1, '2022-08-26', '2022-08-26'),
(99, 26, '1661522814279_icecream.jpg', 1, '2022-08-26', '2022-08-26'),
(102, 38, '1661594936005_apartmentIndore.jpg', 1, '2022-08-27', '2022-08-27'),
(103, 38, '1661594936007_fresh-mango-500x500.jpg', 1, '2022-08-27', '2022-08-27'),
(104, 38, '1661595787863_apartmentIndore.jpg', 1, '2022-08-27', '2022-08-27'),
(105, 38, '1661595787866_fresh-mango-500x500.jpg', 1, '2022-08-27', '2022-08-27');

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
-- Indexes for table `add_to_cart`
--
ALTER TABLE `add_to_cart`
  ADD PRIMARY KEY (`id`);

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
-- Indexes for table `order`
--
ALTER TABLE `order`
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
-- AUTO_INCREMENT for table `add_to_cart`
--
ALTER TABLE `add_to_cart`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=25;

--
-- AUTO_INCREMENT for table `categories`
--
ALTER TABLE `categories`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=44;

--
-- AUTO_INCREMENT for table `contacts`
--
ALTER TABLE `contacts`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `order`
--
ALTER TABLE `order`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `products`
--
ALTER TABLE `products`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=94;

--
-- AUTO_INCREMENT for table `products_images`
--
ALTER TABLE `products_images`
  MODIFY `id` int(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=106;

--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
