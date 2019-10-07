-- MySQL dump 10.13  Distrib 8.0.17, for macos10.14 (x86_64)
--
-- Host: localhost    Database: partymaker
-- ------------------------------------------------------
-- Server version	8.0.17

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `accounts`
--

DROP TABLE IF EXISTS `accounts`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `accounts` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `user_id` int(10) unsigned DEFAULT NULL,
  `instagram` varchar(60) DEFAULT NULL,
  `facebook` varchar(60) DEFAULT NULL,
  `telegram` varchar(60) DEFAULT NULL,
  `skype` varchar(60) DEFAULT NULL,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `accounts_user_id_foreign` (`user_id`),
  CONSTRAINT `accounts_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `accounts`
--

LOCK TABLES `accounts` WRITE;
/*!40000 ALTER TABLE `accounts` DISABLE KEYS */;
/*!40000 ALTER TABLE `accounts` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `adonis_schema`
--

DROP TABLE IF EXISTS `adonis_schema`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `adonis_schema` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `batch` int(11) DEFAULT NULL,
  `migration_time` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=339 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `adonis_schema`
--

LOCK TABLES `adonis_schema` WRITE;
/*!40000 ALTER TABLE `adonis_schema` DISABLE KEYS */;
INSERT INTO `adonis_schema` VALUES (323,'1514448267674_user',1,'2019-10-05 20:26:20'),(324,'1523248427886_token',1,'2019-10-05 20:26:20'),(325,'1550851247975_reset_token_schema',1,'2019-10-05 20:26:20'),(326,'1554518389860_entertainment_schema',1,'2019-10-05 20:26:20'),(327,'1554627056200_asset_schema',1,'2019-10-05 20:26:20'),(328,'1554629974894_place_schema',1,'2019-10-05 20:26:20'),(329,'1554630020426_room_schema',1,'2019-10-05 20:26:20'),(330,'1554630052481_message_schema',1,'2019-10-05 20:26:20'),(331,'1554630190253_social_schema',1,'2019-10-05 20:26:20'),(332,'1554631674368_account_schema',1,'2019-10-05 20:26:20'),(333,'1554646701988_order_schema',1,'2019-10-05 20:26:20'),(334,'1554876495821_room_user_schema',1,'2019-10-05 20:26:20'),(335,'1569067604262_rating_schema',1,'2019-10-05 20:26:20'),(336,'1569072186819_comment_schema',1,'2019-10-05 20:26:20'),(337,'1569076271949_photo_schema',1,'2019-10-05 20:26:20'),(338,'1569091214873_contact_schema',1,'2019-10-05 20:26:20');
/*!40000 ALTER TABLE `adonis_schema` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `assets`
--

DROP TABLE IF EXISTS `assets`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `assets` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `title` varchar(255) DEFAULT NULL,
  `url` varchar(255) DEFAULT NULL,
  `admin_id` int(10) unsigned NOT NULL,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `assets_admin_id_foreign` (`admin_id`),
  CONSTRAINT `assets_admin_id_foreign` FOREIGN KEY (`admin_id`) REFERENCES `users` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=78 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `assets`
--

LOCK TABLES `assets` WRITE;
/*!40000 ALTER TABLE `assets` DISABLE KEYS */;
INSERT INTO `assets` VALUES (1,NULL,'http://0.0.0.0:3333/uploads/1570313156232.png',3,'2019-10-06 01:06:16','2019-10-06 01:06:16'),(2,NULL,'http://0.0.0.0:3333/uploads/1570313234337.png',3,'2019-10-06 01:07:16','2019-10-06 01:07:16'),(3,NULL,'http://0.0.0.0:3333/uploads/1570314814134.png',3,'2019-10-06 01:33:34','2019-10-06 01:33:34'),(4,NULL,'http://0.0.0.0:3333/uploads/undefined',3,'2019-10-06 01:38:53','2019-10-06 01:38:53'),(5,NULL,'http://0.0.0.0:3333/uploads/1570316353047-bg21.jpg',3,'2019-10-06 01:59:22','2019-10-06 01:59:22'),(6,NULL,'http://0.0.0.0:3333/uploads/1570316452093-features.png.png',3,'2019-10-06 02:00:56','2019-10-06 02:00:56'),(7,NULL,'http://0.0.0.0:3333/uploads/1570317061902-features.png',3,'2019-10-06 02:11:01','2019-10-06 02:11:01'),(8,NULL,'http://0.0.0.0:3333/uploads/1570317767842-vel2.jpg',3,'2019-10-06 02:22:48','2019-10-06 02:22:48'),(10,NULL,'http://0.0.0.0:3333/uploads/1570317835939-vel2.jpg',3,'2019-10-06 02:23:56','2019-10-06 02:23:56'),(13,NULL,'http://0.0.0.0:3333/uploads/1570317962563-logo.png',3,'2019-10-06 02:26:02','2019-10-06 02:26:02'),(16,NULL,'http://0.0.0.0:3333/uploads/1570318041850-143-veloprokat',3,'2019-10-06 02:27:22','2019-10-06 02:27:22'),(17,NULL,'http://0.0.0.0:3333/uploads/1570321960851-vel2.jpg',3,'2019-10-06 03:32:41','2019-10-06 03:32:41'),(18,NULL,'http://0.0.0.0:3333/uploads/1570321997890-vel2.jpg',3,'2019-10-06 03:33:18','2019-10-06 03:33:18'),(20,NULL,'http://0.0.0.0:3333/uploads/1570359388537-vel2.jpg',3,'2019-10-06 13:56:28','2019-10-06 13:56:28'),(24,NULL,'http://0.0.0.0:3333/uploads/1570359789346-vel2.jpg',3,'2019-10-06 14:03:09','2019-10-06 14:03:09'),(25,NULL,'http://0.0.0.0:3333/uploads/1570359812142-vel2.jpg',3,'2019-10-06 14:03:32','2019-10-06 14:03:32'),(26,NULL,'http://0.0.0.0:3333/uploads/1570361523195-secondary-features.png',3,'2019-10-06 14:32:03','2019-10-06 14:32:03'),(27,NULL,'http://0.0.0.0:3333/uploads/1570362869981-cropped-Club-Block-Post..jpg',3,'2019-10-06 14:54:30','2019-10-06 14:54:30'),(28,NULL,'http://0.0.0.0:3333/uploads/1570363356557-Pejntbol-TSeny-Zaporozhe.jpg',3,'2019-10-06 15:02:36','2019-10-06 15:02:36'),(29,NULL,'http://0.0.0.0:3333/uploads/1570363507469-Club-Block-Post-Paintball.jpg',3,'2019-10-06 15:05:07','2019-10-06 15:05:07'),(30,NULL,'http://0.0.0.0:3333/uploads/1570363563187-Paintball-Club-Block-Post..jpg',3,'2019-10-06 15:06:03','2019-10-06 15:06:03'),(31,NULL,'http://0.0.0.0:3333/uploads/1570388845246-3mn3ujqvpbi_138779813189.jpg',3,'2019-10-06 22:07:25','2019-10-06 22:07:25'),(32,NULL,'http://0.0.0.0:3333/uploads/1570389015009-15a43592e37e7c.jpg',3,'2019-10-06 22:10:15','2019-10-06 22:10:15'),(33,NULL,'http://0.0.0.0:3333/uploads/1570389025922-8a99f1e506000aac50730822268d6f0d.jpg',3,'2019-10-06 22:10:26','2019-10-06 22:10:26'),(34,NULL,'http://0.0.0.0:3333/uploads/1570389036199-aa7f09adbc327b8edfada366ae5e728f.jpg',3,'2019-10-06 22:10:36','2019-10-06 22:10:36'),(35,NULL,'http://0.0.0.0:3333/uploads/1570389125031-26d6797174b40085f843c6fa028fe511.jpg',3,'2019-10-06 22:12:05','2019-10-06 22:12:05'),(36,NULL,'http://0.0.0.0:3333/uploads/1570389138133-7b02c4a2fdf663241d0430cac88e63be.jpg',3,'2019-10-06 22:12:18','2019-10-06 22:12:18'),(37,NULL,'http://0.0.0.0:3333/uploads/1570389148833-8ed267564410d3d751c782e8471f4721.jpg',3,'2019-10-06 22:12:28','2019-10-06 22:12:28'),(38,NULL,'http://0.0.0.0:3333/uploads/1570389165006-efb66f34762a8f2e20394ab3f4039d7e.jpg',3,'2019-10-06 22:12:45','2019-10-06 22:12:45'),(39,NULL,'http://0.0.0.0:3333/uploads/1570389174700-04614e65de2779bd0bc2b55debb2d4b1.jpg',3,'2019-10-06 22:12:54','2019-10-06 22:12:54'),(40,NULL,'http://0.0.0.0:3333/uploads/1570389183489-62bb04f50fbf5ecd62216e7b414e5548.jpg',3,'2019-10-06 22:13:03','2019-10-06 22:13:03'),(41,NULL,'http://0.0.0.0:3333/uploads/1570389191183-6637376b36529299f9b35f585ff13fce.JPG',3,'2019-10-06 22:13:11','2019-10-06 22:13:11'),(42,NULL,'http://0.0.0.0:3333/uploads/1570389231247-d6d99a23c14442f73c78048b3506bd1e.jpg',3,'2019-10-06 22:13:51','2019-10-06 22:13:51'),(43,NULL,'http://0.0.0.0:3333/uploads/1570389995885-ST1A7563-1-475x345.jpg.pagespeed.ce.0fihG92whO.jpg',3,'2019-10-06 22:26:36','2019-10-06 22:26:36'),(44,NULL,'http://0.0.0.0:3333/uploads/1570390448979-image.png',3,'2019-10-06 22:34:08','2019-10-06 22:34:08'),(45,NULL,'http://0.0.0.0:3333/uploads/1570390508134-image.png',3,'2019-10-06 22:35:08','2019-10-06 22:35:08'),(46,NULL,'http://0.0.0.0:3333/uploads/1570390551591-ST1A7563-1-475x345.jpg.pagespeed.ce.0fihG92whO.jpg',3,'2019-10-06 22:35:51','2019-10-06 22:35:51'),(47,NULL,'http://0.0.0.0:3333/uploads/1570390567760-ST1A7503-1-475x345.jpg.pagespeed.ce.zVE6e8YLwz.jpg',3,'2019-10-06 22:36:08','2019-10-06 22:36:08'),(48,NULL,'http://0.0.0.0:3333/uploads/1570390585456-ST1A7509-1-475x345.jpg.pagespeed.ce.2Zd8CajIIx.jpg',3,'2019-10-06 22:36:25','2019-10-06 22:36:25'),(49,NULL,'http://0.0.0.0:3333/uploads/1570390624131-image.png',3,'2019-10-06 22:37:04','2019-10-06 22:37:04'),(50,NULL,'http://0.0.0.0:3333/uploads/1570390816175-AF1QipOK5f9gSmTDdptcPb7xaGxjM8upVFla-b-k_Ifh=s873-k-no',3,'2019-10-06 22:40:16','2019-10-06 22:40:16'),(53,NULL,'http://0.0.0.0:3333/uploads/1570392775499-AF1QipN1RPciBzA4Ai3LaxXwnm9HLRpNwujbFUfYvE1q=w203-h304-k-no',3,'2019-10-06 23:12:55','2019-10-06 23:12:55'),(54,NULL,'http://0.0.0.0:3333/uploads/1570393066051-AF1QipN1RPciBzA4Ai3LaxXwnm9HLRpNwujbFUfYvE1q=s1354-k-no',3,'2019-10-06 23:17:46','2019-10-06 23:17:46'),(55,NULL,'http://0.0.0.0:3333/uploads/1570393100076-AF1QipOhCtkakhmDiQCMdErEvjiQkmyVVO5EZPjq4z7r=s1031-p-k-no',3,'2019-10-06 23:18:20','2019-10-06 23:18:20'),(56,NULL,'http://0.0.0.0:3333/uploads/1570393152817-AF1QipNX1GS93fZfdxqTgShB52wy2SZdNWeqiB_D48fN=s901-k-no',3,'2019-10-06 23:19:13','2019-10-06 23:19:13'),(57,NULL,'http://0.0.0.0:3333/uploads/1570393166247-AF1QipOcNYbRP8tvan0GjPm98kckq74EqmDhBTgaoFDr=s1536',3,'2019-10-06 23:19:26','2019-10-06 23:19:26'),(58,NULL,'http://0.0.0.0:3333/uploads/1570393221550-AF1QipOBsZR92Pma1p9pXEpa3id28D-7Li5vlyhY_kAq=s901-k-no',3,'2019-10-06 23:20:21','2019-10-06 23:20:21'),(59,NULL,'http://0.0.0.0:3333/uploads/1570393234452-AF1QipPidlY4n2kkqm-nGLJIzrkGI4zxTTuGf5vtzyaI=s1024',3,'2019-10-06 23:20:34','2019-10-06 23:20:34'),(60,NULL,'http://0.0.0.0:3333/uploads/1570393261522-AF1QipPl7SgzUl1_kJpDu9HlJJWY0nK7S_I0gJmcmxZH=w406-h541-k-no',3,'2019-10-06 23:21:01','2019-10-06 23:21:01'),(61,NULL,'http://0.0.0.0:3333/uploads/1570393290412-AF1QipOBsZR92Pma1p9pXEpa3id28D-7Li5vlyhY_kAq=s901-k-no',3,'2019-10-06 23:21:30','2019-10-06 23:21:30'),(62,NULL,'http://0.0.0.0:3333/uploads/1570394009304-int1.jpg',3,'2019-10-06 23:33:30','2019-10-06 23:33:30'),(63,NULL,'http://0.0.0.0:3333/uploads/1570394010802-int1.jpg',3,'2019-10-06 23:33:32','2019-10-06 23:33:32'),(64,NULL,'http://0.0.0.0:3333/uploads/1570394256175-AF1QipP92rekvSsGf5QqNx-cZFyJ-HVv4JZKg2CY4bg=s1024',3,'2019-10-06 23:37:36','2019-10-06 23:37:36'),(65,NULL,'http://0.0.0.0:3333/uploads/1570394302847-AF1QipO_klKbDzliX8o5Ux2MVJ_rGsDIrorarK-raqI=s1160-k-no-pi0-ya201.79001-ro0-fo100',3,'2019-10-06 23:38:23','2019-10-06 23:38:23'),(66,NULL,'http://0.0.0.0:3333/uploads/1570394319438-AF1QipNFZJat8PXXJXxeMUAatncogdvKqSHrzR3r5hs=s937-k-no',3,'2019-10-06 23:38:39','2019-10-06 23:38:39'),(67,NULL,'http://0.0.0.0:3333/uploads/1570394352984-AF1QipNQ_vl1Zer2CrKQV6FfO5djBkWr6mHJJOW1beM=s870-k-no',3,'2019-10-06 23:39:13','2019-10-06 23:39:13'),(68,NULL,'http://0.0.0.0:3333/uploads/1570394375375-AF1QipMpWTYTKmy3YpEh5jL6MsE4p4CJNH4y8-jCdPyL=s1354-k-no',3,'2019-10-06 23:39:35','2019-10-06 23:39:35'),(69,NULL,'http://0.0.0.0:3333/uploads/1570394390831-AF1QipNoQB3-y1websvW_k5NC_95O8BGvXKsDPV2XVs=s1160-k-no-pi0-ya317.24-ro0-fo100',3,'2019-10-06 23:39:51','2019-10-06 23:39:51'),(70,NULL,'http://0.0.0.0:3333/uploads/1570394534091-int12.jpg',3,'2019-10-06 23:42:15','2019-10-06 23:42:15'),(71,NULL,'http://0.0.0.0:3333/uploads/1570396162745-getlstd-property-photo.jpg',3,'2019-10-07 00:09:23','2019-10-07 00:09:23'),(72,NULL,'http://0.0.0.0:3333/uploads/1570396706752-image.png',3,'2019-10-07 00:18:26','2019-10-07 00:18:26'),(73,NULL,'http://0.0.0.0:3333/uploads/1570396804593-map-zaporozhye.jpg',3,'2019-10-07 00:20:05','2019-10-07 00:20:05'),(74,NULL,'http://0.0.0.0:3333/uploads/1570396826215-review-video-3.jpg',3,'2019-10-07 00:20:26','2019-10-07 00:20:26'),(75,NULL,'http://0.0.0.0:3333/uploads/1570396850031-review-video-2.jpg',3,'2019-10-07 00:20:50','2019-10-07 00:20:50'),(76,NULL,'http://0.0.0.0:3333/uploads/1570396954638-AF1QipN2EIQ_akp0WGhX8M8LdYWTqaEIzFNvXxXF0fk-=s1536',3,'2019-10-07 00:22:35','2019-10-07 00:22:35'),(77,NULL,'http://0.0.0.0:3333/uploads/1570396978455-AF1QipOAebJnYkNvAn0x2v42-nauFOoBGHbFBvpxD3WM=s873-k-no',3,'2019-10-07 00:22:58','2019-10-07 00:22:58');
/*!40000 ALTER TABLE `assets` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `comments`
--

DROP TABLE IF EXISTS `comments`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `comments` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `place_id` int(10) unsigned DEFAULT NULL,
  `user_id` int(10) unsigned DEFAULT NULL,
  `text` varchar(255) DEFAULT NULL,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `comments_place_id_foreign` (`place_id`),
  KEY `comments_user_id_foreign` (`user_id`),
  CONSTRAINT `comments_place_id_foreign` FOREIGN KEY (`place_id`) REFERENCES `places` (`id`) ON DELETE CASCADE,
  CONSTRAINT `comments_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `comments`
