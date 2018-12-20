param([string[]]$params)
# 1st param -> name of the module              (ex: core)
# 2nd param -> name of the container component (Optional) Must be set to null if you dont need it
# 3rd param -> name of the component           (Optional) Must be set to null if you dont need it
# 4th param -> name of the guard               (Optional) Must be set to null if you dont need it
# 5th param -> name of the store entity        (Optional) Must be set to null if you dont need it

# The command must be executed from the folder in which you want to generate the module
# Example of a command buildmodule.ps1 core, person-new-modal, null, null, person, null, person
# The above example command will generate everything for a module without the component, guards, and helper model

#Output structure:

# /core (module)
# 	/components
# 	/containers
# 	/guards
# 	/models -> do not import models from other modules even we duplicate code
# 		/api
# 			person.model.ts
# 		/helpers
# 	/services
# 		/api
# 			person.service.ts
# 		core.service.ts (contains business logic)
# 		redux.service.ts (contains dispatches for actions)
#     mock.service.ts (contains mocked data models - used for testing)
# 		helper.service.ts (contains helper functions ex: sorting)
# 		validator.service.ts (contains custom validations)
# 		index.ts
# 	/store
# 		/actions
            # index.ts
            # person.actions.ts
# 		/effects
            # index.ts
            # person.effects.ts
# 		/reducers
            # index.ts
            # person.reducers.ts
# 		/selectors
            # index.ts
            # person.selectors.ts
      # index.ts
# 	core.module.ts (includes routing)

# TBD: 1. can it help that there is an export clause inside index.ts files for current folder content?
#      2. an option to add a routing file?..
#      3. core.service ts and spec.ts should be renamed to <module>.service ts and spec.ts
ng g m $params[0]
Set-Location -Path $params[0] -PassThru
mkdir components
mkdir containers
mkdir guards
mkdir models
mkdir services
mkdir store
Set-Location -Path components -PassThru
if ($params[2] -ne 'null') {
  ng g c $params[2]
}
Set-Location -Path .. -PassThru
Set-Location -Path containers -PassThru
if ($params[1] -ne 'null') {
  ng g c $params[1]
}
New-Item index.ts -ItemType file
Set-Location -Path .. -PassThru
Set-Location -Path guards -PassThru
if ($params[3] -ne 'null') {
  ng g g $params[3]
}
Set-Location -Path .. -PassThru
Set-Location -Path models -PassThru
mkdir api
Set-Location -Path api -PassThru
if ($params[4] -ne 'null') {
ng g i $params[4] --type=model
}
Set-Location -Path .. -PassThru
mkdir helpers
Set-Location -Path helpers -PassThru
if ($params[5] -ne 'null') {
  ng g i $params[5] --type=model
}
Set-Location -Path .. -PassThru
Set-Location -Path .. -PassThru
Set-Location -Path services -PassThru
mkdir api
Set-Location -Path api
if ($params[6] -ne 'null') {
  ng g s $params[6]
}
New-Item index.ts -ItemType file
Set-Location -Path .. -PassThru
ng g s $params[0]
ng g s redux
ng g s mock
ng g s helper
ng g s validator
New-Item index.ts -ItemType file
Set-Location -Path .. -PassThru
Set-Location -Path store -PassThru
mkdir actions
mkdir effects
mkdir reducers
mkdir selectors
Set-Location -Path actions -PassThru
New-Item index.ts -ItemType file
if ($params[6] -ne 'null') {
    New-Item ("{0}.actions.ts" -f $params[6]) -ItemType file
}
Set-Location -Path .. -PassThru
Set-Location -Path effects -PassThru
New-Item index.ts -ItemType file
if ($params[6] -ne 'null') {
    New-Item ("{0}.effects.ts" -f $params[6]) -ItemType file
}
Set-Location -Path .. -PassThru
Set-Location -Path reducers -PassThru
New-Item index.ts -ItemType file
if ($params[6] -ne 'null') {
    New-Item ("{0}.reducers.ts" -f $params[6]) -ItemType file
}
Set-Location -Path .. -PassThru
Set-Location -Path selectors -PassThru
New-Item index.ts -ItemType file
if ($params[6] -ne 'null') {
    New-Item ("{0}.selectors.ts" -f $params[6]) -ItemType file
}
Set-Location -Path .. -PassThru
New-Item index.ts -ItemType file
Set-Location -Path .. -PassThru