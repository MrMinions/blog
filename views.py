from django.http import HttpResponse
from django.shortcuts import render_to_response
from .models import Text,tImage
def home(request):
	a=Text.objects.get(id=1)
	b=tImage.objects.get(id=1)
	
	d={"a":a,"b":b}
	return render_to_response('index.html',d)
def intro(request):
	return render_to_response('intro.html')
def story(request):
	return render_to_response('story.html')
def upload(request):
	return render_to_response('upload.html')