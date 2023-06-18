#### ISPC

##### HCP (Historial Clínico Personal) es un software que permite visualizar, editar y actualizar el historial clínico de un paciente por parte de un profesional de la salud. Actualmente se encuentra en desarrollo por estudiantes del ISPC (Instituto Superior Politécnico de Córdoba).

---

![PYTHON 3.9](https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white)![Django 3.2](https://img.shields.io/badge/Django-092E20?style=for-the-badge&logo=django&logoColor=white "3.2")![Angular](https://img.shields.io/badge/Angular-DD0031?style=for-the-badge&logo=angular&logoColor=white "Angular")

# HCP HISTORIA CLINICA PERSONAL

### Documentation:

1. [Django](https://docs.djangoproject.com/en/2.0/releases/2.0/)
2. [Django Rest Framework](https://www.django-rest-framework.org/)
3. [Angular](https://angular.io/)

### Instalacion:

##### Dependencias

1. Install git on Linux:  
   `sudo apt-get install -y git`
2. Clone or download this repo.
3. Install pip and vitualenv on Linux:  
   `sudo apt-get install -y virtualenv`  
   `sudo apt-get install -y python3-pip`
4. Create a virtual environment on Linux or Mac:  
   `virtualenv -p python3 ~/.virtualenvs/ISPC_2do_semestre_2022\Backend`
5. Activate the virtual environment on Linux or Mac:  
   `source ~/.virtualenvs/ISPC_2do_semestre_2022\Backend/bin/activate`
6. Install requirements in the virtualenv:  
   `pip3 install -r requirements.txt`

##### Usar interface Admin

1. Ir url administrador:
   `http://127.0.0.1:8000/admin/`
2. Ingresar Datos:  
   `Email: admin@mail.com y contraseña: admin`

### API Endpoints

##### Registrar

Method: `POST`  
Endpoint: `http://127.0.0.1:8000/api/paciente/signup/`  
Payload:  
`{
        "id": ,
        "cuil":,
        "nacimiento_p":,
        "nombre_p":,
        "apellido_p":,
        "telefono_p":,
        "direccion_p":,
        "mail_p":,
        "genero_p":,
        "sangre":,
        "password_p":,
        "premium":,
    }`

##### Login

Method: `POST`  
Endpoint: `http://127.0.0.1:8000/api/paciente/login/`  
Payload:  
`{  
     "cuil":,
    "password_p",
}`

##### Logout

Method: `POST`  
Endpoint: `http://127.0.0.1:8000/api/paciente/logout/`

### Credenciales Admin:

### Email: `admin@mail.com`

### Username: `admin`

### Password: `admin`

![Python 3.9](https://img.shields.io/badge/python-3.9-yellow.svg)
![Django 3.2](https://img.shields.io/badge/Django-3.2-green.svg)
![Angular15](https://img.shields.io/badge/Angular-15-red.svg)

## Levantar app

1. Clonar el repositorio
2. Ejecutar `npm install`
3. Moverse a la carpeta `Backend`
4. Activar entorno virtual
5. Levantar el servidor `python manage.py run server`
6. Ejecutar `ng serve -o`
