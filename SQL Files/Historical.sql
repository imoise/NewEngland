create table Historical
(OrderNumber INT(10) UNSIGNED ZEROFILL auto_increment,
Username VARCHAR(15) NOT NULL,
historicalSite VARCHAR(25) NOT NULL, 

adultNumber TINYINT NOT NULL,
adultPrice FLOAT(5,2) NOT NULL,

childNumber TINYINT NOT NULL,
childPrice FLOAT(5,2) NOT NULL,

total float(6,2) NOT NULL,
CreditCard BIGINT(16) NOT NULL,
PRIMARY KEY(OrderNumber),
FOREIGN KEY(Username)REFERENCES Login(Username)
);
INSERT into Historical VALUES (NULL,'isaac7777','John Paul Jones House', 5, 30.00, 4, 0.00, 30.00, 1234567890123456);
INSERT into Historical VALUES (NULL,'april8788','Plimoth Plantation', 1, 28.00, 1, 16.00, 44.00, 1111222233334444);
INSERT into Historical VALUES (NULL,'nick1234','Paul Revere House', 3, 18.00, 0, 0.00, 18.00, 9999999999999999);