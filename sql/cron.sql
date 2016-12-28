-- phpMyAdmin SQL Dump
-- version 4.2.12deb2+deb8u2
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: Dec 11, 2016 at 06:56 AM
-- Server version: 10.0.28-MariaDB-0+deb8u1
-- PHP Version: 5.6.27-0+deb8u1

SET FOREIGN_KEY_CHECKS=0;
SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";

--
-- Database: `pacificnm_camper`
--

-- --------------------------------------------------------

--
-- Table structure for table `cron`
--

CREATE TABLE IF NOT EXISTS `cron` (
`cron_id` int(11) unsigned NOT NULL,
  `cron_minute` int(3) unsigned NOT NULL,
  `cron_hour` int(3) unsigned NOT NULL,
  `cron_dom` int(3) unsigned NOT NULL,
  `cron_month` int(3) NOT NULL,
  `cron_command` varchar(255) NOT NULL,
  `cron_run_once` int(3) NOT NULL,
  `cron_last_run` int(11) NOT NULL,
  `cron_status` int(3) NOT NULL DEFAULT '0',
  `cron_enabled` int(3) NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=2;

--
-- Dumping data for table `cron`
--

INSERT INTO `cron` (`cron_id`, `cron_minute`, `cron_hour`, `cron_dom`, `cron_month`, `cron_command`, `cron_run_once`, `cron_last_run`, `cron_status`, `cron_enabled`) VALUES
(1, 0, 0, 0, 0, 'console.php update --install', 1, 1477356542, 0, 0);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `cron`
--
ALTER TABLE `cron`
 ADD PRIMARY KEY (`cron_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `cron`
--
ALTER TABLE `cron`
MODIFY `cron_id` int(11) unsigned NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=2;SET FOREIGN_KEY_CHECKS=1;
