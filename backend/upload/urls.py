from django.conf.urls import url

from .views import *

urlpatterns = [
    url('', FileUploadView.as_view())
]
