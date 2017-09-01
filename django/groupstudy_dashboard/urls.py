"""groupstudy_dashboard URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/1.10/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  url(r'^$', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  url(r'^$', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.conf.urls import url, include
    2. Add a URL to urlpatterns:  url(r'^blog/', include('blog.urls'))
"""
from django.conf import settings
from django.conf.urls import url, include
from django.contrib import admin
from django.contrib.auth.decorators import login_required
from django.http import HttpResponseServerError
from django.template.loader import render_to_string
from django.views.generic import TemplateView

urlpatterns = [
    url(r'^admin/', include(admin.site.urls)),
    url(r'^api/', include('group.urls')),
    url(r'^api/', include('accounts.urls')),
    url(r'^api/comments/', include('comments.urls')),
    url(r'^api/uploads/', include('uploads.urls')),
    url(r'^login/', TemplateView.as_view(template_name='index.html'), name='login_view'),
    url(r'^', login_required(TemplateView.as_view(template_name='index.html')), name='home'),
]

if settings.DEBUG:
    def errorpage(request):
        return HttpResponseServerError(
              content=render_to_string('500.html', request=request))

    from django.conf.urls.static import static
    urlpatterns += [
        url(r'^404.html$', TemplateView.as_view(template_name='404.html')),
        url(r'^500.html', errorpage, name='500'),
    ]
