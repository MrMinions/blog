from django.conf.urls import patterns, include, url
from django.contrib import admin
import settings
urlpatterns = patterns('',
    # Examples:
    # url(r'^$', 'history.views.home', name='home'),
    # url(r'^blog/', include('blog.urls')),
    url(r'^$', 'history.views.home'),
    url(r'^intro.html$', 'history.views.intro'),
    url(r'^story.html$', 'history.views.story'),
    url(r'^upload.html$', 'history.views.upload'),
    url(r'^media/(?P<path>.*)$','django.views.static.serve',
 	{'document_root': settings.MEDIA_ROOT, 'show_indexes':True}),
    url(r'^admin/', include(admin.site.urls)),
)
