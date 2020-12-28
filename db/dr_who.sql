-- phpMyAdmin SQL Dump
-- version 5.0.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Dec 13, 2020 at 08:23 PM
-- Server version: 10.4.16-MariaDB
-- PHP Version: 7.4.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `dr_who`
--
CREATE DATABASE IF NOT EXISTS `dr_who` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;
USE `dr_who`;

-- --------------------------------------------------------

--
-- Table structure for table `admin`
--

CREATE TABLE `admin` (
  `SSN` char(12) NOT NULL,
  `SHIFT` varchar(40) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `admin_manage_doctor`
--

CREATE TABLE `admin_manage_doctor` (
  `SSN` char(12) NOT NULL,
  `LICENSE_NUMBER` char(12) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `admin_manage_patient`
--

CREATE TABLE `admin_manage_patient` (
  `SSN` char(12) NOT NULL,
  `PATIENT_ID` char(12) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `application_list`
--

CREATE TABLE `application_list` (
  `PATIENT_ID` char(12) NOT NULL,
  `APPLICATION_ID` char(12) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `appointment`
--

CREATE TABLE `appointment` (
  `LICENSE_NUMBER` int(12) NOT NULL,
  `ID` int(12) NOT NULL,
  `IS_ACCEPTED` tinyint(1) NOT NULL DEFAULT 0,
  `DATE` date NOT NULL,
  `TIME` time NOT NULL,
  `LOCATION` varchar(40) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `doctors`
--

CREATE TABLE `doctors` (
  `SSN` char(12) NOT NULL,
  `LICENSE_NUMBER` char(8) NOT NULL,
  `LOCATION` varchar(120) DEFAULT NULL,
  `VISITING FEE` int(4) NOT NULL DEFAULT 0,
  `GRADUATED_COLLEGE` varchar(40) DEFAULT NULL,
  `SPECIALISED` varchar(40) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `patients`
--

CREATE TABLE `patients` (
  `SSN` char(12) NOT NULL,
  `PATIENT_ID` char(12) NOT NULL,
  `MEDICAL_REPORT` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL CHECK (json_valid(`MEDICAL_REPORT`)),
  `DIAGNOSED_DISEASE` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL CHECK (json_valid(`DIAGNOSED_DISEASE`))
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `patient_condition_history`
--

CREATE TABLE `patient_condition_history` (
  `SSN` char(12) NOT NULL,
  `SUPERVISING_DOCTOR` char(12) NOT NULL,
  `NAME` varchar(40) NOT NULL,
  `DATE` date NOT NULL,
  `TEADMENT_UNDERGONE` varchar(120) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `review`
--

CREATE TABLE `review` (
  `LICENSE_NUMBER` char(12) NOT NULL,
  `DOCTOR_NAME` char(12) NOT NULL,
  `RATINGS` double(10,2) NOT NULL,
  `COMMENTS` varchar(120) NOT NULL,
  `REVIEW_GIVEN_BY` char(12) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `review_given`
--

CREATE TABLE `review_given` (
  `DOCTOR_NAME` char(12) NOT NULL,
  `PATIENT_ID` char(12) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `SSN` char(12) NOT NULL,
  `NAME` varchar(40) NOT NULL,
  `EMAIL` varchar(40) NOT NULL,
  `BLOODGROUP` char(3) DEFAULT NULL,
  `PHONE_NUMBER` int(10) DEFAULT NULL,
  `PASSWORD` char(60) NOT NULL,
  `DATEOFBIRTH` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`SSN`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
