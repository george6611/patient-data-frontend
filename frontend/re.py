from django.shortcuts import render
from rest_framework import status
from django.http import JsonResponse
from rest_framework.decorators import api_view
from rest_framework.response import Response
from django.contrib.auth import login,logout
from django.contrib.auth.hashers import make_password
from django.contrib.auth import get_user_model

User = get_user_model()


from .models import Admin
from .models import Hospital
from .models import Employee
from .models import Patient

from .serializers import EmployeeSerializer 
from .serializers import PatientSerializer

@api_view(['POST'])
def create_admin(request):
    if request.method == 'POST':
        data = request.data
        

        
        # Hash the password before saving it
        hashed_password = make_password(data.get('password'))
        
        # Create a User instance
        user_instance = User.objects.create_user(
            email=data['data']['email'],
            password=hashed_password
        )
        
        # Create an Admin instance associated with the created User instance
        admin_instance = Admin.objects.create(
            user=user_instance,
            firstName=data['data']['firstName'],
            surName=data['data']['surName'],
            hospitalName=data['data']['hospitalName'],
            userType=data['data']['userType']
        )

        return Response({'result': 'Admin created successfully'})
    else:
        return Response({'error': 'Method not allowed'}, status=405)
        
@api_view(['POST'])
def login_view(request):
    if request.method == 'POST':
        email = request.data.get('email')
        password = request.data.get('password')

        try:
            user = Admin.objects.get(email=email)
        except Admin.DoesNotExist:
            user = None

        if user is not None and user.check_password(password):
            
            login(request, user)
            return JsonResponse({'message': 'Login successful'})
        elif user is None:
            return JsonResponse({'error': 'User does not exist'}, status=400)
        else:
            return JsonResponse({'error': 'Invalid credentials'}, status=400)

@api_view(['POST'])
def logout_view(request):
    if request.method == 'POST':
        logout(request)
        return JsonResponse({'message': 'Logout successful'})
    
def some_view(request):
    user = request.user  # Access the current user

@api_view(['POST'])
def hospital_details(request):
    if request.method == 'POST':
        data = request.data
        
        # Validate certificate file
        certificate_file = request.FILES.get('certificate')
        if not certificate_file:
            return Response({'error': 'Certificate file is required'}, status=status.HTTP_400_BAD_REQUEST)
        
        # Determine main branch
        has_branches = data.get('branches', 'No') == 'Yes'
        is_main_branch = data.get('mainBranch', 'No') == 'Yes'
        main_branch = data.get('mainBranch', '') if is_main_branch else data.get('mainBranchName', '')
        
        # Create hospital instance
        hospital = Hospital(
            name=data.get('hospitalName', ''),
            registration_id=data.get('hospitalNumber', ''),
            email=data.get('hospitalEmail', ''),
            phone_number=data.get('hospitalPhoneNumber', ''),
            phone_number_2=data.get('hospitalPhoneNumber2', ''),
            phone_number_3=data.get('hospitalPhoneNumber3', ''),
            telephone=data.get('hospitalTelePhone', ''),
            physical_address=data.get('physicalAddress', ''),
            town=data.get('town', ''),
            location=data.get('location', ''),
            sub_county=data.get('subCounty', ''),
            county=data.get('county', ''),
            license_certificate=certificate_file,
            has_branches=has_branches,
            is_main_branch=is_main_branch,
            main_branch=main_branch
        )
        
        # Save hospital instance
        try:
            hospital.save()
            return Response({'result': 'Hospital details saved successfully'}, status=status.HTTP_201_CREATED)
        except Exception as e:
            return Response({'error': str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
    else:
        return Response({'error': 'Method not allowed'}, status=status.HTTP_405_METHOD_NOT_ALLOWED)

@api_view(['POST'])
def create_patient(request):
    if request.method == 'POST':
        data = request.data
        patient = Patient(
            first_name=data.get('firstName',''),
            sur_name=data.get('surName',''),
            last_name=data.get('lastName',''),
            unique_number=data.get('uniqueNumber',''),
            phone_number=data.get('phoneNumber',''),
            email=data.get('email',''),
            date_of_birth=data.get('dob',''),
            physical_address=data.get('physicalAddress','')
        )
        try:
            patient.save()
            return Response({'result': 'Employee created successfully'})
        except Exception as e:
            return Response ({ 'error': str(e)}, status=500)
    else:
        return Response({'error': 'Method not alloweed'}, status=405)
        
@api_view(['POST'])
def create_employee(request):
    if request.method == 'POST':
        data = request.data
        employee = Employee(
            full_name=data.get('staffName', ''),
            email=data.get('staffEmail', ''),
            phone_number=data.get('phoneNumber', ''),
            profession=data.get('profession', ''),
            department=data.get('dept', ''),
            position=data.get('position', ''),
            date_of_recruitment=data.get('dor', ''),
            license_info=data.get('license', '')
        )
        try:
            employee.save()
            return Response({'result': 'Employee created successfully'})
        except Exception as e:
            return Response({'error': str(e)}, status=500)
    else:
        return Response({'error': 'Method not allowed'}, status=405)
    
@api_view(['GET'])
def get_new_employees(request):
    new_employees = Employee.objects.order_by('-id')[:10]  # Fetch last 10 newly created employees
    serializer = EmployeeSerializer(new_employees, many=True)
    return Response(serializer.data)

@api_view(['GET'])
def search_employee(request):
    query = request.GET.get('q', '')
    if query:
        employees = Employee.objects.filter(full_name__icontains=query) | \
                    Employee.objects.filter(email__icontains=query) | \
                    Employee.objects.filter(phone_number__icontains=query)
    else:
        employees = Employee.objects.all()
    serializer = EmployeeSerializer(employees, many=True)
    return Response(serializer.data)   

@api_view(['PUT'])
def update_employee(request, selectedEmployee_id):
    try:
        employee = Employee.objects.get(pk=selectedEmployee_id)
    except Employee.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    serializer = EmployeeSerializer(employee, data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)     

@api_view(['GET'])
def get_new_patients(request):
    new_patients = Patient.objects.order_by('-id')[:10]  # Fetch last 10 newly created employees
    serializer = PatientSerializer(new_patients, many=True)
    return Response(serializer.data)

@api_view(['GET'])
def search_patient(request):
    query = request.GET.get('q', '')
    if query:
        patients = Patient.objects.filter(first_name__icontains=query) | \
                    Patient.objects.filter(email__icontains=query) | \
                    Patient.objects.filter(phone_number__icontains=query)
    else:
        patients = Patient.objects.all()
    serializer = PatientSerializer(patients, many=True)
    return Response(serializer.data) 