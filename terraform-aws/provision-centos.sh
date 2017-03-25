#! /bin/bash

yum update -y
yum install -y git
yum install -y epel-release
yum install -y ruby
yum install -y wget
yum install -y vim
yum install -y screen
yum install -y tmux

#disable SELinux
setenforce 0

# set up the CodeDeploy agent
cd /tmp/
wget https://aws-codedeploy-us-west-2.s3.amazonaws.com/latest/install
chmod +x /tmp/install
/tmp/install auto

# install NodeJS
wget http://nodejs.org/dist/v0.10.30/node-v0.10.30-linux-x64.tar.gz -P /tmp/
tar --strip-components 1 -xzvf node-v0.10.30-linux-x64.tar.gz -C /usr/

#install Bower and bower-move
npm install -g bower bower-move
