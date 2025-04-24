from rest_framework import viewsets
from .models import *
from .serializers import *

class CoursesViewSet(viewsets.ModelViewSet):
    queryset = Courses.objects.all()
    serializer_class = CourseSerializer

class contactViewSet(viewsets.ModelViewSet):
    queryset = Contact.objects.all()
    serializer_class = ContactSerializer

class PlacementViewSet(viewsets.ModelViewSet):
    queryset = Placement.objects.all()
    serializer_class = PlacementSerializer
class ReviewViewSet(viewsets.ModelViewSet): 
    queryset = Review.objects.all()
    serializer_class = ReviewSerializer   