DROP DATABASE IF EXISTS dev;
CREATE DATABASE dev;
USE dev;

CREATE TABLE `Item` (
    `item_id` INT unsigned NOT NULL AUTO_INCREMENT,
    `name` TEXT NOT NULL,
    `price` DOUBLE unsigned NOT NULL,
    `quantity` INT unsigned NOT NULL,
    PRIMARY KEY (`item_id`)
);

CREATE TABLE `PaymentInfo` (
    `payment_id` INT unsigned NOT NULL AUTO_INCREMENT,
    `card_num` TEXT NOT NULL,
    `exp_date` TEXT(5) NOT NULL,
    `cvv` INT unsigned NOT NULL,
    `card_name` TEXT NOT NULL,
    PRIMARY KEY (`payment_id`)
);

CREATE TABLE `ShippingInfo` (
    `address_id` INT unsigned NOT NULL AUTO_INCREMENT,
    `name` TEXT NOT NULL,
    `addr_1` TEXT NOT NULL,
    `addr_2` TEXT NOT NULL,
    `city` TEXT NOT NULL,
    `state` TEXT(2) NOT NULL,
    `zip` TEXT(9) NOT NULL,
    PRIMARY KEY (`address_id`)
);

CREATE TABLE `Order` (
    `order_id` INT unsigned NOT NULL AUTO_INCREMENT,
    `date` DATE NOT NULL,
    `total_price` DOUBLE unsigned NOT NULL,
    `item_ids` TEXT NOT NULL,
    `payment_id` INT unsigned NOT NULL,
    `address_id` INT unsigned NOT NULL,
    FOREIGN KEY (`payment_id`) REFERENCES PaymentInfo(`payment_id`),
    FOREIGN KEY (`address_id`) REFERENCES ShippingInfo(`address_id`),
    PRIMARY KEY (`order_id`)
);
