from django.contrib.auth.models import AbstractBaseUser
from django.db import models


# Create your models here.
class CustomUser(AbstractBaseUser):
    first_name = models.CharField(max_length=50)
    last_name = models.CharField(max_length=50)
    email = models.EmailField(unique =True)
    # username = models.CharField(max_length=50,unique=True)
    phone_number = models.CharField(max_length=12)
    hosi_user_type = models.CharField(max_length=50)
    date_joined = models.DateTimeField()
    is_active = models.BooleanField()

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['email']

    def __str__(self):
        return self.email

class  AdminUser(models.Model):
  user = models.OneToOneField(CustomUser, on_delete=models.CASCADE)
  hospital_name = models.CharField(max_length=50)
  admin_type =  models.CharField(max_length=50)
  previous_admin_role =  models.CharField(max_length=50)
  starting_date = models.DateField()
  ended_date = models.DateField()