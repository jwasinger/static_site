output "eip address" {
  value = "${aws_eip.lb.public_ip}"
}
