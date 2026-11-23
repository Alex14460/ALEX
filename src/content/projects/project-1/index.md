---
title: "Crypto Mining Farm"
summary: "Building and operating a small-scale GPU & ASIC mining operation from sourcing to resale"
titleFr: "Ferme de mining crypto"
summaryFr: "Construction et exploitation d'une petite opération de mining GPU & ASIC, du sourcing des cartes à la revente du matériel"
date: "2017-06-01"
draft: false
tags:
- Crypto
- Hardware
- GPU Mining
- ASIC
- Linux
- Budgeting
---

Between 2017 and 2018, I designed, built, and operated a small cryptocurrency mining farm from the ground up, managing everything from hardware sourcing to financial tracking and eventual resale of the equipment.

The operation consisted of seven mining units (specifications at the end of this article):

Six custom GPU rigs running a total of 36 GPUs for Ethereum and SiaCoin mining.
One Antminer L3+ ASIC dedicated to Litecoin mining.

The project was built during a period of severe GPU shortages, which made sourcing hardware one of the biggest challenges. I tracked inventory across suppliers in France, Germany, and Spain, compared prices and shipping costs, and assembled the rigs from individually selected components rather than buying prebuilt systems. GPUs and power supplies were chosen for their tuning potential, power efficiency, and overall mining performance, while the rest of the platform was optimized for cost: the goal was a stable, reliable setup with no unnecessary bottlenecks and the lowest possible cost per rig.

Beyond the hardware, I managed the operational and financial side of the project: tracking roughly €17,000 in total investment, including mining equipment, electrical infrastructure, shelving, and shipping, while maintaining a detailed ledger to split costs and revenue with a business partner. When the operation was eventually shut down, I handled the resale of GPUs, power supplies, and other components through eBay and private sales. Thanks largely to the Antminer L3+, which was resold at a substantial premium during the ASIC shortage, the project reached roughly break-even on the hardware investment.

## Recovered from an old drive

A few photos I managed to recover years later. These are some of the only surviving pictures from the mining operation, showing the GTX 1070 rigs and the improvised, small-scale logistics behind the project.

|                                                           |                                                          |                                                                |                                                                                                                       |
| --------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- |
| ![GTX 1070 mining rig — PSU and motherboard on the board below](/projects/mining/mining1.jpeg) | ![The wire mesh cut to fit inside the shelf](/projects/mining/mining2.jpeg) | ![Rig with network switch and monitoring station](/projects/mining/mining3.jpeg) | ![Incoming GPU and PSU inventory — the bootstrapped beginnings of the project](/projects/mining/mining4.jpeg) |
| *GTX 1070 mining rig — PSU and motherboard are on the board below.* | *The wire mesh was cut to fit inside the shelf.* | *With the network switch and the monitoring station.* | *Incoming GPU & PSU inventory : a reminder of the project’s very hands-on, bootstrapped beginnings.* |

For better ventilation, the GPUs were later suspended individually by fastening them directly to the wire shelving, which significantly improved airflow and reduced operating temperatures.


### Machine 1–2 (2 identical rigs)

* **Motherboard:** ASRock H81 Pro BTC R2.0 (LGA1150)
* **CPU:** Intel Celeron G1840
* **Memory:** 4 GB HyperX Fury DDR3-1333
* **Storage:** 120 GB SanDisk SSD (SDSSDA-120G-G26)
* **GPUs:** 6× MSI GeForce GTX 1070 Gaming X 8 GB
* **Power Supply:** Cooler Master V1200 (1200 W, 80+ Platinum)
* **PCIe Risers:** 6× USB 3.0 PCIe x1-to-x16 (60 cm)
* **Power Switch:** ATX On/Off/Reset button (50 cm)

### Machine 3–5 (3 identical rigs)

* **Motherboard:** ASRock H81 Pro BTC R2.0 (LGA1150)
* **CPU:** Intel Celeron G1840
* **Memory:** 4 GB HyperX Fury DDR3-1333
* **Storage:** 120 GB SanDisk SSD (SDSSDA-120G-G26)
* **GPUs:** 6× Gigabyte Radeon RX 470 G1 Gaming 4 GB
* **Power Supply:** Seasonic P-1050 Platinum (1050 W, 80+ Platinum)
* **PCIe Risers:** 6× USB 3.0 PCIe x1-to-x16 (60 cm)
* **Power Switch:** ATX On/Off/Reset button (50 cm)

### Machine 6

* **Motherboard:** ASRock H81 Pro BTC R2.0 (LGA1150)
* **CPU:** Intel Celeron G1840
* **Memory:** 4 GB HyperX Fury DDR3-1333
* **Storage:** 120 GB SanDisk SSD (SDSSDA-120G-G26)
* **GPUs:** 6× Sapphire Nitro+ Radeon RX 470 4 GB
* **Power Supply:** Seasonic X-1250 (1250 W, 80+ Gold)
* **PCIe Risers:** 5× USB 3.0 PCIe x1-to-x16 (60 cm)
* **Power Switch:** ATX On/Off/Reset button (50 cm)
