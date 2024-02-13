-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Feb 13, 2024 at 06:36 PM
-- Server version: 5.7.34
-- PHP Version: 8.2.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `mydata`
--

-- --------------------------------------------------------

--
-- Table structure for table `about_settings`
--

CREATE TABLE `about_settings` (
  `id` int(11) NOT NULL,
  `about_img` varchar(100) NOT NULL,
  `about_text` varchar(9999) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- Dumping data for table `about_settings`
--

INSERT INTO `about_settings` (`id`, `about_img`, `about_text`) VALUES
(1, '', ''),
(2, '', 'Something To You I don know what to say to someone who is a powerful language nowdays to get images using this two days ');

-- --------------------------------------------------------

--
-- Table structure for table `cart`
--

CREATE TABLE `cart` (
  `cart_id` int(11) NOT NULL,
  `product_id` varchar(100) NOT NULL,
  `product_name` varchar(100) NOT NULL,
  `product_price` varchar(100) NOT NULL,
  `product_img` varchar(100) NOT NULL,
  `user_id` varchar(100) NOT NULL,
  `user_name` varchar(100) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `contact_settings`
--

CREATE TABLE `contact_settings` (
  `id` int(11) NOT NULL,
  `contact_img` varchar(100) NOT NULL,
  `contact_text` varchar(9000) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `products`
--

CREATE TABLE `products` (
  `product_id` int(11) NOT NULL,
  `product_name` varchar(100) NOT NULL,
  `product_img` varchar(100) NOT NULL,
  `product_description` varchar(900) NOT NULL,
  `product_price` varchar(100) NOT NULL,
  `category` varchar(100) NOT NULL,
  `date` datetime DEFAULT CURRENT_TIMESTAMP
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- Dumping data for table `products`
--

INSERT INTO `products` (`product_id`, `product_name`, `product_img`, `product_description`, `product_price`, `category`, `date`) VALUES
(1, 'Biriyani Chicken Coop', 'product_1.jpg', 'This is chicken biryani  its tasty and so much delicious.', '150', 'Biriyani', '2024-02-05 11:16:04'),
(10, 'Chicken Coop Fried Rice', 'product_2.jpg', 'Something to get images using this two days ago and I hope you have', '180', 'Fried Rice', '2024-02-13 11:38:04'),
(4, 'Roast And Eggs Curry', 'product_3.jpg', 'This is fried rice its tasty and so much delicious.', '120', 'Fried Rice', '2024-02-05 17:40:30'),
(5, 'Brinjal Curry And Rice', 'product_4.jpg', 'This is fried rice its tasty and so much delicious.', '190', 'Fried Rice', '2024-02-05 17:40:40'),
(6, 'Fish Curry And soss', 'product_5.jpg', 'This is fried rice its tasty and so much delicious.', '100', 'Fried Rice', '2024-02-05 17:40:42'),
(7, 'Eggs With Biriyani And Curry', 'product_6.jpg', 'This is fried rice its tasty and so much delicious.', '180', 'Fried Rice', '2024-02-05 17:40:43'),
(8, 'Misti And Payesh', 'product_7.jpg', 'This is fried rice its tasty and so much delicious.', '170', 'Fried Rice', '2024-02-05 17:40:45'),
(9, 'Sada vat And vaji', 'product_8.jpg', 'This is fried rice its tasty and so much delicious.', '115', 'Fried Rice', '2024-02-05 17:40:47'),
(11, 'Potatoes chop and Curry', 'product_9.jpg', 'Something to get images using this two days ago and I hope you have', '140', 'Fried Rice', '2024-02-13 11:40:31');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `user_id` int(11) NOT NULL,
  `user_name` varchar(100) NOT NULL,
  `user_email` varchar(100) NOT NULL,
  `user_password` varchar(100) NOT NULL,
  `user_avtar` varchar(100) NOT NULL,
  `login_token` varchar(800) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`user_id`, `user_name`, `user_email`, `user_password`, `user_avtar`, `login_token`) VALUES
(17, 'Ghs Julian', 'ghsjulian@gmail.com', '7c4a8d09ca3762af61e59520943dc26494f8941b', '', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiMTciLCJ1c2VyX25hbWUiOiJHaHMgSnVsaWFuIiwidGltZSI6MTcwNzcwNDkyNH0.MzcwYzNiZDA2Y2MzMjIwMmU0YTY0YTM4MzZiNDc0MDFiNWZkNzdmMjdjYzQwYWEyYWJmZjY1NGYzMDNkYzU1MA'),
(16, 'bAbc User', 'ghs@gmail.com', '7c4a8d09ca3762af61e59520943dc26494f8941b', '', 'ghs__f8b865118e87'),
(18, 'Smita Smith', 'smita@gmail.com', '7c4a8d09ca3762af61e59520943dc26494f8941b', '', 'ghs__ed3e176b8ccd'),
(19, 'Ghs Julian', 'gh@gmail.com', '7c4a8d09ca3762af61e59520943dc26494f8941b', '', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiMTkiLCJ1c2VyX25hbWUiOiJHaHMgSnVsaWFuIiwidGltZSI6MTcwNzIxNTE3OH0.OGU2YzZiNTkyNzgwNDllNzBhMTIwNTBiN2E4YzkwOTRiNmI1MDhiNzY2Y2M2YTNiYjk5YTRmMjIxOWQ4MmE5ZA'),
(20, 'Sunita Sharma', 'sunita@gmail.com', '7c4a8d09ca3762af61e59520943dc26494f8941b', '', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiMjAiLCJ1c2VyX25hbWUiOiJTdW5pdGEgU2hhcm1hIiwidGltZSI6MTcwNzIxNTQxOH0.MmRkMzNhYmViM2E3NjliMzBmZjk1MjAyYTBlY2Y1OTdhYzY2NTdhZTIwMDk5ZDBjOTAyNGY5N2U3NTk1MWZkZQ');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `about_settings`
--
ALTER TABLE `about_settings`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `cart`
--
ALTER TABLE `cart`
  ADD PRIMARY KEY (`cart_id`);

--
-- Indexes for table `contact_settings`
--
ALTER TABLE `contact_settings`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`product_id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`user_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `about_settings`
--
ALTER TABLE `about_settings`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `cart`
--
ALTER TABLE `cart`
  MODIFY `cart_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `contact_settings`
--
ALTER TABLE `contact_settings`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `products`
--
ALTER TABLE `products`
  MODIFY `product_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `user_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
