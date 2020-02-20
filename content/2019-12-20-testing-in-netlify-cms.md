---
title: Hello Little Arduino
date: 2019-12-20T07:43:00.476Z
cover: /images/hello-little-arduino-cover.jpg
category: Robotics
tags:
  - robotics
  - arduino
  - node
  - javascript
---

# Write Your First Arduino Project

Hello everyone! My company is based of software development but also our another team is education based. We are giving robotic coding education to elementary/highschools. We have a website (<a href="https://mucitiz.biz" target="_blank">https://mucitiz.biz</a>) that has a lot of lessons about robotics  and 3D printers. We are redesigning this site and I am part of this. When I looking to site I wondered how these boards working, what kind of things can making with that. I searched on Google, I was little bit confused so finally I got all of ingredients from our office and start this post. Let's make 'a homemade light switch' together and see how do it works.
I will use Fedora but you can use any Linux distros, Windows or MacOs.

## Ingredients For Your Homemade Light Switch

1. Arduino UNO with USB port (You can buy on this site: <a href="https://www.direnc.net/arduino-uno-r3-smd" target="_blank">Direnc.net</a>)
2. Arduino IDE
3. OpenJDK
4. Git (It's not neccessary)
5. An Internet connection
6. “Root” access to the development machine
7. Node.js
8. Johnny-Five and narf

------------

## Let's Start

* Install Arduino IDE from <a href="https://www.arduino.cc/en/main/software" target="_blank">https://www.arduino.cc/en/main/software</a>, select your OS, download file and setup or install from command line `sudo dnf install arduino` 

*  Install openJDK from <a href="https://jdk.java.net/13/" target="_blank">https://jdk.java.net/13/</a> or from command line: `sudo dnf install java-11-openjdk.x86_64` (for detecting your Arduino Card).

* Plug the board to your computer with USB TTL serial cable (USB-A to USB-B).
* Let's check our device that connect to our PC correctly:

Our command is: `dmesg | tail` It will be list our all of connections. If you see like below output:

``` 
[fedora@localhost ~]$ dmesg | tail
[  144.148444] atkbd serio0: Use 'setkeycodes e02b <keycode>' to make it known.
[ 1079.091148] usb 1-1: USB disconnect, device number 5
[ 1079.092304] ch341-uart ttyUSB0: ch341-uart converter now disconnected from ttyUSB0
[ 1079.092381] ch341 1-1:1.0: device disconnected
[ 1081.563604] usb 1-1: new full-speed USB device number 7 using xhci_hcd
[ 1081.691846] usb 1-1: New USB device found, idVendor=1a86, idProduct=7523, bcdDevice= 2.54
[ 1081.691856] usb 1-1: New USB device strings: Mfr=0, Product=2, SerialNumber=0
[ 1081.691862] usb 1-1: Product: USB2.0-Serial
[ 1081.694861] ch341 1-1:1.0: ch341-uart converter detected
[ 1081.695788] usb 1-1: ch341-uart converter now attached to ttyUSB0
```

If you see something like this, congratulations! You device connected successfuly.

* Set up project workspace:

You will need to create and set up a project workspace for creating the Arduino application. For our project, we will be using Node.js as the language for creating the switch. There are several ways to create this kind of application, It doesn't matter, you can use any language for this, but to help get you started, I created an HTML page and the JavaScript file you can use for your own set up.
You can find my demo code available on GitLab. For this project, you will want a copy of the index.html and connectArduino.js files. You can copy and paste the two files into the project workspace you created earlier.
GitLab Project: <a href="https://gitlab.com/burakibis/hello-little-arduino" target="_blank">https://gitlab.com/burakibis/hello-little-arduino</a>

* Setting up Node.js

Now that we have our workspace and files needed for running the project, we will need to set up a Node.js server to run the application. To begin with running the “light switch server”, you will need to install Node.js and NPM, the package manager for Node.js applications.
Enter the following commands to install the necessary dependencies with Node package manager:
For installing Node.js:

``` bash
sudo dnf install npm nodejs
```

For building JSON API with Javscript:

``` bash
npm install narf
```

For connection to our Arduino board:

``` bash
npm install serialport
```

We need robotics framework for coding our board. We will use Johnny Five. Johnny-Five is an Open Source, Firmata Protocol based, IoT and Robotics programming framework, developed at Bocoup. Johnny-Five programs can be written for Arduino (all models), Electric Imp, Beagle Bone, Intel Galileo & Edison, Linino One, Pinoccio, pcDuino3, Raspberry Pi, Particle/Spark Core & Photon, Tessel 2, TI Launchpad and more!

``` bash
npm install johnny-five
```

For install all of dependencies:

``` bash
npm install
```

* Some of dependecies were changed and won't work correctly, so you can get a error like these:

``` bash
home/burak/Arduino/projects/hello-little-arduino/node_modules/pageserver/lib/pageserver.js:97
                    var type = mime.lookup(filepath);
                                    ^

TypeError: mime.lookup is not a function
    at /home/burak/Arduino/projects/hello-little-arduino/node_modules/pageserver/lib/pageserver.js:97:37
    at suppressedCallback (fs.js:199:5)
    at FSReqWrap.args [as oncomplete] (fs.js:140:20)
```

Don't worry!. We just fix a file on `YOUR_PATH/hello-little-arduino/node_modules/pageserver/lib/pageserver.js:97` 
In the new version of `mime` renamed some methods so we should go to file and change this line 
`var type = mime.lookup(filepath);` to `var type = mime.getType(filepath);` 
Save and close this file.

## FINAL

So we are ready for run our project! Let's do it: run `node connectArduino.js` on console and write 
`http://127.0.0.1:8079/index.html` to your browser.
TADA! You will see two button (On-Off). Click someone and look at your board's lights. Ehm.. You are awesome robotic programmer bro. Do more!

> Photo by Rock'n Roll Monkey on Unsplash
