-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jun 10, 2022 at 11:12 AM
-- Server version: 10.4.24-MariaDB
-- PHP Version: 7.4.29

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `topnotchgroomingdb`
--

-- --------------------------------------------------------

--
-- Table structure for table `admin`
--

CREATE TABLE `admin` (
  `id` int(11) NOT NULL,
  `firstname` varchar(50) DEFAULT NULL,
  `lastname` varchar(50) DEFAULT NULL,
  `email` varchar(50) DEFAULT NULL,
  `password` varchar(500) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `admin`
--

INSERT INTO `admin` (`id`, `firstname`, `lastname`, `email`, `password`) VALUES
(1, 'admin', 'topnotch', 'topnotchgrooming@gmail.com', '123123');

-- --------------------------------------------------------

--
-- Table structure for table `appointments`
--

CREATE TABLE `appointments` (
  `appointmentID` int(11) NOT NULL,
  `petName` varchar(50) DEFAULT NULL,
  `petType` varchar(50) DEFAULT NULL,
  `petBreed` varchar(50) DEFAULT NULL,
  `petBirth` varchar(50) DEFAULT NULL,
  `appointmentType` varchar(50) DEFAULT NULL,
  `additionalDetails` varchar(500) DEFAULT NULL,
  `livestreampublicity` tinyint(1) DEFAULT 0,
  `archived` tinyint(1) DEFAULT 0,
  `customerID` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `appointment_history`
--

CREATE TABLE `appointment_history` (
  `historyID` int(11) NOT NULL,
  `appointmentID` int(11) DEFAULT NULL,
  `timeStarts` varchar(50) DEFAULT NULL,
  `timeEnds` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `customer`
--

CREATE TABLE `customer` (
  `id` int(11) NOT NULL,
  `profile_image_id` varchar(500) DEFAULT NULL,
  `profile_image_url` varchar(500) DEFAULT NULL,
  `firstname` varchar(50) DEFAULT NULL,
  `lastname` varchar(50) DEFAULT NULL,
  `birthdate` varchar(50) NOT NULL,
  `email` varchar(50) DEFAULT NULL,
  `password` varchar(100) DEFAULT NULL,
  `phoneNo` varchar(100) DEFAULT NULL,
  `address` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `customer`
--

INSERT INTO `customer` (`id`, `profile_image_id`, `profile_image_url`, `firstname`, `lastname`, `birthdate`, `email`, `password`, `phoneNo`, `address`) VALUES
(6, 'topnotch_profilepic/oh60tt59gdc2f8u6mi1x', 'http://res.cloudinary.com/iamprogrammer/image/upload/v1654850833/topnotch_profilepic/oh60tt59gdc2f8u6mi1x.jpg', 'firstname', 'lastname', '2000-02-10', 'user1@gmail.com', '$2a$06$0QeR0p9vev9aGIC7kUM/geyd2V1oVnS0E/DHfCAYTgw5jjKMlwP92', '9555551112', 'some address');

-- --------------------------------------------------------

--
-- Table structure for table `monthly_sales`
--

CREATE TABLE `monthly_sales` (
  `monthlyID` int(11) NOT NULL,
  `total_sales` bigint(20) DEFAULT NULL,
  `yearlyID` int(11) DEFAULT NULL,
  `month` varchar(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `order_details`
--

CREATE TABLE `order_details` (
  `orderID` int(11) NOT NULL,
  `order_date` varchar(50) DEFAULT NULL,
  `order_status` varchar(50) DEFAULT NULL,
  `total_amount` bigint(20) DEFAULT NULL,
  `payment_type` varchar(100) DEFAULT NULL,
  `monthlyID` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `products`
--

CREATE TABLE `products` (
  `id` int(11) NOT NULL,
  `product_name` varchar(100) DEFAULT NULL,
  `product_price` bigint(20) DEFAULT NULL,
  `product_description` varchar(100) DEFAULT NULL,
  `pet_type` varchar(50) NOT NULL,
  `product_date_added` varchar(100) DEFAULT NULL,
  `product_stocks` bigint(20) DEFAULT NULL,
  `product_age_limit` varchar(50) DEFAULT NULL,
  `product_category` varchar(50) DEFAULT NULL,
  `product_image_url` varchar(500) NOT NULL,
  `product_image_id` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `products`
--

INSERT INTO `products` (`id`, `product_name`, `product_price`, `product_description`, `pet_type`, `product_date_added`, `product_stocks`, `product_age_limit`, `product_category`, `product_image_url`, `product_image_id`) VALUES
(12, 'product 1', 510, 'nice one', 'Dog', '6-10-2022', 10, '5-4', 'Hygiene kit', 'http://res.cloudinary.com/iamprogrammer/image/upload/v1654838930/topnotch_productImg/pczvtfgiycf9xn7utvu6.png', 'topnotch_productImg/pczvtfgiycf9xn7utvu6'),
(13, 'product 2', 1200, 'some description', 'Dog', '6-10-2022', 5, '5-3', 'Food', 'http://res.cloudinary.com/iamprogrammer/image/upload/v1654851091/topnotch_productImg/bl4diobto3gfj7vsaaab.png', 'topnotch_productImg/bl4diobto3gfj7vsaaab');

-- --------------------------------------------------------

--
-- Table structure for table `product_details`
--

CREATE TABLE `product_details` (
  `productDetail` int(11) NOT NULL,
  `productID` int(11) DEFAULT NULL,
  `orderID` int(11) DEFAULT NULL,
  `product_name` varchar(50) DEFAULT NULL,
  `product_quantity` bigint(20) DEFAULT NULL,
  `product_description` varchar(50) DEFAULT NULL,
  `product_category` varchar(50) DEFAULT NULL,
  `product_age_limit` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `yearly_sales`
--

CREATE TABLE `yearly_sales` (
  `yearlyID` int(11) NOT NULL,
  `overall_sales` bigint(20) DEFAULT NULL,
  `year` varchar(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `admin`
--
ALTER TABLE `admin`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `appointments`
--
ALTER TABLE `appointments`
  ADD PRIMARY KEY (`appointmentID`),
  ADD KEY `customerID` (`customerID`);

--
-- Indexes for table `appointment_history`
--
ALTER TABLE `appointment_history`
  ADD PRIMARY KEY (`historyID`),
  ADD KEY `appointmentID` (`appointmentID`);

--
-- Indexes for table `customer`
--
ALTER TABLE `customer`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `monthly_sales`
--
ALTER TABLE `monthly_sales`
  ADD PRIMARY KEY (`monthlyID`),
  ADD KEY `yearlyID` (`yearlyID`);

--
-- Indexes for table `order_details`
--
ALTER TABLE `order_details`
  ADD PRIMARY KEY (`orderID`),
  ADD KEY `monthlyID` (`monthlyID`);

--
-- Indexes for table `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `product_details`
--
ALTER TABLE `product_details`
  ADD PRIMARY KEY (`productDetail`),
  ADD KEY `orderID` (`orderID`),
  ADD KEY `productID` (`productID`);

--
-- Indexes for table `yearly_sales`
--
ALTER TABLE `yearly_sales`
  ADD PRIMARY KEY (`yearlyID`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `admin`
--
ALTER TABLE `admin`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `appointments`
--
ALTER TABLE `appointments`
  MODIFY `appointmentID` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `appointment_history`
--
ALTER TABLE `appointment_history`
  MODIFY `historyID` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `customer`
--
ALTER TABLE `customer`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `monthly_sales`
--
ALTER TABLE `monthly_sales`
  MODIFY `monthlyID` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `order_details`
--
ALTER TABLE `order_details`
  MODIFY `orderID` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `products`
--
ALTER TABLE `products`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- AUTO_INCREMENT for table `product_details`
--
ALTER TABLE `product_details`
  MODIFY `productDetail` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `yearly_sales`
--
ALTER TABLE `yearly_sales`
  MODIFY `yearlyID` int(11) NOT NULL AUTO_INCREMENT;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `appointments`
--
ALTER TABLE `appointments`
  ADD CONSTRAINT `appointments_ibfk_1` FOREIGN KEY (`customerID`) REFERENCES `customer` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `appointment_history`
--
ALTER TABLE `appointment_history`
  ADD CONSTRAINT `appointment_history_ibfk_1` FOREIGN KEY (`appointmentID`) REFERENCES `appointments` (`appointmentID`) ON DELETE CASCADE;

--
-- Constraints for table `monthly_sales`
--
ALTER TABLE `monthly_sales`
  ADD CONSTRAINT `monthly_sales_ibfk_1` FOREIGN KEY (`yearlyID`) REFERENCES `yearly_sales` (`yearlyID`) ON DELETE CASCADE;

--
-- Constraints for table `order_details`
--
ALTER TABLE `order_details`
  ADD CONSTRAINT `order_details_ibfk_1` FOREIGN KEY (`monthlyID`) REFERENCES `monthly_sales` (`monthlyID`) ON DELETE CASCADE;

--
-- Constraints for table `product_details`
--
ALTER TABLE `product_details`
  ADD CONSTRAINT `product_details_ibfk_1` FOREIGN KEY (`orderID`) REFERENCES `order_details` (`orderID`) ON DELETE CASCADE,
  ADD CONSTRAINT `product_details_ibfk_2` FOREIGN KEY (`productID`) REFERENCES `products` (`id`) ON DELETE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
