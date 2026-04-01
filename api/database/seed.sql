USE intern_work_1;


INSERT INTO services (service_name, service_description, service_price) VALUES
('Basic Wash', 'Exterior cleaning only', 5000),
('Full Wash', 'Interior and exterior cleaning', 10000),
('Engine Wash', 'Engine cleaning service', 15000),
('Polishing', 'Car body polishing', 20000);


INSERT INTO car (plate_number, type, model, manufacturing_year, driver_phone, mechanic_name) VALUES
('RAB123A', 'Sedan', 'Toyota Corolla', 2018, '0788123456', 'John'),
('RAC456B', 'SUV', 'Honda CR-V', 2020, '0788234567', 'Mike'),
('RAD789C', 'Truck', 'Isuzu NPR', 2015, '0788345678', 'Eric'),
('RAE321D', 'Sedan', 'Nissan Altima', 2019, '0788456789', 'David');


INSERT INTO service_record (service_date, car_id, service_id) VALUES
('2026-03-28', 1, 1),
('2026-03-29', 2, 2),
('2026-03-30', 3, 3),
('2026-03-31', 4, 4);


INSERT INTO payment (amount_paid, payment_date, record_number) VALUES
(5000, '2026-03-28', 1),
(10000, '2026-03-29', 2),
(15000, '2026-03-30', 3),
(20000, '2026-03-31', 4);