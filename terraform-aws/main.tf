# Create a new instance of the latest Ubuntu 14.04 on an
# t2.micro node with an AWS Tag naming it "HelloWorld"
provider "aws" {
  region = "us-west-2"
}

resource "aws_eip" "lb" {
  instance = "${aws_instance.instance.id}"
  vpc      = true
}

resource "aws_instance" "instance" {
	ami = "ami-d2c924b2"
  instance_type = "t2.micro"
  iam_instance_profile = "ec2_instance_profile"
  security_groups = ["allow_ssh_http"]
  key_name = "MyKeyPair"
  tags {
    Name = "HelloWorld"
  }
  provisioner "file" {
	source="provision-centos.sh"
	destination="/tmp/provision-centos.sh"
	connection {
		type="ssh"
		user="centos"
		private_key="${file("private.pem")}"
		timeout="5m"
	}
  }
  provisioner "remote-exec" {
	inline = [
		"chmod +x /tmp/provision-centos.sh && sudo /tmp/provision-centos.sh"
	]
	connection {
		type="ssh"
		user="centos"
		private_key="${file("private.pem")}"
		timeout="5m"
	}
  }
}
