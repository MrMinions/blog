from django.db import models
class tImage(models.Model):
	name=models.CharField(max_length=30)
	data=models.CharField(max_length=350)
	img=models.ImageField(upload_to = './img')
class Text(models.Model):
	name=models.CharField(max_length=30)
	text=models.CharField(max_length=1024)