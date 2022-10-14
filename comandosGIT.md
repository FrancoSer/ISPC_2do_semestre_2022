# Guía de comandos GIT. Por [Kwa](https://github.com/01Kwa)📦
#### Me basare en un repositorio remoto existente.


Clono el repositorio remoto al local

`git clone linkRepositorio`
# Flujo de trabajo
![image](https://user-images.githubusercontent.com/106926932/193685394-99751c1e-3cf1-488b-ab7a-861bc995faba.png)





# REPOSITORIO
* ### Añadir archivos
Debe indicar nombre o formato. Para añadir todos los archivos sería "**.**"

`git add nombreArchivo`
***
* ### Deshacer cambios(Aréa de trabajo)
`git restore archivoNombre` 
***
* ### Cargar archivos(Repositorio Local)
`git commit -m "mensaje indicando que cambias y/o agregas, usalo :)"` 
***

* ### Ver estado de archivos
Muestra el estado del aréa de trabajo y aréa de preparación.

`git status`
***
* ### Ver log
Muestra el estado de Local Repository. Commits realizados.

`git log`
***
* ### Subir archivos(Repositorio Remoto)
**-u** Actualiza todas las branchs.

`git push -u origin branchASubir`





# BRANCH
* ### Ver posición de branch

`git branch`

***
* ### Crear branch

`git branch nombreBranch`

***
* ### Cambiar nombre branch

Debe posicionarse en la branch que desea actualizar. Al cambiar se posicionara en dicha branch.

`git branch -m nombreNuevo`

***
* ### Borrar branch

#### Borrar branch local

`git branch -d localBranchNombre`

***
#### Borrar branch remota

`git push origin --delete remoteBranchNombre`
***