--

LOCK TABLES `comments` WRITE;
/*!40000 ALTER TABLE `comments` DISABLE KEYS */;
INSERT INTO `comments` VALUES (5,10,3,'Четко','2019-10-06 20:31:44','2019-10-06 20:31:44');
/*!40000 ALTER TABLE `comments` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `contacts`
--

DROP TABLE IF EXISTS `contacts`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `contacts` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `website_url` varchar(255) DEFAULT NULL,
  `address` varchar(255) DEFAULT NULL,
  `instagram_url` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `map_url` text,
  `phone` varchar(255) DEFAULT NULL,
  `place_id` int(10) unsigned DEFAULT NULL,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `contacts_place_id_foreign` (`place_id`),
  CONSTRAINT `contacts_place_id_foreign` FOREIGN KEY (`place_id`) REFERENCES `places` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `contacts`
--

LOCK TABLES `contacts` WRITE;
/*!40000 ALTER TABLE `contacts` DISABLE KEYS */;
INSERT INTO `contacts` VALUES (8,'http://www.laser-tag.zp.ua/paintball/','г. Запорожье, ул. Ореховая Бухта 20а, яхт-клуб «Новая Волна»','https://www.instagram.com/lazertagzp/','','https://www.google.com/maps/place/Klub+%22Blok-Post%22+Peyntbol,Lazertag,TIR,Arenda+besedok./@47.7976408,35.167646,15z/data=!4m2!3m1!1s0x0:0xd3cabe72da827682?sa=X&ved=2ahUKEwi84-S6z4flAhXQwqYKHVnnAe0Q_BIwCnoECA8QCA','+380961039348',10,'2019-10-06 15:18:13','2019-10-06 15:22:46'),(9,'https://armada.061.ua','Запорожье, Улица Лермонтова, 24','','armadazp@gmail.com','https://www.google.com/maps/place/Armada/@47.8393507,35.1239921,15z/data=!4m2!3m1!1s0x0:0xdd839d788d171961?sa=X&ved=2ahUKEwielqTjqIjlAhVrw8QBHeupCEIQ_BIwCnoECA8QCA','+380992872233',11,'2019-10-06 22:17:54','2019-10-06 22:17:54'),(10,'https://armada.061.ua','Запорожье, Улица Лермонтова, 24','','armadazp@gmail.com','https://www.google.com/maps/place/Armada/@47.8393507,35.1239921,15z/data=!4m2!3m1!1s0x0:0xdd839d788d171961?sa=X&ved=2ahUKEwielqTjqIjlAhVrw8QBHeupCEIQ_BIwCnoECA8QCA','+380992872233',11,'2019-10-06 22:17:59','2019-10-06 22:17:59'),(11,'https://armada.061.ua','Запорожье, Улица Лермонтова, 24','','armadazp@gmail.com','https://www.google.com/maps/place/Armada/@47.8393507,35.1239921,15z/data=!4m2!3m1!1s0x0:0xdd839d788d171961?sa=X&ved=2ahUKEwielqTjqIjlAhVrw8QBHeupCEIQ_BIwCnoECA8QCA','+380992872233',11,'2019-10-06 22:18:00','2019-10-06 22:18:00'),(12,'https://sem.zp.ua/',' Украина, г. Запорожье, ул. Школьная, 4','','hotelsem123@gmail.com','https://www.google.com/search?q=%D0%B1%D0%B8%D0%BB%D1%8C%D1%8F%D1%80%D0%B4%20%D0%B7%D0%B0%D0%BF%D0%BE%D1%80%D0%BE%D0%B6%D1%8C%D0%B5&oq=%D0%B1%D0%B8%D0%BB%D1%8C%D1%8F&aqs=chrome.0.69i59l2j69i57j69i61l3.1584j0j4&sourceid=chrome&ie=UTF-8&sxsrf=ACYBGNQu3VfuXFEL7HoqVTi114f3FnTKMQ:1570389597669&npsic=0&rflfq=1&rlha=0&rllag=47839183,35125086,2646&tbm=lcl&rldimm=938506653898609240&phdesc=1tf8saGVA0I&ved=2ahUKEwiA34KRrYjlAhVjysQBHbYhBtIQvS4wAXoECAoQMA&rldoc=1&tbs=lrf:!2m1!1e2!2m1!1e3!2m1!1e16!3sIAE,lf:1,lf_ui:1&rlst=f#rlfi=hd:;si:938506653898609240,y,1tf8saGVA0I;mv:[[47.89071938210176,35.19867931249996],[47.79924377958391,34.982385977539025],null,[47.84500174584985,35.09053264501949],13];tbs:lrf:!2m1!1e2!2m1!1e3!2m1!1e16!3sIAE,lf:1,lf_ui:1','+380684179904',12,'2019-10-06 22:41:26','2019-10-06 22:41:26'),(13,'http://bastion-pub.com.ua/','Центральная Крепость (ул. Правды 45А)','https://www.instagram.com/PUB_BASTION/','contact@bastion.com','https://www.google.com/search?sa=X&biw=1100&bih=939&sxsrf=ACYBGNQe6VHF1xciQEXS6yvy9cN0uStPIA:1570392993142&q=%D0%B1%D0%B8%D0%BB%D1%8C%D1%8F%D1%80%D0%B4+%D0%B7%D0%B0%D0%BF%D0%BE%D1%80%D0%BE%D0%B6%D1%8C%D0%B5&npsic=0&rflfq=1&rlha=0&rllag=47830901,35143272,1717&tbm=lcl&ved=2ahUKEwjBgI7kuYjlAhVbw8QBHRgAA_oQjGp6BAgKEDs&tbs=lrf:!2m1!1e2!2m1!1e3!3sIAE,lf:1,lf_ui:1&rldoc=1#rlfi=hd:;si:14572612279272191033,y,OuT7cyf5ius;mv:[[47.8892119,35.2251504],[47.7749417,35.0529637]]','+380612361148',13,'2019-10-06 23:21:41','2019-10-06 23:21:41'),(14,'http://sternbier.zp.ua/','улица Ладожская, 12A, Запорожье','','','https://www.google.com/search?sa=X&biw=1100&bih=939&sxsrf=ACYBGNQe6VHF1xciQEXS6yvy9cN0uStPIA:1570392993142&q=%D0%B1%D0%B8%D0%BB%D1%8C%D1%8F%D1%80%D0%B4+%D0%B7%D0%B0%D0%BF%D0%BE%D1%80%D0%BE%D0%B6%D1%8C%D0%B5&npsic=0&rflfq=1&rlha=0&rllag=47830901,35143272,1717&tbm=lcl&ved=2ahUKEwjBgI7kuYjlAhVbw8QBHRgAA_oQjGp6BAgKEDs&tbs=lrf:!2m1!1e2!2m1!1e3!3sIAE,lf:1,lf_ui:1&rldoc=1#rlfi=hd:;si:3859290648189454242,y,Ujt1o70tWbc;mv:[[48.00451854802913,35.246650615576186],[47.82180815416676,34.81406394565431],null,[47.913243991704604,35.03035728061525],12]','+380612892985',14,'2019-10-06 23:45:11','2019-10-06 23:45:11'),(15,'https://cubevr.com.ua/zaporozhye.html','г. Запорожье, ул. Победы, 63','','','https://www.google.com/maps/place/CUBE/@47.8390314,35.1235606,15z/data=!4m2!3m1!1s0x0:0xb0d01a50a57d48?sa=X&ved=2ahUKEwjzqu7dxYjlAhUi0aYKHSlYAE8Q_BIwHHoECA0QCA','+380672508090',15,'2019-10-07 00:23:53','2019-10-07 00:23:53');
/*!40000 ALTER TABLE `contacts` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `entertainments`
--

DROP TABLE IF EXISTS `entertainments`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `entertainments` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `title` varchar(255) DEFAULT NULL,
  `is_active` tinyint(1) DEFAULT '1',
  `order` int(11) DEFAULT NULL,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `entertainments`
--

LOCK TABLES `entertainments` WRITE;
/*!40000 ALTER TABLE `entertainments` DISABLE KEYS */;
INSERT INTO `entertainments` VALUES (1,'Пейнтбол',1,0,'2019-10-05 23:26:23','2019-10-06 21:44:48'),(3,'Пострелять из лука',1,2,'2019-10-05 23:26:23','2019-10-06 21:44:48'),(4,'Прокат каяк',1,3,'2019-10-05 23:26:23','2019-10-06 21:44:48'),(5,'Прокат велосипедов',1,4,'2019-10-05 23:26:23','2019-10-06 21:44:48'),(6,'Сауны',1,5,'2019-10-05 23:26:23','2019-10-06 21:44:48'),(7,'Покататься на гидроциклах, яхте',1,6,'2019-10-05 23:26:23','2019-10-06 21:44:48'),(8,'Бильярд',1,1,'2019-10-06 21:44:43','2019-10-06 21:44:48'),(9,'Компьютерные клубы',1,NULL,'2019-10-07 00:08:09','2019-10-07 00:08:09');
/*!40000 ALTER TABLE `entertainments` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `messages`
--

DROP TABLE IF EXISTS `messages`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `messages` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `text` text NOT NULL,
  `token` varchar(255) DEFAULT NULL,
  `user_id` int(10) unsigned DEFAULT NULL,
  `room_id` int(10) unsigned NOT NULL,
  `asset_id` int(10) unsigned DEFAULT NULL,
  `place_id` int(10) unsigned DEFAULT NULL,
  `is_read` tinyint(1) DEFAULT '0',
  `date` date DEFAULT NULL,
  `time` varchar(255) DEFAULT NULL,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `messages_user_id_foreign` (`user_id`),
  KEY `messages_room_id_foreign` (`room_id`),
  KEY `messages_asset_id_foreign` (`asset_id`),
  KEY `messages_place_id_foreign` (`place_id`),
  CONSTRAINT `messages_asset_id_foreign` FOREIGN KEY (`asset_id`) REFERENCES `assets` (`id`) ON DELETE CASCADE,
  CONSTRAINT `messages_place_id_foreign` FOREIGN KEY (`place_id`) REFERENCES `places` (`id`),
  CONSTRAINT `messages_room_id_foreign` FOREIGN KEY (`room_id`) REFERENCES `rooms` (`id`) ON DELETE CASCADE,
  CONSTRAINT `messages_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=17 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `messages`
--

LOCK TABLES `messages` WRITE;
/*!40000 ALTER TABLE `messages` DISABLE KEYS */;
INSERT INTO `messages` VALUES (1,'Привет, Давай пригласим сюда твоих друзей и посмотрим что они скажут насчет этого всего?\nСкинь им вот эту ссылку что бы пригласить\n\nhttp://localhost:3000/invite/6bQobOOpAoF0MY4jqL298BiC6dyMtHng\n    ',NULL,1,1,NULL,NULL,0,NULL,NULL,'2019-10-05 23:26:23','2019-10-05 23:26:23'),(2,'Привет, Давай пригласим сюда твоих друзей и посмотрим что они скажут насчет этого всего?\nСкинь им вот эту ссылку что бы пригласить\n\nhttp://localhost:3000/invite/zydxYpe19La9G3ACnBqOb81qmE4r3P4R\n    ',NULL,1,2,NULL,NULL,0,NULL,NULL,'2019-10-05 23:26:23','2019-10-05 23:26:23'),(3,'А можно написать так?','temp-e6fk6i8k1e0co9c',2,2,NULL,NULL,0,NULL,NULL,'2019-10-05 23:26:23','2019-10-05 23:26:23'),(4,'Что?','temp-e6fk6i8k1e0co9d',4,2,NULL,NULL,0,NULL,NULL,'2019-10-05 23:26:23','2019-10-05 23:26:23'),(5,'<Frame styles=\"{{...}}/\">','temp-e6fk6i8k1e0co9e',2,2,NULL,NULL,0,NULL,NULL,'2019-10-05 23:26:23','2019-10-05 23:26:23'),(6,'Или classNe?','temp-e6fk6i8k1e0co9f',2,2,NULL,NULL,0,NULL,NULL,'2019-10-05 23:26:23','2019-10-05 23:26:23'),(7,'Чё?)','temp-e6fk6i8k1e0co9g',4,2,NULL,NULL,0,NULL,NULL,'2019-10-05 23:26:23','2019-10-05 23:26:23'),(8,'Ну к примеру проверки делать','temp-e6fk6i8k1e0co9h',2,2,NULL,NULL,0,NULL,NULL,'2019-10-05 23:26:23','2019-10-05 23:26:23'),(9,'Нет - другие','temp-e6fk6i8k1e0co9i',2,2,NULL,NULL,0,NULL,NULL,'2019-10-05 23:26:23','2019-10-05 23:26:23'),(10,'Ну как в обычном у нас?','temp-e6fk6i8k1e0co9j',4,2,NULL,NULL,0,NULL,NULL,'2019-10-05 23:26:23','2019-10-05 23:26:23'),(11,'Привет, Давай пригласим сюда твоих друзей и посмотрим что они скажут насчет этого всего?\nСкинь им вот эту ссылку что бы пригласить\n\nhttp://localhost:3000/invite/HOFYoDhezkWP8LwiZn1OEIHGLDw0MAkl\n    ',NULL,1,3,NULL,NULL,0,NULL,NULL,'2019-10-06 20:46:53','2019-10-06 20:46:53'),(12,'Super Admin покинул событие',NULL,NULL,2,NULL,NULL,0,NULL,NULL,'2019-10-06 20:47:09','2019-10-06 20:47:09'),(13,'Super Admin покинул событие',NULL,NULL,1,NULL,NULL,0,NULL,NULL,'2019-10-06 20:47:12','2019-10-06 20:47:12'),(14,'Super Admin покинул событие',NULL,NULL,3,NULL,NULL,0,NULL,NULL,'2019-10-06 20:47:19','2019-10-06 20:47:19'),(15,'Привет, Давай пригласим сюда твоих друзей и посмотрим что они скажут насчет этого всего?\nСкинь им вот эту ссылку что бы пригласить\n\nhttp://localhost:3000/invite/6xALcppns7YTS1v2JLrKXjWWdjaVZlwI\n    ',NULL,1,4,NULL,NULL,0,NULL,NULL,'2019-10-06 21:13:44','2019-10-06 21:13:44'),(16,'Привет, Давай пригласим сюда твоих друзей и посмотрим что они скажут насчет этого всего?\nСкинь им вот эту ссылку что бы пригласить\n\nhttp://localhost:3000/invite/NHL6Ou7Rh8SK3HyC2WXpPh8uvRSEIEFC\n    ',NULL,1,5,NULL,NULL,0,NULL,NULL,'2019-10-06 23:01:08','2019-10-06 23:01:08');
/*!40000 ALTER TABLE `messages` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `orders`
--

DROP TABLE IF EXISTS `orders`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `orders` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `date` date DEFAULT NULL,
  `state` varchar(255) DEFAULT 'pending',
  `time` varchar(255) DEFAULT NULL,
  `phone` varchar(255) DEFAULT NULL,
  `guests` int(11) DEFAULT NULL,
  `token` varchar(255) DEFAULT NULL,
  `place_id` int(10) unsigned DEFAULT NULL,
  `room_id` int(10) unsigned DEFAULT NULL,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `orders_place_id_foreign` (`place_id`),
  KEY `orders_room_id_foreign` (`room_id`),
  CONSTRAINT `orders_place_id_foreign` FOREIGN KEY (`place_id`) REFERENCES `places` (`id`) ON DELETE CASCADE,
  CONSTRAINT `orders_room_id_foreign` FOREIGN KEY (`room_id`) REFERENCES `rooms` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `orders`
--

LOCK TABLES `orders` WRITE;
/*!40000 ALTER TABLE `orders` DISABLE KEYS */;
/*!40000 ALTER TABLE `orders` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `photos`
--

DROP TABLE IF EXISTS `photos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `photos` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `url` varchar(255) DEFAULT NULL,
  `place_id` int(10) unsigned NOT NULL,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `photos_place_id_foreign` (`place_id`),
  CONSTRAINT `photos_place_id_foreign` FOREIGN KEY (`place_id`) REFERENCES `places` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=44 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `photos`
--

LOCK TABLES `photos` WRITE;
/*!40000 ALTER TABLE `photos` DISABLE KEYS */;
INSERT INTO `photos` VALUES (2,'http://0.0.0.0:3333/uploads/1570363356557-Pejntbol-TSeny-Zaporozhe.jpg',10,'2019-10-06 15:02:36','2019-10-06 15:02:36'),(3,'http://0.0.0.0:3333/uploads/1570363507469-Club-Block-Post-Paintball.jpg',10,'2019-10-06 15:05:07','2019-10-06 15:05:07'),(4,'http://0.0.0.0:3333/uploads/1570363563187-Paintball-Club-Block-Post..jpg',10,'2019-10-06 15:06:03','2019-10-06 15:06:03'),(5,'http://0.0.0.0:3333/uploads/1570389015009-15a43592e37e7c.jpg',11,'2019-10-06 22:10:15','2019-10-06 22:10:15'),(6,'http://0.0.0.0:3333/uploads/1570389025922-8a99f1e506000aac50730822268d6f0d.jpg',11,'2019-10-06 22:10:26','2019-10-06 22:10:26'),(7,'http://0.0.0.0:3333/uploads/1570389036199-aa7f09adbc327b8edfada366ae5e728f.jpg',11,'2019-10-06 22:10:36','2019-10-06 22:10:36'),(8,'http://0.0.0.0:3333/uploads/1570389125031-26d6797174b40085f843c6fa028fe511.jpg',11,'2019-10-06 22:12:05','2019-10-06 22:12:05'),(9,'http://0.0.0.0:3333/uploads/1570389138133-7b02c4a2fdf663241d0430cac88e63be.jpg',11,'2019-10-06 22:12:18','2019-10-06 22:12:18'),(10,'http://0.0.0.0:3333/uploads/1570389148833-8ed267564410d3d751c782e8471f4721.jpg',11,'2019-10-06 22:12:29','2019-10-06 22:12:29'),(11,'http://0.0.0.0:3333/uploads/1570389165006-efb66f34762a8f2e20394ab3f4039d7e.jpg',11,'2019-10-06 22:12:45','2019-10-06 22:12:45'),(12,'http://0.0.0.0:3333/uploads/1570389174700-04614e65de2779bd0bc2b55debb2d4b1.jpg',11,'2019-10-06 22:12:54','2019-10-06 22:12:54'),(13,'http://0.0.0.0:3333/uploads/1570389183489-62bb04f50fbf5ecd62216e7b414e5548.jpg',11,'2019-10-06 22:13:03','2019-10-06 22:13:03'),(14,'http://0.0.0.0:3333/uploads/1570389191183-6637376b36529299f9b35f585ff13fce.JPG',11,'2019-10-06 22:13:11','2019-10-06 22:13:11'),(15,'http://0.0.0.0:3333/uploads/1570389231247-d6d99a23c14442f73c78048b3506bd1e.jpg',11,'2019-10-06 22:13:51','2019-10-06 22:13:51'),(17,'http://0.0.0.0:3333/uploads/1570390508134-image.png',12,'2019-10-06 22:35:08','2019-10-06 22:35:08'),(18,'http://0.0.0.0:3333/uploads/1570390551591-ST1A7563-1-475x345.jpg.pagespeed.ce.0fihG92whO.jpg',12,'2019-10-06 22:35:51','2019-10-06 22:35:51'),(19,'http://0.0.0.0:3333/uploads/1570390567760-ST1A7503-1-475x345.jpg.pagespeed.ce.zVE6e8YLwz.jpg',12,'2019-10-06 22:36:08','2019-10-06 22:36:08'),(20,'http://0.0.0.0:3333/uploads/1570390585456-ST1A7509-1-475x345.jpg.pagespeed.ce.2Zd8CajIIx.jpg',12,'2019-10-06 22:36:25','2019-10-06 22:36:25'),(21,'http://0.0.0.0:3333/uploads/1570390624131-image.png',12,'2019-10-06 22:37:04','2019-10-06 22:37:04'),(22,'http://0.0.0.0:3333/uploads/1570390816175-AF1QipOK5f9gSmTDdptcPb7xaGxjM8upVFla-b-k_Ifh=s873-k-no',12,'2019-10-06 22:40:16','2019-10-06 22:40:16'),(23,'http://0.0.0.0:3333/uploads/1570393066051-AF1QipN1RPciBzA4Ai3LaxXwnm9HLRpNwujbFUfYvE1q=s1354-k-no',13,'2019-10-06 23:17:46','2019-10-06 23:17:46'),(24,'http://0.0.0.0:3333/uploads/1570393100076-AF1QipOhCtkakhmDiQCMdErEvjiQkmyVVO5EZPjq4z7r=s1031-p-k-no',13,'2019-10-06 23:18:20','2019-10-06 23:18:20'),(25,'http://0.0.0.0:3333/uploads/1570393152817-AF1QipNX1GS93fZfdxqTgShB52wy2SZdNWeqiB_D48fN=s901-k-no',13,'2019-10-06 23:19:13','2019-10-06 23:19:13'),(26,'http://0.0.0.0:3333/uploads/1570393166247-AF1QipOcNYbRP8tvan0GjPm98kckq74EqmDhBTgaoFDr=s1536',13,'2019-10-06 23:19:26','2019-10-06 23:19:26'),(28,'http://0.0.0.0:3333/uploads/1570393234452-AF1QipPidlY4n2kkqm-nGLJIzrkGI4zxTTuGf5vtzyaI=s1024',13,'2019-10-06 23:20:34','2019-10-06 23:20:34'),(29,'http://0.0.0.0:3333/uploads/1570393261522-AF1QipPl7SgzUl1_kJpDu9HlJJWY0nK7S_I0gJmcmxZH=w406-h541-k-no',13,'2019-10-06 23:21:01','2019-10-06 23:21:01'),(30,'http://0.0.0.0:3333/uploads/1570393290412-AF1QipOBsZR92Pma1p9pXEpa3id28D-7Li5vlyhY_kAq=s901-k-no',13,'2019-10-06 23:21:30','2019-10-06 23:21:30'),(31,'http://0.0.0.0:3333/uploads/1570394256175-AF1QipP92rekvSsGf5QqNx-cZFyJ-HVv4JZKg2CY4bg=s1024',14,'2019-10-06 23:37:36','2019-10-06 23:37:36'),(32,'http://0.0.0.0:3333/uploads/1570394302847-AF1QipO_klKbDzliX8o5Ux2MVJ_rGsDIrorarK-raqI=s1160-k-no-pi0-ya201.79001-ro0-fo100',14,'2019-10-06 23:38:23','2019-10-06 23:38:23'),(33,'http://0.0.0.0:3333/uploads/1570394319438-AF1QipNFZJat8PXXJXxeMUAatncogdvKqSHrzR3r5hs=s937-k-no',14,'2019-10-06 23:38:39','2019-10-06 23:38:39'),(34,'http://0.0.0.0:3333/uploads/1570394352984-AF1QipNQ_vl1Zer2CrKQV6FfO5djBkWr6mHJJOW1beM=s870-k-no',14,'2019-10-06 23:39:13','2019-10-06 23:39:13'),(35,'http://0.0.0.0:3333/uploads/1570394375375-AF1QipMpWTYTKmy3YpEh5jL6MsE4p4CJNH4y8-jCdPyL=s1354-k-no',14,'2019-10-06 23:39:35','2019-10-06 23:39:35'),(36,'http://0.0.0.0:3333/uploads/1570394390831-AF1QipNoQB3-y1websvW_k5NC_95O8BGvXKsDPV2XVs=s1160-k-no-pi0-ya317.24-ro0-fo100',14,'2019-10-06 23:39:51','2019-10-06 23:39:51'),(37,'http://0.0.0.0:3333/uploads/1570394534091-int12.jpg',14,'2019-10-06 23:42:15','2019-10-06 23:42:15'),(38,'http://0.0.0.0:3333/uploads/1570396706752-image.png',15,'2019-10-07 00:18:26','2019-10-07 00:18:26'),(39,'http://0.0.0.0:3333/uploads/1570396804593-map-zaporozhye.jpg',15,'2019-10-07 00:20:05','2019-10-07 00:20:05'),(40,'http://0.0.0.0:3333/uploads/1570396826215-review-video-3.jpg',15,'2019-10-07 00:20:26','2019-10-07 00:20:26'),(41,'http://0.0.0.0:3333/uploads/1570396850031-review-video-2.jpg',15,'2019-10-07 00:20:50','2019-10-07 00:20:50'),(42,'http://0.0.0.0:3333/uploads/1570396954638-AF1QipN2EIQ_akp0WGhX8M8LdYWTqaEIzFNvXxXF0fk-=s1536',15,'2019-10-07 00:22:35','2019-10-07 00:22:35'),(43,'http://0.0.0.0:3333/uploads/1570396978455-AF1QipOAebJnYkNvAn0x2v42-nauFOoBGHbFBvpxD3WM=s873-k-no',15,'2019-10-07 00:22:58','2019-10-07 00:22:58');
/*!40000 ALTER TABLE `photos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `places`
--

DROP TABLE IF EXISTS `places`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `places` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `title` varchar(255) DEFAULT NULL,
  `picture_url` varchar(255) DEFAULT NULL,
  `working_hours` varchar(255) DEFAULT NULL,
  `price` varchar(255) DEFAULT NULL,
  `admin_id` int(10) unsigned DEFAULT NULL,
  `entertainment_id` int(10) unsigned DEFAULT NULL,
  `is_active` tinyint(1) DEFAULT '1',
  `description` text,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `places_admin_id_foreign` (`admin_id`),
  KEY `places_entertainment_id_foreign` (`entertainment_id`),
  CONSTRAINT `places_admin_id_foreign` FOREIGN KEY (`admin_id`) REFERENCES `users` (`id`),
  CONSTRAINT `places_entertainment_id_foreign` FOREIGN KEY (`entertainment_id`) REFERENCES `entertainments` (`id`) ON DELETE SET NULL
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `places`
--

LOCK TABLES `places` WRITE;
/*!40000 ALTER TABLE `places` DISABLE KEYS */;
INSERT INTO `places` VALUES (10,'Клуб БЛОК-ПОСТ','http://0.0.0.0:3333/uploads/1570362869981-cropped-Club-Block-Post..jpg',' ','310 грн / 300 шаров',3,1,1,NULL,'2019-10-06 14:59:48','2019-10-06 20:52:33'),(11,'Клуб Армада','http://0.0.0.0:3333/uploads/1570388845246-3mn3ujqvpbi_138779813189.jpg','ежедневно 10:00 - 02:00','45 грн / час',3,8,1,NULL,'2019-10-06 22:07:26','2019-10-06 22:09:07'),(12,'Клуб СЕМ','http://0.0.0.0:3333/uploads/1570389995885-ST1A7563-1-475x345.jpg.pagespeed.ce.0fihG92whO.jpg','ежедневно','60 грн / час',NULL,8,1,NULL,'2019-10-06 22:28:41','2019-10-06 22:28:41'),(13,'Паб «Бастион: Центральная крепость»','http://0.0.0.0:3333/uploads/1570392775499-AF1QipN1RPciBzA4Ai3LaxXwnm9HLRpNwujbFUfYvE1q=w203-h304-k-no','без выходных, с 11:00 до 00:00','70 грн / час',3,8,1,NULL,'2019-10-06 23:14:48','2019-10-06 23:30:31'),(14,'Пивоварня - STERNBIER','http://0.0.0.0:3333/uploads/1570394010802-int1.jpg','ежедневно с 11:00 до 23:00','70 грн / час',3,8,1,NULL,'2019-10-06 23:36:10','2019-10-06 23:45:33'),(15,'CUBE - Virtual Reality Club','http://0.0.0.0:3333/uploads/1570396162745-getlstd-property-photo.jpg','ежедневно с 12:00 до 23:00','200 грн / час',NULL,9,1,NULL,'2019-10-07 00:13:48','2019-10-07 00:13:48');
/*!40000 ALTER TABLE `places` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `ratings`
--

DROP TABLE IF EXISTS `ratings`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `ratings` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `place_id` int(10) unsigned DEFAULT NULL,
  `user_id` int(10) unsigned DEFAULT NULL,
  `rating` int(11) DEFAULT NULL,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `ratings_place_id_user_id_unique` (`place_id`,`user_id`),
  KEY `ratings_user_id_foreign` (`user_id`),
  CONSTRAINT `ratings_place_id_foreign` FOREIGN KEY (`place_id`) REFERENCES `places` (`id`) ON DELETE CASCADE,
  CONSTRAINT `ratings_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ratings`
--

LOCK TABLES `ratings` WRITE;
/*!40000 ALTER TABLE `ratings` DISABLE KEYS */;
/*!40000 ALTER TABLE `ratings` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `reset_tokens`
--

DROP TABLE IF EXISTS `reset_tokens`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `reset_tokens` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `user_id` int(10) unsigned DEFAULT NULL,
  `token` varchar(255) NOT NULL,
  `type` varchar(80) NOT NULL,
  `is_revoked` tinyint(1) DEFAULT '0',
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `reset_tokens_token_unique` (`token`),
  KEY `reset_tokens_user_id_foreign` (`user_id`),
  KEY `reset_tokens_token_index` (`token`),
  CONSTRAINT `reset_tokens_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `reset_tokens`
--

LOCK TABLES `reset_tokens` WRITE;
/*!40000 ALTER TABLE `reset_tokens` DISABLE KEYS */;
/*!40000 ALTER TABLE `reset_tokens` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `room_user`
--

DROP TABLE IF EXISTS `room_user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `room_user` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `user_id` int(10) unsigned DEFAULT NULL,
  `room_id` int(10) unsigned DEFAULT NULL,
  `last_seen` datetime DEFAULT NULL,
  `is_online` tinyint(1) DEFAULT '0',
  PRIMARY KEY (`id`),
  KEY `room_user_user_id_foreign` (`user_id`),
  KEY `room_user_room_id_foreign` (`room_id`),
  CONSTRAINT `room_user_room_id_foreign` FOREIGN KEY (`room_id`) REFERENCES `rooms` (`id`) ON DELETE CASCADE,
  CONSTRAINT `room_user_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=26 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `room_user`
--

LOCK TABLES `room_user` WRITE;
/*!40000 ALTER TABLE `room_user` DISABLE KEYS */;
INSERT INTO `room_user` VALUES (1,6,1,NULL,0),(3,2,1,NULL,0),(4,3,1,NULL,0),(5,4,1,NULL,0),(6,5,1,NULL,0),(7,7,1,NULL,0),(8,8,1,NULL,0),(9,9,1,NULL,0),(10,10,1,NULL,0),(11,11,1,NULL,0),(12,6,2,NULL,0),(14,2,2,NULL,0),(15,3,2,NULL,0),(16,4,2,NULL,0),(17,5,2,NULL,0),(18,7,2,NULL,0),(19,8,2,NULL,0),(20,9,2,NULL,0),(21,10,2,NULL,0),(22,11,2,NULL,0),(24,1,4,'2019-10-06 21:14:28',0),(25,1,5,'2019-10-06 23:01:16',0);
/*!40000 ALTER TABLE `room_user` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `rooms`
--

DROP TABLE IF EXISTS `rooms`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `rooms` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `title` varchar(255) DEFAULT NULL,
  `invite_token` varchar(255) DEFAULT NULL,
  `place_id` int(10) unsigned DEFAULT NULL,
  `date` date DEFAULT NULL,
  `time` varchar(255) DEFAULT NULL,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `rooms_place_id_foreign` (`place_id`),
  CONSTRAINT `rooms_place_id_foreign` FOREIGN KEY (`place_id`) REFERENCES `places` (`id`) ON DELETE SET NULL
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `rooms`
--

LOCK TABLES `rooms` WRITE;
/*!40000 ALTER TABLE `rooms` DISABLE KEYS */;
INSERT INTO `rooms` VALUES (1,'Сыграть в Пейнтбол','6bQobOOpAoF0MY4jqL298BiC6dyMtHng',NULL,NULL,NULL,'2019-10-05 23:26:23','2019-10-05 23:26:23'),(2,'Полетать','zydxYpe19La9G3ACnBqOb81qmE4r3P4R',NULL,NULL,NULL,'2019-10-05 23:26:23','2019-10-05 23:26:23'),(3,'Пейнтбол','HOFYoDhezkWP8LwiZn1OEIHGLDw0MAkl',10,NULL,NULL,'2019-10-06 20:46:53','2019-10-06 20:46:53'),(4,'Пейнтбол','6xALcppns7YTS1v2JLrKXjWWdjaVZlwI',10,NULL,NULL,'2019-10-06 21:13:44','2019-10-06 21:13:56'),(5,'Бильярд','NHL6Ou7Rh8SK3HyC2WXpPh8uvRSEIEFC',12,NULL,NULL,'2019-10-06 23:01:08','2019-10-06 23:01:08');
/*!40000 ALTER TABLE `rooms` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `socials`
--

DROP TABLE IF EXISTS `socials`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `socials` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `user_id` int(10) unsigned DEFAULT NULL,
  `provider_id` varchar(255) DEFAULT NULL,
  `provider` varchar(255) DEFAULT NULL,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `socials_user_id_foreign` (`user_id`),
  CONSTRAINT `socials_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `socials`
--

LOCK TABLES `socials` WRITE;
/*!40000 ALTER TABLE `socials` DISABLE KEYS */;
/*!40000 ALTER TABLE `socials` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tokens`
--

DROP TABLE IF EXISTS `tokens`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tokens` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `user_id` int(10) unsigned DEFAULT NULL,
  `token` varchar(255) NOT NULL,
  `type` varchar(80) NOT NULL,
  `is_revoked` tinyint(1) DEFAULT '0',
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `tokens_token_unique` (`token`),
  KEY `tokens_user_id_foreign` (`user_id`),
  KEY `tokens_token_index` (`token`),
  CONSTRAINT `tokens_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tokens`
--

LOCK TABLES `tokens` WRITE;
/*!40000 ALTER TABLE `tokens` DISABLE KEYS */;
INSERT INTO `tokens` VALUES (1,1,'f5a04e19-63ed-4b1d-9728-6c65643f36eb','jwt_refresh_token',0,'2019-10-06 20:41:07','2019-10-06 20:41:07');
/*!40000 ALTER TABLE `tokens` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(254) NOT NULL,
  `email` varchar(254) NOT NULL,
  `phone` varchar(60) DEFAULT NULL,
  `password` varchar(60) DEFAULT NULL,
  `avatar_url` varchar(254) DEFAULT NULL,
  `is_active` tinyint(1) DEFAULT '0',
  `is_superadmin` tinyint(1) DEFAULT '0',
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `users_email_unique` (`email`),
  UNIQUE KEY `users_phone_unique` (`phone`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'Super Admin','admin@mailinator.com','+380683188524','$2a$10$vW9kjkW7GWqVHYpbCbNwHuNiW3FTavYM8blBjQcqh4THkj67gfoLm','/images/dummy/pavliha.jpg',1,1,'2019-10-05 23:26:22','2019-10-05 23:26:22'),(2,'Aleksey Lukovka','lukerlexa@gmail.com','+380990848975','$2a$10$JiuMcC7ld6CvZRtwU9m7POkbnanYBCAP4.oHBHFmcf/eK3GgdeJhK','/images/dummy/aleksey.jpeg',1,1,'2019-10-05 23:26:22','2019-10-05 23:26:22'),(3,'Аня Форостьюянова','aforostanova@gmail.com','+380971766908','$2a$10$SOBy5wPMFRjBlT1KzhpnvunsAXK2MNtTcZVqpyjr3GyGNCXCrB/Ka','/images/dummy/anya.jpg',1,1,'2019-10-05 23:26:22','2019-10-05 23:26:22'),(4,'Regular User','regular@mailinator.com','+380000000001','$2a$10$PVh1pO4KoYIck.EpRf2nzOJoPKUDWutDZw9P5Ugeeo7ZgN.gJwYHe','/images/dummy/regular.png',1,0,'2019-10-05 23:26:22','2019-10-05 23:26:22'),(5,'New User','new@mailinator.com','+380000000002','$2a$10$y20FaBYfV4W7nyDj34Tyfe/zUz1BwoDiBota5JJRDlsCUNxSLgGnm','/images/dummy/regular.png',0,0,'2019-10-05 23:26:22','2019-10-05 23:26:22'),(6,'Partymaker','bot@partymaker.zp.ua','+380555555555','$2a$10$EeJhdN9Lt0Zvs7ezek6Hg.OAep5PWt.cfy7r6YABSkpGrWUKVqQtS','/images/logo_big.png',1,1,'2019-10-05 23:26:22','2019-10-05 23:26:22'),(7,'Hallie Gibbs','lud@tehihaju.hn','9399789296','$2a$10$d1ZU5T/Ql2aT/ND.5l29guLBFTBpmD90/TAF9DDDjikeYOcuss3Iq','//www.gravatar.com/avatar/cf8de8cb9fea3306ed81a864ebc0d9b0',0,0,'2019-10-05 23:26:23','2019-10-05 23:26:23'),(8,'Mittie Vaughn','apuvidom@uh.gu','6597713514','$2a$10$3cH0pquxiyPsEAcdvoGNPuceaaVI3nFcVMRRRLHcvFfSkd/zmVUym','//www.gravatar.com/avatar/7b8a70c54634683f35fe14d315d51438',0,0,'2019-10-05 23:26:23','2019-10-05 23:26:23'),(9,'Mattie Moran','de@usi.fk','2372091742','$2a$10$fEa2fveW0VbJZCxZeGCeEOYjlB9iUa2X3jBZVaOsPwIPChWD5k25C','//www.gravatar.com/avatar/6c398f18a4c18ea6f62f91b03828b2dd',0,0,'2019-10-05 23:26:23','2019-10-05 23:26:23'),(10,'Harold Jacobs','didpi@potofu.mu','9326137500','$2a$10$MFTYAEOUIxToSJ6avIyRK.sazNafRHKI2JDw8a43bHLkmQYEnkswm','//www.gravatar.com/avatar/57ed8f884b1a5aa9576ad4cbcd1faa36',0,0,'2019-10-05 23:26:23','2019-10-05 23:26:23'),(11,'Louisa McKinney','gos@ap.bh','6285687611','$2a$10$E24nL3WmYQD8Szg0HQojTuzUXNTDThYL75H0/VXqXqJ1VxLzZbyCS','//www.gravatar.com/avatar/c9f0476959ebbc36acb64e34f8b450b5',0,0,'2019-10-05 23:26:23','2019-10-05 23:26:23');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2019-10-07 14:31:17
