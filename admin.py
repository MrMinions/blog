from django.contrib import admin
from .models import tImage
from .models import Text

class ImageInfoAdmin(admin.ModelAdmin):
	list_display = ("name",)

class TextInfoAdmin(admin.ModelAdmin):
	list_display = ("name","text")

admin.site.register(tImage,ImageInfoAdmin)
admin.site.register(Text,TextInfoAdmin)
