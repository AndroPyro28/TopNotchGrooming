-- MySQL dump 10.13  Distrib 8.0.26, for Win64 (x86_64)
--
-- Host: bpi43qm1s6obemplisey-mysql.services.clever-cloud.com    Database: bpi43qm1s6obemplisey
-- ------------------------------------------------------
-- Server version	8.0.22-13

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;
SET @MYSQLDUMP_TEMP_LOG_BIN = @@SESSION.SQL_LOG_BIN;
SET @@SESSION.SQL_LOG_BIN= 0;

--
-- GTID state at the beginning of the backup 
--

--
-- Table structure for table `admin`
--

DROP TABLE IF EXISTS `admin`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `admin` (
  `id` int NOT NULL AUTO_INCREMENT,
  `user_type` varchar(20) NOT NULL DEFAULT 'admin',
  `firstname` varchar(50) DEFAULT NULL,
  `lastname` varchar(50) DEFAULT NULL,
  `email` varchar(50) DEFAULT NULL,
  `profile_image_url` varchar(500) NOT NULL DEFAULT 'https://res.cloudinary.com/iamprogrammer/image/upload/v1654850599/topnotch_profilepic/eadlgosq2pioplvi6lfs.png',
  `password` varchar(500) DEFAULT NULL,
  `passwordResetToken` varchar(500) DEFAULT NULL,
  `middlename` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `admin`
--

LOCK TABLES `admin` WRITE;
/*!40000 ALTER TABLE `admin` DISABLE KEYS */;
INSERT INTO `admin` VALUES (1,'admin','jhun adrian','manalaysay','jhunadrianmanalaysay@gmail.com','https://res.cloudinary.com/iamprogrammer/image/upload/v1654850599/topnotch_profilepic/wxdgkuyfp2gjjik19ppd.png','123123','eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiY29kZSI6InpEN1NaQmJsYm8iLCJ1c2VydHlwZSI6ImFkbWluIiwiaWF0IjoxNjY1NjY4MTUwLCJleHAiOjE2NjU2Njg0NTB9.HXAOPguq_LVVKscaozTTstY7VrNfNv4dnJXHI95Smy8',NULL),(2,'admin','jameson','lazo','jamesonlazo@gmail.com','https://res.cloudinary.com/iamprogrammer/image/upload/v1654850599/topnotch_profilepic/axqqxl8t5g1nebjr0g4r.png','123123','eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiY29kZSI6InpEN1NaQmJsYm8iLCJ1c2VydHlwZSI6ImFkbWluIiwiaWF0IjoxNjY1NjY4MTUwLCJleHAiOjE2NjU2Njg0NTB9.HXAOPguq_LVVKscaozTTstY7VrNfNv4dnJXHI95Smy8','r'),(3,'admin','angelo','nueva','angeloneuva@gmail.com','https://res.cloudinary.com/iamprogrammer/image/upload/v1654850599/topnotch_profilepic/tbk1atjyzmqwquhppqbb.png','123123','eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiY29kZSI6InpEN1NaQmJsYm8iLCJ1c2VydHlwZSI6ImFkbWluIiwiaWF0IjoxNjY1NjY4MTUwLCJleHAiOjE2NjU2Njg0NTB9.HXAOPguq_LVVKscaozTTstY7VrNfNv4dnJXHI95Smy8','g'),(4,'admin','aaliyah divine','katigbak','aaliyahdivinekatigbak@gmail.com','https://res.cloudinary.com/iamprogrammer/image/upload/v1654850599/topnotch_profilepic/pvxkse2ex3xrwh96modr.png','123123','eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiY29kZSI6InpEN1NaQmJsYm8iLCJ1c2VydHlwZSI6ImFkbWluIiwiaWF0IjoxNjY1NjY4MTUwLCJleHAiOjE2NjU2Njg0NTB9.HXAOPguq_LVVKscaozTTstY7VrNfNv4dnJXHI95Smy8','s'),(5,'admin','yzza jobelle','paano','yzzajobellepaano@gmail.com','https://res.cloudinary.com/iamprogrammer/image/upload/v1654850599/topnotch_profilepic/kb4giheiwxo4fkm67huj.png','123123','eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiY29kZSI6InpEN1NaQmJsYm8iLCJ1c2VydHlwZSI6ImFkbWluIiwiaWF0IjoxNjY1NjY4MTUwLCJleHAiOjE2NjU2Njg0NTB9.HXAOPguq_LVVKscaozTTstY7VrNfNv4dnJXHI95Smy8','c'),(6,'admin','mark brian','lunarian','markbrianlunarian@gmail.com','https://res.cloudinary.com/iamprogrammer/image/upload/v1654850599/topnotch_profilepic/bwo09rgg7peoxedw7mj5.png','123123','eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiY29kZSI6InpEN1NaQmJsYm8iLCJ1c2VydHlwZSI6ImFkbWluIiwiaWF0IjoxNjY1NjY4MTUwLCJleHAiOjE2NjU2Njg0NTB9.HXAOPguq_LVVKscaozTTstY7VrNfNv4dnJXHI95Smy8','r'),(7,'admin','john dale','beltran','johndalebeltran@gmail.com','https://res.cloudinary.com/iamprogrammer/image/upload/v1654850599/topnotch_profilepic/apeqk9x4b42zrurfiyg7.png','123123','eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiY29kZSI6InpEN1NaQmJsYm8iLCJ1c2VydHlwZSI6ImFkbWluIiwiaWF0IjoxNjY1NjY4MTUwLCJleHAiOjE2NjU2Njg0NTB9.HXAOPguq_LVVKscaozTTstY7VrNfNv4dnJXHI95Smy8','c');
/*!40000 ALTER TABLE `admin` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `appointments`
--

DROP TABLE IF EXISTS `appointments`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `appointments` (
  `id` int NOT NULL AUTO_INCREMENT,
  `pet_name` varchar(50) DEFAULT NULL,
  `pet_type` varchar(50) DEFAULT NULL,
  `pet_breed` varchar(50) DEFAULT NULL,
  `birthdate` varchar(50) DEFAULT NULL,
  `gender` varchar(20) NOT NULL,
  `pet_image` varchar(500) NOT NULL,
  `appointment_type` varchar(50) DEFAULT NULL,
  `additional_details` varchar(500) DEFAULT NULL,
  `date_n_time` datetime(3) NOT NULL,
  `admin_id` int DEFAULT NULL,
  `status` varchar(20) NOT NULL DEFAULT 'pending',
  `customer_id` int DEFAULT NULL,
  `live_stream_id` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `customerID` (`customer_id`),
  KEY `live_stream_id` (`live_stream_id`),
  KEY `admin_id` (`admin_id`),
  CONSTRAINT `appointments_ibfk_1` FOREIGN KEY (`customer_id`) REFERENCES `customer` (`id`) ON DELETE CASCADE,
  CONSTRAINT `appointments_ibfk_2` FOREIGN KEY (`live_stream_id`) REFERENCES `live_streams` (`id`),
  CONSTRAINT `appointments_ibfk_3` FOREIGN KEY (`live_stream_id`) REFERENCES `live_streams` (`id`) ON DELETE CASCADE,
  CONSTRAINT `appointments_ibfk_4` FOREIGN KEY (`admin_id`) REFERENCES `admin` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=113 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `appointments`
--

LOCK TABLES `appointments` WRITE;
/*!40000 ALTER TABLE `appointments` DISABLE KEYS */;
INSERT INTO `appointments` VALUES (74,'Bree','dog','Shih Tzu','2014-10-31','male','http://res.cloudinary.com/iamprogrammer/image/upload/v1664927758/topnotch_petIImages/blxgbtrlewajndnsyhnb.jpg','grooming','Full Groom <3','2022-10-05 08:00:00.000',1,'completed',14,188),(75,'jameson','dog','bulldog','2010-12-15','male','http://res.cloudinary.com/iamprogrammer/image/upload/v1664951838/topnotch_petIImages/kqoqwjwmq7guivd1nelb.jpg','grooming','','2022-10-05 14:39:00.000',2,'completed',11,189),(78,'angelo','dog','bull terrier','2000-10-20','male','http://res.cloudinary.com/iamprogrammer/image/upload/v1665385076/topnotch_petIImages/eubg2frwybpj6uo2kg9s.jpg','grooming','the dog is quite hyper','2022-10-10 15:00:00.000',2,'completed',11,191),(79,'Bree','dog','Shih Tzu ','2020-11-19','female','http://res.cloudinary.com/iamprogrammer/image/upload/v1665541387/topnotch_petIImages/dnvvc5hhwxhw9jxyrmbv.jpg','grooming','Full groom','2022-10-12 10:25:00.000',2,'completed',14,192),(80,'Appa','cat','Persian ','2020-08-11','female','http://res.cloudinary.com/iamprogrammer/image/upload/v1665541835/topnotch_petIImages/cwa3qjxhxu2p1t4lxh6r.jpg','grooming','','2022-10-12 10:32:00.000',3,'completed',14,193),(82,'jhun','dog','Saint Bernard','2000-02-04','male','http://res.cloudinary.com/iamprogrammer/image/upload/v1665548118/topnotch_petIImages/ecgprus9x9frcxsvepld.jpg','grooming','','2022-10-12 12:18:00.000',3,'completed',11,195),(87,'coco','dog','Shih tzu','2021-06-02','male','http://res.cloudinary.com/iamprogrammer/image/upload/v1665731173/topnotch_petIImages/g7s8fae31opho9hmhi1c.jpg','grooming','','2022-10-14 15:15:00.000',3,'completed',11,198),(108,'Lala','dog','pomeranian','2020-01-08','female','http://res.cloudinary.com/iamprogrammer/image/upload/v1667875852/topnotch_petIImages/uih0dzzvaz0gjs3xrkbx.jpg','grooming','na','2022-11-08 10:51:00.000',1,'completed',9,216),(109,'jhunnie','dog','Asky','2018-02-14','male','http://res.cloudinary.com/iamprogrammer/image/upload/v1667877142/topnotch_petIImages/ay2cwy5ykkrmt8qybths.jpg','grooming','','2022-11-08 11:15:00.000',2,'completed',11,NULL),(110,'Jelloeys','dog','Terrier','2021-02-24','male','http://res.cloudinary.com/iamprogrammer/image/upload/v1667877530/topnotch_petIImages/dtexnllf1wkgf8zkjmwa.jpg','grooming','','2022-11-08 11:21:00.000',1,'completed',11,217),(111,'Bree','dog','Shih Tzu','2014-10-31','female','http://res.cloudinary.com/iamprogrammer/image/upload/v1667878232/topnotch_petIImages/res34wzeopwb2ysm7zi4.jpg','grooming','Full groom please','2022-11-08 11:32:00.000',1,'completed',14,218),(112,'dsadsa','dog','dsadsa','2021-07-12','male','http://res.cloudinary.com/iamprogrammer/image/upload/v1668196257/topnotch_petIImages/qiiy4dgbr9bchbo7vzvo.jpg','grooming','dsasdaddsads','2022-11-12 03:50:00.000',7,'completed',8,NULL);
/*!40000 ALTER TABLE `appointments` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `comments`
--

DROP TABLE IF EXISTS `comments`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `comments` (
  `id` int NOT NULL AUTO_INCREMENT,
  `comment` varchar(500) DEFAULT NULL,
  `createdAt` datetime DEFAULT CURRENT_TIMESTAMP,
  `feedback_id` int DEFAULT NULL,
  `admin_id` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `feedback_id` (`feedback_id`),
  KEY `admin_id` (`admin_id`),
  CONSTRAINT `comments_ibfk_1` FOREIGN KEY (`feedback_id`) REFERENCES `feedback` (`id`) ON DELETE CASCADE,
  CONSTRAINT `comments_ibfk_2` FOREIGN KEY (`admin_id`) REFERENCES `admin` (`id`) ON DELETE SET NULL
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `comments`
--

LOCK TABLES `comments` WRITE;
/*!40000 ALTER TABLE `comments` DISABLE KEYS */;
/*!40000 ALTER TABLE `comments` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `customer`
--

DROP TABLE IF EXISTS `customer`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `customer` (
  `id` int NOT NULL AUTO_INCREMENT,
  `profile_image_id` varchar(500) DEFAULT NULL,
  `profile_image_url` varchar(500) DEFAULT NULL,
  `firstname` varchar(50) DEFAULT NULL,
  `lastname` varchar(50) DEFAULT NULL,
  `birthdate` varchar(50) NOT NULL,
  `email` varchar(50) DEFAULT NULL,
  `password` varchar(100) DEFAULT NULL,
  `phoneNo` varchar(100) DEFAULT NULL,
  `address` varchar(100) DEFAULT NULL,
  `passwordResetToken` varchar(500) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=25 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `customer`
--

LOCK TABLES `customer` WRITE;
/*!40000 ALTER TABLE `customer` DISABLE KEYS */;
INSERT INTO `customer` VALUES (6,'topnotch_profilepic/ez2o07mof3kfqjzftbak','http://res.cloudinary.com/iamprogrammer/image/upload/v1664795817/topnotch_profilepic/ez2o07mof3kfqjzftbak.jpg','jean','Correa','2000-02-11','jeanmargarette11@gmail.com','$2a$06$GKEJGUEchDlX4wgMzFQFnewHflaMwrTbHCyNcjY/MLixRXXDk7hI.','09561289642','Encanto Angat Bulacan',NULL),(7,'topnotch_profilepic/j2ssatalwjkeijodbjg9','http://res.cloudinary.com/iamprogrammer/image/upload/v1667824221/topnotch_profilepic/j2ssatalwjkeijodbjg9.jpg','andro','Eugenio','2000-10-28','Menandroeugenio1028@gmail.com','$2a$06$QRyPKAHAHygeCcu0jTkxweMEtEdpqVYACoNsMN.q2PPH/6pMuesYm','639561289641','San Sebastian Hagonoy Bulacan',NULL),(8,'topnotch_profilepic/e6yif0opm34fbzny2stm','http://res.cloudinary.com/iamprogrammer/image/upload/v1667824636/topnotch_profilepic/e6yif0opm34fbzny2stm.jpg','john','doe','2004-09-30','johndoe@gmail.com','$2a$06$cchvz5PueCx5s4x218o3wupc3Wqpk6.4PFJ.98mHeQwPpHBKffqqS','639561289622','san sebastihan hagonoy bulacan',NULL),(9,'topnotch_profilepic/lug3wjrpfwex6xrqwvnd','http://res.cloudinary.com/iamprogrammer/image/upload/v1666090796/topnotch_profilepic/lug3wjrpfwex6xrqwvnd.jpg','Yzza Jobelle ','Paaño','2001-11-08','yzzajobelle0@gmail.com','$2a$06$Du/lk/j5M3SwI.prAhRDLO/kEmgf7MVW6YED.mGGRaR7uFFwTlNXa','9068226311','Mabolo Malolos, Bulacan ',NULL),(10,NULL,NULL,'Yzza Jobelle ','Paaño','2001-11-08','yzzajobelle0@gmail.com','$2a$06$2p1b4la0324uo10eDXU7meaPwg7pgavSl/FV43XfjoWJwd9tbbala','9068226311','Mabolo Malolos, Bulacan ',NULL),(11,NULL,NULL,'aaliyah','katigbak','2000-10-28','aaliyahkatigbak@gmail.com','$2a$06$WkWk29mHpl79o83ZI.//l.a8N5nigfHa0zmgOGh9aX2gkpWai6xqm','639989118837','Marialo, Bulacan',NULL),(12,NULL,NULL,'Jameson','Lazo','2001-11-03','jamesonrlazojr@gmail.com','$2a$06$RGBb3.ShvUGwjUCPJF/pMe56z83UTYVeZ4hz4YHzdEHIECw7iZz16','9271964160','Malolos, Bulacan',NULL),(13,NULL,NULL,'Jameson','Lazo','2001-11-03','jamesonrlazojr@gmail.com','$2a$06$IT.TU1P3b23R3nT5551Ooen0rJF1xHfgmGdSlp1iBrxF0tyHRFn52','9271964160','Malolos, Bulacan',NULL),(14,'topnotch_profilepic/limowduynt3k2fxua65e','http://res.cloudinary.com/iamprogrammer/image/upload/v1667805389/topnotch_profilepic/limowduynt3k2fxua65e.jpg','Mark Brian','Lunaria','2000-12-16','brianlunaria@gmail.com','$2a$06$JUpDyuMAmmnLnDKHeD93Ke7VLRU1sNQj.BZBiX/ls8GVPmoFMkB/W','639616387794','Meycauayan City, Bulacan',NULL),(15,'topnotch_profilepic/vx6iu2cezgqv9qgik7eg','http://res.cloudinary.com/iamprogrammer/image/upload/v1667952663/topnotch_profilepic/vx6iu2cezgqv9qgik7eg.jpg','Jhun Adrian','Manalaysay','2001-05-04','bulldoger07@gmail.com','$2a$06$BaDhc/O7Nhok6RgIVkQ5q.zBcsfQYNEMECMew4k0Jv3EMXYIRt3by','9676420391','Igulot, Bocaue, Bulacan',NULL),(16,'topnotch_profilepic/amjhy8k1nueftppxtcbs','http://res.cloudinary.com/iamprogrammer/image/upload/v1665545654/topnotch_profilepic/amjhy8k1nueftppxtcbs.jpg','Jameson','Lazo','2001-11-12','jameson.lazojr.r@bulsu.edu.ph','$2a$06$KZaHvDHec3.fTkzwlnv52ebxLc4XDtX1J2nG6Xr13GZcWs67Zncm2','9207848654','132 Epifanio St., San Jose Subj Mojon Malolos',NULL),(17,'topnotch_profilepic/j9fuoi9iofmwdlbcgkxv','http://res.cloudinary.com/iamprogrammer/image/upload/v1665586300/topnotch_profilepic/j9fuoi9iofmwdlbcgkxv.jpg','user111','user111','2004-10-12','someemail@gmail.com','$2a$06$Pyfi63TdoNlz9iYEaz1njO/Uxi4AxQofZH9ggN3ehXuLMoETQvcSO','639561289642','some file',NULL),(18,NULL,NULL,'Daniel','Padilla','1999-11-10','dizon.juanmiguel.l.2128@gmail.com','$2a$06$AJhKvG6vZpfzPDyHm0/xj.mTX2YedjROCoJOpLB6WIyZ4NeimXq0C','639675724129','Pogi St., Bebe Anac, Masantol, Pampanga',NULL),(19,NULL,NULL,'Katrina Eisa','Mendoza','1992-01-30','ket.mendoza@gmail.com','$2a$06$eS6BBlzU1Z73gOplw3SLHegqBIXNPsp05yNb0o0PTOBafTxRaqKU.','63222989366','Marilao, Bulacan',NULL),(20,NULL,NULL,'Ezekiel','Castillo','2004-09-18','bluejan15@yahoo.com','$2a$06$jwHoM4My4KYOljzH2HTztuCfzonKUM3TSst1yfX8exmNkX71LP3d2','9175868489','Malolos Bulacan',NULL),(21,NULL,NULL,'jan','castillo','1980-05-15','janice.castillo@gmail.com','$2a$06$NT9bJxfwjd7HgKexxjFLbOGFi5FxcKDklyWcKOM3nPbMpJhxiUmLy','639175868489','bulacan bulacan',NULL),(22,NULL,NULL,'John Dale ','Beltran','2001-03-18','johndalebeltran16@gmail.com','$2a$06$HCg97Rf/5zspdrR/oxy21eNut4CL98Gz9by/y941KZp9gZxq7.HLC','9703368484','Iraq Street Bebe Anac Masantol Pampanga ',NULL),(23,NULL,NULL,'Yzza','Jobelle ','2001-11-08','yzzajobelle.paano.c@bulsu.edu.ph','$2a$06$fgl1XW6ghDp2eRn930v1Y.ROVU6fPQmZ0CZgNgZk4qmZ0BNzADnpS','9086327953','Mabolo Malolos, Bulacan ',NULL),(24,NULL,NULL,'Mark ','Lunaria','2001-02-16','lunaria.markbrian.r.4978@gmail.com','$2a$06$IeMSD8wtxtbnYu.DCW4uU.QoBOTXIQJr43Jn0lGP.B.GpsOM72Gf6','6399599574755','#310 Rosas St., Meycauayan City, Bulacan',NULL);
/*!40000 ALTER TABLE `customer` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `feedback`
--

DROP TABLE IF EXISTS `feedback`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `feedback` (
  `id` int NOT NULL AUTO_INCREMENT,
  `comments` varchar(1000) DEFAULT NULL,
  `ratings` int DEFAULT NULL,
  `customer_id` int DEFAULT NULL,
  `createdAt` datetime DEFAULT CURRENT_TIMESTAMP,
  `pin` tinyint(1) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`),
  KEY `customer_id` (`customer_id`),
  CONSTRAINT `feedback_ibfk_1` FOREIGN KEY (`customer_id`) REFERENCES `customer` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `feedback`
--

LOCK TABLES `feedback` WRITE;
/*!40000 ALTER TABLE `feedback` DISABLE KEYS */;
INSERT INTO `feedback` VALUES (11,'The website provide',4,16,'2022-10-12 03:53:50',0),(12,'Hello',5,14,'2022-10-12 03:54:20',0),(13,'Nice UI',5,18,'2022-10-17 05:44:31',0),(14,'Sample Feedback',5,19,'2022-10-17 09:48:58',0),(15,'Service is great! ',5,14,'2022-11-07 06:42:55',0);
/*!40000 ALTER TABLE `feedback` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `live_streams`
--

DROP TABLE IF EXISTS `live_streams`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `live_streams` (
  `id` int NOT NULL AUTO_INCREMENT,
  `reference_id` varchar(20) DEFAULT NULL,
  `customer_id` int DEFAULT NULL,
  `appointment_id` int DEFAULT NULL,
  `admin_id` int DEFAULT NULL,
  `video_url` varchar(500) DEFAULT NULL,
  `date` varchar(20) DEFAULT NULL,
  `start_time` varchar(20) DEFAULT NULL,
  `end_time` varchar(20) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `customer_id` (`customer_id`),
  KEY `admin_id` (`admin_id`),
  KEY `live_stream_id` (`id`),
  KEY `live_streams_ibfk_3` (`appointment_id`),
  CONSTRAINT `live_streams_ibfk_1` FOREIGN KEY (`customer_id`) REFERENCES `customer` (`id`) ON DELETE CASCADE,
  CONSTRAINT `live_streams_ibfk_2` FOREIGN KEY (`admin_id`) REFERENCES `admin` (`id`) ON DELETE CASCADE,
  CONSTRAINT `live_streams_ibfk_3` FOREIGN KEY (`appointment_id`) REFERENCES `appointments` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=219 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `live_streams`
--

LOCK TABLES `live_streams` WRITE;
/*!40000 ALTER TABLE `live_streams` DISABLE KEYS */;
INSERT INTO `live_streams` VALUES (188,'aERL7p0fxv',14,74,1,'http://res.cloudinary.com/iamprogrammer/video/upload/v1664928255/topnotch_livestream_record/s7mprs5z2zuwj5vfes3x.mkv','2022-10-05','8:02 am','8:04 am'),(189,'p8PILAL3QU',11,75,1,'http://res.cloudinary.com/iamprogrammer/video/upload/v1664951963/topnotch_livestream_record/khhli6mzxritaxfbuqfu.mkv','2022-10-05','2:38 pm','2:39 pm'),(191,'y5Cmlb1nm8',11,78,1,'http://res.cloudinary.com/iamprogrammer/video/upload/v1665385317/topnotch_livestream_record/tybyzxbeh4oyxbocyo5o.mkv','2022-10-10','3:00 pm','3:01 pm'),(192,'talEtWx0HS',14,79,1,NULL,'2022-10-12','10:26 am',NULL),(193,'cQu9qcldng',14,80,1,NULL,'2022-10-12','10:31 am',NULL),(195,'vvSiJWYDeu',11,82,1,'http://res.cloudinary.com/iamprogrammer/video/upload/v1665548392/topnotch_livestream_record/tc38yhyl3n6rzq5u1vuu.webm','2022-10-12','12:18 pm','12:19 pm'),(198,'glRXJ08W3R',11,87,1,NULL,'2022-10-14','3:17 pm',NULL),(216,'emXxin7mcj',9,108,1,NULL,'2022-11-08','10:51 am',NULL),(217,'Uvr8XsU7pN',11,110,1,'http://res.cloudinary.com/iamprogrammer/video/upload/v1667877830/topnotch_livestream_record/visyovfxrbi2kglwjqkp.webm','2022-11-08','11:20 am','11:23 am'),(218,'eqF4Q2fgLQ',14,111,1,'http://res.cloudinary.com/iamprogrammer/video/upload/v1667879201/topnotch_livestream_record/itrmghaclwu4p4l8kxuw.webm','2022-11-08','11:43 am','11:46 am');
/*!40000 ALTER TABLE `live_streams` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `monthly_sales`
--

DROP TABLE IF EXISTS `monthly_sales`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `monthly_sales` (
  `monthlyID` int NOT NULL AUTO_INCREMENT,
  `total_sales` bigint DEFAULT NULL,
  `yearlyID` int DEFAULT NULL,
  `month` varchar(20) DEFAULT NULL,
  PRIMARY KEY (`monthlyID`),
  KEY `yearlyID` (`yearlyID`),
  CONSTRAINT `monthly_sales_ibfk_1` FOREIGN KEY (`yearlyID`) REFERENCES `yearly_sales` (`yearlyID`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `monthly_sales`
--

LOCK TABLES `monthly_sales` WRITE;
/*!40000 ALTER TABLE `monthly_sales` DISABLE KEYS */;
/*!40000 ALTER TABLE `monthly_sales` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `order_details`
--

DROP TABLE IF EXISTS `order_details`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `order_details` (
  `id` int NOT NULL AUTO_INCREMENT,
  `reference` varchar(500) NOT NULL,
  `customer_id` int NOT NULL,
  `order_date` varchar(200) NOT NULL,
  `delivery_status` int NOT NULL DEFAULT '0',
  `order_status` varchar(20) NOT NULL DEFAULT 'pending',
  `total_amount` bigint NOT NULL,
  `payment_type` varchar(100) DEFAULT NULL,
  `monthly_id` int DEFAULT NULL,
  `billing_address` varchar(100) NOT NULL,
  `contact` varchar(20) NOT NULL,
  `zip_code` varchar(20) NOT NULL,
  `courrier_type` varchar(50) NOT NULL,
  `isArchived` tinyint(1) NOT NULL DEFAULT '0',
  `cancel_message` varchar(200) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `monthlyID` (`monthly_id`),
  KEY `customer_id` (`customer_id`),
  CONSTRAINT `order_details_ibfk_1` FOREIGN KEY (`monthly_id`) REFERENCES `monthly_sales` (`monthlyID`) ON DELETE CASCADE,
  CONSTRAINT `order_details_ibfk_2` FOREIGN KEY (`customer_id`) REFERENCES `customer` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=105 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `order_details`
--

LOCK TABLES `order_details` WRITE;
/*!40000 ALTER TABLE `order_details` DISABLE KEYS */;
INSERT INTO `order_details` VALUES (87,'7a390686ba774cf560f851c32203a427',8,'2022-10-01 14:53:33.000000',4,'completed',1495,'gcash',NULL,'john doe\'s house 999 ohio street','639561289642','12333','lalamove',0,NULL),(88,'pi_3LofvXCPdX0vlIZo1iGOWz4k',8,'2022-10-03 12:07:35.000000',4,'completed',4343,'card',NULL,'malolos barihan 3333','639561289642','3000','toktok',0,NULL),(89,'e768d008-034f-475a-9462-35e49ac35862',8,'2022-10-07 01:53:59.000000',-1,'cancelled',505,'cod',NULL,'Malolos bulacan ','6399991123343','3000','toktok',0,NULL),(90,'d93ca334c566ec157e1a5e30c72bbbf0',8,'2022-10-07 02:07:11.000000',4,'completed',1737,'gcash',NULL,'San jose del monte 3000 #222 some street','639561235623','3000','lalamove',0,NULL),(91,'b4174130bc550f8026b7b77f614c16ae',11,'2022-10-10 15:11:17.000000',-1,'cancelled',505,'gcash',NULL,'Bulacan State University Main Malolos','639989118837','3000','toktok',0,NULL),(92,'pi_3LrzIvCPdX0vlIZo01I3fw7n',8,'2022-10-12 15:25:20.000000',-1,'cancelled',2505,'card',NULL,'San sebastian hagonoy bulacan','63956128962','3002','lalamove',0,NULL),(93,'a2fc17932300311e577837ce2d3a2649',6,'2022-10-12 21:16:15.000000',4,'completed',242,'gcash',NULL,'dsasdasadsadsad','639561289642','3002','lalamove',0,NULL),(94,'e1fd6d17448bc7336efef69c9044dc99',6,'2022-10-12 21:19:14.000000',4,'completed',242,'gcash',NULL,'san sebastihan hagonoy bulacan','639561289642','3002','lalamove',0,NULL),(95,'051100cd8885f7d570423dba764a2916',8,'2022-10-13 13:45:45.000000',0,'pending',627,'gcash',NULL,'San Sebastihan Hagonoy Bulacan','639561289642','3002','toktok',0,NULL),(96,'301a937f547d55dbd8b15c6bcf463448',11,'2022-10-14 15:00:52.000000',-1,'cancelled',121,'gcash',NULL,'malolos, bulacan','639989118837','3000','lalamove',0,NULL),(97,'ae08f2c5ac88735957fb8acd64cbab04',11,'2022-11-02 15:15:22.000000',-1,'cancelled',161,'gcash',NULL,'Bulihan, Malolos, Bulacan','63123456789','3018','lalamove',0,NULL),(98,'d1b9b6c7f16ecebadc129fc3a2e30f21',14,'2022-11-07 15:30:57.000000',-1,'cancelled',68,'gcash',NULL,'Bulacan State University','639616387794','3000','lalamove',0,NULL),(99,'8196a7a6-c488-4a67-bc9c-fbdcfb9f362a',8,'2022-11-07 20:12:59.000000',4,'completed',191,'cod',NULL,'San Jose delmonte 115 mabuhay street','639566112321','3002','lalamove',0,NULL),(100,'e1c8361ce4bc57f11747d04225e9a323',8,'2022-11-07 21:43:55.000000',0,'pending',162,'gcash',NULL,'angat bulacan encanto st','639561289642','3002','lalamove',0,NULL),(101,'pi_3M1VhQCPdX0vlIZo0HjVxoxT',11,'2022-11-07 21:53:28.000000',0,'pending',129,'card',NULL,'Bulihan, Malolos','639989118837','3000','lalamove',0,NULL),(102,'pi_3M1VdGCPdX0vlIZo0HcSL4ZA',8,'2022-11-07 22:02:36.000000',0,'pending',68,'card',NULL,'san sebastian hagonoy bylacan 109 del pilar street','639561289642','3002','toktok',0,NULL),(103,'a695435e-71c7-4590-8a15-7e6d46c5b5fe',14,'2022-11-08 20:24:32.000000',-1,'cancelled',162,'cod',NULL,'asdasdasdasdasdasd','639616387794','1312321','toktok',0,NULL),(104,'427bf22c-6302-40d7-8adb-4a5bef3f0383',14,'2022-11-08 20:28:26.000000',-1,'cancelled',561,'cod',NULL,'asdasdasdasdsa','631516156151 ','3121','lalamove',0,NULL);
/*!40000 ALTER TABLE `order_details` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `product_age_limit`
--

DROP TABLE IF EXISTS `product_age_limit`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `product_age_limit` (
  `id` int NOT NULL AUTO_INCREMENT,
  `age_limit` varchar(50) DEFAULT NULL,
  `createAt` datetime DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `product_age_limit`
--

LOCK TABLES `product_age_limit` WRITE;
/*!40000 ALTER TABLE `product_age_limit` DISABLE KEYS */;
INSERT INTO `product_age_limit` VALUES (1,'0-3 weeks','2022-09-27 13:53:29'),(2,'3-6 weeks','2022-09-27 13:53:42'),(3,'7-12 weeks','2022-09-27 13:53:51'),(4,'1-3 months','2022-09-27 13:54:03'),(5,'4-6 months','2022-09-27 13:54:11'),(6,'7-10 months','2022-09-27 13:54:18'),(11,'10-12 months','2022-10-03 04:01:28'),(12,'5 years','2022-10-06 12:38:44');
/*!40000 ALTER TABLE `product_age_limit` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `product_category`
--

DROP TABLE IF EXISTS `product_category`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `product_category` (
  `id` int NOT NULL AUTO_INCREMENT,
  `category` varchar(50) DEFAULT NULL,
  `createdAt` datetime DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` datetime DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `product_category`
--

LOCK TABLES `product_category` WRITE;
/*!40000 ALTER TABLE `product_category` DISABLE KEYS */;
INSERT INTO `product_category` VALUES (5,'toys','2022-09-30 11:40:31','2022-09-30 11:40:31'),(6,'clothes','2022-09-30 13:52:50','2022-09-30 13:52:50'),(7,'misc','2022-09-30 13:52:57','2022-09-30 13:52:57'),(8,'shampoo','2022-09-30 13:53:01','2022-09-30 13:53:01'),(9,'collar','2022-10-03 04:01:10','2022-10-03 04:01:10');
/*!40000 ALTER TABLE `product_category` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `product_details`
--

DROP TABLE IF EXISTS `product_details`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `product_details` (
  `id` int NOT NULL AUTO_INCREMENT,
  `product_id` int NOT NULL,
  `order_id` int DEFAULT NULL,
  `customer_id` int NOT NULL,
  `quantity` bigint DEFAULT NULL,
  `is_active` tinyint(1) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`),
  KEY `orderID` (`order_id`),
  KEY `productID` (`product_id`),
  KEY `customer_id` (`customer_id`),
  CONSTRAINT `product_details_ibfk_1` FOREIGN KEY (`order_id`) REFERENCES `order_details` (`id`) ON DELETE CASCADE,
  CONSTRAINT `product_details_ibfk_2` FOREIGN KEY (`product_id`) REFERENCES `products` (`id`) ON DELETE CASCADE,
  CONSTRAINT `product_details_ibfk_3` FOREIGN KEY (`customer_id`) REFERENCES `customer` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=834 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `product_details`
--

LOCK TABLES `product_details` WRITE;
/*!40000 ALTER TABLE `product_details` DISABLE KEYS */;
INSERT INTO `product_details` VALUES (713,56,87,8,2,1),(714,57,87,8,2,1),(715,55,87,8,2,1),(717,56,88,8,5,1),(718,58,88,8,5,1),(719,55,88,8,5,1),(720,57,88,8,5,1),(724,55,89,8,1,1),(725,55,90,8,2,1),(726,58,90,8,2,1),(727,57,90,8,2,1),(728,56,90,8,2,1),(731,55,91,11,1,1),(740,55,NULL,16,2,1),(745,57,92,8,4,1),(746,55,92,8,4,1),(747,57,95,8,1,1),(748,58,95,8,1,1),(749,55,95,8,1,1),(750,56,93,6,2,1),(753,57,94,6,1,1),(754,56,94,6,1,1),(766,55,NULL,6,5,1),(768,57,NULL,6,5,1),(769,56,NULL,6,5,1),(770,56,96,11,1,1),(789,55,NULL,19,1,1),(790,56,NULL,19,1,1),(791,57,NULL,19,2,1),(793,57,NULL,21,1,1),(794,56,NULL,21,2,1),(795,55,NULL,21,1,1),(798,55,NULL,22,1,1),(799,56,NULL,22,1,1),(801,56,99,8,1,1),(803,59,97,11,1,1),(804,55,101,11,1,1),(805,62,NULL,6,8,1),(806,61,NULL,6,5,1),(807,59,NULL,6,1,1),(811,58,98,14,1,1),(814,56,NULL,9,1,1),(815,61,100,8,1,1),(816,58,102,8,1,1),(817,62,NULL,8,2,1),(818,61,NULL,8,1,1),(824,61,103,14,1,1),(825,63,104,14,1,1),(827,56,NULL,14,1,1),(828,63,NULL,9,1,1),(829,55,NULL,7,4,1),(830,63,NULL,7,4,1),(831,60,NULL,7,1,1),(832,58,NULL,7,1,1),(833,62,NULL,7,1,1);
/*!40000 ALTER TABLE `product_details` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `products`
--

DROP TABLE IF EXISTS `products`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `products` (
  `id` int NOT NULL AUTO_INCREMENT,
  `product_name` varchar(100) DEFAULT NULL,
  `product_price` bigint DEFAULT NULL,
  `product_description` varchar(500) DEFAULT NULL,
  `pet_type` varchar(50) NOT NULL,
  `product_date_added` varchar(100) DEFAULT NULL,
  `product_stocks` bigint DEFAULT NULL,
  `product_image_url` varchar(500) NOT NULL,
  `product_image_id` varchar(100) NOT NULL,
  `total_sales` bigint NOT NULL DEFAULT '0',
  `unit_sales` bigint NOT NULL DEFAULT '0',
  `category_id` int DEFAULT NULL,
  `age_limit_id` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_category_id` (`category_id`),
  KEY `fk_age_limit_id` (`age_limit_id`),
  CONSTRAINT `fk_age_limit_id` FOREIGN KEY (`age_limit_id`) REFERENCES `product_age_limit` (`id`) ON DELETE SET NULL,
  CONSTRAINT `fk_category_id` FOREIGN KEY (`category_id`) REFERENCES `product_category` (`id`) ON DELETE SET NULL
) ENGINE=InnoDB AUTO_INCREMENT=64 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `products`
--

LOCK TABLES `products` WRITE;
/*!40000 ALTER TABLE `products` DISABLE KEYS */;
INSERT INTO `products` VALUES (55,'Pedigree Dry Dog Food Adult Chicken Chunks 1Kg Value Pack',128,'Pedigree Active Urinary tract control Weight control','Dog','2022-09-30',4,'http://res.cloudinary.com/iamprogrammer/image/upload/v1664546116/topnotch_productImg/izukl6xeo75obccxk40e.jpg','topnotch_productImg/izukl6xeo75obccxk40e',21128,43,5,2),(56,'Dog Clothes Four-legged Pet Cotton Coat Non-allergic',189,'Featuring a high elastic material design, the pet costume is comfortable to wear and is perfect for dogs. Your pet will be absolutely fashionable and attractive ..','Dog','2022-09-30',3,'http://res.cloudinary.com/iamprogrammer/image/upload/v1664546146/topnotch_productImg/uwz4sdorlh3aet65xj7s.jpg','topnotch_productImg/uwz4sdorlh3aet65xj7s',7269,60,6,4),(57,'Premium Pet Oatmeal Shampoo',276,'Comprehensive anti itch formula: oatmeal, baking soda, and aloe vera based pet shampoo with coconut provides instant itch relief!','Both','2022-09-30',5,'http://res.cloudinary.com/iamprogrammer/image/upload/v1664546180/topnotch_productImg/jje6doltiafiz0s4p0yf.jpg','topnotch_productImg/jje6doltiafiz0s4p0yf',6360,53,8,5),(58,'Teething Toy',67,'Dog toys for teething puppies','Dog','2022-10-03',3,'http://res.cloudinary.com/iamprogrammer/image/upload/v1665844858/topnotch_productImg/xk6bkblnieezv2ge9io5.jpg','topnotch_productImg/xk6bkblnieezv2ge9io5',975,10,9,2),(59,'Electronic USB Charging Simulation Bouncing Cat Toys',159,'With high-quality material, this ornament is durable and not easy to damage. This toy does not contain toxic and harmful thing and material, and it is healthy and safe for pets','Cat','2022-10-31',6,'http://res.cloudinary.com/iamprogrammer/image/upload/v1667204190/topnotch_productImg/npa2kucej0fmunltishq.jpg','topnotch_productImg/npa2kucej0fmunltishq',159,1,5,4),(60,'Whiskas Tuna Flavor 1kg Cat Dry Food',160,'Delicious meaty pockets and complete and balanced nutrition for your furry friend','Cat','2022-10-31',1,'http://res.cloudinary.com/iamprogrammer/image/upload/v1667204643/topnotch_productImg/spjr13es6xbh9kwomipd.jpg','topnotch_productImg/spjr13es6xbh9kwomipd',0,0,5,5),(61,'Meow Mix',160,'With the delicious flavors of chicken, turkey, salmon, and ocean fish, cats ask for Meow Mix Original Choice cat food by name. It’s the perfect mix to help you connect with your cat over a healthy meal.','Cat','2022-11-01',8,'http://res.cloudinary.com/iamprogrammer/image/upload/v1667307260/topnotch_productImg/fytn1hs01vidj4k78lus.jpg','topnotch_productImg/fytn1hs01vidj4k78lus',320,2,5,6),(62,'Plastic Cat / Dog Pet Bowl',75,'Environmentally friendly materials, non-toxic and tasteless, safely feeding and drinking water to pets','both','2022-11-01',8,'http://res.cloudinary.com/iamprogrammer/image/upload/v1667307681/topnotch_productImg/kcgrnzbdohewawhyihdi.webp','topnotch_productImg/kcgrnzbdohewawhyihdi',0,0,7,6),(63,'product 1',555,'......','Dog','2022-11-07',4,'http://res.cloudinary.com/iamprogrammer/image/upload/v1667829909/topnotch_productImg/drohchwwirytqliivues.jpg','topnotch_productImg/drohchwwirytqliivues',555,1,8,11);
/*!40000 ALTER TABLE `products` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `yearly_sales`
--

DROP TABLE IF EXISTS `yearly_sales`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `yearly_sales` (
  `yearlyID` int NOT NULL AUTO_INCREMENT,
  `overall_sales` bigint DEFAULT NULL,
  `year` varchar(20) DEFAULT NULL,
  PRIMARY KEY (`yearlyID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `yearly_sales`
--

LOCK TABLES `yearly_sales` WRITE;
/*!40000 ALTER TABLE `yearly_sales` DISABLE KEYS */;
/*!40000 ALTER TABLE `yearly_sales` ENABLE KEYS */;
UNLOCK TABLES;
SET @@SESSION.SQL_LOG_BIN = @MYSQLDUMP_TEMP_LOG_BIN;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-11-13 17:09:57
