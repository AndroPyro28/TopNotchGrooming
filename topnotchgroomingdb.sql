-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Aug 07, 2022 at 01:11 PM
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
  `id` int(11) NOT NULL,
  `pet_name` varchar(50) DEFAULT NULL,
  `pet_type` varchar(50) DEFAULT NULL,
  `pet_breed` varchar(50) DEFAULT NULL,
  `birthdate` varchar(50) DEFAULT NULL,
  `gender` varchar(20) NOT NULL,
  `pet_image` varchar(500) NOT NULL,
  `appointment_type` varchar(50) DEFAULT NULL,
  `additional_details` varchar(500) DEFAULT NULL,
  `date_n_time` datetime(3) NOT NULL,
  `live_stream_type` varchar(20) DEFAULT NULL,
  `archived` tinyint(1) DEFAULT 0,
  `status` varchar(20) NOT NULL DEFAULT 'pending',
  `customer_id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `appointments`
--

INSERT INTO `appointments` (`id`, `pet_name`, `pet_type`, `pet_breed`, `birthdate`, `gender`, `pet_image`, `appointment_type`, `additional_details`, `date_n_time`, `live_stream_type`, `archived`, `status`, `customer_id`) VALUES
(40, 'Pinti', 'dog', 'Hotdog', '2022-07-12', 'male', 'http://res.cloudinary.com/iamprogrammer/image/upload/v1659603352/topnotch_petIImages/m4bu1riq7prewwh0gwfy.jpg', 'grooming', 'Paki trim at pakilinisang mabuti', '2022-08-05 10:00:00.000', 'public', 0, 'approved', 7),
(41, 'Pinti', 'dog', 'Hotdog', '2022-07-12', 'male', 'http://res.cloudinary.com/iamprogrammer/image/upload/v1659603352/topnotch_petIImages/m4bu1riq7prewwh0gwfy.jpg', 'grooming', 'Paki trim at pakilinisang mabuti', '2022-08-05 11:00:00.000', 'public', 0, 'pending', 6),
(42, 'Pinti', 'dog', 'Hotdog', '2022-07-12', 'male', 'http://res.cloudinary.com/iamprogrammer/image/upload/v1659603352/topnotch_petIImages/m4bu1riq7prewwh0gwfy.jpg', 'grooming', 'Paki trim at pakilinisang mabuti', '1900-01-07 00:00:00.000', 'public', 0, 'onGoing', 7),
(43, 'Pinti', 'dog', 'Hotdog', '2022-07-12', 'male', 'http://res.cloudinary.com/iamprogrammer/image/upload/v1659603352/topnotch_petIImages/m4bu1riq7prewwh0gwfy.jpg', 'grooming', 'Paki trim at pakilinisang mabuti', '2022-08-07 00:00:00.000', 'public', 0, 'completed', 6),
(44, 'Pinti', 'dog', 'Hotdog', '2022-07-12', 'male', 'http://res.cloudinary.com/iamprogrammer/image/upload/v1659603352/topnotch_petIImages/m4bu1riq7prewwh0gwfy.jpg', 'grooming', 'Paki trim at pakilinisang mabuti', '2022-08-07 14:00:00.000', 'public', 0, 'approved', 7),
(45, 'Pinti', 'dog', 'Hotdog', '2022-07-12', 'male', 'http://res.cloudinary.com/iamprogrammer/image/upload/v1659603352/topnotch_petIImages/m4bu1riq7prewwh0gwfy.jpg', 'grooming', 'Paki trim at pakilinisang mabuti', '2022-08-05 15:00:00.000', 'public', 0, 'approved', 6),
(46, 'Pinti', 'dog', 'Hotdog', '2022-07-12', 'male', 'http://res.cloudinary.com/iamprogrammer/image/upload/v1659603352/topnotch_petIImages/m4bu1riq7prewwh0gwfy.jpg', 'grooming', 'Paki trim at pakilinisang mabuti', '2022-08-05 16:00:00.000', 'public', 0, 'approved', 7),
(47, 'Pinti', 'dog', 'Hotdog', '2022-07-12', 'male', 'http://res.cloudinary.com/iamprogrammer/image/upload/v1659603352/topnotch_petIImages/m4bu1riq7prewwh0gwfy.jpg', 'grooming', 'Paki trim at pakilinisang mabuti', '2022-08-05 17:00:00.000', 'public', 0, 'pending', 7),
(48, 'Pinti', 'dog', 'Hotdog', '2022-07-12', 'male', 'http://res.cloudinary.com/iamprogrammer/image/upload/v1659603352/topnotch_petIImages/m4bu1riq7prewwh0gwfy.jpg', 'grooming', 'Paki trim at pakilinisang mabuti', '2022-08-05 18:00:00.000', 'public', 0, 'completed', 6),
(49, 'Pinti', 'dog', 'Hotdog', '2022-07-12', 'male', 'http://res.cloudinary.com/iamprogrammer/image/upload/v1659603352/topnotch_petIImages/m4bu1riq7prewwh0gwfy.jpg', 'grooming', 'Paki trim at pakilinisang mabuti', '2022-08-05 19:00:00.000', 'public', 0, 'completed', 7),
(50, 'Pinti', 'dog', 'Hotdog', '2022-07-12', 'male', 'http://res.cloudinary.com/iamprogrammer/image/upload/v1659603352/topnotch_petIImages/m4bu1riq7prewwh0gwfy.jpg', 'grooming', 'Paki trim at pakilinisang mabuti', '2022-08-05 20:00:00.000', 'public', 0, 'approved', 6),
(51, 'Pinti', 'dog', 'Hotdog', '2022-07-12', 'male', 'http://res.cloudinary.com/iamprogrammer/image/upload/v1659603352/topnotch_petIImages/m4bu1riq7prewwh0gwfy.jpg', 'grooming', 'Paki trim at pakilinisang mabuti', '2022-08-05 21:00:00.000', 'public', 0, 'pending', 7),
(52, 'Pinti', 'dog', 'Hotdog', '2022-07-12', 'male', 'http://res.cloudinary.com/iamprogrammer/image/upload/v1659603352/topnotch_petIImages/m4bu1riq7prewwh0gwfy.jpg', 'grooming', 'Paki trim at pakilinisang mabuti', '2022-08-05 00:59:59.009', 'public', 0, 'rejected', 6);

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
(6, 'topnotch_profilepic/am0o9xj6sjv0lnojqxam', 'http://res.cloudinary.com/iamprogrammer/image/upload/v1657882458/topnotch_profilepic/am0o9xj6sjv0lnojqxam.jpg', 'Jean', 'Correa', '2000-02-11', 'jeanmargarette11@gmail.com', '$2a$06$0QeR0p9vev9aGIC7kUM/geyd2V1oVnS0E/DHfCAYTgw5jjKMlwP92', '09060376440', 'Encanto Angat Bulacan'),
(7, 'topnotch_profilepic/kltlzmhtwfwz78sm1npt', 'http://res.cloudinary.com/iamprogrammer/image/upload/v1658645777/topnotch_profilepic/kltlzmhtwfwz78sm1npt.jpg', 'Menandro', 'Eugenio', '2000-10-28', 'Menandroeugenio1028@gmail.com', '$2a$06$gx3EWCE15zpiVQQkhFQC/OhG3AcTbDLo1Jiznc.COBsZSWIFaBQsi', '639561289642', 'San Sebastian Hagonoy Bulacan');

-- --------------------------------------------------------

--
-- Table structure for table `live_streams`
--

CREATE TABLE `live_streams` (
  `id` int(11) NOT NULL,
  `reference_id` varchar(20) DEFAULT NULL,
  `customer_id` int(11) DEFAULT NULL,
  `admin_id` int(11) DEFAULT NULL,
  `video_url` varchar(500) DEFAULT NULL,
  `date` varchar(20) DEFAULT NULL,
  `start_time` varchar(20) DEFAULT NULL,
  `end_time` varchar(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

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
  `id` int(11) NOT NULL,
  `reference` varchar(500) NOT NULL,
  `customer_id` int(11) NOT NULL,
  `order_date` datetime(6) NOT NULL,
  `delivery_status` int(11) NOT NULL DEFAULT 0,
  `order_status` varchar(20) NOT NULL DEFAULT 'pending',
  `total_amount` bigint(20) NOT NULL,
  `payment_type` varchar(100) DEFAULT NULL,
  `monthly_id` int(11) DEFAULT NULL,
  `billing_address` varchar(100) NOT NULL,
  `contact` varchar(20) NOT NULL,
  `zip_code` varchar(20) NOT NULL,
  `courrier_type` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `order_details`
--

INSERT INTO `order_details` (`id`, `reference`, `customer_id`, `order_date`, `delivery_status`, `order_status`, `total_amount`, `payment_type`, `monthly_id`, `billing_address`, `contact`, `zip_code`, `courrier_type`) VALUES
(50, 'pi_3LPM97CPdX0vlIZo0R8iqJ61', 7, '2022-07-25 00:00:00.000000', 4, 'completed', 700, 'card', NULL, 'san sebastian hagonoy bulacan', '639561289642', '3002', 'toktok'),
(51, 'pi_3LPMfaCPdX0vlIZo04yBPYII', 7, '2022-07-25 00:00:00.000000', 4, 'completed', 1200, 'card', NULL, 'San sebastian hagonoy bulacan', '09561289642', '3002', 'jnt'),
(54, 'pi_3LQpOVCPdX0vlIZo0w221GAu', 7, '2022-07-29 00:00:00.000000', 4, 'completed', 500, 'card', NULL, '#109, San Sebastian Hagonoy Bulacan Del pilar st.', '09561289642', '3002', 'lalamove'),
(55, '5a9901d49e1230689c06339d2e01c658', 7, '2022-07-29 00:00:00.000000', 0, 'pending', 400, 'gcash', NULL, '#301 Encanto Angat Bulacan California Street', '09051237552', '3001', 'toktok'),
(56, 'pi_3LTjZJCPdX0vlIZo1y1rxRsg', 7, '2022-08-06 00:00:00.000000', 4, 'completed', 5000, 'card', NULL, 'some address 123 street del pilar', '09561289642', '3002', 'toktok');

-- --------------------------------------------------------

--
-- Table structure for table `products`
--

CREATE TABLE `products` (
  `id` int(11) NOT NULL,
  `product_name` varchar(100) DEFAULT NULL,
  `product_price` bigint(20) DEFAULT NULL,
  `product_description` varchar(500) DEFAULT NULL,
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
(43, 'food bowl', 200, 'Lorem ipsum dolor, sit amet LoremLorem ipsum dolor, sit amet Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta quidem fLorem ipsum dolor, sit amet Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta quidem fLorem ipsum dolor, sit amet Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta quidem f ipsum dolor, sit amet consectetur adipisicing elit. Dicta quidem f\nLorem ipsum dolor, sit amet LoremLorem ipsum dolor, sit amet Lorem ipsum dolor, sit amet consectetu', 'Cat', '2022-07-24', 56, '2-4', 'Food', 'http://res.cloudinary.com/iamprogrammer/image/upload/v1658646718/topnotch_productImg/qd0yfi8jldafh2b5pomb.png', 'topnotch_productImg/qd0yfi8jldafh2b5pomb'),
(44, 'Multivitamins', 300, 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta quidem fugit maiores voluptatem inve', 'Dog', '2022-07-24', 80, '5-7', 'Food', 'http://res.cloudinary.com/iamprogrammer/image/upload/v1657709691/topnotch_productImg/e9neie1peletkcw6go9u.png', 'topnotch_productImg/e9neie1peletkcw6go9u'),
(45, 'Shampoo', 400, 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta quidem fugit maiores voluptatem inve', 'Dog', '2022-07-24', 85, '7+', 'Utility', 'http://res.cloudinary.com/iamprogrammer/image/upload/v1657260600/topnotch_productImg/qjkky0r5ws6uj0zoizsm.png', 'topnotch_productImg/qjkky0r5ws6uj0zoizsm'),
(46, 'multivitamins A plus', 500, 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta quidem fugit maiores voluptatem inve', 'Cat', '2022-07-24', 89, '1-2', 'Utility', 'http://res.cloudinary.com/iamprogrammer/image/upload/v1657260636/topnotch_productImg/gmzxy5gl2pmtsfam8vij.png', 'topnotch_productImg/gmzxy5gl2pmtsfam8vij'),
(49, 'whisks food', 100, 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum perferendis rem architecto optio quis', 'Cat', '2022-07-24', 90, '1-2', 'Food', 'http://res.cloudinary.com/iamprogrammer/image/upload/v1657262303/topnotch_productImg/pkxt0wnyspli9vmpn71t.png', 'topnotch_productImg/pkxt0wnyspli9vmpn71t'),
(50, 'pedigree', 600, 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum perferendis rem architecto optio quis', 'Dog', '2022-07-24', 85, '7+', 'Food', 'http://res.cloudinary.com/iamprogrammer/image/upload/v1657262354/topnotch_productImg/ivfx6h0e4ekghpzni8cq.png', 'topnotch_productImg/ivfx6h0e4ekghpzni8cq'),
(51, 'pink leashe', 700, 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum perferendis rem architecto optio quis', 'Cat', '2022-07-24', 95, '1-2', 'Utility', 'http://res.cloudinary.com/iamprogrammer/image/upload/v1657262390/topnotch_productImg/labogcn14nhhnicjmrkn.png', 'topnotch_productImg/labogcn14nhhnicjmrkn'),
(52, 'blue shampoo', 800, 'Lorem ipsum dolor, sit amet LoremLorem ipsum dolor, sit amet Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta quidem fLorem ipsum dolor, sit amet Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta quidem fLorem ipsum dolor, sit amet Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta quidem f ipsum dolor, sit amet consectetur adipisicing elit. Dicta quidem f', 'Dog', '2022-07-24', 91, '5-7', 'Hygiene kit', 'http://res.cloudinary.com/iamprogrammer/image/upload/v1657451719/topnotch_productImg/nx1b0dbhb9lh3hxk9hb6.png', 'topnotch_productImg/nx1b0dbhb9lh3hxk9hb6'),
(53, 'LEGO FOR PETS', 500, 'sadasdsda', 'Cat', '2022-07-24', 121, '5-7', 'Hygiene kit', 'http://res.cloudinary.com/iamprogrammer/image/upload/v1659782108/topnotch_productImg/zzlo8xp4hezhsdswuurt.jpg', 'topnotch_productImg/zzlo8xp4hezhsdswuurt'),
(54, 'some bag update', 600, 'some item description', 'Dog', '2022-07-24', 32, '7+', 'Toy', 'http://res.cloudinary.com/iamprogrammer/image/upload/v1658660660/topnotch_productImg/nfibuzaftaakmqibq0g0.png', 'topnotch_productImg/nfibuzaftaakmqibq0g0');

-- --------------------------------------------------------

--
-- Table structure for table `product_details`
--

CREATE TABLE `product_details` (
  `id` int(11) NOT NULL,
  `product_id` int(11) NOT NULL,
  `order_id` int(11) DEFAULT NULL,
  `customer_id` int(11) NOT NULL,
  `quantity` bigint(20) DEFAULT NULL,
  `is_active` tinyint(1) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `product_details`
--

INSERT INTO `product_details` (`id`, `product_id`, `order_id`, `customer_id`, `quantity`, `is_active`) VALUES
(589, 51, 50, 7, 1, 1),
(593, 49, 51, 7, 1, 1),
(594, 45, 51, 7, 1, 1),
(595, 51, 51, 7, 1, 1),
(606, 46, 54, 7, 1, 1),
(607, 45, 55, 7, 1, 1),
(650, 54, 56, 7, 10, 1),
(651, 51, NULL, 7, 10, 1),
(652, 43, NULL, 7, 10, 1),
(653, 52, NULL, 7, 10, 1),
(654, 44, NULL, 7, 1, 1),
(655, 49, NULL, 7, 17, 1),
(656, 45, NULL, 7, 30, 1),
(657, 46, NULL, 7, 5, 1),
(658, 50, NULL, 7, 20, 1);

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
  ADD PRIMARY KEY (`id`),
  ADD KEY `customerID` (`customer_id`);

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
-- Indexes for table `live_streams`
--
ALTER TABLE `live_streams`
  ADD PRIMARY KEY (`id`),
  ADD KEY `customer_id` (`customer_id`),
  ADD KEY `admin_id` (`admin_id`);

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
  ADD PRIMARY KEY (`id`),
  ADD KEY `monthlyID` (`monthly_id`),
  ADD KEY `customer_id` (`customer_id`);

--
-- Indexes for table `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `product_details`
--
ALTER TABLE `product_details`
  ADD PRIMARY KEY (`id`),
  ADD KEY `orderID` (`order_id`),
  ADD KEY `productID` (`product_id`),
  ADD KEY `customer_id` (`customer_id`);

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
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=53;

