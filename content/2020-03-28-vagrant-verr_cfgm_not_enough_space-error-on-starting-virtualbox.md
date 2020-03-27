---
title: Vagrant VERR_CFGM_NOT_ENOUGH_SPACE Error On Starting VirtualBox
date: 2020-03-27T20:30:41.127Z
cover: /images/vagrant-custom.png
category: DevOps
tags:
  - vagrant
  - linux
  - devops
  - virtualbox
  - error
---
Hello, newcomers to DevOps!
If you started DevOps with no errors, there is a problem and you will get a lot of errors soon, haha! Fortunately, every errors have a good solution so I will talk about the solution of an error I encountered. I cloned a project that run on VagrantBox from Gitlab, I run `vagrant up` command but VBoxManage excepted below error.

```shell
==> default: Checking if box 'ubuntu/bionic64' version '20200116.1.0' 
    is up to date...
==> default: Clearing any previously set forwarded ports...
==> default: Clearing any previously set network interfaces...
==> default: Preparing network interfaces based on configuration...
    default: Adapter 1: nat
==> default: Forwarding ports...
    default: 80 (guest) => 9000 (host) (adapter 1)
    default: 15672 (guest) => 15672 (host) (adapter 1)
    default: 10000 (guest) => 10000 (host) (adapter 1)
    default: 22 (guest) => 2222 (host) (adapter 1)
==> default: Running 'pre-boot' VM customizations...
==> default: Booting VM...
There was an error while executing `VBoxManage`, a CLI used by Vagrant
for controlling VirtualBox. The command and stderr is shown below.

Command: ["startvm", "e8676714-20e6-46fc-8098-975394d1cba6", "--type", "headless"]

Stderr: VBoxManage: error: The specified string / bytes buffer 
was to small. Specify a larger one and retry. (VERR_CFGM_NOT_ENOUGH_SPACE)
VBoxManage: error: Details: code NS_ERROR_FAILURE (0x80004005),
component ConsoleWrap, interface IConsole
```

I searched on Google and I learnt, after Virtualbox 5.8.2 virtual machine names has a maximum size. Here you heard, the error thrown is actually about the length of the name of the box created. So funny. But you can easily fix this. Open your and find Vagrantbox file on your repo root, add this line to inside of "Provider-specific configuration" block (it's important):

```vagrant
  # Provider-specific configuration so you can fine-tune various
  # backing providers for Vagrant. These expose provider-specific options.
  # Example for VirtualBox:
  #
  config.vm.provider "virtualbox" do |vb|
  #   # Display the VirtualBox GUI when booting the machine
  #   vb.gui = true
  #
  #   # Customize the amount of memory on the VM:
    vb.memory = "2048"
    vb.customize ["modifyvm", :id, "--audio", "none"] # <----- our new line is here
  end
  #
```

And write your console `vagrant up` again. It's up. Bye!


_Cover photo:_ [_https://www.gerekliseyler.com.tr/urun/hark-a-vagrant_]
(https://www.gerekliseyler.com.tr/urun/hark-a-vagrant)
