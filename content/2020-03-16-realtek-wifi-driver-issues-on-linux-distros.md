---
title: Realtek WIFI Driver Issues on Linux Distros
date: 2020-02-24T15:16:37.727Z
cover: /images/linux-meme.png
category: Linux
tags:
  - how to make
  - wifi
  - driver
  - linux
  - realtek
---
Hello there! When I was started my current job, they gave me HP Notebook (14-cf1015nt) for work pc. It has Realtek RTL8723DE wifi modem and has not any commercial wifi driver for Linux distros. So you should find 3rd party driver for wireless connection. It is terrible because you can't find ethernet cable at everywhere. Then we found solution for this issue. If you have one of aboves wifi modem models, you should read this tutorial.

* rtl8192ce,
* rtl8192cu, 
* rtl8192se, 
* rtl8192de, 
* rtl8188ee, 
* rtl8192ee, 
* rtl8723ae, 
* rtl8723be, 
* rtl8821ae, 
* rtl8723de

## Let's start!

We will use this repo for installation: <https://github.com/lwfinger/rtlwifi_new>

* Let's check the model of the Wi-Fi adapter:


```
lspci
```

* Let's make sure the following tools are installed, if not, let's install:


```
make, gcc, kernel headers,kernel build essentials, git
```



The steps are the same for all Linux distributions, but in the CentOS installation, the permission problem occurs during the creation of the driver file in Makefile's usr file.



```

git clone https://github.com/lwfinger/rtlwifi_new.git -b extended
cd rtlwifi_new
make
sudo make install
sudo modprobe -r <<YOUR WIRELESS DRIVER CODE>>
```

* Process completed.

## Extra for devices with RTL8723DE model adapter

* Devices with RTL8723DE model adapters experience signal problems after installation. To do this, the signal of the active antenna must be measured first:


```

DEVICE=$(iw dev | grep Interface | cut -d " " -f2)
sudo iw dev $DEVICE scan | egrep "SSID|signal|(on"
```

* If the signal strength is less than -60db, the antenna should be replaced as follows:


```

sudo su -
echo "options rtl8723de ant_sel=2" > /etc/modprobe.d/50-rtl8723de.conf
exit
```


After this stage, reboot is required. After reboot, steps 1 and 2 (signal measurement) should be done again, and antenna 1 should be selected according to the situation and rebooted and signal measurement should be done again.