--
-- AUTO_INCREMENT for table `appointment_history`
--
ALTER TABLE `appointment_history`
  MODIFY `historyID` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `customer`
--
ALTER TABLE `customer`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `live_streams`
--
ALTER TABLE `live_streams`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `monthly_sales`
--
ALTER TABLE `monthly_sales`
  MODIFY `monthlyID` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `order_details`
--
ALTER TABLE `order_details`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=57;

--
-- AUTO_INCREMENT for table `products`
--
ALTER TABLE `products`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=55;

--
-- AUTO_INCREMENT for table `product_details`
--
ALTER TABLE `product_details`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=659;

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
  ADD CONSTRAINT `appointments_ibfk_1` FOREIGN KEY (`customer_id`) REFERENCES `customer` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `appointment_history`
--
ALTER TABLE `appointment_history`
  ADD CONSTRAINT `appointment_history_ibfk_1` FOREIGN KEY (`appointmentID`) REFERENCES `appointments` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `live_streams`
--
ALTER TABLE `live_streams`
  ADD CONSTRAINT `live_streams_ibfk_1` FOREIGN KEY (`customer_id`) REFERENCES `customer` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `live_streams_ibfk_2` FOREIGN KEY (`admin_id`) REFERENCES `admin` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `monthly_sales`
--
ALTER TABLE `monthly_sales`
  ADD CONSTRAINT `monthly_sales_ibfk_1` FOREIGN KEY (`yearlyID`) REFERENCES `yearly_sales` (`yearlyID`) ON DELETE CASCADE;

--
-- Constraints for table `order_details`
--
ALTER TABLE `order_details`
  ADD CONSTRAINT `order_details_ibfk_1` FOREIGN KEY (`monthly_id`) REFERENCES `monthly_sales` (`monthlyID`) ON DELETE CASCADE,
  ADD CONSTRAINT `order_details_ibfk_2` FOREIGN KEY (`customer_id`) REFERENCES `customer` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `product_details`
--
ALTER TABLE `product_details`
  ADD CONSTRAINT `product_details_ibfk_1` FOREIGN KEY (`order_id`) REFERENCES `order_details` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `product_details_ibfk_2` FOREIGN KEY (`product_id`) REFERENCES `products` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `product_details_ibfk_3` FOREIGN KEY (`customer_id`) REFERENCES `customer` (`id`) ON DELETE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
