-- MySQL dump 10.13  Distrib 5.7.17, for Win64 (x86_64)
--
-- Host: localhost    Database: dbaulas
-- ------------------------------------------------------
-- Server version	5.7.18-log

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `usuario`
--

DROP TABLE IF EXISTS `usuario`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `usuario` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nomeUsuario` varchar(45) NOT NULL,
  `senhaUsuario` varchar(45) NOT NULL,
  `nome` varchar(20) NOT NULL,
  `sobrenome` varchar(40) NOT NULL,
  `telefone` varchar(15) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=27 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usuario`
--

LOCK TABLES `usuario` WRITE;
/*!40000 ALTER TABLE `usuario` DISABLE KEYS */;
INSERT INTO `usuario` VALUES (1,'asd','asdasda','sdasdas','dasdasd','asd'),(2,'asd','asdasd','sdasdas','dasdasd','asd'),(3,'adasd','sdasd','asdasda','sdasdasd','asda'),(4,'asdasdasdasda','dasasda','sdasdasda','sdsadasd','asdasd'),(5,'asdasdasd','adasd','asdasdasd','asdasd','asdadas'),(6,'dasda','sdasdas','dasdas','dasdasd','asdasd'),(7,'asdasdasdadas','dasdas','dasdasda','sdasdasd','asdasdads'),(8,'asdasdasdasd','asdas','dasdasdas','dasdasdasd','asdasdasd'),(9,'asdasdasdasdasdas','asdasd','asdasdasd','asdasdasda','asdasdads'),(10,'sdfsfs','fsddsf','sdfsdf','sdfsdfsd','fsdfsdf'),(11,'asdasdasdasdda','asdasda','sdasda','dasdasda','sdasdasd'),(12,'asdasdasdasdda','asdasda','sdasda','dasdasda','sdasdasd'),(13,'asdasdasdasdda','asdasd','sdasda','dasdasda','sdasdasd'),(14,'asdasdasdasdasdasas','asdasd','asdasda','sdasdasdas','dasdasd'),(15,'asdasdasdadasdasdad','adasd','asdasdasd','asdasd','asddassad'),(16,'asdasdasdadasdasdad','adasd','asdasdasd','asdasd','asddassad'),(17,'asdasdasdadasdasdad','asdasd','asdasdasd','asdasd','asddassad'),(18,'asdasdasd','asdgdsg','afgg','ggdgd','gdgdfg'),(19,'asdasdasd','asdgdsg','afgg','ggdgd','gdgdfg'),(20,'asdasdasdasdasd','sdasdasd','asdadsas','asdasdasd','asdasdasd'),(21,'bruno','1234','Bruno','Dias','17997310927'),(22,'asdasdd','asdasd','asdasdasd','asdasdas','asdasdas'),(23,'elza','4321','Elza','Reis','996014558'),(24,'gfdfg','dfgdfg','dfgdfg','dfgdfgdfg','dfgdfg'),(25,'Rogerio','11233','rogerio','dias','879654321'),(26,'sandra','987654','Sandra','Campos','564897312');
/*!40000 ALTER TABLE `usuario` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2018-01-18 19:17:09
